(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(e,a,t){e.exports=t(142)},142:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(86),c=t.n(l),o=t(175),i=t(190),m=t(199),s=t(206),d=t(192),u=t(208),E=t(207),x=t(197),g=t(189),p=t(209),f=t(210),h=t(211),b=t(212),y=t(87),S=t.n(y),F=t(105),v=t.n(F),w=t(80),O=t.n(w),j=t(106),C=t.n(j),k=t(107),I=t.n(k),L=t(108),T=t.n(L),A=t(116),R=t.n(A),D=t(117),P=t.n(D),z=t(118),M=t.n(z),N=t(119),q=t.n(N),B=t(120),G=t.n(B),Q=t(121),W=t.n(Q),U=t(122),J=t.n(U),K=t(9),H=t(201),Y=t(202),V=t(200),X=t(203),Z=t(98),$=t.n(Z);function _(){var e=Object(n.useState)(!1),a=Object(K.a)(e,2),t=a[0],l=a[1],c=function(e){return function(a){l(e)}};return r.a.createElement(b.a,{sx:{display:"flex",justifyContent:"right",alignItems:"center"}},r.a.createElement(o.a,null,r.a.createElement(b.a,{component:"div",sx:{display:"flex",alignItems:"center",height:"100%",position:"fixed"}},r.a.createElement($.a,{sx:{fontSize:"2.5rem",color:"#1854ba",paddingLeft:2},onClick:c(!0)})),r.a.createElement(m.a,{sx:{width:300,flexShrink:0,"& .MuiDrawer-paper":{width:300,boxSizing:"border-box",backgroundColor:"#e4eaef"}},anchor:"right",open:t,onClose:c(!1)})))}var ee=t(194),ae=t(191);function te(){var e=Object(n.useState)(""),a=Object(K.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),o=Object(K.a)(c,2),i=o[0],m=o[1],d=Object(n.useState)(""),u=Object(K.a)(d,2),E=u[0],x=u[1],g=Object(n.useState)(""),p=Object(K.a)(g,2),f=(p[0],p[1],Object(n.useState)("")),h=Object(K.a)(f,2),y=(h[0],h[1],Object(n.useState)("")),S=Object(K.a)(y,2),F=(S[0],S[1],Object(ee.a)({queryKey:["character","1"],queryFn:function(){return ae.a.get("https://swapi.dev/api/people/".concat("1","/"))}}));console.log(F.data);var v=Object(ee.a)({refetchInterval:1e3,queryKey:["getQuotes"],queryFn:function(){return(e=500,new Promise(function(a){return setTimeout(a,e)})).then(function(){return ae.a.get("https://api.quotable.io/random")}).then(function(e){return e.data});var e}}),w=v.isLoading,O=v.error,j=v.data;v.isFetching;return r.a.createElement(H.a,{maxWidth:!1,width:"100%",height:"auto"},r.a.createElement(b.a,{sx:{display:"flex",flexDirection:"column"}},r.a.createElement(b.a,{sx:{display:"flex",flexDirection:"column",marginLeft:"2rem",marginTop:"2rem",color:"#616975"}},r.a.createElement(s.a,{variant:"h4"},"ABC Donuts"),r.a.createElement(s.a,null,"123 s. 234. Provo"),r.a.createElement(Y.a,{container:!0,rowSpacing:2,m:"1",spacing:2},r.a.createElement(Y.a,{item:!0,sx:{height:"100%"},xs:6},r.a.createElement(V.a,{sx:{height:{xs:200,sm:300,md:400,lg:400,xl:650},backgroundColor:"#e4eaef",display:"flex",alignItems:"center",flexDirection:"column",color:"#616975"},elevation:3},r.a.createElement(s.a,{variant:"h4",sx:{padding:1}},"Tan StackQuery / Axios"),r.a.createElement(Y.a,{container:!0,sx:{alignItems:"center",justifyContent:"center"}},r.a.createElement(Y.a,{item:!0,xs:12,sx:{paddingTop:2,paddingRight:2,paddingLeft:2}},r.a.createElement(V.a,{bgcolor:"#FFFFFF",elevation:3,padding:"10px"},r.a.createElement(s.a,{variant:"h5",sx:{m:1,color:"#616975"}},w?"Loading Quotes...":O?r.a.createElement("span",null,"Error: ",O):"",t))),r.a.createElement(Y.a,{item:!0,xs:12,sx:{paddingLeft:2,paddingRight:2}},r.a.createElement(V.a,{bgcolor:"#FFFFFF",elevation:3,padding:"10px"},r.a.createElement(s.a,{sx:{m:1,color:"#616975"}},w?"Loading Authors...":O?r.a.createElement("span",null,"Error: ",O):"",r.a.createElement("span",null,i)))),r.a.createElement(Y.a,{item:!0,xs:12,sx:{paddingLeft:2,paddingRight:2,paddingBottom:1}},r.a.createElement(V.a,{bgcolor:"#FFFFFF",elevation:3,padding:"10px"},r.a.createElement(s.a,{sx:{m:1,color:"#616975"}},w?"Loading Date...":O?r.a.createElement("span",null,"Error: ",O):"",r.a.createElement("span",null,E)))),r.a.createElement(Y.a,{item:!0,xs:12,sx:{display:"flex",justifyContent:"center"}},r.a.createElement(X.a,{sx:{justifyContent:"center",color:"#1854ba"},onClick:function(){l('Quote: "'+j.content+'"'),m("Author: "+j.author),x("Added Date: "+j.dateAdded)}},r.a.createElement("strong",null," Get a Quote")))))),r.a.createElement(Y.a,{item:!0,xs:6},r.a.createElement(V.a,{sx:{height:{xs:200,sm:300,md:400,lg:400,xl:650},backgroundColor:"#FFFFFF",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},elevation:0},r.a.createElement("svg",{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("circle",{cx:"50",cy:"50",r:"50",fill:"#e4eaef"})))),r.a.createElement(Y.a,{item:!0,xs:4},r.a.createElement(V.a,{sx:{height:{xs:10,sm:150,md:200,lg:200,xl:400},backgroundColor:"#e4eaef"},elevation:3},r.a.createElement(Y.a,{container:!0},r.a.createElement(Y.a,{item:!0,xs:12,elevation:3,sx:{m:1,height:200}},r.a.createElement(V.a,{sx:{height:"30%"}}))))),r.a.createElement(Y.a,{item:!0,xs:4},r.a.createElement(V.a,{sx:{height:{xs:10,sm:150,md:200,lg:200,xl:400},backgroundColor:"#e4eaef"},elevation:3})),r.a.createElement(Y.a,{item:!0,xs:4},r.a.createElement(V.a,{sx:{height:{xs:10,sm:150,md:200,lg:200,xl:400},backgroundColor:"#e4eaef"},elevation:3}))))))}function ne(){return r.a.createElement(b.a,{sx:{display:"flex"}},r.a.createElement(o.a,null,r.a.createElement(b.a,null,r.a.createElement(m.a,{sx:{width:240,flexShrink:0,"& .MuiDrawer-paper":{width:240,boxSizing:"border-box",backgroundColor:"#e4eaef"}},variant:"permanent",anchor:"left"},r.a.createElement(b.a,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:240,padding:1,paddingTop:4}},r.a.createElement(b.a,{sx:{display:"flex",flexDirection:"row",padding:1,alignItems:"center"}},r.a.createElement("img",{width:"auto",height:"60rem",src:S.a}),r.a.createElement(b.a,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",paddingLeft:1}},r.a.createElement(s.a,{variant:"h6",color:"#1854ba"},r.a.createElement(b.a,{component:"div",fontWeight:"bold"},"YOUR")),r.a.createElement(s.a,{variant:"h6",color:"#1854ba"},"BUSINESS"))),r.a.createElement(d.a,{type:"search",variant:"outlined",size:"small",placeholder:"Search",InputProps:{startAdornment:r.a.createElement(u.a,{position:"start"},r.a.createElement(v.a,null))},sx:{backgroundColor:"#FFFFFF",width:200}})),r.a.createElement(E.a,null,["CUSTOMERS","CAMPAIGNS","LOCATIONS","MESSAGES","REPORTS","LEARN MORE"].map(function(e,a){return r.a.createElement(x.a,{key:e,disablePadding:!0},r.a.createElement(g.a,null,r.a.createElement(p.a,{sx:{fontSize:"large",color:"#1854ba"}},[r.a.createElement(i.a,null),r.a.createElement(C.a,null),r.a.createElement(I.a,null),r.a.createElement(T.a,null),r.a.createElement(R.a,null),r.a.createElement(P.a,null)][a]),r.a.createElement(f.a,{primary:e,primaryTypographyProps:{fontWeight:"800",fontSize:"0.9rem"},sx:{color:"#616975"}}),r.a.createElement(O.a,{sx:{fontFamily:"Sen",fontSize:"medium",color:"#616975"}})))})),r.a.createElement(h.a,null),r.a.createElement(E.a,null,["WALLET","REFER TO EARN","SETTINGS","HELP","SIGN OUT"].map(function(e,a){return r.a.createElement(x.a,{key:e,disablePadding:!0},r.a.createElement(g.a,null,r.a.createElement(p.a,null,[r.a.createElement(M.a,{sx:{color:"#1854ba"}}),r.a.createElement(q.a,{sx:{color:"#1854ba"}}),r.a.createElement(G.a,{sx:{color:"#1854ba"}}),r.a.createElement(W.a,{sx:{color:"#1854ba"}}),r.a.createElement(J.a,{sx:{color:"#1854ba"}})][a]),r.a.createElement(f.a,{primary:e,primaryTypographyProps:{fontWeight:"800",fontSize:"0.9rem"},sx:{color:"#616975"}}),r.a.createElement(O.a,{sx:{fontSize:"medium",color:"#616975"}})))}))))),r.a.createElement(b.a,{sx:{display:"flex",width:"100%",height:"100%"}},r.a.createElement(te,null),r.a.createElement(_,null)))}var re=function(){return r.a.createElement(o.a,{sx:{display:"flex"}},r.a.createElement(ne,null))},le=t(195),ce=t(103),oe=new le.a;c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ce.a,{client:oe},r.a.createElement(re,null))))},87:function(e,a,t){e.exports=t.p+"static/media/gy-logo.de305c86.png"}},[[134,2,1]]]);
//# sourceMappingURL=main.7deb00c9.chunk.js.map