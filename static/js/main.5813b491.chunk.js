(this["webpackJsonpmap-meetup"]=this["webpackJsonpmap-meetup"]||[]).push([[0],{161:function(e,n,t){e.exports=t(369)},166:function(e,n,t){},368:function(e,n,t){},369:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(43),l=t.n(o),c=(t(166),t(158)),i=t(36),u=t(37);function s(){var e=Object(i.a)(['\n    border-radius: 0 10px 10px 0;\n    /* flex-grow: 1; */\n    width: 25%;\n    color: white;\n    border: none;\n    background-color: #4478FF;\n    outline:none;\n    font-family: Futura, "Trebuchet MS", Arial, sans-serif;\n    &:focus{\n      outline:none;\n    }\n    &:hover{\n      cursor:pointer;\n    }\n']);return s=function(){return e},e}function p(){var e=Object(i.a)(["\n    border-radius: 10px 0 0 10px;\n    width: 100%;\n    height: 100%;\n    border:none;\n    padding: 0px 0px 0px 30px;\n    background-image: url(https://img.icons8.com/all/500/search--v1.png);\n    background-size: 15px;\n    background-repeat: no-repeat;\n    background-position: 10px 12px;\n    &:focus{\n      outline:none;\n    }\n"]);return p=function(){return e},e}function m(){var e=Object(i.a)(["\n    width: 50vw;\n    height: 7vh;\n    display:flex;\n    border-radius: 10px;\n    box-shadow: -3px 4px 10px rgba(0, 0, 0, 0.25);\n"]);return m=function(){return e},e}function d(){var e=Object(i.a)(['\n    font-family: Futura, "Trebuchet MS", Arial, sans-serif;\n    font-size: 80pt;\n    margin: 10px;\n    color: white;\n']);return d=function(){return e},e}function h(){var e=Object(i.a)(["\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    background: linear-gradient(\n      rgba(0, 0, 0, 0.05), \n      rgba(0, 0, 0, 0.45)\n    ),url(https://miro.medium.com/max/4064/1*qYUvh-EtES8dtgKiBRiLsA.png);\n"]);return h=function(){return e},e}var g=u.a.div(h()),f=u.a.h1(d()),v=u.a.div(m()),E=u.a.input(p()),b=u.a.button(s()),x=t(2),w=t(67),y=w.compose,k=w.withProps,j=w.lifecycle,S=t(35).withScriptjs,M=t(366).StandaloneSearchBox,O=y(k({googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyDGlY-kxEPPTY9mgGkHpY6WlPqQQpMflvo&v=3.exp&libraries=geometry,drawing,places",loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"400px"}})}),j({componentWillMount:function(){var e=this,n={};this.setState({places:[],onSearchBoxMounted:function(e){n.searchBox=e},onPlacesChanged:function(){var t=n.searchBox.getPlaces();e.setState({places:t})}})}}),S)((function(e){return r.a.createElement("div",{"data-standalone-searchbox":"",style:{flexGrow:1}},r.a.createElement(M,{ref:e.onSearchBoxMounted,bounds:e.bounds,onPlacesChanged:e.onPlacesChanged},r.a.createElement(E,{type:"text",placeholder:"Search for a place"})),r.a.createElement("ol",null,e.setValue(e.places),console.log(e),e.places.map((function(e){var n=e.place_id,t=e.formatted_address,a=e.geometry.location;return r.a.createElement("li",{key:n},t," at ","(",a.lat(),", ",a.lng(),")")}))))}));function P(e,n){if("update"===n.type)return e}var A=function(e){return P(e,{type:"update"})},B=function(e){e.value,e.setValue;var n=Object(x.f)(),t=Object(a.useReducer)(P,[]),o=Object(c.a)(t,2),l=o[0];o[1];return r.a.createElement(v,null,r.a.createElement(O,{value:l,setValue:A}),r.a.createElement(b,{onClick:function(){return n.push({pathname:"./calculate",data:l})}},"Let's go"))},C=function(){return r.a.createElement(g,null,r.a.createElement(f,null,"where2meet?"),r.a.createElement(B,null))},G=t(156),Y=t(157),L=t(160),T=t(159),W=t(35),z=function(e){Object(L.a)(t,e);var n=Object(T.a)(t);function t(){return Object(G.a)(this,t),n.apply(this,arguments)}return Object(Y.a)(t,[{key:"render",value:function(){var e=Object(W.withScriptjs)(Object(W.withGoogleMap)((function(e){return r.a.createElement(W.GoogleMap,{defaultZoom:8,defaultCenter:{lat:-34.397,lng:150.644}},e.isMarkerShown&&r.a.createElement(W.Marker,{position:{lat:-34.397,lng:150.644}}))})));return r.a.createElement("div",null,r.a.createElement(e,{isMarkerShown:!0,googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyDGlY-kxEPPTY9mgGkHpY6WlPqQQpMflvo&v=3.exp&libraries=geometry,drawing,places",loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"400px"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}})}))}}]),t}(a.Component),F=function(e){return r.a.createElement("div",null,r.a.createElement("p",null,"CALCULATE PAGE "),r.a.createElement(z,null),console.log(e.location.data))},Q=t(92);t(368);var R=function(){return r.a.createElement(Q.a,{basename:"/map-meetup"},r.a.createElement(x.c,null,r.a.createElement(x.a,{path:"/calculate",component:F}),r.a.createElement(x.a,{path:"/"},r.a.createElement(C,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[161,1,2]]]);
//# sourceMappingURL=main.5813b491.chunk.js.map