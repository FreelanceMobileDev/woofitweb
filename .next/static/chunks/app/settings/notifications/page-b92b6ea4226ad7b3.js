(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7211],{16343:function(t,i,e){Promise.resolve().then(e.bind(e,6264))},6264:function(t,i,e){"use strict";e.r(i);var n=e(57437),s=e(32105),a=e(4740),_=e(69907),o=e.n(_),c=e(2265);i.default=function(){let[t,i]=(0,c.useState)(!1),e=()=>{i(!t)};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.default,{children:(0,n.jsx)(a.Z,{children:(0,n.jsxs)("div",{className:o().right_div_data,children:[(0,n.jsxs)("div",{className:o().space_div,style:{marginTop:30},children:[(0,n.jsx)("div",{className:o().notificationText,children:"Push Notifications"}),(0,n.jsx)("div",{className:o().switchContainer,children:(0,n.jsx)("div",{className:"".concat(o().switchButton," ").concat(t?o().on:o().off),onClick:e,children:(0,n.jsx)("div",{className:o().switchCircle})})})]}),(0,n.jsxs)("div",{className:o().space_div,style:{marginTop:30},children:[(0,n.jsx)("div",{className:o().notificationText,children:"Email Notifications"}),(0,n.jsx)("div",{className:o().switchContainer,children:(0,n.jsx)("div",{className:"".concat(o().switchButton," ").concat(t?o().on:o().off),onClick:e,children:(0,n.jsx)("div",{className:o().switchCircle})})})]}),(0,n.jsxs)("div",{className:o().space_div,style:{marginTop:30},children:[(0,n.jsx)("div",{className:o().notificationText,children:"Offers"}),(0,n.jsx)("div",{className:o().switchContainer,children:(0,n.jsx)("div",{className:"".concat(o().switchButton," ").concat(t?o().on:o().off),onClick:e,children:(0,n.jsx)("div",{className:o().switchCircle})})})]})]})})})})}},4740:function(t,i,e){"use strict";var n=e(57437),s=e(2265),a=e(23131),_=e.n(a),o=e(55801),c=e(16463);i.Z=t=>{let{children:i}=t,e=(0,c.useRouter)(),a=(0,c.usePathname)(),[l,r]=(0,s.useState)("/settings/profile");(0,s.useEffect)(()=>{let t=a.replace("/settings/","");"/settings"==a&&e.push("/settings/profile"),r(t||"/settings/profile")},[a]);let d=t=>{"Logout"===t?window.confirm("Are you sure you want to logout?")&&(console.log("User clicked OK, logging out..."),localStorage.clear(),e.push("/")):e.push("/settings/".concat(t))},g=[{id:1,icon:(0,n.jsx)(o.m2,{}),label:"Profile",url:"profile"},{id:2,icon:(0,n.jsx)(o.Tl,{}),label:"Services",url:"services"},{id:3,icon:(0,n.jsx)(o.sh,{}),label:"Notifications",url:"notifications"},{id:4,icon:(0,n.jsx)(o.wI,{}),label:"Integrations",url:"integrations"},{id:5,icon:(0,n.jsx)(o.XA,{}),label:"FAQs",url:"faq"},{id:6,icon:(0,n.jsx)(o.CE,{}),label:"Support",url:"support"},{id:7,icon:(0,n.jsx)(o.CE,{}),label:"Logout",url:"Logout"}],u=t=>a.startsWith("/settings/".concat(t));return(0,n.jsxs)("div",{style:{backgroundColor:"#fff"},children:[(0,n.jsx)("div",{className:_().Setting_texttt,children:"Settings"}),(0,n.jsxs)("div",{className:_().settingScreenContainer,children:[(0,n.jsx)("div",{className:_().settingSidebar,children:(0,n.jsx)("ul",{className:_().navList,children:g.map(t=>(0,n.jsx)("li",{className:"".concat(_().navItem," ").concat(u(t.url)?_().activeNavItem:""),onClick:()=>d(t.url),children:(0,n.jsxs)("div",{className:_().navItemContent,children:[(0,n.jsxs)("div",{className:_().icon_and_namee,children:[t.icon,(0,n.jsx)("span",{className:_().navItemLabel,children:t.label})]}),7!==t.id&&(0,n.jsx)(o.dA,{})]})},t.id))})}),i]})]})}},69907:function(t){t.exports={switchContainer:"Setting_switchContainer__au8Tc",switchButton:"Setting_switchButton__f0Vzn",on:"Setting_on___kl05",off:"Setting_off__me23b",switchCircle:"Setting_switchCircle__t4mue",right_div_data:"Setting_right_div_data__6vhrb",space_div:"Setting_space_div__UftKi",total_rate:"Setting_total_rate__fRicZ",add_rate:"Setting_add_rate__gOiSO",rates_div:"Setting_rates_div__3mffO",rate_txtt:"Setting_rate_txtt__YPjhm",row:"Setting_row__V2Y2J",rate_amount:"Setting_rate_amount__8taAb",notificationText:"Setting_notificationText__zlYV4",container:"Setting_container__615vl",integrationItem:"Setting_integrationItem__QomWr",integrationInfo:"Setting_integrationInfo__Q5WxT",textContainer:"Setting_textContainer__F06y6",name:"Setting_name__5x82I",description:"Setting_description__eQiGU",actions:"Setting_actions__VcmYi",button:"Setting_button__vxkwl",connectButton:"Setting_connectButton__dlai2",disconnectButton:"Setting_disconnectButton__DCIrL",switch:"Setting_switch__gWzA3",slider:"Setting_slider__O8xP5",faqContainer:"Setting_faqContainer__Jkia5",faqItem:"Setting_faqItem__BNUFK",question:"Setting_question__rb5yp",arrow:"Setting_arrow__ieSxj",answer:"Setting_answer__qKXy8",ContachUstxt:"Setting_ContachUstxt__oek0P",Email_div:"Setting_Email_div__uks_e",emailtxtt:"Setting_emailtxtt__fEAYU",popupDisplay:"Setting_popupDisplay__pvyWB",popupHide:"Setting_popupHide__gCHf_",popupContent:"Setting_popupContent__xKBoI",closeButton:"Setting_closeButton__Nh4Mc",formGroup:"Setting_formGroup__GKMKS",submitButton:"Setting_submitButton__lFwMv",greycrossicon:"Setting_greycrossicon__7i5qL",popheadertxt:"Setting_popheadertxt__TxB_5",AddClientButton:"Setting_AddClientButton__Oodq7",comment_div_2:"Setting_comment_div_2__qArG7",Title_div_2:"Setting_Title_div_2__v_kVz"}}},function(t){t.O(0,[9802,5496,7615,781,7059,5288,8596,8762,7052,5801,2105,2971,7023,1744],function(){return t(t.s=16343)}),_N_E=t.O()}]);