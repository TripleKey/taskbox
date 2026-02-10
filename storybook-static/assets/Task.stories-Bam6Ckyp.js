import{j as a}from"./jsx-runtime-u17CrQMm.js";function c({task:{id:e,title:i,state:n},onArchiveTask:u,onPinTask:d}){return a.jsxs("div",{className:`list-item ${n}`,children:[a.jsxs("label",{htmlFor:`archiveTask-${e}`,"aria-label":`archiveTask-${e}`,className:"checkbox",children:[a.jsx("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${e}`,checked:n==="TASK_ARCHIVED"}),a.jsx("span",{className:"checkbox-custom",onClick:()=>u(e)})]}),a.jsx("label",{htmlFor:`title-${e}`,"aria-label":i,className:"title",children:a.jsx("input",{type:"text",value:i,readOnly:!0,name:"title",id:`title-${e}`,placeholder:"Input title"})}),n!=="TASK_ARCHIVED"&&a.jsx("button",{className:"pin-button",onClick:()=>d(e),id:`pinTask-${e}`,"aria-label":`pinTask-${e}`,children:a.jsx("span",{className:"icon-star"})},`pinTask-${e}`)]})}c.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  id: string;
  title: string;
  state: "TASK_ARCHIVED" | "TASK_INBOX" | "TASK_PINNED";
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"state",value:{name:"union",raw:'"TASK_ARCHIVED" | "TASK_INBOX" | "TASK_PINNED"',elements:[{name:"literal",value:'"TASK_ARCHIVED"'},{name:"literal",value:'"TASK_INBOX"'},{name:"literal",value:'"TASK_PINNED"'}],required:!0}}]}},description:"Composition of the task"},onArchiveTask:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Event to change the task to archived"},onPinTask:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Event to change the task to pinned"}}};const{fn:o}=__STORYBOOK_MODULE_TEST__,l={onArchiveTask:o(),onPinTask:o()},m={component:c,title:"Task",tags:["autodocs"],excludeStories:/.*Data$/,args:{...l}},t={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},s={args:{task:{...t.args.task,state:"TASK_PINNED"}}},r={args:{task:{...t.args.task,state:"TASK_ARCHIVED"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX"
    }
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED"
    }
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED"
    }
  }
}`,...r.parameters?.docs?.source}}};const p=["ActionsData","Default","Pinned","Archived"],k=Object.freeze(Object.defineProperty({__proto__:null,ActionsData:l,Archived:r,Default:t,Pinned:s,__namedExportsOrder:p,default:m},Symbol.toStringTag,{value:"Module"}));export{t as D,c as T,k as a};
