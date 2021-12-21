(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{32:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(25),c=n.n(s),i=(n(32),n(5)),l=n(24),o=n(3),d=n(9),j=n(2),u=n.n(j),b=n(4),h=n(7),m=n(8),O=n(11),x=n(10),p=n(0);function v(e){return e.visible&&Object(p.jsx)("div",{className:"position-absolute vh-100 vw-100 d-flex justify-content-center align-items-center bg-secondary opacity-75",children:Object(p.jsx)("div",{className:"spinner-border text-light",role:"status",children:Object(p.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})}var f,g,y=n(17),N=null!==(f=null===(g=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}))||void 0===g?void 0:g.apiURL)&&void 0!==f?f:"https://dm885.smessie.com";function k(e){return Object(y.a)(e).reduce((function(e,t){return t.name&&(e[t.name]=t.value),e}),{})}var w=function(){function e(){Object(h.a)(this,e)}return Object(m.a)(e,null,[{key:"rawCall",value:function(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;return fetch("".concat(N,"/").concat(n),{method:t,headers:Object(i.a)(Object(i.a)({"Content-Type":"application/json"},a),{},{Authorization:e.accessToken?"Bearer ".concat(e.accessToken):void 0}),body:r?JSON.stringify(r):void 0}).then((function(e){return 404===e.status?{error:!0}:e.json()})).catch((function(s){return console.error("".concat(N,"/").concat(n),{method:t,headers:Object(i.a)(Object(i.a)({"Content-Type":"application/json"},a),{},{Authorization:e.accessToken?"Bearer ".concat(e.accessToken):void 0}),body:r?JSON.stringify(r):void 0},s),!1}))}},{key:"call",value:function(){var t=Object(b.a)(u.a.mark((function t(){var n,a,r,s,c,l,o=arguments;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=o.length>0&&void 0!==o[0]?o[0]:"GET",r=o.length>1?o[1]:void 0,s=o.length>2?o[2]:void 0,c=o.length>3&&void 0!==o[3]?o[3]:{},t.next=6,e.rawCall(a,r,Object(i.a)({Authorization:null!==(n=e.authToken)&&void 0!==n?n:void 0},c),s);case 6:if((l=t.sent)||!e.refreshToken){t.next=15;break}return t.next=10,e.getAccessToken();case 10:return t.next=12,e.call(a,r,s,c);case 12:return t.abrupt("return",t.sent);case 15:return t.abrupt("return",l);case 16:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"getAccessToken",value:function(){var t=Object(b.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.rawCall("POST","auth/accessToken",{},{refreshToken:e.refreshToken});case 2:(n=t.sent)&&!n.error?e.accessToken=n.accessToken:e.refreshToken=!1;case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}]),e}();w.authToken=!1,w.refreshToken=!1,w.accessToken=!1;var S=["Gecode","OR-tool"],T=["In queue","Computing","Completed"],D=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={loading:!1},e}return Object(m.a)(n,[{key:"checkLogin",value:function(){var e=Object(b.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({loading:!0}),n=k(t.target.elements),e.next=5,w.call("POST","auth/login",n);case 5:(a=e.sent)&&!a.error?(this.props.history.push("/"),this.props.setRefreshToken(a.refreshToken,a.userRank)):(alert("Wrong username, or password."),this.setState({loading:!1}));case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"d-flex justify-content-center align-items-center vh-100",children:[Object(p.jsx)(v,{visible:this.state.loading}),Object(p.jsxs)("form",{onSubmit:function(t){return e.checkLogin(t)},className:"d-flex flex-column align-self-center w-25",children:[Object(p.jsx)("label",{children:"Username:"}),Object(p.jsx)("input",{name:"username",className:"form-control",type:"input"}),Object(p.jsx)("label",{children:"Password:"}),Object(p.jsx)("input",{name:"password",className:"form-control",type:"password"}),Object(p.jsx)("button",{className:"btn btn-primary mt-3",children:"Sign in"}),Object(p.jsx)("div",{className:"d-flex justify-content-center pt-2",children:Object(p.jsx)(d.b,{to:"/signup",children:"New user"})})]})]})}}]),n}(r.a.Component),C=Object(o.f)(D),E=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={user:[]},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;w.call("get","users").then((function(t){t&&!t.error&&e.setState({user:t.data})}))}},{key:"isInt",value:function(e){return/^\+?(0|[1-9]\d*)$/.test(e)}},{key:"render",value:function(){var e=this;return Object(p.jsx)("div",{className:"container pt-4",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-md-12",children:[Object(p.jsx)("h1",{children:"User List"}),Object(p.jsxs)("table",{className:"table table-striped",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"ID"}),Object(p.jsx)("th",{children:"Username"}),Object(p.jsx)("th",{children:"Rank"}),Object(p.jsx)("th",{}),Object(p.jsx)("th",{}),Object(p.jsx)("th",{children:"Resource limit [vCPUs]"})]})}),Object(p.jsx)("tbody",{children:this.state.user.map((function(t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:t.id}),Object(p.jsx)("td",{children:t.email}),Object(p.jsx)("td",{children:t.rank}),Object(p.jsx)("td",{children:Object(p.jsx)("button",{className:"btn btn-danger",onClick:function(){w.call("DELETE","users/".concat(t.id)).then((function(t){t&&!t.error&&e.getData()})),setTimeout((function(){return window.location.reload()}),2e3)},children:"Delete"})}),Object(p.jsx)("td",{children:Object(p.jsx)("button",{className:"btn btn-danger",onClick:function(){w.call("GET","users/".concat(t.id,"/clearQueue")).then((function(t){t&&!t.error&&(e.getData(),alert(t.message))}))},children:"Clear queue"})}),Object(p.jsx)("td",{children:Object(p.jsxs)("button",{className:"btn btn-secondary",onClick:function(){var n=prompt("Set recourse limit for user: "+t.email,t.solverLimit);!0===e.isInt(n)?w.call("PUT","users/".concat(t.id,"/resourceLimit/").concat(n)).then((function(a){e.getData(),a&&!a.error&&alert("The recourse limit for user ".concat(t.email," has been updated to ").concat(n,"."))})):alert("The recourse limit for user ".concat(t.email," has not been updated. Please enter a valid number."))},children:["Change (",t.solverLimit,")"]})})]},t.id)}))})]})]})})})}}]),n}(r.a.Component),I=Object(o.f)(E),L=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={solvers:[],editing:!1},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.call("GET","solvers");case 2:(t=e.sent)&&!t.error&&this.setState({solvers:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete it?")){e.next=6;break}return e.next=4,w.call("DELETE","solvers/"+t);case 4:return e.next=6,this.getData();case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"save",value:function(){var e=Object(b.a)(u.a.mark((function e(t){var n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=k(t.target.elements),a="number"===typeof this.state.editing,e.next=5,a?w.call("PUT","solvers/"+this.state.editing,n):w.call("POST","solvers",n);case 5:(r=e.sent)&&!r.error?(this.setState({editing:!1}),this.getData()):alert("A unkown error happened, try again");case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t="number"===typeof this.state.editing,n="new"===this.state.editing,a=t?this.state.solvers[this.state.editing]:{};return Object(p.jsxs)("div",{className:"container pt-4",children:[(t||n)&&Object(p.jsxs)("div",{className:"pb-2 mb-2 border-bottom",children:[Object(p.jsx)("h1",{children:t?"Editing solver":"New solver"}),Object(p.jsxs)("form",{onSubmit:function(t){return e.save(t)},children:[Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-sm-2",children:Object(p.jsx)("label",{htmlFor:"name",children:"Solver name"})}),Object(p.jsx)("div",{className:"col-sm-10 pb-1",children:Object(p.jsx)("input",{className:"form-control",name:"name",required:!0,defaultValue:null===a||void 0===a?void 0:a.name})}),Object(p.jsx)("div",{className:"col-sm-2",children:Object(p.jsx)("label",{htmlFor:"name",children:"Image"})}),Object(p.jsx)("div",{className:"col-sm-10",children:Object(p.jsx)("input",{className:"form-control",name:"docker_image",required:!0,defaultValue:null===a||void 0===a?void 0:a.docker_image})})]}),Object(p.jsx)("button",{className:"btn btn-light",children:"Save"})]})]}),Object(p.jsx)("h1",{children:"Solvers"}),Object(p.jsx)("button",{onClick:function(){return e.setState({editing:"new"})},className:"btn btn-primary",children:"New solver"}),Object(p.jsxs)("table",{className:"table",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"col",children:"#"}),Object(p.jsx)("th",{scope:"col",children:"Name"}),Object(p.jsx)("th",{scope:"col",children:"Image"})]})}),Object(p.jsx)("tbody",{children:this.state.solvers.map((function(t,n){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"row",children:t.id}),Object(p.jsx)("td",{children:t.name}),Object(p.jsx)("td",{children:t.docker_image}),Object(p.jsxs)("td",{children:[Object(p.jsx)("button",{onClick:function(){return e.setState({editing:n})},className:"btn m-1 mt-0 mb-0 btn-secondary",children:"Edit"}),Object(p.jsx)("button",{onClick:function(){return e.delete(t.id)},className:"btn btn-danger",children:"Delete"})]})]},t.id)}))})]})]})}}]),n}(r.a.Component),A=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={loading:!1},e}return Object(m.a)(n,[{key:"signUp",value:function(){var e=Object(b.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),0!==(n=k(t.target.elements)).username.length){e.next=6;break}alert("A username is required"),e.next=20;break;case 6:if(0!==n.password.length){e.next=10;break}alert("A password is required"),e.next=20;break;case 10:if(n.password===n.passwordRepeat){e.next=14;break}alert("The two given password are not the same"),e.next=20;break;case 14:return this.setState({loading:!0}),e.next=17,w.call("POST","auth/register",n);case 17:a=e.sent,this.setState({loading:!1}),a&&!a.error?(alert("Your user has been created!"),this.props.history.push("/")):alert("A unkown error orcurred, try again");case 20:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"d-flex justify-content-center align-items-center vh-100",children:[Object(p.jsx)(v,{visible:this.state.loading}),Object(p.jsxs)("form",{onSubmit:function(t){return e.signUp(t)},className:"d-flex flex-column align-self-center w-25",children:[Object(p.jsx)("label",{children:"Username:"}),Object(p.jsx)("input",{name:"username",required:!0,className:"form-control",type:"input"}),Object(p.jsx)("label",{children:"Password:"}),Object(p.jsx)("input",{name:"password",required:!0,className:"form-control",type:"password"}),Object(p.jsx)("label",{children:"Repeat password:"}),Object(p.jsx)("input",{name:"passwordRepeat",required:!0,className:"form-control",type:"password"}),Object(p.jsx)("button",{className:"btn btn-primary mt-3",children:"Create account"}),Object(p.jsx)("div",{className:"d-flex justify-content-center pt-2",children:Object(p.jsx)(d.b,{to:"/",children:"Go back"})})]})]})}}]),n}(r.a.Component),F=Object(o.f)(A),R=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).emptyState={outputs:{},history:[],models:[],data:[]},e.state=Object(i.a)({},e.emptyState),e.shouldGetData=!0,e}return Object(m.a)(n,[{key:"componentWillMount",value:function(){this.setState(Object(i.a)({},this.emptyState))}},{key:"componentDidMount",value:function(){var e=this;this.getData(),setTimeout((function(){return e.getInt()}),3e3)}},{key:"componentWillUnmount",value:function(){this.shouldGetData=!1}},{key:"getInt",value:function(){var e=this;this.shouldGetData&&this.getData(0).then((function(t){setTimeout((function(){return e.getInt()}),3e3)}))}},{key:"delete",value:function(){var e=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete it?")){e.next=6;break}return e.next=4,w.call("DELETE","files/".concat(t));case 4:e.sent&&this.getData();case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getData",value:function(){var e=Object(b.a)(u.a.mark((function e(){var t,n,a=this,r=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,e.next=3,w.call("GET","jobs");case 3:(n=e.sent)&&!n.error&&this.setState({history:n.data.map((function(e){return e.timeRunning=0,1===e.status?e.timeRunning=Date.now()-Number(e.startTime):2===e.status&&(e.timeRunning=Number(e.endTime)-Number(e.startTime)),e}))}),1===t&&(w.call("GET","files/all/0").then((function(e){e&&!e.error&&a.setState({models:e.results})})),w.call("GET","files/all/1").then((function(e){e&&!e.error&&a.setState({data:e.results})})));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadOutput",value:function(){var e=Object(b.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.call("GET","jobs/"+t);case 2:(n=e.sent)&&!n.error&&((a=Object(i.a)({},this.state.outputs))[t]=JSON.parse(n.data.content),this.setState({outputs:a}));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"deleteJob",value:function(){var e=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this job?")){e.next=6;break}return e.next=4,w.call("DELETE","jobs/"+t);case 4:return e.next=6,this.getData(0);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"toMinutes",value:function(e){return Math.floor(e/864e5)+"d "+Math.floor(e%864e5/36e5)+"h "+Math.round(e%864e5%36e5/6e4)+"m "+Math.round(e%864e5%36e5%6e4/1e3)+"s"}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"container pt-4",children:[Object(p.jsx)("div",{className:"row align-items-start",children:Object(p.jsx)("div",{className:"col-md-12",children:Object(p.jsxs)("div",{className:"card card-body",children:[Object(p.jsx)("h3",{className:"text-center",children:"History"}),Object(p.jsxs)("table",{className:"table table-hover",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"#"}),Object(p.jsx)("th",{children:"Running time"}),Object(p.jsx)("th",{children:"Status"}),Object(p.jsx)("th",{})]})}),Object(p.jsx)("tbody",{children:Object(p.jsx)("tr",{})})]}),Object(p.jsx)("div",{style:{maxHeight:"30vh",overflow:"auto"},children:Object(p.jsx)("table",{className:"table table-hover",children:Object(p.jsx)("tbody",{children:this.state.history.map((function(t){var n=e.state.outputs[t.id];return Object(p.jsxs)(r.a.Fragment,{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:t.id}),Object(p.jsx)("td",{children:0!==t.status&&e.toMinutes(t.timeRunning)}),Object(p.jsx)("td",{children:1===t.status?Object(p.jsx)("div",{className:"spinner-border text-primary",role:"status"}):T[t.status]}),Object(p.jsxs)("td",{children:[2===t.status&&Object(p.jsx)("button",{className:"btn btn-secondary",onClick:function(){return e.loadOutput(t.id)},children:"Output"}),t.status<=1&&Object(p.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.deleteJob(t.id)},children:"Remove"})]})]}),n&&Object(p.jsx)("tr",{children:Object(p.jsx)("td",{colSpan:"4",children:Object(p.jsxs)("table",{className:"table table-info table-striped",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"col",children:"Optimal?"}),Object(p.jsx)("th",{scope:"col"})]})}),Object(p.jsx)("tbody",{children:n.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.optimal&&Object(p.jsx)("b",{children:"Yes"})}),Object(p.jsx)("td",{children:e.result.join(", ")})]},e.id)}))})]})})})]},t.id)}))})})})]})})}),Object(p.jsx)("div",{className:"row pt-1",children:Object(p.jsx)(d.b,{to:"/newRun",className:"d-grid gap-2",children:Object(p.jsx)("button",{type:"button",className:"btn btn-primary",children:"Start new run!"})})}),Object(p.jsxs)("div",{className:"row pt-4",children:[Object(p.jsxs)("div",{className:"col-md-6",children:[Object(p.jsxs)("div",{className:"card card-body",children:[Object(p.jsx)("h3",{className:"text-center",children:"Models"}),Object(p.jsxs)("table",{className:"table table-hover",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"#"}),Object(p.jsx)("th",{children:"Name"})]})}),Object(p.jsx)("tbody",{children:this.state.models.map((function(t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:t.fileId}),Object(p.jsx)("td",{children:t.filename}),Object(p.jsx)("td",{children:Object(p.jsx)(d.b,{to:"/model/".concat(t.id),className:"text-dark",children:Object(p.jsx)("i",{className:"bi bi-pencil-square"})})}),Object(p.jsx)("td",{children:Object(p.jsx)("i",{onClick:function(){return e.delete(t.fileId)},role:"button",className:"bi bi-trash"})})]},t.id)}))})]})]}),Object(p.jsx)(d.b,{to:"/model/new",children:Object(p.jsx)("button",{type:"button",className:"btn btn-primary mt-1 w-100",children:"Create new model!"})})]}),Object(p.jsxs)("div",{className:"col-md-6",children:[Object(p.jsxs)("div",{className:"card card-body",children:[Object(p.jsx)("h3",{className:"text-center",children:"Data"}),Object(p.jsxs)("table",{className:"table table-hover",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"#"}),Object(p.jsx)("th",{children:"Name"})]})}),Object(p.jsx)("tbody",{children:this.state.data.map((function(t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:t.fileId}),Object(p.jsx)("td",{children:t.filename}),Object(p.jsx)("td",{children:Object(p.jsx)(d.b,{to:"/data/".concat(t.fileId),className:"text-dark",children:Object(p.jsx)("i",{className:"bi bi-pencil-square"})})}),Object(p.jsx)("td",{children:Object(p.jsx)("i",{onClick:function(){return e.delete(t.fileId)},role:"button",className:"bi bi-trash"})})]},t.id)}))})]})]}),Object(p.jsx)(d.b,{to:"/data/new",children:Object(p.jsx)("button",{type:"button",className:"btn btn-primary mt-1 w-100",children:"Create new dataset!"})})]})]})]})}}]),n}(r.a.Component),M=n(15),P=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).newSolver={solver:S[0],flagA:!1,flagF:!1,cpuLimit:1,memoryLimit:0,timeLimit:0},e.state={models:[],data:[],currentModel:0,currentDataset:0,solverData:[],solvers:[]},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;w.call("GET","files/all/0").then((function(t){t&&!t.error&&(console.log("Got resp",t),e.setState({models:t.results}))})),w.call("GET","files/all/1").then((function(t){t&&!t.error&&e.setState({data:t.results})})),w.call("GET","solvers").then((function(t){t&&!t.error&&e.setState({solverData:t.data})}))}},{key:"updateSolver",value:function(e,t,n){var a=Object(y.a)(this.state.solvers),r=Object(i.a)({},a[n]);r[e]=t,a[n]=r,this.setState({solvers:a})}},{key:"addSolver",value:function(){this.setState({solvers:[].concat(Object(y.a)(this.state.solvers),[Object(i.a)({},this.newSolver)])})}},{key:"save",value:function(){var e=Object(b.a)(u.a.mark((function e(){var t,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t={model:this.state.currentModel,dataset:this.state.currentDataset,solvers:Object(y.a)(this.state.solvers)},n=t.solvers.some((function(e){return!e.solverID||-1===e.solverID})),0!==t.model){e.next=6;break}alert("A valid model needs to be choosen"),e.next=18;break;case 6:if(0!==t.solvers.length){e.next=10;break}alert("You need atleast one solver"),e.next=18;break;case 10:if(!n){e.next=14;break}alert("A solver should be specified"),e.next=18;break;case 14:return e.next=16,w.call("POST","jobs",t);case 16:(a=e.sent)&&!a.error?(alert("Your run has been saved!"),this.props.history.push("/")):alert("Something went wrong, try again.");case 18:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"container pt-4",children:[Object(p.jsx)("h1",{children:"New run"}),Object(p.jsx)("label",{children:"Model:"}),Object(p.jsx)("div",{className:"dropdown",children:Object(p.jsxs)("select",{className:"form-select form-select-lg mb-2",onChange:function(t){return e.setState({currentModel:Number(t.target.value)})},defaultValue:this.state.currentModel,"aria-label":".form-select-lg",style:{width:"40%"},children:[Object(p.jsx)("option",{value:"0",children:"Choose a model"}),this.state.models.map((function(e){return Object(p.jsx)("option",{value:e.fileId,children:e.filename},e.fileId)}))]})}),Object(p.jsx)("label",{children:"Dataset:"}),Object(p.jsx)("div",{className:"dropdown",children:Object(p.jsxs)("select",{className:"form-select form-select-lg mb-2",onChange:function(t){return e.setState({currentDataset:Number(t.target.value)})},defaultValue:this.state.currentDataset,"aria-label":".form-select-lg",style:{width:"40%"},children:[Object(p.jsx)("option",{value:"0",children:"Choose a dataset"}),this.state.data.map((function(e){return Object(p.jsx)("option",{value:e.fileId,children:e.filename},e.fileId)}))]})}),this.state.solvers.map((function(t,n){var a;return Object(p.jsxs)("div",{className:"pt-4 pb-4 border-top",children:[Object(p.jsx)("label",{htmlFor:"solver",children:Object(p.jsxs)("h5",{children:["Solver #",n+1]})}),Object(p.jsxs)("select",{onChange:function(t){return e.updateSolver("solverID",Number(t.target.value),n)},className:"form-select form-select-lg mb-2","aria-label":".form-select-lg example",id:"solver",children:[Object(p.jsx)("option",{id:"-1",children:"Please select a solver"}),e.state.solverData.map((function(e,t){return Object(p.jsx)("option",{value:e.id,children:e.name},t)}))]}),Object(p.jsx)("h6",{children:"Flags"}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-sm-4",children:Object(p.jsx)("label",{htmlFor:"flagA",children:"All solutions?"})}),Object(p.jsx)("div",{className:"col-sm-8",children:Object(p.jsx)("input",{type:"checkbox",id:"flagA",onChange:function(t){return e.updateSolver("flagA",t.target.checked,n)},defaultChecked:t.flagA,name:"flagA"})}),Object(p.jsx)("div",{className:"col-sm-4",children:Object(p.jsx)("label",{htmlFor:"flagF",children:"Free search?"})}),Object(p.jsx)("div",{className:"col-sm-8",children:Object(p.jsx)("input",{type:"checkbox",onChange:function(t){return e.updateSolver("flagF",t.target.checked,n)},id:"flagF",defaultChecked:t.flagF,name:"flagF"})}),Object(p.jsx)("div",{className:"col-sm-4",children:Object(p.jsx)("label",{htmlFor:"cpuLimit",children:"vCPU's"})}),Object(p.jsx)("div",{className:"col-sm-8",children:Object(p.jsx)("input",(a={type:"number",min:"1",onChange:function(t){return e.updateSolver("cpuLimit",Number(t.target.value),n)}},Object(M.a)(a,"min","0"),Object(M.a)(a,"defaultValue",t.cpuLimit),Object(M.a)(a,"id","cpuLimit"),Object(M.a)(a,"name","cpuLimit"),a))}),Object(p.jsx)("div",{className:"col-sm-4",children:Object(p.jsx)("label",{htmlFor:"memoryLimit",children:"Memory [mb] (0 = not set)"})}),Object(p.jsx)("div",{className:"col-sm-8",children:Object(p.jsx)("input",{type:"number",onChange:function(t){return e.updateSolver("memoryLimit",Number(t.target.value),n)},min:"0",defaultValue:t.memoryLimit,id:"memoryLimit",name:"memoryLimit"})}),Object(p.jsx)("div",{className:"col-sm-4",children:Object(p.jsx)("label",{htmlFor:"timeLimit",children:"Time limit [ms] (0 = not set)"})}),Object(p.jsx)("div",{className:"col-sm-8",children:Object(p.jsx)("input",{type:"number",onChange:function(t){return e.updateSolver("timeLimit",Number(t.target.value),n)},min:"0",defaultValue:t.timeLimit,id:"timeLimit",name:"timeLimit"})})]})]},n)})),Object(p.jsxs)("div",{className:"btn-group mr-2",role:"group",children:[Object(p.jsx)("button",{onClick:function(){return e.save()},className:"btn btn-primary mt-2",children:"Save"}),Object(p.jsx)("button",{onClick:function(){return e.addSolver()},className:"btn btn-secondary mt-2",children:"New solver"})]})]})}}]),n}(r.a.Component),G=Object(o.f)(P),U=[".mzn",".dzn"],q=["model","data"],_=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={name:"",content:""},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("new"===this.props.match.params.id){e.next=5;break}return e.next=3,w.call("GET","files/".concat(this.props.match.params.id));case 3:(t=e.sent)&&!t.error&&this.setState({name:t.filename,content:t.data});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"save",value:function(){var e=Object(b.a)(u.a.mark((function e(t){var n,a,r,s,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),0!==(n=k(t.target.elements)).filename.length){e.next=6;break}alert("The name input is required for the "+q[this.props.type]),e.next=13;break;case 6:return a="new"!==this.props.match.params.id,r=a?"files/"+this.props.match.params.id:"files",s=a?"PUT":"POST",e.next=11,w.call(s,r,Object(i.a)(Object(i.a)({},n),{},{data:this.state.content,filetype:this.props.type}));case 11:(c=e.sent)&&!c.error?(alert("The "+q[this.props.type]+" has been saved!"),this.props.history.push("/")):alert("Something went wrong, try again");case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"parseFile",value:function(e){var t=this,n=e.target.files[0],a=new FileReader;a.onload=function(e){t.setState({content:e.target.result})},a.readAsText(n)}},{key:"render",value:function(){var e=this,t=q[this.props.type],n="new"!==this.props.match.params.id;return Object(p.jsx)("div",{className:"container pt-4",children:Object(p.jsxs)("form",{onSubmit:function(t){return e.save(t)},children:[Object(p.jsx)("h1",{children:n?"Edit "+t:"New "+t}),Object(p.jsxs)("div",{className:"form-group pb-2",children:[Object(p.jsx)("label",{for:"nameInp",children:"Name"}),Object(p.jsx)("input",{type:"input",disabled:n,defaultValue:this.state.name,className:"form-control",id:"nameInp",name:"filename",placeholder:"".concat(t," name")})]}),Object(p.jsxs)("div",{className:"form-group pb-2",children:[Object(p.jsx)("label",{for:"contentInp",children:"Model"}),Object(p.jsx)("input",{id:"contentInp",type:"file",onChange:function(t){return e.parseFile(t)},accept:U[this.props.type],className:"form-control"})]}),Object(p.jsx)("button",{className:"btn btn-primary mt-2",children:"Save"})]})})}}]),n}(r.a.Component),V=Object(o.f)(_),J=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={logs:[]},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;w.call("GET","logs").then((function(t){t&&!t.error&&e.setState({logs:t.data})}))}},{key:"render",value:function(){return Object(p.jsx)("div",{className:"container pt-8",children:Object(p.jsx)("div",{className:"row align-items-start",children:Object(p.jsx)("div",{className:"col-md-12",children:Object(p.jsxs)("div",{className:"card card-body mt-4",children:[Object(p.jsx)("h3",{className:"text-center",children:"Logs"}),Object(p.jsxs)("table",{className:"table table-hover mb-1",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"#"}),Object(p.jsx)("th",{children:"id"}),Object(p.jsx)("th",{children:"Session"}),Object(p.jsx)("th",{children:"Request"}),Object(p.jsx)("th",{children:"Path"}),Object(p.jsx)("th",{children:"Timestamp"})]})}),Object(p.jsx)("tbody",{children:Object(p.jsx)("tr",{})})]}),Object(p.jsx)("div",{style:{maxHeight:"70vh",overflow:"auto"},children:Object(p.jsx)("table",{className:"table table-hover",children:Object(p.jsx)("tbody",{children:this.state.logs.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.id}),Object(p.jsx)("td",{children:e.userId}),Object(p.jsx)("td",{children:e.sessionId}),Object(p.jsx)("td",{children:e.requestId}),Object(p.jsx)("td",{children:e.logPath}),Object(p.jsx)("td",{children:e.timestamp})]},e.id)}))})})})]})})})})}}]),n}(r.a.Component);function H(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(1),c=Object(l.a)(s,2),j=c[0],u=c[1],b=function(e){w.refreshToken=e,r(e)};Object(a.useEffect)((function(){var e=localStorage.getItem("token"+N),t=localStorage.getItem("rank"+N);e&&t&&(u(t),b(e))}),[]);var h=function(e){return j>0&&Object(p.jsx)(o.a,Object(i.a)(Object(i.a)({},e),{},{children:e.children}))};return Object(p.jsx)(d.a,{children:n?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("nav",{className:"container-fluid navbar navbar-expand-lg navbar-light bg-light",children:[Object(p.jsx)(d.b,{className:"navbar-brand",to:"/",children:"MiniZinc"}),Object(p.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(p.jsx)("span",{className:"navbar-toggler-icon"})}),Object(p.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(p.jsxs)("ul",{className:"navbar-nav",children:[Object(p.jsx)("li",{className:"nav-item active",children:Object(p.jsx)(d.b,{className:"nav-link",to:"/",children:"Jobs"})}),j>0&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(d.b,{className:"nav-link",to:"/users",children:"Users"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(d.b,{className:"nav-link",to:"/solvers",children:"Solvers"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(d.b,{className:"nav-link",to:"/log",children:"Logs"})})]}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(d.b,{className:"nav-link",to:"/",onClick:function(){localStorage.removeItem("token"+N),u(1),b(!1)},children:"Sign out"})})]})})]}),Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{path:"/",exact:!0,children:Object(p.jsx)(R,{})}),Object(p.jsx)(o.a,{exact:!0,path:"/newRun",children:Object(p.jsx)(G,{})}),Object(p.jsx)(h,{exact:!0,path:"/users",children:Object(p.jsx)(I,{})}),Object(p.jsx)(h,{exact:!0,path:"/solvers",children:Object(p.jsx)(L,{})}),Object(p.jsx)(h,{exact:!0,path:"/log",children:Object(p.jsx)(J,{})}),Object(p.jsx)(o.a,{exact:!0,path:"/model/:id",children:Object(p.jsx)(V,{type:0})}),Object(p.jsx)(o.a,{exact:!0,path:"/data/:id",children:Object(p.jsx)(V,{type:1})}),Object(p.jsx)(o.a,{path:"*",children:Object(p.jsx)(R,{})})]})]}):Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{path:"/signup",children:Object(p.jsx)(F,{})}),Object(p.jsx)(o.a,{path:"*",children:Object(p.jsx)(C,{setRefreshToken:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;u(t),b(e),localStorage.setItem("token"+N,e),localStorage.setItem("rank"+N,t)}})})]})})}var W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(H,{})}),document.getElementById("root")),W()}},[[43,1,2]]]);
//# sourceMappingURL=main.265c33a5.chunk.js.map