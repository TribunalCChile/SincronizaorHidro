import{C as b}from"./index-BQaHqqIH.js";import{_ as C,r as m,o as J,a as l,b as x,c as w,w as t,e,f as a,h as y}from"./index-8UleF4ZQ.js";var g=function(n,r){if(!(typeof window>"u")&&!(typeof document>"u")){var _=r??document.body;return window.getComputedStyle(_,null).getPropertyValue(n).replace(/^\s/,"")}};const M={name:"WidgetsStatsA",components:{CChart:b},setup(){const n=m(),r=m();return J(()=>{document.documentElement.addEventListener("ColorSchemeChange",()=>{n.value&&(n.value.chart.data.datasets[0].pointBackgroundColor=g("--cui-primary"),n.value.chart.update()),r.value&&(r.value.chart.data.datasets[0].pointBackgroundColor=g("--cui-info"),r.value.chart.update())})}),{getStyle:g,widgetChartRef1:n,widgetChartRef2:r}}},R={class:"fs-6 fw-normal"},S={class:"fs-6 fw-normal"},W={class:"fs-6 fw-normal"},D={class:"fs-6 fw-normal"};function F(n,r,_,c,v,k){const s=l("CIcon"),i=l("CDropdownToggle"),o=l("CDropdownItem"),d=l("CDropdownMenu"),u=l("CDropdown"),p=l("CChart"),f=l("CWidgetStatsA"),h=l("CCol"),A=l("CRow");return x(),w(A,{xs:{gutter:4}},{default:t(()=>[e(h,{sm:6,xl:4,xxl:3},{default:t(()=>[e(f,{color:"primary"},{value:t(()=>[a("26K "),y("span",R,[a(" (-12.4% "),e(s,{icon:"cil-arrow-bottom"}),a(") ")])]),title:t(()=>[a("Users")]),action:t(()=>[e(u,{placement:"bottom-end"},{default:t(()=>[e(i,{color:"transparent",class:"p-0 text-white",caret:!1},{default:t(()=>[e(s,{icon:"cil-options",class:"text-white"})]),_:1}),e(d,null,{default:t(()=>[e(o,{href:"#"},{default:t(()=>[a("Action")]),_:1}),e(o,{href:"#"},{default:t(()=>[a("Another action")]),_:1}),e(o,{href:"#"},{default:t(()=>[a("Something else here")]),_:1})]),_:1})]),_:1})]),chart:t(()=>[e(p,{type:"line",class:"mt-3 mx-3",style:{height:"70px"},ref:"widgetChartRef1",data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:c.getStyle("--cui-primary"),data:[68,59,84,84,51,55,40]}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{border:{display:!1},grid:{display:!1},ticks:{display:!1}},y:{min:30,max:89,display:!1,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1,tension:.4},point:{radius:4,hitRadius:10,hoverRadius:4}}}},null,8,["data"])]),_:1})]),_:1}),e(h,{sm:6,xl:4,xxl:3},{default:t(()=>[e(f,{color:"info"},{value:t(()=>[a("$6.200 "),y("span",S,[a(" (40.9% "),e(s,{icon:"cil-arrow-top"}),a(") ")])]),title:t(()=>[a("Income")]),action:t(()=>[e(u,{placement:"bottom-end"},{default:t(()=>[e(i,{color:"transparent",class:"p-0 text-white",caret:!1},{default:t(()=>[e(s,{icon:"cil-options",class:"text-white"})]),_:1}),e(d,null,{default:t(()=>[e(o,{href:"#"},{default:t(()=>[a("Action")]),_:1}),e(o,{href:"#"},{default:t(()=>[a("Another action")]),_:1}),e(o,{href:"#"},{default:t(()=>[a("Something else here")]),_:1})]),_:1})]),_:1})]),chart:t(()=>[e(p,{type:"line",class:"mt-3 mx-3",style:{height:"70px"},ref:"widgetChartRef2",data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:c.getStyle("--cui-info"),data:[1,18,9,17,34,22,11]}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{border:{display:!1},grid:{display:!1},ticks:{display:!1}},y:{min:-9,max:39,display:!1,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}}},null,8,["data"])]),_:1})]),_:1}),e(h,{sm:6,xl:4,xxl:3},{default:t(()=>[e(f,{color:"warning"},{value:t(()=>[a("2.49% "),y("span",W,[a(" (84.7% "),e(s,{icon:"cil-arrow-top"}),a(") ")])]),title:t(()=>[a("Conversion Rate")]),action:t(()=>[e(u,{placement:"bottom-end"},{default:t(()=>[e(i,{color:"transparent",class:"p-0 text-white",caret:!1},{default:t(()=>[e(s,{icon:"cil-options",class:"text-white"})]),_:1}),e(d,null,{default:t(()=>[e(o,{href:"#"},{default:t(()=>[a("Action")]),_:1}),e(o,{href:"#"},{default:t(()=>[a("Another action")]),_:1}),e(o,{href:"#"},{default:t(()=>[a("Something else here")]),_:1})]),_:1})]),_:1})]),chart:t(()=>[e(p,{type:"line",class:"mt-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40],fill:!0}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{border:{display:!1},display:!1},y:{display:!1}},elements:{line:{borderWidth:2,tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4}}}},null,8,["data"])]),_:1})]),_:1}),e(h,{sm:6,xl:4,xxl:3},{default:t(()=>[e(f,{color:"danger"},{value:t(()=>[a("44K "),y("span",D,[a(" (-23.6% "),e(s,{icon:"cil-arrow-bottom"}),a(") ")])]),title:t(()=>[a("Sessions")]),action:t(()=>[e(u,{placement:"bottom-end"},{default:t(()=>[e(i,{color:"transparent",class:"p-0 text-white",caret:!1},{default:t(()=>[e(s,{icon:"cil-options",class:"text-white"})]),_:1}),e(d,null,{default:t(()=>[e(o,{href:"#"},{default:t(()=>[a("Action")]),_:1}),e(o,{href:"#"},{default:t(()=>[a("Another action")]),_:1}),e(o,{href:"#"},{default:t(()=>[a("Something else here")]),_:1})]),_:1})]),_:1})]),chart:t(()=>[e(p,{type:"bar",class:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July","August","September","October","November","December","January","February","March","April"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40,85,65,23,12,98,34,84,67,82],barPercentage:.6}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1,drawTicks:!1},ticks:{display:!1}},y:{border:{display:!1},grid:{display:!1,drawTicks:!1},ticks:{display:!1}}}}},null,8,["data"])]),_:1})]),_:1})]),_:1})}const H=C(M,[["render",F]]),B={name:"WidgetsStatsD",components:{CChart:b},setup(){return{options:{elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}}}}};function I(n,r,_,c,v,k){const s=l("CIcon"),i=l("CChart"),o=l("CWidgetStatsD"),d=l("CCol"),u=l("CRow");return x(),w(u,{xs:{gutter:4}},{default:t(()=>[e(d,{sm:6,xl:4,xxl:3},{default:t(()=>[e(o,{style:{"--cui-card-cap-bg":"#3b5998"},values:[{title:"friends",value:"89K"},{title:"feeds",value:"459"}]},{icon:t(()=>[e(s,{icon:"cib-facebook",height:"52",class:"my-4 text-white"})]),chart:t(()=>[e(i,{class:"position-absolute w-100 h-100",type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:[65,59,84,84,51,55,40],fill:!0}]},options:c.options},null,8,["data","options"])]),_:1})]),_:1}),e(d,{sm:6,xl:4,xxl:3},{default:t(()=>[e(o,{style:{"--cui-card-cap-bg":"#00aced"},values:[{title:"followers",value:"973k"},{title:"tweets",value:"1.792"}]},{icon:t(()=>[e(s,{icon:"cib-twitter",height:"52",class:"my-4 text-white"})]),chart:t(()=>[e(i,{class:"position-absolute w-100 h-100",type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:[1,13,9,17,34,41,38],fill:!0}]},options:c.options},null,8,["data","options"])]),_:1})]),_:1}),e(d,{sm:6,xl:4,xxl:3},{default:t(()=>[e(o,{style:{"--cui-card-cap-bg":"#4875b4"},values:[{title:"contacts",value:"500"},{title:"feeds",value:"1.292"}]},{icon:t(()=>[e(s,{icon:"cib-linkedin",height:"52",class:"my-4 text-white"})]),chart:t(()=>[e(i,{class:"position-absolute w-100 h-100",type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:[78,81,80,45,34,12,40],fill:!0}]},options:c.options},null,8,["data","options"])]),_:1})]),_:1}),e(d,{sm:6,xl:4,xxl:3},{default:t(()=>[e(o,{color:"warning",values:[{title:"events",value:"12+"},{title:"meetings",value:"4"}]},{icon:t(()=>[e(s,{icon:"cil-calendar",height:"52",class:"my-4 text-white"})]),chart:t(()=>[e(i,{class:"position-absolute w-100 h-100",type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:[35,23,56,22,97,23,64],fill:!0}]},options:c.options},null,8,["data","options"])]),_:1})]),_:1})]),_:1})}const N=C(B,[["render",I]]);export{H as W,N as a,g};
