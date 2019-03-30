(function(t){function e(e){for(var o,s,r=e[0],c=e[1],l=e[2],u=0,h=[];u<r.length;u++)s=r[u],a[s]&&h.push(a[s][0]),a[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},a={app:0},i=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/neptunebeta/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0aac":function(t,e,n){},"0ded":function(t,e,n){"use strict";var o=n("c1ed"),a=n.n(o);a.a},2949:function(t,e,n){},5013:function(t,e,n){"use strict";var o=n("a6dd"),a=n.n(o);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{hide:!t.loaded,"prevent-scrolling":t.fullscreen},attrs:{id:"app"}},[t._m(0),n("div",{ref:"canvas",attrs:{id:"canvas"}},[n("svg",{attrs:{viewBox:"0 0 1920 1080"}},[n("Sun"),n("Piano",{directives:[{name:"show",rawName:"v-show",value:t.showPiano&&"piano"===t.appMode,expression:"showPiano && appMode === 'piano'"}],attrs:{width:t.pianoWidth,height:t.pianoHeight,x:t.canvas.width-t.pianoWidth-25,y:13,highlight:!0,opacity:"0.4"}}),t._l(t.planets,function(e){return n("Planet",{key:e.name,staticClass:"myPlanet",attrs:{name:e.name},on:{interaction:t.interaction}})}),n("circle",{attrs:{id:"ball",cx:"300",cy:"300",r:"50",fill:"red"}})],2)]),n("Bottombar",{ref:"bottombar",on:{lock:t.lock}}),n("ShareOverlay",{directives:[{name:"show",rawName:"v-show",value:t.showShare,expression:"showShare"}],staticClass:"overlay"}),n("InfoOverlay",{directives:[{name:"show",rawName:"v-show",value:t.showInfo,expression:"showInfo"}],staticClass:"overlay"})],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"stars"},[n("h1",[t._v("lorem")])])}],s=(n("20d6"),n("7514"),n("7f7f"),n("386d"),n("a4bb")),r=n.n(s),c=(n("ac6a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{width:"100%",height:"100%"}},[n("defs",[n("filter",{attrs:{id:"shadow-"+t.name,x:"-50%",y:"-50%",width:"400%",height:"400%"}},[n("feDropShadow",t._b({attrs:{dx:"0",dy:"0",stdDeviation:t.stdDeviation,"flood-opacity":"1"}},"feDropShadow",{"flood-color":t.floodColor},!1))],1)]),n("g",{ref:"planetGroup",staticClass:"planet",attrs:{id:"planet-"+t.name},on:{touchstart:function(e){return e.stopPropagation(),t.click(e)},mousedown:t.click}},[n("circle",{class:{hasRecording:t.hasRecording},attrs:{r:t.size/2,fill:t.color,filter:"url(#shadow-"+t.name+")"}},[t.isRecording?n("animate",{attrs:{attributeType:"XML",attributeName:"fill",values:"#800;#f00;#800",dur:"0.8s",repeatCount:"indefinite"}}):t._e()]),n("text",{staticClass:"planetLabel",attrs:{y:t.size/2+30}},[t._v("\n            "+t._s(t.$t(t.name))+"\n        ")]),n("Fact",{directives:[{name:"show",rawName:"v-show",value:t.showFact,expression:"showFact"}],attrs:{fact:t.fact,size:t.size}})],1)])}),l=[],d=(n("6762"),n("2fdb"),n("642d")),u=n.n(d),h=n("1e5c"),p={pt:{planet:"Planeta",mercury:"Mercúrio",venus:"Vénus",earth:"Terra",mars:"Marte",jupiter:"Júpiter",saturn:"Saturno",uranus:"Urano",neptune:"Neptuno",modes:{ionian:"jónio",dorian:"dórico",phrygian:"frígio",lydian:"lídio",mixolydian:"mixolídio",aeolian:"eólio",locrian:"lócrio"},major:"maior",minor:"menor",facts:{mercury:[{fact:"A year lasts only 88 Earth days on Mercury."}],venus:[{fact:"Venus rotates very slowly: the planet takes 243 Earth days to complete 1 rotation around its axis."}],earth:[{fact:"The Earth is the only planet in our solar system not to be named after a Greek or Roman deity."},{fact:"Earth formed approximately 4.54 billion years ago and is the only known planet to support life."}],mars:[{fact:"The planet is named after Mars, the Roman god of war."},{fact:"Mars has seasons like Earth, but they last twice as long."},{fact:"David Bowie has an album called “Life on Mars”."}],jupiter:[{fact:"Jupiter is two times more massive than all the other planets combined."},{fact:"On Jupiter you would feel the force of gravity about 2.4 times stronger than on Earth's surface"}],saturn:[{fact:"Saturn is so big that Earth could fit into it whooping 755 times!"},{fact:"The circumstances on Saturn are simply too hostile for the emergence of life."}],uranus:[{fact:"Uranus’ poles lies west and east, equator South to north"},{fact:"Uranus’ moons are named after characters created by William Shakespeare and Alexander Pope"}],neptune:[{fact:"It takes Neptune almost 165 Earth years to circle around the sun."},{fact:"Galilei was the first person who saw Neptune although he did not recognize it as a planet."}]}},en:{planet:"Planet",mercury:"Mercury",venus:"Venus",earth:"Earth",mars:"Mars",jupiter:"Jupiter",saturn:"Saturn",uranus:"Uranus",neptune:"Neptune",modes:{ionian:"ionian",dorian:"dorian",phrygian:"phrygian",lydian:"lydian",mixolydian:"mixolydian",aeolian:"aeolian",locrian:"locrian"},major:"major",minor:"minor",facts:{mercury:[{fact:"A year lasts only 88 Earth days on Mercury."},{fact:"The Romans knew of seven bright objects in the sky: the Sun, the Moon, and the five brightest planets"}],venus:[{fact:"Venus is a Roman goddess, whose functions encompassed love, beauty, desire, sex, fertility, prosperity and victory."},{fact:"Venus rotates very slowly: the planet takes 243 Earth days to complete 1 rotation around its axis."}],earth:[{fact:"The Earth is the only planet in our solar system not to be named after a Greek or Roman deity."},{fact:"Earth formed approximately 4.54 billion years ago and is the only known planet to support life."}],mars:[{fact:"The planet is named after Mars, the Roman god of war."},{fact:"Mars has seasons like Earth, but they last twice as long."},{fact:"David Bowie has an album called “Life on Mars”."}],jupiter:[{fact:"Jupiter is two times more massive than all the other planets combined."},{fact:"On Jupiter you would feel the force of gravity about 2.4 times stronger than on Earth's surface"}],saturn:[{fact:"Saturn is so big that Earth could fit into it whooping 755 times!"},{fact:"The circumstances on Saturn are simply too hostile for the emergence of life."}],uranus:[{fact:"Uranus’ poles lies west and east, equator South to north"},{fact:"Uranus’ moons are named after characters created by William Shakespeare and Alexander Pope"}],neptune:[{fact:"It takes Neptune almost 165 Earth years to circle around the sun."},{fact:"Galilei was the first person who saw Neptune although he did not recognize it as a planet."}]}}},f=void 0,g=new o["a"].observable({canvas:{width:1920,height:1080},planets:[{name:"mercury",color:"#FF8D02",size:68,index:0},{name:"venus",color:"#F8B763",size:73,index:1},{name:"earth",color:"#0274FF",size:100,index:2},{name:"mars",color:"#FF4A02",size:146,index:3},{name:"jupiter",color:"#FFCF54",size:166,index:4},{name:"saturn",color:"#FFE9B3",size:112,index:5},{name:"uranus",color:"#01AE83",size:112,index:6},{name:"neptune",color:"#1842FF",size:84,index:7}],pianoModes:r()(p.en.modes),pianoMode:r()(p.en.modes)[0],appMode:"piano",showPiano:!0,showShare:!1,showInfo:!1,locked:!1,muted:!1,loaded:!1,fullscreen:!1,recording:function(){return f.recorder.recording},recordingTimeout:null,recordingPlanet:"",sounds:{},soundscapes:{},recordings:{},locales:r()(p),isPwa:!1,isMobile:!1}),m=["C3","Db3","D3","Eb3","E3","F3","Gb3","G3","Ab3","A3","Bb3","B3","C4"];h["Howler"].html5Poolsize=30,g.planets.forEach(function(t){t.size*=1.35}),m.forEach(function(t){g.sounds[t]=new h["Howl"]({src:"sounds/piano/".concat(t,".mp3"),autoplay:!1,volume:.6,loop:!1,onend:function(){}})}),g.planets.forEach(function(t){g.soundscapes[t.name]=new h["Howl"]({src:"sounds/nasa/".concat(t.name,".mp3"),autoplay:!1,volume:.6,loop:!0})});var v=g;window.store=g;var w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.boxWidth,height:t.boxHeight,viewBox:"0 0 "+t.boxWidth+" "+t.boxHeight}},[n("path",{staticClass:"fact",attrs:{d:"M-1808.41-1679.5H-1972a17.5,17.5,0,0,1-17.5-17.5v-126a17.5,17.5,0,0,1,17.5-17.5h365a17.5,17.5,0,0,1,17.5,17.5v126a17.5,17.5,0,0,1-17.5,17.5h-163.2l-19.3,24.63Z",transform:"translate("+t.boxX+" "+t.boxY+")"}}),n("foreignObject",{staticClass:"factText",attrs:{width:t.textWidth,height:t.textHeight,transform:"translate("+t.textX+" "+t.textY+")"}},[n("p",[t._v("\n            "+t._s(t.fact)+"\n        ")])])],1)},b=[],y=(n("c5f6"),{props:{fact:{type:String,required:!0},size:{type:Number,required:!0}},data:function(){return{boxWidth:400,boxHeight:187,offsetX:1990,offsetY:1841,padding:10}},computed:{boxX:function(){return this.offsetX-this.boxWidth/2},boxY:function(){return this.offsetY-this.boxHeight-this.size/2-this.padding},textX:function(){return-this.boxWidth/2+.1*this.boxWidth/2},textY:function(){return-this.boxHeight-this.$parent.size/2},textWidth:function(){return.9*this.boxWidth},textHeight:function(){return 1*this.boxHeight}}}),M=y,x=(n("a7fb"),n("2877")),k=Object(x["a"])(M,w,b,!1,null,null,null),O=k.exports,P={name:"Planet",components:{Fact:O},props:{name:{type:String,required:!0}},data:function(){return{playing:!1,factIndex:0,showFact:!1,holding:!1,dragging:!1,amplitude:1,noteOns:[],hasTouch:!1,hasRecording:!1}},computed:{planet:function(){var t=this;return v.planets.find(function(e){return e.name===t.name})},index:function(){return this.planet.index},recording:function(){return v.recordings[this.name]},floodColor:function(){return("piano"===this.appMode||"nasa"===this.appMode||"record"===this.appMode)&&this.playing?"var(--active)":this.color},size:function(){return this.planet.size},color:function(){return this.planet.color},appMode:function(){return v.appMode},isRecording:function(){return this.holding&&"record"===v.appMode},note:function(){var t=7===this.index?0:this.index,e=u.a.scale("c",v.pianoMode).simple()[t];e.includes("#")&&(e=u.a.note(e).enharmonics().find(function(t){return-1===t.accidentalValue()}).scientific().slice(0,-1)),e=e[0].toUpperCase()+e.slice(1,e.length);var n=7!==this.index?"3":"4",o="".concat(e).concat(n);return o},sound:function(){return v.sounds[this.note]},stdDeviation:function(){return this.playing?15:5},fact:function(){return-1===this.factIndex?"":this.facts[this.factIndex].fact},facts:function(){return this.$t("facts.".concat(this.planet.name))}},watch:{holding:function(){"piano"===this.appMode||"nasa"===this.appMode?this.holding&&this.toggleFact():"record"===this.appMode&&this.toggleRecording()},isRecording:function(){console.log("recording is now",this.isRecording)},hasRecording:function(){}},created:function(){var t=this;this.$root.$on("noteOn",this.noteOn),this.$root.$on("noteOff",this.noteOff),this.$root.$on("amplitude",function(e){if(e.name===t.name){if(t.amplitude=e.amplitude,"nasa"===t.appMode){var n=v.soundscapes[t.name].volume();console.log("fading NASA sound ".concat(n," -> ").concat(t.amplitude)),v.soundscapes[t.name].fade(n,t.amplitude,1e3)}if("record"===t.appMode)try{v.recordings[t.name].volume=t.amplitude}catch(o){console.warn("couldnt set amplitude for recording")}}})},mounted:function(){var t=this;o["a"].nextTick(function(){v.planets[t.index].draggable.addEventListener("press",function(){console.log("name before emitting",t.name),t.$emit("interaction",t.name),t.holdingTimeoutId=window.setTimeout(function(){t.holding=!0},300)}),v.planets[t.index].draggable.addEventListener("release",function(){console.log("releasing"),t.release()}),v.planets[t.index].draggable.addEventListener("dragstart",function(){t.locked||(console.log("drag started"),t.dragging=!0,t.holding=!1,window.clearTimeout(t.holdingTimeoutId))}),v.planets[t.index].draggable.addEventListener("dragend",function(){t.locked||(t.dragging=!1,console.log("DRAG ENDED!"))}),t.amplitude=t.$parent.determineAmplitude(t.name)})},methods:{initHammer:function(){var t=this,e=document.querySelector("#planet-".concat(this.name)),n=new window.Hammer.Manager(e);n.add(new window.Hammer.Press({time:300})),n.on("press pressup",function(e){"piano"===t.appMode||"nasa"===t.appMode?"press"===e.type&&t.toggleFact():"press"===e.type?t.play():"pressup"===e.type&&t.play()})},play:function(){this.$root.$emit("noteOn",this.index)},noteOn:function(t){t===this.index&&("record"!==v.appMode||this.hasRecording)&&("piano"===v.appMode?this.playPiano():"nasa"===v.appMode?this.playNASA():"record"===v.appMode&&this.playRecord())},noteOff:function(t){t===this.index&&(this.playing=!1)},playPiano:function(){var t=this;this.$root.$emit("pianoOn",this.note);var e=v.sounds[this.note].volume();this.sound.volume(this.amplitude),console.log("pianoOn",e,v.sounds[this.note].volume(),"should be",this.amplitude),this.sound.play(),this.noteOns.push(this.note),this.playing=!0,v.sounds[this.note].on("end",function(){if(0!==t.noteOns.length){var e=t.noteOns.shift();console.log("ending note",{note:e}),t.sound.playing()&&t.noteOns[0]==e||(t.$root.$emit("noteOff",t.index),t.$root.$emit("pianoOff",e))}else console.log("trying to stop a sound that doesnt exist")})},toggleRecording:function(){var t=this;this.isRecording?v.recorder.start(v.recordings,this.name):(v.recorder.stop(),this.hasRecording=!0,this.playing=!1,setTimeout(function(){v.recordings[t.name]&&v.recordings[t.name].addEventListener("ended",function(){console.log("ended"),t.playing=!1})},1e3))},playNASA:function(){var t=this;this.playing?(v.soundscapes[this.name].fade(this.amplitude,0,1e3),setTimeout(function(){v.soundscapes[t.name].stop()},1e3),this.playing=!1):(v.soundscapes[this.name].volume(this.amplitude),v.soundscapes[this.name].play(),v.soundscapes[this.name].fade(0,this.amplitude,2e3),this.playing=!0)},playRecord:function(){this.playing?(v.recordings[this.name]&&v.recordings[this.name].pause(),v.recordings[this.name]&&(v.recordings[this.name].currentTime=0)):v.recordings[this.name]&&v.recordings[this.name].play(),this.playing=!this.playing},toggleFact:function(){this.showFact&&(this.factIndex=(this.factIndex+1)%this.facts.length),this.showFact=!this.showFact},click:function(t){"touchstart"===t.type&&(this.hasTouch=!0),this.hasTouch&&"touchstart"!==t.type||v.planets[this.index].draggable.enabled()||this.release()},release:function(){"piano"===this.appMode||"nasa"===this.appMode?this.holding||this.dragging||this.play():"record"!==this.appMode||this.dragging||this.recording||this.play(),this.holding=!1,window.clearTimeout(this.holdingTimeoutId)}}},C=P,I=(n("5013"),Object(x["a"])(C,c,l,!1,null,null,null)),$=I.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid",attrs:{id:"bottombar"}},[n("div",{staticClass:"btnIcon",attrs:{id:"btnMute"},on:{click:t.toggleMute}},[n("FontAwesomeIcon",{staticClass:"arrow icon",attrs:{icon:t.muted?"volume-mute":"volume-up"}})],1),n("div",{staticClass:"btnIcon",attrs:{id:"btnLanguage"},on:{click:t.toggleLanguage}},[n("div",[t._v(t._s(t.locale.toUpperCase()))])]),n("div",{class:{hide:"piano"!==t.appMode},attrs:{id:"pianoMode"}},[n("FontAwesomeIcon",{staticClass:"arrow icon",attrs:{icon:"arrow-circle-left"},on:{click:function(e){return t.changePianoMode(-1)}}}),n("div",{attrs:{id:"pianoModeText"}},[t._v("\n            "+t._s(t.pianoModeText)+"\n        ")]),n("FontAwesomeIcon",{staticClass:"arrow icon",attrs:{icon:"arrow-circle-right"},on:{click:function(e){return t.changePianoMode(1)}}})],1),n("div",{attrs:{id:"appModes"}},[n("div",{staticClass:"appMode",class:{active:"piano"===t.appMode},attrs:{id:"appModePiano"},on:{click:function(e){return t.changeMode("piano")}}},[n("Piano",{staticClass:"appModeIcon",attrs:{highlight:!1}})],1),n("div",{staticClass:"appMode",class:{active:"nasa"===t.appMode},attrs:{id:"appModeNASA"},on:{click:function(e){return t.changeMode("nasa")}}},[n("FontAwesomeIcon",{staticClass:"appModeIcon icon",attrs:{icon:"satellite"}})],1),n("div",{staticClass:"appMode",class:{active:"record"===t.appMode},attrs:{id:"appModeRecord"},on:{click:function(e){return t.changeMode("record")}}},[n("FontAwesomeIcon",{staticClass:"appModeIcon icon",attrs:{icon:"microphone"}})],1)]),n("div",{staticClass:"btnIcon",class:{active:t.showPiano,hide:"piano"!==t.appMode},attrs:{id:"btnPiano"},on:{click:t.togglePiano}},[n("Piano",{attrs:{fill:"black"}})],1),n("div",{staticClass:"btnIcon",class:{active:t.locked},attrs:{id:"btnLock"},on:{click:function(e){return t.$emit("lock",!t.locked)}}},[n("FontAwesomeIcon",{staticClass:"icon",attrs:{icon:t.locked?"lock":"unlock"}})],1),n("div",{staticClass:"btnIcon",class:{isMobile:t.isMobile},attrs:{id:"btnShare"},on:{click:t.toggleShare}},[n("FontAwesomeIcon",{staticClass:"icon",attrs:{icon:"link"}})],1),n("div",{staticClass:"btnIcon",attrs:{id:"btnInfo"},on:{click:t.toggleInfo}},[n("FontAwesomeIcon",{staticClass:"icon",attrs:{icon:"info"}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isFullscreenCapable,expression:"isFullscreenCapable"}],staticClass:"btnIcon",class:{hide:t.isPwa},attrs:{id:"btnFullscreen"},on:{click:t.toggleFullscreen}},[n("Resize",{attrs:{expand:!t.fullscreen}})],1)])},E=[],F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{id:"mypiano",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 426.629 243.788"}},[n("g",{attrs:{id:"Piano",transform:"translate(-1474.033 -84.212)"}},[n("g",{staticClass:"white",attrs:{id:"C3",transform:"translate(1474.033 84.212)"}},[n("rect",{attrs:{width:"53.329",height:"243.788"}})]),n("g",{staticClass:"white",attrs:{id:"D3",transform:"translate(1527.362 84.212)"}},[n("rect",{attrs:{width:"53.329",height:"243.788"}})]),n("g",{staticClass:"white",attrs:{id:"E3",transform:"translate(1580.69 84.212)"}},[n("rect",{attrs:{width:"53.329",height:"243.788"}})]),n("g",{staticClass:"white",attrs:{id:"F3",transform:"translate(1634.019 84.212)"}},[n("rect",{attrs:{width:"53.329",height:"243.788"}})]),n("g",{staticClass:"white",attrs:{id:"G3",transform:"translate(1687.348 84.212)"}},[n("rect",{attrs:{width:"53.329",height:"243.788"}})]),n("g",{staticClass:"white",attrs:{id:"A3",transform:"translate(1740.676 84.212)"}},[n("rect",{attrs:{width:"53.329",height:"243.788"}})]),n("g",{staticClass:"white",attrs:{id:"B3",transform:"translate(1794.005 84.212)"}},[n("rect",{attrs:{width:"53.329",height:"243.788"}})]),n("g",{staticClass:"white",attrs:{id:"C4",transform:"translate(1847.333 84.212)"}},[n("rect",{attrs:{width:"53.329",height:"243.788"}})]),n("path",{attrs:{id:"Db3",d:"M0,0H36.568a0,0,0,0,1,0,0V154.986a5,5,0,0,1-5,5H5a5,5,0,0,1-5-5V0A0,0,0,0,1,0,0Z",transform:"translate(1509.078 84.212)"}}),n("path",{attrs:{id:"Eb3",d:"M0,0H36.568a0,0,0,0,1,0,0V154.986a5,5,0,0,1-5,5H5a5,5,0,0,1-5-5V0A0,0,0,0,1,0,0Z",transform:"translate(1562.406 84.212)"}}),n("path",{attrs:{id:"Gb3",d:"M0,0H36.568a0,0,0,0,1,0,0V154.986a5,5,0,0,1-5,5H5a5,5,0,0,1-5-5V0A0,0,0,0,1,0,0Z",transform:"translate(1669.063 84.212)"}}),n("path",{attrs:{id:"Ab3",d:"M0,0H36.568a0,0,0,0,1,0,0V154.986a5,5,0,0,1-5,5H5a5,5,0,0,1-5-5V0A0,0,0,0,1,0,0Z",transform:"translate(1722.392 84.212)"}}),n("path",{attrs:{id:"Bb3",d:"M0,0H36.568a0,0,0,0,1,0,0V154.986a5,5,0,0,1-5,5H5a5,5,0,0,1-5-5V0A0,0,0,0,1,0,0Z",transform:"translate(1775.721 84.212)"}})])])},_=[],A={props:{highlight:{type:Boolean,default:!1}},created:function(){this.highlight&&(this.$root.$on("pianoOn",this.pianoOn),this.$root.$on("pianoOff",this.pianoOff))},methods:{pianoOn:function(t){this.highlight&&this.setHighlight(t,!0)},pianoOff:function(t){console.log("pianoOff",{note:t}),this.highlight&&this.setHighlight(t,!1)},setHighlight:function(t,e){var n=this.$el.querySelector("#".concat(t));e?n.classList.add("active"):n.classList.remove("active")}}},T=A,R=(n("e91d"),Object(x["a"])(T,F,_,!1,null,null,null)),j=R.exports,q=function(t,e){var n=e._c;return n("svg",{attrs:{viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"}},[e.props.expand?n("path",{attrs:{d:"M883 1056q0 13-10 23l-332 332 144 144q19 19 19 45t-19 45-45 19h-448q-26 0-45-19t-19-45v-448q0-26 19-45t45-19 45 19l144 144 332-332q10-10 23-10t23 10l114 114q10 10 10 23zm781-864v448q0 26-19 45t-45 19-45-19l-144-144-332 332q-10 10-23 10t-23-10l-114-114q-10-10-10-23t10-23l332-332-144-144q-19-19-19-45t19-45 45-19h448q26 0 45 19t19 45z"}}):n("path",{attrs:{d:"M896 960v448q0 26-19 45t-45 19-45-19l-144-144-332 332q-10 10-23 10t-23-10l-114-114q-10-10-10-23t10-23l332-332-144-144q-19-19-19-45t19-45 45-19h448q26 0 45 19t19 45zm755-672q0 13-10 23l-332 332 144 144q19 19 19 45t-19 45-45 19h-448q-26 0-45-19t-19-45v-448q0-26 19-45t45-19 45 19l144 144 332-332q10-10 23-10t23 10l114 114q10 10 10 23z"}})])},H=[],z={},D=Object(x["a"])(z,q,H,!0,null,null,null),L=D.exports,B=n("ecee"),N=n("c074"),V=n("42b9"),U=n("ad3d"),W=n("d225"),G=n("b0b4"),J=function(){function t(){Object(W["a"])(this,t)}return Object(G["a"])(t,null,[{key:"map",value:function(t,e,n,o,a){return(t-e)/(n-e)*(a-o)+o}},{key:"swap",value:function(t,e,n){return 1===t.length?t:(t.splice(n,1,t.splice(e,1,t[n])[0]),t)}},{key:"modulo",value:function(t,e){return(t%e+e)%e}}]),t}();B["c"].add(N["e"],N["o"],N["p"],N["q"],N["n"],N["g"],N["m"],N["j"],N["k"],N["f"],N["a"],N["b"],N["d"],N["c"],N["l"],N["h"],N["i"],V["a"],V["b"]),o["a"].component("FontAwesomeIcon",U["a"]);var X={components:{Piano:j,Resize:L},computed:{isPwa:function(){return v.isPwa},isMobile:function(){return v.isMobile},fullscreen:function(){return v.fullscreen},pianoMode:function(){return v.pianoMode},appMode:function(){return v.appMode},locked:function(){return v.locked},muted:function(){return v.muted},showPiano:function(){return v.showPiano},locale:function(){return this.$i18n.locale},isFullscreenCapable:function(){return window.screenfull.enabled},pianoModeText:function(){var t=this.$t("modes.".concat(this.pianoMode));return t}},methods:{toggleMute:function(){v.muted=!v.muted,h["Howler"].mute(v.muted)},togglePiano:function(){v.showPiano=!v.showPiano},toggleInfo:function(){v.showInfo=!v.showInfo},toggleShare:function(){},toggleFullscreen:function(){window.screenfull.toggle()},changePianoMode:function(t){var e=v.pianoModes.findIndex(function(t){return t===v.pianoMode}),n=J.modulo(e+t,v.pianoModes.length);v.pianoMode=v.pianoModes[n]},changeMode:function(t){"record"===t&&v.isMobile||(v.appMode=t)},toggleLanguage:function(){var t=this,e=v.locales.findIndex(function(e){return e===t.$i18n.locale});this.$i18n.locale=v.locales[(e+1)%v.locales.length]}}},Y=X,Z=(n("7a83"),Object(x["a"])(Y,S,E,!1,null,null,null)),K=Z.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Overlay",[t._v("\n    Your NepTune composition is saved at this link:\n    "),n("input",{domProps:{value:t.shareUrl}}),t._v("\n    Copy link\n    "),n("div",{staticClass:"shareArea"},[t._v("\n        Share it on\n        "),n("div",{staticClass:"btnFacebook"},[n("FontAwesomeIcon",{attrs:{icon:["fab","facebook-f"]},on:{click:t.shareFacebook}}),t._v("\n            Facebook\n        ")],1),n("div",{staticClass:"btnTwitter"},[n("FontAwesomeIcon",{attrs:{icon:["fab","twitter"]}}),t._v("\n            Twitter\n        ")],1)])])},tt=[],et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("FontAwesomeIcon",{staticClass:"btnOverlayClose",attrs:{icon:"times"},on:{click:t.dismiss}}),t._t("default")],2)},nt=[],ot={mounted:function(){var t=this;document.addEventListener("keyup",function(e){"Escape"===e.key&&t.dismiss()})},methods:{dismiss:function(){v.showInfo=!1,v.showShare=!1}}},at=ot,it=(n("b5ca"),Object(x["a"])(at,et,nt,!1,null,null,null)),st=it.exports,rt={components:{Overlay:st},data:function(){return{shareUrl:"https://neptune.com/cwypcvB",exit:!1}},mounted:function(){this.exit=!1},methods:{getShareUrl:function(){},shareFacebook:function(){window.open("https://www.facebook.com/sharer/sharer.php?u=http://stackoverflow.com","pop","width=600, height=400, scrollbars=no")}}},ct=rt,lt=Object(x["a"])(ct,Q,tt,!1,null,null,null),dt=lt.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Overlay",[n("section",{attrs:{id:"credits"}},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"meta-wrapper"},[n("h1",[t._v("NepTune")]),n("p",[t._v("\n                    A simply dummy text of the printing and typesetting\n                    industry. Lorem Ipsum has been the industry’s standard\n                    dummy text ever since the 1500s.\n                ")]),n("div",{staticClass:"steamGroup"},[n("a",{attrs:{target:"_blank",href:"http://steameducation.eu/"}},[n("img",{staticClass:"logo steam",attrs:{src:"img/logos/space.png",alt:""}})]),n("a",{attrs:{target:"_blank",href:"http://steameducation.eu/"}},[t._v("steameducation.eu")])])])])]),n("section",{attrs:{id:"furtherCredits"}},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"meta-wrapper"},[n("h2",[t._v("Further Credits")]),n("p",[t._v("\n                    A simply dummy text of the printing and typesetting\n                    industry.\n                ")]),n("div",{staticClass:"logos"},[n("a",{attrs:{target:"_blank",href:"https://digitopia.casadamusica.com/"}},[n("img",{staticClass:"logo digitopia",attrs:{src:"img/logos/digitopia.png",alt:""}})]),n("a",{attrs:{target:"_blank",href:"http://www.casadamusica.com/"}},[n("img",{staticClass:"logo cdm",attrs:{src:"img/logos/cdm.png",alt:""}})])])])])])])},ht=[],pt={components:{Overlay:st},created:function(){(new Image).src="img/logos/cdm.png",(new Image).src="img/logos/digitopia.png",(new Image).src="img/logos/space.png"}},ft=pt,gt=(n("0ded"),Object(x["a"])(ft,ut,ht,!1,null,null,null)),mt=gt.exports,vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{width:"358.027",height:"937.357",viewBox:"0 0 358.027 937.357",x:"0",y:t.y}},[n("defs",[n("filter",{attrs:{id:"sunFilter",x:"0",y:"-50",width:"358.027",height:"937.357",filterUnits:"userSpaceOnUse"}},[n("feOffset",{attrs:{input:"SourceAlpha"}}),n("feGaussianBlur",{attrs:{stdDeviation:"49.5",result:"blur"}}),n("feFlood",{attrs:{"flood-color":"#ffc20f"}}),n("feComposite",{attrs:{operator:"in",in2:"blur"}}),n("feComposite",{attrs:{in:"SourceGraphic"}})],1)]),n("path",{attrs:{id:"sun",filter:"url(#sunFilter)",d:"m 0 "+t.height+" A "+t.width+" 500 0 0 0 0 0",fill:"#ffc20f"}})])},wt=[],bt={data:function(){return{y:0,height:600,width:200}},mounted:function(){this.y=v.canvas.height/2-this.height/2}},yt=bt,Mt=Object(x["a"])(yt,vt,wt,!1,null,null,null),xt=Mt.exports,kt=n("dafb"),Ot=n("2ef0"),Pt=function(){function t(e){var n=this;Object(W["a"])(this,t),this.timeoutMS=e,this.recording=!1,this.timeoutId=null,this.mediaRecorder=navigator.mediaDevices.getUserMedia({audio:!0}).then(function(t){n.mediaRecorder=new MediaRecorder(t)}),this.data=null,this.areEventsSet=!1}return Object(G["a"])(t,[{key:"start",value:function(t,e){var n=this;if(this.recording)throw Error("Already recording...");this.recording=!0,this.arr=t,this.key=e,this.mediaRecorderChunks=[],this.areEventsSet||(this.mediaRecorder.addEventListener("dataavailable",function(t){n.mediaRecorderChunks.push(t.data)}),this.mediaRecorder.addEventListener("stop",function(){var t=new Blob(n.mediaRecorderChunks),e=URL.createObjectURL(t),o=new Audio(e);o.loop=!1,o.pause(),o.currentTime=0,n.arr[n.key]=o}),this.areEventsSet=!0),this.timeoutId=window.setTimeout(function(){console.log("Timing out after ".concat(n.timeoutMS," ms")),n.recording=!1,n.mediaRecorder.stop()},this.timeoutMS),this.mediaRecorderChunks=[],this.mediaRecorder.start()}},{key:"stop",value:function(){if(!this.recording)throw"Need to be recording first";window.clearTimeout(this.timeoutId),this.recording=!1,this.mediaRecorder.stop()}}]),t}(),Ct={name:"App",components:{Planet:$,Piano:j,Sun:xt,Bottombar:K,ShareOverlay:dt,InfoOverlay:mt},data:function(){return{maxDragHeight:0,lastInteractedPlanetId:"mercury"}},computed:{loaded:function(){return v.loaded},planets:function(){return v.planets},canvas:function(){return v.canvas},pianoWidth:function(){return.2*this.canvas.width},pianoHeight:function(){return 243.788},showPiano:function(){return v.showPiano},fullscreen:function(){return v.fullscreen},showInfo:function(){return v.showInfo},showShare:function(){return v.showShare},appMode:function(){return v.appMode},locked:function(){return v.locked}},watch:{appMode:function(t,e){document.querySelectorAll("circle").forEach(function(t){t.classList.remove("hasRecording"),t.classList.remove("active")}),"record"===this.appMode&&v.isMobile||("record"!==this.appMode||v.recorder||this.initRecorder(),"nasa"===e?r()(v.soundscapes).forEach(function(t){v.soundscapes[t].playing()&&(v.soundscapes[t].fade(1,0,500),setTimeout(function(){v.soundscapes[t].stop()},500))}):"piano"===e?r()(v.sounds).forEach(function(t){v.sounds[t].playing()&&(v.sounds[t].fade(1,0,500),setTimeout(function(){v.sounds[t].stop()},500))}):"record"===e&&(v.recordings={}))},locked:function(){var t=this;this.planets.forEach(function(e){t.locked?e.draggable.disable():e.draggable.enable()})}},created:function(){var t=this;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(v.isMobile=!0),window.addEventListener("load",function(){console.log("window finished loading"),v.loaded=!0}),v.isPwa="homescreen"===new URLSearchParams(window.location.search).get("utm_source"),this.$root.$on("recordStart",this.recordStart),this.$root.$on("recordStop",this.recordStop),this.initKeyboardShortcuts(),window.screenfull.enabled&&window.screenfull.on("change",function(){v.fullscreen=window.screenfull.isFullscreen,t.updateDragBounds()}),"record"===this.appMode&&this.initRecorder(),window.utils=J},mounted:function(){var t=this;window.addEventListener("resize",function(){t.updateDragBounds()}),this.positionPlanetsSequentially(),this.initDraggables(),this.updateDragBounds(),kt["a"].create(".myPlanet"),document.querySelector("#ball").remove()},methods:{initDraggables:function(){for(var t=this,e=function(e){var n=v.planets[e].name;v.planets[e].draggable=kt["a"].create("#planet-".concat(n),{cursor:"pointer",onDrag:function(){v.locked||t.$root.$emit("amplitude",{name:n,amplitude:t.determineAmplitude(n)})}})[0]},n=0;n<v.planets.length;n++)e(n)},determineAmplitude:function(t){var e="#planet-".concat(t),n=v.planets.find(function(e){return e.name===t}),o=n.size,a=document.querySelector(e).transform.baseVal.getItem(0).matrix.f-o,i=window.screenfull.isFullscreen?v.canvas.height-o:v.canvas.height-2*o,s=J.map(a,0,i,1,.01),r=s>=1?1:s;return r},interaction:function(t){var e=this;console.log("interaction!"),console.log("lastInteractedPlanetId changed",t),this.lastInteractedPlanetId!==t?(this.lastInteractedPlanetId=t,h["Howler"].ctx.resume(),J.swap(v.planets,v.planets.length-1,v.planets.findIndex(function(t){return t.name===e.lastInteractedPlanetId}))):console.log("clicked the same")},lock:function(t){v.locked=t},resize:function(){},initKeyboardShortcuts:function(){var t=this;document.addEventListener("keypress",function(e){"l"===e.key&&(v.locked=!v.locked),"p"===e.key&&(v.showPiano=!v.showPiano),"i"===e.key&&(v.showInfo=!v.showInfo),"v"===e.key&&(v.muted=!v.muted),"m"===e.key&&(e.shiftKey?t.$refs.bottombar.changePianoMode(-1):t.$refs.bottombar.changePianoMode(1)),"t"===e.key&&t.$refs.bottombar.toggleLanguage(),"1"===e.key&&(v.appMode="piano"),"2"===e.key&&(v.appMode="nasa"),"3"===e.key&&(v.appMode="record"),"a"===e.key&&t.$root.$emit("noteOn",0),"s"===e.key&&t.$root.$emit("noteOn",1),"d"===e.key&&t.$root.$emit("noteOn",2),"f"===e.key&&t.$root.$emit("noteOn",3),"g"===e.key&&t.$root.$emit("noteOn",4),"h"===e.key&&t.$root.$emit("noteOn",5),"j"===e.key&&t.$root.$emit("noteOn",6),"k"===e.key&&t.$root.$emit("noteOn",7)})},getMaxDragHeight:function(){try{var t=this.$refs.bottombar.$el.clientHeight,e=this.$refs.canvas.clientHeight,n=(1-t/e)*this.canvas.height;return n}catch(o){return console.log("failing silently",o),this.canvas.height}},updateDragBounds:function(){var t=this;console.log("updating drag bounds");var e=this.getMaxDragHeight();v.planets.forEach(function(n){n.draggable.applyBounds({top:0,left:0,width:t.canvas.width,height:e})})},positionPlanetsSequentially:function(){for(var t=0;t<this.planets.length;t++){var e=t*(this.canvas.width/this.planets.length)+150,n=this.canvas.height/2;this.setPlanetPosition(this.planets[t].name,e,n)}},setPlanetPosition:function(t,e,n){var o=document.querySelector("#planet-".concat(t));o.setAttribute("transform","matrix(1,0,0,1,".concat(e,",").concat(n,")"))},positionPlanetsHorizontally:function(){for(var t=this,e=this.planets.map(function(t,e){return e}),n=function(n){var o=t.planets[n].size,a=t.canvas.height-2*o-document.querySelector("#bottombar").clientHeight-20,i=Object(Ot["random"])(a)+o,s=Object(Ot["sample"])(e);e=e.filter(function(t){return t!==s});var r=s*(t.canvas.width/t.planets.length)+t.canvas.width/t.planets.length/2;t.setPlanetPosition(t.planets[n].name,r,i)},o=0;o<this.planets.length;o++)n(o)},positionPlanetsRandomly:function(){for(var t=performance.now(),e=0,n=0;n<this.planets.length;n++){var a=void 0,i=0,s=void 0,r=void 0;do{a=!1,i++;var c=this.planets[n].size,l=this.canvas.width-2*c;s=Math.floor(Math.random()*l+c);var d=this.canvas.height-2*c-document.querySelector(".bottombar").clientHeight-20;r=Math.floor(Math.random()*d+c);for(var u=0;u<n;u++){var h=this.planets[u].x,p=this.planets[u].y,f=this.planets[u].size,g=Math.sqrt(Math.pow(Math.abs(s-h),2)+Math.pow(Math.abs(r-p),2));if(g<2*c+2*f){a=!0;break}}}while(a&&i<1e3);o["a"].set(this.planets[n],"x",s),o["a"].set(this.planets[n],"y",r),console.log("Took ".concat(i," iterations for planet ").concat(this.planets[n].name)),e+=i,console.log({totalIterations:e});var m=performance.now();console.log("Took ".concat(m-t," miliseconds"))}},toggleFullscreen:function(){window.screenfull.toggle()},setRecordingTimeout:function(){v.recordingTimeout=window.setTimeout(function(){console.log("timeout of 5 seconds reached, so forcefully stopping the recording"),v.recording=!1},5e3)},clearRecordingTimeout:function(){console.log("clearing recording timeout"),window.clearTimeout(v.recordingTimeout)},initRecorder:function(){console.log("initting recorder"),navigator.mediaDevices?v.recorder=new Pt(5e3):console.warn("No navigator.mediaDevices")}}},It=Ct,$t=(n("5c0b"),Object(x["a"])(It,a,i,!1,null,null,null)),St=$t.exports,Et=n("9483");Object(Et["a"])("".concat("/neptunebeta/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var Ft=n("a925"),_t=n("69b4");o["a"].use(Ft["a"]);var At=new Ft["a"]({locale:"en",messages:p});o["a"].config.productionTip=!1,new o["a"]({i18n:At,render:function(t){return t(St)}}).$mount("#app"),_t["init"]({dsn:"https://5f411b03f8fb493186cff27e41301b1d@sentry.io/1422676",integrations:[new _t["Integrations"].Vue({Vue:o["a"],attachProps:!0})]})},"5c0b":function(t,e,n){"use strict";var o=n("5e27"),a=n.n(o);a.a},"5e27":function(t,e,n){},"7a83":function(t,e,n){"use strict";var o=n("d31b"),a=n.n(o);a.a},"94a5":function(t,e,n){},a6dd:function(t,e,n){},a7fb:function(t,e,n){"use strict";var o=n("2949"),a=n.n(o);a.a},b5ca:function(t,e,n){"use strict";var o=n("0aac"),a=n.n(o);a.a},c1ed:function(t,e,n){},d31b:function(t,e,n){},e91d:function(t,e,n){"use strict";var o=n("94a5"),a=n.n(o);a.a}});
//# sourceMappingURL=app.0d4c35e2.js.map