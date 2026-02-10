import type { Meta, StoryObj } from "@storybook/react-vite";

import { waitFor, waitForElementToBeRemoved } from "storybook/test";

import { http, HttpResponse } from "msw";
import { MockedState } from "./TaskList.stories";

import { useRef, type ReactNode } from "react";
import { Provider } from "react-redux";

import InboxScreen from "./InboxScreen";

import { makeStore } from "../lib/store";

function ReduxStoreProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<ReturnType<typeof makeStore> | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}

const meta = {
  component: InboxScreen,
  title: "InboxScreen",
  decorators: [
    (Story) => (
      <ReduxStoreProvider>
        <Story />
      </ReduxStoreProvider>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof InboxScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("https://jsonplaceholder.typicode.com/todos?userId=1", () => {
          return HttpResponse.json(
            MockedState.tasks.map((task) => ({
              id: Number(task.id),
              title: task.title,
              completed: task.state === "TASK_ARCHIVED",
            })),
          );
        }),
      ],
    },
  },
  play: async ({ canvas, userEvent }) => {
    // Waits for the component to transition from the loading state
    await waitForElementToBeRemoved(await canvas.findByTestId("loading"));
    // Waits for the component to be updated based on the store
    await waitFor(async () => {
      // Simulates pinning the first task
      await userEvent.click(canvas.getByLabelText("pinTask-1"));
      // Simulates pinning the third task
      await userEvent.click(canvas.getByLabelText("pinTask-3"));
    });
  },
};

export const Error: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("https://jsonplaceholder.typicode.com/todos?userId=1", () => {
          return new HttpResponse(null, {
            status: 403,
          });
        }),
      ],
    },
  },
};
