(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,a,t){e.exports=t(145)},145:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(88),c=t.n(l),i=t(189),o=t(196),m=t(209),s=t(211),d=t(198),u=t(214),E=t(213),x=t(203),g=t(195),p=t(215),f=t(216),h=t(217),y=t(176),b=t(89),S=t.n(b),v=t(111),C=t.n(v),k=t(114),w=t.n(k),A=t(117),I=t.n(A),R=t(118),F=t.n(R),L=t(119),O=t.n(L),T=t(120),j=t.n(T),D=t(121),M=t.n(D),z=t(122),P=t.n(z),q=t(123),N=t.n(q),W=t(124),B=t.n(W),G=t(125),U=t.n(G),K=t(126),J=t.n(K),H=t(208),Q=t(205),Y=t(206),V=t(197),X=t(200),Z=t(207);function $(){var e=Object(X.a)({queryKey:["quotes"],queryFn:function(){return V.a.get("https://api.quotable.io/random").then(function(e){return e.data})}}),a=e.isLoading,t=e.error,n=e.data,l=(e.isFetching,e.refetch);return a?"Loading...":t?"An error has occured: "+t.message:r.a.createElement(y.a,null,r.a.createElement(Q.a,{container:!0,spacing:1,sx:{display:"flex",padding:1}},r.a.createElement(Q.a,{item:!0,xs:12},r.a.createElement(Y.a,null,r.a.createElement(s.a,{sx:{padding:1}},'"',n.content,'"'))),r.a.createElement(Q.a,{item:!0,xs:12},r.a.createElement(Y.a,null,r.a.createElement(s.a,{sx:{padding:1}},"Author: ",r.a.createElement("i",null,n.author)))),r.a.createElement(Q.a,{item:!0,xs:12,paddingBottom:"10px"},r.a.createElement(Y.a,null,r.a.createElement(s.a,{sx:{padding:1}},"Date Added: ",n.dateAdded)))),r.a.createElement(Q.a,{item:!0,xs:12,sx:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(Z.a,{variant:"outlined",onClick:l},"Refetch")))}var _=t(188);function ee(){var e=Object(X.a)({queryKey:["character"],queryFn:function(){return V.a.get("https://rickandmortyapi.com/api/character/".concat(Math.floor(21*Math.random()))).then(function(e){return e.data})}}),a=e.isLoading,t=e.error,n=e.data;e.isFetching,e.refetch;return a?"Loading...":t?"An error has occured: "+t.message:r.a.createElement(_.a,null,r.a.createElement(Q.a,{container:!0,spacing:.5,sx:{display:"flex",padding:1}},r.a.createElement(Q.a,{item:!0,xs:12},r.a.createElement(Y.a,null,r.a.createElement(s.a,{sx:{padding:1}},"Name: ",r.a.createElement("i",null,n.name)))),r.a.createElement(Q.a,{item:!0,xs:12},r.a.createElement(Y.a,null,r.a.createElement(s.a,{sx:{padding:1}},"Status: ",r.a.createElement("i",null,n.status)))),r.a.createElement(Q.a,{item:!0,xs:12},r.a.createElement(Y.a,null,r.a.createElement(s.a,{sx:{padding:1}},"Origin: ",n.origin.name))),r.a.createElement(Q.a,{item:!0,xs:12},r.a.createElement(Y.a,null,r.a.createElement(s.a,{sx:{padding:1}},"Species: ",n.species)))))}function ae(){var e=Object(X.a)({queryKey:["character"],queryFn:function(){return V.a.get("https://rickandmortyapi.com/api/character/".concat(Math.floor(21*Math.random()))).then(function(e){return e.data})}}),a=e.isLoading,t=e.error,n=e.data,l=(e.isFetching,e.refetch);return a?"Loading...":t?"An error has occured: "+t.message:r.a.createElement(_.a,null,r.a.createElement(Q.a,{container:!0,spacing:1,sx:{display:"flex",padding:1}},r.a.createElement(Q.a,{item:!0,xs:12},r.a.createElement(Y.a,{elevation:0,sx:{borderRadius:"100%"}},r.a.createElement(s.a,{sx:{padding:1}},r.a.createElement(_.a,{component:"img",sx:{borderRadius:"100%"},src:n.image}))))),r.a.createElement(Q.a,{item:!0,xs:12,sx:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(Z.a,{variant:"outlined",onClick:l},"Refetch")))}function te(){return r.a.createElement(H.a,{maxWidth:!1,width:"100%",height:"auto"},r.a.createElement(y.a,{sx:{display:"flex",flexDirection:"column"}},r.a.createElement(y.a,{sx:{display:"flex",flexDirection:"column",marginLeft:"2rem",marginTop:"2rem",color:"#616975"}},r.a.createElement(s.a,{variant:"h4"},"ABC Donuts"),r.a.createElement(s.a,null,"123 s. 234. Provo"),r.a.createElement(Q.a,{container:!0,rowSpacing:2,m:"1",spacing:2},r.a.createElement(Q.a,{item:!0,sx:{height:"100%"},xs:6},r.a.createElement(Y.a,{sx:{height:{xs:200,sm:300,md:400,lg:400,xl:650},backgroundColor:"#e4eaef",display:"flex",alignItems:"center",flexDirection:"column",color:"#616975"},elevation:3},r.a.createElement(s.a,{variant:"h4",sx:{padding:1}},"Tan StackQuery / Axios"),r.a.createElement($,null))),r.a.createElement(Q.a,{item:!0,xs:5},r.a.createElement(Y.a,{sx:{height:{xs:200,sm:300,md:400,lg:400,xl:650},backgroundColor:"#ffffff",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",borderRadius:"100%"},elevation:0},r.a.createElement(ae,null))),r.a.createElement(Q.a,{item:!0,xs:4},r.a.createElement(Y.a,{sx:{height:{xs:10,sm:150,md:200,lg:200,xl:400},backgroundColor:"#e4eaef"},elevation:3})),r.a.createElement(Q.a,{item:!0,xs:4},r.a.createElement(Y.a,{sx:{height:{xs:10,sm:150,md:200,lg:200,xl:400},backgroundColor:"#e4eaef"},elevation:3},r.a.createElement(ee,null))),r.a.createElement(Q.a,{item:!0,xs:4},r.a.createElement(Y.a,{sx:{height:{xs:10,sm:150,md:200,lg:200,xl:400},backgroundColor:"#e4eaef"},elevation:3}))))))}var ne=t(10),re=t(108),le=t.n(re);function ce(){var e=Object(n.useState)(!1),a=Object(ne.a)(e,2),t=a[0],l=a[1],c=function(e){return function(a){l(e)}};return r.a.createElement(y.a,{sx:{display:"flex",justifyContent:"right",alignItems:"center"}},r.a.createElement(i.a,null,r.a.createElement(y.a,{component:"div",sx:{display:"flex",alignItems:"center",height:"100%",position:"fixed"}},r.a.createElement(le.a,{sx:{fontSize:"2.5rem",color:"#1854ba",paddingLeft:2},onClick:c(!0)})),r.a.createElement(m.a,{sx:{width:300,flexShrink:0,"& .MuiDrawer-paper":{width:300,boxSizing:"border-box",backgroundColor:"#e4eaef"}},anchor:"right",open:t,onClose:c(!1)})))}function ie(){return r.a.createElement(y.a,{sx:{display:"flex"}},r.a.createElement(i.a,null,r.a.createElement(y.a,null,r.a.createElement(m.a,{sx:{width:240,flexShrink:0,"& .MuiDrawer-paper":{width:240,boxSizing:"border-box",backgroundColor:"#e4eaef"}},variant:"permanent",anchor:"left"},r.a.createElement(y.a,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:240,padding:1,paddingTop:4}},r.a.createElement(y.a,{sx:{display:"flex",flexDirection:"row",padding:1,alignItems:"center"}},r.a.createElement("img",{width:"auto",height:"60rem",src:S.a}),r.a.createElement(y.a,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",paddingLeft:1}},r.a.createElement(s.a,{variant:"h6",color:"#1854ba"},r.a.createElement(y.a,{component:"div",fontWeight:"bold"},"YOUR")),r.a.createElement(s.a,{variant:"h6",color:"#1854ba"},"BUSINESS"))),r.a.createElement(d.a,{type:"search",variant:"outlined",size:"small",placeholder:"Search",InputProps:{startAdornment:r.a.createElement(u.a,{position:"start"},r.a.createElement(C.a,null))},sx:{backgroundColor:"#FFFFFF",width:200}})),r.a.createElement(E.a,null,["CUSTOMERS","CAMPAIGNS","LOCATIONS","MESSAGES","REPORTS","LEARN MORE"].map(function(e,a){return r.a.createElement(x.a,{key:e,disablePadding:!0},r.a.createElement(g.a,null,r.a.createElement(p.a,{sx:{fontSize:"large",color:"#1854ba"}},[r.a.createElement(o.a,null),r.a.createElement(I.a,null),r.a.createElement(F.a,null),r.a.createElement(O.a,null),r.a.createElement(j.a,null),r.a.createElement(M.a,null)][a]),r.a.createElement(f.a,{primary:e,primaryTypographyProps:{fontWeight:"800",fontSize:"0.9rem"},sx:{color:"#616975"}}),r.a.createElement(w.a,{sx:{fontFamily:"Sen",fontSize:"medium",color:"#616975"}})))})),r.a.createElement(h.a,null),r.a.createElement(E.a,null,["WALLET","REFER TO EARN","SETTINGS","HELP","SIGN OUT"].map(function(e,a){return r.a.createElement(x.a,{key:e,disablePadding:!0},r.a.createElement(g.a,null,r.a.createElement(p.a,null,[r.a.createElement(P.a,{sx:{color:"#1854ba"}}),r.a.createElement(N.a,{sx:{color:"#1854ba"}}),r.a.createElement(B.a,{sx:{color:"#1854ba"}}),r.a.createElement(U.a,{sx:{color:"#1854ba"}}),r.a.createElement(J.a,{sx:{color:"#1854ba"}})][a]),r.a.createElement(f.a,{primary:e,primaryTypographyProps:{fontWeight:"800",fontSize:"0.9rem"},sx:{color:"#616975"}}),r.a.createElement(w.a,{sx:{fontSize:"medium",color:"#616975"}})))}))))),r.a.createElement(y.a,{sx:{display:"flex",width:"100%",height:"100%"}},r.a.createElement(te,null),r.a.createElement(ce,null)))}var oe=function(){return r.a.createElement(i.a,{sx:{display:"flex"}},r.a.createElement(ie,null))},me=t(201),se=t(84),de=new me.a;c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(se.a,{client:de},r.a.createElement(oe,null))))},89:function(e,a,t){e.exports=t.p+"static/media/gy-logo.de305c86.png"}},[[137,2,1]]]);
//# sourceMappingURL=main.cd5c3c13.chunk.js.map