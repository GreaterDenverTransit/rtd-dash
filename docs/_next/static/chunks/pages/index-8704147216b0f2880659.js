(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1698:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return ee},default:function(){return te}});var n=r(4942),i=r(7294),a=r(9008),s=r(2982),o=r(885),l=r(4184),c=r.n(l),d=r(9327),u={A:"#76bee6","113B":"#609a3d","101D":"#37814d","101E":"#51287f","113G":"#eab642","101H":"#3872b9","109L":"#f5d040","117N":"#9431af","107R":"#c4d53f","120W":"#479aa8",bus:"#666",C:"black",F:"black"},h=r(7432),p=r.n(h),v=r(7863),f=r.n(v),b=3600,m=function(e){var t=Math.floor(e/b),r=t>=12&&t<24;return"".concat(t>12?t-12:0===t?12:t," ").concat(r?"PM":"AM")},g=r(3013),_=r.n(g),x=r(5893),j=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:24,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=[],a=t;a<r;a++)(a-n)%e===0&&i.push(m(a*b));return i}(1),y=function(e){var t=e.color,r=e.baselineTph,n=e.currentTph,a=e.highestTph,s=(0,i.useRef)(null);return(0,i.useEffect)((function(){var e=s.current.getContext("2d"),i=f()(t).alpha(.4).rgbString(),o=[{label:"Pre-COVID trips per hour",data:r,steppedLine:!0,borderColor:t,borderWidth:2,backgroundColor:"rgba(0,0,0,0)"},{label:"Current trips per hour",data:n,steppedLine:!0,borderWidth:2,borderColor:"rgba(0,0,0,0)",backgroundColor:i}],l=new(p())(e,{type:"line",data:{labels:j,datasets:o},options:{maintainAspectRatio:!1,animation:{duration:0},legend:{position:"top",align:"end",labels:{boxWidth:15}},scales:{xAxes:[{gridLines:{display:!1},ticks:{maxTicksLimit:12}}],yAxes:[{gridLines:{display:!1},ticks:{maxTicksLimit:4,suggestedMax:a}}]},tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e){var t=e.datasetIndex,r=e.index,n=o[t],i=n.label,a=n.data;return"".concat(i,": ").concat(a[r]," (each direction)")}}},elements:{line:{tension:0},point:{radius:0}}}});return function(){return l.destroy()}}),[r,n]),(0,x.jsx)("div",{className:_().tphChartContainer,children:(0,x.jsx)("canvas",{ref:s})})},C=r(2744),w=r.n(C),L=r(3316),S=r.n(L),O=new Intl.DateTimeFormat("en-US"),N=function(e){return Math.round(100*e).toString()+"%"},k=S()((function(e){var t=Date.now(),r=[],n=[],i=e.valueOf();do{r.push(O.format(i)),n.push(i),i+=864e5}while(i<=t);return{timestamps:n,dateStrings:r}}),{serializer:function(e){return e.valueOf().toString()}}),T=function(e){var t,r=e.color,n=e.serviceHistory,a=e.startDate,s=e.lineTitle,o=e.lineId,l=e.rtd_ridership,c=(0,i.useRef)(null),d=l[s.split(",")[0].trim()];void 0!==d&&(t=d.reduce((function(e,t){return e.riders>t.riders?e:t})).riders,d=d.map((function(e){return{x:e.date,y:e.riders?e.riders/t:"NaN"}})));var u=(0,i.useMemo)((function(){return n&&function(e){var t=e[0];return e.map((function(e){return e/t}))}(n)}),[n]),h=(0,i.useMemo)((function(){return k(a)}),[a]).timestamps;return(0,i.useEffect)((function(){var e=f()(r).alpha(.8).rgbString(),t=c.current.getContext("2d"),i=[d&&{label:"Ridership",actual:d.map((function(e){return e.riders})),unit:"monthly riders",data:d,borderColor:r,backgroundColor:e,borderWidth:2,spanGaps:!1},{label:"Service levels",actual:n,unit:"weekday trips per direction",data:u,borderColor:e,backgroundColor:w().draw("diagonal","rgba(0,0,0,0)",r,5),borderWidth:2}].filter((function(e){return e})),a=new(p())(t,{type:"line",data:{datasets:i,labels:h},options:{maintainAspectRatio:!1,animation:{duration:0},scales:{xAxes:[{gridLines:{display:!1},type:"time",ticks:{min:"2019-01-01"},time:{unit:"month",displayFormats:{month:"MMM 'YY"}}}],yAxes:[{ticks:{beginAtZero:!0,stepSize:.2,maxTicksLimit:6,callback:N},gridLines:{display:!1}}]},elements:{point:{radius:0},line:{tension:0}},legend:{position:"top",align:"end",labels:{boxWidth:15}},tooltips:{mode:"index",intersect:!1}}});return function(){return a.destroy()}}),[d,u,o]),(0,x.jsx)("div",{className:_().serviceAndRidershipChartContainer,children:(0,x.jsx)("canvas",{className:_().serviceAndRidershipChart,ref:c})})},D=[{value:"weekday",label:"Weekdays"},{value:"saturday",label:"Saturday"},{value:"sunday",label:"Sunday"}],E=function(e){var t=e.lineData,r=e.rtd_ridership,n=t.id,a=t.lineKind,l=t.serviceHistory,h=t.serviceRegimes,p=t.startDate,v=t.shortName,f=t.longName,b=u[a]||"black",m=(0,i.useState)("weekday"),g=m[0],j=m[1],C=(0,i.useMemo)((function(){return function(e){var t=0;return Object.entries(e.serviceRegimes).forEach((function(e){var r=(0,o.Z)(e,2),n=r[0],i=r[1];"baseline"!==n&&"current"!==n||Object.values(i).forEach((function(e){e.tripsPerHour&&(t=Math.max.apply(Math,[t].concat((0,s.Z)(e.tripsPerHour))))}))})),t}(t)}),[t]),w=(0,i.useMemo)((function(){return new Date(p)}),[p]),L=v||f,S=r[v]?"Service and ridership over time":"Service over time (ridership not available)",O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,x.jsxs)("h3",{className:_().sectionLabel,children:[(0,x.jsx)("div",{className:"label",children:e}),t]})},N=(0,x.jsx)(V,{className:_().tabs,value:g,items:D,onSelectValue:function(e){return j(e)},baseId:"line-day-selector-".concat(n),"aria-label":"Select day of service"});return(0,x.jsxs)(J,{title:L,topRight:function(){var e=h.current,t=h.baseline;return 0===e.weekday.totalTrips?(0,x.jsxs)("div",{className:c()(_().statusBadge,"bad"),children:[(0,x.jsx)(d.KZq,{size:20}),"Canceled"]}):0===e.saturday.totalTrips&&t.saturday.totalTrips>0?(0,x.jsxs)("div",{className:c()(_().statusBadge,"warning"),children:[(0,x.jsx)(d.KZq,{size:20}),"Weekends"]}):void 0}(),details:null,children:[O("Service per hour",N),(0,x.jsx)(y,{lineTitle:"".concat(L,", ").concat(g),baselineTph:h.baseline[g].tripsPerHour,currentTph:h.current[g].tripsPerHour,color:b,highestTph:C}),O(S),(0,x.jsx)(T,{lineId:t.id,lineTitle:"".concat(L,", ").concat(g),startDate:w,serviceHistory:l,color:b,rtd_ridership:r})]})},P=r(5675),R=["A","113B","C","101D","101E","F","113G","101H","109L","117N","107R","120W"],F={kind:function(e){var t=R.indexOf(e.lineKind);if(-1!==t)return t;var r=300+parseInt(e.routeId);return Number.isNaN(r)?1/0:r},lowestServiceFraction:function(e){return e.serviceFraction},highestServiceFraction:function(e){return-e.serviceFraction},lowestTotalTrips:function(e){return e.totalTrips},highestTotalTrips:function(e){return-e.totalTrips}},G=r(2831),M=r.n(G),I=function(e){return!!e},A=function(e){var t=e.lineData,r=e.summaryData,n=e.rtd_ridership,a=e.filter,s=void 0===a?I:a,o=(0,i.useState)(12),l=o[0],d=o[1],u=(0,i.useState)(""),h=u[0],p=u[1],v=(0,i.useState)(""),f=v[0],b=v[1],m=(0,i.useState)("grid"),g=m[0],_=m[1],j=(0,i.useState)("all"),y=j[0],C=j[1],w=(0,i.useMemo)((function(){return function(e,t){var r={};return e.forEach((function(e){r[e.id]=t(e)})),e.sort((function(e,t){var n=r[e.id],i=r[t.id];return n===i?0:n>i?1:-1}))}(Object.values(t).filter((function(e){return s(e)&&function(e,t){var r=e.id,n=e.shortName||e.longName;return!t||(null===n||void 0===n?void 0:n.toLowerCase().includes(t))||r.toLowerCase().includes(t)}(e,h)&&function(e,t){var r=e.lineKind;return"all"===t||("bus"===t?r===t:"rail"===t&&"bus"!==r)}(e,y)})),F[f||"kind"])}),[t,s,h,y,f]),L=(0,i.useMemo)((function(){return w.slice(0,l)}),[w,l]);!function(e){var t=e.element,r=e.enabled,n=e.onRequestMoreItems,a=e.scrollTolerance,s=void 0===a?0:a;(0,i.useEffect)((function(){if(t&&r&&n){var e=function(){t&&r&&function(e,t){return e.scrollHeight-e.scrollTop-t<=e.clientHeight}(t,s)&&n()};e();var i=t===document.documentElement?window:t;return i.addEventListener("scroll",e),function(){return i.removeEventListener("scroll",e)}}return function(){}}),[t,r,s,n])}({element:"undefined"!==typeof document?document.documentElement:null,enabled:l<w.length,scrollTolerance:300,onRequestMoreItems:function(){return d((function(e){return e+12}))}});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:M().header,children:[(0,x.jsx)("a",{href:"https://www.greaterdenvertransit.com/",children:(0,x.jsx)(P.default,{src:"/gdt.png",className:M().logo,height:20,width:20,alt:"Greater Denver Transit Logo"})}),(0,x.jsx)("h1",{children:"RTD Service & Ridership Tracker"}),(0,x.jsxs)("div",{className:M().links,children:[(0,x.jsxs)("span",{children:["Data through ",r.endDate]}),(0,x.jsx)("a",{href:"https://www.greaterdenvertransit.com/",children:"Greater Denver Transit"}),(0,x.jsx)("a",{href:"https://github.com/mathcolo/rtd-dash",children:"Source code"}),(0,x.jsx)("a",{href:"mailto:greaterdenvertransit@gmail.com?subject=Dashboard Feedback",children:"Send feedback"})]})]}),(0,x.jsxs)("div",{className:M().controls,children:[(0,x.jsx)("input",{placeholder:"Filter lines",className:M().filter,value:h,onChange:function(e){p(e.target.value.toLowerCase().trim()),d(12)}}),(0,x.jsxs)("select",{value:g,className:c()(M().select,M().displaySelect),onChange:function(e){return _(e.target.value)},children:[(0,x.jsx)("option",{value:"grid",children:"Show grid"}),(0,x.jsx)("option",{value:"rows",children:"Show rows"})]}),(0,x.jsxs)("select",{className:M().select,value:y,onChange:function(e){var t=e.target.value;C(t),d(12)},children:[(0,x.jsx)("option",{value:"all",children:"All lines"}),(0,x.jsx)("option",{value:"bus",children:"Bus"}),(0,x.jsx)("option",{value:"rail",children:"Rail"})]}),(0,x.jsxs)("select",{className:c()(M().select,"kind"===f&&"default"),value:f,onChange:function(e){b(e.target.value),d(12)},children:[(0,x.jsx)("option",{value:"",disabled:!0,children:"Sort by..."}),(0,x.jsx)("option",{value:"kind",children:"Service kind"}),(0,x.jsx)("option",{value:"highestServiceFraction",children:"Least service cut"}),(0,x.jsx)("option",{value:"lowestServiceFraction",children:"Most service cut"}),(0,x.jsx)("option",{value:"lowestTotalTrips",children:"Least service"}),(0,x.jsx)("option",{value:"highestTotalTrips",children:"Most service"})]})]}),(0,x.jsx)("div",{className:c()(M().lineGrid,g),children:L.map((function(e){return(0,x.jsx)(E,{lineData:e,rtd_ridership:n},e.id)}))})]})},W=r(8146),H=r(8084),Z=r(2727),B=r(6998),q=r.n(B);function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Q=function(e,t){return"".concat(e,"-").concat(t)},V=function(e){var t=e["aria-label"],r=e.baseId,n=e.className,a=e.items,s=e.onSelectValue,o=e.style,l=void 0===o?{}:o,d=e.tabClassName,u=e.value,h=(0,W.x)({selectedId:Q(r,u)});return(0,i.useEffect)((function(){var e=document.querySelector("#".concat(h.selectedId));e&&s(e.getAttribute("data-value"))}),[h.selectedId]),(0,x.jsx)(H.t,K(K({},h),{},{style:l,className:c()(q().tabList,n),"aria-label":t,as:"div",children:a.map((function(e){var t=e.value,n=e.label;return(0,i.createElement)(Z.O,K(K({},h),{},{id:Q(r,t),className:c()(q().tab,d),key:t,as:"div","data-value":t}),(0,x.jsx)("span",{children:n}))}))}))},X=r(9397),Y=r.n(X),J=function(e){var t=e.title,r=e.topRight,n=void 0===r?null:r,i=e.details,a=void 0===i?null:i,s=e.children,o=e.className;return(0,x.jsxs)("div",{className:c()(Y().cardFrame,o),children:[(0,x.jsxs)("div",{className:Y().topRow,children:[(0,x.jsx)("h2",{className:Y().title,children:t}),n]}),a?(0,x.jsx)("div",{className:Y().details,children:a}):null,s]})};function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ee=!0,te=function(e){var t=e.data;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(a.default,{children:[(0,x.jsx)("title",{children:"RTD Service Dashboard"}),(0,x.jsx)("meta",{name:"author",content:"Greater Denver Transit"}),(0,x.jsx)("meta",{name:"description",content:"Data on RTD ridership and service levels"}),(0,x.jsx)("link",{rel:"icon",type:"image/png",href:"./favicon.png"})]}),(0,x.jsx)(A,$({rtd_ridership:void 0},t))]})}},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(1698)}])},9397:function(e){e.exports={cardFrame:"CardFrame_cardFrame__8xo5S",topRow:"CardFrame_topRow__3QvSZ",title:"CardFrame_title__LJqTZ",details:"CardFrame_details__15Epz"}},3013:function(e){e.exports={cancellationText:"LineCard_cancellationText__2yr2Z",cancellationIcon:"LineCard_cancellationIcon__2WcLH",statusBadge:"LineCard_statusBadge__2rhWL",tphChartContainer:"LineCard_tphChartContainer__1nbQa",tphChartLabel:"LineCard_tphChartLabel__3oVgv",sectionLabel:"LineCard_sectionLabel__299Cv",serviceAndRidershipChartContainer:"LineCard_serviceAndRidershipChartContainer__28Quq",tabs:"LineCard_tabs__1NGWl",detailsExpanded:"LineCard_detailsExpanded__3tFB-"}},2831:function(e){e.exports={lineGrid:"LineGrid_lineGrid__2MBV7",header:"LineGrid_header__18Q3z",links:"LineGrid_links__5RdGr",controls:"LineGrid_controls__t7snI",filter:"LineGrid_filter__3Ghd9",select:"LineGrid_select__1jClc",default:"LineGrid_default__1xDF5",displaySelect:"LineGrid_displaySelect__3XO4z"}},6998:function(e){e.exports={tabList:"TabPicker_tabList__2Qoyt",tab:"TabPicker_tab__2sgFs"}}},function(e){e.O(0,[774,90,885,698,8,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);