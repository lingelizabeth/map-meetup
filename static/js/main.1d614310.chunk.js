(this["webpackJsonpmap-meetup"]=this["webpackJsonpmap-meetup"]||[]).push([[0],{160:function(e,n,t){e.exports=t(368)},165:function(e,n,t){},367:function(e,n,t){},368:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(43),l=t.n(o),i=(t(165),t(36)),c=t(37);function u(){var e=Object(i.a)(['\n    border-radius: 0 10px 10px 0;\n    flex-grow: 1;\n    color: white;\n    border: none;\n    background-color: #4478FF;\n    outline:none;\n    font-family: Futura, "Trebuchet MS", Arial, sans-serif;\n    &:focus{\n      outline:none;\n    }\n    &:hover{\n      cursor:pointer;\n    }\n']);return u=function(){return e},e}function s(){var e=Object(i.a)(["\n    border-radius: 10px 0 0 10px;\n    width: 75%;\n    border:none;\n    padding: 2px 2px 2px 32px;\n    background-image: url(https://img.icons8.com/all/500/search--v1.png);\n    background-size: 15px;\n    background-repeat: no-repeat;\n    background-position: 10px 12px;\n    &:focus{\n      outline:none;\n    }\n"]);return s=function(){return e},e}function p(){var e=Object(i.a)(["\n    width: 50vw;\n    height: 7vh;\n    display:flex;\n    border-radius: 10px;\n    box-shadow: -3px 4px 10px rgba(0, 0, 0, 0.25);\n"]);return p=function(){return e},e}function m(){var e=Object(i.a)(['\n    font-family: Futura, "Trebuchet MS", Arial, sans-serif;\n    font-size: 80pt;\n    margin: 10px;\n    color: white;\n']);return m=function(){return e},e}function d(){var e=Object(i.a)(["\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    background: linear-gradient(\n      rgba(0, 0, 0, 0.05), \n      rgba(0, 0, 0, 0.45)\n    ),url(https://miro.medium.com/max/4064/1*qYUvh-EtES8dtgKiBRiLsA.png);\n"]);return d=function(){return e},e}var h=c.a.div(d()),g=c.a.h1(m()),f=c.a.div(p()),x=(c.a.input(s()),c.a.button(u())),b=t(2),E=t(67),v=E.compose,w=E.withProps,y=E.lifecycle,k=t(35).withScriptjs,S=t(365).StandaloneSearchBox,j=v(w({googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyDGlY-kxEPPTY9mgGkHpY6WlPqQQpMflvo&v=3.exp&libraries=geometry,drawing,places",loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"400px"}})}),y({componentWillMount:function(){var e=this,n={};this.setState({places:[],onSearchBoxMounted:function(e){n.searchBox=e},onPlacesChanged:function(){var t=n.searchBox.getPlaces();e.setState({places:t})}})}}),k)((function(e){return r.a.createElement("div",{"data-standalone-searchbox":""},r.a.createElement(S,{ref:e.onSearchBoxMounted,bounds:e.bounds,onPlacesChanged:e.onPlacesChanged},r.a.createElement("input",{type:"text",placeholder:"Customized your placeholder",style:{boxSizing:"border-box",border:"1px solid transparent",width:"240px",height:"32px",padding:"0 12px",borderRadius:"3px",boxShadow:"0 2px 6px rgba(0, 0, 0, 0.3)",fontSize:"14px",outline:"none",textOverflow:"ellipses"}})),r.a.createElement("ol",null,e.places.map((function(e){var n=e.place_id,t=e.formatted_address,a=e.geometry.location;return r.a.createElement("li",{key:n},t," at ","(",a.lat(),", ",a.lng(),")")}))))})),M=function(e){e.value,e.setValue;var n=Object(b.f)();return r.a.createElement(f,null,r.a.createElement(j,null),r.a.createElement(x,{onClick:function(){return n.push("./calculate")}},"Let's go"))},O=function(){return r.a.createElement(h,null,r.a.createElement(g,null,"where2meet?"),r.a.createElement(M,null))},P=t(156),C=t(157),A=t(159),B=t(158),z=t(35),G=function(e){Object(A.a)(t,e);var n=Object(B.a)(t);function t(){return Object(P.a)(this,t),n.apply(this,arguments)}return Object(C.a)(t,[{key:"render",value:function(){var e=Object(z.withScriptjs)(Object(z.withGoogleMap)((function(e){return r.a.createElement(z.GoogleMap,{defaultZoom:8,defaultCenter:{lat:-34.397,lng:150.644}},e.isMarkerShown&&r.a.createElement(z.Marker,{position:{lat:-34.397,lng:150.644}}))})));return r.a.createElement("div",null,r.a.createElement(e,{isMarkerShown:!0,googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyDGlY-kxEPPTY9mgGkHpY6WlPqQQpMflvo&v=3.exp&libraries=geometry,drawing,places",loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"400px"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}})}))}}]),t}(a.Component),Y=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"CALCULATE PAGE (using react-google-maps)"),r.a.createElement(G,null))},L=t(92);t(367);var T=function(){return r.a.createElement(L.a,{basename:"/map-meetup"},r.a.createElement(b.c,null,r.a.createElement(b.a,{path:"/calculate"},r.a.createElement(Y,null)),r.a.createElement(b.a,{path:"/"},r.a.createElement(O,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[160,1,2]]]);
//# sourceMappingURL=main.1d614310.chunk.js.map