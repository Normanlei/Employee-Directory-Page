(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{25:function(e,a,t){e.exports=t(40)},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),o=t.n(l),c=(t(30),t(6));t(31),t(32);var m=function(e){return r.a.createElement("main",Object.assign({className:"wrapper"},e))},s=(t(33),t(42)),i=t(43),u=function(){return new Promise((function(e,a){fetch("/api/Employees").then((function(e){return e.json()})).then((function(a){e(a)})).catch((function(e){return a(e)}))}))},d=function(e){return new Promise((function(a,t){fetch("/api/add/Employees",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){a(e)})).catch((function(e){return t(e)}))}))};var p=function(e){var a=Object(n.useState)(),t=Object(c.a)(a,2),l=t[0],o=t[1],m=Object(n.useState)("male"),u=Object(c.a)(m,2),p=u[0],g=u[1],f=Object(n.useState)(),h=Object(c.a)(f,2),E=h[0],b=h[1],v=Object(n.useState)(),y=Object(c.a)(v,2),N=y[0],j=y[1],O=Object(n.useState)("fullstack"),S=Object(c.a)(O,2),C=S[0],w=S[1],F=Object(n.useState)(),P=Object(c.a)(F,2),k=P[0],x=P[1];return r.a.createElement(s.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(s.a.Header,{closeButton:!0},r.a.createElement(s.a.Title,{id:"contained-modal-title-vcenter"},"Adding Employee")),r.a.createElement(s.a.Body,null,r.a.createElement("form",{className:"search form-group"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"language"},"Name:"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"First Name + Last Name",onChange:function(e){o(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"gender"},"Gender:"),r.a.createElement("select",{className:"gender form-control",onChange:function(e){console.log(e.target.value),g(e.target.value)}},r.a.createElement("option",{value:"Male"},"Male"),r.a.createElement("option",{value:"Female"},"Female"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"example@example.com",onChange:function(e){b(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"phone"},"Phone:"),r.a.createElement("input",{type:"tel",className:"form-control",pattern:"([0-9]{3})[0-9]{3}-[0-9]{4}",placeholder:"Format:(123)456-7890",onChange:function(e){j(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"department"},"Department:"),r.a.createElement("select",{className:"department form-control",onChange:function(e){w(e.target.value)}},r.a.createElement("option",{value:"Full-Stack"},"Full-Stack"),r.a.createElement("option",{value:"Front-end"},"Front-end"),r.a.createElement("option",{value:"Back-end"},"Back-end")))),r.a.createElement("form",{action:"/upload",method:"POST",encType:"multipart/form-data"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"pic"},"Upload Profile Image:"),r.a.createElement("input",{type:"file",className:"form-control-file",name:"myImage",onChange:function(e){var a=e.target.files;x(a[0].name)}})),r.a.createElement("button",{className:"btn btn-success",type:"submit"},"Upload"))),r.a.createElement(s.a.Footer,null,r.a.createElement(i.a,{onClick:e.onHide},"Close"),r.a.createElement(i.a,{onClick:function(a){a.preventDefault();var t={name:l,gender:p,email:E,phone:N,department:C,image:k||"blank-template.jpg"};console.log(t),d(t).then((function(){e.loadPage(),e.onHide()}))}},"Submit")))};var g=function(e){var a=e.modalShow,t=e.setModalShow,n=e.loadPage;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("span",{className:"navbar-brand"},"Sqwash"),r.a.createElement("div",{className:"ml-auto"},r.a.createElement(i.a,{variant:"primary",onClick:function(){return t(!0)}},"Add Employee")),r.a.createElement(p,{loadPage:n,show:a,onHide:function(){return t(!1)}}))};t(36);var f=function(e){var a=e.handleFormSubmit,t=e.handleInputChange,n=e.handleOptionChange,l=e.renderAllEmployee;return r.a.createElement("form",{className:"search form-inline justify-content-center"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"language"},"Search:"),r.a.createElement("input",{name:"term",list:"term",type:"text",className:"form-control mx-2",placeholder:"search term",onChange:t})),r.a.createElement("div",{className:"form-group mx-3"},r.a.createElement("label",{htmlFor:"category"},"Search Category:"),r.a.createElement("select",{className:"category form-control mx-2",onChange:n},r.a.createElement("option",{value:"name"},"Name"),r.a.createElement("option",{value:"email"},"Email"),r.a.createElement("option",{value:"phone"},"Phone"),r.a.createElement("option",{value:"department"},"Department"))),r.a.createElement("button",{type:"submit",className:"btn btn-primary mx-3",onClick:a},"Search"),r.a.createElement("button",{type:"clear",className:"btn btn-danger mx-3",onClick:l},"clear"))};t(37);var h=function(e){return r.a.createElement("div",Object.assign({className:"container".concat(e.fluid?"-fluid":"")},e))},E=t(18);t(39);var b=function(e){var a=e.columns,t=e.data,n=Object(E.b)({columns:a,data:t},E.a),l=n.getTableProps,o=n.getTableBodyProps,c=n.headerGroups,m=n.rows,s=n.prepareRow;return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",Object.assign({className:"table table-striped table-borderless table-hover"},l()),r.a.createElement("thead",null,c.map((function(e){return r.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e){return r.a.createElement("th",Object.assign({scope:"col"},e.getHeaderProps(e.getSortByToggleProps())),e.render("Header"),r.a.createElement("span",null,e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""))})))}))),r.a.createElement("tbody",o(),m.map((function(e,a){return s(e),r.a.createElement("tr",e.getRowProps(),e.cells.map((function(e){var a="/uploads/"+(e.value?e.value:"blank-template.jpg");return"Image"===e.column.Header?r.a.createElement("td",e.getCellProps(),r.a.createElement("img",{className:"img-responsive",src:a,style:{width:"35px",height:"35px"}})):r.a.createElement("td",e.getCellProps(),e.render("Cell"))})))})))),r.a.createElement("br",null))},v=t(22);var y=function(e){return r.a.createElement("div",{role:"alert",className:"alert alert-".concat(e.type," fade in"),style:Object(v.a)({width:"80%",margin:"0 auto",marginTop:18},e.style)},e.children)};var N=function(){var e=Object(n.useState)(!1),a=Object(c.a)(e,2),t=a[0],l=a[1],o=[],s=r.a.useMemo((function(){return[{Header:"Image",accessor:"image"},{Header:"Name",accessor:"name"},{Header:"Gender",accessor:"gender"},{Header:"Email",accessor:"email"},{Header:"Phone",accessor:"phone"},{Header:"Department",accessor:"department"}]}),[]),i=Object(n.useState)(o),d=Object(c.a)(i,2),p=d[0],E=d[1],v=Object(n.useState)({search:"",category:"name",error:""}),N=Object(c.a)(v,2),j=N[0],O=N[1];Object(n.useEffect)((function(){u().then((function(e){E(o=e)}))}),[]);var S=function(){u().then((function(e){E(o=e)}))};return r.a.createElement(m,null,r.a.createElement(g,{modalShow:t,setModalShow:l,loadPage:S}),r.a.createElement(h,null,r.a.createElement(f,{handleFormSubmit:function(e){if(e.preventDefault(),j.search){var a=p.filter((function(e){return e[j.category].toLowerCase().includes(j.search.toLowerCase())}));E(a)}},handleInputChange:function(e){O({search:e.target.value,category:j.category,error:j.error})},handleOptionChange:function(e){O({search:j.search,category:e.target.value,error:j.error})},renderAllEmployee:S}),r.a.createElement(y,{type:"danger",style:{opacity:j.error?1:0,marginBottom:10}},j.error),r.a.createElement(b,{columns:s,data:p})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.823c6332.chunk.js.map