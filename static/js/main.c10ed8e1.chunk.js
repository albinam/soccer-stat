(this["webpackJsonpsoccer-stat"]=this["webpackJsonpsoccer-stat"]||[]).push([[0],{115:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(16),r=a.n(n),o=(a(68),a(69),a(70),a(71),a(53)),i=a.n(o),l=a(11),d=a(8),j=a(9),h=a(12),b=a.n(h),m=a(3),u=a.p+"static/media/football.c7a35aa4.svg",x=a(55),O=a(56),f=a(60),g=a(59),p=a.p+"static/media/football.985d3238.png",v=a(30),y=a(58),w=a(1),N=function(e){Object(f.a)(a,e);var t=Object(g.a)(a);function a(){return Object(x.a)(this,a),t.apply(this,arguments)}return Object(O.a)(a,[{key:"render",value:function(){return Object(w.jsxs)(v.a,{bg:"dark",variant:"dark",expand:"lg",children:[Object(w.jsx)(v.a.Brand,{href:"/",children:Object(w.jsx)("img",{src:p,height:"30",width:"30",alt:"logo"})}),Object(w.jsx)(v.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(w.jsx)(v.a.Collapse,{id:"responsive-navbar-nav",children:Object(w.jsxs)(y.a,{children:[Object(w.jsx)(l.c,{to:{pathname:"/leagues"},children:"Leagues"}),Object(w.jsx)(l.c,{to:{pathname:"/teams"},children:"Teams"})]})})]})}}]),a}(c.Component),T=function(e){var t=e.history,a=e.location,n=Object(c.useState)([]),r=Object(j.a)(n,2),o=r[0],i=r[1],d=new URLSearchParams(a.search).get("league"),h=s.a.createRef();Object(c.useEffect)((function(){O()}));var x=o.filter((function(e){return d?e.name.toLowerCase().includes(d.toLowerCase()):e})),O=function(){b.a.get("https://api.football-data.org/v2/competitions?plan=TIER_ONE",{headers:{"X-Auth-Token":"113723b292dd4ce1b462b386ab78d43c"},dataType:"json"}).then((function(e){i(e.data.competitions)})).catch((function(e){console.log(e)}))};return Object(w.jsxs)("div",{children:[Object(w.jsx)(N,{}),Object(w.jsx)(m.i,{children:Object(w.jsx)(m.f,{className:"col-md-4 mx-auto",children:Object(w.jsx)(m.a,{className:"mb-2",children:Object(w.jsx)(m.b,{className:"d-flex justify-content-between py-2 bg-dark",children:Object(w.jsxs)(m.g,{className:"input-group-sm",children:[Object(w.jsx)("input",{type:"text",className:"form-control form-control-sm rounded",placeholder:"Search","aria-label":"Search",ref:h,value:d||"",onChange:function(){if(d=h.current.value){var e=new URLSearchParams;return e.set("league",d),void t.push("/leagues/?".concat(e.toString()))}t.push("/leagues")}}),Object(w.jsx)(m.h,{className:"border-0 bg-dark",id:"search-addon",children:Object(w.jsx)("i",{className:"fas fa-search"})})]})})})})}),Object(w.jsx)(m.i,{className:"row-cols-1 row-cols-md-3 g-4",children:x.map((function(e,t){return Object(w.jsx)(m.f,{children:Object(w.jsx)("div",{style:{padding:10,margin:10,height:"100%"},children:Object(w.jsxs)(m.a,{className:"h-100 d-flex bg-dark text-center",style:{maxWidth:"550px",maxHeight:"350px",padding:10,color:"white"},children:[Object(w.jsx)(m.c,{src:e.emblemUrl?e.emblemUrl:e.area.ensignUrl||u,alt:e.name,position:"top",className:"img-thumbnail rounded",style:{maxWidth:"150px",maxHeight:"105px",margin:"auto",padding:"auto"}}),Object(w.jsxs)(m.b,{children:[Object(w.jsx)(m.e,{children:e.name}),Object(w.jsx)(m.d,{children:e.area.name}),Object(w.jsxs)(m.d,{children:[Object(w.jsx)("i",{className:"fas fa-calendar-week"}),e.currentSeason.startDate," - ",e.currentSeason.endDate]}),Object(w.jsx)(m.d,{children:Object(w.jsx)(l.b,{to:{pathname:"/leagues/".concat(e.id,"/teams"),leagueId:e.id},children:"Teams"})}),Object(w.jsx)(m.d,{children:Object(w.jsx)(l.b,{to:{pathname:"/leagues/".concat(e.id,"/matches"),leagueId:e.id},children:"Matches"})}),Object(w.jsx)(m.d,{children:Object(w.jsx)(l.b,{to:{pathname:"/leagues/".concat(e.id,"/standings"),leagueId:e.id},children:"Standings"})})]})]})})})}))})]})},S=a(26),D=function(e){var t,a=e.history,n=e.location,r=Object(c.useState)([]),o=Object(j.a)(r,2),i=o[0],h=o[1],x=Object(c.useState)(""),O=Object(j.a)(x,2),f=O[0],g=O[1],p=Object(c.useState)([]),v=Object(j.a)(p,2),y=v[0],T=v[1],D=s.a.createRef(),k=new URLSearchParams(n.search),C=Object(d.f)().leagueId,L=k.get("team"),U=k.get("season");Object(c.useEffect)((function(){t=U?"https://api.football-data.org/v2/competitions/".concat(C,"/teams?season=").concat(U):"https://api.football-data.org/v2/competitions/".concat(C,"/teams"),A(),M()}),[n]);var A=function(){b.a.get(t,{headers:{"X-Auth-Token":"113723b292dd4ce1b462b386ab78d43c"},dataType:"json"}).then((function(e){h(e.data.teams),g(e.data.competition)})).catch((function(e){console.log(e)})),b.a.get("https://api.football-data.org/v2/competitions/"+C,{headers:{"X-Auth-Token":"113723b292dd4ce1b462b386ab78d43c"},dataType:"json"}).then((function(e){T(e.data.seasons)})).catch((function(e){console.log(e)}))},M=function(){return y.map((function(e,t){return Object(w.jsxs)("option",{value:e.startDate.substring(0,4),selected:U==e.startDate.substring(0,4)&&e.startDate.substring(0,4),children:[e.startDate,"/",e.endDate]},e.startDate.substring(0,4))}))},Y=i.filter((function(e){return L?e.name.toLowerCase().includes(L.toLowerCase()):e})),I=function(){var e=new URLSearchParams;L&&e.set("team",L),U&&e.set("season",U),a.push("/leagues/".concat(C,"/teams/?").concat(e.toString()))};return Object(w.jsxs)("div",{children:[Object(w.jsx)(N,{}),Object(w.jsx)(m.i,{children:Object(w.jsxs)(m.f,{className:"col-md-4 mx-auto",children:[Object(w.jsx)(m.k,{colorText:"white",className:"text-center",variant:"h3",children:f.name}),Object(w.jsx)(m.a,{className:"mb-2",children:Object(w.jsx)(m.b,{className:"d-flex justify-content-between py-2 bg-dark",children:Object(w.jsxs)(m.g,{className:"input-group-sm",children:[Object(w.jsx)("input",{type:"text",className:"form-control form-control-sm rounded",placeholder:"Search","aria-label":"Search",ref:D,value:L||"",onChange:function(){L=D.current.value,I()}}),Object(w.jsx)(m.h,{className:"border-0 bg-dark",id:"search-addon",children:Object(w.jsx)("i",{className:"fas fa-search"})}),Object(w.jsx)(S.a,{className:"form-select-sm",onChange:function(e){U=e.target.value,I()},children:M()})]})})})]})}),Object(w.jsx)(m.i,{className:"row-cols-1 row-cols-md-3 g-4",children:Y.map((function(e,t){return Object(w.jsx)(m.f,{children:Object(w.jsx)("div",{style:{padding:10,margin:10,height:"100%"},children:Object(w.jsxs)(m.a,{className:"h-100 d-flex bg-dark text-center",style:{maxWidth:"550px",maxHeight:"350px",padding:10,color:"white"},children:[Object(w.jsx)(m.c,{src:e.crestUrl?e.crestUrl:u,alt:e.name,position:"top",className:"img-thumbnail rounded",style:{maxWidth:"150px",maxHeight:"105px",margin:"auto",padding:"auto"}}),Object(w.jsxs)(m.b,{children:[Object(w.jsx)(m.e,{children:e.name}),Object(w.jsx)(m.d,{children:e.area.name}),Object(w.jsx)(m.d,{children:Object(w.jsx)("a",{href:e.website,children:e.website})}),Object(w.jsxs)(m.d,{children:["Founded in ",e.founded]}),Object(w.jsx)(m.d,{children:Object(w.jsx)(l.b,{to:{pathname:"/teams/".concat(e.id,"/matches")},children:"Matches"})})]})]})})})}))})]})},k=a(32),C=a.n(k),L=a(25),U=a.n(L),A=function(e){var t,a=e.history,s=e.location,n=Object(c.useState)([]),r=Object(j.a)(n,2),o=r[0],i=r[1],l=Object(c.useState)([]),h=Object(j.a)(l,2),u=h[0],x=h[1],O=new URLSearchParams(s.search),f=Object(d.f)().teamId,g=O.get("dateFrom"),p=O.get("dateTo");Object(c.useEffect)((function(){t=p&&g?"https://api.football-data.org/v2/teams/".concat(f,"/matches?dateFrom=").concat(g,"&&dateTo=").concat(p):"https://api.football-data.org/v2/teams/".concat(f,"/matches"),v()}),[s]);var v=function(){b.a.get(t,{headers:{"X-Auth-Token":"113723b292dd4ce1b462b386ab78d43c"},dataType:"json"}).then((function(e){i(e.data.matches)})).catch((function(e){console.log(e)})),b.a.get("https://api.football-data.org/v2/teams/"+f,{headers:{"X-Auth-Token":"113723b292dd4ce1b462b386ab78d43c"},dataType:"json"}).then((function(e){x(e.data)})).catch((function(e){console.log(e)}))};return Object(w.jsxs)("div",{children:[Object(w.jsx)(N,{}),Object(w.jsx)(m.i,{children:Object(w.jsxs)(m.f,{className:"col-md-3 mx-auto",children:[Object(w.jsx)(m.k,{colorText:"white",className:"text-center",variant:"h3",children:u.name}),Object(w.jsx)(m.a,{className:"mb-3",children:Object(w.jsx)(m.b,{className:"d-flex justify-content-between py-2 bg-dark",children:Object(w.jsx)(m.g,{className:"input-group-sm align-items-stretch",style:{textAlign:"center"},children:Object(w.jsx)("div",{className:"mx-auto bg-white",children:Object(w.jsx)(C.a,{onChange:function(e){return function(e){if(e){g=U()(e[0]).format("YYYY-MM-DD"),p=U()(e[1]).format("YYYY-MM-DD");var t=new URLSearchParams;return t.set("dateFrom",g),t.set("dateTo",p),void a.push("/teams/".concat(f,"/matches?").concat(t.toString()))}a.push("/teams/".concat(f,"/matches"))}(e)},value:[g,p],format:"yyyy-MM-dd",locale:"en"})})})})})]})}),Object(w.jsxs)(m.j,{className:"table-dark",children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"#"}),Object(w.jsx)("th",{children:"Away team"}),Object(w.jsx)("th",{children:"Home team"}),Object(w.jsx)("th",{children:"Date"}),Object(w.jsx)("th",{children:"Score (fulltime)"}),Object(w.jsx)("th",{children:"Winner"})]})}),Object(w.jsx)("tbody",{children:o.map((function(e,t){return Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{scope:"row",children:t+1}),Object(w.jsx)("td",{children:e.awayTeam.name}),Object(w.jsx)("td",{children:e.homeTeam.name}),Object(w.jsx)("td",{children:e.utcDate}),null!=e.score.winner?Object(w.jsxs)("td",{children:[" ",e.score.fullTime.awayTeam," - ",e.score.fullTime.homeTeam]}):Object(w.jsx)("td",{children:"-"}),null!=e.score.winner?Object(w.jsxs)("td",{children:[" ",e.score.winner]}):Object(w.jsx)("td",{children:"-"})]},t+1)}))})]})]})},M=function(e){var t,a=e.history,s=e.location,n=Object(c.useState)([]),r=Object(j.a)(n,2),o=r[0],i=r[1],l=Object(c.useState)([]),h=Object(j.a)(l,2),u=h[0],x=h[1],O=Object(c.useState)([]),f=Object(j.a)(O,2),g=f[0],p=f[1],v=new URLSearchParams(s.search),y=Object(d.f)().leagueId,T=v.get("dateFrom"),D=v.get("dateTo"),k=v.get("season");Object(c.useEffect)((function(){t=k?"https://api.football-data.org/v2/competitions/".concat(y,"/matches?season=").concat(k):"https://api.football-data.org/v2/competitions/".concat(y,"/matches"),Y(),M()}),[s]);var L=o.filter((function(e){var t;if(T&&D){var a=U()(T).format(),c=U()(D).format();e.utcDate>=a&&e.utcDate<=c&&(t=e)}else t=e;return t})),A=function(){var e=new URLSearchParams;T&&D&&(e.set("dateFrom",T),e.set("dateTo",D)),k&&e.set("season",k),a.push("/leagues/".concat(y,"/matches?").concat(e.toString()))},M=function(){return g.map((function(e,t){return Object(w.jsxs)("option",{value:e.startDate.substring(0,4),selected:k==e.startDate.substring(0,4)&&e.startDate.substring(0,4),children:[e.startDate,"/",e.endDate]},e.startDate.substring(0,4))}))},Y=function(){b.a.get(t,{headers:{"X-Auth-Token":"113723b292dd4ce1b462b386ab78d43c"},dataType:"json"}).then((function(e){i(e.data.matches)})).catch((function(e){console.log(e)})),b.a.get("https://api.football-data.org/v2/competitions/"+y,{headers:{"X-Auth-Token":"113723b292dd4ce1b462b386ab78d43c"},dataType:"json"}).then((function(e){x(e.data),p(e.data.seasons)})).catch((function(e){console.log(e)}))};return Object(w.jsxs)("div",{children:[Object(w.jsx)(N,{}),Object(w.jsx)(m.i,{children:Object(w.jsxs)(m.f,{className:"col-md-4 mx-auto",children:[Object(w.jsx)(m.k,{colorText:"white",className:"text-center",variant:"h3",children:u.name}),Object(w.jsx)(m.a,{className:"mb-2",children:Object(w.jsx)(m.b,{className:"d-flex justify-content-between py-2 bg-dark",children:Object(w.jsxs)(m.g,{className:"input-group-sm align-items-stretch",style:{textAlign:"center"},children:[Object(w.jsx)("div",{className:"mx-auto bg-white",children:Object(w.jsx)(C.a,{onChange:function(e){return function(e){e?(T=U()(e[0]).format("YYYY-MM-DD"),D=U()(e[1]).format("YYYY-MM-DD"),A()):(T=0,D=0,A())}(e)},value:[T,D],format:"yyyy-MM-dd",locale:"en"})}),Object(w.jsx)("div",{className:"mx-auto bg-white",children:Object(w.jsx)(S.a,{className:"form-select-sm",onChange:function(e){k=e.target.value,A()},children:M()})})]})})})]})}),Object(w.jsxs)(m.j,{className:"table-dark",children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"#"}),Object(w.jsx)("th",{children:"Away team"}),Object(w.jsx)("th",{children:"Home team"}),Object(w.jsx)("th",{children:"Date"}),Object(w.jsx)("th",{children:"Score (fulltime)"}),Object(w.jsx)("th",{children:"Winner"})]})}),Object(w.jsx)("tbody",{children:L.map((function(e,t){return Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{scope:"row",children:t+1}),Object(w.jsx)("td",{children:e.awayTeam.name}),Object(w.jsx)("td",{children:e.homeTeam.name}),Object(w.jsx)("td",{children:e.utcDate}),null!=e.score.winner?Object(w.jsxs)("td",{children:[" ",e.score.fullTime.awayTeam," - ",e.score.fullTime.homeTeam]}):Object(w.jsx)("td",{children:"-"}),null!=e.score.winner?Object(w.jsxs)("td",{children:[" ",e.score.winner]}):Object(w.jsx)("td",{children:"-"})]},t+1)}))})]})]})},Y=function(e){e.history;var t=e.location,a=Object(c.useState)([]),s=Object(j.a)(a,2),n=s[0],r=s[1],o=Object(c.useState)([]),i=Object(j.a)(o,2),l=i[0],h=i[1],x=Object(d.f)().leagueId;Object(c.useEffect)((function(){O()}),[t]);var O=function(){b.a.get("http://api.football-data.org/v2/competitions/".concat(x,"/standings"),{headers:{"X-Auth-Token":"113723b292dd4ce1b462b386ab78d43c"},dataType:"json"}).then((function(e){r(e.data.standings[0].table),h(e.data.competition)})).catch((function(e){console.log(e)}))};return Object(w.jsxs)("div",{children:[Object(w.jsx)(N,{}),Object(w.jsx)(m.i,{children:Object(w.jsx)(m.f,{className:"col-md-4 mx-auto",children:Object(w.jsx)(m.k,{colorText:"white",className:"text-center",variant:"h3",children:l.name})})}),Object(w.jsxs)(m.j,{className:"table-dark",children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"#"}),Object(w.jsx)("th",{}),Object(w.jsx)("th",{children:"Team"}),Object(w.jsx)("th",{children:"Played"}),Object(w.jsx)("th",{children:"Won"}),Object(w.jsx)("th",{children:"Draw"}),Object(w.jsx)("th",{children:"Lost"}),Object(w.jsx)("th",{children:"For"}),Object(w.jsx)("th",{children:"Against"}),Object(w.jsx)("th",{children:"Difference"})]})}),Object(w.jsx)("tbody",{children:n.map((function(e,t){return Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{scope:"row",children:t+1}),Object(w.jsx)("td",{children:Object(w.jsx)("img",{src:e.team.crestUrl?e.team.crestUrl:u,width:"30px",height:"30px"})}),Object(w.jsx)("td",{children:e.team.name}),Object(w.jsx)("td",{children:e.playedGames}),Object(w.jsx)("td",{children:e.won}),Object(w.jsx)("td",{children:e.draw}),Object(w.jsx)("td",{children:e.lost}),Object(w.jsx)("td",{children:e.goalsFor}),Object(w.jsx)("td",{children:e.goalsAgainst}),Object(w.jsx)("td",{children:e.goalDifference})]},t+1)}))})]})]})},I=function(e){var t,a=e.history,n=e.location,r=Object(c.useState)([]),o=Object(j.a)(r,2),i=o[0],d=o[1],h=Object(c.useState)(""),x=Object(j.a)(h,2),O=x[0],f=x[1],g=Object(c.useState)([]),p=Object(j.a)(g,2),v=p[0],y=p[1],T=s.a.createRef(),D=new URLSearchParams(n.search),k=D.get("league"),C=D.get("season"),L=D.get("team");Object(c.useEffect)((function(){k&&(t=C?"https://api.football-data.org/v2/competitions/".concat(k,"/teams?season=").concat(C):"https://api.football-data.org/v2/competitions/".concat(k,"/teams")),U(),M(),A()}),[n]);var U=function(){b.a.get("https://api.football-data.org/v2/competitions?plan=TIER_ONE",{headers:{"X-Auth-Token":"113723b292dd4ce1b462b386ab78d43c"},dataType:"json"}).then((function(e){console.log(e),f(e.data.competitions)})).catch((function(e){console.log(e)})),console.log(k),k&&(b.a.get(t,{headers:{"X-Auth-Token":"113723b292dd4ce1b462b386ab78d43c"},dataType:"json"}).then((function(e){console.log(e),d(e.data.teams)})).catch((function(e){console.log(e)})),b.a.get("https://api.football-data.org/v2/competitions/"+k,{headers:{"X-Auth-Token":"113723b292dd4ce1b462b386ab78d43c"},dataType:"json"}).then((function(e){y(e.data.seasons)})).catch((function(e){console.log(e)})))},A=function(){if(k)return v.map((function(e,t){return Object(w.jsxs)("option",{value:e.startDate.substring(0,4),selected:C==e.startDate.substring(0,4)&&e.startDate.substring(0,4),children:[e.startDate,"/",e.endDate]},e.startDate.substring(0,4))}))},M=function(){if(O)return O.map((function(e,t){return Object(w.jsx)("option",{value:e.id,selected:e.id==k&&e.id,children:e.name},e.id)}))},Y=i.filter((function(e){return L?e.name.toLowerCase().includes(L.toLowerCase()):e})),I=function(){var e=new URLSearchParams;k&&e.set("league",k),C&&e.set("season",C),L&&e.set("team",L),a.push("/teams/?".concat(e.toString()))};return Object(w.jsxs)("div",{children:[Object(w.jsx)(N,{}),Object(w.jsx)(m.i,{children:Object(w.jsx)(m.f,{className:"col-md-4 mx-auto",children:Object(w.jsx)(m.a,{className:"mb-2",children:Object(w.jsx)(m.b,{className:"d-flex justify-content-between py-2 bg-dark",children:Object(w.jsx)(m.g,{className:"input-group-sm",children:Object(w.jsx)(S.a,{className:"form-select-sm",onChange:function(e){k=e.target.value,I()},children:M()})})})})})}),Object(w.jsx)(m.i,{children:Object(w.jsx)(m.f,{className:"col-md-4 mx-auto",children:Object(w.jsx)(m.a,{className:"mb-2",children:Object(w.jsx)(m.b,{className:"d-flex justify-content-between py-2 bg-dark",children:Object(w.jsx)(m.g,{children:Object(w.jsx)(S.a,{className:"form-select-sm",onChange:function(e){C=e.target.value,I()},children:A()})})})})})}),Object(w.jsx)(m.i,{children:Object(w.jsx)(m.f,{className:"col-md-4 mx-auto",children:Object(w.jsx)(m.a,{className:"mb-2",children:Object(w.jsx)(m.b,{className:"d-flex justify-content-between py-2 bg-dark",children:Object(w.jsxs)(m.g,{children:[Object(w.jsx)("input",{type:"text",className:"form-control form-control-sm rounded",placeholder:"Search","aria-label":"Search",ref:T,value:L||"",onChange:function(){L=T.current.value,I()}}),Object(w.jsx)(m.h,{className:"border-0 bg-dark",id:"search-addon",children:Object(w.jsx)("i",{className:"fas fa-search"})})]})})})})}),Object(w.jsx)(m.i,{className:"row-cols-1 row-cols-md-3 g-4",children:Y.map((function(e,t){return Object(w.jsx)(m.f,{children:Object(w.jsx)("div",{style:{padding:10,margin:10,height:"100%"},children:Object(w.jsxs)(m.a,{className:"h-100 d-flex bg-dark text-center",style:{maxWidth:"550px",maxHeight:"350px",padding:10,color:"white"},children:[Object(w.jsx)(m.c,{src:e.crestUrl?e.crestUrl:u,alt:e.name,position:"top",className:"img-thumbnail rounded",style:{maxWidth:"150px",maxHeight:"105px",margin:"auto",padding:"auto"}}),Object(w.jsxs)(m.b,{children:[Object(w.jsx)(m.e,{children:e.name}),Object(w.jsx)(m.d,{children:e.area.name}),Object(w.jsx)(m.d,{children:Object(w.jsx)("a",{href:e.website,children:e.website})}),Object(w.jsxs)(m.d,{children:["Founded in ",e.founded]}),Object(w.jsx)(m.d,{children:Object(w.jsx)(l.b,{to:{pathname:"/teams/".concat(e.id,"/matches")},children:"Matches"})})]})]})})})}))})]})};var R=function(){return Object(w.jsx)("div",{className:i.a,children:Object(w.jsxs)(l.a,{basename:"/soccer-stat",children:[Object(w.jsx)(d.b,{path:"/",exact:!0,children:Object(w.jsx)(d.a,{to:"/leagues"})}),Object(w.jsx)(d.b,{path:"/leagues",exact:!0,component:T}),Object(w.jsx)(d.b,{path:"/leagues/:leagueId/teams/:team?",component:D}),Object(w.jsx)(d.b,{path:"/teams/:params?",component:I}),Object(w.jsx)(d.b,{path:"/teams/:teamId/matches",component:A}),Object(w.jsx)(d.b,{path:"/leagues/:leagueId/matches",component:M}),Object(w.jsx)(d.b,{path:"/leagues/:leagueId/standings",component:Y})]})})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,121)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(R,{})}),document.getElementById("root")),F()},53:function(e,t,a){},68:function(e,t,a){}},[[115,1,2]]]);
//# sourceMappingURL=main.c10ed8e1.chunk.js.map