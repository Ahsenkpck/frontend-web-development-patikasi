(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],[,,,,,,,,function(t,e,n){t.exports=n(19)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(2),i=n.n(r),l=(n(13),n(5)),s=n(3),c=n(4),u=n(7),d=n(6);n(14);var m=function(t){var e=t.content,n=t.id;return o.a.createElement("div",{onClick:t.lineText,className:"d-flex align-items-center"},o.a.createElement("span",null,e),o.a.createElement("button",{value:n,onClick:t.deleteTodo,className:"btn btn-danger ml-auto"},"Sil"))};n(15);var f=function(t){return o.a.createElement("div",null,o.a.createElement("ul",null,t.todos.map((function(e){return o.a.createElement("li",{className:"list-group-item"},o.a.createElement(m,Object.assign({lineText:t.lineText,deleteTodo:t.deleteTodo},e,{key:e.id})))}))))},p=(n(16),n(17),function(t){var e=t.userInput,n=t.onInputChange,a=t.addItem;return o.a.createElement("form",{className:"input",onSubmit:function(t){t.preventDefault()}},o.a.createElement("input",{type:"text",value:e,onChange:n,className:"form-control"}),o.a.createElement("button",{onClick:a,className:"btn btn-primary"},"Ekle"))});n(18);var h=function(){return o.a.createElement("h1",null,"Todo List")},v=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).addItem=function(){var t=a.state.userInput;if(""!==a.state.userInput){var e={id:Math.random(),content:t};a.setState({todos:[].concat(Object(l.a)(a.state.todos),[e])},(function(){a.setState({userInput:""})}))}},a.onInputChange=function(t){var e=t.target.value;a.setState({userInput:e})},a.deleteTodo=function(t){var e=a.state.todos.filter((function(e){return e.id!=t.target.value}));a.setState({todos:e})},a.lineText=function(t){"text-line"!=t.target.firstChild.className?t.target.firstChild.className="text-line":t.target.firstChild.className=""},a.state={userInput:"",todos:[]},a}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(h,null),o.a.createElement(p,{userInput:this.state.userInput,onInputChange:this.onInputChange,addItem:this.addItem}),this.state.todos.length>0&&o.a.createElement("div",{className:"list"},o.a.createElement(f,{lineText:this.lineText,deleteTodo:this.deleteTodo,todos:this.state.todos})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.575b0e99.chunk.js.map