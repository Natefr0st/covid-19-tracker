(this.webpackJsonpcovid_19_tracker=this.webpackJsonpcovid_19_tracker||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__1jwpY",card:"Cards_card__32LN5",infected:"Cards_infected__2IEco",recovered:"Cards_recovered__2BJ-x",deaths:"Cards_deaths__32gVb"}},207:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(73),o=a.n(c),u=a(6),s=a.n(u),i=a(10),l=a(74),d=a(75),m=a(84),p=a(83),f=a(224),v=a(228),h=a(225),b=a(226),E=a(32),y=a.n(E),_=a(33),g=a.n(_),x=a(13),C=a.n(x),w=function(e){var t=e.data,a=t.confirmed,r=t.recovered,c=t.deaths,o=t.lastUpdate;return a?n.a.createElement("div",{className:C.a.container},n.a.createElement(f.a,{container:!0,spacing:3,justify:"center"},n.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:g()(C.a.card,C.a.infected)},n.a.createElement(h.a,null,n.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Infected"),n.a.createElement(b.a,{variant:"h5"},n.a.createElement(y.a,{start:0,end:a.value,duration:2.5,separator:","})),n.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(b.a,{variant:"body2"},"Number of active cases of COVID-19"))),n.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:g()(C.a.card,C.a.recovered)},n.a.createElement(h.a,null,n.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),n.a.createElement(b.a,{variant:"h5"},n.a.createElement(y.a,{start:0,end:r.value,duration:2.5,separator:","})),n.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(b.a,{variant:"body2"},"Number of recoveries from COVID-19"))),n.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:g()(C.a.card,C.a.deaths)},n.a.createElement(h.a,null,n.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),n.a.createElement(b.a,{variant:"h5"},n.a.createElement(y.a,{start:0,end:c.value,duration:2.5,separator:","})),n.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(b.a,{variant:"body2"},"Number of deaths caused by COVID-19"))))):"Loading..."},j=a(31),O=a(34),k=a.n(O),D="https://covid19.mathdro.id/api",N=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,r,n,c,o,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=D,t&&(a="".concat(D,"/countries/").concat(t)),e.prev=2,e.next=5,k.a.get(a);case 5:return r=e.sent,n=r.data,c=n.confirmed,o=n.recovered,u=n.deaths,i=n.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:i});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(D,"/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.confirmed,a=e.deaths,r=e.reportDate;return{confirmed:t.total,deaths:a.total,date:r}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(D,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),B=a(45),V=a(81),J=a.n(V),A=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,l=Object(r.useState)([]),d=Object(j.a)(l,2),m=d[0],p=d[1];Object(r.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,S();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=m.length?n.a.createElement(B.b,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"#3333ff",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null,v=a?n.a.createElement(B.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null;return n.a.createElement("div",{className:J.a.container},u?v:f)},P=a(229),U=a(227),L=a(46),R=a.n(L),W=function(e){var t=e.handleCountryChange,a=Object(r.useState)([]),c=Object(j.a)(a,2),o=c[0],u=c[1];return Object(r.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),n.a.createElement("div",{className:R.a.dropdown},n.a.createElement(P.a,{className:R.a.formControl},n.a.createElement(U.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},n.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return n.a.createElement("option",{key:t,value:e},e)})))))},q=a(47),G=a.n(q),M=a(82),T=a.n(M),Y=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(a);case 2:r=t.sent,e.setState({data:r,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return n.a.createElement("div",{className:G.a.container},n.a.createElement("img",{className:G.a.image,src:T.a,alt:"Covid-19"}),n.a.createElement(w,{data:t}),n.a.createElement(W,{handleCountryChange:this.handleCountryChange}),n.a.createElement(A,{data:t,country:a}))}}]),a}(r.Component);o.a.render(n.a.createElement(Y,null),document.getElementById("root"))},46:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__3b3dj",dropdown:"CountryPicker_dropdown__1WiyW"}},47:function(e,t,a){e.exports={container:"App_container__jmlt6",image:"App_image__1rqTJ"}},81:function(e,t,a){e.exports={container:"Chart_container__3-y7i"}},82:function(e,t,a){e.exports=a.p+"static/media/covid.d7265326.png"},87:function(e,t,a){e.exports=a(207)}},[[87,1,2]]]);
//# sourceMappingURL=main.704f60cc.chunk.js.map