"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5820],{5820:(S,T,u)=>{u.r(T),u.d(T,{Tab3PageModule:()=>_});var r=u(712),y=u(4755),k=u(5030),M=u(581),f=u(4294),e=u(2223),m=u(5861),v=u(6090);let C=(()=>{class n{constructor(t){this.elemenRef=t}ngOnInit(){this.loadMap()}getMapStyles(){return[{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"transit.station",elementType:"labels",stylers:[{visibility:"off"}]}]}userTracking(t){return{createCenterMarker:()=>{new google.maps.Marker({position:t.getCenter(),map:t})},createCircleAroundUserMarker:()=>{new google.maps.Circle({strokeColor:"#00FF00",strokeOpacity:.8,strokeWeight:2,fillColor:"#00FF00",fillOpacity:.35,map:t,center:t.getCenter(),radius:2e3})},getUserLocation:()=>(0,m.Z)(function*(){return new Promise((o,a)=>{navigator.geolocation.getCurrentPosition(i=>o(i.coords),i=>a(i))})})(),trackUserLocation(){var o=this;return(0,m.Z)(function*(){try{const a=yield o.getUserLocation(),i=o.convertToLatLngLiteral(a);o.updateMap(i);const p=o.drawMarker(i);setInterval((0,m.Z)(function*(){const c=yield o.getUserLocation(),l=o.convertToLatLngLiteral(c);o.updateMap(l),p.setPosition(l)}),5e3)}catch(a){console.error("Error getting user location:",a)}})()},convertToLatLngLiteral:o=>({lat:o.latitude,lng:o.longitude}),updateMap(o){t.setCenter(o)},drawMarker:o=>new google.maps.Marker({position:o,map:t,title:"User Location"})}}search(t){return(0,m.Z)(function*(){const o=new google.maps.places.PlacesService(t);let a=[];const i=()=>{if(a.length)for(let c=0;c<a.length;c++){const l=a[c];if(l&&l.geometry){console.log(l.name,l.geometry.location);const s="#"+Math.floor(16777215*Math.random()).toString(16);new google.maps.Marker({position:l.geometry.location,map:t,icon:{path:google.maps.SymbolPath.CIRCLE,fillColor:s,fillOpacity:.8,strokeColor:s,strokeWeight:2,scale:8},label:{text:l.name,color:"blue",fontSize:"12px",fontWeight:"bold"}}),new google.maps.Circle({strokeColor:s,strokeOpacity:.8,strokeWeight:2,fillColor:s,fillOpacity:.35,map:t,center:l.geometry.location,radius:500})}}};return{placeSearch:function(){var c=(0,m.Z)(function*(l){try{return a=yield new Promise((s,d)=>{o.nearbySearch(l,(h,Z)=>{Z===google.maps.places.PlacesServiceStatus.OK?s(h||[]):(console.error("Nearby search failed:",Z),s([]))})}),{results:a,addMarkers:i}}catch(s){return console.error("Error performing search:",s),{results:[],addMarkers:i}}});return function(s){return c.apply(this,arguments)}}()}})()}loadMap(){var t=this;return(0,m.Z)(function*(){const o=yield t.getGeolocation(),a=t.elemenRef.nativeElement.querySelector("#mapCanvas");try{const i=t.getMapStyles(),p=new google.maps.Map(a,{center:{lat:o.lat,lng:o.lng},zoom:12,styles:i}),c=t.userTracking(p);c.createCenterMarker(),c.createCircleAroundUserMarker();const s={bounds:t.calculateBounds({lat:o.lat,lng:o.lng},2e4),type:"restaurant"},d=yield t.search(p),{addMarkers:Z}=yield d.placeSearch(s);Z()}catch(i){console.log("error",i)}})()}getGeolocation(){return(0,m.Z)(function*(){try{const t=yield v.b.getCurrentPosition(),o=t.coords.latitude,a=t.coords.longitude;return console.log("Latitude:",o),console.log("Longitude:",a),{lat:o,lng:a}}catch(t){return console.error("Error getting geolocation",t),{lat:37.7749,lng:-122.4194}}})()}calculateBounds(t,o){const i=o/6371e3,p=o/(6371e3*Math.cos(Math.PI/180*t.lat)),c=t.lat+180*i/Math.PI,l=t.lng+180*p/Math.PI,s=t.lat-180*i/Math.PI,d=t.lng-180*p/Math.PI;return new google.maps.LatLngBounds(new google.maps.LatLng(s,d),new google.maps.LatLng(c,l))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-map"]],decls:1,vars:0,consts:[["id","mapCanvas"]],template:function(t,o){1&t&&e._UZ(0,"div",0)},styles:["#mapCanvas[_ngcontent-%COMP%]{display:inline-block;width:100%;height:100%}"]}),n})();function A(n,g){if(1&n){const t=e.EpF();e.TgZ(0,"ion-content")(1,"ion-searchbar",10),e.NdJ("click",function(){e.CHM(t),e.oxw();const a=e.MAs(16);return e.KtG(a.setCurrentBreakpoint(.75))}),e.qZA(),e.TgZ(2,"ion-list")(3,"ion-item")(4,"ion-label",11),e._uU(5,"range"),e.qZA(),e._UZ(6,"ion-range",12),e.qZA(),e.TgZ(7,"ion-item")(8,"ion-avatar",11),e._UZ(9,"ion-img",13),e.qZA(),e.TgZ(10,"ion-label")(11,"h2"),e._uU(12,"Daniel Smith"),e.qZA(),e.TgZ(13,"p"),e._uU(14,"Product Designer"),e.qZA()()(),e.TgZ(15,"ion-item")(16,"ion-avatar",11),e._UZ(17,"ion-img",14),e.qZA(),e.TgZ(18,"ion-label")(19,"h2"),e._uU(20,"Greg Smith"),e.qZA(),e.TgZ(21,"p"),e._uU(22,"Director of Operations"),e.qZA()()(),e.TgZ(23,"ion-item")(24,"ion-avatar",11),e._UZ(25,"ion-img",15),e.qZA(),e.TgZ(26,"ion-label")(27,"h2"),e._uU(28,"Zoey Smith"),e.qZA(),e.TgZ(29,"p"),e._uU(30,"CEO"),e.qZA()()()()()}2&n&&(e.xp6(6),e.Q6J("min",0)("max",10)("value",5)("pin",!0)("ticks",!0)("snaps",!0))}function U(n,g){if(1&n){const t=e.EpF();e.TgZ(0,"ion-content")(1,"ion-searchbar",10),e.NdJ("click",function(){e.CHM(t),e.oxw();const a=e.MAs(16);return e.KtG(a.setCurrentBreakpoint(.75))}),e.qZA(),e.TgZ(2,"ion-list")(3,"ion-item")(4,"ion-avatar",11),e._UZ(5,"ion-img",16),e._uU(6," kkkk "),e.qZA(),e.TgZ(7,"ion-label")(8,"h2"),e._uU(9,"Connor Smith"),e.qZA(),e.TgZ(10,"p"),e._uU(11,"Sales Rep"),e.qZA()()(),e.TgZ(12,"ion-item")(13,"ion-avatar",11),e._UZ(14,"ion-img",13),e.qZA(),e.TgZ(15,"ion-label")(16,"h2"),e._uU(17,"Daniel Smith"),e.qZA(),e.TgZ(18,"p"),e._uU(19,"Product Designer"),e.qZA()()(),e.TgZ(20,"ion-item")(21,"ion-avatar",11),e._UZ(22,"ion-img",14),e.qZA(),e.TgZ(23,"ion-label")(24,"h2"),e._uU(25,"Greg Smith"),e.qZA(),e.TgZ(26,"p"),e._uU(27,"Director of Operations"),e.qZA()()(),e.TgZ(28,"ion-item")(29,"ion-avatar",11),e._UZ(30,"ion-img",15),e.qZA(),e.TgZ(31,"ion-label")(32,"h2"),e._uU(33,"Zoey Smith"),e.qZA(),e.TgZ(34,"p"),e._uU(35,"CEO"),e.qZA()()()()()}}const b=function(){return[0,.25,.5,.75]},P=[{path:"",component:(()=>{class n{constructor(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-tab3"]],decls:21,vars:8,consts:[[3,"translucent"],["value","all"],["id","open-modal1","expand","block","value","all"],["id","open-modal2","expand","block","value","all"],[3,"fullscreen"],["collapse","condense"],["size","large"],["trigger","open-modal1",3,"initialBreakpoint","breakpoints"],["modal",""],["trigger","open-modal2",3,"initialBreakpoint","breakpoints"],["placeholder","Search",3,"click"],["slot","start"],["aria-label","Custom range",3,"min","max","value","pin","ticks","snaps"],["src","https://i.pravatar.cc/300?u=a"],["src","https://i.pravatar.cc/300?u=d"],["src","https://i.pravatar.cc/300?u=e"],["src","https://i.pravatar.cc/300?u=b"]],template:function(t,o){1&t&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-segment",1)(3,"ion-segment-button",2)(4,"ion-label"),e._uU(5,"search"),e.qZA()(),e.TgZ(6,"ion-segment-button",3)(7,"ion-label"),e._uU(8,"trip"),e.qZA()()()()(),e.TgZ(9,"ion-content",4)(10,"ion-header",5)(11,"ion-toolbar")(12,"ion-title",6),e._uU(13,"Tab 3"),e.qZA()()(),e._UZ(14,"app-map"),e.TgZ(15,"ion-modal",7,8),e.YNc(17,A,31,6,"ng-template"),e.qZA(),e.TgZ(18,"ion-modal",9,8),e.YNc(20,U,36,0,"ng-template"),e.qZA()()),2&t&&(e.Q6J("translucent",!0),e.xp6(9),e.Q6J("fullscreen",!0),e.xp6(6),e.Q6J("initialBreakpoint",.25)("breakpoints",e.DdM(6,b)),e.xp6(3),e.Q6J("initialBreakpoint",.25)("breakpoints",e.DdM(7,b)))},dependencies:[r.BJ,r.W2,r.Gu,r.Xz,r.Ie,r.Q$,r.q_,r.I_,r.VI,r.cJ,r.GO,r.wd,r.sr,r.ki,r.QI,r.j9,C]}),n})()}];let L=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[f.Bz.forChild(P),f.Bz]}),n})(),_=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[r.Pc,y.ez,k.u5,M.e,L]}),n})()}}]);