(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4480],{1691:function(e,s,a){Promise.resolve().then(a.bind(a,40589))},78873:function(e,s,a){"use strict";a.r(s);var t=a(57437),i=a(16463),l=a(87138),r=a(23131),n=a.n(r),o=a(62949),d=a(55801),c=a(66648),u=a(17850),A=a(39381),h=a(14245),g=a(2265),m=a(77964),x=a(88724),j=a(39987),p=a(78614);s.default=()=>{let e=(0,i.useRouter)(),[s,a]=(0,g.useState)(),[r,f]=(0,g.useState)(!1);(0,j.Z)();let w=(0,A.TA)({initialValues:{email:"",password:""},validationSchema:h.Ry({email:h.Z_().required("Email is required"),password:h.Z_().required("Password is required")}),onSubmit:async s=>{try{var t;f(!0);let i=await (0,u.x4)(s);(null==i?void 0:null===(t=i.data)||void 0===t?void 0:t.success)===!1&&a(null==i?void 0:i.data),localStorage.setItem("token",i.data.data.token),localStorage.setItem("id",i.data.data._id),localStorage.setItem("userData",JSON.stringify(i.data.data)),setTimeout(()=>{f(!1),e.push("/dashboard")},1e3)}catch(e){f(!1),console.log(e,"====")}}});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p.Z,{loading:r}),(0,t.jsxs)("div",{className:n().container,children:[(0,t.jsx)("div",{className:n().leftPane,children:(0,t.jsxs)("div",{className:n().LeftContainor,children:[(0,t.jsxs)("div",{className:n().registerLink,children:[(0,t.jsx)("span",{children:"Don't have an Account? "}),(0,t.jsx)(l.default,{href:"/signupW",passHref:!0,children:(0,t.jsx)("div",{className:n().RegisterButton,style:{textDecoration:"none"},children:"Register"})})]}),(0,t.jsxs)("div",{className:n().authBox,children:[(0,t.jsx)("h2",{className:n().WelcomeBack,children:"Welcome back!"}),(0,t.jsxs)("form",{onSubmit:w.handleSubmit,children:[(0,t.jsx)(o.Z,{name:"Email",type:"email",id:"email",placeholder:"Enter your Email",img1:(0,t.jsx)(d._r,{}),onChange:w.handleChange,onBlur:w.handleBlur,value:w.values.email}),w.touched.email&&w.errors.email?(0,t.jsx)("div",{style:{color:"red"},children:w.errors.email}):null,(0,t.jsx)(o.Z,{name:"Password",type:"password",id:"password",placeholder:"Enter your Password",img1:(0,t.jsx)(d.qu,{}),onChange:w.handleChange,onBlur:w.handleBlur,value:w.values.password}),w.touched.password&&w.errors.password?(0,t.jsx)("div",{style:{color:"red"},children:w.errors.password}):null,(0,t.jsx)("div",{className:n().forgotPassword,children:(0,t.jsx)("a",{href:"#",children:"Forgot your password?"})}),(0,t.jsx)("button",{type:"submit",className:n().authButton,style:{backgroundColor:"#14AED1",color:"wheat"},children:"Login"}),s?(0,t.jsx)("div",{style:{color:"red"},children:null==s?void 0:s.message}):null]}),(0,t.jsx)("div",{className:n().Linediv}),(0,t.jsxs)("div",{className:n().socialLogin,children:[(0,t.jsxs)("button",{type:"button",className:n().googleButton,children:[(0,t.jsx)(d.av,{className:n().googlelogo}),"Continue with Google"]}),(0,t.jsxs)("button",{type:"button",className:n().appleButton,children:[(0,t.jsx)(d.uZ,{className:n().googlelogo}),"Continue with Apple"]})]})]})]})}),(0,t.jsxs)("div",{className:n().rightPane,children:[(0,t.jsx)(c.default,{src:m.Z,alt:"Workout",className:n().Logoimg,height:136,width:450}),(0,t.jsx)("p",{className:n().textttt,children:"Where Coaching Meets Excellence"}),(0,t.jsx)(c.default,{src:x.Z,alt:"Workout",className:n().africnManstyle,width:500,height:400})]})]})]})}},78614:function(e,s,a){"use strict";a.d(s,{Z:function(){return r}});var t=a(57437),i=a(18747),l=a(81887),r=e=>{let{loading:s}=e;return(0,t.jsx)(i.R,{isOpen:s,children:(0,t.jsx)(l.I,{children:(0,t.jsx)("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.4)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999},children:(0,t.jsx)("img",{src:"/_next/static/media/loaderIcon.1f4b7ce2.gif",alt:"Loading...",style:{width:"50px",height:"50px"}})})})})}},40589:function(e,s,a){"use strict";a.r(s);var t=a(57437);a(2265);var i=a(78873);s.default=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(i.default,{})})},77964:function(e,s){"use strict";s.Z={src:"/_next/static/media/Logo.b0bd3d30.png",height:137,width:450,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAFVBMVEX////////////////////+/v7///8pyByhAAAAB3RSTlM+GzReLyl0m2WLywAAAAlwSFlzAAALEwAACxMBAJqcGAAAABpJREFUeJxjYGBjZWBhYGBkYGJmZGBgYGIEAAErABoMDsquAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2}},88724:function(e,s){"use strict";s.Z={src:"/_next/static/media/africanMan.13549e70.png",height:523,width:606,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAARVBMVEWEhIRiY2pwdX+tkoWNf3ygjoqKjJKUmp5tcHazs385RU80RE8iLziGd3TKs6+EfYCTe3dQSEgECg94fIQRGR+WhH+Ldm+8TxYIAAAAFHRSTlMBYMFyUh2PRjUF+1P3w3D054Xrw8hwthwAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA4SURBVHicJcVHDsAgDADBpdu0FCD/f2okmMuABmVLy5+lXdYFiKZ/ebgE/n7eaiMglJkFUEyd5QcofgF4vc8cGQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:7}}},function(e){e.O(0,[9802,5496,7615,5288,8596,7899,8472,4349,7052,5801,1781,2971,7023,1744],function(){return e(e.s=1691)}),_N_E=e.O()}]);