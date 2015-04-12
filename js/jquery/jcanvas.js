/*
 jCanvas v15.03.29
 Copyright 2015 Caleb Evans
 Released under the MIT license
 */
(function(f,L,G){"object"===typeof module&&"object"===typeof module.exports?module.exports=L.document?G(L,!0):function(f,L){return G(f,L)}:G(f,L)})("undefined"!==typeof window?window.$:{},"undefined"!==typeof window?window:this,function(f,L){function G(d){for(var c in d)d.hasOwnProperty(c)&&(this[c]=d[c]);return this}function na(){aa(this,na.baseDefaults)}function ja(d){return"string"===ba(d)}function K(d){return d&&d.getContext?d.getContext("2d"):h}function ka(d){var c,a,b;for(c in d)d.hasOwnProperty(c)&&
(b=d[c],a=ba(b),"string"!==a||isNaN(oa(b))||isNaN(Y(b))||"text"===c||(d[c]=Y(b)));void 0!==d.text&&(d.text=String(d.text))}function la(d){d=aa({},d);d.masks=d.masks.slice(0);return d}function fa(d,c){var a;d.save();a=la(c.transforms);c.savedTransforms.push(a)}function xa(d,c,a,b){a[b]&&(da(a[b])?c[b]=a[b].call(d,a):c[b]=a[b])}function S(d,c,a){xa(d,c,a,"fillStyle");xa(d,c,a,"strokeStyle");c.lineWidth=a.strokeWidth;a.rounded?c.lineCap=c.lineJoin="round":(c.lineCap=a.strokeCap,c.lineJoin=a.strokeJoin,
    c.miterLimit=a.miterLimit);a.strokeDash||(a.strokeDash=[]);c.setLineDash&&c.setLineDash(a.strokeDash);c.webkitLineDash=c.mozDash=a.strokeDash;c.lineDashOffset=c.webkitLineDashOffset=c.mozDashOffset=a.strokeDashOffset;c.shadowOffsetX=a.shadowX;c.shadowOffsetY=a.shadowY;c.shadowBlur=a.shadowBlur;c.shadowColor=a.shadowColor;c.globalAlpha=a.opacity;c.globalCompositeOperation=a.compositing;a.imageSmoothing&&(c.imageSmoothingEnabled=c.mozImageSmoothingEnabled=a.imageSmoothingEnabled)}function ya(d,c,a){a.mask&&
(a.autosave&&fa(d,c),d.clip(),c.transforms.masks.push(a._args))}function W(d,c,a){a.closed&&c.closePath();a.shadowStroke&&0!==a.strokeWidth?(c.stroke(),c.fill(),c.shadowColor="transparent",c.shadowBlur=0,c.stroke()):(c.fill(),"transparent"!==a.fillStyle&&(c.shadowColor="transparent"),0!==a.strokeWidth&&c.stroke());a.closed||c.closePath();a._transformed&&c.restore();a.mask&&(d=N(d),ya(c,d,a))}function R(d,c,a,b,g){a._toRad=a.inDegrees?D/180:1;a._transformed=u;c.save();a.fromCenter||a._centered||b===
p||(g===p&&(g=b),a.x+=b/2,a.y+=g/2,a._centered=u);a.rotate&&za(c,a,h);1===a.scale&&1===a.scaleX&&1===a.scaleY||Aa(c,a,h);(a.translate||a.translateX||a.translateY)&&Ba(c,a,h)}function N(d){var c=ca.dataCache,a;c._canvas===d&&c._data?a=c._data:(a=f.data(d,"jCanvas"),a||(a={canvas:d,layers:[],layer:{names:{},groups:{}},eventHooks:{},intersecting:[],lastIntersected:h,cursor:f(d).css("cursor"),drag:{layer:h,dragging:A},event:{type:h,x:h,y:h},events:{},transforms:la(pa),savedTransforms:[],animating:A,animated:h,
    pixelRatio:1,scaled:A},f.data(d,"jCanvas",a)),c._canvas=d,c._data=a);return a}function Ca(d,c,a){for(var b in Z.events)Z.events.hasOwnProperty(b)&&(a[b]||a.cursors&&a.cursors[b])&&Da(d,c,a,b);c.events.mouseout||(d.bind("mouseout.jCanvas",function(){var a=c.drag.layer,b;a&&(c.drag={},Q(d,c,a,"dragcancel"));for(b=0;b<c.layers.length;b+=1)a=c.layers[b],a._hovered&&d.triggerLayerEvent(c.layers[b],"mouseout");d.drawLayers()}),c.events.mouseout=u)}function Da(d,c,a,b){Z.events[b](d,c);a._event=u}function Ea(d,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               c,a){var b,g,e;if(a.draggable||a.cursors){b=["mousedown","mousemove","mouseup"];for(e=0;e<b.length;e+=1)g=b[e],Da(d,c,a,g);a._event=u}}function qa(d,c,a,b){d=c.layer.names;b?b.name!==p&&ja(a.name)&&a.name!==b.name&&delete d[a.name]:b=a;ja(b.name)&&(d[b.name]=a)}function ra(d,c,a,b){d=c.layer.groups;var g,e,k,f;if(!b)b=a;else if(b.groups!==p&&a.groups!==h)for(e=0;e<a.groups.length;e+=1)if(g=a.groups[e],c=d[g]){for(f=0;f<c.length;f+=1)if(c[f]===a){k=f;c.splice(f,1);break}0===c.length&&delete d[g]}if(b.groups!==
    p&&b.groups!==h)for(e=0;e<b.groups.length;e+=1)g=b.groups[e],c=d[g],c||(c=d[g]=[],c.name=g),k===p&&(k=c.length),c.splice(k,0,a)}function sa(d,c,a,b,g){b[a]&&c._running&&!c._running[a]&&(c._running[a]=u,b[a].call(d[0],c,g),c._running[a]=A)}function Q(d,c,a,b,g){if(!(a.disableEvents||a.intangible&&-1!==f.inArray(b,Va))){if("mouseout"!==b){var e;a.cursors&&(e=a.cursors[b]);-1!==f.inArray(e,V.cursors)&&(e=V.prefix+e);e&&d.css({cursor:e})}sa(d,a,b,a,g);sa(d,a,b,c.eventHooks,g);sa(d,a,b,Z.eventHooks,g)}}
    function O(d,c,a,b){var g,e=c._layer?a:c;c._args=a;if(c.draggable||c.dragGroups)c.layer=u,c.draggable=u;c._method||(c._method=b?b:c.method?f.fn[c.method]:c.type?f.fn[X.drawings[c.type]]:function(){});if(c.layer&&!c._layer){if(a=f(d),b=N(d),g=b.layers,e.name===h||ja(e.name)&&b.layer.names[e.name]===p)ka(c),e=new G(c),e.canvas=d,e.layer=u,e._layer=u,e._running={},e.data=e.data!==h?aa({},e.data):{},e.groups=e.groups!==h?e.groups.slice(0):[],qa(a,b,e),ra(a,b,e),Ca(a,b,e),Ea(a,b,e),c._event=e._event,e._method===
    f.fn.drawText&&a.measureText(e),e.index===h&&(e.index=g.length),g.splice(e.index,0,e),c._args=e,Q(a,b,e,"add")}else c.layer||ka(c);return e}function Fa(d,c){var a,b;for(b=0;b<V.props.length;b+=1)a=V.props[b],d[a]!==p&&(d["_"+a]=d[a],V.propsObj[a]=u,c&&delete d[a])}function Wa(d,c,a){var b,g,e,k;for(b in a)if(a.hasOwnProperty(b)&&(g=a[b],da(g)&&(a[b]=g.call(d,c,b)),"object"===ba(g)&&Ga(g))){for(e in g)g.hasOwnProperty(e)&&(k=g[e],c[b]!==p&&(c[b+"."+e]=c[b][e],a[b+"."+e]=k));delete a[b]}return a}function Ha(d){var c,
        a,b=[],g=1;d.match(/^([a-z]+|#[0-9a-f]+)$/gi)&&("transparent"===d&&(d="rgba(0, 0, 0, 0)"),a=Ia.head,c=a.style.color,a.style.color=d,d=f.css(a,"color"),a.style.color=c);d.match(/^rgb/gi)&&(b=d.match(/(\d+(\.\d+)?)/gi),d.match(/%/gi)&&(g=2.55),b[0]*=g,b[1]*=g,b[2]*=g,b[3]=b[3]!==p?Y(b[3]):1);return b}function Xa(d){var c=3,a;"array"!==ba(d.start)&&(d.start=Ha(d.start),d.end=Ha(d.end));d.now=[];if(1!==d.start[3]||1!==d.end[3])c=4;for(a=0;a<c;a+=1)d.now[a]=d.start[a]+(d.end[a]-d.start[a])*d.pos,3>a&&
    (d.now[a]=Ya(d.now[a]));1!==d.start[3]||1!==d.end[3]?d.now="rgba( "+d.now.join(",")+" )":(d.now.slice(0,3),d.now="rgb( "+d.now.join(",")+" )");d.elem.nodeName?d.elem.style[d.prop]=d.now:d.elem[d.prop]=d.now}function Za(d){X.touchEvents[d]&&(d=X.touchEvents[d]);return d}function $a(d){Z.events[d]=function(c,a){function b(a){k.x=a.offsetX;k.y=a.offsetY;k.type=g;k.event=a;c.drawLayers({resetFire:u});a.preventDefault()}var g,e,k;k=a.event;g="mouseover"===d||"mouseout"===d?"mousemove":d;e=Za(g);a.events[g]||
    (e!==g?c.bind(g+".jCanvas "+e+".jCanvas",b):c.bind(g+".jCanvas",b),a.events[g]=u)}}function T(d,c,a){var b,g,e,k;if(a=a._args)d=N(d),b=d.event,b.x!==h&&b.y!==h&&(e=b.x*d.pixelRatio,k=b.y*d.pixelRatio,g=c.isPointInPath(e,k)||c.isPointInStroke&&c.isPointInStroke(e,k)),c=d.transforms,a.eventX=b.x,a.eventY=b.y,a.event=b.event,b=d.transforms.rotate,e=a.eventX,k=a.eventY,0!==b?(a._eventX=e*P(-b)-k*U(-b),a._eventY=k*P(-b)+e*U(-b)):(a._eventX=e,a._eventY=k),a._eventX/=c.scaleX,a._eventY/=c.scaleY,g&&d.intersecting.push(a),
        a.intersects=!!g}function za(d,c,a){c._toRad=c.inDegrees?D/180:1;d.translate(c.x,c.y);d.rotate(c.rotate*c._toRad);d.translate(-c.x,-c.y);a&&(a.rotate+=c.rotate*c._toRad)}function Aa(d,c,a){1!==c.scale&&(c.scaleX=c.scaleY=c.scale);d.translate(c.x,c.y);d.scale(c.scaleX,c.scaleY);d.translate(-c.x,-c.y);a&&(a.scaleX*=c.scaleX,a.scaleY*=c.scaleY)}function Ba(d,c,a){c.translate&&(c.translateX=c.translateY=c.translate);d.translate(c.translateX,c.translateY);a&&(a.translateX+=c.translateX,a.translateY+=c.translateY)}
    function Ja(d){for(;0>d;)d+=2*D;return d}function Ka(d,c,a,b){var g,e,k,f,x,w,z;a===b?z=w=0:(w=a.x,z=a.y);b.inDegrees||360!==b.end||(b.end=2*D);b.start*=a._toRad;b.end*=a._toRad;b.start-=D/2;b.end-=D/2;x=D/180;b.ccw&&(x*=-1);g=b.x+b.radius*P(b.start+x);e=b.y+b.radius*U(b.start+x);k=b.x+b.radius*P(b.start);f=b.y+b.radius*U(b.start);ga(d,c,a,b,g,e,k,f);c.arc(b.x+w,b.y+z,b.radius,b.start,b.end,b.ccw);g=b.x+b.radius*P(b.end+x);x=b.y+b.radius*U(b.end+x);e=b.x+b.radius*P(b.end);k=b.y+b.radius*U(b.end);
        ha(d,c,a,b,e,k,g,x)}function La(d,c,a,b,g,e,k,f){var x,w;b.arrowRadius&&!a.closed&&(w=ab(f-e,k-g),w-=D,d=a.strokeWidth*P(w),x=a.strokeWidth*U(w),a=k+b.arrowRadius*P(w+b.arrowAngle/2),g=f+b.arrowRadius*U(w+b.arrowAngle/2),e=k+b.arrowRadius*P(w-b.arrowAngle/2),b=f+b.arrowRadius*U(w-b.arrowAngle/2),c.moveTo(a-d,g-x),c.lineTo(k-d,f-x),c.lineTo(e-d,b-x),c.moveTo(k-d,f-x),c.lineTo(k+d,f+x),c.moveTo(k,f))}function ga(d,c,a,b,g,e,k,f){b._arrowAngleConverted||(b.arrowAngle*=a._toRad,b._arrowAngleConverted=
        u);b.startArrow&&La(d,c,a,b,g,e,k,f)}function ha(d,c,a,b,g,e,k,f){b._arrowAngleConverted||(b.arrowAngle*=a._toRad,b._arrowAngleConverted=u);b.endArrow&&La(d,c,a,b,g,e,k,f)}function Ma(d,c,a,b){var g,e,k;g=2;ga(d,c,a,b,b.x2+a.x,b.y2+a.y,b.x1+a.x,b.y1+a.y);for(b.x1!==p&&b.y1!==p&&c.moveTo(b.x1+a.x,b.y1+a.y);u;)if(e=b["x"+g],k=b["y"+g],e!==p&&k!==p)c.lineTo(e+a.x,k+a.y),g+=1;else break;g-=1;ha(d,c,a,b,b["x"+(g-1)]+a.x,b["y"+(g-1)]+a.y,b["x"+g]+a.x,b["y"+g]+a.y)}function Na(d,c,a,b){var g,e,k,f,x;g=2;
        ga(d,c,a,b,b.cx1+a.x,b.cy1+a.y,b.x1+a.x,b.y1+a.y);for(b.x1!==p&&b.y1!==p&&c.moveTo(b.x1+a.x,b.y1+a.y);u;)if(e=b["x"+g],k=b["y"+g],f=b["cx"+(g-1)],x=b["cy"+(g-1)],e!==p&&k!==p&&f!==p&&x!==p)c.quadraticCurveTo(f+a.x,x+a.y,e+a.x,k+a.y),g+=1;else break;g-=1;ha(d,c,a,b,b["cx"+(g-1)]+a.x,b["cy"+(g-1)]+a.y,b["x"+g]+a.x,b["y"+g]+a.y)}function Oa(d,c,a,b){var g,e,k,f,x,w,z,h;g=2;e=1;ga(d,c,a,b,b.cx1+a.x,b.cy1+a.y,b.x1+a.x,b.y1+a.y);for(b.x1!==p&&b.y1!==p&&c.moveTo(b.x1+a.x,b.y1+a.y);u;)if(k=b["x"+g],f=b["y"+
        g],x=b["cx"+e],w=b["cy"+e],z=b["cx"+(e+1)],h=b["cy"+(e+1)],k!==p&&f!==p&&x!==p&&w!==p&&z!==p&&h!==p)c.bezierCurveTo(x+a.x,w+a.y,z+a.x,h+a.y,k+a.x,f+a.y),g+=1,e+=2;else break;g-=1;e-=2;ha(d,c,a,b,b["cx"+(e+1)]+a.x,b["cy"+(e+1)]+a.y,b["x"+g]+a.x,b["y"+g]+a.y)}function Pa(d,c,a){c*=d._toRad;c-=D/2;return a*P(c)}function Qa(d,c,a){c*=d._toRad;c-=D/2;return a*U(c)}function Ra(d,c,a,b){var g,e,k,f,x,h,z;a===b?x=f=0:(f=a.x,x=a.y);g=1;e=f=h=b.x+f;k=x=z=b.y+x;ga(d,c,a,b,e+Pa(a,b.a1,b.l1),k+Qa(a,b.a1,b.l1),
        e,k);for(b.x!==p&&b.y!==p&&c.moveTo(e,k);u;)if(e=b["a"+g],k=b["l"+g],e!==p&&k!==p)f=h,x=z,h+=Pa(a,e,k),z+=Qa(a,e,k),c.lineTo(h,z),g+=1;else break;ha(d,c,a,b,f,x,h,z)}function ta(d,c,a){isNaN(oa(a.fontSize))||(a.fontSize+="px");c.font=a.fontStyle+" "+a.fontSize+" "+a.fontFamily}function ua(d,c,a,b){var g,e;g=ca.propCache;if(g.text===a.text&&g.fontStyle===a.fontStyle&&g.fontSize===a.fontSize&&g.fontFamily===a.fontFamily&&g.maxWidth===a.maxWidth&&g.lineHeight===a.lineHeight)a.width=g.width,a.height=
        g.height;else{a.width=c.measureText(b[0]).width;for(e=1;e<b.length;e+=1)g=c.measureText(b[e]).width,g>a.width&&(a.width=g);c=d.style.fontSize;d.style.fontSize=a.fontSize;a.height=Y(f.css(d,"fontSize"))*b.length*a.lineHeight;d.style.fontSize=c}}function Sa(d,c){var a=c.maxWidth,b=c.text.split("\n"),g=[],e,k,f,h,w;for(f=0;f<b.length;f+=1){h=b[f];w=h.split(" ");e=[];k="";if(1===w.length||d.measureText(h).width<a)e=[h];else{for(h=0;h<w.length;h+=1)d.measureText(k+w[h]).width>a&&(""!==k&&e.push(k),k=""),
        k+=w[h],h!==w.length-1&&(k+=" ");e.push(k)}g=g.concat(e.join("\n").replace(/( (\n))|( $)/gi,"$2").split("\n"))}return g}var Ia=L.document,Ta=L.Image,bb=L.getComputedStyle,ea=L.Math,oa=L.Number,Y=L.parseFloat,u=!0,A=!1,h=null,p=void 0,ma,aa=f.extend,ia=f.inArray,ba=function(d){return Object.prototype.toString.call(d).slice(8,-1).toLowerCase()},da=f.isFunction,Ga=f.isPlainObject,D=ea.PI,Ya=ea.round,cb=ea.abs,U=ea.sin,P=ea.cos,ab=ea.atan2,va=L.Array.prototype.slice,db=f.event.fix,X={},ca={dataCache:{},
        propCache:{},imageCache:{}},pa={rotate:0,scaleX:1,scaleY:1,translateX:0,translateY:0,masks:[]},V={},Va="mousedown mousemove mouseup mouseover mouseout touchstart touchmove touchend".split(" "),Z={events:{},eventHooks:{},future:{}};na.baseDefaults={align:"center",arrowAngle:90,arrowRadius:0,autosave:u,baseline:"middle",bringToFront:A,ccw:A,closed:A,compositing:"source-over",concavity:0,cornerRadius:0,count:1,cropFromCenter:u,crossOrigin:h,cursors:h,disableEvents:A,draggable:A,dragGroups:h,groups:h,
        data:h,dx:h,dy:h,end:360,eventX:h,eventY:h,fillStyle:"transparent",fontStyle:"normal",fontSize:"12pt",fontFamily:"sans-serif",fromCenter:u,height:h,imageSmoothing:u,inDegrees:u,intangible:A,index:h,letterSpacing:h,lineHeight:1,layer:A,mask:A,maxWidth:h,miterLimit:10,name:h,opacity:1,r1:h,r2:h,radius:0,repeat:"repeat",respectAlign:A,rotate:0,rounded:A,scale:1,scaleX:1,scaleY:1,shadowBlur:0,shadowColor:"transparent",shadowStroke:A,shadowX:0,shadowY:0,sHeight:h,sides:0,source:"",spread:0,start:0,strokeCap:"butt",
        strokeDash:h,strokeDashOffset:0,strokeJoin:"miter",strokeStyle:"transparent",strokeWidth:1,sWidth:h,sx:h,sy:h,text:"",translate:0,translateX:0,translateY:0,type:h,visible:u,width:h,x:0,y:0};ma=new na;G.prototype=ma;Z.extend=function(d){d.name&&(d.props&&aa(ma,d.props),f.fn[d.name]=function a(b){var g,e,k,f;for(e=0;e<this.length;e+=1)if(g=this[e],k=K(g))f=new G(b),O(g,f,b,a),S(g,k,f),d.fn.call(g,k,f);return this},d.type&&(X.drawings[d.type]=d.name));return f.fn[d.name]};f.fn.getEventHooks=function(){var d;
        d={};0!==this.length&&(d=this[0],d=N(d),d=d.eventHooks);return d};f.fn.setEventHooks=function(d){var c,a;for(c=0;c<this.length;c+=1)f(this[c]),a=N(this[c]),aa(a.eventHooks,d);return this};f.fn.getLayers=function(d){var c,a,b,g,e=[];if(0!==this.length)if(c=this[0],a=N(c),a=a.layers,da(d))for(g=0;g<a.length;g+=1)b=a[g],d.call(c,b)&&e.push(b);else e=a;return e};f.fn.getLayer=function(d){var c,a,b,g;if(0!==this.length)if(c=this[0],a=N(c),c=a.layers,g=ba(d),d&&d.layer)b=d;else if("number"===g)0>d&&(d=
        c.length+d),b=c[d];else if("regexp"===g)for(a=0;a<c.length;a+=1){if(ja(c[a].name)&&c[a].name.match(d)){b=c[a];break}}else b=a.layer.names[d];return b};f.fn.getLayerGroup=function(d){var c,a,b,g=ba(d);if(0!==this.length)if(c=this[0],"array"===g)b=d;else if("regexp"===g)for(a in c=N(c),c=c.layer.groups,c){if(a.match(d)){b=c[a];break}}else c=N(c),b=c.layer.groups[d];return b};f.fn.getLayerIndex=function(d){var c=this.getLayers();d=this.getLayer(d);return ia(d,c)};f.fn.setLayer=function(d,c){var a,b,
        g,e,k,h,x;for(b=0;b<this.length;b+=1)if(a=f(this[b]),g=N(this[b]),e=f(this[b]).getLayer(d)){qa(a,g,e,c);ra(a,g,e,c);ka(c);for(k in c)c.hasOwnProperty(k)&&(h=c[k],x=ba(h),"object"===x&&Ga(h)?(e[k]=aa({},h),ka(e[k])):"array"===x?e[k]=h.slice(0):"string"===x?0===h.indexOf("+=")?e[k]+=Y(h.substr(2)):0===h.indexOf("-=")?e[k]-=Y(h.substr(2)):isNaN(h)||isNaN(oa(h))||isNaN(Y(h))?e[k]=h:e[k]=Y(h):e[k]=h);Ca(a,g,e);Ea(a,g,e);f.isEmptyObject(c)===A&&Q(a,g,e,"change",c)}return this};f.fn.setLayers=function(d,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            c){var a,b,g,e;for(b=0;b<this.length;b+=1)for(a=f(this[b]),g=a.getLayers(c),e=0;e<g.length;e+=1)a.setLayer(g[e],d);return this};f.fn.setLayerGroup=function(d,c){var a,b,g,e;for(b=0;b<this.length;b+=1)if(a=f(this[b]),g=a.getLayerGroup(d))for(e=0;e<g.length;e+=1)a.setLayer(g[e],c);return this};f.fn.moveLayer=function(d,c){var a,b,g,e,k;for(b=0;b<this.length;b+=1)if(a=f(this[b]),g=N(this[b]),e=g.layers,k=a.getLayer(d))k.index=ia(k,e),e.splice(k.index,1),e.splice(c,0,k),0>c&&(c=e.length+c),k.index=c,
        Q(a,g,k,"move");return this};f.fn.removeLayer=function(d){var c,a,b,g,e;for(a=0;a<this.length;a+=1)if(c=f(this[a]),b=N(this[a]),g=c.getLayers(),e=c.getLayer(d))e.index=ia(e,g),g.splice(e.index,1),delete e._layer,qa(c,b,e,{name:h}),ra(c,b,e,{groups:h}),Q(c,b,e,"remove");return this};f.fn.removeLayers=function(d){var c,a,b,g,e,k;for(a=0;a<this.length;a+=1){c=f(this[a]);b=N(this[a]);g=c.getLayers(d);for(k=0;k<g.length;k+=1)e=g[k],c.removeLayer(e),k-=1;b.layer.names={};b.layer.groups={}}return this};
    f.fn.removeLayerGroup=function(d){var c,a,b,g;if(d!==p)for(a=0;a<this.length;a+=1)if(c=f(this[a]),N(this[a]),c.getLayers(),b=c.getLayerGroup(d))for(b=b.slice(0),g=0;g<b.length;g+=1)c.removeLayer(b[g]);return this};f.fn.addLayerToGroup=function(d,c){var a,b,g,e=[c];for(b=0;b<this.length;b+=1)a=f(this[b]),g=a.getLayer(d),g.groups&&(e=g.groups.slice(0),-1===ia(c,g.groups)&&e.push(c)),a.setLayer(g,{groups:e});return this};f.fn.removeLayerFromGroup=function(d,c){var a,b,g,e=[],k;for(b=0;b<this.length;b+=
        1)a=f(this[b]),g=a.getLayer(d),g.groups&&(k=ia(c,g.groups),-1!==k&&(e=g.groups.slice(0),e.splice(k,1),a.setLayer(g,{groups:e})));return this};V.cursors=["grab","grabbing","zoom-in","zoom-out"];V.prefix=function(){var d=bb(Ia.documentElement,"");return"-"+(va.call(d).join("").match(/-(moz|webkit|ms)-/)||""===d.OLink&&["","o"])[1]+"-"}();f.fn.triggerLayerEvent=function(d,c){var a,b,g;for(b=0;b<this.length;b+=1)a=f(this[b]),g=N(this[b]),(d=a.getLayer(d))&&Q(a,g,d,c);return this};f.fn.drawLayer=function(d){var c,
        a,b;for(c=0;c<this.length;c+=1)b=f(this[c]),(a=K(this[c]))&&(a=b.getLayer(d))&&a.visible&&a._method&&(a._next=h,a._method.call(b,a));return this};f.fn.drawLayers=function(d){var c,a,b=d||{},g,e,k,p,x,w,z,J;(p=b.index)||(p=0);for(c=0;c<this.length;c+=1)if(d=f(this[c]),a=K(this[c])){x=N(this[c]);b.clear!==A&&d.clearCanvas();a=x.layers;for(k=p;k<a.length;k+=1)if(g=a[k],g.index=k,b.resetFire&&(g._fired=A),w=d,z=g,e=k+1,z&&z.visible&&z._method&&(z._next=e?e:h,z._method.call(w,z)),g._masks=x.transforms.masks.slice(0),
        g._method===f.fn.drawImage&&g.visible){J=!0;break}if(J)break;g=x;var y=e=z=w=void 0;w=h;for(z=g.intersecting.length-1;0<=z;z-=1)if(w=g.intersecting[z],w._masks){for(y=w._masks.length-1;0<=y;y-=1)if(e=w._masks[y],!e.intersects){w.intersects=A;break}if(w.intersects&&!w.intangible)break}w&&w.intangible&&(w=h);g=w;w=x.event;z=w.type;if(x.drag.layer){e=d;var y=x,H=z,t=void 0,q=void 0,m=void 0,B=m=void 0,F=void 0,m=t=t=m=void 0,m=y.drag,B=(q=m.layer)&&q.dragGroups||[],t=y.layers;if("mousemove"===H||"touchmove"===
        H){if(m.dragging||(m.dragging=u,q.dragging=u,q.bringToFront&&(t.splice(q.index,1),q.index=t.push(q)),q._startX=q.x,q._startY=q.y,q._endX=q._eventX,q._endY=q._eventY,Q(e,y,q,"dragstart")),m.dragging)for(t=q._eventX-(q._endX-q._startX),m=q._eventY-(q._endY-q._startY),q.dx=t-q.x,q.dy=m-q.y,q.x=t,q.y=m,Q(e,y,q,"drag"),t=0;t<B.length;t+=1)if(m=B[t],F=y.layer.groups[m],q.groups&&F)for(m=0;m<F.length;m+=1)F[m]!==q&&(F[m].x+=q.dx,F[m].y+=q.dy)}else if("mouseup"===H||"touchend"===H)m.dragging&&(q.dragging=
        A,m.dragging=A,Q(e,y,q,"dragstop")),y.drag={}}e=x.lastIntersected;e===h||g===e||!e._hovered||e._fired||x.drag.dragging||(x.lastIntersected=h,e._fired=u,e._hovered=A,Q(d,x,e,"mouseout"),d.css({cursor:x.cursor}));g&&(g[z]||X.mouseEvents[z]&&(z=X.mouseEvents[z]),g._event&&g.intersects&&(x.lastIntersected=g,!(g.mouseover||g.mouseout||g.cursors)||x.drag.dragging||g._hovered||g._fired||(g._fired=u,g._hovered=u,Q(d,x,g,"mouseover")),g._fired||(g._fired=u,w.type=h,Q(d,x,g,z)),!g.draggable||g.disableEvents||
    "mousedown"!==z&&"touchstart"!==z||(x.drag.layer=g)));g!==h||x.drag.dragging||d.css({cursor:x.cursor});k===a.length&&(x.intersecting.length=0,x.transforms=la(pa),x.savedTransforms.length=0)}return this};f.fn.addLayer=function(d){var c,a;for(c=0;c<this.length;c+=1)if(a=K(this[c]))a=new G(d),a.layer=u,O(this[c],a,d);return this};V.props=["width","height","opacity","lineHeight"];V.propsObj={};f.fn.animateLayer=function(){function d(a,b,c){return function(){var d,g;for(g=0;g<V.props.length;g+=1)d=V.props[g],
        c[d]=c["_"+d];for(var k in c)c.hasOwnProperty(k)&&-1!==k.indexOf(".")&&delete c[k];b.animating&&b.animated!==c||a.drawLayers();c._animating=A;b.animating=A;b.animated=h;e[4]&&e[4].call(a[0],c);Q(a,b,c,"animateend")}}function c(a,b,c){return function(d,g){var k,f,h=!1;"_"===g.prop[0]&&(h=!0,g.prop=g.prop.replace("_",""),c[g.prop]=c["_"+g.prop]);-1!==g.prop.indexOf(".")&&(k=g.prop.split("."),f=k[0],k=k[1],c[f]&&(c[f][k]=g.now));c._pos!==g.pos&&(c._pos=g.pos,c._animating||b.animating||(c._animating=
        u,b.animating=u,b.animated=c),b.animating&&b.animated!==c||a.drawLayers());e[5]&&e[5].call(a[0],d,g,c);Q(a,b,c,"animate",g);h&&(g.prop="_"+g.prop)}}var a,b,g,e=va.call(arguments,0),k,G;"object"===ba(e[2])?(e.splice(2,0,e[2].duration||h),e.splice(3,0,e[3].easing||h),e.splice(4,0,e[4].complete||h),e.splice(5,0,e[5].step||h)):(e[2]===p?(e.splice(2,0,h),e.splice(3,0,h),e.splice(4,0,h)):da(e[2])&&(e.splice(2,0,h),e.splice(3,0,h)),e[3]===p?(e[3]=h,e.splice(4,0,h)):da(e[3])&&e.splice(3,0,h));for(b=0;b<this.length;b+=
        1)if(a=f(this[b]),g=K(this[b]))g=N(this[b]),(k=a.getLayer(e[0]))&&k._method!==f.fn.draw&&(G=aa({},e[1]),G=Wa(this[b],k,G),Fa(G,u),Fa(k),k.style=V.propsObj,f(k).animate(G,{duration:e[2],easing:f.easing[e[3]]?e[3]:h,complete:d(a,g,k),step:c(a,g,k)}),Q(a,g,k,"animatestart"));return this};f.fn.animateLayerGroup=function(d){var c,a,b=va.call(arguments,0),g,e;for(a=0;a<this.length;a+=1)if(c=f(this[a]),g=c.getLayerGroup(d))for(e=0;e<g.length;e+=1)b[0]=g[e],c.animateLayer.apply(c,b);return this};f.fn.delayLayer=
        function(d,c){var a,b,g,e;c=c||0;for(b=0;b<this.length;b+=1)if(a=f(this[b]),g=N(this[b]),e=a.getLayer(d))f(e).delay(c),Q(a,g,e,"delay");return this};f.fn.delayLayerGroup=function(d,c){var a,b,g,e,k;c=c||0;for(b=0;b<this.length;b+=1)if(a=f(this[b]),g=a.getLayerGroup(d))for(k=0;k<g.length;k+=1)e=g[k],a.delayLayer(e,c);return this};f.fn.stopLayer=function(d,c){var a,b,g,e;for(b=0;b<this.length;b+=1)if(a=f(this[b]),g=N(this[b]),e=a.getLayer(d))f(e).stop(c),Q(a,g,e,"stop");return this};f.fn.stopLayerGroup=
        function(d,c){var a,b,g,e,k;for(b=0;b<this.length;b+=1)if(a=f(this[b]),g=a.getLayerGroup(d))for(k=0;k<g.length;k+=1)e=g[k],a.stopLayer(e,c);return this};(function(d){var c;for(c=0;c<d.length;c+=1)f.fx.step[d[c]]=Xa})("color backgroundColor borderColor borderTopColor borderRightColor borderBottomColor borderLeftColor fillStyle outlineColor strokeStyle shadowColor".split(" "));X.touchEvents={mousedown:"touchstart",mouseup:"touchend",mousemove:"touchmove"};X.mouseEvents={touchstart:"mousedown",touchend:"mouseup",
        touchmove:"mousemove"};(function(d){var c;for(c=0;c<d.length;c+=1)$a(d[c])})("click dblclick mousedown mouseup mousemove mouseover mouseout touchstart touchmove touchend contextmenu".split(" "));f.event.fix=function(d){var c,a;d=db.call(f.event,d);if(c=d.originalEvent)if(a=c.changedTouches,d.pageX!==p&&d.offsetX===p){if(c=f(d.currentTarget).offset())d.offsetX=d.pageX-c.left,d.offsetY=d.pageY-c.top}else a&&(c=f(d.currentTarget).offset())&&(d.offsetX=a[0].pageX-c.left,d.offsetY=a[0].pageY-c.top);return d};
    X.drawings={arc:"drawArc",bezier:"drawBezier",ellipse:"drawEllipse","function":"draw",image:"drawImage",line:"drawLine",path:"drawPath",polygon:"drawPolygon",slice:"drawSlice",quadratic:"drawQuadratic",rectangle:"drawRect",text:"drawText",vector:"drawVector",save:"saveCanvas",restore:"restoreCanvas",rotate:"rotateCanvas",scale:"scaleCanvas",translate:"translateCanvas"};f.fn.draw=function c(a){var b,g,e=new G(a);if(X.drawings[e.type]&&"function"!==e.type)this[X.drawings[e.type]](a);else for(b=0;b<
    this.length;b+=1)if(f(this[b]),g=K(this[b]))e=new G(a),O(this[b],e,a,c),e.visible&&e.fn&&e.fn.call(this[b],g,e);return this};f.fn.clearCanvas=function a(b){var g,e,k=new G(b);for(g=0;g<this.length;g+=1)if(e=K(this[g]))k.width===h||k.height===h?(e.save(),e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,this[g].width,this[g].height),e.restore()):(O(this[g],k,b,a),R(this[g],e,k,k.width,k.height),e.clearRect(k.x-k.width/2,k.y-k.height/2,k.width,k.height),k._transformed&&e.restore());return this};f.fn.saveCanvas=
        function b(g){var e,k,f,h,w;for(e=0;e<this.length;e+=1)if(k=K(this[e]))for(h=N(this[e]),f=new G(g),O(this[e],f,g,b),w=0;w<f.count;w+=1)fa(k,h);return this};f.fn.restoreCanvas=function g(e){var k,f,h,w,z;for(k=0;k<this.length;k+=1)if(f=K(this[k]))for(w=N(this[k]),h=new G(e),O(this[k],h,e,g),z=0;z<h.count;z+=1){var J=f,y=w;0===y.savedTransforms.length?y.transforms=la(pa):(J.restore(),y.transforms=y.savedTransforms.pop())}return this};f.fn.rotateCanvas=function e(k){var f,h,w,z;for(f=0;f<this.length;f+=
        1)if(h=K(this[f]))z=N(this[f]),w=new G(k),O(this[f],w,k,e),w.autosave&&fa(h,z),za(h,w,z.transforms);return this};f.fn.scaleCanvas=function k(f){var h,w,z,J;for(h=0;h<this.length;h+=1)if(w=K(this[h]))J=N(this[h]),z=new G(f),O(this[h],z,f,k),z.autosave&&fa(w,J),Aa(w,z,J.transforms);return this};f.fn.translateCanvas=function Ua(f){var h,z,J,y;for(h=0;h<this.length;h+=1)if(z=K(this[h]))y=N(this[h]),J=new G(f),O(this[h],J,f,Ua),J.autosave&&fa(z,y),Ba(z,J,y.transforms);return this};f.fn.drawRect=function x(f){var h,
        J,y,H,t,q,m,B,F;for(h=0;h<this.length;h+=1)if(J=K(this[h]))y=new G(f),O(this[h],y,f,x),y.visible&&(S(this[h],J,y),R(this[h],J,y,y.width,y.height),J.beginPath(),y.width&&y.height&&(H=y.x-y.width/2,t=y.y-y.height/2,(B=cb(y.cornerRadius))?(q=y.x+y.width/2,m=y.y+y.height/2,0>y.width&&(F=H,H=q,q=F),0>y.height&&(F=t,t=m,m=F),0>q-H-2*B&&(B=(q-H)/2),0>m-t-2*B&&(B=(m-t)/2),J.moveTo(H+B,t),J.lineTo(q-B,t),J.arc(q-B,t+B,B,3*D/2,2*D,A),J.lineTo(q,m-B),J.arc(q-B,m-B,B,0,D/2,A),J.lineTo(H+B,m),J.arc(H+B,m-B,B,
        D/2,D,A),J.lineTo(H,t+B),J.arc(H+B,t+B,B,D,3*D/2,A),y.closed=u):J.rect(H,t,y.width,y.height)),T(this[h],J,y),W(this[h],J,y));return this};f.fn.drawArc=function w(f){var h,y,H;for(h=0;h<this.length;h+=1)if(y=K(this[h]))H=new G(f),O(this[h],H,f,w),H.visible&&(S(this[h],y,H),R(this[h],y,H,2*H.radius),y.beginPath(),Ka(this[h],y,H,H),T(this[h],y,H),W(this[h],y,H));return this};f.fn.drawEllipse=function z(f){var h,H,t,q,m;for(h=0;h<this.length;h+=1)if(H=K(this[h]))t=new G(f),O(this[h],t,f,z),t.visible&&
    (S(this[h],H,t),R(this[h],H,t,t.width,t.height),q=4/3*t.width,m=t.height,H.beginPath(),H.moveTo(t.x,t.y-m/2),H.bezierCurveTo(t.x-q/2,t.y-m/2,t.x-q/2,t.y+m/2,t.x,t.y+m/2),H.bezierCurveTo(t.x+q/2,t.y+m/2,t.x+q/2,t.y-m/2,t.x,t.y-m/2),T(this[h],H,t),t.closed=u,W(this[h],H,t));return this};f.fn.drawPolygon=function J(f){var h,t,q,m,B,F,M,v,n,l;for(h=0;h<this.length;h+=1)if(t=K(this[h]))if(q=new G(f),O(this[h],q,f,J),q.visible){S(this[h],t,q);R(this[h],t,q,2*q.radius);B=2*D/q.sides;F=B/2;m=F+D/2;M=q.radius*
    P(F);t.beginPath();for(l=0;l<q.sides;l+=1)v=q.x+q.radius*P(m),n=q.y+q.radius*U(m),t.lineTo(v,n),q.concavity&&(v=q.x+(M+-M*q.concavity)*P(m+F),n=q.y+(M+-M*q.concavity)*U(m+F),t.lineTo(v,n)),m+=B;T(this[h],t,q);q.closed=u;W(this[h],t,q)}return this};f.fn.drawSlice=function y(h){var t,q,m,B,F;for(t=0;t<this.length;t+=1)if(f(this[t]),q=K(this[t]))m=new G(h),O(this[t],m,h,y),m.visible&&(S(this[t],q,m),R(this[t],q,m,2*m.radius),m.start*=m._toRad,m.end*=m._toRad,m.start-=D/2,m.end-=D/2,m.start=Ja(m.start),
        m.end=Ja(m.end),m.end<m.start&&(m.end+=2*D),B=(m.start+m.end)/2,F=m.radius*m.spread*P(B),B=m.radius*m.spread*U(B),m.x+=F,m.y+=B,q.beginPath(),q.arc(m.x,m.y,m.radius,m.start,m.end,m.ccw),q.lineTo(m.x,m.y),T(this[t],q,m),m.closed=u,W(this[t],q,m));return this};f.fn.drawLine=function H(h){var f,m,B;for(f=0;f<this.length;f+=1)if(m=K(this[f]))B=new G(h),O(this[f],B,h,H),B.visible&&(S(this[f],m,B),R(this[f],m,B),m.beginPath(),Ma(this[f],m,B,B),T(this[f],m,B),W(this[f],m,B));return this};f.fn.drawQuadratic=
        function t(f){var h,B,F;for(h=0;h<this.length;h+=1)if(B=K(this[h]))F=new G(f),O(this[h],F,f,t),F.visible&&(S(this[h],B,F),R(this[h],B,F),B.beginPath(),Na(this[h],B,F,F),T(this[h],B,F),W(this[h],B,F));return this};f.fn.drawBezier=function q(h){var f,F,M;for(f=0;f<this.length;f+=1)if(F=K(this[f]))M=new G(h),O(this[f],M,h,q),M.visible&&(S(this[f],F,M),R(this[f],F,M),F.beginPath(),Oa(this[f],F,M,M),T(this[f],F,M),W(this[f],F,M));return this};f.fn.drawVector=function m(f){var h,M,v;for(h=0;h<this.length;h+=
        1)if(M=K(this[h]))v=new G(f),O(this[h],v,f,m),v.visible&&(S(this[h],M,v),R(this[h],M,v),M.beginPath(),Ra(this[h],M,v,v),T(this[h],M,v),W(this[h],M,v));return this};f.fn.drawPath=function B(h){var f,v,n,l,C;for(f=0;f<this.length;f+=1)if(v=K(this[f]))if(n=new G(h),O(this[f],n,h,B),n.visible){S(this[f],v,n);R(this[f],v,n);v.beginPath();for(l=1;u;)if(C=n["p"+l],C!==p)C=new G(C),"line"===C.type?Ma(this[f],v,n,C):"quadratic"===C.type?Na(this[f],v,n,C):"bezier"===C.type?Oa(this[f],v,n,C):"vector"===C.type?
        Ra(this[f],v,n,C):"arc"===C.type&&Ka(this[f],v,n,C),l+=1;else break;T(this[f],v,n);W(this[f],v,n)}return this};f.fn.drawText=function F(M){var v,n,l,C,$,s,E,p,u,A;for(v=0;v<this.length;v+=1)if(f(this[v]),n=K(this[v]))if(l=new G(M),C=O(this[v],l,M,F),l.visible){S(this[v],n,l);n.textBaseline=l.baseline;n.textAlign=l.align;ta(this[v],n,l);$=l.maxWidth!==h?Sa(n,l):l.text.toString().split("\n");ua(this[v],n,l,$);C&&(C.width=l.width,C.height=l.height);R(this[v],n,l,l.width,l.height);E=l.x;"left"===l.align?
        l.respectAlign?l.x+=l.width/2:E-=l.width/2:"right"===l.align&&(l.respectAlign?l.x-=l.width/2:E+=l.width/2);if(l.radius)for(E=Y(l.fontSize),l.letterSpacing===h&&(l.letterSpacing=E/500),s=0;s<$.length;s+=1){n.save();n.translate(l.x,l.y);C=$[s];p=C.length;n.rotate(-(D*l.letterSpacing*(p-1))/2);for(A=0;A<p;A+=1)u=C[A],0!==A&&n.rotate(D*l.letterSpacing),n.save(),n.translate(0,-l.radius),n.fillText(u,0,0),n.restore();l.radius-=E;l.letterSpacing+=E/(1E3*D);n.restore()}else for(s=0;s<$.length;s+=1)C=$[s],
        p=l.y+s*l.height/$.length-($.length-1)*l.height/$.length/2,n.shadowColor=l.shadowColor,n.fillText(C,E,p),"transparent"!==l.fillStyle&&(n.shadowColor="transparent"),0!==l.strokeWidth&&n.strokeText(C,E,p);p=0;"top"===l.baseline?p+=l.height/2:"bottom"===l.baseline&&(p-=l.height/2);l._event&&(n.beginPath(),n.rect(l.x-l.width/2,l.y-l.height/2+p,l.width,l.height),T(this[v],n,l),n.closePath());l._transformed&&n.restore()}ca.propCache=l;return this};f.fn.measureText=function(f){var h,v;h=this.getLayer(f);
        if(!h||h&&!h._layer)h=new G(f);if(f=K(this[0]))ta(this[0],f,h),v=Sa(f,h),ua(this[0],f,h,v);return h};f.fn.drawImage=function M(v){function n(l,n,s,r,v){return function(){var C=f(l);S(l,n,r);r.width===h&&r.sWidth===h&&(r.width=r.sWidth=I.width);r.height===h&&r.sHeight===h&&(r.height=r.sHeight=I.height);v&&(v.width=r.width,v.height=r.height);r.sWidth!==h&&r.sHeight!==h&&r.sx!==h&&r.sy!==h?(r.width===h&&(r.width=r.sWidth),r.height===h&&(r.height=r.sHeight),r.cropFromCenter&&(r.sx+=r.sWidth/2,r.sy+=r.sHeight/
    2),0>r.sy-r.sHeight/2&&(r.sy=r.sHeight/2),r.sy+r.sHeight/2>I.height&&(r.sy=I.height-r.sHeight/2),0>r.sx-r.sWidth/2&&(r.sx=r.sWidth/2),r.sx+r.sWidth/2>I.width&&(r.sx=I.width-r.sWidth/2),R(l,n,r,r.width,r.height),n.drawImage(I,r.sx-r.sWidth/2,r.sy-r.sHeight/2,r.sWidth,r.sHeight,r.x-r.width/2,r.y-r.height/2,r.width,r.height)):(R(l,n,r,r.width,r.height),n.drawImage(I,r.x-r.width/2,r.y-r.height/2,r.width,r.height));n.beginPath();n.rect(r.x-r.width/2,r.y-r.height/2,r.width,r.height);T(l,n,r);n.closePath();
        r._transformed&&n.restore();ya(n,s,r);r.layer?Q(C,s,v,"load"):r.load&&r.load.call(C[0],v);r.layer&&(v._masks=s.transforms.masks.slice(0),r._next&&C.drawLayers({clear:A,resetFire:u,index:r._next}))}}var l,C,p,s,E,D,I,wa,L,P=ca.imageCache;for(C=0;C<this.length;C+=1)if(l=this[C],p=K(this[C]))s=N(this[C]),E=new G(v),D=O(this[C],E,v,M),E.visible&&(L=E.source,wa=L.getContext,L.src||wa?I=L:L&&(P[L]&&P[L].complete?I=P[L]:(I=new Ta,L.match(/^data:/i)||(I.crossOrigin=E.crossOrigin),I.src=L,P[L]=I)),I&&(I.complete||
    wa?n(l,p,s,E,D)():(I.onload=n(l,p,s,E,D),I.src=I.src)));return this};f.fn.createPattern=function(p){function v(){s=l.createPattern(u,C.repeat);C.load&&C.load.call(n[0],s)}var n=this,l,C,u,s,E;(l=K(n[0]))?(C=new G(p),E=C.source,da(E)?(u=f("<canvas />")[0],u.width=C.width,u.height=C.height,p=K(u),E.call(u,p),v()):(p=E.getContext,E.src||p?u=E:(u=new Ta,E.match(/^data:/i)||(u.crossOrigin=C.crossOrigin),u.src=E),u.complete||p?v():(u.onload=v(),u.src=u.src))):s=h;return s};f.fn.createGradient=function(f){var v,
        n=[],l,C,u,s,E,A,I;f=new G(f);if(v=K(this[0])){f.x1=f.x1||0;f.y1=f.y1||0;f.x2=f.x2||0;f.y2=f.y2||0;v=f.r1!==h&&f.r2!==h?v.createRadialGradient(f.x1,f.y1,f.r1,f.x2,f.y2,f.r2):v.createLinearGradient(f.x1,f.y1,f.x2,f.y2);for(s=1;f["c"+s]!==p;s+=1)f["s"+s]!==p?n.push(f["s"+s]):n.push(h);l=n.length;n[0]===h&&(n[0]=0);n[l-1]===h&&(n[l-1]=1);for(s=0;s<l;s+=1){if(n[s]!==h){A=1;I=0;C=n[s];for(E=s+1;E<l;E+=1)if(n[E]!==h){u=n[E];break}else A+=1;C>u&&(n[E]=n[s])}else n[s]===h&&(I+=1,n[s]=C+(u-C)/A*I);v.addColorStop(n[s],
        f["c"+(s+1)])}}else v=h;return v};f.fn.setPixels=function v(f){var l,p,u,s,E,A,I,D,L;for(p=0;p<this.length;p+=1)if(l=this[p],u=K(l)){s=new G(f);O(l,s,f,v);R(this[p],u,s,s.width,s.height);if(s.width===h||s.height===h)s.width=l.width,s.height=l.height,s.x=s.width/2,s.y=s.height/2;if(0!==s.width&&0!==s.height){A=u.getImageData(s.x-s.width/2,s.y-s.height/2,s.width,s.height);I=A.data;L=I.length;if(s.each)for(D=0;D<L;D+=4)E={r:I[D],g:I[D+1],b:I[D+2],a:I[D+3]},s.each.call(l,E,s),I[D]=E.r,I[D+1]=E.g,I[D+
    2]=E.b,I[D+3]=E.a;u.putImageData(A,s.x-s.width/2,s.y-s.height/2);u.restore()}}return this};f.fn.getCanvasImage=function(f,n){var l,u=h;0!==this.length&&(l=this[0],l.toDataURL&&(n===p&&(n=1),u=l.toDataURL("image/"+f,n)));return u};f.fn.detectPixelRatio=function(h){var n,l,p,A,s,E,D;for(l=0;l<this.length;l+=1)n=this[l],f(this[l]),p=K(n),D=N(this[l]),D.scaled||(A=L.devicePixelRatio||1,s=p.webkitBackingStorePixelRatio||p.mozBackingStorePixelRatio||p.msBackingStorePixelRatio||p.oBackingStorePixelRatio||
    p.backingStorePixelRatio||1,A/=s,1!==A&&(s=n.width,E=n.height,n.width=s*A,n.height=E*A,n.style.width=s+"px",n.style.height=E+"px",p.scale(A,A)),D.pixelRatio=A,D.scaled=u,h&&h.call(n,A));return this};Z.clearCache=function(){for(var f in ca)ca.hasOwnProperty(f)&&(ca[f]={})};f.support.canvas=f("<canvas />")[0].getContext!==p;aa(Z,{defaults:ma,setGlobalProps:S,transformShape:R,detectEvents:T,closePath:W,setCanvasFont:ta,measureText:ua});f.jCanvas=Z;f.jCanvasObject=G});
