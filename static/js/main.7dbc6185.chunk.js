(this["webpackJsonptest-task"]=this["webpackJsonptest-task"]||[]).push([[0],{28:function(e,t,s){},30:function(e,t,s){},36:function(e,t,s){"use strict";s.r(t);var n,a=s(0),r=s.n(a),i=s(22),l=s.n(i),c=(s(28),s(5)),d=s.n(c),o=s(12),m=s(6),x=s(9),j=(s(30),s(16)),h=s(10);var b=function(e,t,s,a){var r=new h.GraphQLClient("https://test-task.expane.pro/api/graphql",{}),i=Object(h.gql)(n||(n=Object(o.a)(["\n\t\tmutation AddClient($firstName: String!, $lastName: String!, $phone: String, $avatarUrl: String) {\n\t\t\taddClient(firstName: $firstName, lastName: $lastName, phone: $phone, avatarUrl: $avatarUrl) {\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t\tphone\n\t\t\t\tavatarUrl\n\t\t\t}\n\t\t}\n\t"]))),l={firstName:e,lastName:t,phone:s,avatarUrl:a};console.log(l),r.request(i,l)},p=s(1);function u(e){var t=Object.assign({},e);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"flex align-center justify-evenly",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:"First Name"}),Object(p.jsx)("input",{type:"text",name:"firstName",defaultValue:t.firstName,ref:t.register({required:!0}),className:"border-2 outline-none rounded-lg  my-5 h-14 w-64 pl-4 text-lg mb-1",placeholder:"First Name"}),t.errors.firstName&&Object(p.jsx)("div",{className:"text-sm text-red-600 mb-2 text-center",children:"Enter Name"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:"Last Name"}),Object(p.jsx)("input",{type:"text",name:"lastName",defaultValue:t.lastName,ref:t.register({required:!0}),className:"border-2 outline-none rounded-lg  my-5 h-14 w-64 pl-4 text-lg mb-1",placeholder:"Last Name"}),t.errors.lastName&&Object(p.jsx)("div",{className:"text-sm text-red-600 mb-2 text-center",children:"Enter Surname"})]})]}),Object(p.jsx)("div",{className:"flex justify-center",children:Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{className:"mt-2",children:"Image URL"}),Object(p.jsx)("input",{type:"text",name:"imgURL",defaultValue:t.imgURL,ref:t.register({required:!0}),className:"border-2 outline-none rounded-lg  my-5 h-14 pl-4 text-lg",placeholder:"Image URL",style:{width:"575px"}}),t.errors.imgURL&&Object(p.jsx)("div",{className:"text-sm text-red-600 -mb-3 text-center",children:"Enter Image URL"})]})}),Object(p.jsx)("div",{className:"flex justify-center",children:Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:"Phone"}),Object(p.jsx)("input",{type:"text",name:"phone",defaultValue:t.phone,ref:t.register({required:!0}),className:"border-2 outline-none rounded-lg  my-5 h-14 pl-4 text-lg",placeholder:"Phone",style:{width:"575px"}}),t.errors.phone&&Object(p.jsx)("div",{className:"text-sm text-red-600 -mb-1 -mt-2 text-center",children:"Enter Phone number"})]})})]})}var f,g=function(e){var t=Object.assign({},e),s=Object(j.a)(),n=s.register,a=s.handleSubmit,r=s.errors,i=a((function(e){b(e.firstName,e.lastName,e.phone,e.imgURL),t.setDisplayModalAdd("none"),window.location.reload()}));return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"fixed flex w-full h-full items-center justify-center",style:{display:t.displayModalAdd},children:[Object(p.jsx)("div",{className:"bg-gray-500  w-full h-full opacity-60",onClick:function(){t.setDisplayModalAdd("none")}}),Object(p.jsxs)("div",{className:"absolute bg-white rounded-lg ",style:{width:"700px",height:"600px"},children:[Object(p.jsx)("h1",{className:"my-10 mx-20 text-3xl font-bold mb-6",children:"Add client"}),Object(p.jsxs)("form",{className:"flex flex-col align-center",onSubmit:i,children:[Object(p.jsx)(u,{errors:r,register:n}),Object(p.jsxs)("div",{className:"flex align-center justify-evenly mt-5",children:[Object(p.jsx)("div",{children:Object(p.jsx)("button",{type:"submit",onClick:function(){},className:"inline-flex justify-center  items-center px-4 py-1 border border-transparent  rounded-md shadow-sm text-sm font-medium text-white bg-green-500  hover:bg-green-600 focus:outline-none h-12 w-32",children:Object(p.jsx)("p",{className:"text-xl",children:"Add"})})}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{type:"reset",className:"flex items-center justify-center px-4 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none h-12 w-32",children:Object(p.jsx)("p",{className:"text-xl",children:"Reset"})})})]})]})]})]})})},N=s.p+"static/media/edit.ede6d49c.svg";var O=function(e){var t=Object.assign({},e),s=Object(j.a)(),n=s.register,a=s.handleSubmit,r=s.errors,i=a((function(e){!function(e,t,s,n,a){var r=new h.GraphQLClient("https://test-task.expane.pro/api/graphql",{}),i=Object(h.gql)(f||(f=Object(o.a)(["\n\t\tmutation UpdateClient($id: ID!, $firstName: String!, $lastName: String!, $phone: String, $avatarUrl: String) {\n\t\t\tupdateClient(id: $id, firstName: $firstName, lastName: $lastName, phone: $phone, avatarUrl: $avatarUrl) {\n\t\t\t\tid\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t\tphone\n\t\t\t\tavatarUrl\n\t\t\t}\n\t\t}\n\t"]))),l={id:e,firstName:t,lastName:s,phone:n,avatarUrl:a};console.log(l),r.request(i,l)}(t.id,e.firstName,e.lastName,e.phone,e.imgURL),t.setDisplayModalEdit("none"),window.location.reload()}));return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"fixed top-0 left-0 flex w-full h-full items-center justify-center",style:{display:t.displayModalEdit},children:[Object(p.jsx)("div",{className:"bg-gray-500  w-full h-full opacity-60",onClick:function(){t.setDisplayModalEdit("none")}}),Object(p.jsxs)("div",{className:"absolute bg-white rounded-lg ",style:{width:"700px",height:"600px"},children:[Object(p.jsx)("h1",{className:"my-10 mx-20 text-3xl font-bold mb-6",children:"Edit client"}),Object(p.jsxs)("form",{className:"flex flex-col align-center",onSubmit:i,children:[Object(p.jsx)(u,{firstName:t.firstName,register:n,errors:r,lastName:t.lastName,imgURL:t.imgURL,phone:t.phone}),Object(p.jsxs)("div",{className:"flex align-center justify-evenly mt-5",children:[Object(p.jsx)("div",{children:Object(p.jsx)("button",{type:"submit",onClick:function(){},className:"flex flex-col justify-center  align-center px-4 py-1 border border-transparent  rounded-md shadow-sm text-sm font-medium text-white bg-green-500  hover:bg-green-600 focus:outline-none h-14 w-42",children:Object(p.jsx)("p",{className:"text-base",children:"Close and Save"})})}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{type:"reset",onClick:function(){t.setDisplayModalEdit("none")},className:"flex flex-col align-center justify-center px-4 py-1 border border-transparent  rounded-md shadow-sm text-sm font-medium text-white bg-red-500  hover:bg-red-600 focus:outline-none h-14 w-42",children:Object(p.jsx)("p",{className:"text-base",children:"Close without saving"})})})]})]})]})]})})};var v,y=function(e){var t=Object.assign({},e),s=Object(a.useState)("none"),n=Object(x.a)(s,2),r=n[0],i=n[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(O,{displayModalEdit:r,setDisplayModalEdit:i,id:t.id,firstName:t.firstName,lastName:t.lastName,imgURL:t.imgURL,phone:t.phone}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-base",children:t.id}),Object(p.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:Object(p.jsxs)("div",{className:"flex items-center",children:[Object(p.jsx)("div",{className:"flex-shrink-0 h-11 w-12",children:null!=t.imgURL?Object(p.jsx)("img",{src:t.imgURL,alt:"",className:t.className}):Object(p.jsx)("p",{children:"0"})}),Object(p.jsx)("div",{className:"ml-4",children:Object(p.jsx)("div",{className:"text-base font-medium text-gray-900",children:t.firstName+" "+t.lastName})})]})}),Object(p.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:Object(p.jsx)("div",{className:"text-base text-gray-900",children:t.phone})}),Object(p.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:Object(p.jsxs)("button",{type:"button",onClick:function(){i("flex")},className:"inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-700 focus:outline-none",children:[Object(p.jsx)("img",{src:N,className:"mr-2",alt:""}),"Edit"]})})]})]})},w=s(40),U=s(23),L=s(41),S=new w.a;function k(){var e=Object(L.a)("clients",C),t=e.data,s=e.status;return"success"===s?t.getClients.map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{id:Number,firstName:String,lastName:String,phone:String,avatarUrl:String},t=arguments.length>1?arguments[1]:void 0;return Object(p.jsx)(y,{id:e.id,firstName:e.firstName,lastName:e.lastName,imgURL:e.avatarUrl,phone:e.phone,className:"h-12 w-12 rounded-full"},t)})):"loading"===s?Object(p.jsx)("div",{className:"text-center",children:"Load..."}):"error"===s?Object(p.jsx)("div",{children:"Error..."}):void 0}var C=function(){var e=Object(m.a)(d.a.mark((function e(){var t,s,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://test-task.expane.pro/api/graphql",t=new h.GraphQLClient("https://test-task.expane.pro/api/graphql",{}),s=Object(h.gql)(v||(v=Object(o.a)(["\n\t\t{\n\t\t\tgetClients {\n\t\t\t\tid\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t\tphone\n\t\t\t\tavatarUrl\n\t\t\t}\n\t\t}\n\t"]))),e.next=5,t.request(s);case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(a.useState)("none"),t=Object(x.a)(e,2),s=t[0],n=t[1];return Object(a.useEffect)((function(){C(),C().catch((function(e){return console.error(e)}))}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(g,{displayModalAdd:s,setDisplayModalAdd:n}),Object(p.jsx)("div",{className:"flex flex-col",children:Object(p.jsx)("div",{className:"-my-2 overflow-x-auto ",children:Object(p.jsx)("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:Object(p.jsx)("div",{className:"shadow overflow-hidden border-b border-gray-200",children:Object(p.jsxs)("table",{className:"min-w-full divide-y divide-gray-200",children:[Object(p.jsx)("thead",{className:"bg-gray-50",children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xl font-medium text-gray-900 uppercase tracking-wider",children:"Id"}),Object(p.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xl font-medium text-gray-900 uppercase tracking-wider",children:"Name"}),Object(p.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xl font-medium text-gray-900 uppercase tracking-wider",children:"Phone"}),Object(p.jsx)("th",{scope:"col",className:"px-6 py-3 text-right text-xl font-medium text-gray-500 uppercase tracking-wider",children:Object(p.jsx)("span",{className:"sm:ml-3"})})]})}),Object(p.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:Object(p.jsx)(U.a,{client:S,children:Object(p.jsx)(k,{})})})]})})})})}),Object(p.jsx)("div",{style:{position:"fixed",right:"5%",bottom:"10%"},children:Object(p.jsx)("button",{type:"button",onClick:function(){n("flex")},style:{boxShadow:"0 5 10px rgba(0,0,0,0.5)"},className:"flex flex-col items-center justify-center border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none h-20 w-20",children:Object(p.jsx)("p",{className:"text-4xl",children:"+"})})})]})},R=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,42)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),n(e),a(e),r(e),i(e)}))};l.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)($,{})}),document.getElementById("root")),R()}},[[36,1,2]]]);
//# sourceMappingURL=main.7dbc6185.chunk.js.map