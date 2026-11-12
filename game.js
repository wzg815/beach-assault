(()=>{var sA=0,nf=1,rA=2;var gd=1,Mh=2,mi=3,ii=0,an=1,zn=2,ti=0,Gi=1,ds=2,sf=3,rf=4,aA=5,hs=100,oA=101,cA=102,lA=103,hA=104,uA=200,fA=201,dA=202,pA=203,fl=204,dl=205,AA=206,mA=207,gA=208,_A=209,xA=210,bA=211,EA=212,yA=213,vA=214,pl=0,Al=1,ml=2,Js=3,gl=4,_l=5,xl=6,bl=7,_d=0,MA=1,CA=2,ni=0,wA=1,SA=2,IA=3,TA=4,RA=5,BA=6,DA=7,af="attached",LA="detached",xd=300,ps=301,js=302,qr=303,El=304,Jo=306,Zt=1e3,gn=1001,Xr=1002,rn=1003,Ch=1004;var Qs=1005;var mt=1006,Gr=1007;var un=1008;var Rt=1009,bd=1010,Ed=1011,Yr=1012,wh=1013,As=1014,Vt=1015,bt=1016,Sh=1017,Ih=1018,Zs=1020,yd=35902,vd=1021,Md=1022,Tt=1023,Cd=1024,wd=1025,Vs=1026,$s=1027,Mi=1028,Th=1029,Xi=1030,Rh=1031;var Bh=1033,oo=33776,Ws=33777,co=33778,Ks=33779,Jr=35840,yl=35841,jr=35842,vl=35843,Zr=36196,$r=37492,ea=37496,er=37808,Ml=37809,Cl=37810,wl=37811,tr=37812,Sl=37813,Il=37814,Tl=37815,Rl=37816,Bl=37817,Dl=37818,Ll=37819,Pl=37820,Fl=37821,qs=36492,Ul=36494,Nl=36495,Sd=36283,Ol=36284,kl=36285,Ql=36286,PA=2200,FA=2201,UA=2202,nr=2300,ir=2301,Rc=2302,Gs=2400,Hs=2401,ho=2402,Dh=2500,NA=2501,Id=0,jo=1,da=2,OA=3200,kA=3201;var Td=0,QA=1,Mn="",_t="srgb",Et="srgb-linear",pa="display-p3",Ar="display-p3-linear",uo="linear",Ct="srgb",fo="rec709",po="p3";var Cs=7680;var of=519,GA=512,HA=513,zA=514,Rd=515,VA=516,WA=517,KA=518,qA=519,Gl=35044,Yi=35048;var cf="300 es",xi=2e3,Ao=2001,bi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lf=1234567,Hr=Math.PI/180,sr=180/Math.PI;function Wn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[s&255]+nn[s>>8&255]+nn[s>>16&255]+nn[s>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function zt(s,e,t){return Math.max(e,Math.min(t,s))}function Lh(s,e){return(s%e+e)%e}function XA(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function YA(s,e,t){return s!==e?(t-s)/(e-s):0}function zr(s,e,t){return(1-t)*s+t*e}function JA(s,e,t,n){return zr(s,e,1-Math.exp(-t*n))}function jA(s,e=1){return e-Math.abs(Lh(s,e*2)-e)}function ZA(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function $A(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function em(s,e){return s+Math.floor(Math.random()*(e-s+1))}function tm(s,e){return s+Math.random()*(e-s)}function nm(s){return s*(.5-Math.random())}function im(s){s!==void 0&&(lf=s);let e=lf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sm(s){return s*Hr}function rm(s){return s*sr}function am(s){return(s&s-1)===0&&s!==0}function om(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function cm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function lm(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),A=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*u,c*d,o*l);break;case"YZY":s.set(c*d,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*d,o*h,o*l);break;case"XZX":s.set(o*h,c*A,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*A,o*l);break;case"ZYZ":s.set(c*A,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Vn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function lt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Zo={DEG2RAD:Hr,RAD2DEG:sr,generateUUID:Wn,clamp:zt,euclideanModulo:Lh,mapLinear:XA,inverseLerp:YA,lerp:zr,damp:JA,pingpong:jA,smoothstep:ZA,smootherstep:$A,randInt:em,randFloat:tm,randFloatSpread:nm,seededRandom:im,degToRad:sm,radToDeg:rm,isPowerOfTwo:am,ceilPowerOfTwo:om,floorPowerOfTwo:cm,setQuaternionFromProperEuler:lm,normalize:lt,denormalize:Vn},ne=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class s{constructor(e,t,n,i,r,a,o,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],A=n[8],g=i[0],m=i[3],p=i[6],_=i[1],b=i[4],E=i[7],I=i[2],C=i[5],S=i[8];return r[0]=a*g+o*_+c*I,r[3]=a*m+o*b+c*C,r[6]=a*p+o*E+c*S,r[1]=l*g+h*_+u*I,r[4]=l*m+h*b+u*C,r[7]=l*p+h*E+u*S,r[2]=d*g+f*_+A*I,r[5]=d*m+f*b+A*C,r[8]=d*p+f*E+A*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,A=t*u+n*d+i*f;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/A;return e[0]=u*g,e[1]=(i*l-h*n)*g,e[2]=(o*n-i*a)*g,e[3]=d*g,e[4]=(h*t-i*c)*g,e[5]=(i*r-o*t)*g,e[6]=f*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Bc.makeScale(e,t)),this}rotate(e){return this.premultiply(Bc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Bc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Bc=new We;function Bd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ta(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function hm(){let s=ta("canvas");return s.style.display="block",s}var hf={};function lo(s){s in hf||(hf[s]=!0,console.warn(s))}function um(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function fm(s){let e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function dm(s){let e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var uf=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ff=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Br={[Et]:{transfer:uo,primaries:fo,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[_t]:{transfer:Ct,primaries:fo,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ar]:{transfer:uo,primaries:po,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(ff),fromReference:s=>s.applyMatrix3(uf)},[pa]:{transfer:Ct,primaries:po,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(ff),fromReference:s=>s.applyMatrix3(uf).convertLinearToSRGB()}},pm=new Set([Et,Ar]),et={enabled:!0,_workingColorSpace:Et,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!pm.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=Br[e].toReference,i=Br[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Br[s].primaries},getTransfer:function(s){return s===Mn?uo:Br[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(Br[e].luminanceCoefficients)}};function Xs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Dc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ws,Hl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ws===void 0&&(ws=ta("canvas")),ws.width=e.width,ws.height=e.height;let n=ws.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ws}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ta("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Xs(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xs(t[n]/255)*255):t[n]=Xs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Am=0,mo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=Wn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Lc(i[a].image)):r.push(Lc(i[a]))}else r=Lc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Lc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Hl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var mm=0,Ot=class s extends bi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=gn,i=gn,r=mt,a=un,o=Tt,c=Rt,l=s.DEFAULT_ANISOTROPY,h=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=Wn(),this.name="",this.source=new mo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zt:e.x=e.x-Math.floor(e.x);break;case gn:e.x=e.x<0?0:1;break;case Xr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zt:e.y=e.y-Math.floor(e.y);break;case gn:e.y=e.y<0?0:1;break;case Xr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=xd;Ot.DEFAULT_ANISOTROPY=1;var Ye=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],A=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(A-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(A+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,E=(f+1)/2,I=(p+1)/2,C=(h+d)/4,S=(u+g)/4,w=(A+m)/4;return b>E&&b>I?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=C/n,r=S/n):E>I?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=C/i,r=w/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=S/r,i=w/r),this.set(n,i,r,t),this}let _=Math.sqrt((m-A)*(m-A)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-A)/_,this.y=(u-g)/_,this.z=(d-h)/_,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},zl=class extends bi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ye(0,0,e,t),this.scissorTest=!1,this.viewport=new Ye(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ot(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new mo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends zl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},go=class extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=rn,this.minFilter=rn,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var na=class extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=rn,this.minFilter=rn,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],A=r[a+2],g=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=A,e[t+3]=g;return}if(u!==g||c!==d||l!==f||h!==A){let m=1-o,p=c*d+l*f+h*A+u*g,_=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let I=Math.sqrt(b),C=Math.atan2(I,p*_);m=Math.sin(m*C)/I,o=Math.sin(o*C)/I}let E=o*_;if(c=c*m+d*E,l=l*m+f*E,h=h*m+A*E,u=u*m+g*E,m===1-o){let I=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=I,l*=I,h*=I,u*=I}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],A=r[a+3];return e[t]=o*A+h*u+c*f-l*d,e[t+1]=c*A+h*d+l*u-o*f,e[t+2]=l*A+h*f+o*d-c*u,e[t+3]=h*A-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),d=c(n/2),f=c(i/2),A=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*A,this._y=l*f*u-d*h*A,this._z=l*h*A+d*f*u,this._w=l*h*u-d*f*A;break;case"YXZ":this._x=d*h*u+l*f*A,this._y=l*f*u-d*h*A,this._z=l*h*A-d*f*u,this._w=l*h*u+d*f*A;break;case"ZXY":this._x=d*h*u-l*f*A,this._y=l*f*u+d*h*A,this._z=l*h*A+d*f*u,this._w=l*h*u-d*f*A;break;case"ZYX":this._x=d*h*u-l*f*A,this._y=l*f*u+d*h*A,this._z=l*h*A-d*f*u,this._w=l*h*u+d*f*A;break;case"YZX":this._x=d*h*u+l*f*A,this._y=l*f*u+d*h*A,this._z=l*h*A-d*f*u,this._w=l*h*u-d*f*A;break;case"XZY":this._x=d*h*u-l*f*A,this._y=l*f*u-d*h*A,this._z=l*h*A+d*f*u,this._w=l*h*u+d*f*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(df.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(df.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pc.copy(this).projectOnVector(e),this.sub(Pc)}reflect(e){return this.sub(Pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pc=new T,df=new tt,Ln=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qn):Qn.fromBufferAttribute(r,a),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),La.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),La.copy(n.boundingBox)),La.applyMatrix4(e.matrixWorld),this.union(La)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dr),Pa.subVectors(this.max,Dr),Ss.subVectors(e.a,Dr),Is.subVectors(e.b,Dr),Ts.subVectors(e.c,Dr),Pi.subVectors(Is,Ss),Fi.subVectors(Ts,Is),is.subVectors(Ss,Ts);let t=[0,-Pi.z,Pi.y,0,-Fi.z,Fi.y,0,-is.z,is.y,Pi.z,0,-Pi.x,Fi.z,0,-Fi.x,is.z,0,-is.x,-Pi.y,Pi.x,0,-Fi.y,Fi.x,0,-is.y,is.x,0];return!Fc(t,Ss,Is,Ts,Pa)||(t=[1,0,0,0,1,0,0,0,1],!Fc(t,Ss,Is,Ts,Pa))?!1:(Fa.crossVectors(Pi,Fi),t=[Fa.x,Fa.y,Fa.z],Fc(t,Ss,Is,Ts,Pa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},hi=[new T,new T,new T,new T,new T,new T,new T,new T],Qn=new T,La=new Ln,Ss=new T,Is=new T,Ts=new T,Pi=new T,Fi=new T,is=new T,Dr=new T,Pa=new T,Fa=new T,ss=new T;function Fc(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ss.fromArray(s,r);let o=i.x*Math.abs(ss.x)+i.y*Math.abs(ss.y)+i.z*Math.abs(ss.z),c=e.dot(ss),l=t.dot(ss),h=n.dot(ss);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var gm=new Ln,Lr=new T,Uc=new T,fn=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):gm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);let t=Lr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Lr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(Uc)),this.expandByPoint(Lr.copy(e.center).sub(Uc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ui=new T,Nc=new T,Ua=new T,Ui=new T,Oc=new T,Na=new T,kc=new T,rr=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Nc.copy(e).add(t).multiplyScalar(.5),Ua.copy(t).sub(e).normalize(),Ui.copy(this.origin).sub(Nc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ua),o=Ui.dot(this.direction),c=-Ui.dot(Ua),l=Ui.lengthSq(),h=Math.abs(1-a*a),u,d,f,A;if(h>0)if(u=a*c-o,d=a*o-c,A=r*h,u>=0)if(d>=-A)if(d<=A){let g=1/h;u*=g,d*=g,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-A?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=A?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Nc).addScaledVector(Ua,d),f}intersectSphere(e,t){ui.subVectors(e.center,this.origin);let n=ui.dot(this.direction),i=ui.dot(ui)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,n,i,r){Oc.subVectors(t,e),Na.subVectors(n,e),kc.crossVectors(Oc,Na);let a=this.direction.dot(kc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ui.subVectors(this.origin,e);let c=o*this.direction.dot(Na.crossVectors(Ui,Na));if(c<0)return null;let l=o*this.direction.dot(Oc.cross(Ui));if(l<0||c+l>a)return null;let h=-o*Ui.dot(kc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ce=class s{constructor(e,t,n,i,r,a,o,c,l,h,u,d,f,A,g,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,u,d,f,A,g,m)}set(e,t,n,i,r,a,o,c,l,h,u,d,f,A,g,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=A,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Rs.setFromMatrixColumn(e,0).length(),r=1/Rs.setFromMatrixColumn(e,1).length(),a=1/Rs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,A=o*h,g=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+A*l,t[5]=d-g*l,t[9]=-o*c,t[2]=g-d*l,t[6]=A+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,A=l*h,g=l*u;t[0]=d+g*o,t[4]=A*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-A,t[6]=g+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,A=l*h,g=l*u;t[0]=d-g*o,t[4]=-a*u,t[8]=A+f*o,t[1]=f+A*o,t[5]=a*h,t[9]=g-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,A=o*h,g=o*u;t[0]=c*h,t[4]=A*l-f,t[8]=d*l+g,t[1]=c*u,t[5]=g*l+d,t[9]=f*l-A,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,A=o*c,g=o*l;t[0]=c*h,t[4]=g-d*u,t[8]=A*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+A,t[10]=d-g*u}else if(e.order==="XZY"){let d=a*c,f=a*l,A=o*c,g=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+g,t[5]=a*h,t[9]=f*u-A,t[2]=A*u-f,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_m,e,xm)}lookAt(e,t,n){let i=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ni.crossVectors(n,yn),Ni.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ni.crossVectors(n,yn)),Ni.normalize(),Oa.crossVectors(yn,Ni),i[0]=Ni.x,i[4]=Oa.x,i[8]=yn.x,i[1]=Ni.y,i[5]=Oa.y,i[9]=yn.y,i[2]=Ni.z,i[6]=Oa.z,i[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],A=n[2],g=n[6],m=n[10],p=n[14],_=n[3],b=n[7],E=n[11],I=n[15],C=i[0],S=i[4],w=i[8],B=i[12],x=i[1],y=i[5],L=i[9],F=i[13],U=i[2],W=i[6],k=i[10],q=i[14],z=i[3],ce=i[7],ae=i[11],de=i[15];return r[0]=a*C+o*x+c*U+l*z,r[4]=a*S+o*y+c*W+l*ce,r[8]=a*w+o*L+c*k+l*ae,r[12]=a*B+o*F+c*q+l*de,r[1]=h*C+u*x+d*U+f*z,r[5]=h*S+u*y+d*W+f*ce,r[9]=h*w+u*L+d*k+f*ae,r[13]=h*B+u*F+d*q+f*de,r[2]=A*C+g*x+m*U+p*z,r[6]=A*S+g*y+m*W+p*ce,r[10]=A*w+g*L+m*k+p*ae,r[14]=A*B+g*F+m*q+p*de,r[3]=_*C+b*x+E*U+I*z,r[7]=_*S+b*y+E*W+I*ce,r[11]=_*w+b*L+E*k+I*ae,r[15]=_*B+b*F+E*q+I*de,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],A=e[3],g=e[7],m=e[11],p=e[15];return A*(+r*c*u-i*l*u-r*o*d+n*l*d+i*o*f-n*c*f)+g*(+t*c*f-t*l*d+r*a*d-i*a*f+i*l*h-r*c*h)+m*(+t*l*u-t*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-i*o*h-t*c*u+t*o*d+i*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],A=e[12],g=e[13],m=e[14],p=e[15],_=u*m*l-g*d*l+g*c*f-o*m*f-u*c*p+o*d*p,b=A*d*l-h*m*l-A*c*f+a*m*f+h*c*p-a*d*p,E=h*g*l-A*u*l+A*o*f-a*g*f-h*o*p+a*u*p,I=A*u*c-h*g*c-A*o*d+a*g*d+h*o*m-a*u*m,C=t*_+n*b+i*E+r*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/C;return e[0]=_*S,e[1]=(g*d*r-u*m*r-g*i*f+n*m*f+u*i*p-n*d*p)*S,e[2]=(o*m*r-g*c*r+g*i*l-n*m*l-o*i*p+n*c*p)*S,e[3]=(u*c*r-o*d*r-u*i*l+n*d*l+o*i*f-n*c*f)*S,e[4]=b*S,e[5]=(h*m*r-A*d*r+A*i*f-t*m*f-h*i*p+t*d*p)*S,e[6]=(A*c*r-a*m*r-A*i*l+t*m*l+a*i*p-t*c*p)*S,e[7]=(a*d*r-h*c*r+h*i*l-t*d*l-a*i*f+t*c*f)*S,e[8]=E*S,e[9]=(A*u*r-h*g*r-A*n*f+t*g*f+h*n*p-t*u*p)*S,e[10]=(a*g*r-A*o*r+A*n*l-t*g*l-a*n*p+t*o*p)*S,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*f-t*o*f)*S,e[12]=I*S,e[13]=(h*g*i-A*u*i+A*n*d-t*g*d-h*n*m+t*u*m)*S,e[14]=(A*o*i-a*g*i-A*n*c+t*g*c+a*n*m-t*o*m)*S,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,A=r*u,g=a*h,m=a*u,p=o*u,_=c*l,b=c*h,E=c*u,I=n.x,C=n.y,S=n.z;return i[0]=(1-(g+p))*I,i[1]=(f+E)*I,i[2]=(A-b)*I,i[3]=0,i[4]=(f-E)*C,i[5]=(1-(d+p))*C,i[6]=(m+_)*C,i[7]=0,i[8]=(A+b)*S,i[9]=(m-_)*S,i[10]=(1-(d+g))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Rs.set(i[0],i[1],i[2]).length(),a=Rs.set(i[4],i[5],i[6]).length(),o=Rs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Gn.copy(this);let l=1/r,h=1/a,u=1/o;return Gn.elements[0]*=l,Gn.elements[1]*=l,Gn.elements[2]*=l,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=u,Gn.elements[9]*=u,Gn.elements[10]*=u,t.setFromRotationMatrix(Gn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=xi){let c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),f,A;if(o===xi)f=-(a+r)/(a-r),A=-2*a*r/(a-r);else if(o===Ao)f=-a/(a-r),A=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=A,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=xi){let c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(a-r),d=(t+e)*l,f=(n+i)*h,A,g;if(o===xi)A=(a+r)*u,g=-2*u;else if(o===Ao)A=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=g,c[14]=-A,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Rs=new T,Gn=new Ce,_m=new T(0,0,0),xm=new T(1,1,1),Ni=new T,Oa=new T,yn=new T,pf=new Ce,Af=new tt,Ft=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Af.setFromEuler(this),this.setFromQuaternion(Af,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ft.DEFAULT_ORDER="XYZ";var _o=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},bm=0,mf=new T,Bs=new tt,fi=new Ce,ka=new T,Pr=new T,Em=new T,ym=new tt,gf=new T(1,0,0),_f=new T(0,1,0),xf=new T(0,0,1),bf={type:"added"},vm={type:"removed"},Ds={type:"childadded",child:null},Qc={type:"childremoved",child:null},wt=class s extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new T,t=new Ft,n=new tt,i=new T(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ce},normalMatrix:{value:new We}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(gf,e)}rotateY(e){return this.rotateOnAxis(_f,e)}rotateZ(e){return this.rotateOnAxis(xf,e)}translateOnAxis(e,t){return mf.copy(e).applyQuaternion(this.quaternion),this.position.add(mf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gf,e)}translateY(e){return this.translateOnAxis(_f,e)}translateZ(e){return this.translateOnAxis(xf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ka.copy(e):ka.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(Pr,ka,this.up):fi.lookAt(ka,Pr,this.up),this.quaternion.setFromRotationMatrix(fi),i&&(fi.extractRotation(i.matrixWorld),Bs.setFromRotationMatrix(fi),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bf),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vm),Qc.child=e,this.dispatchEvent(Qc),Qc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bf),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,e,Em),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,ym,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),A=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),A.length>0&&(n.nodes=A)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};wt.DEFAULT_UP=new T(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Hn=new T,di=new T,Gc=new T,pi=new T,Ls=new T,Ps=new T,Ef=new T,Hc=new T,zc=new T,Vc=new T,Wc=new Ye,Kc=new Ye,qc=new Ye,us=class s{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Hn.subVectors(e,t),i.cross(Hn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Hn.subVectors(i,t),di.subVectors(n,t),Gc.subVectors(e,t);let a=Hn.dot(Hn),o=Hn.dot(di),c=Hn.dot(Gc),l=di.dot(di),h=di.dot(Gc),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,A=(a*h-o*c)*d;return r.set(1-f-A,A,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,pi.x),c.addScaledVector(a,pi.y),c.addScaledVector(o,pi.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return Wc.setScalar(0),Kc.setScalar(0),qc.setScalar(0),Wc.fromBufferAttribute(e,t),Kc.fromBufferAttribute(e,n),qc.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Wc,r.x),a.addScaledVector(Kc,r.y),a.addScaledVector(qc,r.z),a}static isFrontFacing(e,t,n,i){return Hn.subVectors(n,t),di.subVectors(e,t),Hn.cross(di).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Hn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Ls.subVectors(i,n),Ps.subVectors(r,n),Hc.subVectors(e,n);let c=Ls.dot(Hc),l=Ps.dot(Hc);if(c<=0&&l<=0)return t.copy(n);zc.subVectors(e,i);let h=Ls.dot(zc),u=Ps.dot(zc);if(h>=0&&u<=h)return t.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Ls,a);Vc.subVectors(e,r);let f=Ls.dot(Vc),A=Ps.dot(Vc);if(A>=0&&f<=A)return t.copy(r);let g=f*l-c*A;if(g<=0&&l>=0&&A<=0)return o=l/(l-A),t.copy(n).addScaledVector(Ps,o);let m=h*A-f*u;if(m<=0&&u-h>=0&&f-A>=0)return Ef.subVectors(r,i),o=(u-h)/(u-h+(f-A)),t.copy(i).addScaledVector(Ef,o);let p=1/(m+g+d);return a=g*p,o=d*p,t.copy(n).addScaledVector(Ls,a).addScaledVector(Ps,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},Qa={h:0,s:0,l:0};function Xc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var ee=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=et.workingColorSpace){if(e=Lh(e,1),t=zt(t,0,1),n=zt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Xc(a,r,e+1/3),this.g=Xc(a,r,e),this.b=Xc(a,r,e-1/3)}return et.toWorkingColorSpace(this,i),this}setStyle(e,t=_t){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){let n=Dd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}copyLinearToSRGB(e){return this.r=Dc(e.r),this.g=Dc(e.g),this.b=Dc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return et.fromWorkingColorSpace(sn.copy(this),e),Math.round(zt(sn.r*255,0,255))*65536+Math.round(zt(sn.g*255,0,255))*256+Math.round(zt(sn.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(sn.copy(this),t);let n=sn.r,i=sn.g,r=sn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=_t){et.fromWorkingColorSpace(sn.copy(this),e);let t=sn.r,n=sn.g,i=sn.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+t,Oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Oi),e.getHSL(Qa);let n=zr(Oi.h,Qa.h,t),i=zr(Oi.s,Qa.s,t),r=zr(Oi.l,Qa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new ee;ee.NAMES=Dd;var Mm=0,Cn=class extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=Gi,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fl,this.blendDst=dl,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=of,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fl&&(n.blendSrc=this.blendSrc),this.blendDst!==dl&&(n.blendDst=this.blendDst),this.blendEquation!==hs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==of&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},_n=class extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ft,this.combine=_d,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},_i=Cm();function Cm(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function wm(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=zt(s,-65504,65504),_i.floatView[0]=s;let e=_i.uint32View[0],t=e>>23&511;return _i.baseTable[t]+((e&8388607)>>_i.shiftTable[t])}function Sm(s){let e=s>>10;return _i.uint32View[0]=_i.mantissaTable[_i.offsetTable[e]+(s&1023)]+_i.exponentTable[e],_i.floatView[0]}var Aa={toHalfFloat:wm,fromHalfFloat:Sm},Ht=new T,Ga=new ne,Pt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gl,this.updateRanges=[],this.gpuType=Vt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ga.fromBufferAttribute(this,t),Ga.applyMatrix3(e),this.setXY(t,Ga.x,Ga.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gl&&(e.usage=this.usage),e}};var xo=class extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var bo=class extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ot=class extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Im=0,Dn=new Ce,Yc=new wt,Fs=new T,vn=new Ln,Fr=new Ln,jt=new T,Bt=class s extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bd(e)?bo:xo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return Yc.lookAt(e),Yc.updateMatrix(),this.applyMatrix4(Yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ot(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Fr.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(vn.min,Fr.min),vn.expandByPoint(jt),jt.addVectors(vn.max,Fr.max),vn.expandByPoint(jt)):(vn.expandByPoint(Fr.min),vn.expandByPoint(Fr.max))}vn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)jt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(jt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)jt.fromBufferAttribute(o,l),c&&(Fs.fromBufferAttribute(e,l),jt.add(Fs)),i=Math.max(i,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let w=0;w<n.count;w++)o[w]=new T,c[w]=new T;let l=new T,h=new T,u=new T,d=new ne,f=new ne,A=new ne,g=new T,m=new T;function p(w,B,x){l.fromBufferAttribute(n,w),h.fromBufferAttribute(n,B),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,w),f.fromBufferAttribute(r,B),A.fromBufferAttribute(r,x),h.sub(l),u.sub(l),f.sub(d),A.sub(d);let y=1/(f.x*A.y-A.x*f.y);isFinite(y)&&(g.copy(h).multiplyScalar(A.y).addScaledVector(u,-f.y).multiplyScalar(y),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-A.x).multiplyScalar(y),o[w].add(g),o[B].add(g),o[x].add(g),c[w].add(m),c[B].add(m),c[x].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let w=0,B=_.length;w<B;++w){let x=_[w],y=x.start,L=x.count;for(let F=y,U=y+L;F<U;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let b=new T,E=new T,I=new T,C=new T;function S(w){I.fromBufferAttribute(i,w),C.copy(I);let B=o[w];b.copy(B),b.sub(I.multiplyScalar(I.dot(B))).normalize(),E.crossVectors(C,B);let y=E.dot(c[w])<0?-1:1;a.setXYZW(w,b.x,b.y,b.z,y)}for(let w=0,B=_.length;w<B;++w){let x=_[w],y=x.start,L=x.count;for(let F=y,U=y+L;F<U;F+=3)S(e.getX(F+0)),S(e.getX(F+1)),S(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new T,r=new T,a=new T,o=new T,c=new T,l=new T,h=new T,u=new T;if(e)for(let d=0,f=e.count;d<f;d+=3){let A=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,A),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,A),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(A,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,A=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?f=c[g]*o.data.stride+o.offset:f=c[g]*h;for(let p=0;p<h;p++)d[A++]=l[f++]}return new Pt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},yf=new Ce,rs=new rr,Ha=new fn,vf=new T,za=new T,Va=new T,Wa=new T,Jc=new T,Ka=new T,Mf=new T,qa=new T,Re=class extends wt{constructor(e=new Bt,t=new _n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Ka.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Jc.fromBufferAttribute(u,e),a?Ka.addScaledVector(Jc,h):Ka.addScaledVector(Jc.sub(t),h))}t.add(Ka)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(r),rs.copy(e.ray).recast(e.near),!(Ha.containsPoint(rs.origin)===!1&&(rs.intersectSphere(Ha,vf)===null||rs.origin.distanceToSquared(vf)>(e.far-e.near)**2))&&(yf.copy(r).invert(),rs.copy(e.ray).applyMatrix4(yf),!(n.boundingBox!==null&&rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let A=0,g=d.length;A<g;A++){let m=d[A],p=a[m.materialIndex],_=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let E=_,I=b;E<I;E+=3){let C=o.getX(E),S=o.getX(E+1),w=o.getX(E+2);i=Xa(this,p,e,n,l,h,u,C,S,w),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let A=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=A,p=g;m<p;m+=3){let _=o.getX(m),b=o.getX(m+1),E=o.getX(m+2);i=Xa(this,a,e,n,l,h,u,_,b,E),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let A=0,g=d.length;A<g;A++){let m=d[A],p=a[m.materialIndex],_=Math.max(m.start,f.start),b=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let E=_,I=b;E<I;E+=3){let C=E,S=E+1,w=E+2;i=Xa(this,p,e,n,l,h,u,C,S,w),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let A=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let m=A,p=g;m<p;m+=3){let _=m,b=m+1,E=m+2;i=Xa(this,a,e,n,l,h,u,_,b,E),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Tm(s,e,t,n,i,r,a,o){let c;if(e.side===an?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===ii,o),c===null)return null;qa.copy(o),qa.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(qa);return l<t.near||l>t.far?null:{distance:l,point:qa.clone(),object:s}}function Xa(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,za),s.getVertexPosition(c,Va),s.getVertexPosition(l,Wa);let h=Tm(s,e,t,n,za,Va,Wa,Mf);if(h){let u=new T;us.getBarycoord(Mf,za,Va,Wa,u),i&&(h.uv=us.getInterpolatedAttribute(i,o,c,l,u,new ne)),r&&(h.uv1=us.getInterpolatedAttribute(r,o,c,l,u,new ne)),a&&(h.normal=us.getInterpolatedAttribute(a,o,c,l,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new T,materialIndex:0};us.getNormal(za,Va,Wa,d.normal),h.face=d,h.barycoord=u}return h}var Be=class s extends Bt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;A("z","y","x",-1,-1,n,t,e,a,r,0),A("z","y","x",1,-1,n,t,-e,a,r,1),A("x","z","y",1,1,e,n,t,i,a,2),A("x","z","y",1,-1,e,n,-t,i,a,3),A("x","y","z",1,-1,e,t,n,i,r,4),A("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(u,2));function A(g,m,p,_,b,E,I,C,S,w,B){let x=E/S,y=I/w,L=E/2,F=I/2,U=C/2,W=S+1,k=w+1,q=0,z=0,ce=new T;for(let ae=0;ae<k;ae++){let de=ae*y-F;for(let ke=0;ke<W;ke++){let ze=ke*x-L;ce[g]=ze*_,ce[m]=de*b,ce[p]=U,l.push(ce.x,ce.y,ce.z),ce[g]=0,ce[m]=0,ce[p]=C>0?1:-1,h.push(ce.x,ce.y,ce.z),u.push(ke/S),u.push(1-ae/w),q+=1}}for(let ae=0;ae<w;ae++)for(let de=0;de<S;de++){let ke=d+de+W*ae,ze=d+de+W*(ae+1),X=d+(de+1)+W*(ae+1),ie=d+(de+1)+W*ae;c.push(ke,ze,ie),c.push(ze,X,ie),z+=6}o.addGroup(f,z,B),f+=z,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ar(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function hn(s){let e={};for(let t=0;t<s.length;t++){let n=ar(s[t]);for(let i in n)e[i]=n[i]}return e}function Rm(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ld(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var mr={clone:ar,merge:hn},Bm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,St=class extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bm,this.fragmentShader=Dm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=Rm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Eo=class extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ki=new T,Cf=new ne,wf=new ne,qt=class extends Eo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sr*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,t){return this.getViewBounds(e,Cf,wf),t.subVectors(wf,Cf)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Hr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Us=-90,Ns=1,Vl=class extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new qt(Us,Ns,e,t);i.layers=this.layers,this.add(i);let r=new qt(Us,Ns,e,t);r.layers=this.layers,this.add(r);let a=new qt(Us,Ns,e,t);a.layers=this.layers,this.add(a);let o=new qt(Us,Ns,e,t);o.layers=this.layers,this.add(o);let c=new qt(Us,Ns,e,t);c.layers=this.layers,this.add(c);let l=new qt(Us,Ns,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===xi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ao)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=A,n.texture.needsPMREMUpdate=!0}},yo=class extends Ot{constructor(e,t,n,i,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:ps,super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Wl=class extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new yo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Be(5,5,5),r=new St({name:"CubemapFromEquirect",uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:ti});r.uniforms.tEquirect.value=t;let a=new Re(i,r),o=t.minFilter;return t.minFilter===un&&(t.minFilter=mt),new Vl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},jc=new T,Lm=new T,Pm=new We,gi=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=jc.subVectors(n,t).cross(Lm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(jc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Pm.getNormalMatrix(e),i=this.coplanarPoint(jc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},as=new fn,Ya=new T,ia=class{constructor(e=new gi,t=new gi,n=new gi,i=new gi,r=new gi,a=new gi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xi){let n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],A=i[9],g=i[10],m=i[11],p=i[12],_=i[13],b=i[14],E=i[15];if(n[0].setComponents(c-r,d-l,m-f,E-p).normalize(),n[1].setComponents(c+r,d+l,m+f,E+p).normalize(),n[2].setComponents(c+a,d+h,m+A,E+_).normalize(),n[3].setComponents(c-a,d-h,m-A,E-_).normalize(),n[4].setComponents(c-o,d-u,m-g,E-b).normalize(),t===xi)n[5].setComponents(c+o,d+u,m+g,E+b).normalize();else if(t===Ao)n[5].setComponents(o,u,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){return as.center.set(0,0,0),as.radius=.7071067811865476,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ya.x=i.normal.x>0?e.max.x:e.min.x,Ya.y=i.normal.y>0?e.max.y:e.min.y,Ya.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ya)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Pd(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Fm(s){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,A)=>f.start-A.start);let d=0;for(let f=1;f<u.length;f++){let A=u[d],g=u[f];g.start<=A.start+A.count+1?A.count=Math.max(A.count,g.start+g.count-A.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,A=u.length;f<A;f++){let g=u[f];s.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var Kn=class s extends Bt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,f=[],A=[],g=[],m=[];for(let p=0;p<h;p++){let _=p*d-a;for(let b=0;b<l;b++){let E=b*u-r;A.push(E,-_,0),g.push(0,0,1),m.push(b/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<o;_++){let b=_+l*p,E=_+l*(p+1),I=_+1+l*(p+1),C=_+1+l*p;f.push(b,E,C),f.push(E,I,C)}this.setIndex(f),this.setAttribute("position",new ot(A,3)),this.setAttribute("normal",new ot(g,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Um=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Om=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,km=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Wm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Km=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ym=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ng=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ig=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,rg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ag=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,og=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ug=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fg="gl_FragColor = linearToOutputTexel( gl_FragColor );",dg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ag=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_g=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Mg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ig=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Pg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ug=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ng=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Og=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$g=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,e0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,t0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,s0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,r0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,a0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,h0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,u0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,f0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,d0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,p0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,x0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,b0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,E0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,y0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,v0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,M0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,C0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,S0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,T0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,R0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,D0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,P0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,F0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,H0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,z0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,V0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,K0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,X0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Y0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,J0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,e_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,n_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,i_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,a_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,h_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,d_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,p_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:Um,alphahash_pars_fragment:Nm,alphamap_fragment:Om,alphamap_pars_fragment:km,alphatest_fragment:Qm,alphatest_pars_fragment:Gm,aomap_fragment:Hm,aomap_pars_fragment:zm,batching_pars_vertex:Vm,batching_vertex:Wm,begin_vertex:Km,beginnormal_vertex:qm,bsdfs:Xm,iridescence_fragment:Ym,bumpmap_pars_fragment:Jm,clipping_planes_fragment:jm,clipping_planes_pars_fragment:Zm,clipping_planes_pars_vertex:$m,clipping_planes_vertex:eg,color_fragment:tg,color_pars_fragment:ng,color_pars_vertex:ig,color_vertex:sg,common:rg,cube_uv_reflection_fragment:ag,defaultnormal_vertex:og,displacementmap_pars_vertex:cg,displacementmap_vertex:lg,emissivemap_fragment:hg,emissivemap_pars_fragment:ug,colorspace_fragment:fg,colorspace_pars_fragment:dg,envmap_fragment:pg,envmap_common_pars_fragment:Ag,envmap_pars_fragment:mg,envmap_pars_vertex:gg,envmap_physical_pars_fragment:Ig,envmap_vertex:_g,fog_vertex:xg,fog_pars_vertex:bg,fog_fragment:Eg,fog_pars_fragment:yg,gradientmap_pars_fragment:vg,lightmap_pars_fragment:Mg,lights_lambert_fragment:Cg,lights_lambert_pars_fragment:wg,lights_pars_begin:Sg,lights_toon_fragment:Tg,lights_toon_pars_fragment:Rg,lights_phong_fragment:Bg,lights_phong_pars_fragment:Dg,lights_physical_fragment:Lg,lights_physical_pars_fragment:Pg,lights_fragment_begin:Fg,lights_fragment_maps:Ug,lights_fragment_end:Ng,logdepthbuf_fragment:Og,logdepthbuf_pars_fragment:kg,logdepthbuf_pars_vertex:Qg,logdepthbuf_vertex:Gg,map_fragment:Hg,map_pars_fragment:zg,map_particle_fragment:Vg,map_particle_pars_fragment:Wg,metalnessmap_fragment:Kg,metalnessmap_pars_fragment:qg,morphinstance_vertex:Xg,morphcolor_vertex:Yg,morphnormal_vertex:Jg,morphtarget_pars_vertex:jg,morphtarget_vertex:Zg,normal_fragment_begin:$g,normal_fragment_maps:e0,normal_pars_fragment:t0,normal_pars_vertex:n0,normal_vertex:i0,normalmap_pars_fragment:s0,clearcoat_normal_fragment_begin:r0,clearcoat_normal_fragment_maps:a0,clearcoat_pars_fragment:o0,iridescence_pars_fragment:c0,opaque_fragment:l0,packing:h0,premultiplied_alpha_fragment:u0,project_vertex:f0,dithering_fragment:d0,dithering_pars_fragment:p0,roughnessmap_fragment:A0,roughnessmap_pars_fragment:m0,shadowmap_pars_fragment:g0,shadowmap_pars_vertex:_0,shadowmap_vertex:x0,shadowmask_pars_fragment:b0,skinbase_vertex:E0,skinning_pars_vertex:y0,skinning_vertex:v0,skinnormal_vertex:M0,specularmap_fragment:C0,specularmap_pars_fragment:w0,tonemapping_fragment:S0,tonemapping_pars_fragment:I0,transmission_fragment:T0,transmission_pars_fragment:R0,uv_pars_fragment:B0,uv_pars_vertex:D0,uv_vertex:L0,worldpos_vertex:P0,background_vert:F0,background_frag:U0,backgroundCube_vert:N0,backgroundCube_frag:O0,cube_vert:k0,cube_frag:Q0,depth_vert:G0,depth_frag:H0,distanceRGBA_vert:z0,distanceRGBA_frag:V0,equirect_vert:W0,equirect_frag:K0,linedashed_vert:q0,linedashed_frag:X0,meshbasic_vert:Y0,meshbasic_frag:J0,meshlambert_vert:j0,meshlambert_frag:Z0,meshmatcap_vert:$0,meshmatcap_frag:e_,meshnormal_vert:t_,meshnormal_frag:n_,meshphong_vert:i_,meshphong_frag:s_,meshphysical_vert:r_,meshphysical_frag:a_,meshtoon_vert:o_,meshtoon_frag:c_,points_vert:l_,points_frag:h_,shadow_vert:u_,shadow_frag:f_,sprite_vert:d_,sprite_frag:p_},le={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},ei={basic:{uniforms:hn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:hn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ee(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:hn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:hn([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:hn([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new ee(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:hn([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:hn([le.points,le.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:hn([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:hn([le.common,le.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:hn([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:hn([le.sprite,le.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:hn([le.common,le.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:hn([le.lights,le.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};ei.physical={uniforms:hn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var Ja={r:0,b:0,g:0},os=new Ft,A_=new Ce;function m_(s,e,t,n,i,r,a){let o=new ee(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function A(_){let b=_.isScene===!0?_.background:null;return b&&b.isTexture&&(b=(_.backgroundBlurriness>0?t:e).get(b)),b}function g(_){let b=!1,E=A(_);E===null?p(o,c):E&&E.isColor&&(p(E,1),b=!0);let I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(_,b){let E=A(b);E&&(E.isCubeTexture||E.mapping===Jo)?(h===void 0&&(h=new Re(new Be(1,1,1),new St({name:"BackgroundCubeMaterial",uniforms:ar(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,C,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),os.copy(b.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(A_.makeRotationFromEuler(os)),h.material.toneMapped=et.getTransfer(E.colorSpace)!==Ct,(u!==E||d!==E.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,f=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Re(new Kn(2,2),new St({name:"BackgroundMaterial",uniforms:ar(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=et.getTransfer(E.colorSpace)!==Ct,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=E,d=E.version,f=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,b){_.getRGB(Ja,Ld(s)),n.buffers.color.setClear(Ja.r,Ja.g,Ja.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(_,b=1){o.set(_),c=b,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(o,c)},render:g,addToRenderList:m}}function g_(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(x,y,L,F,U){let W=!1,k=u(F,L,y);r!==k&&(r=k,l(r.object)),W=f(x,F,L,U),W&&A(x,F,L,U),U!==null&&e.update(U,s.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,E(x,y,L,F),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return s.createVertexArray()}function l(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function u(x,y,L){let F=L.wireframe===!0,U=n[x.id];U===void 0&&(U={},n[x.id]=U);let W=U[y.id];W===void 0&&(W={},U[y.id]=W);let k=W[F];return k===void 0&&(k=d(c()),W[F]=k),k}function d(x){let y=[],L=[],F=[];for(let U=0;U<t;U++)y[U]=0,L[U]=0,F[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:L,attributeDivisors:F,object:x,attributes:{},index:null}}function f(x,y,L,F){let U=r.attributes,W=y.attributes,k=0,q=L.getAttributes();for(let z in q)if(q[z].location>=0){let ae=U[z],de=W[z];if(de===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(de=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(de=x.instanceColor)),ae===void 0||ae.attribute!==de||de&&ae.data!==de.data)return!0;k++}return r.attributesNum!==k||r.index!==F}function A(x,y,L,F){let U={},W=y.attributes,k=0,q=L.getAttributes();for(let z in q)if(q[z].location>=0){let ae=W[z];ae===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(ae=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(ae=x.instanceColor));let de={};de.attribute=ae,ae&&ae.data&&(de.data=ae.data),U[z]=de,k++}r.attributes=U,r.attributesNum=k,r.index=F}function g(){let x=r.newAttributes;for(let y=0,L=x.length;y<L;y++)x[y]=0}function m(x){p(x,0)}function p(x,y){let L=r.newAttributes,F=r.enabledAttributes,U=r.attributeDivisors;L[x]=1,F[x]===0&&(s.enableVertexAttribArray(x),F[x]=1),U[x]!==y&&(s.vertexAttribDivisor(x,y),U[x]=y)}function _(){let x=r.newAttributes,y=r.enabledAttributes;for(let L=0,F=y.length;L<F;L++)y[L]!==x[L]&&(s.disableVertexAttribArray(L),y[L]=0)}function b(x,y,L,F,U,W,k){k===!0?s.vertexAttribIPointer(x,y,L,U,W):s.vertexAttribPointer(x,y,L,F,U,W)}function E(x,y,L,F){g();let U=F.attributes,W=L.getAttributes(),k=y.defaultAttributeValues;for(let q in W){let z=W[q];if(z.location>=0){let ce=U[q];if(ce===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(ce=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(ce=x.instanceColor)),ce!==void 0){let ae=ce.normalized,de=ce.itemSize,ke=e.get(ce);if(ke===void 0)continue;let ze=ke.buffer,X=ke.type,ie=ke.bytesPerElement,ye=X===s.INT||X===s.UNSIGNED_INT||ce.gpuType===wh;if(ce.isInterleavedBufferAttribute){let ge=ce.data,Ge=ge.stride,Pe=ce.offset;if(ge.isInstancedInterleavedBuffer){for(let je=0;je<z.locationSize;je++)p(z.location+je,ge.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let je=0;je<z.locationSize;je++)m(z.location+je);s.bindBuffer(s.ARRAY_BUFFER,ze);for(let je=0;je<z.locationSize;je++)b(z.location+je,de/z.locationSize,X,ae,Ge*ie,(Pe+de/z.locationSize*je)*ie,ye)}else{if(ce.isInstancedBufferAttribute){for(let ge=0;ge<z.locationSize;ge++)p(z.location+ge,ce.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ge=0;ge<z.locationSize;ge++)m(z.location+ge);s.bindBuffer(s.ARRAY_BUFFER,ze);for(let ge=0;ge<z.locationSize;ge++)b(z.location+ge,de/z.locationSize,X,ae,de*ie,de/z.locationSize*ge*ie,ye)}}else if(k!==void 0){let ae=k[q];if(ae!==void 0)switch(ae.length){case 2:s.vertexAttrib2fv(z.location,ae);break;case 3:s.vertexAttrib3fv(z.location,ae);break;case 4:s.vertexAttrib4fv(z.location,ae);break;default:s.vertexAttrib1fv(z.location,ae)}}}}_()}function I(){w();for(let x in n){let y=n[x];for(let L in y){let F=y[L];for(let U in F)h(F[U].object),delete F[U];delete y[L]}delete n[x]}}function C(x){if(n[x.id]===void 0)return;let y=n[x.id];for(let L in y){let F=y[L];for(let U in F)h(F[U].object),delete F[U];delete y[L]}delete n[x.id]}function S(x){for(let y in n){let L=n[y];if(L[x.id]===void 0)continue;let F=L[x.id];for(let U in F)h(F[U].object),delete F[U];delete L[x.id]}}function w(){B(),a=!0,r!==i&&(r=i,l(r.object))}function B(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:w,resetDefaultState:B,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:S,initAttributes:g,enableAttribute:m,disableUnusedAttributes:_}}function __(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let A=0;A<u;A++)f+=h[A];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let A=0;A<l.length;A++)a(l[A],h[A],d[A]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let A=0;for(let g=0;g<u;g++)A+=h[g];for(let g=0;g<d.length;g++)t.update(A,n,d[g])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function x_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let S=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(S){return!(S!==Tt&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){let w=S===bt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==Rt&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Vt&&!w)}function c(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){let S=e.get("EXT_clip_control");S.clipControlEXT(S.LOWER_LEFT_EXT,S.ZERO_TO_ONE_EXT)}let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=A>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:A,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:E,vertexTextures:I,maxSamples:C}}function b_(s){let e=this,t=null,n=0,i=!1,r=!1,a=new gi,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let A=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||A===null||A.length===0||r&&!m)r?h(null):l();else{let _=r?0:n,b=_*4,E=p.clippingState||null;c.value=E,E=h(A,d,b,f);for(let I=0;I!==b;++I)E[I]=t[I];p.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,A){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=c.value,A!==!0||m===null){let p=f+g*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,E=f;b!==g;++b,E+=4)a.copy(u[b]).applyMatrix4(_,o),a.normal.toArray(m,E),m[E+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function E_(s){let e=new WeakMap;function t(a,o){return o===qr?a.mapping=ps:o===El&&(a.mapping=js),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===qr||o===El)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Wl(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Hi=class extends Eo{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},zs=4,Sf=[.125,.215,.35,.446,.526,.582],fs=20,Zc=new Hi,If=new ee,$c=null,el=0,tl=0,nl=!1,ls=(1+Math.sqrt(5))/2,Os=1/ls,Tf=[new T(-ls,Os,0),new T(ls,Os,0),new T(-Os,0,ls),new T(Os,0,ls),new T(0,ls,-Os),new T(0,ls,Os),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],or=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){$c=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Df(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($c,el,tl),this._renderer.xr.enabled=nl,e.scissorTest=!1,ja(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ps||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$c=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mt,minFilter:mt,generateMipmaps:!1,type:bt,format:Tt,colorSpace:Et,depthBuffer:!1},i=Rf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=y_(r)),this._blurMaterial=v_(r,e,t)}return i}_compileMaterial(e){let t=new Re(this._lodPlanes[0],e);this._renderer.compile(t,Zc)}_sceneToCubeUV(e,t,n,i){let o=new qt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(If),h.toneMapping=ni,h.autoClear=!1;let f=new _n({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),A=new Re(new Be,f),g=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,g=!0):(f.color.copy(If),g=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):_===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let b=this._cubeSize;ja(i,_*b,p>2?b:0,b,b),h.setRenderTarget(i),g&&h.render(A,o),h.render(e,o)}A.geometry.dispose(),A.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===ps||e.mapping===js;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Df()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bf());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new Re(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;ja(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Zc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Tf[(i-r-1)%Tf.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Re(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,A=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*fs-1),g=r/A,m=isFinite(r)?1+Math.floor(h*g):fs;m>fs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fs}`);let p=[],_=0;for(let S=0;S<fs;++S){let w=S/g,B=Math.exp(-w*w/2);p.push(B),S===0?_+=B:S<m&&(_+=2*B)}for(let S=0;S<p.length;S++)p[S]=p[S]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:b}=this;d.dTheta.value=A,d.mipInt.value=b-n;let E=this._sizeLods[i],I=3*E*(i>b-zs?i-b+zs:0),C=4*(this._cubeSize-E);ja(t,I,C,3*E,2*E),c.setRenderTarget(t),c.render(u,Zc)}};function y_(s){let e=[],t=[],n=[],i=s,r=s-zs+1+Sf.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let c=1/o;a>s-zs?c=Sf[a-s+zs-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,A=6,g=3,m=2,p=1,_=new Float32Array(g*A*f),b=new Float32Array(m*A*f),E=new Float32Array(p*A*f);for(let C=0;C<f;C++){let S=C%3*2/3-1,w=C>2?0:-1,B=[S,w,0,S+2/3,w,0,S+2/3,w+1,0,S,w,0,S+2/3,w+1,0,S,w+1,0];_.set(B,g*A*C),b.set(d,m*A*C);let x=[C,C,C,C,C,C];E.set(x,p*A*C)}let I=new Bt;I.setAttribute("position",new Pt(_,g)),I.setAttribute("uv",new Pt(b,m)),I.setAttribute("faceIndex",new Pt(E,p)),e.push(I),i>zs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Rf(s,e,t){let n=new en(s,e,t);return n.texture.mapping=Jo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ja(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function v_(s,e,t){let n=new Float32Array(fs),i=new T(0,1,0);return new St({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Bf(){return new St({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Df(){return new St({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Ph(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function M_(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===qr||c===El,h=c===ps||c===js;if(l||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new or(s)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new or(s)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function C_(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&lo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function w_(s,e,t,n){let i={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let A in d.attributes)e.remove(d.attributes[A]);for(let A in d.morphAttributes){let g=d.morphAttributes[A];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}d.removeEventListener("dispose",a),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let A in d)e.update(d[A],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let A in f){let g=f[A];for(let m=0,p=g.length;m<p;m++)e.update(g[m],s.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,A=u.attributes.position,g=0;if(f!==null){let _=f.array;g=f.version;for(let b=0,E=_.length;b<E;b+=3){let I=_[b+0],C=_[b+1],S=_[b+2];d.push(I,C,C,S,S,I)}}else if(A!==void 0){let _=A.array;g=A.version;for(let b=0,E=_.length/3-1;b<E;b+=3){let I=b+0,C=b+1,S=b+2;d.push(I,C,C,S,S,I)}}else return;let m=new(Bd(d)?bo:xo)(d,1);m.version=g;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function S_(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,A){A!==0&&(s.drawElementsInstanced(n,f,r,d*a,A),t.update(f,n,A))}function h(d,f,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,A);let m=0;for(let p=0;p<A;p++)m+=f[p];t.update(m,n,1)}function u(d,f,A,g){if(A===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,A);let p=0;for(let _=0;_<A;_++)p+=f[_];for(let _=0;_<g.length;_++)t.update(p,n,g[_])}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function I_(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function T_(s,e,t){let n=new WeakMap,i=new Ye;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let B=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",B)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,A=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],b=0;f===!0&&(b=1),A===!0&&(b=2),g===!0&&(b=3);let E=o.attributes.position.count*b,I=1;E>e.maxTextureSize&&(I=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let C=new Float32Array(E*I*4*u),S=new go(C,E,I,u);S.type=Vt,S.needsUpdate=!0;let w=b*4;for(let x=0;x<u;x++){let y=m[x],L=p[x],F=_[x],U=E*I*4*x;for(let W=0;W<y.count;W++){let k=W*w;f===!0&&(i.fromBufferAttribute(y,W),C[U+k+0]=i.x,C[U+k+1]=i.y,C[U+k+2]=i.z,C[U+k+3]=0),A===!0&&(i.fromBufferAttribute(L,W),C[U+k+4]=i.x,C[U+k+5]=i.y,C[U+k+6]=i.z,C[U+k+7]=0),g===!0&&(i.fromBufferAttribute(F,W),C[U+k+8]=i.x,C[U+k+9]=i.y,C[U+k+10]=i.z,C[U+k+11]=F.itemSize===4?i.w:1)}}d={count:u,texture:S,size:new ne(E,I)},n.set(o,d),o.addEventListener("dispose",B)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let g=0;g<l.length;g++)f+=l[g];let A=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",A),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function R_(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var vo=class extends Ot{constructor(e,t,n,i,r,a,o,c,l,h=Vs){if(h!==Vs&&h!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Vs&&(n=As),n===void 0&&h===$s&&(n=Zs),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:rn,this.minFilter=c!==void 0?c:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Fd=new Ot,Lf=new vo(1,1),Ud=new go,Nd=new na,Od=new yo,Pf=[],Ff=[],Uf=new Float32Array(16),Nf=new Float32Array(9),Of=new Float32Array(4);function gr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Pf[i];if(r===void 0&&(r=new Float32Array(i),Pf[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Xt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Yt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function $o(s,e){let t=Ff[e];t===void 0&&(t=new Int32Array(e),Ff[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function B_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function D_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;s.uniform2fv(this.addr,e),Yt(t,e)}}function L_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;s.uniform3fv(this.addr,e),Yt(t,e)}}function P_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;s.uniform4fv(this.addr,e),Yt(t,e)}}function F_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,n))return;Of.set(n),s.uniformMatrix2fv(this.addr,!1,Of),Yt(t,n)}}function U_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,n))return;Nf.set(n),s.uniformMatrix3fv(this.addr,!1,Nf),Yt(t,n)}}function N_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,n))return;Uf.set(n),s.uniformMatrix4fv(this.addr,!1,Uf),Yt(t,n)}}function O_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function k_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;s.uniform2iv(this.addr,e),Yt(t,e)}}function Q_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;s.uniform3iv(this.addr,e),Yt(t,e)}}function G_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;s.uniform4iv(this.addr,e),Yt(t,e)}}function H_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function z_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;s.uniform2uiv(this.addr,e),Yt(t,e)}}function V_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;s.uniform3uiv(this.addr,e),Yt(t,e)}}function W_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;s.uniform4uiv(this.addr,e),Yt(t,e)}}function K_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Lf.compareFunction=Rd,r=Lf):r=Fd,t.setTexture2D(e||r,i)}function q_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Nd,i)}function X_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Od,i)}function Y_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ud,i)}function J_(s){switch(s){case 5126:return B_;case 35664:return D_;case 35665:return L_;case 35666:return P_;case 35674:return F_;case 35675:return U_;case 35676:return N_;case 5124:case 35670:return O_;case 35667:case 35671:return k_;case 35668:case 35672:return Q_;case 35669:case 35673:return G_;case 5125:return H_;case 36294:return z_;case 36295:return V_;case 36296:return W_;case 35678:case 36198:case 36298:case 36306:case 35682:return K_;case 35679:case 36299:case 36307:return q_;case 35680:case 36300:case 36308:case 36293:return X_;case 36289:case 36303:case 36311:case 36292:return Y_}}function j_(s,e){s.uniform1fv(this.addr,e)}function Z_(s,e){let t=gr(e,this.size,2);s.uniform2fv(this.addr,t)}function $_(s,e){let t=gr(e,this.size,3);s.uniform3fv(this.addr,t)}function ex(s,e){let t=gr(e,this.size,4);s.uniform4fv(this.addr,t)}function tx(s,e){let t=gr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function nx(s,e){let t=gr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function ix(s,e){let t=gr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function sx(s,e){s.uniform1iv(this.addr,e)}function rx(s,e){s.uniform2iv(this.addr,e)}function ax(s,e){s.uniform3iv(this.addr,e)}function ox(s,e){s.uniform4iv(this.addr,e)}function cx(s,e){s.uniform1uiv(this.addr,e)}function lx(s,e){s.uniform2uiv(this.addr,e)}function hx(s,e){s.uniform3uiv(this.addr,e)}function ux(s,e){s.uniform4uiv(this.addr,e)}function fx(s,e,t){let n=this.cache,i=e.length,r=$o(t,i);Xt(n,r)||(s.uniform1iv(this.addr,r),Yt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Fd,r[a])}function dx(s,e,t){let n=this.cache,i=e.length,r=$o(t,i);Xt(n,r)||(s.uniform1iv(this.addr,r),Yt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Nd,r[a])}function px(s,e,t){let n=this.cache,i=e.length,r=$o(t,i);Xt(n,r)||(s.uniform1iv(this.addr,r),Yt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Od,r[a])}function Ax(s,e,t){let n=this.cache,i=e.length,r=$o(t,i);Xt(n,r)||(s.uniform1iv(this.addr,r),Yt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Ud,r[a])}function mx(s){switch(s){case 5126:return j_;case 35664:return Z_;case 35665:return $_;case 35666:return ex;case 35674:return tx;case 35675:return nx;case 35676:return ix;case 5124:case 35670:return sx;case 35667:case 35671:return rx;case 35668:case 35672:return ax;case 35669:case 35673:return ox;case 5125:return cx;case 36294:return lx;case 36295:return hx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return fx;case 35679:case 36299:case 36307:return dx;case 35680:case 36300:case 36308:case 36293:return px;case 36289:case 36303:case 36311:case 36292:return Ax}}var Kl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=J_(t.type)}},ql=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mx(t.type)}},Xl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},il=/(\w+)(\])?(\[|\.)?/g;function kf(s,e){s.seq.push(e),s.map[e.id]=e}function gx(s,e,t){let n=s.name,i=n.length;for(il.lastIndex=0;;){let r=il.exec(n),a=il.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){kf(t,l===void 0?new Kl(o,s,e):new ql(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Xl(o),kf(t,u)),t=u}}}var Ys=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);gx(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Qf(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var _x=37297,xx=0;function bx(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Ex(s){let e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(s),n;switch(e===t?n="":e===po&&t===fo?n="LinearDisplayP3ToLinearSRGB":e===fo&&t===po&&(n="LinearSRGBToLinearDisplayP3"),s){case Et:case Ar:return[n,"LinearTransferOETF"];case _t:case pa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Gf(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+bx(s.getShaderSource(e),a)}else return i}function yx(s,e){let t=Ex(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function vx(s,e){let t;switch(e){case wA:t="Linear";break;case SA:t="Reinhard";break;case IA:t="Cineon";break;case TA:t="ACESFilmic";break;case BA:t="AgX";break;case DA:t="Neutral";break;case RA:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Za=new T;function Mx(){et.getLuminanceCoefficients(Za);let s=Za.x.toFixed(4),e=Za.y.toFixed(4),t=Za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qr).join(`
`)}function wx(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Sx(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Qr(s){return s!==""}function Hf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ix=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yl(s){return s.replace(Ix,Rx)}var Tx=new Map;function Rx(s,e){let t=Ve[e];if(t===void 0){let n=Tx.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Yl(t)}var Bx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vf(s){return s.replace(Bx,Dx)}function Dx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Wf(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Lx(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===gd?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Mh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function Px(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ps:case js:e="ENVMAP_TYPE_CUBE";break;case Jo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fx(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===js&&(e="ENVMAP_MODE_REFRACTION"),e}function Ux(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case _d:e="ENVMAP_BLENDING_MULTIPLY";break;case MA:e="ENVMAP_BLENDING_MIX";break;case CA:e="ENVMAP_BLENDING_ADD";break}return e}function Nx(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ox(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Lx(t),l=Px(t),h=Fx(t),u=Ux(t),d=Nx(t),f=Cx(t),A=wx(r),g=i.createProgram(),m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(Qr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(Qr).join(`
`),p.length>0&&(p+=`
`)):(m=[Wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),p=[Wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?Ve.tonemapping_pars_fragment:"",t.toneMapping!==ni?vx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,yx("linearToOutputTexel",t.outputColorSpace),Mx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qr).join(`
`)),a=Yl(a),a=Hf(a,t),a=zf(a,t),o=Yl(o),o=Hf(o,t),o=zf(o,t),a=Vf(a),o=Vf(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===cf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=_+m+a,E=_+p+o,I=Qf(i,i.VERTEX_SHADER,b),C=Qf(i,i.FRAGMENT_SHADER,E);i.attachShader(g,I),i.attachShader(g,C),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function S(y){if(s.debug.checkShaderErrors){let L=i.getProgramInfoLog(g).trim(),F=i.getShaderInfoLog(I).trim(),U=i.getShaderInfoLog(C).trim(),W=!0,k=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,I,C);else{let q=Gf(i,I,"vertex"),z=Gf(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+L+`
`+q+`
`+z)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(F===""||U==="")&&(k=!1);k&&(y.diagnostics={runnable:W,programLog:L,vertexShader:{log:F,prefix:m},fragmentShader:{log:U,prefix:p}})}i.deleteShader(I),i.deleteShader(C),w=new Ys(i,g),B=Sx(i,g)}let w;this.getUniforms=function(){return w===void 0&&S(this),w};let B;this.getAttributes=function(){return B===void 0&&S(this),B};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(g,_x)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=I,this.fragmentShader=C,this}var kx=0,Jl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new jl(e),t.set(e,n)),n}},jl=class{constructor(e){this.id=kx++,this.code=e,this.usedTimes=0}};function Qx(s,e,t,n,i,r,a){let o=new _o,c=new Jl,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.reverseDepthBuffer,f=i.vertexTextures,A=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,y,L,F,U){let W=F.fog,k=U.geometry,q=x.isMeshStandardMaterial?F.environment:null,z=(x.isMeshStandardMaterial?t:e).get(x.envMap||q),ce=z&&z.mapping===Jo?z.image.height:null,ae=g[x.type];x.precision!==null&&(A=i.getMaxPrecision(x.precision),A!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",A,"instead."));let de=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ke=de!==void 0?de.length:0,ze=0;k.morphAttributes.position!==void 0&&(ze=1),k.morphAttributes.normal!==void 0&&(ze=2),k.morphAttributes.color!==void 0&&(ze=3);let X,ie,ye,ge;if(ae){let mn=ei[ae];X=mn.vertexShader,ie=mn.fragmentShader}else X=x.vertexShader,ie=x.fragmentShader,c.update(x),ye=c.getVertexShaderID(x),ge=c.getFragmentShaderID(x);let Ge=s.getRenderTarget(),Pe=U.isInstancedMesh===!0,je=U.isBatchedMesh===!0,ut=!!x.map,Ze=!!x.matcap,D=!!z,xn=!!x.aoMap,qe=!!x.lightMap,nt=!!x.bumpMap,Ue=!!x.normalMap,vt=!!x.displacementMap,Qe=!!x.emissiveMap,R=!!x.metalnessMap,v=!!x.roughnessMap,Q=x.anisotropy>0,J=x.clearcoat>0,$=x.dispersion>0,Y=x.iridescence>0,we=x.sheen>0,he=x.transmission>0,_e=Q&&!!x.anisotropyMap,it=J&&!!x.clearcoatMap,re=J&&!!x.clearcoatNormalMap,xe=J&&!!x.clearcoatRoughnessMap,Ne=Y&&!!x.iridescenceMap,Oe=Y&&!!x.iridescenceThicknessMap,be=we&&!!x.sheenColorMap,Xe=we&&!!x.sheenRoughnessMap,He=!!x.specularMap,gt=!!x.specularColorMap,P=!!x.specularIntensityMap,pe=he&&!!x.transmissionMap,K=he&&!!x.thicknessMap,Z=!!x.gradientMap,ue=!!x.alphaMap,Ae=x.alphaTest>0,$e=!!x.alphaHash,Gt=!!x.extensions,An=ni;x.toneMapped&&(Ge===null||Ge.isXRRenderTarget===!0)&&(An=s.toneMapping);let st={shaderID:ae,shaderType:x.type,shaderName:x.name,vertexShader:X,fragmentShader:ie,defines:x.defines,customVertexShaderID:ye,customFragmentShaderID:ge,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:A,batching:je,batchingColor:je&&U._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&U.instanceColor!==null,instancingMorph:Pe&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Ge===null?s.outputColorSpace:Ge.isXRRenderTarget===!0?Ge.texture.colorSpace:Et,alphaToCoverage:!!x.alphaToCoverage,map:ut,matcap:Ze,envMap:D,envMapMode:D&&z.mapping,envMapCubeUVHeight:ce,aoMap:xn,lightMap:qe,bumpMap:nt,normalMap:Ue,displacementMap:f&&vt,emissiveMap:Qe,normalMapObjectSpace:Ue&&x.normalMapType===QA,normalMapTangentSpace:Ue&&x.normalMapType===Td,metalnessMap:R,roughnessMap:v,anisotropy:Q,anisotropyMap:_e,clearcoat:J,clearcoatMap:it,clearcoatNormalMap:re,clearcoatRoughnessMap:xe,dispersion:$,iridescence:Y,iridescenceMap:Ne,iridescenceThicknessMap:Oe,sheen:we,sheenColorMap:be,sheenRoughnessMap:Xe,specularMap:He,specularColorMap:gt,specularIntensityMap:P,transmission:he,transmissionMap:pe,thicknessMap:K,gradientMap:Z,opaque:x.transparent===!1&&x.blending===Gi&&x.alphaToCoverage===!1,alphaMap:ue,alphaTest:Ae,alphaHash:$e,combine:x.combine,mapUv:ut&&m(x.map.channel),aoMapUv:xn&&m(x.aoMap.channel),lightMapUv:qe&&m(x.lightMap.channel),bumpMapUv:nt&&m(x.bumpMap.channel),normalMapUv:Ue&&m(x.normalMap.channel),displacementMapUv:vt&&m(x.displacementMap.channel),emissiveMapUv:Qe&&m(x.emissiveMap.channel),metalnessMapUv:R&&m(x.metalnessMap.channel),roughnessMapUv:v&&m(x.roughnessMap.channel),anisotropyMapUv:_e&&m(x.anisotropyMap.channel),clearcoatMapUv:it&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:be&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&m(x.sheenRoughnessMap.channel),specularMapUv:He&&m(x.specularMap.channel),specularColorMapUv:gt&&m(x.specularColorMap.channel),specularIntensityMapUv:P&&m(x.specularIntensityMap.channel),transmissionMapUv:pe&&m(x.transmissionMap.channel),thicknessMapUv:K&&m(x.thicknessMap.channel),alphaMapUv:ue&&m(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ue||Q),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!k.attributes.uv&&(ut||ue),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:U.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ke,morphTextureStride:ze,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:An,decodeVideoTexture:ut&&x.map.isVideoTexture===!0&&et.getTransfer(x.map.colorSpace)===Ct,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===zn,flipSided:x.side===an,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Gt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&x.extensions.multiDraw===!0||je)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return st.vertexUv1s=l.has(1),st.vertexUv2s=l.has(2),st.vertexUv3s=l.has(3),l.clear(),st}function _(x){let y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(let L in x.defines)y.push(L),y.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(b(y,x),E(y,x),y.push(s.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function b(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function E(x,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.alphaToCoverage&&o.enable(20),x.push(o.mask)}function I(x){let y=g[x.type],L;if(y){let F=ei[y];L=mr.clone(F.uniforms)}else L=x.uniforms;return L}function C(x,y){let L;for(let F=0,U=h.length;F<U;F++){let W=h[F];if(W.cacheKey===y){L=W,++L.usedTimes;break}}return L===void 0&&(L=new Ox(s,y,x,r),h.push(L)),L}function S(x){if(--x.usedTimes===0){let y=h.indexOf(x);h[y]=h[h.length-1],h.pop(),x.destroy()}}function w(x){c.remove(x)}function B(){c.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:I,acquireProgram:C,releaseProgram:S,releaseShaderCache:w,programs:h,dispose:B}}function Gx(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Hx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Kf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function qf(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,A,g,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:A,renderOrder:u.renderOrder,z:g,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=A,p.renderOrder=u.renderOrder,p.z=g,p.group=m),e++,p}function o(u,d,f,A,g,m){let p=a(u,d,f,A,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,A,g,m){let p=a(u,d,f,A,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||Hx),n.length>1&&n.sort(d||Kf),i.length>1&&i.sort(d||Kf)}function h(){for(let u=e,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function zx(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new qf,s.set(n,[a])):i>=r.length?(a=new qf,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Vx(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new ee};break;case"SpotLight":t={position:new T,direction:new T,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":t={color:new ee,position:new T,halfWidth:new T,halfHeight:new T};break}return s[e.id]=t,t}}}function Wx(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Kx=0;function qx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Xx(s){let e=new Vx,t=Wx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new T);let i=new T,r=new Ce,a=new Ce;function o(l){let h=0,u=0,d=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let f=0,A=0,g=0,m=0,p=0,_=0,b=0,E=0,I=0,C=0,S=0;l.sort(qx);for(let B=0,x=l.length;B<x;B++){let y=l[B],L=y.color,F=y.intensity,U=y.distance,W=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)h+=L.r*F,u+=L.g*F,d+=L.b*F;else if(y.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(y.sh.coefficients[k],F);S++}else if(y.isDirectionalLight){let k=e.get(y);if(k.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let q=y.shadow,z=t.get(y);z.shadowIntensity=q.intensity,z.shadowBias=q.bias,z.shadowNormalBias=q.normalBias,z.shadowRadius=q.radius,z.shadowMapSize=q.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=y.shadow.matrix,_++}n.directional[f]=k,f++}else if(y.isSpotLight){let k=e.get(y);k.position.setFromMatrixPosition(y.matrixWorld),k.color.copy(L).multiplyScalar(F),k.distance=U,k.coneCos=Math.cos(y.angle),k.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),k.decay=y.decay,n.spot[g]=k;let q=y.shadow;if(y.map&&(n.spotLightMap[I]=y.map,I++,q.updateMatrices(y),y.castShadow&&C++),n.spotLightMatrix[g]=q.matrix,y.castShadow){let z=t.get(y);z.shadowIntensity=q.intensity,z.shadowBias=q.bias,z.shadowNormalBias=q.normalBias,z.shadowRadius=q.radius,z.shadowMapSize=q.mapSize,n.spotShadow[g]=z,n.spotShadowMap[g]=W,E++}g++}else if(y.isRectAreaLight){let k=e.get(y);k.color.copy(L).multiplyScalar(F),k.halfWidth.set(y.width*.5,0,0),k.halfHeight.set(0,y.height*.5,0),n.rectArea[m]=k,m++}else if(y.isPointLight){let k=e.get(y);if(k.color.copy(y.color).multiplyScalar(y.intensity),k.distance=y.distance,k.decay=y.decay,y.castShadow){let q=y.shadow,z=t.get(y);z.shadowIntensity=q.intensity,z.shadowBias=q.bias,z.shadowNormalBias=q.normalBias,z.shadowRadius=q.radius,z.shadowMapSize=q.mapSize,z.shadowCameraNear=q.camera.near,z.shadowCameraFar=q.camera.far,n.pointShadow[A]=z,n.pointShadowMap[A]=W,n.pointShadowMatrix[A]=y.shadow.matrix,b++}n.point[A]=k,A++}else if(y.isHemisphereLight){let k=e.get(y);k.skyColor.copy(y.color).multiplyScalar(F),k.groundColor.copy(y.groundColor).multiplyScalar(F),n.hemi[p]=k,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let w=n.hash;(w.directionalLength!==f||w.pointLength!==A||w.spotLength!==g||w.rectAreaLength!==m||w.hemiLength!==p||w.numDirectionalShadows!==_||w.numPointShadows!==b||w.numSpotShadows!==E||w.numSpotMaps!==I||w.numLightProbes!==S)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=A,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=E+I-C,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=S,w.directionalLength=f,w.pointLength=A,w.spotLength=g,w.rectAreaLength=m,w.hemiLength=p,w.numDirectionalShadows=_,w.numPointShadows=b,w.numSpotShadows=E,w.numSpotMaps=I,w.numLightProbes=S,n.version=Kx++)}function c(l,h){let u=0,d=0,f=0,A=0,g=0,m=h.matrixWorldInverse;for(let p=0,_=l.length;p<_;p++){let b=l[p];if(b.isDirectionalLight){let E=n.directional[u];E.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),u++}else if(b.isSpotLight){let E=n.spot[f];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let E=n.rectArea[A];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),A++}else if(b.isPointLight){let E=n.point[d];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let E=n.hemi[g];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function Xf(s){let e=new Xx(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Yx(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new Xf(s),e.set(i,[o])):r>=a.length?(o=new Xf(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Zl=class extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=OA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},$l=class extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Jx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Zx(s,e,t){let n=new ia,i=new ne,r=new ne,a=new Ye,o=new Zl({depthPacking:kA}),c=new $l,l={},h=t.maxTextureSize,u={[ii]:an,[an]:ii,[zn]:zn},d=new St({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:Jx,fragmentShader:jx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let A=new Bt;A.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Re(A,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gd;let p=this.type;this.render=function(C,S,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let B=s.getRenderTarget(),x=s.getActiveCubeFace(),y=s.getActiveMipmapLevel(),L=s.state;L.setBlending(ti),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let F=p!==mi&&this.type===mi,U=p===mi&&this.type!==mi;for(let W=0,k=C.length;W<k;W++){let q=C[W],z=q.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let ce=z.getFrameExtents();if(i.multiply(ce),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ce.x),i.x=r.x*ce.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ce.y),i.y=r.y*ce.y,z.mapSize.y=r.y)),z.map===null||F===!0||U===!0){let de=this.type!==mi?{minFilter:rn,magFilter:rn}:{};z.map!==null&&z.map.dispose(),z.map=new en(i.x,i.y,de),z.map.texture.name=q.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();let ae=z.getViewportCount();for(let de=0;de<ae;de++){let ke=z.getViewport(de);a.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),L.viewport(a),z.updateMatrices(q,de),n=z.getFrustum(),E(S,w,z.camera,q,this.type)}z.isPointLightShadow!==!0&&this.type===mi&&_(z,w),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(B,x,y)};function _(C,S){let w=e.update(g);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new en(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(S,null,w,d,g,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(S,null,w,f,g,null)}function b(C,S,w,B){let x=null,y=w.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(y!==void 0)x=y;else if(x=w.isPointLight===!0?c:o,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let L=x.uuid,F=S.uuid,U=l[L];U===void 0&&(U={},l[L]=U);let W=U[F];W===void 0&&(W=x.clone(),U[F]=W,S.addEventListener("dispose",I)),x=W}if(x.visible=S.visible,x.wireframe=S.wireframe,B===mi?x.side=S.shadowSide!==null?S.shadowSide:S.side:x.side=S.shadowSide!==null?S.shadowSide:u[S.side],x.alphaMap=S.alphaMap,x.alphaTest=S.alphaTest,x.map=S.map,x.clipShadows=S.clipShadows,x.clippingPlanes=S.clippingPlanes,x.clipIntersection=S.clipIntersection,x.displacementMap=S.displacementMap,x.displacementScale=S.displacementScale,x.displacementBias=S.displacementBias,x.wireframeLinewidth=S.wireframeLinewidth,x.linewidth=S.linewidth,w.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let L=s.properties.get(x);L.light=w}return x}function E(C,S,w,B,x){if(C.visible===!1)return;if(C.layers.test(S.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===mi)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,C.matrixWorld);let F=e.update(C),U=C.material;if(Array.isArray(U)){let W=F.groups;for(let k=0,q=W.length;k<q;k++){let z=W[k],ce=U[z.materialIndex];if(ce&&ce.visible){let ae=b(C,ce,B,x);C.onBeforeShadow(s,C,S,w,F,ae,z),s.renderBufferDirect(w,null,F,ae,C,z),C.onAfterShadow(s,C,S,w,F,ae,z)}}}else if(U.visible){let W=b(C,U,B,x);C.onBeforeShadow(s,C,S,w,F,W,null),s.renderBufferDirect(w,null,F,W,C,null),C.onAfterShadow(s,C,S,w,F,W,null)}}let L=C.children;for(let F=0,U=L.length;F<U;F++)E(L[F],S,w,B,x)}function I(C){C.target.removeEventListener("dispose",I);for(let w in l){let B=l[w],x=C.target.uuid;x in B&&(B[x].dispose(),delete B[x])}}}var $x={[pl]:Al,[ml]:xl,[gl]:bl,[Js]:_l,[Al]:pl,[xl]:ml,[bl]:gl,[_l]:Js};function eb(s){function e(){let P=!1,pe=new Ye,K=null,Z=new Ye(0,0,0,0);return{setMask:function(ue){K!==ue&&!P&&(s.colorMask(ue,ue,ue,ue),K=ue)},setLocked:function(ue){P=ue},setClear:function(ue,Ae,$e,Gt,An){An===!0&&(ue*=Gt,Ae*=Gt,$e*=Gt),pe.set(ue,Ae,$e,Gt),Z.equals(pe)===!1&&(s.clearColor(ue,Ae,$e,Gt),Z.copy(pe))},reset:function(){P=!1,K=null,Z.set(-1,0,0,0)}}}function t(){let P=!1,pe=!1,K=null,Z=null,ue=null;return{setReversed:function(Ae){pe=Ae},setTest:function(Ae){Ae?ye(s.DEPTH_TEST):ge(s.DEPTH_TEST)},setMask:function(Ae){K!==Ae&&!P&&(s.depthMask(Ae),K=Ae)},setFunc:function(Ae){if(pe&&(Ae=$x[Ae]),Z!==Ae){switch(Ae){case pl:s.depthFunc(s.NEVER);break;case Al:s.depthFunc(s.ALWAYS);break;case ml:s.depthFunc(s.LESS);break;case Js:s.depthFunc(s.LEQUAL);break;case gl:s.depthFunc(s.EQUAL);break;case _l:s.depthFunc(s.GEQUAL);break;case xl:s.depthFunc(s.GREATER);break;case bl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Z=Ae}},setLocked:function(Ae){P=Ae},setClear:function(Ae){ue!==Ae&&(s.clearDepth(Ae),ue=Ae)},reset:function(){P=!1,K=null,Z=null,ue=null}}}function n(){let P=!1,pe=null,K=null,Z=null,ue=null,Ae=null,$e=null,Gt=null,An=null;return{setTest:function(st){P||(st?ye(s.STENCIL_TEST):ge(s.STENCIL_TEST))},setMask:function(st){pe!==st&&!P&&(s.stencilMask(st),pe=st)},setFunc:function(st,mn,li){(K!==st||Z!==mn||ue!==li)&&(s.stencilFunc(st,mn,li),K=st,Z=mn,ue=li)},setOp:function(st,mn,li){(Ae!==st||$e!==mn||Gt!==li)&&(s.stencilOp(st,mn,li),Ae=st,$e=mn,Gt=li)},setLocked:function(st){P=st},setClear:function(st){An!==st&&(s.clearStencil(st),An=st)},reset:function(){P=!1,pe=null,K=null,Z=null,ue=null,Ae=null,$e=null,Gt=null,An=null}}}let i=new e,r=new t,a=new n,o=new WeakMap,c=new WeakMap,l={},h={},u=new WeakMap,d=[],f=null,A=!1,g=null,m=null,p=null,_=null,b=null,E=null,I=null,C=new ee(0,0,0),S=0,w=!1,B=null,x=null,y=null,L=null,F=null,U=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,k=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=k>=1):q.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=k>=2);let z=null,ce={},ae=s.getParameter(s.SCISSOR_BOX),de=s.getParameter(s.VIEWPORT),ke=new Ye().fromArray(ae),ze=new Ye().fromArray(de);function X(P,pe,K,Z){let ue=new Uint8Array(4),Ae=s.createTexture();s.bindTexture(P,Ae),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $e=0;$e<K;$e++)P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY?s.texImage3D(pe,0,s.RGBA,1,1,Z,0,s.RGBA,s.UNSIGNED_BYTE,ue):s.texImage2D(pe+$e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ue);return Ae}let ie={};ie[s.TEXTURE_2D]=X(s.TEXTURE_2D,s.TEXTURE_2D,1),ie[s.TEXTURE_CUBE_MAP]=X(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[s.TEXTURE_2D_ARRAY]=X(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ie[s.TEXTURE_3D]=X(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ye(s.DEPTH_TEST),r.setFunc(Js),qe(!1),nt(nf),ye(s.CULL_FACE),D(ti);function ye(P){l[P]!==!0&&(s.enable(P),l[P]=!0)}function ge(P){l[P]!==!1&&(s.disable(P),l[P]=!1)}function Ge(P,pe){return h[P]!==pe?(s.bindFramebuffer(P,pe),h[P]=pe,P===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=pe),P===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=pe),!0):!1}function Pe(P,pe){let K=d,Z=!1;if(P){K=u.get(pe),K===void 0&&(K=[],u.set(pe,K));let ue=P.textures;if(K.length!==ue.length||K[0]!==s.COLOR_ATTACHMENT0){for(let Ae=0,$e=ue.length;Ae<$e;Ae++)K[Ae]=s.COLOR_ATTACHMENT0+Ae;K.length=ue.length,Z=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,Z=!0);Z&&s.drawBuffers(K)}function je(P){return f!==P?(s.useProgram(P),f=P,!0):!1}let ut={[hs]:s.FUNC_ADD,[oA]:s.FUNC_SUBTRACT,[cA]:s.FUNC_REVERSE_SUBTRACT};ut[lA]=s.MIN,ut[hA]=s.MAX;let Ze={[uA]:s.ZERO,[fA]:s.ONE,[dA]:s.SRC_COLOR,[fl]:s.SRC_ALPHA,[xA]:s.SRC_ALPHA_SATURATE,[gA]:s.DST_COLOR,[AA]:s.DST_ALPHA,[pA]:s.ONE_MINUS_SRC_COLOR,[dl]:s.ONE_MINUS_SRC_ALPHA,[_A]:s.ONE_MINUS_DST_COLOR,[mA]:s.ONE_MINUS_DST_ALPHA,[bA]:s.CONSTANT_COLOR,[EA]:s.ONE_MINUS_CONSTANT_COLOR,[yA]:s.CONSTANT_ALPHA,[vA]:s.ONE_MINUS_CONSTANT_ALPHA};function D(P,pe,K,Z,ue,Ae,$e,Gt,An,st){if(P===ti){A===!0&&(ge(s.BLEND),A=!1);return}if(A===!1&&(ye(s.BLEND),A=!0),P!==aA){if(P!==g||st!==w){if((m!==hs||b!==hs)&&(s.blendEquation(s.FUNC_ADD),m=hs,b=hs),st)switch(P){case Gi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ds:s.blendFunc(s.ONE,s.ONE);break;case sf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case rf:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Gi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ds:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case sf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case rf:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}p=null,_=null,E=null,I=null,C.set(0,0,0),S=0,g=P,w=st}return}ue=ue||pe,Ae=Ae||K,$e=$e||Z,(pe!==m||ue!==b)&&(s.blendEquationSeparate(ut[pe],ut[ue]),m=pe,b=ue),(K!==p||Z!==_||Ae!==E||$e!==I)&&(s.blendFuncSeparate(Ze[K],Ze[Z],Ze[Ae],Ze[$e]),p=K,_=Z,E=Ae,I=$e),(Gt.equals(C)===!1||An!==S)&&(s.blendColor(Gt.r,Gt.g,Gt.b,An),C.copy(Gt),S=An),g=P,w=!1}function xn(P,pe){P.side===zn?ge(s.CULL_FACE):ye(s.CULL_FACE);let K=P.side===an;pe&&(K=!K),qe(K),P.blending===Gi&&P.transparent===!1?D(ti):D(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),r.setFunc(P.depthFunc),r.setTest(P.depthTest),r.setMask(P.depthWrite),i.setMask(P.colorWrite);let Z=P.stencilWrite;a.setTest(Z),Z&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),vt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ye(s.SAMPLE_ALPHA_TO_COVERAGE):ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function qe(P){B!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),B=P)}function nt(P){P!==sA?(ye(s.CULL_FACE),P!==x&&(P===nf?s.cullFace(s.BACK):P===rA?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ge(s.CULL_FACE),x=P}function Ue(P){P!==y&&(W&&s.lineWidth(P),y=P)}function vt(P,pe,K){P?(ye(s.POLYGON_OFFSET_FILL),(L!==pe||F!==K)&&(s.polygonOffset(pe,K),L=pe,F=K)):ge(s.POLYGON_OFFSET_FILL)}function Qe(P){P?ye(s.SCISSOR_TEST):ge(s.SCISSOR_TEST)}function R(P){P===void 0&&(P=s.TEXTURE0+U-1),z!==P&&(s.activeTexture(P),z=P)}function v(P,pe,K){K===void 0&&(z===null?K=s.TEXTURE0+U-1:K=z);let Z=ce[K];Z===void 0&&(Z={type:void 0,texture:void 0},ce[K]=Z),(Z.type!==P||Z.texture!==pe)&&(z!==K&&(s.activeTexture(K),z=K),s.bindTexture(P,pe||ie[P]),Z.type=P,Z.texture=pe)}function Q(){let P=ce[z];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function it(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ne(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Oe(P){ke.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),ke.copy(P))}function be(P){ze.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),ze.copy(P))}function Xe(P,pe){let K=c.get(pe);K===void 0&&(K=new WeakMap,c.set(pe,K));let Z=K.get(P);Z===void 0&&(Z=s.getUniformBlockIndex(pe,P.name),K.set(P,Z))}function He(P,pe){let Z=c.get(pe).get(P);o.get(pe)!==Z&&(s.uniformBlockBinding(pe,Z,P.__bindingPointIndex),o.set(pe,Z))}function gt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},z=null,ce={},h={},u=new WeakMap,d=[],f=null,A=!1,g=null,m=null,p=null,_=null,b=null,E=null,I=null,C=new ee(0,0,0),S=0,w=!1,B=null,x=null,y=null,L=null,F=null,ke.set(0,0,s.canvas.width,s.canvas.height),ze.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:ye,disable:ge,bindFramebuffer:Ge,drawBuffers:Pe,useProgram:je,setBlending:D,setMaterial:xn,setFlipSided:qe,setCullFace:nt,setLineWidth:Ue,setPolygonOffset:vt,setScissorTest:Qe,activeTexture:R,bindTexture:v,unbindTexture:Q,compressedTexImage2D:J,compressedTexImage3D:$,texImage2D:xe,texImage3D:Ne,updateUBOMapping:Xe,uniformBlockBinding:He,texStorage2D:it,texStorage3D:re,texSubImage2D:Y,texSubImage3D:we,compressedTexSubImage2D:he,compressedTexSubImage3D:_e,scissor:Oe,viewport:be,reset:gt}}function Yf(s,e,t,n){let i=tb(n);switch(t){case vd:return s*e;case Cd:return s*e;case wd:return s*e*2;case Mi:return s*e/i.components*i.byteLength;case Th:return s*e/i.components*i.byteLength;case Xi:return s*e*2/i.components*i.byteLength;case Rh:return s*e*2/i.components*i.byteLength;case Md:return s*e*3/i.components*i.byteLength;case Tt:return s*e*4/i.components*i.byteLength;case Bh:return s*e*4/i.components*i.byteLength;case oo:case Ws:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case co:case Ks:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yl:case vl:return Math.max(s,16)*Math.max(e,8)/4;case Jr:case jr:return Math.max(s,8)*Math.max(e,8)/2;case Zr:case $r:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ea:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case er:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ml:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Cl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case wl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case tr:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Il:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Tl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Rl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Dl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ll:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Pl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Fl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case qs:case Ul:case Nl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Sd:case Ol:return Math.ceil(s/4)*Math.ceil(e/4)*8;case kl:case Ql:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tb(s){switch(s){case Rt:case bd:return{byteLength:1,components:1};case Yr:case Ed:case bt:return{byteLength:2,components:1};case Sh:case Ih:return{byteLength:2,components:4};case As:case wh:case Vt:return{byteLength:4,components:1};case yd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function nb(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ne,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(R,v){return f?new OffscreenCanvas(R,v):ta("canvas")}function g(R,v,Q){let J=1,$=Qe(R);if(($.width>Q||$.height>Q)&&(J=Q/Math.max($.width,$.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Y=Math.floor(J*$.width),we=Math.floor(J*$.height);u===void 0&&(u=A(Y,we));let he=v?A(Y,we):u;return he.width=Y,he.height=we,he.getContext("2d").drawImage(R,0,0,Y,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Y+"x"+we+")."),he}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==rn&&R.minFilter!==mt}function p(R){s.generateMipmap(R)}function _(R,v,Q,J,$=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=v;if(v===s.RED&&(Q===s.FLOAT&&(Y=s.R32F),Q===s.HALF_FLOAT&&(Y=s.R16F),Q===s.UNSIGNED_BYTE&&(Y=s.R8)),v===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(Y=s.R8UI),Q===s.UNSIGNED_SHORT&&(Y=s.R16UI),Q===s.UNSIGNED_INT&&(Y=s.R32UI),Q===s.BYTE&&(Y=s.R8I),Q===s.SHORT&&(Y=s.R16I),Q===s.INT&&(Y=s.R32I)),v===s.RG&&(Q===s.FLOAT&&(Y=s.RG32F),Q===s.HALF_FLOAT&&(Y=s.RG16F),Q===s.UNSIGNED_BYTE&&(Y=s.RG8)),v===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(Y=s.RG8UI),Q===s.UNSIGNED_SHORT&&(Y=s.RG16UI),Q===s.UNSIGNED_INT&&(Y=s.RG32UI),Q===s.BYTE&&(Y=s.RG8I),Q===s.SHORT&&(Y=s.RG16I),Q===s.INT&&(Y=s.RG32I)),v===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),Q===s.UNSIGNED_INT&&(Y=s.RGB32UI),Q===s.BYTE&&(Y=s.RGB8I),Q===s.SHORT&&(Y=s.RGB16I),Q===s.INT&&(Y=s.RGB32I)),v===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),Q===s.UNSIGNED_INT&&(Y=s.RGBA32UI),Q===s.BYTE&&(Y=s.RGBA8I),Q===s.SHORT&&(Y=s.RGBA16I),Q===s.INT&&(Y=s.RGBA32I)),v===s.RGB&&Q===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),v===s.RGBA){let we=$?uo:et.getTransfer(J);Q===s.FLOAT&&(Y=s.RGBA32F),Q===s.HALF_FLOAT&&(Y=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(Y=we===Ct?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function b(R,v){let Q;return R?v===null||v===As||v===Zs?Q=s.DEPTH24_STENCIL8:v===Vt?Q=s.DEPTH32F_STENCIL8:v===Yr&&(Q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===As||v===Zs?Q=s.DEPTH_COMPONENT24:v===Vt?Q=s.DEPTH_COMPONENT32F:v===Yr&&(Q=s.DEPTH_COMPONENT16),Q}function E(R,v){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==rn&&R.minFilter!==mt?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function I(R){let v=R.target;v.removeEventListener("dispose",I),S(v),v.isVideoTexture&&h.delete(v)}function C(R){let v=R.target;v.removeEventListener("dispose",C),B(v)}function S(R){let v=n.get(R);if(v.__webglInit===void 0)return;let Q=R.source,J=d.get(Q);if(J){let $=J[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&w(R),Object.keys(J).length===0&&d.delete(Q)}n.remove(R)}function w(R){let v=n.get(R);s.deleteTexture(v.__webglTexture);let Q=R.source,J=d.get(Q);delete J[v.__cacheKey],a.memory.textures--}function B(R){let v=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let $=0;$<v.__webglFramebuffer[J].length;$++)s.deleteFramebuffer(v.__webglFramebuffer[J][$]);else s.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)s.deleteFramebuffer(v.__webglFramebuffer[J]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let Q=R.textures;for(let J=0,$=Q.length;J<$;J++){let Y=n.get(Q[J]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(Q[J])}n.remove(R)}let x=0;function y(){x=0}function L(){let R=x;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),x+=1,R}function F(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function U(R,v){let Q=n.get(R);if(R.isVideoTexture&&Ue(R),R.isRenderTargetTexture===!1&&R.version>0&&Q.__version!==R.version){let J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ze(Q,R,v);return}}t.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+v)}function W(R,v){let Q=n.get(R);if(R.version>0&&Q.__version!==R.version){ze(Q,R,v);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+v)}function k(R,v){let Q=n.get(R);if(R.version>0&&Q.__version!==R.version){ze(Q,R,v);return}t.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+v)}function q(R,v){let Q=n.get(R);if(R.version>0&&Q.__version!==R.version){X(Q,R,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+v)}let z={[Zt]:s.REPEAT,[gn]:s.CLAMP_TO_EDGE,[Xr]:s.MIRRORED_REPEAT},ce={[rn]:s.NEAREST,[Ch]:s.NEAREST_MIPMAP_NEAREST,[Qs]:s.NEAREST_MIPMAP_LINEAR,[mt]:s.LINEAR,[Gr]:s.LINEAR_MIPMAP_NEAREST,[un]:s.LINEAR_MIPMAP_LINEAR},ae={[GA]:s.NEVER,[qA]:s.ALWAYS,[HA]:s.LESS,[Rd]:s.LEQUAL,[zA]:s.EQUAL,[KA]:s.GEQUAL,[VA]:s.GREATER,[WA]:s.NOTEQUAL};function de(R,v){if(v.type===Vt&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===mt||v.magFilter===Gr||v.magFilter===Qs||v.magFilter===un||v.minFilter===mt||v.minFilter===Gr||v.minFilter===Qs||v.minFilter===un)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,z[v.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,z[v.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,z[v.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,ce[v.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,ce[v.minFilter]),v.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,ae[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===rn||v.minFilter!==Qs&&v.minFilter!==un||v.type===Vt&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let Q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ke(R,v){let Q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",I));let J=v.source,$=d.get(J);$===void 0&&($={},d.set(J,$));let Y=F(v);if(Y!==R.__cacheKey){$[Y]===void 0&&($[Y]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,Q=!0),$[Y].usedTimes++;let we=$[R.__cacheKey];we!==void 0&&($[R.__cacheKey].usedTimes--,we.usedTimes===0&&w(v)),R.__cacheKey=Y,R.__webglTexture=$[Y].texture}return Q}function ze(R,v,Q){let J=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=s.TEXTURE_3D);let $=ke(R,v),Y=v.source;t.bindTexture(J,R.__webglTexture,s.TEXTURE0+Q);let we=n.get(Y);if(Y.version!==we.__version||$===!0){t.activeTexture(s.TEXTURE0+Q);let he=et.getPrimaries(et.workingColorSpace),_e=v.colorSpace===Mn?null:et.getPrimaries(v.colorSpace),it=v.colorSpace===Mn||he===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let re=g(v.image,!1,i.maxTextureSize);re=vt(v,re);let xe=r.convert(v.format,v.colorSpace),Ne=r.convert(v.type),Oe=_(v.internalFormat,xe,Ne,v.colorSpace,v.isVideoTexture);de(J,v);let be,Xe=v.mipmaps,He=v.isVideoTexture!==!0,gt=we.__version===void 0||$===!0,P=Y.dataReady,pe=E(v,re);if(v.isDepthTexture)Oe=b(v.format===$s,v.type),gt&&(He?t.texStorage2D(s.TEXTURE_2D,1,Oe,re.width,re.height):t.texImage2D(s.TEXTURE_2D,0,Oe,re.width,re.height,0,xe,Ne,null));else if(v.isDataTexture)if(Xe.length>0){He&&gt&&t.texStorage2D(s.TEXTURE_2D,pe,Oe,Xe[0].width,Xe[0].height);for(let K=0,Z=Xe.length;K<Z;K++)be=Xe[K],He?P&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,be.width,be.height,xe,Ne,be.data):t.texImage2D(s.TEXTURE_2D,K,Oe,be.width,be.height,0,xe,Ne,be.data);v.generateMipmaps=!1}else He?(gt&&t.texStorage2D(s.TEXTURE_2D,pe,Oe,re.width,re.height),P&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,re.width,re.height,xe,Ne,re.data)):t.texImage2D(s.TEXTURE_2D,0,Oe,re.width,re.height,0,xe,Ne,re.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){He&&gt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,Oe,Xe[0].width,Xe[0].height,re.depth);for(let K=0,Z=Xe.length;K<Z;K++)if(be=Xe[K],v.format!==Tt)if(xe!==null)if(He){if(P)if(v.layerUpdates.size>0){let ue=Yf(be.width,be.height,v.format,v.type);for(let Ae of v.layerUpdates){let $e=be.data.subarray(Ae*ue/be.data.BYTES_PER_ELEMENT,(Ae+1)*ue/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,Ae,be.width,be.height,1,xe,$e,0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,be.width,be.height,re.depth,xe,be.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,Oe,be.width,be.height,re.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?P&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,be.width,be.height,re.depth,xe,Ne,be.data):t.texImage3D(s.TEXTURE_2D_ARRAY,K,Oe,be.width,be.height,re.depth,0,xe,Ne,be.data)}else{He&&gt&&t.texStorage2D(s.TEXTURE_2D,pe,Oe,Xe[0].width,Xe[0].height);for(let K=0,Z=Xe.length;K<Z;K++)be=Xe[K],v.format!==Tt?xe!==null?He?P&&t.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,be.width,be.height,xe,be.data):t.compressedTexImage2D(s.TEXTURE_2D,K,Oe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?P&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,be.width,be.height,xe,Ne,be.data):t.texImage2D(s.TEXTURE_2D,K,Oe,be.width,be.height,0,xe,Ne,be.data)}else if(v.isDataArrayTexture)if(He){if(gt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,Oe,re.width,re.height,re.depth),P)if(v.layerUpdates.size>0){let K=Yf(re.width,re.height,v.format,v.type);for(let Z of v.layerUpdates){let ue=re.data.subarray(Z*K/re.data.BYTES_PER_ELEMENT,(Z+1)*K/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,re.width,re.height,1,xe,Ne,ue)}v.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,xe,Ne,re.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Oe,re.width,re.height,re.depth,0,xe,Ne,re.data);else if(v.isData3DTexture)He?(gt&&t.texStorage3D(s.TEXTURE_3D,pe,Oe,re.width,re.height,re.depth),P&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,xe,Ne,re.data)):t.texImage3D(s.TEXTURE_3D,0,Oe,re.width,re.height,re.depth,0,xe,Ne,re.data);else if(v.isFramebufferTexture){if(gt)if(He)t.texStorage2D(s.TEXTURE_2D,pe,Oe,re.width,re.height);else{let K=re.width,Z=re.height;for(let ue=0;ue<pe;ue++)t.texImage2D(s.TEXTURE_2D,ue,Oe,K,Z,0,xe,Ne,null),K>>=1,Z>>=1}}else if(Xe.length>0){if(He&&gt){let K=Qe(Xe[0]);t.texStorage2D(s.TEXTURE_2D,pe,Oe,K.width,K.height)}for(let K=0,Z=Xe.length;K<Z;K++)be=Xe[K],He?P&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,xe,Ne,be):t.texImage2D(s.TEXTURE_2D,K,Oe,xe,Ne,be);v.generateMipmaps=!1}else if(He){if(gt){let K=Qe(re);t.texStorage2D(s.TEXTURE_2D,pe,Oe,K.width,K.height)}P&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,xe,Ne,re)}else t.texImage2D(s.TEXTURE_2D,0,Oe,xe,Ne,re);m(v)&&p(J),we.__version=Y.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function X(R,v,Q){if(v.image.length!==6)return;let J=ke(R,v),$=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+Q);let Y=n.get($);if($.version!==Y.__version||J===!0){t.activeTexture(s.TEXTURE0+Q);let we=et.getPrimaries(et.workingColorSpace),he=v.colorSpace===Mn?null:et.getPrimaries(v.colorSpace),_e=v.colorSpace===Mn||we===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let it=v.isCompressedTexture||v.image[0].isCompressedTexture,re=v.image[0]&&v.image[0].isDataTexture,xe=[];for(let Z=0;Z<6;Z++)!it&&!re?xe[Z]=g(v.image[Z],!0,i.maxCubemapSize):xe[Z]=re?v.image[Z].image:v.image[Z],xe[Z]=vt(v,xe[Z]);let Ne=xe[0],Oe=r.convert(v.format,v.colorSpace),be=r.convert(v.type),Xe=_(v.internalFormat,Oe,be,v.colorSpace),He=v.isVideoTexture!==!0,gt=Y.__version===void 0||J===!0,P=$.dataReady,pe=E(v,Ne);de(s.TEXTURE_CUBE_MAP,v);let K;if(it){He&&gt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,pe,Xe,Ne.width,Ne.height);for(let Z=0;Z<6;Z++){K=xe[Z].mipmaps;for(let ue=0;ue<K.length;ue++){let Ae=K[ue];v.format!==Tt?Oe!==null?He?P&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,0,0,Ae.width,Ae.height,Oe,Ae.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,Xe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?P&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,0,0,Ae.width,Ae.height,Oe,be,Ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,Xe,Ae.width,Ae.height,0,Oe,be,Ae.data)}}}else{if(K=v.mipmaps,He&&gt){K.length>0&&pe++;let Z=Qe(xe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,pe,Xe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(re){He?P&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,xe[Z].width,xe[Z].height,Oe,be,xe[Z].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xe,xe[Z].width,xe[Z].height,0,Oe,be,xe[Z].data);for(let ue=0;ue<K.length;ue++){let $e=K[ue].image[Z].image;He?P&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,0,0,$e.width,$e.height,Oe,be,$e.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,Xe,$e.width,$e.height,0,Oe,be,$e.data)}}else{He?P&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Oe,be,xe[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xe,Oe,be,xe[Z]);for(let ue=0;ue<K.length;ue++){let Ae=K[ue];He?P&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,0,0,Oe,be,Ae.image[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,Xe,Oe,be,Ae.image[Z])}}}m(v)&&p(s.TEXTURE_CUBE_MAP),Y.__version=$.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function ie(R,v,Q,J,$,Y){let we=r.convert(Q.format,Q.colorSpace),he=r.convert(Q.type),_e=_(Q.internalFormat,we,he,Q.colorSpace);if(!n.get(v).__hasExternalTextures){let re=Math.max(1,v.width>>Y),xe=Math.max(1,v.height>>Y);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?t.texImage3D($,Y,_e,re,xe,v.depth,0,we,he,null):t.texImage2D($,Y,_e,re,xe,0,we,he,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),nt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,$,n.get(Q).__webglTexture,0,qe(v)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,$,n.get(Q).__webglTexture,Y),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ye(R,v,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,R),v.depthBuffer){let J=v.depthTexture,$=J&&J.isDepthTexture?J.type:null,Y=b(v.stencilBuffer,$),we=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=qe(v);nt(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,he,Y,v.width,v.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,he,Y,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,Y,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,we,s.RENDERBUFFER,R)}else{let J=v.textures;for(let $=0;$<J.length;$++){let Y=J[$],we=r.convert(Y.format,Y.colorSpace),he=r.convert(Y.type),_e=_(Y.internalFormat,we,he,Y.colorSpace),it=qe(v);Q&&nt(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,it,_e,v.width,v.height):nt(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,it,_e,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,_e,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ge(R,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),U(v.depthTexture,0);let J=n.get(v.depthTexture).__webglTexture,$=qe(v);if(v.depthTexture.format===Vs)nt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(v.depthTexture.format===$s)nt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ge(R){let v=n.get(R),Q=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let J=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),J){let $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,J.removeEventListener("dispose",$)};J.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=J}if(R.depthTexture&&!v.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");ge(v.__webglFramebuffer,R)}else if(Q){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]===void 0)v.__webglDepthbuffer[J]=s.createRenderbuffer(),ye(v.__webglDepthbuffer[J],R,!1);else{let $=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),ye(v.__webglDepthbuffer,R,!1);else{let J=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,$)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Pe(R,v,Q){let J=n.get(R);v!==void 0&&ie(J.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&Ge(R)}function je(R){let v=R.texture,Q=n.get(R),J=n.get(v);R.addEventListener("dispose",C);let $=R.textures,Y=R.isWebGLCubeRenderTarget===!0,we=$.length>1;if(we||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=v.version,a.memory.textures++),Y){Q.__webglFramebuffer=[];for(let he=0;he<6;he++)if(v.mipmaps&&v.mipmaps.length>0){Q.__webglFramebuffer[he]=[];for(let _e=0;_e<v.mipmaps.length;_e++)Q.__webglFramebuffer[he][_e]=s.createFramebuffer()}else Q.__webglFramebuffer[he]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){Q.__webglFramebuffer=[];for(let he=0;he<v.mipmaps.length;he++)Q.__webglFramebuffer[he]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(we)for(let he=0,_e=$.length;he<_e;he++){let it=n.get($[he]);it.__webglTexture===void 0&&(it.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&nt(R)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let he=0;he<$.length;he++){let _e=$[he];Q.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[he]);let it=r.convert(_e.format,_e.colorSpace),re=r.convert(_e.type),xe=_(_e.internalFormat,it,re,_e.colorSpace,R.isXRRenderTarget===!0),Ne=qe(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ne,xe,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,Q.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),ye(Q.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),de(s.TEXTURE_CUBE_MAP,v);for(let he=0;he<6;he++)if(v.mipmaps&&v.mipmaps.length>0)for(let _e=0;_e<v.mipmaps.length;_e++)ie(Q.__webglFramebuffer[he][_e],R,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,_e);else ie(Q.__webglFramebuffer[he],R,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(v)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let he=0,_e=$.length;he<_e;he++){let it=$[he],re=n.get(it);t.bindTexture(s.TEXTURE_2D,re.__webglTexture),de(s.TEXTURE_2D,it),ie(Q.__webglFramebuffer,R,it,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,0),m(it)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let he=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,J.__webglTexture),de(he,v),v.mipmaps&&v.mipmaps.length>0)for(let _e=0;_e<v.mipmaps.length;_e++)ie(Q.__webglFramebuffer[_e],R,v,s.COLOR_ATTACHMENT0,he,_e);else ie(Q.__webglFramebuffer,R,v,s.COLOR_ATTACHMENT0,he,0);m(v)&&p(he),t.unbindTexture()}R.depthBuffer&&Ge(R)}function ut(R){let v=R.textures;for(let Q=0,J=v.length;Q<J;Q++){let $=v[Q];if(m($)){let Y=R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,we=n.get($).__webglTexture;t.bindTexture(Y,we),p(Y),t.unbindTexture()}}}let Ze=[],D=[];function xn(R){if(R.samples>0){if(nt(R)===!1){let v=R.textures,Q=R.width,J=R.height,$=s.COLOR_BUFFER_BIT,Y=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=n.get(R),he=v.length>1;if(he)for(let _e=0;_e<v.length;_e++)t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let _e=0;_e<v.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),he){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,we.__webglColorRenderbuffer[_e]);let it=n.get(v[_e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,it,0)}s.blitFramebuffer(0,0,Q,J,0,0,Q,J,$,s.NEAREST),c===!0&&(Ze.length=0,D.length=0,Ze.push(s.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ze.push(Y),D.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ze))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let _e=0;_e<v.length;_e++){t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,we.__webglColorRenderbuffer[_e]);let it=n.get(v[_e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,it,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let v=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function qe(R){return Math.min(i.maxSamples,R.samples)}function nt(R){let v=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ue(R){let v=a.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function vt(R,v){let Q=R.colorSpace,J=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||Q!==Et&&Q!==Mn&&(et.getTransfer(Q)===Ct?(J!==Tt||$!==Rt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),v}function Qe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=y,this.setTexture2D=U,this.setTexture2DArray=W,this.setTexture3D=k,this.setTextureCube=q,this.rebindTextures=Pe,this.setupRenderTarget=je,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=xn,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=nt}function ib(s,e){function t(n,i=Mn){let r,a=et.getTransfer(i);if(n===Rt)return s.UNSIGNED_BYTE;if(n===Sh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ih)return s.UNSIGNED_SHORT_5_5_5_1;if(n===yd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===bd)return s.BYTE;if(n===Ed)return s.SHORT;if(n===Yr)return s.UNSIGNED_SHORT;if(n===wh)return s.INT;if(n===As)return s.UNSIGNED_INT;if(n===Vt)return s.FLOAT;if(n===bt)return s.HALF_FLOAT;if(n===vd)return s.ALPHA;if(n===Md)return s.RGB;if(n===Tt)return s.RGBA;if(n===Cd)return s.LUMINANCE;if(n===wd)return s.LUMINANCE_ALPHA;if(n===Vs)return s.DEPTH_COMPONENT;if(n===$s)return s.DEPTH_STENCIL;if(n===Mi)return s.RED;if(n===Th)return s.RED_INTEGER;if(n===Xi)return s.RG;if(n===Rh)return s.RG_INTEGER;if(n===Bh)return s.RGBA_INTEGER;if(n===oo||n===Ws||n===co||n===Ks)if(a===Ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===oo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===oo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jr||n===yl||n===jr||n===vl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Jr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zr||n===$r||n===ea)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Zr||n===$r)return a===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ea)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===er||n===Ml||n===Cl||n===wl||n===tr||n===Sl||n===Il||n===Tl||n===Rl||n===Bl||n===Dl||n===Ll||n===Pl||n===Fl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===er)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ml)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cl)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wl)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tr)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sl)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Il)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tl)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rl)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bl)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dl)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ll)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pl)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fl)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qs||n===Ul||n===Nl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===qs)return a===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sd||n===Ol||n===kl||n===Ql)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===qs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ol)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===kl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var eh=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},xt=class extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},sb={type:"move"},Vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,A=.005;l.inputState.pinching&&d>f+A?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-A&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sb)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},rb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ab=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,th=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new Ot,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new St({vertexShader:rb,fragmentShader:ab,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Re(new Kn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nh=class extends bi{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,A=null,g=new th,m=t.getContextAttributes(),p=null,_=null,b=[],E=[],I=new ne,C=null,S=new qt;S.layers.enable(1),S.viewport=new Ye;let w=new qt;w.layers.enable(2),w.viewport=new Ye;let B=[S,w],x=new eh;x.layers.enable(1),x.layers.enable(2);let y=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ie=b[X];return ie===void 0&&(ie=new Vr,b[X]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(X){let ie=b[X];return ie===void 0&&(ie=new Vr,b[X]=ie),ie.getGripSpace()},this.getHand=function(X){let ie=b[X];return ie===void 0&&(ie=new Vr,b[X]=ie),ie.getHandSpace()};function F(X){let ie=E.indexOf(X.inputSource);if(ie===-1)return;let ye=b[ie];ye!==void 0&&(ye.update(X.inputSource,X.frame,l||a),ye.dispatchEvent({type:X.type,data:X.inputSource}))}function U(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",W);for(let X=0;X<b.length;X++){let ie=E[X];ie!==null&&(E[X]=null,b[X].disconnect(ie))}y=null,L=null,g.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,_=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return A},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",U),i.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(I),i.renderState.layers===void 0){let ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new en(f.framebufferWidth,f.framebufferHeight,{format:Tt,type:Rt,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,ye=null,ge=null;m.depth&&(ge=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?$s:Vs,ye=m.stencil?Zs:As);let Ge={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Ge),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new en(d.textureWidth,d.textureHeight,{format:Tt,type:Rt,depthTexture:new vo(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),ze.setContext(i),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(X){for(let ie=0;ie<X.removed.length;ie++){let ye=X.removed[ie],ge=E.indexOf(ye);ge>=0&&(E[ge]=null,b[ge].disconnect(ye))}for(let ie=0;ie<X.added.length;ie++){let ye=X.added[ie],ge=E.indexOf(ye);if(ge===-1){for(let Pe=0;Pe<b.length;Pe++)if(Pe>=E.length){E.push(ye),ge=Pe;break}else if(E[Pe]===null){E[Pe]=ye,ge=Pe;break}if(ge===-1)break}let Ge=b[ge];Ge&&Ge.connect(ye)}}let k=new T,q=new T;function z(X,ie,ye){k.setFromMatrixPosition(ie.matrixWorld),q.setFromMatrixPosition(ye.matrixWorld);let ge=k.distanceTo(q),Ge=ie.projectionMatrix.elements,Pe=ye.projectionMatrix.elements,je=Ge[14]/(Ge[10]-1),ut=Ge[14]/(Ge[10]+1),Ze=(Ge[9]+1)/Ge[5],D=(Ge[9]-1)/Ge[5],xn=(Ge[8]-1)/Ge[0],qe=(Pe[8]+1)/Pe[0],nt=je*xn,Ue=je*qe,vt=ge/(-xn+qe),Qe=vt*-xn;if(ie.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Qe),X.translateZ(vt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ge[10]===-1)X.projectionMatrix.copy(ie.projectionMatrix),X.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let R=je+vt,v=ut+vt,Q=nt-Qe,J=Ue+(ge-Qe),$=Ze*ut/v*R,Y=D*ut/v*R;X.projectionMatrix.makePerspective(Q,J,$,Y,R,v),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ce(X,ie){ie===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ie.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let ie=X.near,ye=X.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),x.near=w.near=S.near=ie,x.far=w.far=S.far=ye,(y!==x.near||L!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),y=x.near,L=x.far);let ge=X.parent,Ge=x.cameras;ce(x,ge);for(let Pe=0;Pe<Ge.length;Pe++)ce(Ge[Pe],ge);Ge.length===2?z(x,S,w):x.projectionMatrix.copy(S.projectionMatrix),ae(X,x,ge)};function ae(X,ie,ye){ye===null?X.matrix.copy(ie.matrixWorld):(X.matrix.copy(ye.matrixWorld),X.matrix.invert(),X.matrix.multiply(ie.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ie.projectionMatrix),X.projectionMatrixInverse.copy(ie.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=sr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let de=null;function ke(X,ie){if(h=ie.getViewerPose(l||a),A=ie,h!==null){let ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let ge=!1;ye.length!==x.cameras.length&&(x.cameras.length=0,ge=!0);for(let Pe=0;Pe<ye.length;Pe++){let je=ye[Pe],ut=null;if(f!==null)ut=f.getViewport(je);else{let D=u.getViewSubImage(d,je);ut=D.viewport,Pe===0&&(e.setRenderTargetTextures(_,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(_))}let Ze=B[Pe];Ze===void 0&&(Ze=new qt,Ze.layers.enable(Pe),Ze.viewport=new Ye,B[Pe]=Ze),Ze.matrix.fromArray(je.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(je.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(ut.x,ut.y,ut.width,ut.height),Pe===0&&(x.matrix.copy(Ze.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ge===!0&&x.cameras.push(Ze)}let Ge=i.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")){let Pe=u.getDepthInformation(ye[0]);Pe&&Pe.isValid&&Pe.texture&&g.init(e,Pe,i.renderState)}}for(let ye=0;ye<b.length;ye++){let ge=E[ye],Ge=b[ye];ge!==null&&Ge!==void 0&&Ge.update(ge,ie,l||a)}de&&de(X,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),A=null}let ze=new Pd;ze.setAnimationLoop(ke),this.setAnimationLoop=function(X){de=X},this.dispose=function(){}}},cs=new Ft,ob=new Ce;function cb(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ld(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,b,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(r(m,p),A(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,_,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===an&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===an&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=e.get(p),b=_.envMap,E=_.envMapRotation;b&&(m.envMap.value=b,cs.copy(E),cs.x*=-1,cs.y*=-1,cs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),m.envMapRotation.value.setFromMatrix4(ob.makeRotationFromEuler(cs)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function A(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function lb(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,b){let E=b.program;n.uniformBlockBinding(_,E)}function l(_,b){let E=i[_.id];E===void 0&&(A(_),E=h(_),i[_.id]=E,_.addEventListener("dispose",m));let I=b.program;n.updateUBOMapping(_,I);let C=e.render.frame;r[_.id]!==C&&(d(_),r[_.id]=C)}function h(_){let b=u();_.__bindingPointIndex=b;let E=s.createBuffer(),I=_.__size,C=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,I,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,E),E}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let b=i[_.id],E=_.uniforms,I=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let C=0,S=E.length;C<S;C++){let w=Array.isArray(E[C])?E[C]:[E[C]];for(let B=0,x=w.length;B<x;B++){let y=w[B];if(f(y,C,B,I)===!0){let L=y.__offset,F=Array.isArray(y.value)?y.value:[y.value],U=0;for(let W=0;W<F.length;W++){let k=F[W],q=g(k);typeof k=="number"||typeof k=="boolean"?(y.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,L+U,y.__data)):k.isMatrix3?(y.__data[0]=k.elements[0],y.__data[1]=k.elements[1],y.__data[2]=k.elements[2],y.__data[3]=0,y.__data[4]=k.elements[3],y.__data[5]=k.elements[4],y.__data[6]=k.elements[5],y.__data[7]=0,y.__data[8]=k.elements[6],y.__data[9]=k.elements[7],y.__data[10]=k.elements[8],y.__data[11]=0):(k.toArray(y.__data,U),U+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,y.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(_,b,E,I){let C=_.value,S=b+"_"+E;if(I[S]===void 0)return typeof C=="number"||typeof C=="boolean"?I[S]=C:I[S]=C.clone(),!0;{let w=I[S];if(typeof C=="number"||typeof C=="boolean"){if(w!==C)return I[S]=C,!0}else if(w.equals(C)===!1)return w.copy(C),!0}return!1}function A(_){let b=_.uniforms,E=0,I=16;for(let S=0,w=b.length;S<w;S++){let B=Array.isArray(b[S])?b[S]:[b[S]];for(let x=0,y=B.length;x<y;x++){let L=B[x],F=Array.isArray(L.value)?L.value:[L.value];for(let U=0,W=F.length;U<W;U++){let k=F[U],q=g(k),z=E%I,ce=z%q.boundary,ae=z+ce;E+=ce,ae!==0&&I-ae<q.storage&&(E+=I-ae),L.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=E,E+=q.storage}}}let C=E%I;return C>0&&(E+=I-C),_.__size=E,_.__cache={},this}function g(_){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),b}function m(_){let b=_.target;b.removeEventListener("dispose",m);let E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function p(){for(let _ in i)s.deleteBuffer(i[_]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}var Mo=class{constructor(e={}){let{canvas:t=hm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let f=new Uint32Array(4),A=new Int32Array(4),g=null,m=null,p=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_t,this.toneMapping=ni,this.toneMappingExposure=1;let b=this,E=!1,I=0,C=0,S=null,w=-1,B=null,x=new Ye,y=new Ye,L=null,F=new ee(0),U=0,W=t.width,k=t.height,q=1,z=null,ce=null,ae=new Ye(0,0,W,k),de=new Ye(0,0,W,k),ke=!1,ze=new ia,X=!1,ie=!1,ye=new Ce,ge=new Ce,Ge=new T,Pe=new Ye,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ut=!1;function Ze(){return S===null?q:1}let D=n;function xn(M,N){return t.getContext(M,N)}try{let M={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r169"),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),D===null){let N="webgl2";if(D=xn(N,M),D===null)throw xn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let qe,nt,Ue,vt,Qe,R,v,Q,J,$,Y,we,he,_e,it,re,xe,Ne,Oe,be,Xe,He,gt,P;function pe(){qe=new C_(D),qe.init(),He=new ib(D,qe),nt=new x_(D,qe,e,He),Ue=new eb(D),nt.reverseDepthBuffer&&Ue.buffers.depth.setReversed(!0),vt=new I_(D),Qe=new Gx,R=new nb(D,qe,Ue,Qe,nt,He,vt),v=new E_(b),Q=new M_(b),J=new Fm(D),gt=new g_(D,J),$=new w_(D,J,vt,gt),Y=new R_(D,$,J,vt),Oe=new T_(D,nt,R),re=new b_(Qe),we=new Qx(b,v,Q,qe,nt,gt,re),he=new cb(b,Qe),_e=new zx,it=new Yx(qe),Ne=new m_(b,v,Q,Ue,Y,d,c),xe=new Zx(b,Y,nt),P=new lb(D,vt,nt,Ue),be=new __(D,qe,vt),Xe=new S_(D,qe,vt),vt.programs=we.programs,b.capabilities=nt,b.extensions=qe,b.properties=Qe,b.renderLists=_e,b.shadowMap=xe,b.state=Ue,b.info=vt}pe();let K=new nh(b,D);this.xr=K,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let M=qe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=qe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(M){M!==void 0&&(q=M,this.setSize(W,k,!1))},this.getSize=function(M){return M.set(W,k)},this.setSize=function(M,N,G=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=M,k=N,t.width=Math.floor(M*q),t.height=Math.floor(N*q),G===!0&&(t.style.width=M+"px",t.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(W*q,k*q).floor()},this.setDrawingBufferSize=function(M,N,G){W=M,k=N,q=G,t.width=Math.floor(M*G),t.height=Math.floor(N*G),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(x)},this.getViewport=function(M){return M.copy(ae)},this.setViewport=function(M,N,G,H){M.isVector4?ae.set(M.x,M.y,M.z,M.w):ae.set(M,N,G,H),Ue.viewport(x.copy(ae).multiplyScalar(q).round())},this.getScissor=function(M){return M.copy(de)},this.setScissor=function(M,N,G,H){M.isVector4?de.set(M.x,M.y,M.z,M.w):de.set(M,N,G,H),Ue.scissor(y.copy(de).multiplyScalar(q).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(M){Ue.setScissorTest(ke=M)},this.setOpaqueSort=function(M){z=M},this.setTransparentSort=function(M){ce=M},this.getClearColor=function(M){return M.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(M=!0,N=!0,G=!0){let H=0;if(M){let O=!1;if(S!==null){let oe=S.texture.format;O=oe===Bh||oe===Rh||oe===Th}if(O){let oe=S.texture.type,fe=oe===Rt||oe===As||oe===Yr||oe===Zs||oe===Sh||oe===Ih,Ee=Ne.getClearColor(),ve=Ne.getClearAlpha(),Le=Ee.r,Fe=Ee.g,Se=Ee.b;fe?(f[0]=Le,f[1]=Fe,f[2]=Se,f[3]=ve,D.clearBufferuiv(D.COLOR,0,f)):(A[0]=Le,A[1]=Fe,A[2]=Se,A[3]=ve,D.clearBufferiv(D.COLOR,0,A))}else H|=D.COLOR_BUFFER_BIT}N&&(H|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),_e.dispose(),it.dispose(),Qe.dispose(),v.dispose(),Q.dispose(),Y.dispose(),gt.dispose(),P.dispose(),we.dispose(),K.dispose(),K.removeEventListener("sessionstart",Xu),K.removeEventListener("sessionend",Yu),ns.stop()};function Z(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let M=vt.autoReset,N=xe.enabled,G=xe.autoUpdate,H=xe.needsUpdate,O=xe.type;pe(),vt.autoReset=M,xe.enabled=N,xe.autoUpdate=G,xe.needsUpdate=H,xe.type=O}function Ae(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function $e(M){let N=M.target;N.removeEventListener("dispose",$e),Gt(N)}function Gt(M){An(M),Qe.remove(M)}function An(M){let N=Qe.get(M).programs;N!==void 0&&(N.forEach(function(G){we.releaseProgram(G)}),M.isShaderMaterial&&we.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,G,H,O,oe){N===null&&(N=je);let fe=O.isMesh&&O.matrixWorld.determinant()<0,Ee=eA(M,N,G,H,O);Ue.setMaterial(H,fe);let ve=G.index,Le=1;if(H.wireframe===!0){if(ve=$.getWireframeAttribute(G),ve===void 0)return;Le=2}let Fe=G.drawRange,Se=G.attributes.position,ct=Fe.start*Le,Mt=(Fe.start+Fe.count)*Le;oe!==null&&(ct=Math.max(ct,oe.start*Le),Mt=Math.min(Mt,(oe.start+oe.count)*Le)),ve!==null?(ct=Math.max(ct,0),Mt=Math.min(Mt,ve.count)):Se!=null&&(ct=Math.max(ct,0),Mt=Math.min(Mt,Se.count));let Lt=Mt-ct;if(Lt<0||Lt===1/0)return;gt.setup(O,H,Ee,G,ve);let bn,rt=be;if(ve!==null&&(bn=J.get(ve),rt=Xe,rt.setIndex(bn)),O.isMesh)H.wireframe===!0?(Ue.setLineWidth(H.wireframeLinewidth*Ze()),rt.setMode(D.LINES)):rt.setMode(D.TRIANGLES);else if(O.isLine){let Ie=H.linewidth;Ie===void 0&&(Ie=1),Ue.setLineWidth(Ie*Ze()),O.isLineSegments?rt.setMode(D.LINES):O.isLineLoop?rt.setMode(D.LINE_LOOP):rt.setMode(D.LINE_STRIP)}else O.isPoints?rt.setMode(D.POINTS):O.isSprite&&rt.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)rt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))rt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Ie=O._multiDrawStarts,$t=O._multiDrawCounts,at=O._multiDrawCount,kn=ve?J.get(ve).bytesPerElement:1,Ms=Qe.get(H).currentProgram.getUniforms();for(let En=0;En<at;En++)Ms.setValue(D,"_gl_DrawID",En),rt.render(Ie[En]/kn,$t[En])}else if(O.isInstancedMesh)rt.renderInstances(ct,Lt,O.count);else if(G.isInstancedBufferGeometry){let Ie=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,$t=Math.min(G.instanceCount,Ie);rt.renderInstances(ct,Lt,$t)}else rt.render(ct,Lt)};function st(M,N,G){M.transparent===!0&&M.side===zn&&M.forceSinglePass===!1?(M.side=an,M.needsUpdate=!0,Da(M,N,G),M.side=ii,M.needsUpdate=!0,Da(M,N,G),M.side=zn):Da(M,N,G)}this.compile=function(M,N,G=null){G===null&&(G=M),m=it.get(G),m.init(N),_.push(m),G.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),M!==G&&M.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();let H=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let oe=O.material;if(oe)if(Array.isArray(oe))for(let fe=0;fe<oe.length;fe++){let Ee=oe[fe];st(Ee,G,O),H.add(Ee)}else st(oe,G,O),H.add(oe)}),_.pop(),m=null,H},this.compileAsync=function(M,N,G=null){let H=this.compile(M,N,G);return new Promise(O=>{function oe(){if(H.forEach(function(fe){Qe.get(fe).currentProgram.isReady()&&H.delete(fe)}),H.size===0){O(M);return}setTimeout(oe,10)}qe.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let mn=null;function li(M){mn&&mn(M)}function Xu(){ns.stop()}function Yu(){ns.start()}let ns=new Pd;ns.setAnimationLoop(li),typeof self<"u"&&ns.setContext(self),this.setAnimationLoop=function(M){mn=M,K.setAnimationLoop(M),M===null?ns.stop():ns.start()},K.addEventListener("sessionstart",Xu),K.addEventListener("sessionend",Yu),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(N),N=K.getCamera()),M.isScene===!0&&M.onBeforeRender(b,M,N,S),m=it.get(M,_.length),m.init(N),_.push(m),ge.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ze.setFromProjectionMatrix(ge),ie=this.localClippingEnabled,X=re.init(this.clippingPlanes,ie),g=_e.get(M,p.length),g.init(),p.push(g),K.enabled===!0&&K.isPresenting===!0){let oe=b.xr.getDepthSensingMesh();oe!==null&&wc(oe,N,-1/0,b.sortObjects)}wc(M,N,0,b.sortObjects),g.finish(),b.sortObjects===!0&&g.sort(z,ce),ut=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,ut&&Ne.addToRenderList(g,M),this.info.render.frame++,X===!0&&re.beginShadows();let G=m.state.shadowsArray;xe.render(G,M,N),X===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=g.opaque,O=g.transmissive;if(m.setupLights(),N.isArrayCamera){let oe=N.cameras;if(O.length>0)for(let fe=0,Ee=oe.length;fe<Ee;fe++){let ve=oe[fe];ju(H,O,M,ve)}ut&&Ne.render(M);for(let fe=0,Ee=oe.length;fe<Ee;fe++){let ve=oe[fe];Ju(g,M,ve,ve.viewport)}}else O.length>0&&ju(H,O,M,N),ut&&Ne.render(M),Ju(g,M,N);S!==null&&(R.updateMultisampleRenderTarget(S),R.updateRenderTargetMipmap(S)),M.isScene===!0&&M.onAfterRender(b,M,N),gt.resetDefaultState(),w=-1,B=null,_.pop(),_.length>0?(m=_[_.length-1],X===!0&&re.setGlobalState(b.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function wc(M,N,G,H){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ze.intersectsSprite(M)){H&&Pe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ge);let fe=Y.update(M),Ee=M.material;Ee.visible&&g.push(M,fe,Ee,G,Pe.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ze.intersectsObject(M))){let fe=Y.update(M),Ee=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Pe.copy(M.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Pe.copy(fe.boundingSphere.center)),Pe.applyMatrix4(M.matrixWorld).applyMatrix4(ge)),Array.isArray(Ee)){let ve=fe.groups;for(let Le=0,Fe=ve.length;Le<Fe;Le++){let Se=ve[Le],ct=Ee[Se.materialIndex];ct&&ct.visible&&g.push(M,fe,ct,G,Pe.z,Se)}}else Ee.visible&&g.push(M,fe,Ee,G,Pe.z,null)}}let oe=M.children;for(let fe=0,Ee=oe.length;fe<Ee;fe++)wc(oe[fe],N,G,H)}function Ju(M,N,G,H){let O=M.opaque,oe=M.transmissive,fe=M.transparent;m.setupLightsView(G),X===!0&&re.setGlobalState(b.clippingPlanes,G),H&&Ue.viewport(x.copy(H)),O.length>0&&Ba(O,N,G),oe.length>0&&Ba(oe,N,G),fe.length>0&&Ba(fe,N,G),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function ju(M,N,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new en(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?bt:Rt,minFilter:un,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));let oe=m.state.transmissionRenderTarget[H.id],fe=H.viewport||x;oe.setSize(fe.z,fe.w);let Ee=b.getRenderTarget();b.setRenderTarget(oe),b.getClearColor(F),U=b.getClearAlpha(),U<1&&b.setClearColor(16777215,.5),b.clear(),ut&&Ne.render(G);let ve=b.toneMapping;b.toneMapping=ni;let Le=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),X===!0&&re.setGlobalState(b.clippingPlanes,H),Ba(M,G,H),R.updateMultisampleRenderTarget(oe),R.updateRenderTargetMipmap(oe),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Se=0,ct=N.length;Se<ct;Se++){let Mt=N[Se],Lt=Mt.object,bn=Mt.geometry,rt=Mt.material,Ie=Mt.group;if(rt.side===zn&&Lt.layers.test(H.layers)){let $t=rt.side;rt.side=an,rt.needsUpdate=!0,Zu(Lt,G,H,bn,rt,Ie),rt.side=$t,rt.needsUpdate=!0,Fe=!0}}Fe===!0&&(R.updateMultisampleRenderTarget(oe),R.updateRenderTargetMipmap(oe))}b.setRenderTarget(Ee),b.setClearColor(F,U),Le!==void 0&&(H.viewport=Le),b.toneMapping=ve}function Ba(M,N,G){let H=N.isScene===!0?N.overrideMaterial:null;for(let O=0,oe=M.length;O<oe;O++){let fe=M[O],Ee=fe.object,ve=fe.geometry,Le=H===null?fe.material:H,Fe=fe.group;Ee.layers.test(G.layers)&&Zu(Ee,N,G,ve,Le,Fe)}}function Zu(M,N,G,H,O,oe){M.onBeforeRender(b,N,G,H,O,oe),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(b,N,G,H,M,oe),O.transparent===!0&&O.side===zn&&O.forceSinglePass===!1?(O.side=an,O.needsUpdate=!0,b.renderBufferDirect(G,N,H,O,M,oe),O.side=ii,O.needsUpdate=!0,b.renderBufferDirect(G,N,H,O,M,oe),O.side=zn):b.renderBufferDirect(G,N,H,O,M,oe),M.onAfterRender(b,N,G,H,O,oe)}function Da(M,N,G){N.isScene!==!0&&(N=je);let H=Qe.get(M),O=m.state.lights,oe=m.state.shadowsArray,fe=O.state.version,Ee=we.getParameters(M,O.state,oe,N,G),ve=we.getProgramCacheKey(Ee),Le=H.programs;H.environment=M.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(M.isMeshStandardMaterial?Q:v).get(M.envMap||H.environment),H.envMapRotation=H.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Le===void 0&&(M.addEventListener("dispose",$e),Le=new Map,H.programs=Le);let Fe=Le.get(ve);if(Fe!==void 0){if(H.currentProgram===Fe&&H.lightsStateVersion===fe)return ef(M,Ee),Fe}else Ee.uniforms=we.getUniforms(M),M.onBeforeCompile(Ee,b),Fe=we.acquireProgram(Ee,ve),Le.set(ve,Fe),H.uniforms=Ee.uniforms;let Se=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Se.clippingPlanes=re.uniform),ef(M,Ee),H.needsLights=nA(M),H.lightsStateVersion=fe,H.needsLights&&(Se.ambientLightColor.value=O.state.ambient,Se.lightProbe.value=O.state.probe,Se.directionalLights.value=O.state.directional,Se.directionalLightShadows.value=O.state.directionalShadow,Se.spotLights.value=O.state.spot,Se.spotLightShadows.value=O.state.spotShadow,Se.rectAreaLights.value=O.state.rectArea,Se.ltc_1.value=O.state.rectAreaLTC1,Se.ltc_2.value=O.state.rectAreaLTC2,Se.pointLights.value=O.state.point,Se.pointLightShadows.value=O.state.pointShadow,Se.hemisphereLights.value=O.state.hemi,Se.directionalShadowMap.value=O.state.directionalShadowMap,Se.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Se.spotShadowMap.value=O.state.spotShadowMap,Se.spotLightMatrix.value=O.state.spotLightMatrix,Se.spotLightMap.value=O.state.spotLightMap,Se.pointShadowMap.value=O.state.pointShadowMap,Se.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=Fe,H.uniformsList=null,Fe}function $u(M){if(M.uniformsList===null){let N=M.currentProgram.getUniforms();M.uniformsList=Ys.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function ef(M,N){let G=Qe.get(M);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function eA(M,N,G,H,O){N.isScene!==!0&&(N=je),R.resetTextureUnits();let oe=N.fog,fe=H.isMeshStandardMaterial?N.environment:null,Ee=S===null?b.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Et,ve=(H.isMeshStandardMaterial?Q:v).get(H.envMap||fe),Le=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Fe=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Se=!!G.morphAttributes.position,ct=!!G.morphAttributes.normal,Mt=!!G.morphAttributes.color,Lt=ni;H.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Lt=b.toneMapping);let bn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,rt=bn!==void 0?bn.length:0,Ie=Qe.get(H),$t=m.state.lights;if(X===!0&&(ie===!0||M!==B)){let Bn=M===B&&H.id===w;re.setState(H,M,Bn)}let at=!1;H.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==$t.state.version||Ie.outputColorSpace!==Ee||O.isBatchedMesh&&Ie.batching===!1||!O.isBatchedMesh&&Ie.batching===!0||O.isBatchedMesh&&Ie.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ie.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ie.instancing===!1||!O.isInstancedMesh&&Ie.instancing===!0||O.isSkinnedMesh&&Ie.skinning===!1||!O.isSkinnedMesh&&Ie.skinning===!0||O.isInstancedMesh&&Ie.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ie.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ie.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ie.instancingMorph===!1&&O.morphTexture!==null||Ie.envMap!==ve||H.fog===!0&&Ie.fog!==oe||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==re.numPlanes||Ie.numIntersection!==re.numIntersection)||Ie.vertexAlphas!==Le||Ie.vertexTangents!==Fe||Ie.morphTargets!==Se||Ie.morphNormals!==ct||Ie.morphColors!==Mt||Ie.toneMapping!==Lt||Ie.morphTargetsCount!==rt)&&(at=!0):(at=!0,Ie.__version=H.version);let kn=Ie.currentProgram;at===!0&&(kn=Da(H,N,O));let Ms=!1,En=!1,Sc=!1,Nt=kn.getUniforms(),Li=Ie.uniforms;if(Ue.useProgram(kn.program)&&(Ms=!0,En=!0,Sc=!0),H.id!==w&&(w=H.id,En=!0),Ms||B!==M){nt.reverseDepthBuffer?(ye.copy(M.projectionMatrix),fm(ye),dm(ye),Nt.setValue(D,"projectionMatrix",ye)):Nt.setValue(D,"projectionMatrix",M.projectionMatrix),Nt.setValue(D,"viewMatrix",M.matrixWorldInverse);let Bn=Nt.map.cameraPosition;Bn!==void 0&&Bn.setValue(D,Ge.setFromMatrixPosition(M.matrixWorld)),nt.logarithmicDepthBuffer&&Nt.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Nt.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),B!==M&&(B=M,En=!0,Sc=!0)}if(O.isSkinnedMesh){Nt.setOptional(D,O,"bindMatrix"),Nt.setOptional(D,O,"bindMatrixInverse");let Bn=O.skeleton;Bn&&(Bn.boneTexture===null&&Bn.computeBoneTexture(),Nt.setValue(D,"boneTexture",Bn.boneTexture,R))}O.isBatchedMesh&&(Nt.setOptional(D,O,"batchingTexture"),Nt.setValue(D,"batchingTexture",O._matricesTexture,R),Nt.setOptional(D,O,"batchingIdTexture"),Nt.setValue(D,"batchingIdTexture",O._indirectTexture,R),Nt.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&Nt.setValue(D,"batchingColorTexture",O._colorsTexture,R));let Ic=G.morphAttributes;if((Ic.position!==void 0||Ic.normal!==void 0||Ic.color!==void 0)&&Oe.update(O,G,kn),(En||Ie.receiveShadow!==O.receiveShadow)&&(Ie.receiveShadow=O.receiveShadow,Nt.setValue(D,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Li.envMap.value=ve,Li.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(Li.envMapIntensity.value=N.environmentIntensity),En&&(Nt.setValue(D,"toneMappingExposure",b.toneMappingExposure),Ie.needsLights&&tA(Li,Sc),oe&&H.fog===!0&&he.refreshFogUniforms(Li,oe),he.refreshMaterialUniforms(Li,H,q,k,m.state.transmissionRenderTarget[M.id]),Ys.upload(D,$u(Ie),Li,R)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ys.upload(D,$u(Ie),Li,R),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Nt.setValue(D,"center",O.center),Nt.setValue(D,"modelViewMatrix",O.modelViewMatrix),Nt.setValue(D,"normalMatrix",O.normalMatrix),Nt.setValue(D,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let Bn=H.uniformsGroups;for(let Tc=0,iA=Bn.length;Tc<iA;Tc++){let tf=Bn[Tc];P.update(tf,kn),P.bind(tf,kn)}}return kn}function tA(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function nA(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(M,N,G){Qe.get(M.texture).__webglTexture=N,Qe.get(M.depthTexture).__webglTexture=G;let H=Qe.get(M);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=G===void 0,H.__autoAllocateDepthBuffer||qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,N){let G=Qe.get(M);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,G=0){S=M,I=N,C=G;let H=!0,O=null,oe=!1,fe=!1;if(M){let ve=Qe.get(M);if(ve.__useDefaultFramebuffer!==void 0)Ue.bindFramebuffer(D.FRAMEBUFFER,null),H=!1;else if(ve.__webglFramebuffer===void 0)R.setupRenderTarget(M);else if(ve.__hasExternalTextures)R.rebindTextures(M,Qe.get(M.texture).__webglTexture,Qe.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Se=M.depthTexture;if(ve.__boundDepthTexture!==Se){if(Se!==null&&Qe.has(Se)&&(M.width!==Se.image.width||M.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(M)}}let Le=M.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(fe=!0);let Fe=Qe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Fe[N])?O=Fe[N][G]:O=Fe[N],oe=!0):M.samples>0&&R.useMultisampledRTT(M)===!1?O=Qe.get(M).__webglMultisampledFramebuffer:Array.isArray(Fe)?O=Fe[G]:O=Fe,x.copy(M.viewport),y.copy(M.scissor),L=M.scissorTest}else x.copy(ae).multiplyScalar(q).floor(),y.copy(de).multiplyScalar(q).floor(),L=ke;if(Ue.bindFramebuffer(D.FRAMEBUFFER,O)&&H&&Ue.drawBuffers(M,O),Ue.viewport(x),Ue.scissor(y),Ue.setScissorTest(L),oe){let ve=Qe.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,ve.__webglTexture,G)}else if(fe){let ve=Qe.get(M.texture),Le=N||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ve.__webglTexture,G||0,Le)}w=-1},this.readRenderTargetPixels=function(M,N,G,H,O,oe,fe){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Qe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&fe!==void 0&&(Ee=Ee[fe]),Ee){Ue.bindFramebuffer(D.FRAMEBUFFER,Ee);try{let ve=M.texture,Le=ve.format,Fe=ve.type;if(!nt.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-H&&G>=0&&G<=M.height-O&&D.readPixels(N,G,H,O,He.convert(Le),He.convert(Fe),oe)}finally{let ve=S!==null?Qe.get(S).__webglFramebuffer:null;Ue.bindFramebuffer(D.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(M,N,G,H,O,oe,fe){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Qe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&fe!==void 0&&(Ee=Ee[fe]),Ee){let ve=M.texture,Le=ve.format,Fe=ve.type;if(!nt.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=M.width-H&&G>=0&&G<=M.height-O){Ue.bindFramebuffer(D.FRAMEBUFFER,Ee);let Se=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Se),D.bufferData(D.PIXEL_PACK_BUFFER,oe.byteLength,D.STREAM_READ),D.readPixels(N,G,H,O,He.convert(Le),He.convert(Fe),0);let ct=S!==null?Qe.get(S).__webglFramebuffer:null;Ue.bindFramebuffer(D.FRAMEBUFFER,ct);let Mt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await um(D,Mt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Se),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,oe),D.deleteBuffer(Se),D.deleteSync(Mt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,N=null,G=0){M.isTexture!==!0&&(lo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,M=arguments[1]);let H=Math.pow(2,-G),O=Math.floor(M.image.width*H),oe=Math.floor(M.image.height*H),fe=N!==null?N.x:0,Ee=N!==null?N.y:0;R.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,fe,Ee,O,oe),Ue.unbindTexture()},this.copyTextureToTexture=function(M,N,G=null,H=null,O=0){M.isTexture!==!0&&(lo("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,M=arguments[1],N=arguments[2],O=arguments[3]||0,G=null);let oe,fe,Ee,ve,Le,Fe;G!==null?(oe=G.max.x-G.min.x,fe=G.max.y-G.min.y,Ee=G.min.x,ve=G.min.y):(oe=M.image.width,fe=M.image.height,Ee=0,ve=0),H!==null?(Le=H.x,Fe=H.y):(Le=0,Fe=0);let Se=He.convert(N.format),ct=He.convert(N.type);R.setTexture2D(N,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);let Mt=D.getParameter(D.UNPACK_ROW_LENGTH),Lt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),bn=D.getParameter(D.UNPACK_SKIP_PIXELS),rt=D.getParameter(D.UNPACK_SKIP_ROWS),Ie=D.getParameter(D.UNPACK_SKIP_IMAGES),$t=M.isCompressedTexture?M.mipmaps[O]:M.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,$t.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,$t.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ee),D.pixelStorei(D.UNPACK_SKIP_ROWS,ve),M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,O,Le,Fe,oe,fe,Se,ct,$t.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,O,Le,Fe,$t.width,$t.height,Se,$t.data):D.texSubImage2D(D.TEXTURE_2D,O,Le,Fe,oe,fe,Se,ct,$t),D.pixelStorei(D.UNPACK_ROW_LENGTH,Mt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Lt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,bn),D.pixelStorei(D.UNPACK_SKIP_ROWS,rt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ie),O===0&&N.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Ue.unbindTexture()},this.copyTextureToTexture3D=function(M,N,G=null,H=null,O=0){M.isTexture!==!0&&(lo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,H=arguments[1]||null,M=arguments[2],N=arguments[3],O=arguments[4]||0);let oe,fe,Ee,ve,Le,Fe,Se,ct,Mt,Lt=M.isCompressedTexture?M.mipmaps[O]:M.image;G!==null?(oe=G.max.x-G.min.x,fe=G.max.y-G.min.y,Ee=G.max.z-G.min.z,ve=G.min.x,Le=G.min.y,Fe=G.min.z):(oe=Lt.width,fe=Lt.height,Ee=Lt.depth,ve=0,Le=0,Fe=0),H!==null?(Se=H.x,ct=H.y,Mt=H.z):(Se=0,ct=0,Mt=0);let bn=He.convert(N.format),rt=He.convert(N.type),Ie;if(N.isData3DTexture)R.setTexture3D(N,0),Ie=D.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)R.setTexture2DArray(N,0),Ie=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);let $t=D.getParameter(D.UNPACK_ROW_LENGTH),at=D.getParameter(D.UNPACK_IMAGE_HEIGHT),kn=D.getParameter(D.UNPACK_SKIP_PIXELS),Ms=D.getParameter(D.UNPACK_SKIP_ROWS),En=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Lt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Lt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ve),D.pixelStorei(D.UNPACK_SKIP_ROWS,Le),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Fe),M.isDataTexture||M.isData3DTexture?D.texSubImage3D(Ie,O,Se,ct,Mt,oe,fe,Ee,bn,rt,Lt.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(Ie,O,Se,ct,Mt,oe,fe,Ee,bn,Lt.data):D.texSubImage3D(Ie,O,Se,ct,Mt,oe,fe,Ee,bn,rt,Lt),D.pixelStorei(D.UNPACK_ROW_LENGTH,$t),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,at),D.pixelStorei(D.UNPACK_SKIP_PIXELS,kn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ms),D.pixelStorei(D.UNPACK_SKIP_IMAGES,En),O===0&&N.generateMipmaps&&D.generateMipmap(Ie),Ue.unbindTexture()},this.initRenderTarget=function(M){Qe.get(M).__webglFramebuffer===void 0&&R.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?R.setTextureCube(M,0):M.isData3DTexture?R.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?R.setTexture2DArray(M,0):R.setTexture2D(M,0),Ue.unbindTexture()},this.resetState=function(){I=0,C=0,S=null,Ue.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===pa?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===Ar?"display-p3":"srgb"}},Co=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ee(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var wo=class extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ft,this.environmentIntensity=1,this.environmentRotation=new Ft,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},sa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Gl,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ln=new T,ra=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Jf=new T,jf=new Ye,Zf=new Ye,hb=new T,$f=new Ce,$a=new T,sl=new fn,ed=new Ce,rl=new rr,So=class extends Re{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=af,this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ln),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$a),this.boundingBox.expandByPoint($a)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new fn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$a),this.boundingSphere.expandByPoint($a)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sl.copy(this.boundingSphere),sl.applyMatrix4(i),e.ray.intersectsSphere(sl)!==!1&&(ed.copy(i).invert(),rl.copy(e.ray).applyMatrix4(ed),!(this.boundingBox!==null&&rl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,rl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ye,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===af?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===LA?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;jf.fromBufferAttribute(i.attributes.skinIndex,e),Zf.fromBufferAttribute(i.attributes.skinWeight,e),Jf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Zf.getComponent(r);if(a!==0){let o=jf.getComponent(r);$f.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(hb.copy(Jf).applyMatrix4($f),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},aa=class extends wt{constructor(){super(),this.isBone=!0,this.type="Bone"}},qn=class extends Ot{constructor(e=null,t=1,n=1,i,r,a,o,c,l=rn,h=rn,u,d){super(null,a,o,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},td=new Ce,ub=new Ce,Io=class s{constructor(e=[],t=[]){this.uuid=Wn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ce;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:ub;td.multiplyMatrices(o,t[r]),td.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new qn(t,e,e,Tt,Vt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new aa),this.bones.push(a),this.boneInverses.push(new Ce().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},on=class extends Pt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ks=new Ce,nd=new Ce,eo=[],id=new Ln,fb=new Ce,Ur=new Re,Nr=new fn,Xn=class extends Re{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new on(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,fb)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ks),id.copy(e.boundingBox).applyMatrix4(ks),this.boundingBox.union(id)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ks),Nr.copy(e.boundingSphere).applyMatrix4(ks),this.boundingSphere.union(Nr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Ur.geometry=this.geometry,Ur.material=this.material,Ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nr.copy(this.boundingSphere),Nr.applyMatrix4(n),e.ray.intersectsSphere(Nr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ks),nd.multiplyMatrices(n,ks),Ur.matrixWorld=nd,Ur.raycast(e,eo);for(let a=0,o=eo.length;a<o;a++){let c=eo[a];c.instanceId=r,c.object=this,t.push(c)}eo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new on(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new qn(new Float32Array(i*this.count),i,this.count,Mi,Vt));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var oa=class extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},To=new T,Ro=new T,sd=new Ce,Or=new rr,to=new fn,al=new T,rd=new T,cr=class extends wt{constructor(e=new Bt,t=new oa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)To.fromBufferAttribute(t,i-1),Ro.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=To.distanceTo(Ro);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(i),to.radius+=r,e.ray.intersectsSphere(to)===!1)return;sd.copy(i).invert(),Or.copy(e.ray).applyMatrix4(sd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),A=Math.min(h.count,a.start+a.count);for(let g=f,m=A-1;g<m;g+=l){let p=h.getX(g),_=h.getX(g+1),b=no(this,e,Or,c,p,_);b&&t.push(b)}if(this.isLineLoop){let g=h.getX(A-1),m=h.getX(f),p=no(this,e,Or,c,g,m);p&&t.push(p)}}else{let f=Math.max(0,a.start),A=Math.min(d.count,a.start+a.count);for(let g=f,m=A-1;g<m;g+=l){let p=no(this,e,Or,c,g,g+1);p&&t.push(p)}if(this.isLineLoop){let g=no(this,e,Or,c,A-1,f);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function no(s,e,t,n,i,r){let a=s.geometry.attributes.position;if(To.fromBufferAttribute(a,i),Ro.fromBufferAttribute(a,r),t.distanceSqToSegment(To,Ro,al,rd)>n)return;al.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(al);if(!(c<e.near||c>e.far))return{distance:c,point:rd.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var ad=new T,od=new T,Bo=class extends cr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)ad.fromBufferAttribute(t,i),od.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ad.distanceTo(od);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Do=class extends cr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ca=class extends Cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},cd=new Ce,ih=new rr,io=new fn,so=new T,Lo=class extends wt{constructor(e=new Bt,t=new ca){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(i),io.radius+=r,e.ray.intersectsSphere(io)===!1)return;cd.copy(i).invert(),ih.copy(e.ray).applyMatrix4(cd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let A=d,g=f;A<g;A++){let m=l.getX(A);so.fromBufferAttribute(u,m),ld(so,m,c,i,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let A=d,g=f;A<g;A++)so.fromBufferAttribute(u,A),ld(so,A,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ld(s,e,t,n,i,r,a){let o=ih.distanceSqToPoint(s);if(o<t){let c=new T;ih.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ms=class extends Ot{constructor(e,t,n,i,r,a,o,c,l,h,u,d){super(null,a,o,c,l,h,i,r,u,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},Po=class extends ms{constructor(e,t,n,i,r,a){super(e,t,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=gn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Fo=class extends ms{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,ps),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}},lr=class extends Ot{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),c=t||(a.isVector2?new ne:new T);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new T,i=[],r=[],a=[],o=new T,c=new Ce;for(let f=0;f<=e;f++){let A=f/e;i[f]=this.getTangentAt(A,new T)}r[0]=new T,a[0]=new T;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let A=Math.acos(zt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,A))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(zt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let A=1;A<=e;A++)r[A].applyMatrix4(c.makeRotationAxis(i[A],f*A)),a[A].crossVectors(i[A],r[A])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},la=class extends Pn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ne){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},sh=class extends la{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Fh(){let s=0,e=0,t=0,n=0;function i(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var ro=new T,ol=new Fh,cl=new Fh,ll=new Fh,ha=class extends Pn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new T){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(ro.subVectors(i[0],i[1]).add(i[0]),l=ro);let u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(ro.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ro),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,A=Math.pow(l.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);g<1e-4&&(g=1),A<1e-4&&(A=g),m<1e-4&&(m=g),ol.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,A,g,m),cl.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,A,g,m),ll.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,A,g,m)}else this.curveType==="catmullrom"&&(ol.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),cl.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ll.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(ol.calc(c),cl.calc(c),ll.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new T().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function hd(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,c=s*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*s+t}function db(s,e){let t=1-s;return t*t*e}function pb(s,e){return 2*(1-s)*s*e}function Ab(s,e){return s*s*e}function Wr(s,e,t,n){return db(s,e)+pb(s,t)+Ab(s,n)}function mb(s,e){let t=1-s;return t*t*t*e}function gb(s,e){let t=1-s;return 3*t*t*s*e}function _b(s,e){return 3*(1-s)*s*s*e}function xb(s,e){return s*s*s*e}function Kr(s,e,t,n,i){return mb(s,e)+gb(s,t)+_b(s,n)+xb(s,i)}var Uo=class extends Pn{constructor(e=new ne,t=new ne,n=new ne,i=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ne){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Kr(e,i.x,r.x,a.x,o.x),Kr(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},rh=class extends Pn{constructor(e=new T,t=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new T){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Kr(e,i.x,r.x,a.x,o.x),Kr(e,i.y,r.y,a.y,o.y),Kr(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},No=class extends Pn{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ah=class extends Pn{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oo=class extends Pn{constructor(e=new ne,t=new ne,n=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ne){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Wr(e,i.x,r.x,a.x),Wr(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oh=class extends Pn{constructor(e=new T,t=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Wr(e,i.x,r.x,a.x),Wr(e,i.y,r.y,a.y),Wr(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ko=class extends Pn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(hd(o,c.x,l.x,h.x,u.x),hd(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ne().fromArray(i))}return this}},ud=Object.freeze({__proto__:null,ArcCurve:sh,CatmullRomCurve3:ha,CubicBezierCurve:Uo,CubicBezierCurve3:rh,EllipseCurve:la,LineCurve:No,LineCurve3:ah,QuadraticBezierCurve:Oo,QuadraticBezierCurve3:oh,SplineCurve:ko}),ch=class extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ud[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new ud[i.type]().fromJSON(i))}return this}},lh=class extends ch{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new No(this.currentPoint.clone(),new ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Oo(this.currentPoint.clone(),new ne(e,t),new ne(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){let o=new Uo(this.currentPoint.clone(),new ne(e,t),new ne(n,i),new ne(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ko(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,a,o,c),this}absellipse(e,t,n,i,r,a,o,c){let l=new la(e,t,n,i,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},hh=class s extends Bt{constructor(e=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=zt(i,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,u=new T,d=new ne,f=new T,A=new T,g=new T,m=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(g.x,g.y,g.z);break;default:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-m,f.z=p*0,A.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),c.push(f.x,f.y,f.z),g.copy(A)}for(let _=0;_<=t;_++){let b=n+_*h*i,E=Math.sin(b),I=Math.cos(b);for(let C=0;C<=e.length-1;C++){u.x=e[C].x*E,u.y=e[C].y,u.z=e[C].x*I,a.push(u.x,u.y,u.z),d.x=_/t,d.y=C/(e.length-1),o.push(d.x,d.y);let S=c[3*C+0]*E,w=c[3*C+1],B=c[3*C+0]*I;l.push(S,w,B)}}for(let _=0;_<t;_++)for(let b=0;b<e.length-1;b++){let E=b+_*e.length,I=E,C=E+e.length,S=E+e.length+1,w=E+1;r.push(I,C,w),r.push(S,w,C)}this.setIndex(r),this.setAttribute("position",new ot(a,3)),this.setAttribute("uv",new ot(o,2)),this.setAttribute("normal",new ot(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}},Qo=class s extends hh{constructor(e=1,t=1,n=4,i=8){let r=new lh;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new s(e.radius,e.length,e.capSegments,e.radialSegments)}};var Wt=class s extends Bt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],A=0,g=[],m=n/2,p=0;_(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new ot(u,3)),this.setAttribute("normal",new ot(d,3)),this.setAttribute("uv",new ot(f,2));function _(){let E=new T,I=new T,C=0,S=(t-e)/n;for(let w=0;w<=r;w++){let B=[],x=w/r,y=x*(t-e)+e;for(let L=0;L<=i;L++){let F=L/i,U=F*c+o,W=Math.sin(U),k=Math.cos(U);I.x=y*W,I.y=-x*n+m,I.z=y*k,u.push(I.x,I.y,I.z),E.set(W,S,k).normalize(),d.push(E.x,E.y,E.z),f.push(F,1-x),B.push(A++)}g.push(B)}for(let w=0;w<i;w++)for(let B=0;B<r;B++){let x=g[B][w],y=g[B+1][w],L=g[B+1][w+1],F=g[B][w+1];e>0&&(h.push(x,y,F),C+=3),t>0&&(h.push(y,L,F),C+=3)}l.addGroup(p,C,0),p+=C}function b(E){let I=A,C=new ne,S=new T,w=0,B=E===!0?e:t,x=E===!0?1:-1;for(let L=1;L<=i;L++)u.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),A++;let y=A;for(let L=0;L<=i;L++){let U=L/i*c+o,W=Math.cos(U),k=Math.sin(U);S.x=B*k,S.y=m*x,S.z=B*W,u.push(S.x,S.y,S.z),d.push(0,x,0),C.x=W*.5+.5,C.y=k*.5*x+.5,f.push(C.x,C.y),A++}for(let L=0;L<i;L++){let F=I+L,U=y+L;E===!0?h.push(U,U+1,F):h.push(U+1,U,F),w+=3}l.addGroup(p,w,E===!0?1:2),p+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var uh=class s extends Bt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new ot(r,3)),this.setAttribute("normal",new ot(r.slice(),3)),this.setAttribute("uv",new ot(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let b=new T,E=new T,I=new T;for(let C=0;C<t.length;C+=3)f(t[C+0],b),f(t[C+1],E),f(t[C+2],I),c(b,E,I,_)}function c(_,b,E,I){let C=I+1,S=[];for(let w=0;w<=C;w++){S[w]=[];let B=_.clone().lerp(E,w/C),x=b.clone().lerp(E,w/C),y=C-w;for(let L=0;L<=y;L++)L===0&&w===C?S[w][L]=B:S[w][L]=B.clone().lerp(x,L/y)}for(let w=0;w<C;w++)for(let B=0;B<2*(C-w)-1;B++){let x=Math.floor(B/2);B%2===0?(d(S[w][x+1]),d(S[w+1][x]),d(S[w][x])):(d(S[w][x+1]),d(S[w+1][x+1]),d(S[w+1][x]))}}function l(_){let b=new T;for(let E=0;E<r.length;E+=3)b.x=r[E+0],b.y=r[E+1],b.z=r[E+2],b.normalize().multiplyScalar(_),r[E+0]=b.x,r[E+1]=b.y,r[E+2]=b.z}function h(){let _=new T;for(let b=0;b<r.length;b+=3){_.x=r[b+0],_.y=r[b+1],_.z=r[b+2];let E=m(_)/2/Math.PI+.5,I=p(_)/Math.PI+.5;a.push(E,1-I)}A(),u()}function u(){for(let _=0;_<a.length;_+=6){let b=a[_+0],E=a[_+2],I=a[_+4],C=Math.max(b,E,I),S=Math.min(b,E,I);C>.9&&S<.1&&(b<.2&&(a[_+0]+=1),E<.2&&(a[_+2]+=1),I<.2&&(a[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,b){let E=_*3;b.x=e[E+0],b.y=e[E+1],b.z=e[E+2]}function A(){let _=new T,b=new T,E=new T,I=new T,C=new ne,S=new ne,w=new ne;for(let B=0,x=0;B<r.length;B+=9,x+=6){_.set(r[B+0],r[B+1],r[B+2]),b.set(r[B+3],r[B+4],r[B+5]),E.set(r[B+6],r[B+7],r[B+8]),C.set(a[x+0],a[x+1]),S.set(a[x+2],a[x+3]),w.set(a[x+4],a[x+5]),I.copy(_).add(b).add(E).divideScalar(3);let y=m(I);g(C,x+0,_,y),g(S,x+2,b,y),g(w,x+4,E,y)}}function g(_,b,E,I){I<0&&_.x===1&&(a[b]=_.x-1),E.x===0&&E.z===0&&(a[b]=I/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}},hr=class s extends uh{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var si=class s extends Bt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new T,d=new T,f=[],A=[],g=[],m=[];for(let p=0;p<=n;p++){let _=[],b=p/n,E=0;p===0&&a===0?E=.5/t:p===n&&c===Math.PI&&(E=-.5/t);for(let I=0;I<=t;I++){let C=I/t;u.x=-e*Math.cos(i+C*r)*Math.sin(a+b*o),u.y=e*Math.cos(a+b*o),u.z=e*Math.sin(i+C*r)*Math.sin(a+b*o),A.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(C+E,1-b),_.push(l++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){let b=h[p][_+1],E=h[p][_],I=h[p+1][_],C=h[p+1][_+1];(p!==0||a>0)&&f.push(b,E,C),(p!==n-1||c<Math.PI)&&f.push(E,I,C)}this.setIndex(f),this.setAttribute("position",new ot(A,3)),this.setAttribute("normal",new ot(g,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ur=class s extends Bt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],c=[],l=[],h=new T,u=new T,d=new T;for(let f=0;f<=n;f++)for(let A=0;A<=i;A++){let g=A/i*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(g),u.y=(e+t*Math.cos(m))*Math.sin(g),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(A/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let A=1;A<=i;A++){let g=(i+1)*f+A-1,m=(i+1)*(f-1)+A-1,p=(i+1)*(f-1)+A,_=(i+1)*f+A;a.push(g,m,_),a.push(m,p,_)}this.setIndex(a),this.setAttribute("position",new ot(o,3)),this.setAttribute("normal",new ot(c,3)),this.setAttribute("uv",new ot(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ft=class extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Td,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ft,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},wn=class extends ft{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function ao(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function bb(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Eb(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function fd(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function kd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var zi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fh=class extends zi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gs,endingEnd:Gs}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Hs:r=e,o=2*t-n;break;case ho:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Hs:a=e,c=2*n-t;break;case ho:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,A=(n-t)/(i-t),g=A*A,m=g*A,p=-d*m+2*d*g-d*A,_=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*A+1,b=(-1-f)*m+(1.5+f)*g+.5*A,E=f*m-f*g;for(let I=0;I!==o;++I)r[I]=p*a[h+I]+_*a[l+I]+b*a[c+I]+E*a[u+I];return r}},Go=class extends zi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},dh=class extends zi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Fn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ao(t,this.TimeBufferType),this.values=ao(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ao(e.times,Array),values:ao(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new dh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Go(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case nr:t=this.InterpolantFactoryMethodDiscrete;break;case ir:t=this.InterpolantFactoryMethodLinear;break;case Rc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nr;case this.InterpolantFactoryMethodLinear:return ir;case this.InterpolantFactoryMethodSmooth:return Rc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&bb(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Rc,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let A=0;A!==n;++A){let g=t[u+A];if(g!==t[d+A]||g!==t[f+A]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=ir;var Vi=class extends Fn{constructor(e,t,n){super(e,t,n)}};Vi.prototype.ValueTypeName="bool";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=nr;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ho=class extends Fn{};Ho.prototype.ValueTypeName="color";var Ei=class extends Fn{};Ei.prototype.ValueTypeName="number";var ph=class extends zi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)tt.slerpFlat(r,0,a,l-o,a,l,c);return r}},yi=class extends Fn{InterpolantFactoryMethodLinear(e){return new ph(this.times,this.values,this.getValueSize(),e)}};yi.prototype.ValueTypeName="quaternion";yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Wi=class extends Fn{constructor(e,t,n){super(e,t,n)}};Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=nr;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends Fn{};vi.prototype.ValueTypeName="vector";var fr=class{constructor(e="",t=-1,n=[],i=Dh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Wn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(vb(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Fn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=Eb(c);c=fd(c,1,h),l=fd(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Ei(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,A,g){if(f.length!==0){let m=[],p=[];kd(f,m,p,A),m.length!==0&&g.push(new u(d,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},A;for(A=0;A<d.length;A++)if(d[A].morphTargets)for(let g=0;g<d[A].morphTargets.length;g++)f[d[A].morphTargets[g]]=-1;for(let g in f){let m=[],p=[];for(let _=0;_!==d[A].morphTargets.length;++_){let b=d[A];m.push(b.time),p.push(b.morphTarget===g?1:0)}i.push(new Ei(".morphTargetInfluence["+g+"]",m,p))}c=f.length*a}else{let f=".bones["+t[u].name+"]";n(vi,f+".position",d,"pos",i),n(yi,f+".quaternion",d,"rot",i),n(vi,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function yb(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ei;case"vector":case"vector2":case"vector3":case"vector4":return vi;case"color":return Ho;case"quaternion":return yi;case"bool":case"boolean":return Vi;case"string":return Wi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function vb(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=yb(s.type);if(s.times===void 0){let t=[],n=[];kd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Qi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Ah=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],A=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return A}return null}}},Mb=new Ah,Un=class{constructor(e){this.manager=e!==void 0?e:Mb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Un.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ai={},mh=class extends Error{constructor(e,t){super(e),this.response=t}},ri=class extends Un{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Qi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ai[e]!==void 0){Ai[e].push({onLoad:t,onProgress:n,onError:i});return}Ai[e]=[],Ai[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Ai[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,A=f!==0,g=0,m=new ReadableStream({start(p){_();function _(){u.read().then(({done:b,value:E})=>{if(b)p.close();else{g+=E.byteLength;let I=new ProgressEvent("progress",{lengthComputable:A,loaded:g,total:f});for(let C=0,S=h.length;C<S;C++){let w=h[C];w.onProgress&&w.onProgress(I)}p.enqueue(E),_()}},b=>{p.error(b)})}}});return new Response(m)}else throw new mh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(A=>f.decode(A))}}}).then(l=>{Qi.add(e,l);let h=Ai[e];delete Ai[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Ai[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ai[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var gh=class extends Un{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Qi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=ta("img");function c(){h(),Qi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var zo=class extends Un{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new qn,o=new ri(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(c){let l;try{l=r.parse(c)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:gn,a.wrapT=l.wrapT!==void 0?l.wrapT:gn,a.magFilter=l.magFilter!==void 0?l.magFilter:mt,a.minFilter=l.minFilter!==void 0?l.minFilter:mt,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(a.colorSpace=l.colorSpace),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=un),l.mipmapCount===1&&(a.minFilter=mt),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,t&&t(a,l)},n,i),a}},Vo=class extends Un{constructor(e){super(e)}load(e,t,n,i){let r=new Ot,a=new gh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},dr=class extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Wo=class extends dr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},hl=new Ce,dd=new T,pd=new T,ua=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ia,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;dd.setFromMatrixPosition(e.matrixWorld),t.position.copy(dd),pd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pd),t.updateMatrixWorld(),hl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},_h=class extends ua{constructor(){super(new qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=sr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ko=class extends dr{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new _h}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ad=new Ce,kr=new T,ul=new T,xh=class extends ua{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new Ye(2,1,1,1),new Ye(0,1,1,1),new Ye(3,1,1,1),new Ye(1,1,1,1),new Ye(3,0,1,1),new Ye(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),kr.setFromMatrixPosition(e.matrixWorld),n.position.copy(kr),ul.copy(n.position),ul.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ul),n.updateMatrixWorld(),i.makeTranslation(-kr.x,-kr.y,-kr.z),Ad.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ad)}},Ki=class extends dr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new xh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},bh=class extends ua{constructor(){super(new Hi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},pr=class extends dr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new bh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var qi=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},fa=class extends Bt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var qo=class extends Un{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Qi.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Qi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Qi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Qi.add(e,c),r.manager.itemStart(e)}};var Xo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=md(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=md();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function md(){return performance.now()}var Eh=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){tt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;tt.multiplyQuaternionsFlat(e,a,e,t,e,n),tt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},Uh="\\[\\]\\.:\\/",Cb=new RegExp("["+Uh+"]","g"),Nh="[^"+Uh+"]",wb="[^"+Uh.replace("\\.","")+"]",Sb=/((?:WC+[\/:])*)/.source.replace("WC",Nh),Ib=/(WCOD+)?/.source.replace("WCOD",wb),Tb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nh),Rb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nh),Bb=new RegExp("^"+Sb+Ib+Tb+Rb+"$"),Db=["material","materials","bones","map"],yh=class{constructor(e,t,n){let i=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},At=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cb,"")}static parseTrackName(e){let t=Bb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Db.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=yh;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vh=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,o=new Array(a),c={endingStart:Gs,endingEnd:Gs};for(let l=0;l!==a;++l){let h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=FA,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case NA:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case Dh:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===UA;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===PA){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Hs,i.endingEnd=Hs):(e?i.endingStart=this.zeroSlopeAtStart?Hs:Gs:i.endingStart=ho,t?i.endingEnd=this.zeroSlopeAtEnd?Hs:Gs:i.endingEnd=ho)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}},Lb=new Float32Array(1),Yo=class extends bi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let d=i[u],f=d.name,A=h[f];if(A!==void 0)++A.referenceCount,a[u]=A;else{if(A=a[u],A!==void 0){A._cacheIndex===null&&(++A.referenceCount,this._addInactiveBinding(A,c,f));continue}let g=t&&t._propertyBindings[u].binding.parsedPath;A=new Eh(At.create(n,f,g),d.ValueTypeName,d.getValueSize()),++A.referenceCount,this._addInactiveBinding(A,c,f),a[u]=A}o[u].resultBuffer=A.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Go(new Float32Array(2),new Float32Array(2),1,Lb),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?fr.findByName(i,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Dh),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let h=new vh(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?fr.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");function Oh(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new Bt,l=0;for(let h=0;h<s.length;++h){let u=s[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let A=0;A<f.count;++A)u.push(f.getX(A)+h);h+=s[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Qd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let g=0;g<a[h].length;++g)f.push(a[h][g][d]);let A=Qd(f);if(!A)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(A)}}return c}function Qd(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){let h=s[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Pt(a,t,n),c=0;for(let l=0;l<s.length;++l){let h=s[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let A=0;A<t;A++){let g=h.getComponent(d,A);o.setComponent(d+u,A,g)}}else a.set(h.array,c);c+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function kh(s,e){if(e===Id)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===da||e===jo){let t=s.getIndex();if(t===null){let a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===da)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var ec=class extends Un{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Kh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new nu(t)}),this.register(function(t){return new iu(t)}),this.register(function(t){return new su(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new eu(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new au(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=qi.extractUrlBase(e);a=qi.resolveURL(l,this.path)}else a=qi.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ri(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Wd){try{a[Ke.KHR_BINARY_GLTF]=new ou(e)}catch(u){i&&i(u);return}r=JSON.parse(a[Ke.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new pu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ke.KHR_MATERIALS_UNLIT:a[u]=new Vh;break;case Ke.KHR_DRACO_MESH_COMPRESSION:a[u]=new cu(r,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:a[u]=new lu;break;case Ke.KHR_MESH_QUANTIZATION:a[u]=new hu;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Pb(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},zh=class{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new ee(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Et);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new pr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ki(h),l.distance=u;break;case"spot":l=new Ko(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,wi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Vh=class{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return _n}extendParams(e,t,n){let i=[];e.color=new ee(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Et),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,_t))}return Promise.all(i)}},Wh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Kh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ne(o,o)}return Promise.all(r)}},qh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Xh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Yh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new ee(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Et)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,_t)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Jh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},jh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new ee().setRGB(o[0],o[1],o[2],Et),Promise.all(r)}},Zh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},$h=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new ee().setRGB(o[0],o[1],o[2],Et),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,_t)),Promise.all(r)}},eu=class{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},tu=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},nu=class{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},iu=class{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},su=class{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ru=class{constructor(e){this.name=Ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},au=class{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Nn.TRIANGLES&&l.mode!==Nn.TRIANGLE_STRIP&&l.mode!==Nn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let A of u){let g=new Ce,m=new T,p=new tt,_=new T(1,1,1),b=new Xn(A.geometry,A.material,d);for(let E=0;E<d;E++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,E),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,E),c.SCALE&&_.fromBufferAttribute(c.SCALE,E),b.setMatrixAt(E,g.compose(m,p,_));for(let E in c)if(E==="_COLOR_0"){let I=c[E];b.instanceColor=new on(I.array,I.itemSize,I.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&A.geometry.setAttribute(E,c[E]);wt.prototype.copy.call(b,A),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Wd="glTF",ma=12,Gd={JSON:1313821514,BIN:5130562},ou=class{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ma),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Wd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-ma,r=new DataView(e,ma),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Gd.JSON){let l=new Uint8Array(e,ma+a,o);this.content=n.decode(l)}else if(c===Gd.BIN){let l=ma+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},cu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=fu[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=fu[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=_r[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let A in f.attributes){let g=f.attributes[A],m=c[A];m!==void 0&&(g.normalized=m)}u(f)},o,l,Et,d)})})}},lu=class{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},hu=class{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}},tc=class extends zi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,A=e*l,g=A-l,m=-2*f+3*d,p=f-d,_=1-m,b=p-d+u;for(let E=0;E!==o;E++){let I=a[g+E+o],C=a[g+E+c]*h,S=a[A+E+o],w=a[A+E]*h;r[E]=_*I+b*C+m*S+p*w}return r}},Fb=new tt,uu=class extends tc{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Fb.fromArray(r).normalize().toArray(r),r}},Nn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},_r={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Hd={9728:rn,9729:mt,9984:Ch,9985:Gr,9986:Qs,9987:un},zd={33071:gn,33648:Xr,10497:Zt},Qh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},fu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ub={CUBICSPLINE:void 0,LINEAR:ir,STEP:nr},Gh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Nb(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ft({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ii})),s.DefaultMaterial}function gs(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function wi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ob(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function kb(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Qb(s){let e,t=s.extensions&&s.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Hh(t.attributes):e=s.indices+":"+Hh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Hh(s.targets[n]);return e}function Hh(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function du(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Gb(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Hb=new Ce,pu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Pb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new Vo(this.options.manager):this.textureLoader=new qo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ri(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return gs(r,o,i),wi(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(qi.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Qh[i.type],o=_r[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Pt(l,a,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=Qh[i.type],l=_r[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,A=i.normalized===!0,g,m;if(f&&f!==u){let p=Math.floor(d/f),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,b=t.cache.get(_);b||(g=new l(o,p*f,i.count*f/h),b=new sa(g,f/h),t.cache.add(_,b)),m=new ra(b,c,d%f/h,A)}else o===null?g=new l(i.count*c):g=new l(o,d,i.count*c),m=new Pt(g,c,A);if(i.sparse!==void 0){let p=Qh.SCALAR,_=_r[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,E=i.sparse.values.byteOffset||0,I=new _(a[1],b,i.sparse.count*p),C=new l(a[2],E,i.sparse.count*c);o!==null&&(m=new Pt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let S=0,w=I.length;S<w;S++){let B=I[S];if(m.setX(B,C[S*c]),c>=2&&m.setY(B,C[S*c+1]),c>=3&&m.setZ(B,C[S*c+2]),c>=4&&m.setW(B,C[S*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=A}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Hd[d.magFilter]||mt,h.minFilter=Hd[d.minFilter]||un,h.wrapS=zd[d.wrapS]||Zt,h.wrapT=zd[d.wrapT]||Zt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let A=d;t.isImageBitmapLoader===!0&&(A=function(g){let m=new Ot(g);m.needsUpdate=!0,d(m)}),t.load(qi.resolveURL(u,r.path),A,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),wi(u,a),u.userData.mimeType=a.mimeType||Gb(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ke.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new ca,Cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new oa,Cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ft}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[Ke.KHR_MATERIALS_UNLIT]){let u=i[Ke.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new ee(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Et),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,_t)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=zn);let h=r.alphaMode||Gh.OPAQUE;if(h===Gh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Gh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==_n&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ne(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==_n&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==_n){let u=r.emissiveFactor;o.emissive=new ee().setRGB(u[0],u[1],u[2],Et)}return r.emissiveTexture!==void 0&&a!==_n&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,_t)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),wi(u,r),t.associations.set(u,{materials:e}),r.extensions&&gs(i,u,r),u})}createUniqueName(e){let t=At.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Vd(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=Qb(l),u=i[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Vd(new Bt,l,t),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?Nb(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,A=h.length;f<A;f++){let g=h[f],m=a[f],p,_=l[f];if(m.mode===Nn.TRIANGLES||m.mode===Nn.TRIANGLE_STRIP||m.mode===Nn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new So(g,_):new Re(g,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Nn.TRIANGLE_STRIP?p.geometry=kh(p.geometry,jo):m.mode===Nn.TRIANGLE_FAN&&(p.geometry=kh(p.geometry,da));else if(m.mode===Nn.LINES)p=new Bo(g,_);else if(m.mode===Nn.LINE_STRIP)p=new cr(g,_);else if(m.mode===Nn.LINE_LOOP)p=new Do(g,_);else if(m.mode===Nn.POINTS)p=new Lo(g,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&kb(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),wi(p,r),m.extensions&&gs(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,A=u.length;f<A;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&gs(i,u[0],r),u[0];let d=new xt;r.extensions&&gs(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,A=u.length;f<A;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new qt(Zo.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Hi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),wi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new Ce;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Io(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],A=i.samplers[f.sampler],g=f.target,m=g.node,p=i.parameters!==void 0?i.parameters[A.input]:A.input,_=i.parameters!==void 0?i.parameters[A.output]:A.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",_)),l.push(A),h.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],A=u[2],g=u[3],m=u[4],p=[];for(let _=0,b=d.length;_<b;_++){let E=d[_],I=f[_],C=A[_],S=g[_],w=m[_];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let B=n._createAnimationTracks(E,I,C,S,w);if(B)for(let x=0;x<B.length;x++)p.push(B[x])}return new fr(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Hb)});for(let f=0,A=u.length;f<A;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new aa:l.length>1?h=new xt:l.length===1?h=l[0]:h=new wt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),wi(h,r),r.extensions&&gs(n,h,r),r.matrix!==void 0){let u=new Ce;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new xt;n.name&&(r.name=i.createUniqueName(n.name)),wi(r,n),n.extensions&&gs(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof Cn||d instanceof Ot)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,c=[];Ji[r.path]===Ji.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Ji[r.path]){case Ji.weights:l=Ei;break;case Ji.rotation:l=yi;break;case Ji.position:case Ji.scale:l=vi;break;default:n.itemSize===1?l=Ei:l=vi;break}let h=i.interpolation!==void 0?Ub[i.interpolation]:ir,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let A=new l(c[d]+"."+Ji[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(A),a.push(A)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=du(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof yi?uu:tc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function zb(s,e,t){let n=e.attributes,i=new Ln;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new T(c[0],c[1],c[2]),new T(l[0],l[1],l[2])),o.normalized){let h=du(_r[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new T,c=new T;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,A=d.max;if(f!==void 0&&A!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(A[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(A[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(A[2]))),d.normalized){let g=du(_r[d.componentType]);c.multiplyScalar(g)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new fn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Vd(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(let a in n){let o=fu[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return et.workingColorSpace!==Et&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),wi(s,e),zb(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Ob(s,e.targets,t):s})}var nc=class{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0}_initWorker(e){if(!this.workers[e]){let t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){let n=this.workersResolve[e];if(n&&n(t),this.queue.length){let{resolve:i,msg:r,transfer:a}=this.queue.shift();this.workersResolve[e]=i,this.workers[e].postMessage(r,a)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(n=>{let i=this._getIdleWorker();i!==-1?(this._initWorker(i),this.workerStatus|=1<<i,this.workersResolve[i]=n,this.workers[i].postMessage(e,t)):this.queue.push({resolve:n,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}};var Au=class{constructor(){this.vkFormat=0,this.typeSize=1,this.pixelWidth=0,this.pixelHeight=0,this.pixelDepth=0,this.layerCount=0,this.faceCount=1,this.supercompressionScheme=0,this.levels=[],this.dataFormatDescriptor=[{vendorId:0,descriptorType:0,descriptorBlockSize:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],this.keyValue={},this.globalData=null}},_s=class{constructor(e,t,n,i){this._dataView=void 0,this._littleEndian=void 0,this._offset=void 0,this._dataView=new DataView(e.buffer,e.byteOffset+t,n),this._littleEndian=i,this._offset=0}_nextUint8(){let e=this._dataView.getUint8(this._offset);return this._offset+=1,e}_nextUint16(){let e=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,e}_nextUint32(){let e=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint64(){let e=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,e}_nextInt32(){let e=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint8Array(e){let t=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._offset,e);return this._offset+=e,t}_skip(e){return this._offset+=e,this}_scan(e,t){t===void 0&&(t=0);let n=this._offset,i=0;for(;this._dataView.getUint8(this._offset)!==t&&i<e;)i++,this._offset++;return i<e&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+n,i)}},XE=new Uint8Array([0]),dn=[171,75,84,88,32,50,48,187,13,10,26,10];function Kd(s){return new TextDecoder().decode(s)}function qd(s){let e=new Uint8Array(s.buffer,s.byteOffset,dn.length);if(e[0]!==dn[0]||e[1]!==dn[1]||e[2]!==dn[2]||e[3]!==dn[3]||e[4]!==dn[4]||e[5]!==dn[5]||e[6]!==dn[6]||e[7]!==dn[7]||e[8]!==dn[8]||e[9]!==dn[9]||e[10]!==dn[10]||e[11]!==dn[11])throw new Error("Missing KTX 2.0 identifier.");let t=new Au,n=17*Uint32Array.BYTES_PER_ELEMENT,i=new _s(s,dn.length,n,!0);t.vkFormat=i._nextUint32(),t.typeSize=i._nextUint32(),t.pixelWidth=i._nextUint32(),t.pixelHeight=i._nextUint32(),t.pixelDepth=i._nextUint32(),t.layerCount=i._nextUint32(),t.faceCount=i._nextUint32();let r=i._nextUint32();t.supercompressionScheme=i._nextUint32();let a=i._nextUint32(),o=i._nextUint32(),c=i._nextUint32(),l=i._nextUint32(),h=i._nextUint64(),u=i._nextUint64(),d=new _s(s,dn.length+n,3*r*8,!0);for(let q=0;q<r;q++)t.levels.push({levelData:new Uint8Array(s.buffer,s.byteOffset+d._nextUint64(),d._nextUint64()),uncompressedByteLength:d._nextUint64()});let f=new _s(s,a,o,!0),A={vendorId:f._skip(4)._nextUint16(),descriptorType:f._nextUint16(),versionNumber:f._nextUint16(),descriptorBlockSize:f._nextUint16(),colorModel:f._nextUint8(),colorPrimaries:f._nextUint8(),transferFunction:f._nextUint8(),flags:f._nextUint8(),texelBlockDimension:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],bytesPlane:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],samples:[]},g=(A.descriptorBlockSize/4-6)/4;for(let q=0;q<g;q++){let z={bitOffset:f._nextUint16(),bitLength:f._nextUint8(),channelType:f._nextUint8(),samplePosition:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],sampleLower:-1/0,sampleUpper:1/0};64&z.channelType?(z.sampleLower=f._nextInt32(),z.sampleUpper=f._nextInt32()):(z.sampleLower=f._nextUint32(),z.sampleUpper=f._nextUint32()),A.samples[q]=z}t.dataFormatDescriptor.length=0,t.dataFormatDescriptor.push(A);let m=new _s(s,c,l,!0);for(;m._offset<l;){let q=m._nextUint32(),z=m._scan(q),ce=Kd(z);if(t.keyValue[ce]=m._nextUint8Array(q-z.byteLength-1),ce.match(/^ktx/i)){let ae=Kd(t.keyValue[ce]);t.keyValue[ce]=ae.substring(0,ae.lastIndexOf("\0"))}m._skip(q%4?4-q%4:0)}if(u<=0)return t;let p=new _s(s,h,u,!0),_=p._nextUint16(),b=p._nextUint16(),E=p._nextUint32(),I=p._nextUint32(),C=p._nextUint32(),S=p._nextUint32(),w=[];for(let q=0;q<r;q++)w.push({imageFlags:p._nextUint32(),rgbSliceByteOffset:p._nextUint32(),rgbSliceByteLength:p._nextUint32(),alphaSliceByteOffset:p._nextUint32(),alphaSliceByteLength:p._nextUint32()});let B=h+p._offset,x=B+E,y=x+I,L=y+C,F=new Uint8Array(s.buffer,s.byteOffset+B,E),U=new Uint8Array(s.buffer,s.byteOffset+x,I),W=new Uint8Array(s.buffer,s.byteOffset+y,C),k=new Uint8Array(s.buffer,s.byteOffset+L,S);return t.globalData={endpointCount:_,selectorCount:b,imageDescs:w,endpointsData:F,selectorsData:U,tablesData:W,extendedData:k},t}var mu,Si,_u,gu={env:{emscripten_notify_memory_growth:function(s){_u=new Uint8Array(Si.exports.memory.buffer)}}},ic=class{init(){return mu||(mu=typeof fetch<"u"?fetch("data:application/wasm;base64,"+Xd).then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,gu)).then(this._init):WebAssembly.instantiate(Buffer.from(Xd,"base64"),gu).then(this._init),mu)}_init(e){Si=e.instance,gu.env.emscripten_notify_memory_growth(0)}decode(e,t=0){if(!Si)throw new Error("ZSTDDecoder: Await .init() before decoding.");let n=e.byteLength,i=Si.exports.malloc(n);_u.set(e,i),t=t||Number(Si.exports.ZSTD_findDecompressedSize(i,n));let r=Si.exports.malloc(t),a=Si.exports.ZSTD_decompress(r,t,i,n),o=_u.slice(r,r+a);return Si.exports.free(i),Si.exports.free(r),o}},Xd="AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY0AAQMyIFEAMiBg0AIANBHzYCfCADIANB/ABqIANB+ABqIAQgBCAFaiAGGyIEIAEgAmoiAiAEaxAVIgUQAw0AIAMoAnwiBkEfSw0AIAMoAngiB0EJTw0AIABBiCBqIAMgBkGAC0GADCAHEBggA0E0NgJ8IAMgA0H8AGogA0H4AGogBCAFaiIEIAIgBGsQFSIFEAMNACADKAJ8IgZBNEsNACADKAJ4IgdBCk8NACAAQZAwaiADIAZBgA1B4A4gBxAYIANBIzYCfCADIANB/ABqIANB+ABqIAQgBWoiBCACIARrEBUiBRADDQAgAygCfCIGQSNLDQAgAygCeCIHQQpPDQAgACADIAZBwBBB0BEgBxAYIAQgBWoiBEEMaiIFIAJLDQAgAiAFayEFQQAhAgNAIAJBA0cEQCAEKAAAIgZBf2ogBU8NAiAAIAJBAnRqQZzQAWogBjYCACACQQFqIQIgBEEEaiEEDAELCyAEIAFrIQgLIANBgAFqJAAgCAtGAQN/IABBCGohAyAAKAIEIQJBACEAA0AgACACdkUEQCABIAMgAEEDdGotAAJBFktqIQEgAEEBaiEADAELCyABQQggAmt0C4YDAQV/Qbh/IQcCQCADRQ0AIAItAAAiBEUEQCABQQA2AgBBAUG4fyADQQFGGw8LAn8gAkEBaiIFIARBGHRBGHUiBkF/Sg0AGiAGQX9GBEAgA0EDSA0CIAUvAABBgP4BaiEEIAJBA2oMAQsgA0ECSA0BIAItAAEgBEEIdHJBgIB+aiEEIAJBAmoLIQUgASAENgIAIAVBAWoiASACIANqIgNLDQBBbCEHIABBEGogACAFLQAAIgVBBnZBI0EJIAEgAyABa0HAEEHQEUHwEiAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBmCBqIABBCGogBUEEdkEDcUEfQQggASABIAZqIAgbIgEgAyABa0GAC0GADEGAFyAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBoDBqIABBBGogBUECdkEDcUE0QQkgASABIAZqIAgbIgEgAyABa0GADUHgDkGQGSAAKAKM4QEgACgCnOIBIAQQHyIAEAMNACAAIAFqIAJrIQcLIAcLrQMBCn8jAEGABGsiCCQAAn9BUiACQf8BSw0AGkFUIANBDEsNABogAkEBaiELIABBBGohCUGAgAQgA0F/anRBEHUhCkEAIQJBASEEQQEgA3QiB0F/aiIMIQUDQCACIAtGRQRAAkAgASACQQF0Ig1qLwEAIgZB//8DRgRAIAkgBUECdGogAjoAAiAFQX9qIQVBASEGDAELIARBACAKIAZBEHRBEHVKGyEECyAIIA1qIAY7AQAgAkEBaiECDAELCyAAIAQ7AQIgACADOwEAIAdBA3YgB0EBdmpBA2ohBkEAIQRBACECA0AgBCALRkUEQCABIARBAXRqLgEAIQpBACEAA0AgACAKTkUEQCAJIAJBAnRqIAQ6AAIDQCACIAZqIAxxIgIgBUsNAAsgAEEBaiEADAELCyAEQQFqIQQMAQsLQX8gAg0AGkEAIQIDfyACIAdGBH9BAAUgCCAJIAJBAnRqIgAtAAJBAXRqIgEgAS8BACIBQQFqOwEAIAAgAyABEBRrIgU6AAMgACABIAVB/wFxdCAHazsBACACQQFqIQIMAQsLCyEFIAhBgARqJAAgBQvjBgEIf0FsIQcCQCACQQNJDQACQAJAAkACQCABLQAAIgNBA3EiCUEBaw4DAwEAAgsgACgCiOEBDQBBYg8LIAJBBUkNAkEDIQYgASgAACEFAn8CQAJAIANBAnZBA3EiCEF+aiIEQQFNBEAgBEEBaw0BDAILIAVBDnZB/wdxIQQgBUEEdkH/B3EhAyAIRQwCCyAFQRJ2IQRBBCEGIAVBBHZB//8AcSEDQQAMAQsgBUEEdkH//w9xIgNBgIAISw0DIAEtAARBCnQgBUEWdnIhBEEFIQZBAAshBSAEIAZqIgogAksNAgJAIANBgQZJDQAgACgCnOIBRQ0AQQAhAgNAIAJBg4ABSw0BIAJBQGshAgwAAAsACwJ/IAlBA0YEQCABIAZqIQEgAEHw4gFqIQIgACgCDCEGIAUEQCACIAMgASAEIAYQXwwCCyACIAMgASAEIAYQXQwBCyAAQbjQAWohAiABIAZqIQEgAEHw4gFqIQYgAEGo0ABqIQggBQRAIAggBiADIAEgBCACEF4MAQsgCCAGIAMgASAEIAIQXAsQAw0CIAAgAzYCgOIBIABBATYCiOEBIAAgAEHw4gFqNgLw4QEgCUECRgRAIAAgAEGo0ABqNgIMCyAAIANqIgBBiOMBakIANwAAIABBgOMBakIANwAAIABB+OIBakIANwAAIABB8OIBakIANwAAIAoPCwJ/AkACQAJAIANBAnZBA3FBf2oiBEECSw0AIARBAWsOAgACAQtBASEEIANBA3YMAgtBAiEEIAEvAABBBHYMAQtBAyEEIAEQIUEEdgsiAyAEaiIFQSBqIAJLBEAgBSACSw0CIABB8OIBaiABIARqIAMQCyEBIAAgAzYCgOIBIAAgATYC8OEBIAEgA2oiAEIANwAYIABCADcAECAAQgA3AAggAEIANwAAIAUPCyAAIAM2AoDiASAAIAEgBGo2AvDhASAFDwsCfwJAAkACQCADQQJ2QQNxQX9qIgRBAksNACAEQQFrDgIAAgELQQEhByADQQN2DAILQQIhByABLwAAQQR2DAELIAJBBEkgARAhIgJBj4CAAUtyDQFBAyEHIAJBBHYLIQIgAEHw4gFqIAEgB2otAAAgAkEgahAQIQEgACACNgKA4gEgACABNgLw4QEgB0EBaiEHCyAHC0sAIABC+erQ0OfJoeThADcDICAAQgA3AxggAELP1tO+0ser2UI3AxAgAELW64Lu6v2J9eAANwMIIABCADcDACAAQShqQQBBKBAQGgviAgICfwV+IABBKGoiASAAKAJIaiECAn4gACkDACIDQiBaBEAgACkDECIEQgeJIAApAwgiBUIBiXwgACkDGCIGQgyJfCAAKQMgIgdCEol8IAUQGSAEEBkgBhAZIAcQGQwBCyAAKQMYQsXP2bLx5brqJ3wLIAN8IQMDQCABQQhqIgAgAk0EQEIAIAEpAAAQCSADhUIbiUKHla+vmLbem55/fkLj3MqV/M7y9YV/fCEDIAAhAQwBCwsCQCABQQRqIgAgAksEQCABIQAMAQsgASgAAK1Ch5Wvr5i23puef34gA4VCF4lCz9bTvtLHq9lCfkL5893xmfaZqxZ8IQMLA0AgACACSQRAIAAxAABCxc/ZsvHluuonfiADhUILiUKHla+vmLbem55/fiEDIABBAWohAAwBCwsgA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC+8CAgJ/BH4gACAAKQMAIAKtfDcDAAJAAkAgACgCSCIDIAJqIgRBH00EQCABRQ0BIAAgA2pBKGogASACECAgACgCSCACaiEEDAELIAEgAmohAgJ/IAMEQCAAQShqIgQgA2ogAUEgIANrECAgACAAKQMIIAQpAAAQCTcDCCAAIAApAxAgACkAMBAJNwMQIAAgACkDGCAAKQA4EAk3AxggACAAKQMgIABBQGspAAAQCTcDICAAKAJIIQMgAEEANgJIIAEgA2tBIGohAQsgAUEgaiACTQsEQCACQWBqIQMgACkDICEFIAApAxghBiAAKQMQIQcgACkDCCEIA0AgCCABKQAAEAkhCCAHIAEpAAgQCSEHIAYgASkAEBAJIQYgBSABKQAYEAkhBSABQSBqIgEgA00NAAsgACAFNwMgIAAgBjcDGCAAIAc3AxAgACAINwMICyABIAJPDQEgAEEoaiABIAIgAWsiBBAgCyAAIAQ2AkgLCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQEBogAwVBun8LCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQCxogAwVBun8LC6gCAQZ/IwBBEGsiByQAIABB2OABaikDAEKAgIAQViEIQbh/IQUCQCAEQf//B0sNACAAIAMgBBBCIgUQAyIGDQAgACgCnOIBIQkgACAHQQxqIAMgAyAFaiAGGyIKIARBACAFIAYbayIGEEAiAxADBEAgAyEFDAELIAcoAgwhBCABRQRAQbp/IQUgBEEASg0BCyAGIANrIQUgAyAKaiEDAkAgCQRAIABBADYCnOIBDAELAkACQAJAIARBBUgNACAAQdjgAWopAwBCgICACFgNAAwBCyAAQQA2ApziAQwBCyAAKAIIED8hBiAAQQA2ApziASAGQRRPDQELIAAgASACIAMgBSAEIAgQOSEFDAELIAAgASACIAMgBSAEIAgQOiEFCyAHQRBqJAAgBQtnACAAQdDgAWogASACIAAoAuzhARAuIgEQAwRAIAEPC0G4fyECAkAgAQ0AIABB7OABaigCACIBBEBBYCECIAAoApjiASABRw0BC0EAIQIgAEHw4AFqKAIARQ0AIABBkOEBahBDCyACCycBAX8QVyIERQRAQUAPCyAEIAAgASACIAMgBBBLEE8hACAEEFYgAAs/AQF/AkACQAJAIAAoAqDiAUEBaiIBQQJLDQAgAUEBaw4CAAECCyAAEDBBAA8LIABBADYCoOIBCyAAKAKU4gELvAMCB38BfiMAQRBrIgkkAEG4fyEGAkAgBCgCACIIQQVBCSAAKALs4QEiBRtJDQAgAygCACIHQQFBBSAFGyAFEC8iBRADBEAgBSEGDAELIAggBUEDakkNACAAIAcgBRBJIgYQAw0AIAEgAmohCiAAQZDhAWohCyAIIAVrIQIgBSAHaiEHIAEhBQNAIAcgAiAJECwiBhADDQEgAkF9aiICIAZJBEBBuH8hBgwCCyAJKAIAIghBAksEQEFsIQYMAgsgB0EDaiEHAn8CQAJAAkAgCEEBaw4CAgABCyAAIAUgCiAFayAHIAYQSAwCCyAFIAogBWsgByAGEEcMAQsgBSAKIAVrIActAAAgCSgCCBBGCyIIEAMEQCAIIQYMAgsgACgC8OABBEAgCyAFIAgQRQsgAiAGayECIAYgB2ohByAFIAhqIQUgCSgCBEUNAAsgACkD0OABIgxCf1IEQEFsIQYgDCAFIAFrrFINAQsgACgC8OABBEBBaiEGIAJBBEkNASALEEQhDCAHKAAAIAynRw0BIAdBBGohByACQXxqIQILIAMgBzYCACAEIAI2AgAgBSABayEGCyAJQRBqJAAgBgsuACAAECsCf0EAQQAQAw0AGiABRSACRXJFBEBBYiAAIAEgAhA9EAMNARoLQQALCzcAIAEEQCAAIAAoAsTgASABKAIEIAEoAghqRzYCnOIBCyAAECtBABADIAFFckUEQCAAIAEQWwsL0QIBB38jAEEQayIGJAAgBiAENgIIIAYgAzYCDCAFBEAgBSgCBCEKIAUoAgghCQsgASEIAkACQANAIAAoAuzhARAWIQsCQANAIAQgC0kNASADKAAAQXBxQdDUtMIBRgRAIAMgBBAiIgcQAw0EIAQgB2shBCADIAdqIQMMAQsLIAYgAzYCDCAGIAQ2AggCQCAFBEAgACAFEE5BACEHQQAQA0UNAQwFCyAAIAogCRBNIgcQAw0ECyAAIAgQUCAMQQFHQQAgACAIIAIgBkEMaiAGQQhqEEwiByIDa0EAIAMQAxtBCkdyRQRAQbh/IQcMBAsgBxADDQMgAiAHayECIAcgCGohCEEBIQwgBigCDCEDIAYoAgghBAwBCwsgBiADNgIMIAYgBDYCCEG4fyEHIAQNASAIIAFrIQcMAQsgBiADNgIMIAYgBDYCCAsgBkEQaiQAIAcLRgECfyABIAAoArjgASICRwRAIAAgAjYCxOABIAAgATYCuOABIAAoArzgASEDIAAgATYCvOABIAAgASADIAJrajYCwOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEEdCAAbiECCyAAQQh2IgEgAkEYbCIAQYwIaigCAGwgAEGICGooAgBqIgJBA3YgAmogAEGACGooAgAgAEGECGooAgAgAWxqSQs3ACAAIAMgBCAFQYAQEDMiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQMgVBuH8LC78DAQN/IwBBIGsiBSQAIAVBCGogAiADEAYiAhADRQRAIAAgAWoiB0F9aiEGIAUgBBAOIARBBGohAiAFLQACIQMDQEEAIAAgBkkgBUEIahAEGwRAIAAgAiAFQQhqIAMQAkECdGoiBC8BADsAACAFQQhqIAQtAAIQASAAIAQtAANqIgQgAiAFQQhqIAMQAkECdGoiAC8BADsAACAFQQhqIAAtAAIQASAEIAAtAANqIQAMAQUgB0F+aiEEA0AgBUEIahAEIAAgBEtyRQRAIAAgAiAFQQhqIAMQAkECdGoiBi8BADsAACAFQQhqIAYtAAIQASAAIAYtAANqIQAMAQsLA0AgACAES0UEQCAAIAIgBUEIaiADEAJBAnRqIgYvAQA7AAAgBUEIaiAGLQACEAEgACAGLQADaiEADAELCwJAIAAgB08NACAAIAIgBUEIaiADEAIiA0ECdGoiAC0AADoAACAALQADQQFGBEAgBUEIaiAALQACEAEMAQsgBSgCDEEfSw0AIAVBCGogAiADQQJ0ai0AAhABIAUoAgxBIUkNACAFQSA2AgwLIAFBbCAFQQhqEAobIQILCwsgBUEgaiQAIAILkgIBBH8jAEFAaiIJJAAgCSADQTQQCyEDAkAgBEECSA0AIAMgBEECdGooAgAhCSADQTxqIAgQIyADQQE6AD8gAyACOgA+QQAhBCADKAI8IQoDQCAEIAlGDQEgACAEQQJ0aiAKNgEAIARBAWohBAwAAAsAC0EAIQkDQCAGIAlGRQRAIAMgBSAJQQF0aiIKLQABIgtBAnRqIgwoAgAhBCADQTxqIAotAABBCHQgCGpB//8DcRAjIANBAjoAPyADIAcgC2siCiACajoAPiAEQQEgASAKa3RqIQogAygCPCELA0AgACAEQQJ0aiALNgEAIARBAWoiBCAKSQ0ACyAMIAo2AgAgCUEBaiEJDAELCyADQUBrJAALowIBCX8jAEHQAGsiCSQAIAlBEGogBUE0EAsaIAcgBmshDyAHIAFrIRADQAJAIAMgCkcEQEEBIAEgByACIApBAXRqIgYtAAEiDGsiCGsiC3QhDSAGLQAAIQ4gCUEQaiAMQQJ0aiIMKAIAIQYgCyAPTwRAIAAgBkECdGogCyAIIAUgCEE0bGogCCAQaiIIQQEgCEEBShsiCCACIAQgCEECdGooAgAiCEEBdGogAyAIayAHIA4QYyAGIA1qIQgMAgsgCUEMaiAOECMgCUEBOgAPIAkgCDoADiAGIA1qIQggCSgCDCELA0AgBiAITw0CIAAgBkECdGogCzYBACAGQQFqIQYMAAALAAsgCUHQAGokAA8LIAwgCDYCACAKQQFqIQoMAAALAAs0ACAAIAMgBCAFEDYiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQNAVBuH8LCyMAIAA/AEEQdGtB//8DakEQdkAAQX9GBEBBAA8LQQAQAEEBCzsBAX8gAgRAA0AgACABIAJBgCAgAkGAIEkbIgMQCyEAIAFBgCBqIQEgAEGAIGohACACIANrIgINAAsLCwYAIAAQAwsLqBUJAEGICAsNAQAAAAEAAAACAAAAAgBBoAgLswYBAAAAAQAAAAIAAAACAAAAJgAAAIIAAAAhBQAASgAAAGcIAAAmAAAAwAEAAIAAAABJBQAASgAAAL4IAAApAAAALAIAAIAAAABJBQAASgAAAL4IAAAvAAAAygIAAIAAAACKBQAASgAAAIQJAAA1AAAAcwMAAIAAAACdBQAASgAAAKAJAAA9AAAAgQMAAIAAAADrBQAASwAAAD4KAABEAAAAngMAAIAAAABNBgAASwAAAKoKAABLAAAAswMAAIAAAADBBgAATQAAAB8NAABNAAAAUwQAAIAAAAAjCAAAUQAAAKYPAABUAAAAmQQAAIAAAABLCQAAVwAAALESAABYAAAA2gQAAIAAAABvCQAAXQAAACMUAABUAAAARQUAAIAAAABUCgAAagAAAIwUAABqAAAArwUAAIAAAAB2CQAAfAAAAE4QAAB8AAAA0gIAAIAAAABjBwAAkQAAAJAHAACSAAAAAAAAAAEAAAABAAAABQAAAA0AAAAdAAAAPQAAAH0AAAD9AAAA/QEAAP0DAAD9BwAA/Q8AAP0fAAD9PwAA/X8AAP3/AAD9/wEA/f8DAP3/BwD9/w8A/f8fAP3/PwD9/38A/f//AP3//wH9//8D/f//B/3//w/9//8f/f//P/3//38AAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACUAAAAnAAAAKQAAACsAAAAvAAAAMwAAADsAAABDAAAAUwAAAGMAAACDAAAAAwEAAAMCAAADBAAAAwgAAAMQAAADIAAAA0AAAAOAAAADAAEAQeAPC1EBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAEAAAABQAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAQcQQC4sBAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABIAAAAUAAAAFgAAABgAAAAcAAAAIAAAACgAAAAwAAAAQAAAAIAAAAAAAQAAAAIAAAAEAAAACAAAABAAAAAgAAAAQAAAAIAAAAAAAQBBkBIL5gQBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAAAEAAAAEAAAACAAAAAAAAAABAAEBBgAAAAAAAAQAAAAAEAAABAAAAAAgAAAFAQAAAAAAAAUDAAAAAAAABQQAAAAAAAAFBgAAAAAAAAUHAAAAAAAABQkAAAAAAAAFCgAAAAAAAAUMAAAAAAAABg4AAAAAAAEFEAAAAAAAAQUUAAAAAAABBRYAAAAAAAIFHAAAAAAAAwUgAAAAAAAEBTAAAAAgAAYFQAAAAAAABwWAAAAAAAAIBgABAAAAAAoGAAQAAAAADAYAEAAAIAAABAAAAAAAAAAEAQAAAAAAAAUCAAAAIAAABQQAAAAAAAAFBQAAACAAAAUHAAAAAAAABQgAAAAgAAAFCgAAAAAAAAULAAAAAAAABg0AAAAgAAEFEAAAAAAAAQUSAAAAIAABBRYAAAAAAAIFGAAAACAAAwUgAAAAAAADBSgAAAAAAAYEQAAAABAABgRAAAAAIAAHBYAAAAAAAAkGAAIAAAAACwYACAAAMAAABAAAAAAQAAAEAQAAACAAAAUCAAAAIAAABQMAAAAgAAAFBQAAACAAAAUGAAAAIAAABQgAAAAgAAAFCQAAACAAAAULAAAAIAAABQwAAAAAAAAGDwAAACAAAQUSAAAAIAABBRQAAAAgAAIFGAAAACAAAgUcAAAAIAADBSgAAAAgAAQFMAAAAAAAEAYAAAEAAAAPBgCAAAAAAA4GAEAAAAAADQYAIABBgBcLhwIBAAEBBQAAAAAAAAUAAAAAAAAGBD0AAAAAAAkF/QEAAAAADwX9fwAAAAAVBf3/HwAAAAMFBQAAAAAABwR9AAAAAAAMBf0PAAAAABIF/f8DAAAAFwX9/38AAAAFBR0AAAAAAAgE/QAAAAAADgX9PwAAAAAUBf3/DwAAAAIFAQAAABAABwR9AAAAAAALBf0HAAAAABEF/f8BAAAAFgX9/z8AAAAEBQ0AAAAQAAgE/QAAAAAADQX9HwAAAAATBf3/BwAAAAEFAQAAABAABgQ9AAAAAAAKBf0DAAAAABAF/f8AAAAAHAX9//8PAAAbBf3//wcAABoF/f//AwAAGQX9//8BAAAYBf3//wBBkBkLhgQBAAEBBgAAAAAAAAYDAAAAAAAABAQAAAAgAAAFBQAAAAAAAAUGAAAAAAAABQgAAAAAAAAFCQAAAAAAAAULAAAAAAAABg0AAAAAAAAGEAAAAAAAAAYTAAAAAAAABhYAAAAAAAAGGQAAAAAAAAYcAAAAAAAABh8AAAAAAAAGIgAAAAAAAQYlAAAAAAABBikAAAAAAAIGLwAAAAAAAwY7AAAAAAAEBlMAAAAAAAcGgwAAAAAACQYDAgAAEAAABAQAAAAAAAAEBQAAACAAAAUGAAAAAAAABQcAAAAgAAAFCQAAAAAAAAUKAAAAAAAABgwAAAAAAAAGDwAAAAAAAAYSAAAAAAAABhUAAAAAAAAGGAAAAAAAAAYbAAAAAAAABh4AAAAAAAAGIQAAAAAAAQYjAAAAAAABBicAAAAAAAIGKwAAAAAAAwYzAAAAAAAEBkMAAAAAAAUGYwAAAAAACAYDAQAAIAAABAQAAAAwAAAEBAAAABAAAAQFAAAAIAAABQcAAAAgAAAFCAAAACAAAAUKAAAAIAAABQsAAAAAAAAGDgAAAAAAAAYRAAAAAAAABhQAAAAAAAAGFwAAAAAAAAYaAAAAAAAABh0AAAAAAAAGIAAAAAAAEAYDAAEAAAAPBgOAAAAAAA4GA0AAAAAADQYDIAAAAAAMBgMQAAAAAAsGAwgAAAAACgYDBABBpB0L2QEBAAAAAwAAAAcAAAAPAAAAHwAAAD8AAAB/AAAA/wAAAP8BAAD/AwAA/wcAAP8PAAD/HwAA/z8AAP9/AAD//wAA//8BAP//AwD//wcA//8PAP//HwD//z8A//9/AP///wD///8B////A////wf///8P////H////z////9/AAAAAAEAAAACAAAABAAAAAAAAAACAAAABAAAAAgAAAAAAAAAAQAAAAIAAAABAAAABAAAAAQAAAAEAAAABAAAAAgAAAAIAAAACAAAAAcAAAAIAAAACQAAAAoAAAALAEGgIAsDwBBQ";var xu=new WeakMap,bu=0,Eu,ji=class s extends Un{constructor(e){super(e),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new nc,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(e){return this.transcoderPath=e,this}setWorkerLimit(e){return this.workerPool.setWorkerLimit(e),this}async detectSupportAsync(e){return this.workerConfig={astcSupported:await e.hasFeatureAsync("texture-compression-astc"),etc1Supported:await e.hasFeatureAsync("texture-compression-etc1"),etc2Supported:await e.hasFeatureAsync("texture-compression-etc2"),dxtSupported:await e.hasFeatureAsync("texture-compression-bc"),bptcSupported:await e.hasFeatureAsync("texture-compression-bptc"),pvrtcSupported:await e.hasFeatureAsync("texture-compression-pvrtc")},this}detectSupport(e){return e.isWebGPURenderer===!0?this.workerConfig={astcSupported:e.hasFeature("texture-compression-astc"),etc1Supported:e.hasFeature("texture-compression-etc1"),etc2Supported:e.hasFeature("texture-compression-etc2"),dxtSupported:e.hasFeature("texture-compression-bc"),bptcSupported:e.hasFeature("texture-compression-bptc"),pvrtcSupported:e.hasFeature("texture-compression-pvrtc")}:this.workerConfig={astcSupported:e.extensions.has("WEBGL_compressed_texture_astc"),etc1Supported:e.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:e.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:e.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:e.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:e.extensions.has("WEBGL_compressed_texture_pvrtc")||e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},this}init(){if(!this.transcoderPending){let e=new ri(this.manager);e.setPath(this.transcoderPath),e.setWithCredentials(this.withCredentials);let t=e.loadAsync("basis_transcoder.js"),n=new ri(this.manager);n.setPath(this.transcoderPath),n.setResponseType("arraybuffer"),n.setWithCredentials(this.withCredentials);let i=n.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([t,i]).then(([r,a])=>{let o=s.BasisWorker.toString(),c=["/* constants */","let _EngineFormat = "+JSON.stringify(s.EngineFormat),"let _TranscoderFormat = "+JSON.stringify(s.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(s.BasisFormat),"/* basis_transcoder.js */",r,"/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([c])),this.transcoderBinary=a,this.workerPool.setWorkerCreator(()=>{let l=new Worker(this.workerSourceURL),h=this.transcoderBinary.slice(0);return l.postMessage({type:"init",config:this.workerConfig,transcoderBinary:h},[h]),l})}),bu>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),bu++}return this.transcoderPending}load(e,t,n,i){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");let r=new ri(this.manager);r.setResponseType("arraybuffer"),r.setWithCredentials(this.withCredentials),r.load(e,a=>{this.parse(a,t,i)},n,i)}parse(e,t,n){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");if(xu.has(e))return xu.get(e).promise.then(t).catch(n);this._createTexture(e).then(i=>t?t(i):null).catch(n)}_createTextureFrom(e,t){let{faces:n,width:i,height:r,format:a,type:o,error:c,dfdFlags:l}=e;if(o==="error")return Promise.reject(c);let h;if(t.faceCount===6)h=new Fo(n,a,Rt);else{let u=n[0].mipmaps;h=t.layerCount>1?new Po(u,i,r,t.layerCount,a,Rt):new ms(u,i,r,a,Rt)}return h.minFilter=n[0].mipmaps.length===1?mt:un,h.magFilter=mt,h.generateMipmaps=!1,h.needsUpdate=!0,h.colorSpace=fp(t),h.premultiplyAlpha=!!(l&1),h}async _createTexture(e,t={}){let n=qd(new Uint8Array(e));if(n.vkFormat!==0)return jb(n);let i=t,r=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:e,taskConfig:i},[e])).then(a=>this._createTextureFrom(a.data,n));return xu.set(e,{promise:r}),r}dispose(){return this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),bu--,this}};ji.BasisFormat={ETC1S:0,UASTC_4x4:1};ji.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16};ji.EngineFormat={RGBAFormat:Tt,RGBA_ASTC_4x4_Format:er,RGBA_BPTC_Format:qs,RGBA_ETC2_EAC_Format:ea,RGBA_PVRTC_4BPPV1_Format:jr,RGBA_S3TC_DXT5_Format:Ks,RGB_ETC1_Format:Zr,RGB_ETC2_Format:$r,RGB_PVRTC_4BPPV1_Format:Jr,RGBA_S3TC_DXT1_Format:Ws};ji.BasisWorker=function(){let s,e,t,n=_EngineFormat,i=_TranscoderFormat,r=_BasisFormat;self.addEventListener("message",function(A){let g=A.data;switch(g.type){case"init":s=g.config,a(g.transcoderBinary);break;case"transcode":e.then(()=>{try{let{faces:m,buffers:p,width:_,height:b,hasAlpha:E,format:I,dfdFlags:C}=o(g.buffer);self.postMessage({type:"transcode",id:g.id,faces:m,width:_,height:b,hasAlpha:E,format:I,dfdFlags:C},p)}catch(m){console.error(m),self.postMessage({type:"error",id:g.id,error:m.message})}});break}});function a(A){e=new Promise(g=>{t={wasmBinary:A,onRuntimeInitialized:g},BASIS(t)}).then(()=>{t.initializeBasis(),t.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function o(A){let g=new t.KTX2File(new Uint8Array(A));function m(){g.close(),g.delete()}if(!g.isValid())throw m(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");let p=g.isUASTC()?r.UASTC_4x4:r.ETC1S,_=g.getWidth(),b=g.getHeight(),E=g.getLayers()||1,I=g.getLevels(),C=g.getFaces(),S=g.getHasAlpha(),w=g.getDFDFlags(),{transcoderFormat:B,engineFormat:x}=u(p,_,b,S);if(!_||!b||!I)throw m(),new Error("THREE.KTX2Loader:	Invalid texture");if(!g.startTranscoding())throw m(),new Error("THREE.KTX2Loader: .startTranscoding failed");let y=[],L=[];for(let F=0;F<C;F++){let U=[];for(let W=0;W<I;W++){let k=[],q,z;for(let ae=0;ae<E;ae++){let de=g.getImageLevelInfo(W,ae,F);F===0&&W===0&&ae===0&&(de.origWidth%4!==0||de.origHeight%4!==0)&&console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."),I>1?(q=de.origWidth,z=de.origHeight):(q=de.width,z=de.height);let ke=new Uint8Array(g.getImageTranscodedSizeInBytes(W,ae,0,B));if(!g.transcodeImage(ke,W,ae,F,B,0,-1,-1))throw m(),new Error("THREE.KTX2Loader: .transcodeImage failed.");k.push(ke)}let ce=f(k);U.push({data:ce,width:q,height:z}),L.push(ce.buffer)}y.push({mipmaps:U,width:_,height:b,format:x})}return m(),{faces:y,buffers:L,width:_,height:b,hasAlpha:S,format:x,dfdFlags:w}}let c=[{if:"astcSupported",basisFormat:[r.UASTC_4x4],transcoderFormat:[i.ASTC_4x4,i.ASTC_4x4],engineFormat:[n.RGBA_ASTC_4x4_Format,n.RGBA_ASTC_4x4_Format],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[i.BC7_M5,i.BC7_M5],engineFormat:[n.RGBA_BPTC_Format,n.RGBA_BPTC_Format],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[i.BC1,i.BC3],engineFormat:[n.RGBA_S3TC_DXT1_Format,n.RGBA_S3TC_DXT5_Format],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[i.ETC1,i.ETC2],engineFormat:[n.RGB_ETC2_Format,n.RGBA_ETC2_EAC_Format],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[i.ETC1],engineFormat:[n.RGB_ETC1_Format],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[i.PVRTC1_4_RGB,i.PVRTC1_4_RGBA],engineFormat:[n.RGB_PVRTC_4BPPV1_Format,n.RGBA_PVRTC_4BPPV1_Format],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0}],l=c.sort(function(A,g){return A.priorityETC1S-g.priorityETC1S}),h=c.sort(function(A,g){return A.priorityUASTC-g.priorityUASTC});function u(A,g,m,p){let _,b,E=A===r.ETC1S?l:h;for(let I=0;I<E.length;I++){let C=E[I];if(s[C.if]&&C.basisFormat.includes(A)&&!(p&&C.transcoderFormat.length<2)&&!(C.needsPowerOfTwo&&!(d(g)&&d(m))))return _=C.transcoderFormat[p?1:0],b=C.engineFormat[p?1:0],{transcoderFormat:_,engineFormat:b}}return console.warn("THREE.KTX2Loader: No suitable compressed texture format found. Decoding to RGBA32."),_=i.RGBA32,b=n.RGBAFormat,{transcoderFormat:_,engineFormat:b}}function d(A){return A<=2?!0:(A&A-1)===0&&A!==0}function f(A){if(A.length===1)return A[0];let g=0;for(let _=0;_<A.length;_++){let b=A[_];g+=b.byteLength}let m=new Uint8Array(g),p=0;for(let _=0;_<A.length;_++){let b=A[_];m.set(b,p),p+=b.byteLength}return m}};var Jb=new Set([Tt,Xi,Mi]),yu={109:Tt,97:Tt,37:Tt,43:Tt,103:Xi,83:Xi,16:Xi,22:Xi,100:Mi,76:Mi,15:Mi,9:Mi,1000066e3:er,166:tr,165:tr},vu={109:Vt,97:bt,37:Rt,43:Rt,103:Vt,83:bt,16:Rt,22:Rt,100:Vt,76:bt,15:Rt,9:Rt,1000066e3:bt,166:Rt,165:Rt};async function jb(s){let{vkFormat:e}=s;if(yu[e]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");let t;s.supercompressionScheme===2&&(Eu||(Eu=new Promise(async r=>{let a=new ic;await a.init(),r(a)})),t=await Eu);let n=[];for(let r=0;r<s.levels.length;r++){let a=Math.max(1,s.pixelWidth>>r),o=Math.max(1,s.pixelHeight>>r),c=s.pixelDepth?Math.max(1,s.pixelDepth>>r):0,l=s.levels[r],h;if(s.supercompressionScheme===0)h=l.levelData;else if(s.supercompressionScheme===2)h=t.decode(l.levelData,l.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");let u;vu[e]===Vt?u=new Float32Array(h.buffer,h.byteOffset,h.byteLength/Float32Array.BYTES_PER_ELEMENT):vu[e]===bt?u=new Uint16Array(h.buffer,h.byteOffset,h.byteLength/Uint16Array.BYTES_PER_ELEMENT):u=h,n.push({data:u,width:a,height:o,depth:c})}let i;if(Jb.has(yu[e]))i=s.pixelDepth===0?new qn(n[0].data,s.pixelWidth,s.pixelHeight):new na(n[0].data,s.pixelWidth,s.pixelHeight,s.pixelDepth);else{if(s.pixelDepth>0)throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");i=new ms(n,s.pixelWidth,s.pixelHeight)}return i.mipmaps=n,i.type=vu[e],i.format=yu[e],i.colorSpace=fp(s),i.needsUpdate=!0,Promise.resolve(i)}function fp(s){let e=s.dataFormatDescriptor[0];return e.colorPrimaries===1?e.transferFunction===2?_t:Et:e.colorPrimaries===10?e.transferFunction===2?pa:Ar:e.colorPrimaries===0?Mn:(console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${e.colorPrimaries}"`),Mn)}var sc=class extends zo{constructor(e){super(e),this.type=bt}parse(e){let a=function(w,B){switch(w){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(B||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(B||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(B||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(B||""))}},u=function(w,B,x){B=B||1024;let L=w.pos,F=-1,U=0,W="",k=String.fromCharCode.apply(null,new Uint16Array(w.subarray(L,L+128)));for(;0>(F=k.indexOf(`
`))&&U<B&&L<w.byteLength;)W+=k,U+=k.length,L+=128,k+=String.fromCharCode.apply(null,new Uint16Array(w.subarray(L,L+128)));return-1<F?(x!==!1&&(w.pos+=U+F+1),W+k.slice(0,F)):!1},d=function(w){let B=/^#\?(\S+)/,x=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,y=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*FORMAT=(\S+)\s*$/,F=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,U={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},W,k;for((w.pos>=w.byteLength||!(W=u(w)))&&a(1,"no header found"),(k=W.match(B))||a(3,"bad initial token"),U.valid|=1,U.programtype=k[1],U.string+=W+`
`;W=u(w),W!==!1;){if(U.string+=W+`
`,W.charAt(0)==="#"){U.comments+=W+`
`;continue}if((k=W.match(x))&&(U.gamma=parseFloat(k[1])),(k=W.match(y))&&(U.exposure=parseFloat(k[1])),(k=W.match(L))&&(U.valid|=2,U.format=k[1]),(k=W.match(F))&&(U.valid|=4,U.height=parseInt(k[1],10),U.width=parseInt(k[2],10)),U.valid&2&&U.valid&4)break}return U.valid&2||a(3,"missing format specifier"),U.valid&4||a(3,"missing image size specifier"),U},f=function(w,B,x){let y=B;if(y<8||y>32767||w[0]!==2||w[1]!==2||w[2]&128)return new Uint8Array(w);y!==(w[2]<<8|w[3])&&a(3,"wrong scanline width");let L=new Uint8Array(4*B*x);L.length||a(4,"unable to allocate buffer space");let F=0,U=0,W=4*y,k=new Uint8Array(4),q=new Uint8Array(W),z=x;for(;z>0&&U<w.byteLength;){U+4>w.byteLength&&a(1),k[0]=w[U++],k[1]=w[U++],k[2]=w[U++],k[3]=w[U++],(k[0]!=2||k[1]!=2||(k[2]<<8|k[3])!=y)&&a(3,"bad rgbe scanline format");let ce=0,ae;for(;ce<W&&U<w.byteLength;){ae=w[U++];let ke=ae>128;if(ke&&(ae-=128),(ae===0||ce+ae>W)&&a(3,"bad scanline data"),ke){let ze=w[U++];for(let X=0;X<ae;X++)q[ce++]=ze}else q.set(w.subarray(U,U+ae),ce),ce+=ae,U+=ae}let de=y;for(let ke=0;ke<de;ke++){let ze=0;L[F]=q[ke+ze],ze+=y,L[F+1]=q[ke+ze],ze+=y,L[F+2]=q[ke+ze],ze+=y,L[F+3]=q[ke+ze],F+=4}z--}return L},A=function(w,B,x,y){let L=w[B+3],F=Math.pow(2,L-128)/255;x[y+0]=w[B+0]*F,x[y+1]=w[B+1]*F,x[y+2]=w[B+2]*F,x[y+3]=1},g=function(w,B,x,y){let L=w[B+3],F=Math.pow(2,L-128)/255;x[y+0]=Aa.toHalfFloat(Math.min(w[B+0]*F,65504)),x[y+1]=Aa.toHalfFloat(Math.min(w[B+1]*F,65504)),x[y+2]=Aa.toHalfFloat(Math.min(w[B+2]*F,65504)),x[y+3]=Aa.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;let p=d(m),_=p.width,b=p.height,E=f(m.subarray(m.pos),_,b),I,C,S;switch(this.type){case Vt:S=E.length/4;let w=new Float32Array(S*4);for(let x=0;x<S;x++)A(E,x*4,w,x*4);I=w,C=Vt;break;case bt:S=E.length/4;let B=new Uint16Array(S*4);for(let x=0;x<S;x++)g(E,x*4,B,x*4);I=B,C=bt;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:_,height:b,data:I,header:p.string,gamma:p.gamma,exposure:p.exposure,type:C}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(a,o){switch(a.type){case Vt:case bt:a.colorSpace=Et,a.minFilter=mt,a.magFilter=mt,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,r,n,i)}};var dp=(function(){"use strict";var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:s,r,a=WebAssembly.instantiate(o(i),{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var _=new Uint8Array(p.length),b=0;b<p.length;++b){var E=p.charCodeAt(b);_[b]=E>96?E-97:E>64?E-39:E+4}for(var I=0,b=0;b<p.length;++b)_[I++]=_[b]<60?n[_[b]]:(_[b]-60)*64+_[++b];return _.buffer.slice(0,I)}function c(p,_,b,E,I,C){var S=r.exports.sbrk,w=b+3&-4,B=S(w*E),x=S(I.length),y=new Uint8Array(r.exports.memory.buffer);y.set(I,x);var L=p(B,b,E,x,I.length);if(L==0&&C&&C(B,w,E),_.set(y.subarray(B,B+b*E)),S(B-S(0)),L!=0)throw new Error("Malformed buffer data: "+L)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var _={object:new Worker(p),pending:0,requests:{}};return _.object.onmessage=function(b){var E=b.data;_.pending-=E.count,_.requests[E.id][E.action](E.value),delete _.requests[E.id]},_}function A(p){for(var _="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),b=new Blob([_],{type:"text/javascript"}),E=URL.createObjectURL(b),I=0;I<p;++I)u[I]=f(E);URL.revokeObjectURL(E)}function g(p,_,b,E,I){for(var C=u[0],S=1;S<u.length;++S)u[S].pending<C.pending&&(C=u[S]);return new Promise(function(w,B){var x=new Uint8Array(b),y=d++;C.pending+=p,C.requests[y]={resolve:w,reject:B},C.object.postMessage({id:y,count:p,size:_,source:x,mode:E,filter:I},[x.buffer])})}function m(p){a.then(function(){var _=p.data;try{var b=new Uint8Array(_.count*_.size);c(r.exports[_.mode],b,_.count,_.size,_.source,r.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:b},[b.buffer])}catch(E){self.postMessage({id:_.id,count:_.count,action:"reject",value:E})}})}return{ready:a,supported:!0,useWorkers:function(p){A(p)},decodeVertexBuffer:function(p,_,b,E,I){c(r.exports.meshopt_decodeVertexBuffer,p,_,b,E,r.exports[l[I]])},decodeIndexBuffer:function(p,_,b,E){c(r.exports.meshopt_decodeIndexBuffer,p,_,b,E)},decodeIndexSequence:function(p,_,b,E){c(r.exports.meshopt_decodeIndexSequence,p,_,b,E)},decodeGltfBuffer:function(p,_,b,E,I,C){c(r.exports[h[I]],p,_,b,E,r.exports[l[C]])},decodeGltfBufferAsync:function(p,_,b,E,I){return u.length>0?g(p,_,b,h[E],l[I]):a.then(function(){var C=new Uint8Array(p*_);return c(r.exports[h[E]],C,p,_,b,r.exports[l[I]]),C})}}})();async function pp(s,e,t){let n="assets/",i=await(await fetch(n+"manifest.json",{cache:"no-cache"})).json(),r=i.files.filter(_=>_.tier==="common"||_.tier===e),a=r.reduce((_,b)=>_+b.bytes,0),o=new Map,c=()=>{let _=0;for(let b of o.values())_+=b;t&&t(Math.min(1,_/a),_,a)},l=new ji().setTranscoderPath(n+"basis/").detectSupport(s),h=new ec().setKTX2Loader(l).setMeshoptDecoder(dp),u=new sc().setDataType(bt),d="?v="+i.version,f=async _=>{let b=await fetch(n+_.path+d);if(!b.ok)throw new Error("HTTP "+b.status+" "+_.path);if(!b.body||!b.body.getReader){let B=await b.arrayBuffer();return o.set(_.path,_.bytes),c(),B}let E=b.body.getReader(),I=[],C=0;for(;;){let{done:B,value:x}=await E.read();if(B)break;I.push(x),C+=x.length,o.set(_.path,Math.min(C,_.bytes)),c()}let S=new Uint8Array(C),w=0;for(let B of I)S.set(B,w),w+=B.length;return o.set(_.path,_.bytes),c(),S.buffer},A={tier:e,glb:{},tex:{},env:null},g=async(_,b)=>{if(_.kind==="glb")A.glb[_.key]=await h.parseAsync(b,n);else if(_.kind==="ktx2")A.tex[_.key]=await new Promise((E,I)=>l.parse(b,E,I));else if(_.kind==="hdr"){let E=u.parse(b),I=new qn(E.data,E.width,E.height,Tt,E.type);I.colorSpace=Et,I.minFilter=I.magFilter=mt,I.generateMipmaps=!1,I.flipY=!0,I.mapping=qr,I.needsUpdate=!0,A.env=I}else if(_.kind==="img"){let E=new Blob([b],{type:_.path.endsWith(".webp")?"image/webp":"image/jpeg"}),I;try{I=await createImageBitmap(E,{imageOrientation:"flipY",premultiplyAlpha:"none"})}catch{I=await new Promise((w,B)=>{let x=new Image;x.onload=()=>w(x),x.onerror=B,x.src=URL.createObjectURL(E)}),I.__noflip=!0}let C=new Ot(I);I.__noflip?C.flipY=!0:C.flipY=!1,C.needsUpdate=!0,A.tex[_.key]=C}},m=r.slice().sort((_,b)=>b.bytes-_.bytes),p=async()=>{for(;m.length;){let _=m.shift();try{await g(_,await f(_))}catch(b){console.warn("asset failed",_.path,b),A.missing=(A.missing||0)+1,o.set(_.path,_.bytes),c()}}};return await Promise.all([p(),p(),p(),p(),p()]),A.total=a,A}function Ii(s,e,t={}){let n=s.tex[e+"_color"],i=s.tex[e+"_normal"],r=s.tex[e+"_orm"];if(!n)return new ft({color:7829367,roughness:.9,...t});for(let a of[n,i,r])a&&(a.wrapS=a.wrapT=Zt,a.anisotropy=8);return n.colorSpace=_t,new ft({map:n,normalMap:i||null,roughnessMap:r||null,metalnessMap:r||null,aoMap:r||null,roughness:1,metalness:r?1:0,...t})}var rc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Yn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Zb=new Hi(-1,1,1,-1,0,1),Mu=class extends Bt{constructor(){super(),this.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ot([0,2,0,0,2,0],2))}},$b=new Mu,xr=class{constructor(e){this._mesh=new Re($b,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Zb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var br=class extends Yn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof St?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=mr.clone(e.uniforms),this.material=new St({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new xr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ga=class extends Yn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},ac=class extends Yn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var oc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ne);this._width=n.width,this._height=n.height,t=new en(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:bt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new br(rc),this.copyPass.material.blending=ti,this.clock=new Xo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ga!==void 0&&(a instanceof ga?n=!0:a instanceof ac&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var cc=class extends Yn{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ee}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}};var Ap={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ee(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Er=class s extends Yn{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ne(e.x,e.y):new ne(256,256),this.clearColor=new ee(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new en(r,a,{type:bt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new en(r,a,{type:bt});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new en(r,a,{type:bt});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=Ap;this.highPassUniforms=mr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new St({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ne(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=rc;this.copyUniforms=mr.clone(h.uniforms),this.blendMaterial=new St({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ds,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ee,this.oldClearAlpha=1,this.basic=new _n,this.fsQuad=new xr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new ne(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new St({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ne(.5,.5)},direction:{value:new ne(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new St({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Er.BlurDirectionX=new ne(1,0);Er.BlurDirectionY=new ne(0,1);var eE={uniforms:{tDiffuse:{value:null},exposure:{value:1},time:{value:0},vig:{value:.32},grain:{value:.035},dmg:{value:0},sat:{value:.8},sunUV:{value:new T(.5,.5,0)},aspect:{value:1.7},zoom:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float exposure, time, vig, grain, dmg, sat, aspect, zoom; uniform vec3 sunUV; varying vec2 vUv;
    vec3 aces(vec3 x){ const mat3 I = mat3(0.59719,0.07600,0.02840,0.35458,0.90834,0.13383,0.04823,0.01566,0.83777); const mat3 O = mat3(1.60475,-0.10208,-0.00327,-0.53108,1.10813,-0.07276,-0.07367,-0.00605,1.07602);
      x = I * x; vec3 a = x * (x + 0.0245786) - 0.000090537; vec3 b = x * (0.983729 * x + 0.4329510) + 0.238081; return clamp(O * (a / b), 0.0, 1.0); }
    float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main(){
      vec2 uv = vUv; vec2 c = uv - 0.5;
      // slight chromatic fringe toward the edges
      float ca = 0.0016 * dot(c, c) * 4.0;
      vec3 col = vec3(texture2D(tDiffuse, uv - c * ca).r, texture2D(tDiffuse, uv).g, texture2D(tDiffuse, uv + c * ca).b);
      // sun glare / veil
      if (sunUV.z > 0.0) { vec2 d = (uv - sunUV.xy) * vec2(aspect, 1.0); float r = length(d); col += vec3(1.0, 0.72, 0.45) * (0.012 / (r * 8.0 + 0.2) + 0.02 * exp(-r * 4.0)) * sunUV.z; }
      col *= exposure;
      col = aces(col);
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(l), col, sat);
      // teal shadows / warm highlights
      col += (vec3(-0.012, 0.004, 0.018)) * (1.0 - smoothstep(0.0, 0.45, l)) + vec3(0.02, 0.008, -0.018) * smoothstep(0.45, 1.0, l);
      col = (col - 0.45) * 1.13 + 0.45;
      float v = smoothstep(0.85, 0.25, length(c * vec2(1.0, 0.85)) * (1.0 + vig));
      col *= mix(1.0 - vig, 1.0, v);
      col = mix(col, col * vec3(1.15, 0.55, 0.5), dmg * smoothstep(0.15, 0.6, length(c)));
      col = pow(max(col, 0.0), vec3(1.0 / 2.2));
      col += (h(uv * 1000.0 + fract(time) * 37.0) - 0.5) * grain;
      gl_FragColor = vec4(col, 1.0);
    }`};function mp(s,e){let t=new Mo({canvas:s,antialias:!1,powerPreference:"high-performance",stencil:!1});return t.outputColorSpace=Et,t.toneMapping=ni,t.shadowMap.enabled=!0,t.shadowMap.type=Mh,t}function gp(s,e,t,n){let i=new en(1,1,{type:bt,samples:n==="high"?4:0}),r=new oc(s,i);r.addPass(new cc(e,t));let a=null;n!=="low"&&(a=new Er(new ne(256,256),.22,.4,1.6),r.addPass(a));let o=new br(eE);return r.addPass(o),{comp:r,bloom:a,grade:o}}var yr={rot:3.1,cut:.5596,gain:.62},Cu=`
uniform sampler2D skyTex; uniform float skyRot; uniform float skyCut; uniform float skyGain;
vec3 skyLookup(vec3 d){
  d = normalize(d);
  float th = atan(d.z, d.x) + skyRot;
  float u = th * 0.15915494 + 0.5;
  float el = asin(clamp(max(d.y, 0.002), -1.0, 1.0));
  float vtop = 0.5 - el * 0.31830989;
  float t = min(vtop / skyCut, 0.995);
  vec3 c = texture2D(skyTex, vec2(fract(u), 1.0 - t)).rgb;
  c = pow(c, vec3(2.2));
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c *= 1.0 + 3.0 * smoothstep(0.7, 0.98, l);
  return c * skyGain;
}`;function wu(s){return{skyTex:{value:s},skyRot:{value:yr.rot},skyCut:{value:yr.cut},skyGain:{value:yr.gain}}}function _p(s){s.wrapS=Zt,s.minFilter=un,s.generateMipmaps=!0,s.anisotropy=4,s.needsUpdate=!0;let e=new St({uniforms:wu(s),depthWrite:!1,side:an,fog:!1,vertexShader:"varying vec3 vD; void main(){ vD = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:Cu+"varying vec3 vD; void main(){ vec3 d = normalize(vD); vec3 c = skyLookup(vec3(d.x, max(d.y, 0.0), d.z)); gl_FragColor = vec4(c, 1.0); }"}),t=new Re(new si(4e3,48,24),e);return t.renderOrder=-10,t.frustumCulled=!1,t}function xp(s){let t=.10699999999999998*Math.PI*2-yr.rot,n=s*Math.PI/180;return new T(Math.cos(t)*Math.cos(n),Math.sin(n),Math.sin(t)*Math.cos(n))}function bp(s){try{let e=s.image,t=256,n=64,i=document.createElement("canvas");i.width=t,i.height=n;let r=i.getContext("2d");r.drawImage(e,0,0,t,n);let a=!s.flipY,o=Math.floor((a?1-.9:.86)*n),c=Math.ceil((a?1-.86:.9)*n),l=r.getImageData(0,o,t,Math.max(1,c-o)).data,h=0,u=0,d=0,f=0;for(let A=0;A<l.length;A+=4)h+=Math.pow(l[A]/255,2.2),u+=Math.pow(l[A+1]/255,2.2),d+=Math.pow(l[A+2]/255,2.2),f++;return new ee(h/f,u/f,d/f)}catch{return new ee(.35,.33,.36)}}var yt={x0:-380,x1:380,z0:-470,z1:150},dt={x:0,z:4,h:8};function lc(s,e){let t=Math.sin(s*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function tE(s,e){let t=Math.floor(s),n=Math.floor(e),i=s-t,r=e-n,a=i*i*(3-2*i),o=r*r*(3-2*r),c=lc(t,n),l=lc(t+1,n),h=lc(t,n+1),u=lc(t+1,n+1);return c+(l-c)*a+(h-c)*o+(c-l-h+u)*a*o}function Su(s,e,t=4){let n=0,i=.5,r=1,a=0;for(let o=0;o<t;o++)n+=i*tE(s*r,e*r),a+=i,i*=.5,r*=2.03;return n/a}var _a=(s,e,t)=>{let n=Math.min(1,Math.max(0,(t-s)/(e-s)));return n*n*(3-2*n)},nE=s=>9*Math.sin(s*.0125+.4)+4*Math.sin(s*.033+1.3);function iE(s){if(s>12)return 8+(s-12)*.03;if(s>-22){let t=(s+22)/34,n=t*t*(3-2*t);return 2+6*(.35*t+.65*n)}if(s>-68){let t=(s+68)/46;return 2*Math.pow(t,1.25)}let e=-68-s;return Math.max(-22,-e*.055-Math.max(0,e-60)*.06)}function Me(s,e){let t=e+nE(s)*_a(10,60,Math.abs(s)),n=iE(t),i=Su(s*.045,e*.045,3)-.5;n+=i*(t>-68?t>-22?1.2:.45:.8),t>8&&(n+=(Su(s*.012+3,e*.012,3)-.5)*4*_a(8,40,t));let r=Math.abs(s),a=_a(210,330,r);a>0&&(n=n+a*(28+10*Su(s*.02,e*.02))*_a(-330,-150,t));let o=s-dt.x,c=e-dt.z,l=Math.sqrt(o*o+c*c),h=_a(14,7,l);return n=n*(1-h)+dt.h*h,n}function hc(s,e,t){let i=Me(s+.8,e)-Me(s-.8,e),r=Me(s,e+.8)-Me(s,e-.8);return t.set(-i,2*.8,-r).normalize(),t}var xa=[{d:[.12,1],A:.66,L:42,Q:.55},{d:[-.38,1],A:.432,L:23,Q:.5},{d:[.55,.85],A:.264,L:13.5,Q:.45},{d:[-.7,.6],A:.144,L:7.7,Q:.4},{d:[.25,1],A:.084,L:4.2,Q:.3}];for(let s of xa){let e=Math.hypot(s.d[0],s.d[1]);s.d=[s.d[0]/e,s.d[1]/e],s.k=2*Math.PI/s.L,s.c=Math.sqrt(9.8/s.k)}var sE=s=>.18+.82*Math.min(1,Math.max(0,(s-.3)/9));function ba(s,e,t){let n=-Me(s,e),i=n<-.5?0:sE(n),r=0;for(let a of xa){let o=a.k*(a.d[0]*s+a.d[1]*e-a.c*t);r+=a.A*Math.sin(o)}return r*i}function Ep(s){let e=s,t=Math.round(s*(yt.z1-yt.z0)/(yt.x1-yt.x0)),n=new Uint8Array(e*t*4);for(let r=0;r<t;r++)for(let a=0;a<e;a++){let o=yt.x0+(a+.5)/e*(yt.x1-yt.x0),c=yt.z0+(r+.5)/t*(yt.z1-yt.z0),l=Math.max(-24,Math.min(8,Me(o,c)));n[(r*e+a)*4]=Math.round((l+24)/32*255),n[(r*e+a)*4+3]=255}let i=new qn(n,e,t,Tt,Rt);return i.minFilter=i.magFilter=mt,i.wrapS=i.wrapT=gn,i.needsUpdate=!0,i}function Iu(s,e){let t=[];for(let l=-s;l<=s;l++){let h=l/s;t.push(Math.sign(h)*(Math.pow(Math.abs(h),2.6)*5200+Math.abs(h)*380))}let n=[];for(let l=0;l<=e;l++){let h=l/e;n.push(80-(Math.pow(h,2.8)*6500+h*420))}let i=new Bt,r=new Float32Array(t.length*n.length*3),a=0;for(let l of n)for(let h of t)r[a++]=h,r[a++]=0,r[a++]=l;let o=[],c=t.length;for(let l=0;l<n.length-1;l++)for(let h=0;h<c-1;h++){let u=l*c+h,d=u+1,f=u+c,A=f+1;o.push(u,d,f,d,A,f)}return i.setAttribute("position",new Pt(r,3)),i.setIndex(o),i.boundingSphere=new fn(new T,1e5),i}function yp(s,e,t,n,i,r){let a=s.tex.waternormals;a.wrapS=a.wrapT=Zt,a.anisotropy=4,a.needsUpdate=!0;let o=s.tex.fx_foam;o.wrapS=o.wrapT=Zt,o.needsUpdate=!0;let c=xa.map(g=>new Ye(g.d[0],g.d[1],g.A,g.Q)),l=xa.map(g=>new ne(g.k,g.c)),h={...wu(s.tex.sky_bg),time:{value:0},nTex:{value:a},foamTex:{value:o},hTex:{value:e},hB:{value:new Ye(yt.x0,yt.z0,yt.x1-yt.x0,yt.z1-yt.z0)},sunDir:{value:t.clone()},sunCol:{value:n.clone()},fogCol:{value:i.clone()},fogDen:{value:28e-5},wv:{value:c},wk:{value:l}},u=xa.length,d=new St({uniforms:h,transparent:!0,depthWrite:!0,vertexShader:`
      uniform float time; uniform vec4 wv[${u}]; uniform vec2 wk[${u}]; uniform sampler2D hTex; uniform vec4 hB;
      varying vec3 vWP; varying vec3 vN; varying float vCrest;
      float depthAt(vec2 p){ vec2 uv = (p - hB.xy) / hB.zw; if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) return 40.0; return 24.0 - texture2D(hTex, uv).r * 32.0; }
      void main(){
        vec3 p = position; float dep = depthAt(p.xz);
        float s = 0.18 + 0.82 * clamp((dep - 0.3) / 9.0, 0.0, 1.0);
        vec3 d = vec3(0.0); vec3 n = vec3(0.0, 1.0, 0.0); float crest = 0.0;
        for (int i = 0; i < ${u}; i++) {
          vec4 w = wv[i]; float k = wk[i].x; float c = wk[i].y; float A = w.z * s;
          float f = k * (dot(w.xy, p.xz) - c * time); float cf = cos(f), sf = sin(f);
          float Q = w.w / (k * max(w.z, 0.001) * ${u}.0);
          d.x += Q * A * w.x * cf; d.z += Q * A * w.y * cf; d.y += A * sf;
          n.x -= w.x * k * A * cf; n.z -= w.y * k * A * cf; n.y -= Q * k * A * sf;
          crest += sf * w.z;
        }
        p += d; vWP = p; vN = normalize(n); vCrest = crest;
        gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
      }`,fragmentShader:Cu+`
      uniform float time; uniform sampler2D nTex; uniform sampler2D foamTex; uniform sampler2D hTex; uniform vec4 hB;
      uniform vec3 sunDir; uniform vec3 sunCol; uniform vec3 fogCol; uniform float fogDen;
      varying vec3 vWP; varying vec3 vN; varying float vCrest;
      float depthAt(vec2 p){ vec2 uv = (p - hB.xy) / hB.zw; if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) return 40.0; return 24.0 - texture2D(hTex, uv).r * 32.0; }
      void main(){
        vec3 V = cameraPosition - vWP; float dist = length(V); V /= dist;
        float dep = depthAt(vWP.xz) + vWP.y;
        vec3 n1 = texture2D(nTex, vWP.xz * 0.031 + vec2(time * 0.011, time * 0.017)).xyz * 2.0 - 1.0;
        vec3 n2 = texture2D(nTex, vWP.xz * 0.093 + vec2(-time * 0.019, time * 0.029)).xyz * 2.0 - 1.0;
        vec3 n3 = texture2D(nTex, vWP.xz * 0.0061 + vec2(time * 0.003, -time * 0.004)).xyz * 2.0 - 1.0;
        float detail = 1.0 / (1.0 + dist * 0.0035);
        vec3 N = normalize(vN + vec3(n1.x + n2.x * 0.7, 0.0, n1.y + n2.y * 0.7) * 0.44 * detail + vec3(n3.x, 0.0, n3.y) * 0.24);
        float ndv = max(dot(N, V), 0.0);
        float fres = 0.02 + 0.98 * pow(1.0 - ndv, 5.0);
        vec3 R = reflect(-V, N); R.y = abs(R.y) + 0.01;
        vec3 refl = skyLookup(R) * 0.82;
        float sd = max(dot(R, sunDir), 0.0);
        vec3 spec = sunCol * (pow(sd, 1400.0) * 24.0 + pow(sd, 160.0) * 1.1 + pow(sd, 18.0) * 0.05);
        vec3 deep = vec3(0.005, 0.016, 0.024), shallow = vec3(0.04, 0.085, 0.072);
        vec3 body = mix(shallow, deep, smoothstep(0.0, 12.0, dep));
        // light shining through the thin backs of the crests when looking toward the sun
        float sss = pow(max(dot(V, -sunDir) * 0.5 + 0.5, 0.0), 2.5) * clamp(vCrest * 1.9 - 0.15, 0.0, 1.0) * smoothstep(0.6, 3.0, dep);
        body += vec3(0.05, 0.21, 0.16) * sss * (0.6 + sunCol * 0.25);
        body *= fogCol * 3.2 + 0.15;
        vec3 col = mix(body, refl, fres) + spec;
        // foam: shoreline wash, surf lines and whitecaps
        float f1 = texture2D(foamTex, vWP.xz * 0.075 + vec2(time * 0.013, time * 0.02)).r;
        float f2 = texture2D(foamTex, vWP.xz * 0.21 - vec2(time * 0.03, time * 0.01)).r;
        float fp = f1 * 0.6 + f2 * 0.5;
        float shore = 1.0 - smoothstep(0.0, 0.22, dep);
        float surf = pow(0.5 + 0.5 * sin(dep * 3.4 - time * 1.25 + f1 * 1.2), 9.0) * smoothstep(0.1, 0.4, dep) * (1.0 - smoothstep(0.6, 2.6, dep));
        surf += pow(0.5 + 0.5 * sin(dep * 1.25 - time * 0.9 + f1 * 0.8 + vWP.x * 0.01), 16.0) * smoothstep(1.2, 2.2, dep) * (1.0 - smoothstep(4.0, 7.5, dep)) * 0.9;
        float caps = smoothstep(0.58, 0.92, vCrest) * smoothstep(3.0, 10.0, dep) * 0.8;
        float foam = clamp((shore * 0.9 + surf * 0.95 + caps) * smoothstep(0.45, 1.05, fp + shore * 0.25), 0.0, 1.0);
        vec3 foamCol = fogCol * 3.6 + sunCol * 0.18;
        col = mix(col, foamCol, foam * 0.8);
        float alpha = mix(0.35, 1.0, smoothstep(0.0, 1.4, dep));
        alpha = max(alpha, max(foam, fres));
        vec3 hz = skyLookup(vec3(-V.x, 0.015, -V.z));
        float fg = 1.0 - exp(-dist * fogDen);
        col = mix(col, hz, fg);
        alpha = mix(alpha, 1.0, fg) * smoothstep(-0.25, 0.08, dep);
        gl_FragColor = vec4(col, alpha);
      }`}),f=r==="low"?Iu(70,110):r==="mid"?Iu(110,160):Iu(150,220),A=new Re(f,d);return A.renderOrder=2,A.frustumCulled=!1,A}var rE=new Ce,Tu=new tt,aE=new T,oE=new T,vp=new T,vr=new T(0,1,0);function In(s,e=!0,t=!0){return s.traverse(n=>{n.isMesh&&(n.castShadow=e,n.receiveShadow=t)}),s}function uc(s,e=7041103){let t=new ee(e);return s.traverse(n=>{if(!n.isMesh)return;let i=Array.isArray(n.material)?n.material:[n.material];n.material=i.map(r=>{let a=(r.name||"").toLowerCase();if(/glass|lens|lamp|nav_|strobe|beacon|screen|canopy/.test(a))return r;let o=r.clone();return(/paint|skin|body|fuselage|panel|cowling|trim/.test(a)||!o.map)&&(o.color=o.color.clone().multiply(t).multiplyScalar(o.map?1.9:1),o.map||o.color.copy(t).multiplyScalar(.9)),o.roughness=Math.max(o.roughness,.6),o}),n.material.length===1&&(n.material=n.material[0])}),s}function Sn(s,e,t=!0){let n=new xt;return s.scene.updateMatrixWorld(!0),s.scene.traverse(i=>{if(!i.isMesh||i.isSkinnedMesh)return;let r=new Xn(i.geometry,i.material,e.length);e.forEach((a,o)=>r.setMatrixAt(o,rE.multiplyMatrices(a,i.matrixWorld))),r.castShadow=t,r.receiveShadow=!0,r.computeBoundingSphere(),n.add(r)}),n}function Dt(s,e,t=0,n=1,i=0,r=0){let a=Me(s,e)+i;if(Tu.setFromAxisAngle(vr,t),r){hc(s,e,vp);let o=new tt().setFromUnitVectors(vr,vp.lerp(vr,1-r).normalize());Tu.premultiply(o)}return new Ce().compose(oE.set(s,a,e),Tu,aE.set(n,n,n))}function xs(s,e,t,n=0,i=1,r=0){return s.position.set(e,Me(e,t)+r,t),s.rotation.y=n,s.scale.setScalar(i),s}function cE(s){let e=c=>{let l=s.tex[c];return l&&(l.wrapS=l.wrapT=Zt,l.anisotropy=8),l},t=e("lake-sand_color"),n=e("wet-sand_color"),i=e("mud_color"),r=e("granite-rock_color");for(let c of[t,n,i,r])c&&(c.colorSpace=_t);let a=new ft({roughness:1,metalness:0}),o={tD:t,tDN:e("lake-sand_normal"),tDO:e("lake-sand_orm"),tW:n,tWN:e("wet-sand_normal"),tWO:e("wet-sand_orm"),tG:i,tGN:e("mud_normal"),tR:r,tRN:e("granite-rock_normal")};return a.onBeforeCompile=c=>{for(let l in o)c.uniforms[l]={value:o[l]};c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP; varying vec3 vWN;`).replace("#include <fog_vertex>",`#include <fog_vertex>
 vWP = (modelMatrix * vec4(transformed, 1.0)).xyz; vWN = normalize(mat3(modelMatrix) * objectNormal);`),c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
      uniform sampler2D tD, tDN, tDO, tW, tWN, tWO, tG, tGN, tR, tRN; varying vec3 vWP; varying vec3 vWN;
      vec3 gTN; float gRough; float gAO;`).replace("#include <map_fragment>",`
      vec2 uvD = vWP.xz / 4.0, uvW = vWP.xz / 4.0, uvG = vWP.xz / 3.0, uvR = vWP.xz / 6.0;
      float mac = texture2D(tD, vWP.xz / 61.0).g * 0.6 + texture2D(tG, vWP.xz / 149.0).g * 0.6;
      float hgt = vWP.y; float slope = 1.0 - normalize(vWN).y;
      float nz = mac - 0.35;
      vec4 cD = texture2D(tD, uvD), cW = texture2D(tW, uvW), cG = texture2D(tG, uvG), cR = texture2D(tR, uvR);
      vec3 nD = texture2D(tDN, uvD).xyz, nW = texture2D(tWN, uvW).xyz, nG = texture2D(tGN, uvG).xyz, nR = texture2D(tRN, uvR).xyz;
      vec3 oD = texture2D(tDO, uvD).xyz, oW = texture2D(tWO, uvW).xyz;
      float wWet = 1.0 - smoothstep(0.7, 2.4, hgt + nz * 1.4);
      float wGrass = smoothstep(5.0, 7.6, hgt + nz * 2.0) * (1.0 - smoothstep(0.22, 0.42, slope));
      float wRock = smoothstep(0.42, 0.62, slope + nz * 0.15) + smoothstep(18.0, 24.0, hgt) * smoothstep(190.0, 240.0, abs(vWP.x));
      wRock = clamp(wRock, 0.0, 1.0);
      vec3 col = cD.rgb * vec3(0.76, 0.68, 0.57); vec3 tn = nD; float rgh = oD.g; float ao = oD.r;
      col = mix(col, cW.rgb * 0.78, wWet); tn = mix(tn, nW, wWet); rgh = mix(rgh, max(0.56, oW.g * 0.8), wWet); ao = mix(ao, oW.r, wWet);
      wGrass *= smoothstep(0.15, 0.6, mac + nz * 0.8) * 0.9; col = mix(col, cG.rgb * vec3(0.82, 0.76, 0.66), wGrass); tn = mix(tn, nG, wGrass); rgh = mix(rgh, 0.95, wGrass);
      col = mix(col, cR.rgb, wRock); tn = mix(tn, nR, wRock); rgh = mix(rgh, 0.85, wRock);
      col *= 0.8 + 0.4 * mac;
      // saturated swash zone: dark band at the waterline with a few receding swash lines
      float sw = (1.0 - smoothstep(-0.2, 0.9, hgt + nz * 0.5)) * smoothstep(-1.2, -0.3, hgt);
      float lines = smoothstep(0.75, 1.0, sin(hgt * 18.0 + vWP.x * 0.05 + nz * 6.0)) * (1.0 - smoothstep(0.2, 1.3, hgt));
      col *= 1.0 - 0.4 * sw - 0.15 * lines; rgh = mix(rgh, 0.5, sw);
      float uw = smoothstep(0.0, -5.0, hgt);
      col = mix(col, col * vec3(0.35, 0.55, 0.55), uw);
      diffuseColor.rgb *= col; gTN = tn * 2.0 - 1.0; gRough = rgh; gAO = ao;
      diffuseColor.rgb *= mix(1.0, gAO, 0.7);`).replace("#include <roughnessmap_fragment>","float roughnessFactor = clamp(gRough, 0.48, 1.0);").replace("#include <metalnessmap_fragment>","float metalnessFactor = 0.0;").replace("#include <normal_fragment_maps>",`{
        vec3 Nw = normalize(vWN); vec3 T = normalize(vec3(1.0, 0.0, 0.0) - Nw * Nw.x); vec3 B = cross(Nw, T);
        vec3 nw = normalize(T * gTN.x - B * gTN.y + Nw * max(gTN.z, 0.2));
        normal = normalize((viewMatrix * vec4(nw, 0.0)).xyz);
      }`)},a}function lE(s,e){let t=yt.x1-yt.x0,n=yt.z1-yt.z0,i=e==="high"?1.9:e==="mid"?2.6:3.4,r=new Kn(t,n,Math.round(t/i),Math.round(n/i));r.rotateX(-Math.PI/2);let a=r.attributes.position;for(let c=0;c<a.count;c++){let l=a.getX(c)+(yt.x0+yt.x1)/2,h=a.getZ(c)+(yt.z0+yt.z1)/2;a.setXYZ(c,l,Me(l,h),h)}r.computeVertexNormals(),r.computeBoundingSphere();let o=new Re(r,cE(s));return o.receiveShadow=!0,o.name="terrain",o}function hE(){let s=[],e=()=>{let a=new Be(.03,.16,2.2),o=new Be(.16,.025,2.2);o.translate(0,.08,0);let c=o.clone();return c.translate(0,-.16,0),Oh([a,o,c])},t=new tt().setFromUnitVectors(new T(1,1,1).normalize(),vr),n=[new Ft(0,0,0),new Ft(0,Math.PI/2,0),new Ft(Math.PI/2,0,0)];for(let a of n){let o=e(),c=new tt().setFromEuler(a);c.premultiply(t),o.applyMatrix4(new Ce().makeRotationFromQuaternion(c)),s.push(o)}let i=Oh(s);i.translate(0,.62,0);let r=i.attributes.uv;for(let a=0;a<r.count;a++)r.setXY(a,r.getX(a)*.3,r.getY(a)*2);return i}var Ru={};function uE(s){let e=s%6;if(Ru[e])return Ru[e];let t=document.createElement("canvas");t.width=256,t.height=80;let n=t.getContext("2d");n.fillStyle="rgba(0,0,0,0)",n.fillRect(0,0,256,80),n.fillStyle="rgba(225,225,215,0.85)",n.font="bold 54px Arial Narrow, Arial, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(["PA 26-12","PA 33-21","PA 13-6","PA 45-17","PA 30-9","PA 26-4"][e],128,42),n.globalCompositeOperation="destination-out";for(let r=0;r<260;r++)n.globalAlpha=Math.random()*.8,n.fillRect(Math.random()*256,Math.random()*80,1+Math.random()*4,1+Math.random()*3);let i=new lr(t);return i.colorSpace=_t,i.anisotropy=4,Ru[e]=new ft({map:i,transparent:!0,roughness:.8,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2})}function Mp(s){let e=new xt,t=s.hull,n=s.dark,i=(p,_,b,E,I)=>{let C=new Re(p,_);return C.position.set(b,E,I),C.castShadow=!0,C.receiveShadow=!0,e.add(C),C},r=10.8,a=3.25,o=2.05;i(new Be(a,.25,r-.6),n,0,-.7,-.3);let c=new Be(.12,o,r-1.6);i(c,t,-a/2,.25,-.6),i(c,t,a/2,.25,-.6);let l=new Be(.12,o,1.4),h=i(l,t,-a/2+.2,.25,r/2-.9);h.rotation.y=.28;let u=i(l,t,a/2-.2,.25,r/2-.9);u.rotation.y=-.28,i(new Be(a,o+.15,.14),t,0,.3,-r/2+.2);let d=new Wt(a*.5,a*.36,r-.8,4,1);d.rotateX(Math.PI/2),d.rotateZ(Math.PI/4),d.scale(1,.45,1),i(d,n,0,-1,-.3);let f=new Be(.3,.08,r-1.6);i(f,n,-a/2,1.3,-.6),i(f,n,a/2,1.3,-.6),i(new Be(1.2,.9,1.1),t,.6,1.5,-r/2+1),i(new Be(a-.3,.9,1.6),n,0,-.2,-r/2+1.3);let A=new ur(.32,.04,6,16);A.rotateX(Math.PI/2),i(A,n,-1.1,1.55,-r/2+1.4),i(A,n,1.1,1.55,-r/2+1.4);for(let p of[-1,1]){i(new Be(.1,.12,r-1.4),n,p*(a/2+.06),.55,-.6),i(new Be(.08,.08,r-1.4),n,p*(a/2+.05),-.25,-.6);for(let b=0;b<6;b++)i(new Be(.05,o*.9,.08),n,p*(a/2+.05),.2,-r/2+1.2+b*1.45);let _=new Re(new Kn(1.6,.5),uE(s.n||0));_.position.set(p*(a/2+.075),.95,-r/2+1.9),_.rotation.y=p*Math.PI/2,e.add(_)}let g=new xt;g.position.set(0,-.62,r/2-.15),e.add(g);let m=new Re(new Be(a-.45,2.15,.14),t);m.position.set(0,1.05,0),m.castShadow=m.receiveShadow=!0,g.add(m);for(let p=0;p<4;p++){let _=new Re(new Be(a-.5,.08,.1),n);_.position.set(0,.3+p*.5,.1),g.add(_)}return{group:e,ramp:g}}function fE(s){let e=new xt,t=[],n=new _n({color:s.clone().multiplyScalar(.42),fog:!1}),i=o=>{let c=new xt,l=new Be(o*.11,o*.06,o),h=l.attributes.position;for(let g=0;g<h.count;g++){let m=h.getZ(g)/o;m>.3&&h.setX(g,h.getX(g)*(1-(m-.3)*1.6))}c.add(new Re(l,n));let u=new Re(new Be(o*.07,o*.07,o*.18),n);u.position.set(0,o*.06,o*.08),c.add(u);let d=new Re(new Be(o*.05,o*.06,o*.08),n);d.position.set(0,o*.11,o*.1),c.add(d);let f=new Re(new Wt(o*.018,o*.022,o*.09,8),n);f.position.set(0,o*.09,-o*.06),c.add(f);let A=new Re(new Wt(o*.004,o*.004,o*.16,4),n);A.position.set(0,o*.18,o*.12),c.add(A);for(let g of[.3,-.3]){let m=new Re(new Be(o*.05,o*.025,o*.05),n);m.position.set(0,o*.045,g*o),c.add(m)}return c},r=[[-900,-2600,130,.3],[-300,-3100,180,-.2],[500,-2800,150,.4],[1300,-3300,200,.1],[-1700,-3400,160,-.3],[2100,-3900,210,.2],[80,-4200,240,0]];for(let[o,c,l,h]of r){let u=i(l);u.position.set(o,0,c),u.rotation.y=Math.PI/2+h,e.add(u),t.push(new T(o,l*.06,c))}let a=[];{let o=i(120);o.position.set(-420,-2,-950),o.rotation.set(.05,Math.PI/2+.7,.09),e.add(o),a.push(new T(-420,6,-950),new T(-395,4,-935))}return{group:e,flashes:t,burning:a}}function Ea(s,e,t,n=2){let i=new Be(s,e,t),r=i.attributes.uv,a=[[t,e],[t,e],[s,t],[s,t],[s,e],[s,e]];for(let o=0;o<6;o++)for(let c=0;c<4;c++){let l=o*4+c;r.setXY(l,r.getX(l)*a[o][0]/n,r.getY(l)*a[o][1]/n)}return i}function dE(s,e,t,n,i){let r=Ii(s,"worn-concrete");r.color=new ee(.78,.76,.72);let a=t.h+1.62-1.02,o=new xt;o.position.set(t.x,0,t.z);let c=(B,x,y,L,F=0,U=0,W=0,k=r)=>{let q=new Re(B,k);return q.position.set(x,y,L),q.rotation.set(F,U,W),q.castShadow=q.receiveShadow=!0,o.add(q),q},l=t.h-1.2,h=5.4,u=Bu(77),d=9,f=h*2/d;for(let B=0;B<d;B++){let x=-h+f*(B+.5),y=B===6?.22:0,L=a-u()*.07-y;c(Ea(f-.015,L-l,1.1),x,(L+l)/2,-1.55,0,0,(u()-.5)*.012),y||c(Ea(f-.015,.26,.62),x,L-.1,-2.02,-.55-u()*.12,0,0);for(let F=0;F<2;F++)c(new hr(.07+u()*.08,0),x+(u()-.5)*f,L-.02,-2.15-u()*.15,u()*3,u()*3,0)}for(let B of[-1,1]){let x=a+.45;c(Ea(1,x-l,3.6),B*(h+.6),(x+l)/2,-.4,0,B*-.38),c(Ea(1.2,.3,3.8),B*(h+.55),x+.05,-.4,0,B*-.38,B*.12)}let A=Ii(s,"mud");A.color=new ee(1.15,1,.8),A.roughness=1;let g=new si(1,14,8,0,Math.PI*2,0,Math.PI/2);for(let[B,x,y,L,F]of[[-4.2,-1.75,1.3,.55,.16],[-1.6,-1.9,.7,.35,.09],[2.2,-1.8,1,.45,.12],[4.6,-1.7,.9,.5,.2],[.9,-2.25,.8,.3,.07]])c(g,B,a-.03,x,0,u()*3,0,A).scale.set(y,F,L);let m=new ft({color:11569736,metalness:.85,roughness:.32}),p=new Wt(.0075,.0075,.1,6);p.rotateZ(Math.PI/2);let _=i==="low"?90:220,b=new Xn(p,m,_),E=new Ce,I=new tt,C=new Ft;for(let B=0;B<_;B++){let x=B<_*.6,y=(u()-.5)*(x?6.5:4)*(x?1:u()),L=x?-1.6-u()*.42:-.6+u()*2.2,F=x?a-.07*0+.008:t.h+.01;I.setFromEuler(C.set(0,u()*6.28,0)),E.compose(new T(y,F,L),I,new T(1,1,1)),b.setMatrixAt(B,E)}if(b.castShadow=!0,o.add(b),e.ammo)for(let[B,x,y]of[[-2.9,-1.75,.25],[-2.35,-1.8,-.1],[3.1,-1.7,1.4]]){let L=In(e.ammo.scene.clone());L.position.set(B,a,x),L.rotation.y=y,L.scale.setScalar(1.2),o.add(L)}let S=Ii(s,"worn-concrete");S.color=new ee(.42,.33,.22),S.roughness=.9,c(Ea(.7,.32,.42,.5),4.1,a+.16,-1.85,0,.3,0,S),n(o);let w=e.sb_wall||e.sb_set;if(w)for(let[B,x,y,L,F]of[[-h-.5,.4,-.38,1,1],[h+.5,.4,.38+Math.PI,1,1],[-h-1.2,-2.6,.2,.9,.2],[h+1.3,-2.7,-.2,.9,.2],[-h+1,-1.75,.04,.55,2],[h-1,-1.8,-.05,.55,2]]){let U=In(w.scene.clone());U.position.set(t.x+B,F>1.5?a-.02:F>.5?a+1:Me(t.x+B,t.z+x),t.z+x),U.rotation.y=y,U.scale.setScalar(L),n(U)}if(e.sb_corner)for(let B of[-1,1]){let x=In(e.sb_corner.scene.clone());x.position.set(t.x+B*6.6,Me(t.x+B*6.6,t.z+1.5)-.1,t.z+1.5),x.rotation.y=B>0?Math.PI:-Math.PI/2,n(x)}if(e.rubble){let B=[Dt(t.x-3.2,t.z-3.6,.6,.55,-.15),Dt(t.x+2.6,t.z-4,2.2,.45,-.15)];n(Sn(e.rubble,B))}return a}function pE(s,e,t,n){let i=t==="low"?160:t==="mid"?420:760,r=[["sedge",.42],["oat",.28],["clump",.18],["thorn",.12]],a={};for(let[o]of r)a[o]=[];for(let o=0;o<i*3&&Object.values(a).reduce((c,l)=>c+l.length,0)<i;o++){let c=(n()-.5)*300,l=-30+n()*70,h=c-dt.x,u=l-dt.z,d=Math.hypot(h,u);if(d<5.5||Me(c,l)<2.2||!(d<30?1:0)&&n()<.35)continue;let g=n(),m="sedge";for(let[p,_]of r){if(g<_){m=p;break}g-=_}a[m].push(Dt(c,l,n()*6.28,(m==="thorn"?.7:1)*(.8+n()*.9),-.05,.6))}for(let[o]of r)s[o]&&a[o].length&&e(Sn(s[o],a[o],!1))}function Cp(s,e,t,n){let i={solids:[],hedgehogs:[],covers:[]};e.add(lE(s,t));let r=s.glb,a=A=>(e.add(A),A),o=dt;if(i.parapetTop=dE(s,r,o,a,t),r.camonet){let A=In(r.camonet.scene.clone(),!0,!0);xs(A,o.x+.5,o.z+4.2,.1,1.15,-.1),a(A)}if(r.ammo){let A=[];for(let[g,m,p]of[[1.6,1.6,.3],[1.95,1.4,.1],[1.75,1.9,1.7],[-1.7,1.8,-.4],[-1.5,2.2,2]])A.push(Dt(o.x+g,o.z+m,p,1.2));a(Sn(r.ammo,A))}if(r.howitzer){let A=uc(In(r.howitzer.scene.clone()),7238484);xs(A,o.x+10.5,o.z+3.5,Math.PI+.06,1,0),a(A),i.howitzer=A,A.traverse(g=>{g.name==="barrel"&&(i.howBarrel=g)})}if(r.hesco){let A=[];for(let g=0;g<6;g++)A.push(Dt(o.x+6.8+g*1.02,o.z-1.2+Math.sin(g)*.1,0,1));for(let g=0;g<4;g++)A.push(Dt(o.x-6.5-g*1.02,o.z-1,0,1));a(Sn(r.hesco,A))}if(r.tbunker){let A=[Dt(-24,0,Math.PI+.25,1.35),Dt(26,-1,Math.PI-.2,1.35),Dt(-62,6,Math.PI+.1,1.25),Dt(66,4,Math.PI-.15,1.25)];a(Sn(r.tbunker,A))}if(r.sb_set)for(let[A,g,m]of[[-44,-3,Math.PI+.06],[46,-5,Math.PI-.08]]){let p=In(r.sb_set.scene.clone());xs(p,A,g,m,1,-.1),a(p)}if(r.sb_wall){let A=[];for(let g=-9;g<=9;g++){if(Math.abs(g)<3)continue;let m=g*2.2;A.push(Dt(m,-3.2+Math.abs(g)*.15,.04*g,1,-.05))}a(Sn(r.sb_wall,A))}if(r.gtower){let A=In(r.gtower.scene.clone());xs(A,-86,18,Math.PI+.3,1,-.2),a(A)}if(r.wire){let A=[];for(let[g,m]of[[-17,7],[-40,11]])for(let p=-170;p<170;p+=3.85)Math.abs(p%40)<m*.5&&Math.random()<.6||A.push(Dt(p,g+Math.sin(p*.07)*2.5,Math.sin(p)*.08,1,-.05,.6));a(Sn(r.wire,A,t!=="low"))}let c=hE(),l=Ii(s,"rusty-metal");l.color=new ee(.75,.68,.62);let h=[],u=Bu(42);for(let A=0;A<70;A++){let g=-170+u()*340,m=-86+u()*40;if(Math.abs(g)<6&&m>-50)continue;let p=.9+u()*.3;h.push(Dt(g,m,u()*6.28,p,-.15)),i.hedgehogs.push(new T(g,Me(g,m),m))}let d=new Xn(c,l,h.length);if(h.forEach((A,g)=>d.setMatrixAt(g,A)),d.castShadow=!0,d.receiveShadow=!0,a(d),r.truck){let A=In(r.truck.scene.clone());xs(A,-48,-30,2.2,1,-.3),A.rotation.z=.12,a(A),i.covers.push(new T(-48,0,-30))}if(r.humvee){let A=uc(In(r.humvee.scene.clone()),8025176);xs(A,58,-12,-.7,1,-.2),A.rotation.z=-.09,a(A)}if(r.rubble){let A=[Dt(-30,-12,1,1.2,-.3),Dt(36,-26,2,1.1,-.3),Dt(-95,-30,.5,1.4,-.3)];a(Sn(r.rubble,A))}if(r.wreck){let A=In(r.wreck.scene.clone());A.position.set(150,-3.2,-185),A.rotation.set(.12,-.9,.22),A.scale.setScalar(1.3),a(A)}if(r.reef){let A=[];for(let g=0;g<26;g++){let m=-220+u()*440,p=-112+u()*40;A.push(Dt(m,p,u()*6,.9+u()*1.6,-.25,.5))}a(Sn(r.reef,A))}if(r.rock){let A=[];for(let[g,m,p,_]of[[-150,-40,.4,2.2],[-128,-80,2.4,1.6],[170,-52,1.2,2.4],[140,-98,3,1.5],[-200,-110,.8,2.8],[205,-118,2,3.2],[-110,22,1.2,2.2],[120,26,2.2,2]])A.push(Dt(g,m,p,_,-.6,.6));a(Sn(r.rock,A))}if(r.boulder){let A=[];for(let g=0;g<30;g++){let m=(u()<.5?-1:1)*(60+u()*160),p=-100+u()*150;A.push(Dt(m,p,u()*6,.8+u()*1.4,-.3,.5))}a(Sn(r.boulder,A))}if(r.cliff){let A=[Dt(-268,-175,Math.PI*.62,2.1,-6),Dt(-300,-110,Math.PI*.55,1.9,-6),Dt(272,-170,-Math.PI*.62,2.1,-6),Dt(305,-100,-Math.PI*.55,2,-6)];a(Sn(r.cliff,A,!1))}if(r.seastack){let A=[new Ce().compose(new T(-310,-8,-380),new tt,new T(1.8,2,1.8)),new Ce().compose(new T(-345,-8,-330),new tt().setFromAxisAngle(vr,1.2),new T(1.2,1.3,1.2)),new Ce().compose(new T(330,-8,-400),new tt().setFromAxisAngle(vr,2.2),new T(1.6,1.7,1.6))];a(Sn(r.seastack,A,!1))}if(r.lighthouse){let A=In(r.lighthouse.scene.clone(),!1,!0);xs(A,318,-150,-2.2,1.1,-1.5),a(A)}let f=fE(n);return a(f.group),i.fleet=f,i.rnd=u,pE(r,a,t,Bu(7)),i}function Bu(s){return function(){s|=0,s=s+1831565813|0;let e=Math.imul(s^s>>>15,1|s);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var ai=()=>new T,It=ai(),ht=ai(),Du=ai(),wp=new T(0,1,0),V=(s,e)=>s+Math.random()*(e-s),Zi=class{constructor(e,t){this.max=t.max,this.cols=t.cols||1,this.rows=t.rows||1,this.list=[],this.free=[];let n=new Kn(1,1),i=new fa;i.index=n.index,i.attributes.position=n.attributes.position,i.attributes.uv=n.attributes.uv,this.aP=new on(new Float32Array(this.max*3),3).setUsage(Yi),this.aS=new on(new Float32Array(this.max*4),4).setUsage(Yi),this.aC=new on(new Float32Array(this.max*4),4).setUsage(Yi),i.setAttribute("iP",this.aP),i.setAttribute("iS",this.aS),i.setAttribute("iC",this.aC),i.instanceCount=0,e.colorSpace=_t,e.needsUpdate=!0,this.u={map:{value:e},grid:{value:new ne(this.cols,this.rows)},light:{value:new ee(1,1,1)},fogColor:{value:new ee},fogDensity:{value:0}};let r=t.blending==="add";this.mat=new St({uniforms:this.u,transparent:!0,depthWrite:!1,blending:r?ds:Gi,vertexShader:`attribute vec3 iP; attribute vec4 iS; attribute vec4 iC; uniform vec2 grid; uniform float fogDensity;
        varying vec2 vUv; varying vec4 vC; varying float vA; varying float vFog;
        void main(){ vec4 mv = viewMatrix * vec4(iP, 1.0); float c = cos(iS.y), s = sin(iS.y);
          mv.xy += vec2(position.x * c - position.y * s, position.x * s + position.y * c) * iS.x;
          gl_Position = projectionMatrix * mv;
          float fr = floor(iS.z + 0.5); vec2 cell = vec2(mod(fr, grid.x), floor(fr / grid.x));
          vUv = (vec2(cell.x, grid.y - 1.0 - cell.y) + uv) / grid; vC = iC; vA = iS.w;
          float d = fogDensity * mv.z; vFog = 1.0 - exp(-d * d); }`,fragmentShader:`uniform sampler2D map; uniform vec3 light; uniform vec3 fogColor; varying vec2 vUv; varying vec4 vC; varying float vA; varying float vFog;
        void main(){ vec4 t = texture2D(map, vUv); vec3 col = pow(t.rgb, vec3(1.0)) * vC.rgb;
          float lum = dot(t.rgb, vec3(0.3, 0.59, 0.11));
          ${r?"col *= 1.0 + vC.a; float a = t.a * vA; gl_FragColor = vec4(col * a * (1.0 - vFog), 1.0);":"col *= light; col *= 1.0 + vC.a * smoothstep(0.35, 1.0, lum) * 9.0; float a = t.a * vA; col = mix(col, fogColor, vFog * (1.0 - vC.a * 0.5)); gl_FragColor = vec4(col, a);"} }`}),this.mesh=new Re(i,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=t.order||5,this.g=i}spawn(e){if(this.list.length>=this.max){let n=this.list.shift();this.free.push(n)}let t=this.free.pop()||{p:ai(),v:ai(),c:new ee};return t.p.copy(e.p),t.v.copy(e.v||It.set(0,0,0)),t.life=e.life,t.age=0,t.s0=e.s0,t.s1=e.s1??e.s0,t.rot=e.rot??Math.random()*6.28,t.rv=e.rv??0,t.f0=e.f0??0,t.nf=e.nf??1,t.a=e.a??1,t.c.copy(e.c||AE),t.em=e.em??0,t.drag=e.drag??0,t.grav=e.grav??0,t.fin=e.fin??.08,t.ease=e.ease??2,t.loop=e.loop||0,t.ground=e.ground||0,this.list.push(t),t}update(e){let t=this.list,n=0,i=this.aP.array,r=this.aS.array,a=this.aC.array;for(let o=0;o<t.length;o++){let c=t[o];c.age+=e;let l=c.age/c.life;if(l>=1){this.free.push(c),t[o]=t[t.length-1],t.pop(),o--;continue}if(c.drag&&c.v.multiplyScalar(Math.exp(-c.drag*e)),c.v.y-=c.grav*e,c.p.addScaledVector(c.v,e),c.rot+=c.rv*e,c.ground){let A=Me(c.p.x,c.p.z);c.p.y<A+.05&&(c.p.y=A+.05,c.v.set(0,0,0))}let h=1-Math.pow(1-l,c.ease),u=c.s0+(c.s1-c.s0)*h,d=l<c.fin?l/c.fin:1-Math.pow((l-c.fin)/(1-c.fin),1.6);i[n*3]=c.p.x,i[n*3+1]=c.p.y,i[n*3+2]=c.p.z;let f=c.loop?c.f0+Math.floor(c.age*c.loop)%c.nf:c.f0+Math.min(c.nf-1,Math.floor(l*c.nf));r[n*4]=u,r[n*4+1]=c.rot,r[n*4+2]=f,r[n*4+3]=c.a*Math.max(0,d),a[n*4]=c.c.r,a[n*4+1]=c.c.g,a[n*4+2]=c.c.b,a[n*4+3]=c.em,n++}this.g.instanceCount=n,n&&(this.aP.needsUpdate=this.aS.needsUpdate=this.aC.needsUpdate=!0,this.aP.clearUpdateRanges?.())}},AE=new ee(1,1,1),Lu=class{constructor(e,t){this.max=t,this.list=[],this.free=[];let n=new Kn(1,1),i=new fa;i.index=n.index,i.attributes.position=n.attributes.position,i.attributes.uv=n.attributes.uv,this.aA=new on(new Float32Array(t*3),3).setUsage(Yi),this.aB=new on(new Float32Array(t*3),3).setUsage(Yi),this.aC=new on(new Float32Array(t*4),4).setUsage(Yi),this.aW=new on(new Float32Array(t),1).setUsage(Yi),i.setAttribute("iA",this.aA),i.setAttribute("iB",this.aB),i.setAttribute("iC",this.aC),i.setAttribute("iW",this.aW),i.instanceCount=0,this.mat=new St({uniforms:{map:{value:e}},transparent:!0,depthWrite:!1,blending:ds,vertexShader:`attribute vec3 iA; attribute vec3 iB; attribute vec4 iC; attribute float iW; varying vec2 vUv; varying vec4 vC;
        void main(){ vec4 a = viewMatrix * vec4(iA, 1.0); vec4 b = viewMatrix * vec4(iB, 1.0);
          vec3 d = b.xyz - a.xyz; vec3 side = normalize(cross(d, a.xyz + b.xyz) + 1e-6);
          vec4 p = mix(a, b, position.y + 0.5); p.xyz += side * position.x * iW;
          gl_Position = projectionMatrix * p; vUv = uv; vC = iC; }`,fragmentShader:`uniform sampler2D map; varying vec2 vUv; varying vec4 vC;
        void main(){ float across = 1.0 - abs(vUv.x - 0.5) * 2.0; float along = smoothstep(0.0, 0.35, vUv.y);
          float a = pow(across, 1.6) * along * vC.a; gl_FragColor = vec4(vC.rgb * a, 1.0); }`}),this.mesh=new Re(i,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=6,this.g=i}spawn(e){this.list.length>=this.max&&this.free.push(this.list.shift());let t=this.free.pop()||{p:ai(),v:ai(),c:new ee};return t.p.copy(e.p),t.v.copy(e.v),t.len=e.len,t.w=e.w,t.life=e.life,t.age=0,t.c.copy(e.c),t.a=e.a??1,t.grav=e.grav??0,t.end=e.end||null,t.drag=e.drag||0,this.list.push(t),t}update(e){let t=this.list,n=0,i=this.aA.array,r=this.aB.array,a=this.aC.array,o=this.aW.array;for(let c=0;c<t.length;c++){let l=t[c];if(l.age+=e,l.age>=l.life){this.free.push(l),t[c]=t[t.length-1],t.pop(),c--;continue}l.v.y-=l.grav*e,l.drag&&l.v.multiplyScalar(Math.exp(-l.drag*e)),l.p.addScaledVector(l.v,e);let h=l.v.length()||1,u=Math.min(l.len,h*l.age+.01);i[n*3]=l.p.x-l.v.x/h*u,i[n*3+1]=l.p.y-l.v.y/h*u,i[n*3+2]=l.p.z-l.v.z/h*u,r[n*3]=l.p.x,r[n*3+1]=l.p.y,r[n*3+2]=l.p.z;let d=1-l.age/l.life;a[n*4]=l.c.r,a[n*4+1]=l.c.g,a[n*4+2]=l.c.b,a[n*4+3]=l.a*Math.min(1,d*3),o[n]=l.w,n++}this.g.instanceCount=n,n&&(this.aA.needsUpdate=this.aB.needsUpdate=this.aC.needsUpdate=this.aW.needsUpdate=!0)}},Ma=class{constructor(e,t,n,i={}){this.max=n,this.i=0,this.v=t,e.colorSpace=_t,e.needsUpdate=!0;let r=new Kn(1,1);r.rotateX(-Math.PI/2),this.aF=new on(new Float32Array(n*2),2),r.setAttribute("iF",this.aF);let a=new ft({map:e,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4,roughness:i.rough??.95,metalness:0}),o=t;a.onBeforeCompile=c=>{c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 iF; varying float vAl;`).replace("#include <uv_vertex>",`#include <uv_vertex>
 vMapUv = vec2((uv.x + iF.x) / ${o.toFixed(1)}, uv.y); vAl = iF.y;`),c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
varying float vAl;`).replace("#include <map_fragment>",`#include <map_fragment>
 diffuseColor.a *= vAl;`)},this.mesh=new Xn(r,a,n),this.mesh.count=0,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,this.fades=new Float32Array(n),this.born=new Float32Array(n),this.t=0,this.life=i.life||0}add(e,t,n,i=Math.random()*6.28,r=1,a,o=n,c){let l=this.i%this.max;this.i++;let h=(a??Me(e,t))+.03;hc(e,t,Du);let u=new tt().setFromUnitVectors(wp,Du).multiply(new tt().setFromAxisAngle(wp,i));this.mesh.setMatrixAt(l,new Ce().compose(It.set(e,h,t),u,ht.set(n,1,o))),this.aF.setXY(l,c??Math.floor(Math.random()*this.v),r),this.aF.needsUpdate=!0,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.count=Math.min(this.max,this.i),this.born[l]=this.t,this.fades[l]=r}update(e){if(this.t+=e,!this.life)return;let t=!1;for(let n=0;n<this.mesh.count;n++){let i=this.t-this.born[n];if(i>this.life*.7&&this.fades[n]>0){let r=this.fades[n]*Math.max(0,1-(i-this.life*.7)/(this.life*.3));this.aF.setY(n,r),t=!0}}t&&(this.aF.needsUpdate=!0)}clear(){this.i=0,this.mesh.count=0}},dc=class{constructor(e,t,n){this.q=n,this.scene=t;let i=n==="low";this.mul=i?.5:n==="mid"?.75:1;let r=e.tex;this.exp=new Zi(r.fx_explosion,{cols:8,rows:8,max:i?60:120,order:7}),this.smoke=new Zi(r.fx_smoke,{cols:4,rows:4,max:i?260:600,order:6}),this.spl=new Zi(r.fx_splash,{cols:4,rows:1,max:i?60:140,order:6}),this.bsp=new Zi(r.fx_blood_spray,{cols:4,rows:1,max:90,order:6}),this.flash=new Zi(r.fx_flash,{cols:4,rows:1,max:80,blending:"add",order:8}),this.glow=new Zi(r.fx_glow,{cols:1,rows:1,max:i?200:400,blending:"add",order:8}),this.streak=new Lu(r.fx_glow,i?160:320),this.craters=new Ma(r.fx_crater,2,i?40:90,{life:0}),this.bloodD=new Ma(r.fx_blood_decal,4,i?40:90,{rough:.55,life:0});for(let o of[this.exp,this.smoke,this.spl,this.bsp,this.flash,this.glow])t.add(o.mesh);this.prints=new Ma(_E(),2,i?300:900,{life:0}),t.add(this.streak.mesh,this.craters.mesh,this.bloodD.mesh,this.prints.mesh);let a=new hr(.22,0);this.debMax=i?80:180,this.deb=new Xn(a,new ft({color:4931894,roughness:.95}),this.debMax),this.deb.count=0,this.deb.castShadow=!i,this.deb.frustumCulled=!1,t.add(this.deb),this.debris=[],this.lights=[];for(let o=0;o<(i?2:4);o++){let c=new Ki(16754784,0,90,1.7);t.add(c),this.lights.push({l:c,t:0,d:1,i0:0})}this.blood=!0,this.time=0,this.shake=0}setEnv(e,t,n){for(let i of[this.exp,this.smoke,this.spl,this.bsp])i.u.fogColor.value.copy(e),i.u.fogDensity.value=t,i.u.light.value.copy(n);this.flash.u.fogDensity.value=this.glow.u.fogDensity.value=t*.6}light(e,t,n,i=16754784){let r=this.lights[0];for(let a of this.lights)a.l.intensity<r.l.intensity&&(r=a);r.l.position.copy(e),r.l.color.set(i),r.i0=t,r.l.intensity=t,r.t=0,r.d=n}update(e,t){this.cam=t,this.time+=e;for(let o of[this.exp,this.smoke,this.spl,this.bsp,this.flash,this.glow])o.update(e);this.streak.update(e),this.craters.update(e),this.bloodD.update(e);for(let o of this.lights){if(o.l.intensity<=0)continue;o.t+=e;let c=1-o.t/o.d;o.l.intensity=c>0?o.i0*c*c:0}let n=new Ce,i=new tt,r=ai(),a=0;for(let o=0;o<this.debris.length;o++){let c=this.debris[o];if(c.age+=e,c.age>c.life){this.debris.splice(o,1),o--;continue}if(!c.rest){c.v.y-=9.8*e,c.p.addScaledVector(c.v,e),c.r.x+=c.w.x*e,c.r.y+=c.w.y*e;let l=Me(c.p.x,c.p.z);c.p.y<Math.max(l,c.water?-.6:-99)&&(l<0&&(c.age=c.life),c.p.y=l+.05,c.v.y<-3?(c.v.y*=-.3,c.v.x*=.5,c.v.z*=.5):c.rest=!0),c.trail&&Math.random()<e*30&&this.smoke.spawn({p:c.p,s0:.6*c.s,s1:2.5*c.s,life:1.4,a:.5,c:Pu,f0:Math.random()*16|0,v:It.set(0,.8,0)})}if(a<this.debMax){i.setFromEuler(new Ft(c.r.x,c.r.y,0));let l=c.age>c.life-1?c.life-c.age:1;n.compose(c.p,i,r.setScalar(c.s*Math.max(.01,l))),this.deb.setMatrixAt(a++,n)}}this.deb.count=a,this.deb.instanceMatrix.needsUpdate=!0}explosion(e,t=1,n={}){let i=this.mul,r=n.water??(Me(e.x,e.z)<-.3&&e.y<1.5);if(this.light(It.copy(e).setY(e.y+2*t),1800*t*t,.35+.15*t),this.flash.spawn({p:It.copy(e).setY(e.y+1.2*t),s0:9*t,s1:14*t,life:.16,f0:Math.random()*4|0,em:2.5,c:fc,fin:.05}),r){for(let o=0;o<4+4*i;o++)this.spl.spawn({p:It.copy(e).setY(-.5).add(ht.set(V(-1.8,1.8)*t,0,V(-1.8,1.8)*t)),s0:5*t,s1:V(20,32)*t,life:V(2.2,3.2),f0:Math.random()*4|0,v:ht.set(0,V(7,12)*t,0),grav:4.5,rot:V(-.15,.15),fin:.05,ease:3,c:Sp});for(let o=0;o<8*i;o++)this.smoke.spawn({p:It.copy(e).setY(.6),v:ht.set(V(-5,5),V(.5,3),V(-5,5)).multiplyScalar(t),s0:3*t,s1:11*t,life:V(2.5,4),a:.5,drag:1.2,c:Ip,f0:Math.random()*16|0});this.exp.spawn({p:It.copy(e).setY(1.5*t),s0:6*t,s1:11*t,life:.6,f0:0,nf:24,em:1.4,rv:V(-.3,.3)});return}let a=Math.round((n.big?6:3)*(.6+.4*i));for(let o=0;o<a;o++)this.exp.spawn({p:It.copy(e).add(ht.set(V(-1,1)*t,V(.6,1.8)*t,V(-1,1)*t)),s0:V(6,9)*t,s1:V(14,21)*t,life:V(1,1.6),f0:0,nf:56,em:1.6,rv:V(-.4,.4),ease:2.5,fin:.03});for(let o=0;o<10*i*t+3;o++)this.smoke.spawn({p:It.copy(e).add(ht.set(V(-2,2)*t,V(.5,3)*t,V(-2,2)*t)),v:ht.set(V(-1.5,1.5),V(2.5,7),V(-1.5,1.5)).multiplyScalar(t),s0:V(3,5)*t,s1:V(14,24)*t,life:V(7,13),a:V(.55,.85),drag:.5,c:n.oil?Pu:va,f0:Math.random()*16|0,rv:V(-.2,.2),fin:.05});for(let o=0;o<9*i*t+2;o++){let c=Math.random()*6.28;this.smoke.spawn({p:It.copy(e).add(ht.set(0,.6,0)),v:ht.set(Math.cos(c)*V(6,14),V(.2,1.5),Math.sin(c)*V(6,14)).multiplyScalar(t),s0:2.5*t,s1:V(7,11)*t,life:V(2.5,4.5),a:.6,drag:2.2,c:ya,f0:Math.random()*16|0,fin:.04})}for(let o=0;o<6*i+2;o++)this.spl.spawn({p:It.copy(e),v:ht.set(V(-3,3),V(9,16),V(-3,3)).multiplyScalar(Math.sqrt(t)),s0:3*t,s1:V(8,12)*t,life:V(1.1,1.8),grav:9,f0:Math.random()*4|0,c:Tp,rot:V(-.4,.4),ease:2});for(let o=0;o<18*i;o++)this.streak.spawn({p:It.copy(e).setY(e.y+1),v:ht.set(V(-1,1),V(.4,1.4),V(-1,1)).normalize().multiplyScalar(V(15,40)*Math.sqrt(t)),len:V(1,3),w:.12,life:V(.4,1.1),c:Mr,grav:9.8,drag:.8});for(let o=0;o<10*i*t;o++)this.debris.push({p:It.copy(e).setY(e.y+.5).clone(),v:ht.set(V(-1,1),V(.6,1.6),V(-1,1)).normalize().multiplyScalar(V(8,22)*Math.sqrt(t)).clone(),r:ai().set(Math.random()*6,Math.random()*6,0),w:ai().set(V(-9,9),V(-9,9),0),s:V(.4,1.4)*(n.metal?1.4:1),age:0,life:V(5,9),trail:n.metal&&Math.random()<.3,water:!0});n.crater!==!1&&e.y-Me(e.x,e.z)<2.5&&this.craters.add(e.x,e.z,V(5,7.5)*t)}burn(e,t=1){this.exp.spawn({p:It.copy(e).add(ht.set(V(-.6,.6)*t,V(0,.8)*t,V(-.6,.6)*t)),v:ht.set(0,2,0),s0:2.2*t,s1:3.6*t,life:.7,f0:10,nf:22,em:1.2,rv:V(-1,1),fin:.15}),this.smoke.spawn({p:It.copy(e).setY(e.y+1.5*t),v:ht.set(V(.5,1.2),V(2.5,4.5),V(-.3,.3)),s0:3*t,s1:V(14,22)*t,life:V(7,11),a:.55,drag:.12,c:va,f0:Math.random()*16|0,rv:V(-.15,.15),fin:.06})}splash(e,t=1){this.spl.spawn({p:It.copy(e).setY(-.3),s0:1.5*t,s1:V(3.5,5)*t,life:V(.7,1.1),v:ht.set(0,2.6*t,0),grav:5,f0:Math.random()*4|0,fin:.05,c:Sp}),t>.6&&this.smoke.spawn({p:It.copy(e).setY(.3),s0:1.2*t,s1:3.5*t,life:1.2,a:.35,c:Ip,f0:Math.random()*16|0,v:ht.set(0,.6,0)})}impact(e,t,n){if(t==="water")return this.splash(e,V(.45,.7));if(t==="metal"){for(let i=0;i<5;i++)this.streak.spawn({p:e,v:ht.set(V(-1,1),V(0,1.2),V(-1,1)).normalize().multiplyScalar(V(8,20)),len:.5,w:.06,life:V(.2,.45),c:Mr,grav:9.8});this.flash.spawn({p:e,s0:.9,s1:1.4,life:.06,f0:Math.random()*4|0,em:1,c:Mr}),this.smoke.spawn({p:e,s0:.5,s1:1.6,life:.8,a:.35,c:va,f0:Math.random()*16|0});return}if(t==="concrete"){for(let i=0;i<4;i++)this.streak.spawn({p:e,v:ht.set(V(-1,1),V(.2,1.4),V(-.2,1)).normalize().multiplyScalar(V(5,14)),len:.25,w:.03,life:V(.12,.3),c:Mr,grav:9.8});if(this.flash.spawn({p:e,s0:.25,s1:.45,life:.05,f0:Math.random()*4|0,em:1,c:Mr}),this.smoke.spawn({p:It.copy(e),s0:.15,s1:V(.7,1.1),life:V(.5,.9),a:.7,c:mE,f0:Math.random()*16|0,v:ht.set(V(-.4,.4),V(.8,1.6),V(.2,1.2)),drag:3}),this.smoke.spawn({p:It.copy(e),s0:.3,s1:V(1.2,1.8),life:V(1.2,2),a:.25,c:ya,f0:Math.random()*16|0,v:ht.set(0,.4,.3),drag:1}),this.debris.length<this.debMax-4)for(let i=0;i<2;i++)this.debris.push({p:e.clone(),v:new T(V(-1.5,1.5),V(1.5,3.5),V(0,2.5)),r:new T(V(0,6),V(0,6),0),w:new T(V(-9,9),V(-9,9),0),s:V(.1,.2),age:0,life:2});return}t==="sand"&&(this.smoke.spawn({p:It.copy(e).setY(e.y+.15),s0:.3,s1:V(1,1.4),life:V(.3,.45),a:.75,c:Tp,f0:Math.random()*16|0,v:ht.set(V(-.5,.5),V(1.2,2.2),V(-.5,.5)),drag:3}),this.smoke.spawn({p:It.copy(e).setY(e.y+.2),s0:.5,s1:V(1.6,2.4),life:V(1,1.6),a:.3,c:ya,f0:Math.random()*16|0,v:ht.set(V(-.3,.3),.4,V(-.3,.3)),drag:1}))}bloodHit(e,t,n=1){if(!this.blood){this.smoke.spawn({p:e,s0:.3,s1:1,life:.5,a:.4,c:ya,f0:Math.random()*16|0});return}let i=this.cam?this.cam.distanceTo(e):30;n*=Math.min(2.6,Math.max(1,i/30));for(let r=0;r<3;r++)this.bsp.spawn({p:It.copy(e).addScaledVector(t,.15+r*.3),v:ht.copy(t).multiplyScalar(V(1.2,3)).add(Du.set(V(-.4,.4),V(.4,1.2),V(-.4,.4))),s0:.4*n,s1:V(1.1,1.8)*n,life:V(.35,.6),f0:Math.random()*4|0,grav:5,fin:.05,ease:3,c:Rp});this.bsp.spawn({p:e,s0:.3*n,s1:1.2*n,life:.9,a:.55,f0:Math.random()*4|0,v:ht.set(0,-.25,0),c:Rp})}bloodPool(e,t,n=1){this.blood&&this.bloodD.add(e,t,V(1.4,2.4)*n,void 0,V(.75,.95))}muzzle(e,t,n=1,i=!0){this.flash.spawn({p:e,s0:.9*n,s1:1.3*n,life:.05,f0:Math.random()*4|0,em:2,c:fc,fin:.01}),i&&this.light(e,160*n,.06,16756848)}tracer(e,t,n=700,i=Bp,r=.09){let a=ht.copy(t).sub(e),o=a.length();a.normalize(),this.streak.spawn({p:e,v:a.multiplyScalar(n),len:Math.min(14,o),w:r,life:o/n,c:i})}trailPuff(e,t=1,n=va,i=.5){this.smoke.spawn({p:e,s0:.6*t,s1:V(2.5,4)*t,life:V(1.6,2.6),a:i,c:n,f0:Math.random()*16|0,v:ht.set(V(-.3,.3),.4,V(-.3,.3)),drag:.8,rv:V(-.5,.5)})}wake(e,t=1){this.smoke.spawn({p:It.copy(e).setY(e.y+.1),s0:.8*t,s1:V(2.5,4)*t,life:V(1.2,2),a:.55,c:Dp,f0:Math.random()*16|0,v:ht.set(V(-.6,.6),.3,V(-.6,.6)),drag:1})}dust(e,t=1){this.smoke.spawn({p:e,s0:.8*t,s1:V(3,5)*t,life:V(1.5,2.5),a:.4,c:ya,f0:Math.random()*16|0,v:ht.set(V(-.5,.5),.5,V(-.5,.5)),drag:1})}glowAt(e,t,n,i=fc,r=1){this.glow.spawn({p:e,s0:t,s1:t,life:n,c:i,em:r,fin:.02})}seedBeach(){for(let e=0;e<26;e++){let t=V(-120,120),n=V(-64,-20);Math.abs(t)<8&&n>-30||this.craters.add(t,n,V(3,7),void 0,V(.6,.95))}for(let e=0;e<4;e++){let t=V(-90,90),n=-66,i=V(-.15,.15);for(;n<-24;n+=1.3){t+=i*1.3;for(let r of[-1,1])this.prints.add(t+r*1.45,n,.75,Math.atan2(i,1),.55,void 0,1.35,1)}}for(let e=0;e<14;e++){let t=V(-70,70),n=V(-64,-50),i=V(-.3,.3);for(let r=0;r<18&&n<-20;r++)i+=V(-.15,.15),t+=Math.sin(i)*1.5,n+=Math.cos(i)*1.5,this.prints.add(t,n,.55,i+Math.PI,.5,void 0,.55,0)}}clear(){this.prints.clear();for(let e of[this.exp,this.smoke,this.spl,this.bsp,this.flash,this.glow,this.streak])e.free.push(...e.list),e.list.length=0,e.update?.(0);this.debris.length=0,this.craters.clear(),this.bloodD.clear()}},fc=new ee(1,.75,.45),Sp=new ee(.86,.9,.92),Ip=new ee(.85,.88,.9),va=new ee(.42,.4,.38),Pu=new ee(.16,.15,.14),ya=new ee(.78,.68,.55),Tp=new ee(.72,.6,.45),Mr=new ee(1,.62,.25),Bp=new ee(1,.45,.15),Rp=new ee(1.35,.32,.3),Dp=new ee(.95,.97,1),mE=new ee(.62,.6,.56),gE=new ee(.75,1,.6),Jt={hot:fc,spark:Mr,tracer:Bp,tracerE:gE,smoke:va,dark:Pu,foam:Dp};function _E(){let s=document.createElement("canvas");s.width=256,s.height=128;let e=s.getContext("2d");e.fillStyle="rgba(52,40,28,0.0)",e.fillRect(0,0,256,128);let t=(i,r,a)=>{e.save(),e.translate(i,r),e.rotate(a),e.fillStyle="rgba(48,38,27,0.55)",e.beginPath(),e.ellipse(0,-9,7,13,0,0,6.29),e.fill(),e.beginPath(),e.ellipse(0,12,6,8,0,0,6.29),e.fill(),e.restore()};t(46,34,.08),t(82,94,-.06);for(let i=4;i<128;i+=11)e.fillStyle="rgba(44,34,24,0.6)",e.fillRect(140,i,104,6);return e.fillStyle="rgba(60,46,32,0.25)",e.fillRect(136,0,112,128),new lr(s)}function Fu(s){let e=new Map,t=new Map,n=s.clone();return Lp(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Lp(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Lp(s.children[n],e.children[n],t)}var Te=(s=0,e=0,t=0)=>new T(s,e,t),Je=Te(),tn=Te(),Jn=Te(),bE=new T(0,1,0),sv=new tt,EE=new Ce,se=(s,e)=>s+Math.random()*(e-s),Ti=(s,e,t)=>Math.max(e,Math.min(t,s)),Ca=(s,e,t)=>{let n=e-s;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return s+n*t},Tn=()=>new T(dt.x,dt.h+1.4,dt.z);function Pp(s,e){let t=-62;for(let n=0;n<80;n++){if(Me(s,t)<-e)return t;t-=1.5}return t}var pc=class{constructor(e){this.G=e,this.list=[],this.proj=[],this.corpses=[];let t=e.A;this.hullMat=Ii(t,"rusty-hull-plate"),this.hullMat.color=new ee(.62,.68,.7),this.hullMat.metalness=.25,this.darkMat=new ft({color:2895915,roughness:.8,metalness:.4}),this.helmetMat=new ft({color:3948848,roughness:.75,metalness:.05}),this.packMat=new ft({color:4868405,roughness:.95}),this.helmetGeo=new si(1,14,8,0,Math.PI*2,0,Math.PI*.55),this.helmetGeo.scale(1,.82,1.08),this.brimGeo=new Wt(1.18,1.22,.06,16),this.packGeo=new Be(.34,.42,.18);let n=t.glb.soldier;this.sClips=n?n.animations:[],n&&n.scene.traverse(i=>{i.isMesh&&(i.material=i.material.clone(),i.material.color=new ee(.78,.82,.66),i.castShadow=!0,i.receiveShadow=!1,i.frustumCulled=!1)}),this.mil={};for(let i of["tank","ifv","heli","gunship","chinook","jet","prop","rib"])t.glb[i]&&(this.mil[i]=In(uc(t.glb[i].scene.clone(),i==="jet"?9081238:i==="rib"?4935744:7040846),!0,!1));this.maxSoldiers=e.quality==="low"?34:e.quality==="mid"?56:80}count(e){let t=0;for(let n of this.list)n.alive&&(!e||n.type===e)&&t++;return t}get hostiles(){let e=0;for(let t of this.list)t.alive&&!t.leaving&&e++;return e}soldiersAlive(){let e=0;for(let t of this.list)t.alive&&t.type==="soldier"&&e++;return e}clear(){for(let e of this.list)e.dispose?.();for(let e of this.corpses)e.dispose?.();for(let e of this.proj)e.dispose?.();this.list.length=0,this.corpses.length=0,this.proj.length=0}makeSoldier(e,t){let n=this.G,i=n.A.glb.soldier,r=i?Fu(i.scene):new Re(new Qo(.25,1.2),this.helmetMat),a={},o=null,c=null,l=null,h=null,u=null,d=null,f=null;r.traverse(g=>{g.name==="head"&&(o=g),g.name==="chest"&&(c=g),g.name==="upperarm_L"&&(l=g),g.name==="upperarm_R"&&(h=g),g.name==="forearm_L"&&(u=g),g.name==="forearm_R"&&(d=g),g.name==="spine1"&&(f=g),g.name==="thigh_L"&&(a.thL=g),g.name==="thigh_R"&&(a.thR=g),g.name==="calf_L"&&(a.caL=g),g.name==="calf_R"&&(a.caR=g),g.name==="hips"&&(a.hips=g)}),r.scale.setScalar(se(.96,1.05));let A={type:"soldier",obj:r,alive:!0,hp:30,head:o,chest:c,armL:l,armR:h,foreL:u,foreR:d,spine:f,mixer:null,acts:{},state:"boat",t:0,fireT:se(1,4),speed:se(2.9,3.6),goal:Te(),vel:Te(),yaw:Math.PI,bob:Math.random()*10,...a};if(e?(e.add(r),r.position.copy(t),r.rotation.y=0):this.G.scene.add(r),r.updateMatrixWorld(!0),o){let g=o.getWorldPosition(Te()),m=r.getWorldScale(Te()).x,p=new Re(this.helmetGeo,this.helmetMat);p.castShadow=!0;let _=new Re(this.brimGeo,this.helmetMat);if(_.position.y=.02,p.add(_),p.scale.setScalar(.152),r.add(p),p.position.copy(r.worldToLocal(g.add(Je.set(0,.105*m,0)))),p.updateMatrixWorld(!0),o.attach(p),c){let b=new Re(this.packGeo,this.packMat);b.castShadow=!0;let E=c.getWorldPosition(Te());r.add(b),b.position.copy(r.worldToLocal(E.add(Je.set(0,-.02,-.2*m)))),b.updateMatrixWorld(!0),c.attach(b)}}if(c&&n.A.glb.rifle){let g=n.A.glb.rifle.scene.clone();g.traverse(_=>{_.isMesh&&(_.castShadow=!0)});let m=c.getWorldPosition(Te()),p=r.getWorldScale(Te()).x;g.rotation.set(-.12,.35,0,"YXZ"),r.add(g),g.position.copy(r.worldToLocal(m.add(Je.set(.05*p,-.12*p,.3*p)))),g.updateMatrixWorld(!0),c.attach(g),A.rifle=g,g.traverse(_=>{_.name==="muzzle"&&(A.muzzle=_)})}if(i&&this.sClips.length){A.mixer=new Yo(r);for(let g of this.sClips)A.acts[g.name]=A.mixer.clipAction(g);A.acts.idle&&A.acts.idle.play(),A.cur="idle",A.mixer.update(Math.random()*3)}return A.spheres=[{o:Te().set(0,1.08,0),r:.34},{o:Te().set(0,1.58,.02),r:.15,head:!0}],this.list.push(A),A}playAct(e,t,n=1){if(!e.mixer||!e.acts[t])return;let i=e.acts[t];if(i.timeScale=n,e.cur===t)return;let r=e.acts[e.cur];i.reset().play(),r&&i.crossFadeFrom(r,.25,!1),e.cur=t}poseArms(e,t){let n=t?1:.85;e.armR&&(e.armR.rotation.x+=-.55*n,e.armR.rotation.z+=.25*n),e.armL&&(e.armL.rotation.x+=-.75*n,e.armL.rotation.z+=-.35*n),e.foreR&&(e.foreR.rotation.x+=-.9*n),e.foreL&&(e.foreL.rotation.x+=-1.1*n),e.spine&&e.state==="advance"&&(e.spine.rotation.x+=.22)}poseLegs(e,t){let n=e.pose==="crouch"?1:0;e.crK=(e.crK||0)+(n-(e.crK||0))*Math.min(1,t*5);let i=e.crK;i<.01||!e.thL||(e.hipScale===void 0&&(e.hipScale=e.hips?1/e.hips.parent.getWorldScale(tn).y:1),e.thR.rotation.x+=-1.45*i,e.caR.rotation.x+=1.55*i,e.thL.rotation.x+=.15*i,e.caL.rotation.x+=2*i,e.hips&&(e.hips.position.y-=.4*i*(e.hipScale||1)),e.spine&&(e.spine.rotation.x+=.2*i))}disembark(e,t,n){let i=this.G;e.obj.removeFromParent(),i.scene.add(e.obj),e.obj.position.copy(t),e.yaw=n,e.obj.rotation.set(0,n,0),e.state="advance",e.t=0,this.pickGoal(e)}pickGoal(e){let t=e.obj.position,n=this.G,i=null,r=1e9;if(t.z<-48&&Math.random()<.7)for(let a of n.world.hedgehogs){let o=a.z-t.z;if(o>6&&o<40&&Math.abs(a.x-t.x)<14){let c=o+Math.abs(a.x-t.x)*.6+Math.random()*10;c<r&&(r=c,i=a)}}if(i)e.goal.set(i.x+se(-.5,.5),0,i.z+1.2);else{let a=Math.min(-10,t.z+se(12,24)),o=t.x+se(-8,8);a>-30&&(o=o*.92+Math.sign(o||1)*se(-2,6)),e.goal.set(Ti(o,-150,150),0,a)}e.final=e.goal.z>=-16}updateSoldier(e,t){let n=this.G;e.t+=t;let i=e.obj.position;if(e.state==="boat"){e.mixer&&(e.mixer.update(t),this.poseArms(e,!1));return}if(e.state==="dying")return this.updateDying(e,t);let r=Me(i.x,i.z),a=r<-.2;if(e.state==="advance"){Je.set(e.goal.x-i.x,0,e.goal.z-i.z);let h=Je.length();if(h<1.2)e.state=e.final?"assault":"cover",e.t=0,e.hold=e.final?999:se(2.5,6);else{Je.multiplyScalar(1/h);let u=e.speed*(a?Ti(1+r*.35,.35,.8):1)*(n.diffSpeed||1);i.x+=Je.x*u*t,i.z+=Je.z*u*t,e.yaw=Ca(e.yaw,Math.atan2(Je.x,Je.z),Math.min(1,t*6)),e.crawl===void 0&&i.z>-46&&!e.final&&(e.crawl=Math.random()<.3);let d=e.crawl&&i.z>-46&&i.z<-18;e.pose=d?"crawl":null,d&&(i.x-=Je.x*u*t*.7,i.z-=Je.z*u*t*.7),this.playAct(e,"walk",d?.5:u*.55),a&&Math.random()<t*4?n.fx.wake(tn.set(i.x,0,i.z),.5):!d&&r>-.15&&n.camDist(i)<140&&(e.stepD=(e.stepD||0)+u*t,e.stepD>1.5&&(e.stepD=0,n.fx.prints.add(i.x,i.z,.55,e.yaw+Math.PI,.85,void 0,.55,0)))}}else{let h=Math.atan2(dt.x-i.x,dt.z-i.z);if(e.yaw=Ca(e.yaw,h,Math.min(1,t*4)),this.playAct(e,"idle",1),e.pose=e.state==="cover"?e.crawl&&i.z>-46?"prone":"crouch":null,e.hold-=t,e.hold<=0&&(e.state="advance",this.pickGoal(e)),e.fireT-=t,e.fireT<=0){e.fireT=e.state==="assault"?se(1,2):se(1.6,3.4);let u=e.state==="assault"?3:1+(Math.random()<.4?2:0);for(let d=0;d<u;d++)setTimeout(()=>e.alive&&this.soldierShot(e),d*110)}}let o=a?Math.max(r,r*.25-.9):r;i.y=o;let c=e.pose==="crawl"||e.pose==="prone";e.lieK=(e.lieK||0)+((c?1:0)-(e.lieK||0))*Math.min(1,t*4),e.obj.rotation.set(e.lieK*1.42,e.yaw,0,"YXZ"),i.y+=e.lieK*.16,e.mixer&&n.camDist(i)<260&&(e.mixer.update(t),this.poseArms(e,e.state!=="advance"),this.poseLegs(e,t));let l=e.crK||0;e.spheres[0].o.y=1.08-l*.38-e.lieK*.8,e.spheres[1].o.y=1.58-l*.5-e.lieK*1.3}soldierShot(e){let t=this.G;if(!e.muzzle)return;let n=e.muzzle.getWorldPosition(Te()),i=Tn().add(tn.set(se(-4,4),se(-1.8,1.2),se(-2.5,1)));t.fx.muzzle(n,null,.5,!1),Math.random()<.55&&t.fx.tracer(n,Jn.copy(i).sub(n).multiplyScalar(1.25).add(n),420,Math.random()<.5?Jt.tracerE??Jt.tracer:Jt.tracer,.07);let r=n.distanceTo(i);t.audio.rifle(r);let a=e.state==="assault",o=Math.random()<(a?.55:.25)*(t.diffAcc||1);setTimeout(()=>{if(t.running){if(o)t.damageBase(a?3.5:1.6,i,"bullet");else if(r<260){let c=Math.random();if(c<.45){let l=t.world.parapetTop??dt.h+.6;t.fx.impact(Jn.set(dt.x+se(-3.4,3.4),l-se(0,.25),dt.z-se(2,2.4)),"concrete"),Math.random()<.6&&t.audio.whiz(),t.shake?.(.05)}else c<.75?t.audio.whiz():t.fx.impact(Jn.set(i.x+se(-3,3),0,i.z-se(4,12)).setY(Me(Jn.x,Jn.z)+.1),"sand")}}},r/420*1e3)}killSoldier(e,t,n,i){let r=this.G;e.alive=!1,e.state="dying",e.t=0,e.mixer&&e.mixer.stopAllAction?.();let a=e.obj.position;if(e.obj.parent!==r.scene){let o=e.obj.getWorldPosition(Te()),c=e.obj.getWorldQuaternion(new tt);e.obj.removeFromParent(),r.scene.add(e.obj),e.obj.position.copy(o),e.obj.quaternion.copy(c),e.yaw=new Ft().setFromQuaternion(c,"YXZ").y}if(e.fall={dir:Math.random()<.7?-1:1,twist:se(-.6,.6),dur:se(.55,.85)},i){let o=Je.copy(a).sub(i).setY(0),c=Math.max(1,o.length());o.normalize();let l=Ti(14/c,2,9);e.fly={v:Te().set(o.x*l,se(4,8)*Math.min(1.5,l/5),o.z*l),w:Te().set(se(-6,6),se(-4,4),se(-6,6))},r.fx.blood&&r.fx.bloodHit(tn.set(a.x,a.y+1,a.z),o,1.4)}else if(n){r.fx.bloodHit(tn.set(a.x,a.y+se(1,1.5),a.z),n,1);let o=Math.atan2(n.x,n.z)-e.yaw;e.fall.dir=Math.cos(o)>0?1:-1}r.killed(e,t),this.corpses.push(e),this.corpses.length>(r.quality==="low"?18:40)&&this.corpses.shift().dispose(),e.dispose=()=>{e.obj.removeFromParent()}}updateDying(e,t){let n=this.G;e.t+=t;let i=e.obj.position;if(e.fly){e.fly.v.y-=9.8*t,i.addScaledVector(e.fly.v,t),e.obj.rotation.x+=e.fly.w.x*t,e.obj.rotation.z+=e.fly.w.z*t,e.obj.rotation.y+=e.fly.w.y*t;let l=Math.max(Me(i.x,i.z),-1.2);i.y<=l&&e.fly.v.y<0&&(i.y=l,n.fx.dust(Je.set(i.x,l+.3,i.z),.6),e.fly=null,e.obj.rotation.set((Math.random()<.5?-1:1)*Math.PI/2,e.obj.rotation.y,se(-.3,.3)),e.lieY=l+.12,i.y=e.lieY,l>-.2&&n.fx.bloodPool(i.x,i.z,1.2));return}if(e.lieY!==void 0){if(e.t>45&&(i.y-=t*.25,e.t>50)){e.dispose();let l=this.corpses.indexOf(e);l>=0&&this.corpses.splice(l,1)}return}let r=e.fall,a=Ti(e.t/r.dur,0,1),o=a*a;e.obj.rotation.set(r.dir*o*Math.PI/2*.98,e.yaw+r.twist*o,0,"YXZ");let c=Math.max(Me(i.x,i.z),-1.2);i.y=c+.12*o,a>=1&&(e.lieY=i.y,c>-.2&&n.fx.bloodPool(i.x+Math.sin(e.yaw)*r.dir*.9,i.z+Math.cos(e.yaw)*r.dir*.9,1))}spawnLCVP(e,t){let n=this.G,{group:i,ramp:r}=Mp({hull:this.hullMat,dark:this.darkMat,n:this.lcvpN=(this.lcvpN||0)+1}),a=Pp(e,.9),o={type:"lcvp",obj:i,ramp:r,alive:!0,hp:240,x:e,z:-430-se(0,120),zl:a,speed:se(6.5,8.5),state:"run",t:0,troops:[],yaw:Math.PI*0+0,spheres:[{o:Te(0,.4,-3.4),r:2},{o:Te(0,.4,0),r:2},{o:Te(0,.4,3.4),r:2}],metal:!0,score:300};o.obj.position.set(e,0,o.z),n.scene.add(o.obj);let c=Math.min(t,Math.max(0,this.maxSoldiers-this.soldiersAlive()));for(let l=0;l<c;l++){let h=Math.floor(l/3),u=l%3;o.troops.push(this.makeSoldier(o.obj,Te((u-1)*.85+se(-.08,.08),-.62,3-h*.95)))}return o.dispose=()=>o.obj.removeFromParent(),this.list.push(o),o}spawnRIB(e,t){let n=this.G,i=this.mil.rib;if(!i)return this.spawnLCVP(e,t);let r=new xt,a=i.clone();r.add(a);let o=Pp(e,.5),c={type:"rib",obj:r,alive:!0,hp:90,x:e,z:-600-se(0,200),zl:o,speed:se(13,16),state:"run",t:0,troops:[],spheres:[{o:Te(0,.8,-2.4),r:1.7},{o:Te(0,.8,1.6),r:1.7}],metal:!0,score:150};r.position.set(e,0,c.z),n.scene.add(r);let l=Math.min(t,Math.max(0,this.maxSoldiers-this.soldiersAlive()));for(let h=0;h<l;h++){let u=this.makeSoldier(r,Te(h%2?.55:-.55,.15,1.5-Math.floor(h/2)*1.3));c.troops.push(u)}return c.dispose=()=>r.removeFromParent(),this.list.push(c),c}updateBoat(e,t){let n=this.G;e.t+=t;let i=e.obj;if(!e.alive){i.position.y-=t*.35,i.rotation.x+=t*.04,i.rotation.z+=t*.05*e.sinkDir,e.t<12&&Math.random()<t*8&&n.fx.burn(Je.set(i.position.x,Math.max(.3,i.position.y+1),i.position.z),.9),i.position.y<-6&&(e.dead=!0,e.dispose());return}if(e.state==="run"){let d=Math.sin(e.t*.3+e.x)*.15;e.z+=e.speed*t,e.x+=d*t*2,e.z>=e.zl&&(e.z=e.zl,e.state="land",e.t=0),Math.random()<t*(e.type==="rib"?30:18)&&n.fx.wake(Je.set(e.x+se(-1.5,1.5),0,e.z+se(3.5,5.5)),e.type==="rib"?.8:1.1),Math.random()<t*10&&n.fx.wake(Je.set(e.x+se(-1.5,1.5),0,e.z-5),.7)}else if(e.state==="land"){e.ramp&&(e.ramp.rotation.x=Ti(e.t/1.3,0,1)*1.45);let d=e.type==="rib"?.3:.45,f=e.ramp?1.4:.3;for(;e.troops.length&&e.t>f+(e.out||0)*d;){let A=e.troops.shift();if(e.out=(e.out||0)+1,!A.alive)continue;let g=A.obj.getWorldPosition(Te());g.z+=e.type==="rib"?0:2.5,g.x+=e.type==="rib"?g.x>e.x?1.2:-1.2:0,this.disembark(A,g,0)}!e.troops.length&&e.t>f+5&&(e.state="leave",e.t=0,e.leaving=!0)}else if(e.state==="leave"&&(e.ramp&&(e.ramp.rotation.x=Ti(1.45-e.t/1.5,0,1.45)),e.t>1.5&&(e.z-=e.speed*.6*t*Math.min(1,(e.t-1.5)/3)),e.z<-520)){e.alive=!1,e.dead=!0,e.dispose();return}let r=4.5,a=ba(e.x,e.z+r,n.time),o=ba(e.x,e.z-r,n.time),c=ba(e.x-1.4,e.z,n.time),l=ba(e.x+1.4,e.z,n.time),h=Me(e.x,e.z)+1,u=Math.max((a+o)*.5,h-1);i.position.set(e.x,u+(e.type==="rib"?-.25:0),e.z),i.rotation.set(-Math.atan2(a-o,2*r)*.8,0,Math.atan2(c-l,2.8)*.6,"YXZ"),e.state==="leave"&&(i.rotation.y=0)}spawnTank(e,t){let n=this.G,i=this.mil[t?"ifv":"tank"];if(!i)return null;let r=new xt,a=Fu(i);r.add(a);let o=null,c=null,l=null;a.traverse(u=>{u.name==="turret"&&(o=u),u.name==="gun"&&(c=u),u.name==="ramp"&&(l=u)});let h={type:t?"ifv":"tank",obj:r,turret:o,gun:c,ramp:l,alive:!0,hp:t?420:720,x:e,z:-330-se(0,80),speed:t?4.2:3.4,state:"swim",t:0,stopZ:se(-46,-28),fireT:se(4,7),yaw:0,armor:!0,troops:t?4:0,spheres:[{o:Te(0,1.3,-2.6),r:2},{o:Te(0,1.3,0),r:2.1},{o:Te(0,1.3,2.6),r:2},{o:Te(0,2.8,0),r:1.5}],metal:!0,score:t?450:600};return r.position.set(e,-2,h.z),n.scene.add(r),h.dispose=()=>r.removeFromParent(),this.list.push(h),h}updateTank(e,t){let n=this.G;e.t+=t;let i=e.obj;if(!e.alive){if(e.t<25&&Math.random()<t*9&&n.fx.burn(Je.set(i.position.x,i.position.y+2.2,i.position.z),1.2),e.turretFly){let u=e.turretFly;u.v.y-=9.8*t,u.o.position.addScaledVector(u.v,t),u.o.rotation.x+=u.w*t;let d=Me(u.o.position.x,u.o.position.z);u.o.position.y<d+.8&&(u.o.position.y=d+.8,u.v.set(0,0,0),u.w=0)}e.t>40&&(e.dead=!0,e.dispose());return}let r=Me(e.x,e.z);if(e.state==="swim"||e.state==="drive"){if(e.z+=e.speed*t*(r<-1?.8:1),e.z>=e.stopZ&&(e.state="fight",e.t=0),r<-.5&&Math.random()<t*14&&n.fx.wake(Je.set(e.x+se(-2,2),0,e.z+se(2.5,4.5)),1.1),r>-.3&&(e.trD=(e.trD||0)+e.speed*t,e.trD>1.3)){e.trD=0;let u=e.type==="tank"?1.45:1.25;for(let d of[-1,1])n.fx.prints.add(e.x+d*u,e.z-2.5,.75,0,.9,void 0,1.35,1)}if(r>0&&Math.random()<t*6&&n.fx.dust(Je.set(e.x+se(-1.8,1.8),r+.4,e.z-4),1),e.type==="ifv"&&e.troops&&e.z>-58&&r>.2)for(e.ramp&&(e.ramp.rotation.x=-1.2);e.troops>0;){e.troops--;let u=this.makeSoldier(null,Te());this.disembark(u,Te(e.x+se(-1,1),0,e.z-4.5),se(-.3,.3)),u.yaw=0}}else e.fireT-=t,e.fireT<=0&&(e.fireT=e.type==="tank"?se(6,9)/(n.diffRof||1):se(3.5,5.5),this.tankFire(e));let a=3.2,o=Me(e.x,e.z+a),c=Me(e.x,e.z-a),l=(o+c)*.5,h=Math.atan2(o-c,a*2);if(i.position.set(e.x,l,e.z),i.rotation.set(-h,e.yaw,0,"YXZ"),e.turret){let u=Math.atan2(dt.x-e.x,dt.z-e.z);e.turret.rotation.y=Ca(e.turret.rotation.y,u,Math.min(1,t*1.2))}e.gun&&(e.gun.rotation.x=Ca(e.gun.rotation.x,-.12,t))}tankFire(e){let t=this.G,n=e.obj;n.updateMatrixWorld(!0);let i=(e.gun||n).localToWorld(Te(0,0,e.type==="tank"?5.2:3));(e.gun===void 0||!e.gun)&&i.copy(n.position).add(Je.set(0,2.6,4));let r=Je.copy(Tn()).sub(i).normalize();if(t.fx.muzzle(i,r,e.type==="tank"?4:1.5,!0),t.fx.trailPuff(i,2.2,Jt.smoke,.6),t.audio.cannon&&t.audio.boom(i.distanceTo(Tn())*.6,.5),e.type==="ifv"){for(let c=0;c<5;c++)setTimeout(()=>{if(!e.alive||!t.running)return;let l=Tn().add(tn.set(se(-5,5),se(-2.5,1),se(-4,1)));t.fx.tracer(i,l,600,Jt.tracer,.14),setTimeout(()=>{t.running&&(Math.random()<.3*(t.diffAcc||1)?t.damageBase(3,l,"shell"):t.fx.impact(Jn.set(l.x,Me(l.x,l.z)+.2,l.z-3),"sand"))},180)},c*160);return}let a=Math.random()<.38*(t.diffAcc||1),o=a?Tn().add(tn.set(se(-1.5,1.5),-.8,-1.5)):Tn().add(tn.set(se(-14,14),0,se(-30,-6)));a||(o.y=Me(o.x,o.z)),this.proj.push({kind:"shell",p:i.clone(),v:o.clone().sub(i).normalize().multiplyScalar(260),tgt:o,hit:a,dmg:42,life:3})}spawnHeli(e){let t=this.G,n=this.mil[e]||this.mil.heli;if(!n)return null;let i=new xt,r=n.clone();i.add(r);let a=[];r.traverse(l=>{/^(main_rotor|tail_rotor|front_rotor|rear_rotor)$/.test(l.name)&&a.push(l)});let o=Math.random()<.5?-1:1,c={type:e,obj:i,rotors:a,alive:!0,hp:e==="chinook"?520:e==="gunship"?280:170,air:!0,state:"in",t:0,p:Te(o*se(60,240),se(70,110),-900-se(0,300)),v:Te(),fireT:se(3,5),yaw:0,metal:!0,score:e==="chinook"?700:e==="gunship"?550:400,spheres:e==="chinook"?[{o:Te(0,2.4,-6.5),r:3},{o:Te(0,2.4,0),r:3},{o:Te(0,2.4,6.5),r:3}]:[{o:Te(0,1.6,.6),r:2.2},{o:Te(0,1.8,-4.2),r:1.2}]};return e==="chinook"?(c.hover=Te(se(-60,60),0,se(-52,-34)),c.hover.y=Me(c.hover.x,c.hover.z)+2.2,c.troops=Math.min(8,Math.max(0,this.maxSoldiers-this.soldiersAlive()))):c.hover=Te(se(-110,110),se(28,48),se(-190,-105)),i.position.copy(c.p),t.scene.add(i),c.snd=t.audio.loop&&t.audio.loop("heli"),c.dispose=()=>{i.removeFromParent(),c.snd&&c.snd.stop()},this.list.push(c),c}updateHeli(e,t){let n=this.G;e.t+=t;let i=e.obj;for(let u of e.rotors)u.rotation.y+=t*(/tail/.test(u.name)?70:u.name==="rear_rotor"?-26:26);if(e.snd&&e.snd.set(Ti(.7-n.camDist(e.p)/900,0,.6)),!e.alive){e.v.y-=9.8*t*.8,e.p.addScaledVector(e.v,t),e.spin+=t*4,i.rotation.y+=e.spin*t,i.rotation.z+=t*.4,Math.random()<t*40&&n.fx.burn(Je.copy(e.p).setY(e.p.y+1),.7);let u=Me(e.p.x,e.p.z),d=Math.max(u,0);e.p.y<=d+.5&&(n.explode(Je.copy(e.p).setY(d+.3),2,{big:!0,metal:!0,water:u<-.5}),e.dead=!0,e.dispose()),i.position.copy(e.p);return}let r=e.state==="out"?tn.set(e.p.x+Math.sign(e.p.x||1)*200,90,-1100):e.hover;Je.copy(r).sub(e.p);let a=Je.length(),o=e.state==="in"?42:e.state==="out"?38:9,c=Je.multiplyScalar(a>1?Math.min(o,a*.6)/a:0);if(e.v.lerp(c,Math.min(1,t*.9)),e.p.addScaledVector(e.v,t),e.state==="in"&&a<25&&(e.state="hold",e.t=0),e.state==="hold")if(e.type==="chinook"){if(e.t>2.5&&e.troops>0&&e.t>2.5+(8-e.troops)*.45){e.troops--;let u=this.makeSoldier(null,Te());i.updateMatrixWorld(!0);let d=i.localToWorld(Te(se(-.6,.6),0,-12.5));d.y=Me(d.x,d.z),this.disembark(u,d,0)}e.t>9&&(e.state="out",e.leaving=!0),Math.random()<t*25&&n.fx.dust(Jn.set(e.p.x+se(-14,14),Me(e.p.x,e.p.z)+.5,e.p.z+se(-14,14)),2.2)}else e.hover.x+=Math.sin(e.t*.4)*t*6,e.fireT-=t,e.fireT<=0&&(e.fireT=se(4.5,7)/(n.diffRof||1),this.heliFire(e)),e.t>26&&(e.hover.set(se(-110,110),se(28,48),se(-190,-105)),e.t=0);if(e.state==="out"&&e.p.z<-1e3){e.alive=!1,e.dead=!0,e.dispose();return}let l=e.state==="hold"?Math.atan2(dt.x-e.p.x,dt.z-e.p.z):Math.atan2(e.v.x,e.v.z);e.yaw=Ca(e.yaw,l,Math.min(1,t*1.5));let h=e.v.x*Math.sin(e.yaw)+e.v.z*Math.cos(e.yaw);i.position.copy(e.p).add(Jn.set(0,Math.sin(e.t*1.3)*.3,0)),i.rotation.set(Ti(h*.012,-.3,.35),e.yaw,Ti(-(e.v.x*Math.cos(e.yaw)-e.v.z*Math.sin(e.yaw))*.015,-.4,.4),"YXZ")}heliFire(e){let t=this.G,n=e.obj;if(n.updateMatrixWorld(!0),e.type==="gunship"){let i=n.localToWorld(Te(1.4,1.2,1));for(let r=0;r<10;r++)setTimeout(()=>{if(!e.alive||!t.running)return;let a=Tn().add(tn.set(se(-5,5),se(-2,1),se(-4,1)));t.fx.tracer(i,a,500),t.fx.muzzle(i,null,.6,!1),r%3===0&&t.audio.rifle(i.distanceTo(a)*.5),setTimeout(()=>{t.running&&(Math.random()<.18*(t.diffAcc||1)?t.damageBase(2.2,a,"bullet"):t.fx.impact(Jn.set(a.x,Me(a.x,a.z)+.2,a.z-3),"sand"))},150)},r*90);return}for(let i of[-1.1,1.1]){let r=n.localToWorld(Te(i,.6,1.5)),a=Math.random()<.4*(t.diffAcc||1),o=a?Tn().add(tn.set(se(-1,1),-.6,-1)):Tn().add(tn.set(se(-16,16),0,se(-28,-4)));a||(o.y=Me(o.x,o.z)),setTimeout(()=>{!e.alive||!t.running||(this.proj.push({kind:"rocket",p:r.clone(),v:o.clone().sub(r).normalize().multiplyScalar(110),tgt:o,hit:a,dmg:24,life:4}),t.fx.muzzle(r,null,1.2,!0),t.audio.missile())},i>0?250:0)}}spawnJet(e="jet"){let t=this.G,n=this.mil[e]||this.mil.jet;if(!n)return null;let i=new xt;i.add(n.clone());let r=se(-260,260),a=se(55,85),o={type:e,obj:i,alive:!0,hp:e==="prop"?110:140,air:!0,p:Te(r,a+40,-2600),v:Te(),t:0,dropped:!1,metal:!0,score:650,spheres:[{o:Te(0,1.4,.5),r:3.4},{o:Te(0,1.4,-5),r:2.4}]},c=Te(dt.x+se(-25,25),a,dt.z+600);return o.v.copy(c).sub(o.p).normalize().multiplyScalar(e==="prop"?95:165),i.position.copy(o.p),t.scene.add(i),o.dispose=()=>i.removeFromParent(),o.warned=!1,this.list.push(o),o}updateJet(e,t){let n=this.G;e.t+=t;let i=e.obj;if(!e.alive){e.v.y-=9.8*t,e.p.addScaledVector(e.v,t),i.rotation.z+=t*2,Math.random()<t*40&&n.fx.burn(Je.copy(e.p),.8);let a=Math.max(0,Me(e.p.x,e.p.z));e.p.y<a+1&&(n.explode(Je.copy(e.p).setY(a+.5),2.4,{big:!0,metal:!0,water:Me(e.p.x,e.p.z)<-.5}),e.dead=!0,e.dispose()),i.position.copy(e.p);return}e.p.addScaledVector(e.v,t),i.position.copy(e.p),i.rotation.set(0,Math.atan2(e.v.x,e.v.z),Math.sin(e.t*.7)*.15,"YXZ");let r=dt.z-e.p.z;if(!e.warned&&r<1500&&(e.warned=!0,n.audio.jet(r),n.warn("\u654C\u673A\u6765\u88AD\uFF01")),n.quality!=="low"&&Math.random()<t*20&&n.fx.glowAt(i.localToWorld(Je.set(0,1.3,-7.6)),2.4,.08,Jt.hot,1.5),!e.dropped&&r<(e.type==="prop"?380:520)){e.dropped=!0;let a=e.type==="prop"?0:2;for(let o=0;o<a;o++){let c=Math.random()<.45*(n.diffAcc||1),l=c?Tn().add(tn.set(se(-2,2),-1.2,se(-3,0))):Tn().add(tn.set(se(-30,30),0,se(-45,10)));c||(l.y=Me(l.x,l.z));let h=Math.max(1.2,(l.z-e.p.z)/e.v.z),u=Te((l.x-e.p.x)/h,(l.y-e.p.y+4.9*h*h)/h,(l.z-e.p.z)/h);this.proj.push({kind:"bomb",p:e.p.clone().add(Je.set(o?1.5:-1.5,-1,0)),v:u,g:9.8,tgt:l,hit:c,dmg:55,life:h+1})}if(e.type==="prop"){let o=e.p.clone();for(let c=0;c<14;c++)setTimeout(()=>{if(!n.running)return;let l=e.p.clone(),h=Tn().add(tn.set(se(-6,6),-1,se(-14,4)));h.y=Math.min(h.y,Me(h.x,h.z)+.3),n.fx.tracer(l,h,700,Jt.tracer,.16),setTimeout(()=>{n.fx.impact(h,"sand"),Math.random()<.2&&n.damageBase(3,h,"bullet")},120)},c*60)}}e.p.z>dt.z+2e3&&(e.alive=!1,e.dead=!0,e.dispose())}updateProj(e){let t=this.G;for(let n=0;n<this.proj.length;n++){let i=this.proj[n];i.life-=e;let r=Je.copy(i.p);i.g&&(i.v.y-=i.g*e),i.p.addScaledVector(i.v,e),i.kind==="rocket"&&(Math.random()<e*60&&t.fx.trailPuff(i.p,.7,Jt.smoke,.45),t.fx.glowAt(i.p,1.6,.05,Jt.hot,2)),i.kind==="shell"&&t.fx.glowAt(i.p,.9,.04,Jt.hot,2),i.kind==="bomb"&&!i.whist&&i.p.distanceTo(Tn())<140&&(i.whist=!0,t.audio.incoming()),(i.p.distanceTo(i.tgt)<Math.max(3,i.v.length()*e*1.2)||i.p.y<Me(i.p.x,i.p.z)||i.life<=0)&&(i.hit?(t.damageBase(i.dmg*(t.diffDmg||1),i.tgt,i.kind),t.explode(i.tgt.clone().add(tn.set(0,0,-2.5)),i.kind==="bomb"?1.6:1,{crater:!1,near:!0})):t.explode(Jn.set(i.p.x,Me(i.p.x,i.p.z),i.p.z),i.kind==="bomb"?1.8:1.1,{}),this.proj.splice(n,1),n--)}}update(e){for(let t=0;t<this.list.length;t++){let n=this.list[t];n.type==="soldier"?this.updateSoldier(n,e):n.type==="lcvp"||n.type==="rib"?this.updateBoat(n,e):n.type==="tank"||n.type==="ifv"?this.updateTank(n,e):n.type==="heli"||n.type==="gunship"||n.type==="chinook"?this.updateHeli(n,e):(n.type==="jet"||n.type==="prop")&&this.updateJet(n,e),(n.dead||n.type==="soldier"&&!n.alive)&&(this.list.splice(t,1),t--)}for(let t of this.corpses)t.state==="dying"&&this.updateDying(t,e);this.updateProj(e)}rayHit(e,t,n){let i=null,r=n;for(let a of this.list){if(!a.alive||!a.spheres)continue;let o=a.obj;if(!o.parent)continue;a.type==="soldier"&&a.state,o.updateMatrixWorld();let c=(a.type==="soldier",1);for(let l of a.spheres){let h=Jn.copy(l.o).applyMatrix4(a.type==="soldier"?EE.makeTranslation(o.getWorldPosition(Je)):o.matrixWorld);a.type==="soldier"&&a.state;let u=tn.copy(h).sub(e),d=u.dot(t);if(d<0)continue;let f=u.lengthSq()-d*d,A=l.r*c;if(f>A*A)continue;let g=d-Math.sqrt(A*A-f);g<r&&(r=g,i={e:a,t:g,head:!!l.head,point:e.clone().addScaledVector(t,g)})}}return i}damage(e,t,n,i,r,a){let o=this.G;if(!e.alive)return!1;let c={soldier:{mg:1,he:1,missile:1},lcvp:{mg:.32,he:1,missile:1},rib:{mg:1,he:1.2,missile:1},tank:{mg:.03,he:1,missile:1.1},ifv:{mg:.12,he:1,missile:1.1},heli:{mg:.7,he:1,missile:1.6},gunship:{mg:.6,he:1,missile:1.6},chinook:{mg:.5,he:1,missile:1.4},jet:{mg:.55,he:1,missile:2.5},prop:{mg:.8,he:1,missile:2.5}}[e.type]||{mg:1,he:1,missile:1};return e.hp-=t*(c[n]??1),e.hp>0?(e.type==="soldier"&&i&&o.fx.bloodHit(i,r||bE,.8),!1):(e.alive=!1,e.type==="soldier"?(this.killSoldier(e,n,r,a),!0):(this.destroy(e,n),!0))}destroy(e,t){let n=this.G,i=e.obj;e.t=0,n.killed(e,t);let r=i.getWorldPosition(Te());if(e.type==="lcvp"||e.type==="rib"){n.explode(r.clone().setY(1),e.type==="lcvp"?1.8:1.3,{water:!0,big:!0}),n.fx.explosion(r.clone().setY(1.6),1.2,{water:!1,crater:!1,metal:!0});for(let a of e.troops)a.alive&&(a.alive=!1,this.killSoldier(a,"he",null,r.clone().setY(-1)));e.troops.length=0,e.sinkDir=Math.random()<.5?-1:1}else if(e.type==="tank"||e.type==="ifv"){if(n.explode(r.clone().setY(r.y+1.5),2.2,{big:!0,metal:!0,crater:!0}),i.traverse(a=>{a.isMesh&&a.material&&(a.material=a.material.clone(),a.material.color&&a.material.color.multiplyScalar(.25))}),e.turret&&e.type==="tank"){let a=e.turret,o=a.getWorldPosition(Te());n.scene.attach(a),e.turretFly={o:a,v:Te(se(-3,3),se(9,13),se(-3,3)),w:se(-3,3)}}e.dead=!1}else e.air&&(n.fx.explosion(r,1.3,{crater:!1,metal:!0}),n.audio.boom(n.camDist(r),1.3),e.v.multiplyScalar(.7),e.spin=se(1,3)*(Math.random()<.5?-1:1),(e.type==="jet"||e.type==="prop")&&n.fx.explosion(r,2.2,{crater:!1,big:!0}))}blast(e,t,n,i="he"){let r=0;for(let a of this.list){if(!a.alive)continue;let o=a.obj.getWorldPosition(Je);a.type!=="soldier"&&(o.y+=1.2);let c=o.distanceTo(e),l=t+(a.type==="soldier"?0:a.type==="chinook"?7:3);if(c>l)continue;let h=1-c/l;a.type==="soldier"&&a.state==="boat"||this.damage(a,n*(.35+.65*h),i,null,null,e.clone())&&r++}return r}};var On=(s=0,e=0,t=0)=>new T(s,e,t),Ac=On(),mc=On(),gc=On(),yE=On(),Ri=(s,e)=>s+Math.random()*(e-s),Uu=[{name:"\u91CD\u673A\u67AA",key:"mg",fov:42},{name:"\u69B4\u5F39\u70AE",key:"cannon",fov:26},{name:"\u9632\u7A7A\u5BFC\u5F39",key:"missile",fov:30}];function vE(s=2829610,e=.42,t=.85){return new ft({color:s,roughness:e,metalness:t})}function ME(s){let e=new xt,t=(w,B,x={})=>{let y=Ii(s,w,x);return y.color=new ee(B),y},n=s.tex["rusty-metal_normal"]||null;n&&(n.wrapS=n.wrapT=Zt);let i=new ft({color:4869450,roughness:.45,metalness:.55,normalMap:n,normalScale:new ne(.35,.35)}),r=new ft({color:3026989,roughness:.6,metalness:.45,normalMap:n,normalScale:new ne(.5,.5)}),a=new ft({color:4935993,roughness:.7,metalness:.35}),o=new ft({color:3811868,roughness:.6}),c=(w,B,x,y,L,F=0,U=0,W=0,k=e)=>{let q=new Re(w,B);return q.position.set(x,y,L),q.rotation.set(F,U,W),k.add(q),q};c(new Be(.2,.19,.78),i,0,0,.05),c(new Be(.205,.04,.5),r,0,.11,0),c(new Be(.06,.05,.2),r,0,.15,-.05);let l=new Wt(.016,.016,.22,10);l.rotateZ(Math.PI/2),c(l,r,0,.125,.25);for(let w of[-1,1]){for(let B=0;B<7;B++)c(new si(.007,6,4),r,w*.101,.05-B%2*.07,-.25+Math.floor(B/2)*.16);c(new Be(.008,.12,.6),i,w*.103,-.01,0)}c(new Be(.16,.02,.36),i,0,.135,-.02);for(let w=0;w<4;w++)c(new Be(.17,.006,.01),r,0,.146,-.15+w*.08);for(let w=0;w<5;w++)c(new Be(.21,.012,.012),r,0,.02-w*.03,.3);let h=new Wt(.048,.048,.34,18,1,!0);h.rotateX(Math.PI/2),c(h,i,0,0,-.5);for(let w=0;w<6;w++)c(new ur(.049,.006,6,18),r,0,0,-.38-w*.05);let u=new Wt(.026,.03,1.05,14);u.rotateX(Math.PI/2);let d=c(u,i,0,0,-1),f=new Wt(.038,.03,.12,14);f.rotateX(Math.PI/2),c(f,r,0,0,-1.56),c(new Be(.012,.07,.02),r,0,.055,-1.48);let A=new xt;A.position.set(0,.13,.22),e.add(A),c(new Be(.06,.07,.008),r,0,.035,0,0,0,0,A),c(new Be(.012,.016,.01),i,0,.06,0,0,0,0,A);let g=new Wt(.022,.025,.16,10);c(g,o,-.12,-.02,.5),c(g,o,.12,-.02,.5),c(new Be(.28,.03,.04),r,0,.07,.47),c(new Be(.28,.03,.04),r,0,-.1,.47),c(new Be(.1,.05,.015),i,0,-.01,.45,.4),c(new Be(.02,.03,.12),r,.115,.03,-.1),c(new Be(.12,.12,.3),r,0,-.15,-.05);let m=new Wt(.04,.05,.9,12);c(m,r,0,-.65,-.05);let p;s.glb.ammo?(p=s.glb.ammo.scene.clone(),p.scale.setScalar(1.15),p.position.set(-.27,-.24,0),p.rotation.y=Math.PI/2,e.add(p)):p=c(new Be(.15,.2,.3),a,-.27,-.14,0);let _=new ft({color:11569722,roughness:.35,metalness:.9});for(let w=0;w<9;w++){let B=w/8,x=c(new Wt(.01,.01,.1,6),_,-.24+B*.15,-.05+Math.sin(B*Math.PI)*.05+B*.07,-.02,Math.PI/2,0,0);x.rotation.z=0,x.rotation.x=0,x.rotation.y=0,x.rotation.set(0,0,Math.PI/2)}let b=s.tex["rusty-hull-plate_color"]?t("rusty-hull-plate",7172696,{metalness:.5}):a,E=.014,I=-.5,C=.075,S=-.5;for(let w of[-1,1]){c(new Be(.24,C-I,E),b,w*.19,(I+C)/2,S,0,w*-.12,0);for(let B of[-.4,-.1])c(new Wt(.009,.009,.02,6).rotateX(Math.PI/2),r,w*.24,B,S+.02)}return c(new Be(.14,.44,E),b,0,-.28,S),c(new Be(.64,.025,.03),r,0,C+.005,S),e.traverse(w=>{w.isMesh&&(w.castShadow=!1,w.receiveShadow=!0)}),{g:e,bar:d,muzzleLocal:On(0,0,-1.63)}}function CE(){let s=new xt,e=new ft({color:5330751,roughness:.65,metalness:.3}),t=vE(1908252,.5,.6),n=new Wt(.07,.07,1.5,20);n.rotateX(Math.PI/2);let i=new Re(n,e);i.position.set(0,0,-.35),s.add(i);for(let c of[-1.08,.38]){let l=new Re(new Wt(.082,.082,.08,20).rotateX(Math.PI/2),t);l.position.set(0,0,c),s.add(l)}let r=new Re(new Be(.04,.14,.05),t);r.position.set(0,-.12,-.15),r.rotation.x=.2,s.add(r);let a=new Re(new Be(.07,.09,.16),t);a.position.set(-.11,.06,-.2),s.add(a);let o=new Re(new Be(.08,.06,.18),e);return o.position.set(0,-.09,-.6),s.add(o),{g:s,muzzleLocal:On(0,0,-1.12)}}var _c=class{constructor(e,t){this.G=e,this.cam=t,this.cur=0,this.heat=0,this.over=!1,this.cd=0,this.reload=[0,0,0],this.reloadT=[.09,2.1,3.4],this.mg=ME(e.A),this.mg.g.scale.setScalar(.72),t.add(this.mg.g),this.ml=CE(),this.ml.g.position.set(.24,-.2,-.28),t.add(this.ml.g),this.ml.g.visible=!1,this.kick=0,this.shells=[],this.missiles=[],this.lock=null,this.lockT=0,this.shots=0,this.hits=0,this.switchT=0}select(e){e!==this.cur&&(this.cur=e,this.switchT=.35,this.G.audio.reload(),this.lock=null,this.lockT=0)}aimRay(e=0){let t=Ac.set(Ri(-e,e),Ri(-e,e),-1).normalize().applyQuaternion(this.cam.quaternion);return{o:this.cam.getWorldPosition(mc).clone(),d:t.clone()}}trace(e,t,n=1400){let i=this.G.enemies.rayHit(e,t,n),r=i?{t:i.t,kind:"enemy",e:i.e,head:i.head,p:i.point}:null,a=0,o=2,c=null,l=!0;for(let h=2;h<(r?r.t:n);h+=o){let u=e.x+t.x*h,d=e.y+t.y*h,f=e.z+t.z*h,A=Me(u,f);if(d<Math.max(A,0)){let g=a,m=h;for(let _=0;_<8;_++){let b=(g+m)/2,E=e.y+t.y*b,I=Me(e.x+t.x*b,e.z+t.z*b);E<Math.max(I,0)?m=b:g=b}let p=e.clone().addScaledVector(t,m);c={t:m,kind:Me(p.x,p.z)<0?"water":"sand",p};break}a=h,o=Math.min(8,1+h*.02)}return c&&(!r||c.t<r.t)&&(r=c),r||(r={t:n,kind:"sky",p:e.clone().addScaledVector(t,n)}),r}update(e,t){let n=this.G;this.cd-=e,this.switchT=Math.max(0,this.switchT-e);for(let h=0;h<3;h++)this.reload[h]=Math.max(0,this.reload[h]-e);let i=t&&this.cur===0&&!this.over?.12:.42;this.heat=Math.max(0,this.heat-i*e),this.over&&this.heat<.3&&(this.over=!1),this.kick=Math.max(0,this.kick-e*9);let r=this.cur,a=n.zoomK||0,o=this.switchT/.35;this.mg.g.visible=!this.hideGun&&(r===0||r===1),this.ml.g.visible=!this.hideGun&&r===2;let c=r===1?.55:0;this.mg.g.position.set(0+Ri(-1,1)*this.kick*.004,-.25-c-o*.3+a*.08,-.3+this.kick*.035-a*.05),this.mg.g.rotation.set(.03+this.kick*.02-a*.03,0,0),this.ml.g.position.set(.24-a*.1,-.2-o*.3+a*.05,-.28+this.kick*.05);let l=Math.max(0,this.heat-.45)/.55;this.mg.bar.material.emissive=this.mg.bar.material.emissive||new ee,this.mg.bar.material.emissive.setRGB(l*.9,l*.18,0),r===2?this.updateLock(e):this.lock=null,t&&this.switchT<=0&&this.fire(),this.updateShells(e),this.updateMissiles(e)}fire(){let e=this.G,t=this.cur;if(t===0){if(this.over||this.cd>0)return;this.cd=this.reloadT[0],this.heat+=.034,this.heat>=1&&(this.heat=1,this.over=!0,e.audio.overheat(),e.toast("\u67AA\u7BA1\u8FC7\u70ED\uFF01"));let{o:n,d:i}=this.aimRay(.0028+this.heat*.007),r=this.trace(n,i);this.mg.g.updateMatrixWorld(!0);let a=this.mg.g.localToWorld(gc.copy(this.mg.muzzleLocal)).clone();e.fx.muzzle(a,i,1.1,!0),e.audio.mg(),this.kick=1,e.shake(.06),this.shots++,this.shots%2===0&&e.fx.tracer(a,r.p,850,Jt.tracer,.07),Math.random()<.25&&e.fx.trailPuff(a,.25,Jt.smoke,.18);let o=r.t/850*1e3;setTimeout(()=>{if(e.running)if(r.kind==="enemy"){if(!r.e.alive)return;this.hits++;let c=r.e.type==="soldier",l=c?r.head?60:16:14;c||e.fx.impact(r.p,"metal"),c||e.audio.hitMetal(r.t);let h=e.enemies.damage(r.e,l,"mg",r.p,i);e.hitMark(h)}else r.kind==="water"?e.fx.impact(r.p,"water"):r.kind==="sand"&&e.fx.impact(r.p,"sand")},o)}else if(t===1){if(this.reload[1]>0)return;this.reload[1]=this.reloadT[1];let{o:n,d:i}=this.aimRay(0),r=this.trace(n,i,1600),a=e.world.howitzer,o;a?(a.updateMatrixWorld(!0),o=(e.world.howBarrel||a).localToWorld(On(0,0,4.6))):o=this.cam.getWorldPosition(On()).add(On(6,0,0));let c=r.p.clone(),h=.8+o.distanceTo(c)/240,u=c.clone().sub(o).multiplyScalar(1/h);u.y+=.5*9.8*h,this.shells.push({p:o.clone(),v:u,t:0,T:h,tgt:c}),e.fx.muzzle(o,i,4.5,!0);for(let d=0;d<6;d++)e.fx.trailPuff(o.clone().add(On(Ri(-1,1),Ri(0,1),Ri(-2,0))),2.2,Jt.smoke,.55);e.audio.cannon(),e.shake(.35),this.kick=.6,this.recoilH=1,this.shots++}else{if(this.reload[2]>0)return;this.reload[2]=this.reloadT[2],this.ml.g.updateMatrixWorld(!0);let n=this.ml.g.localToWorld(gc.copy(this.ml.muzzleLocal)).clone(),{o:i,d:r}=this.aimRay(0),a=this.lock&&this.lockT>=.6?null:this.trace(i,r,1600).p;this.missiles.push({p:n,v:r.clone().multiplyScalar(45),t:0,target:this.lock&&this.lockT>=.6?this.lock:null,aim:a}),e.audio.missile(),e.shake(.12),this.kick=1,this.shots++;for(let o=0;o<5;o++)e.fx.trailPuff(this.cam.getWorldPosition(On()).add(On(Ri(-1,1),Ri(-.5,.5),Ri(1,3)).applyQuaternion(this.cam.quaternion)),1.2,Jt.smoke,.4)}}updateLock(e){let t=this.G,n=null,i=.13+(t.zoomK||0)*-.05,r=Ac.set(0,0,-1).applyQuaternion(this.cam.quaternion),a=this.cam.getWorldPosition(yE);for(let o of t.enemies.list){if(!o.alive||!o.air||o.leaving&&o.type==="chinook"&&!1)continue;let c=mc.copy(o.obj.position).sub(a);if(c.length()>1800)continue;let h=c.normalize().angleTo(r);h<i&&(i=h,n=o)}if(n!==this.lock&&(this.lock=n,this.lockT=0),this.lock){let o=this.lockT;this.lockT+=e,o<.6&&this.lockT>=.6?t.audio.lock():Math.floor(this.lockT*6)!==Math.floor(o*6)&&this.lockT<.6&&t.audio.beep(1200)}}updateShells(e){let t=this.G;this.recoilH&&t.world.howBarrel&&(this.recoilH=Math.max(0,this.recoilH-e*2.5),t.world.howBarrel.position.z=-.6*Math.sin(this.recoilH*Math.PI)*this.recoilH);for(let n=0;n<this.shells.length;n++){let i=this.shells[n];i.t+=e,i.v.y-=9.8*e,i.p.addScaledVector(i.v,e),t.fx.glowAt(i.p,.7,.03,Jt.hot,1.5);let r=Me(i.p.x,i.p.z),a=i.t>=i.T||i.p.y<=Math.max(r,0);if(!a){let o=t.enemies.rayHit(i.p,Ac.copy(i.v).normalize(),i.v.length()*e*1.5);o&&o.e.type!=="soldier"&&(a=!0)}if(a){let o=i.t>=i.T?i.tgt:i.p,c=Me(o.x,o.z)<-.3&&o.y<1;t.explode(o,1.5,{water:c,big:!0});let l=t.enemies.blast(o,12,270,"he");this.hits+=l?1:0,this.shells.splice(n,1),n--}}}updateMissiles(e){let t=this.G;for(let n=0;n<this.missiles.length;n++){let i=this.missiles[n];i.t+=e;let r=Math.min(240,45+i.t*260),a=Ac.copy(i.v).normalize();if(i.target&&i.target.alive){let h=mc.copy(i.target.obj.position).add(gc.copy(i.target.v||gc.set(0,0,0)).multiplyScalar(.25)).sub(i.p).normalize(),u=Math.min(1,e*(i.t<.25?1:4.5));a.lerp(h,u).normalize()}else if(i.aim){let h=mc.copy(i.aim).sub(i.p).normalize();a.lerp(h,Math.min(1,e*3)).normalize()}i.v.copy(a).multiplyScalar(r),i.p.addScaledVector(i.v,e),t.fx.glowAt(i.p,1.4,.05,Jt.hot,2.5),Math.random()<e*70&&t.fx.trailPuff(i.p,.55,Jt.smoke,.5);let o=!1,c=null;i.target&&i.target.alive&&i.p.distanceTo(i.target.obj.position)<7&&(o=!0,c=i.target);let l=Me(i.p.x,i.p.z);if(i.p.y<Math.max(l,0)&&(o=!0),i.aim&&i.p.distanceTo(i.aim)<3&&(o=!0),i.t>9&&(o=!0),!o){let h=t.enemies.rayHit(i.p,a,r*e*1.2);h&&(o=!0,c=h.e)}if(o){let h=l<-.3&&i.p.y<1.2;t.explode(i.p.clone(),c&&c.air?1.2:1.1,{water:h,crater:!c||!c.air}),c&&(t.enemies.damage(c,420,"missile",i.p,a),this.hits++),t.enemies.blast(i.p,7,180,"missile"),this.missiles.splice(n,1),n--}}}clear(){this.shells.length=0,this.missiles.length=0,this.heat=0,this.over=!1,this.reload=[0,0,0],this.lock=null}};function Fp(){let s={vol:.8},e=null,t=null,n=null,i=null,r=null,a=null,o=()=>e&&e.state==="running";s.unlock=()=>{if(!e){let f=window.AudioContext||window.webkitAudioContext;if(!f)return;e=new f,n=e.createDynamicsCompressor(),n.threshold.value=-14,n.ratio.value=5,n.attack.value=.003,n.release.value=.25,t=e.createGain(),t.gain.value=s.vol,t.connect(n),n.connect(e.destination);let A=e.sampleRate*2;i=e.createBuffer(1,A,e.sampleRate);let g=i.getChannelData(0);for(let _=0;_<A;_++)g[_]=Math.random()*2-1;r=e.createBuffer(1,A,e.sampleRate);let m=r.getChannelData(0),p=0;for(let _=0;_<A;_++)p=(p+.02*(Math.random()*2-1))/1.02,m[_]=p*3.5}e.state!=="running"&&e.resume()},s.setVol=f=>{s.vol=f,t&&(t.gain.value=f)};let c=(f,A,g,m,p)=>{f.gain.setValueAtTime(1e-4,A),f.gain.exponentialRampToValueAtTime(Math.max(2e-4,m),A+g),f.gain.exponentialRampToValueAtTime(1e-4,A+p)},l=(f,A,g,m,p,_="lowpass",b=.7,E=i,I=t,C=.004)=>{let S=e.createBufferSource();S.buffer=E,S.loop=!0;let w=e.createBiquadFilter();w.type=_,w.Q.value=b,w.frequency.setValueAtTime(g,f),w.frequency.exponentialRampToValueAtTime(Math.max(20,m),f+A);let B=e.createGain();c(B,f,C,p,A),S.connect(w),w.connect(B),B.connect(I),S.start(f,Math.random()*1.5),S.stop(f+A+.05)},h=(f,A,g,m,p,_="sine",b=t,E=.003)=>{let I=e.createOscillator();I.type=_,I.frequency.setValueAtTime(g,f),I.frequency.exponentialRampToValueAtTime(Math.max(10,m),f+A);let C=e.createGain();c(C,f,E,p,A),I.connect(C),C.connect(b),I.start(f),I.stop(f+A+.05)},u=f=>Math.max(.05,1/(1+f/60)),d=f=>Math.min(1.2,f/343);return s.mg=()=>{if(!o())return;let f=e.currentTime;l(f,.09,4500,900,.55,"lowpass",.8),h(f,.08,150,55,.7,"triangle"),l(f,.16,900,120,.35,"lowpass",1,r),l(f+.004,.03,7e3,4e3,.12,"highpass",.6)},s.cannon=()=>{if(!o())return;let f=e.currentTime;h(f,.7,70,28,1,"sine"),l(f,.6,2500,80,1,"lowpass",.6),l(f,2.2,600,40,.45,"lowpass",.5,r),l(f+.02,.1,6e3,2e3,.25,"highpass")},s.missile=()=>{if(!o())return;let f=e.currentTime;l(f,1.6,1800,500,.5,"bandpass",1.2,i,t,.05),h(f,.25,90,50,.4,"triangle"),l(f,.2,3e3,600,.6)},s.boom=(f=30,A=1)=>{if(!o())return;let g=e.currentTime+d(f),m=u(f)*A,p=3500/(1+f/120);l(g,.35,p,100,1.2*m,"lowpass",.7),h(g,1*A,65,22,1.1*m,"sine"),l(g,2.8*Math.sqrt(A),500,30,.8*m,"lowpass",.5,r,t,.02),f<140&&l(g+.25,1.2,4e3,800,.08*m,"highpass",.5,i,t,.2)},s.splash=(f=30,A=1)=>{if(!o())return;let g=e.currentTime+d(f),m=u(f)*A;l(g,1.4,2500,300,.5*m,"lowpass",.6,i,t,.03),h(g,.6,60,25,.7*m,"sine")},s.whiz=()=>{if(!o())return;let f=e.currentTime;l(f,.12,5e3,2e3,.12,"bandpass",4)},s.hitMetal=f=>{if(!o())return;let A=e.currentTime+d(f),g=u(f);h(A,.12,2400+Math.random()*1500,1600,.12*g,"square"),l(A,.05,6e3,3e3,.1*g,"highpass")},s.thud=f=>{if(!o())return;let A=e.currentTime+d(f);l(A,.08,800,200,.18*u(f))},s.rifle=f=>{if(!o())return;let A=e.currentTime+d(f),g=u(f)*.55;l(A,.05,3500/(1+f/100),400,g,"lowpass",.8),l(A,.5,600,80,g*.4,"lowpass",.5,r)},s.incoming=()=>{if(!o())return;let f=e.currentTime;h(f,1.1,1900,500,.08,"sine",t,.3)},s.impactNear=()=>{if(!o())return;let f=e.currentTime;l(f,.6,1800,60,1,"lowpass",.7),h(f,.7,55,20,1,"sine"),l(f+.05,1.5,3e3,300,.25,"lowpass",.5,i,t,.1)},s.overheat=()=>{if(!o())return;let f=e.currentTime;l(f,1.2,6e3,2500,.15,"highpass",.5,i,t,.05)},s.reload=()=>{if(!o())return;let f=e.currentTime;h(f,.06,900,600,.2,"square"),h(f+.18,.08,500,300,.25,"square"),l(f+.18,.08,3e3,800,.2)},s.lock=()=>{if(!o())return;let f=e.currentTime;h(f,.07,1500,1500,.12,"square")},s.beep=(f=880)=>{if(!o())return;let A=e.currentTime;h(A,.1,f,f,.1,"square")},s.alarm=()=>{if(!o())return;let f=e.currentTime;for(let A=0;A<3;A++)h(f+A*.32,.25,700,500,.12,"sawtooth")},s.jet=f=>{if(!o())return;let A=e.currentTime;l(A,3.2,600,3e3,.7*u(f*.3),"bandpass",.7,i,t,1.2),l(A,3.5,200,150,.6,"lowpass",.5,r,t,1)},s.scream=()=>{},s.loop=f=>{if(!e)return null;let A=e.createBufferSource();A.buffer=f==="heli"?r:i,A.loop=!0;let g=e.createBiquadFilter();g.type="lowpass",g.frequency.value=f==="heli"?500:300;let m=e.createGain();m.gain.value=0;let p=null;if(f==="heli"){p=e.createOscillator(),p.frequency.value=17+Math.random()*4;let _=e.createGain();_.gain.value=.6,p.connect(_);let b=e.createGain();b.gain.value=.5,_.connect(b.gain),A.connect(g),g.connect(b),b.connect(m),p.start()}else A.connect(g),g.connect(m);return m.connect(t),A.start(),{set:_=>{m.gain.setTargetAtTime(_,e.currentTime,.1)},stop:()=>{try{A.stop(),p&&p.stop()}catch{}m.disconnect()}}},s.ambience=f=>{if(e){if(f&&!a){let A=e.createBufferSource();A.buffer=r,A.loop=!0;let g=e.createBiquadFilter();g.type="lowpass",g.frequency.value=700;let m=e.createGain();m.gain.value=.25;let p=e.createOscillator();p.frequency.value=.09;let _=e.createGain();_.gain.value=.18,p.connect(_),_.connect(m.gain),p.start();let b=e.createBufferSource();b.buffer=i,b.loop=!0;let E=e.createBiquadFilter();E.type="bandpass",E.frequency.value=500,E.Q.value=.4;let I=e.createGain();I.gain.value=.03,A.connect(g),g.connect(m),m.connect(t),b.connect(E),E.connect(I),I.connect(t),A.start(),b.start(),a={surf:A,wind:b,lfo:p,g:m,wg:I}}else if(!f&&a){try{a.surf.stop(),a.wind.stop(),a.lfo.stop()}catch{}a=null}}},s.distant=()=>{if(!o())return;let f=600+Math.random()*1500,A=e.currentTime;l(A,2.5,300,30,.25,"lowpass",.5,r,t,.05)},s}var me=s=>document.getElementById(s),kt=(s,e)=>s+Math.random()*(e-s),Sa=(s,e,t)=>Math.max(e,Math.min(t,s)),Bi=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,Up=new URLSearchParams(location.search),Np="qtdl.v1.",ys={get(s,e){try{let t=localStorage.getItem(Np+s);return t==null?e:JSON.parse(t)}catch{return e}},set(s,e){try{localStorage.setItem(Np+s,JSON.stringify(e))}catch{}}},Qt=Object.assign({q:Bi?"mid":"high",gore:1,vol:80,sens:100,fps:0},ys.get("settings",{}));Up.get("q")&&(Qt.q=Up.get("q"));Bi&&document.body.classList.add("touch");Bi&&me("rot").classList.add("need");var Ir=me("c"),Tr=mp(Ir,Qt.q),cn=new wo,pt=new qt(58,1,.1,9e3);cn.add(pt);{let s=new Ki(13155496,9,5,2);s.position.set(.25,.45,.15),pt.add(s)}var Zn=new T(dt.x,dt.h+1.62,dt.z+.3);pt.position.copy(Zn);var Kt=Fp();Kt.setVol(Qt.vol/100);var j={scene:cn,camera:pt,audio:Kt,quality:Qt.q,time:0,running:!1,state:"boot",camDist:s=>pt.position.distanceTo(s)};window.__G=j;var jn,oi,pn,Ut,De,Hu,ci,es,Rr=10,Ta=[{name:"\u65B0\u5175",hp:1400,acc:.65,dmg:.7,spd:.92,rof:.8,mul:.8},{name:"\u8001\u5175",hp:1e3,acc:1,dmg:1,spd:1,rof:1,mul:1},{name:"\u7CBE\u82F1",hp:800,acc:1.3,dmg:1.25,spd:1.12,rof:1.25,mul:1.4}],ts=ys.get("diff",1);async function wE(){let s=Bi?"lo":"hi",e=me("bar").firstElementChild,t=me("bootmsg");es=await pp(Tr,s,(n,i,r)=>{e.style.width=(n*100).toFixed(1)+"%",t.textContent=`\u6B63\u5728\u52A0\u8F7D\u6218\u573A ${Math.round(n*100)}%  (${(i/1048576).toFixed(1)} / ${(r/1048576).toFixed(1)} MB)`}),j.A=es,t.textContent="\u6B63\u5728\u90E8\u7F72\u6D77\u5CB8\u9632\u7EBF\u2026",await new Promise(n=>setTimeout(n,30)),SE(),e.style.width="100%";try{Tr.compile(cn,pt)}catch{}zu(),$p(.016),me("boot").classList.add("done"),setTimeout(()=>me("boot").classList.add("hide"),900),qp(),j.state="menu"}function SE(){let s=es.tex.sky_bg;s.colorSpace=Mn,cn.add(_p(s));let e=bp(s);j.horizon=e,cn.fog=new Co(e.clone().multiplyScalar(.62*.9),.0011);let t=xp(13);j.sunDir=t;let n=new ee(1,.8,.6);oi=new pr(n,3.2),oi.position.copy(t).multiplyScalar(320).add(new T(0,0,-60)),oi.target.position.set(0,0,-60),cn.add(oi,oi.target),oi.castShadow=!0;let i=j.quality==="high"?2048:j.quality==="mid"?1536:1024;oi.shadow.mapSize.set(i,i);let r=oi.shadow.camera;r.left=-150,r.right=150,r.top=130,r.bottom=-130,r.near=10,r.far=800,oi.shadow.bias=-4e-4,oi.shadow.normalBias=.6;let a=new Wo(10135224,5917242,.35);if(cn.add(a),es.env){let c=new or(Tr),l=c.fromEquirectangular(es.env).texture;cn.environment=l,cn.environmentIntensity=.55,cn.environmentRotation=new Ft(0,-yr.rot,0),c.dispose()}ci=Cp(es,cn,j.quality,e),j.world=ci;let o=Ep(j.quality==="low"?384:640);Hu=yp(es,o,t,n.clone().multiplyScalar(1.4),e.clone().multiplyScalar(.62),j.quality),cn.add(Hu),pn=new dc(es,cn,j.quality),j.fx=pn,pn.blood=!!Qt.gore,pn.setEnv(cn.fog.color,cn.fog.density,e.clone().multiplyScalar(1.3).add(new ee(.2,.16,.12))),Ut=new pc(j),j.enemies=Ut,De=new _c(j,pt),j.weapons=De,jn=gp(Tr,cn,pt,j.quality),window.addEventListener("resize",zu),window.addEventListener("orientationchange",()=>setTimeout(zu,200))}function zu(){let s=innerWidth,e=innerHeight,t=window.devicePixelRatio||1,n=j.quality==="high"?26e5:j.quality==="mid"?15e5:85e4,i=Math.min(t,j.quality==="high"?2:1.5);s*e*i*i>n&&(i=Math.sqrt(n/(s*e))),Tr.setPixelRatio(i),Tr.setSize(s,e,!1),pt.aspect=s/e,pt.updateProjectionMatrix(),jn&&(jn.comp.setPixelRatio(i),jn.comp.setSize(s,e),jn.bloom&&jn.bloom.resolution.set(s*i/2,e*i/2),jn.grade.uniforms.aspect.value=s/e)}var te={wave:0,score:0,hp:1e3,hpMax:1e3,combo:1,comboT:0,kills:{},waveKills:{},waveScore:0,shots0:0,hits0:0,events:[],wt:0,spawnedAll:!1,god:!1,totalKills:0};j.S=te;var bs=0,Es=-.1,$n=!1,wr=!1,wa=0,Cr=0,IE=1;j.shake=s=>{Cr=Math.min(1.2,Cr+s)};j.toast=s=>Gp(s,"#f3c35a");j.warn=s=>{let e=me("warn");e.textContent=s,clearTimeout(j._wt),j._wt=setTimeout(()=>e.textContent="",2500)};j.explode=(s,e=1,t={})=>{pn.explosion(s,e,t);let n=pt.position.distanceTo(s);t.water&&Kt.splash(n,e),Kt.boom(n,Math.min(1.6,e)),j.shake(Sa(2.2*e/(1+n/25),0,1))};j.damageBase=(s,e,t)=>{if(!j.running||te.god)return;let n=Ta[ts];te.hp=Math.max(0,te.hp-s*n.dmg),Sr=Math.min(1,Sr+(t==="bullet"?.18:.7)),t==="bullet"?(Math.random()<.6&&(pn.impact(new T(Zn.x+kt(-2.2,2.2),Me(Zn.x,Zn.z-2.2)+kt(.4,1.2),Zn.z-kt(1.8,2.6)),Math.random()<.3?"metal":"sand"),Kt.thud(5)),Kt.whiz(),j.shake(.08)):(j.shake(.9),Kt.impactNear()),te.hp<=te.hpMax*.3&&!te.warned&&(te.warned=!0,Kt.alarm(),j.warn("\u9632\u7EBF\u5373\u5C06\u5931\u5B88\uFF01")),te.hp<=0&&Wp(!1)};j.hitMark=s=>{let e=me("hit");e.className=s?"k":"",e.style.opacity=1,clearTimeout(j._ht),j._ht=setTimeout(()=>e.style.opacity=0,s?260:120)};var TE={soldier:"\u6B65\u5175",lcvp:"\u767B\u9646\u8247",rib:"\u7A81\u51FB\u5FEB\u8247",tank:"\u4E24\u6816\u5766\u514B",ifv:"\u6B65\u5175\u6218\u8F66",heli:"\u6B66\u88C5\u76F4\u5347\u673A",gunship:"\u901A\u7528\u76F4\u5347\u673A",chinook:"\u8FD0\u8F93\u76F4\u5347\u673A",jet:"\u6218\u6597\u673A",prop:"\u653B\u51FB\u673A"},RE={soldier:60,lcvp:300,rib:160,tank:650,ifv:480,heli:420,gunship:550,chinook:750,jet:700,prop:500};j.killed=(s,e)=>{if(!j.running)return;te.comboT=2.6,te.combo=Math.min(4,te.combo+(s.type==="soldier"?.15:.5));let t=Math.round(RE[s.type]*Ta[ts].mul*(te.combo>=1.5?Math.floor(te.combo*2)/2:1));te.score+=t,te.waveScore+=t,te.kills[s.type]=(te.kills[s.type]||0)+1,te.waveKills[s.type]=(te.waveKills[s.type]||0)+1,te.totalKills++,s.type!=="soldier"&&Gp(`\u51FB\u6BC1 ${TE[s.type]}  +${t}`,"#f1e8d4")};var Sr=0;function Gp(s,e){let t=me("feed"),n=document.createElement("div");for(n.textContent=s,n.style.color=e,t.prepend(n),setTimeout(()=>n.remove(),3200);t.children.length>6;)t.lastChild.remove()}function BE(s){let e=[],t=(p,_)=>e.push({t:p,f:_}),n=j.quality==="low",i=p=>{let _=[];for(let b=0;b<p;b++)_.push(Sa(-100+200*(b+.5)/p+kt(-12,12),-120,120));return _.sort(()=>Math.random()-.5)},r=Math.min(7,2+Math.ceil(s*.6)),a=Math.min(5,Math.floor(s/2)+1),o=s>=3?Math.min(4,Math.floor((s-1)/2)):0,c=s>=4?Math.min(3,Math.floor((s-2)/3)):0,l=s>=2?Math.min(4,Math.floor(s/2)):0,h=s>=6?Math.floor((s-4)/2):0,u=s>=5?s>=8?2:1:0,d=s>=4?Math.min(5,s-3):0,f=s>=3?Math.min(3,Math.floor(s/3)):0,A=n?6:10,g=n?3:5,m=26+s*5;i(r).forEach((p,_)=>t(1+_*m/r+kt(0,4),()=>Ut.spawnLCVP(p,A))),i(a).forEach((p,_)=>t(6+_*m/a+kt(0,5),()=>Ut.spawnRIB(p,g))),i(o).forEach((p,_)=>t(10+_*m/Math.max(1,o),()=>Ut.spawnTank(p,!1))),i(c).forEach((p,_)=>t(14+_*m/Math.max(1,c),()=>Ut.spawnTank(p,!0)));for(let p=0;p<l;p++)t(12+p*m/l,()=>Ut.spawnHeli("heli"));for(let p=0;p<h;p++)t(20+p*m/Math.max(1,h),()=>Ut.spawnHeli("gunship"));for(let p=0;p<u;p++)t(18+p*22,()=>Ut.spawnHeli("chinook"));for(let p=0;p<d;p++)t(16+p*m/d+kt(0,6),()=>Ut.spawnJet("jet"));for(let p=0;p<f;p++)t(22+p*m/Math.max(1,f),()=>Ut.spawnJet("prop"));return e.sort((p,_)=>p.t-_.t)}function Hp(s){te.wave=s,te.events=BE(s),te.wt=0,te.spawnedAll=!1,te.waveKills={},te.waveScore=0,te.shots0=De.shots,te.hits0=De.hits,te.warned=te.hp<te.hpMax*.3,me("wave").textContent=s,DE(`\u7B2C ${s} \u6CE2`,s===Rr?"\u6700\u540E\u4E00\u6CE2 \xB7 \u5B88\u4F4F\u6D77\u5CB8":["\u654C\u519B\u767B\u9646\u8247\u6B63\u5728\u63A5\u8FD1","\u6CE8\u610F\u7A7A\u4E2D\u76EE\u6807","\u4E24\u6816\u5766\u514B\u51FA\u73B0","\u654C\u673A\u8F70\u70B8 \xB7 \u4F7F\u7528\u9632\u7A7A\u5BFC\u5F39","\u654C\u519B\u8FD0\u8F93\u76F4\u5347\u673A\u673A\u964D","\u5168\u7EBF\u8FDB\u653B","\u88C5\u7532\u96C6\u7FA4","\u7A7A\u5730\u534F\u540C","\u6700\u540E\u7684\u51B2\u51FB"][Math.min(8,s-1)]),Kt.alarm()}function DE(s,e){let t=me("msg");t.innerHTML=s+(e?`<small>${e}</small>`:""),t.style.opacity=1,clearTimeout(j._mt),j._mt=setTimeout(()=>t.style.opacity=0,2800)}function zp(){Ut.clear(),De.clear(),pn.clear(),pn.seedBeach();let s=Ta[ts];Object.assign(te,{score:0,hp:s.hp,hpMax:s.hp,combo:1,comboT:0,kills:{},totalKills:0,warned:!1}),De.shots=0,De.hits=0,j.diffAcc=s.acc,j.diffSpeed=s.spd,j.diffRof=s.rof,j.diffDmg=1,bs=0,Es=-.12,j.running=!0,j.state="play",vs("menu"),Di("hud"),Kp(),Kt.unlock(),Kt.ambience(!0),Bi||Cc(),Hp(1),j.skipIntro||PE()}var LE=[[-360,34,-1020],[-210,20,-720],[-40,11,-430],[14,6.5,-170],[6,10,-32],[Zn.x,Zn.y,Zn.z]].map(s=>new T(...s)),Nu=new ha(LE,!1,"centripetal");function PE(){for(let[s,e]of[[-150,-640],[-70,-500],[-10,-420],[-110,-440]]){let t=Ut.spawnLCVP(s,j.quality==="low"?6:10);t&&(t.z=e,t.x=s)}j.intro={t:0,dur:9,boomT:.4},document.body.classList.add("cine"),De.hideGun=!0}function Vp(){j.intro&&(j.intro=null,document.body.classList.remove("cine"),De.hideGun=!1)}var Ou=new tt,Op=new tt,kp=new Ce,FE=new Ft;function UE(s){let e=j.intro;if(e.t+=s,e.boomT-=s,e.boomT<=0){e.boomT=kt(.35,.8);let a=Nu.getPoint(Math.min(1,e.t/e.dur+kt(.08,.2))),o=a.x+kt(-70,70),c=a.z+kt(-40,40);Math.hypot(o-Zn.x,c-Zn.z)<55||(Me(o,c)<-1?j.explode(xc.set(o,0,c),kt(1.3,2.2),{water:!0}):j.explode(xc.set(o,Me(o,c),c),kt(1.2,1.8),{big:!0}))}let t=Math.min(1,e.t/e.dur),n=t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;Nu.getPoint(n,pt.position);let r=Nu.getPoint(Math.min(1,n+.06),xc.clone()).lerp(Rn.set(0,3,-70),.55);kp.lookAt(pt.position,r,wt.DEFAULT_UP),Ou.setFromRotationMatrix(kp),Op.setFromEuler(FE.set(Es,bs,0,"YXZ")),Ou.slerp(Op,Zo.smoothstep(t,.78,1)),pt.quaternion.copy(Ou),pt.updateMatrixWorld(),t>=1&&Vp()}function NE(){j.running=!1,j.state="summary",$n=!1,Jp();let s=De.shots-te.shots0>0?Math.round((De.hits-te.hits0)/(De.shots-te.shots0)*100):0,e=Math.round(te.hpMax*.15),t=te.hp;te.hp=Math.min(te.hpMax,te.hp+e);let n=[["\u672C\u6CE2\u5F97\u5206",te.waveScore],["\u6B7C\u706D\u6B65\u5175",te.waveKills.soldier||0],["\u51FB\u6BC1\u8230\u8247",(te.waveKills.lcvp||0)+(te.waveKills.rib||0)],["\u51FB\u6BC1\u88C5\u7532",(te.waveKills.tank||0)+(te.waveKills.ifv||0)],["\u51FB\u843D\u98DE\u673A",(te.waveKills.heli||0)+(te.waveKills.gunship||0)+(te.waveKills.chinook||0)+(te.waveKills.jet||0)+(te.waveKills.prop||0)],["\u547D\u4E2D\u7387",s+"%"],["\u62A2\u4FEE\u9632\u7EBF",`+${Math.round((te.hp-t)/te.hpMax*100)}%`],["\u603B\u5206",te.score]];me("sumt").textContent=`\u7B2C ${te.wave} \u6CE2 \xB7 \u51FB\u9000`,me("sumr").textContent=te.waveScore,me("sumg").innerHTML=n.map(([i,r])=>`<span>${i}</span><span>${r}</span>`).join(""),me("bnext").textContent=te.wave>=Rr?"\u67E5\u770B\u6218\u62A5":"\u4E0B\u4E00\u6CE2",me("bnext").classList.remove("hide"),Di("sum")}function OE(){let s=te.hp/te.hpMax,e=De.shots?De.hits/De.shots:0,t=(te.wave>=Rr&&te.hp>0?50:te.wave*4)+s*30+e*40+Math.min(20,te.score/5e3);return t>=105?"S":t>=90?"A":t>=70?"B":t>=50?"C":"D"}function Wp(s){j.running=!1,j.state="over",$n=!1,Jp();let e=OE(),t=ys.get("best",null),n=!t||te.score>t.score;n&&ys.set("best",{score:te.score,wave:te.wave,rating:e,diff:ts});let i=De.shots?Math.round(De.hits/De.shots*100):0;me("sumt").textContent=s?"\u6D77\u5CB8\u5B88\u4F4F\u4E86\uFF01":`\u9632\u7EBF\u5931\u5B88 \xB7 \u7B2C ${te.wave} \u6CE2`,me("sumr").innerHTML=`${e}<div style="font-size:14px;color:#a59b88;letter-spacing:.3em;margin-top:4px">\u6218\u6597\u8BC4\u7EA7</div>`;let r=te.kills,a=[["\u603B\u5206",te.score+(n?"  \u65B0\u7EAA\u5F55!":"")],["\u575A\u5B88\u6CE2\u6570",`${s?Rr:te.wave-1} / ${Rr}`],["\u6B7C\u706D\u6B65\u5175",r.soldier||0],["\u51FB\u6BC1\u8230\u8247",(r.lcvp||0)+(r.rib||0)],["\u51FB\u6BC1\u88C5\u7532",(r.tank||0)+(r.ifv||0)],["\u51FB\u843D\u98DE\u673A",(r.heli||0)+(r.gunship||0)+(r.chinook||0)+(r.jet||0)+(r.prop||0)],["\u547D\u4E2D\u7387",i+"%"],["\u96BE\u5EA6",Ta[ts].name]];me("sumg").innerHTML=a.map(([o,c])=>`<span>${o}</span><span>${c}</span>`).join(""),me("bnext").textContent="\u518D\u6765\u4E00\u5C40",Di("sum"),Kt.ambience(!1)}me("bnext").onclick=()=>{if(Kt.unlock(),vs("sum"),j.state==="over"){zp();return}if(te.wave>=Rr){Wp(!0);return}j.running=!0,j.state="play",Bi||Cc(),Hp(te.wave+1)};me("bmenu").onclick=()=>{vs("sum"),Xp()};function Di(s){me(s).classList.remove("hide")}function vs(s){me(s).classList.add("hide")}function Kp(){for(let s of["mset","mhelp","mcred","mpause","sum"])vs(s)}function qp(){Di("menu"),vs("hud");let s=ys.get("best",null);me("best").textContent=s?`\u6700\u9AD8\u5206 ${s.score} \xB7 \u8BC4\u7EA7 ${s.rating} \xB7 \u575A\u5B88\u81F3\u7B2C ${s.wave} \u6CE2\uFF08${Ta[s.diff??1].name}\uFF09`:"\u8FD8\u6CA1\u6709\u6218\u7EE9\uFF0C\u53BB\u5B88\u4F4F\u7B2C\u4E00\u6CE2\u5427\u3002";for(let e of me("diff").children)e.classList.toggle("on",+e.dataset.d===ts);j.state="menu",Yp()}function Xp(){j.running=!1,Ut.clear(),De.clear(),pn.clear(),Kt.ambience(!1),Kp(),qp()}function Yp(){Ut.clear();for(let s=0;s<3;s++)Ut.spawnLCVP(-90+s*80+kt(-10,10),j.quality==="low"?3:5).z=-380+s*60;Ut.spawnHeli("heli")}me("bstart").onclick=()=>{Kt.unlock(),zp()};for(let s of me("diff").children)s.onclick=()=>{ts=+s.dataset.d,ys.set("diff",ts);for(let e of me("diff").children)e.classList.toggle("on",e===s)};me("bset").onclick=()=>{Mc(),Di("mset")};me("bpset").onclick=()=>{Mc(),Di("mset")};me("bhelp").onclick=()=>Di("mhelp");me("bcred").onclick=()=>Di("mcred");for(let s of document.querySelectorAll("[data-close]"))s.onclick=()=>s.closest(".modal").classList.add("hide");me("bresume").onclick=()=>{vs("mpause"),j.running=!0,j.state="play",Bi||Cc()};me("bquit").onclick=()=>{vs("mpause"),Xp()};function vc(){j.state==="play"&&(j.running=!1,j.state="pause",$n=!1,Di("mpause"))}function Mc(){for(let s of me("sq").children)s.classList.toggle("on",s.dataset.q===Qt.q);for(let s of me("sg").children)s.classList.toggle("on",+s.dataset.g===Qt.gore);for(let s of me("sf").children)s.classList.toggle("on",+s.dataset.f===Qt.fps);me("svol").value=Qt.vol,me("ssens").value=Qt.sens}var Ra=()=>ys.set("settings",Qt);for(let s of me("sq").children)s.onclick=()=>{Qt.q!==s.dataset.q&&(Qt.q=s.dataset.q,Ra(),location.reload())};for(let s of me("sg").children)s.onclick=()=>{Qt.gore=+s.dataset.g,pn&&(pn.blood=!!Qt.gore),Ra(),Mc()};for(let s of me("sf").children)s.onclick=()=>{Qt.fps=+s.dataset.f,Ra(),Mc()};me("svol").oninput=s=>{Qt.vol=+s.target.value,Kt.setVol(Qt.vol/100),Ra()};me("ssens").oninput=s=>{Qt.sens=+s.target.value,Ra()};function Cc(){if(Ir.requestPointerLock)try{let s=Ir.requestPointerLock();s&&s.catch&&s.catch(()=>{})}catch{}}function Jp(){document.pointerLockElement&&document.exitPointerLock()}var qu=!1,Vu=0,Wu=0,Ku=(s,e,t=1)=>{let n=pt.fov/58,i=.0023*Qt.sens/100*n*t;bs=Sa(bs-s*i,-1.35,1.35),Es=Sa(Es-e*i,-.5,.62)};document.addEventListener("pointerlockchange",()=>{!document.pointerLockElement&&j.state==="play"&&!Bi&&!j.noAutoPause&&vc()});for(let s of["pointerdown","keydown"])window.addEventListener(s,()=>{j.intro&&j.intro.t>.6&&Vp()},!0);Ir.addEventListener("mousedown",s=>{Bi||j.state!=="play"||(Kt.unlock(),document.pointerLockElement||(Cc(),qu=!0,Vu=s.clientX,Wu=s.clientY),s.button===0&&($n=!0),s.button===2&&(wr=!0))});window.addEventListener("mouseup",s=>{s.button===0&&($n=!1),s.button===2&&(wr=!1),qu=!1});window.addEventListener("mousemove",s=>{j.state==="play"&&(document.pointerLockElement?Ku(s.movementX,s.movementY):qu&&(Ku(s.clientX-Vu,s.clientY-Wu),Vu=s.clientX,Wu=s.clientY))});Ir.addEventListener("contextmenu",s=>s.preventDefault());window.addEventListener("wheel",s=>{j.state==="play"&&De.select((De.cur+(s.deltaY>0?1:2))%3)});window.addEventListener("keydown",s=>{j.state==="play"?(s.key>="1"&&s.key<="3"&&De.select(+s.key-1),s.code==="Space"&&($n=!0),(s.key==="q"||s.key==="Q")&&De.select((De.cur+2)%3),(s.key==="e"||s.key==="E")&&De.select((De.cur+1)%3),(s.key==="p"||s.key==="P")&&vc()):j.state==="pause"&&(s.key==="Escape"||s.key==="p")&&me("bresume").onclick()});window.addEventListener("keyup",s=>{s.code==="Space"&&($n=!1)});for(let s of document.querySelectorAll("#wlist span"))s.onclick=()=>De.select(+s.dataset.w);var Ia=new Map,Ec=0;function jp(){$n=Ec>0,me("tfire").classList.toggle("on",$n),me("tfire2").classList.toggle("on",$n)}Ir.addEventListener("touchstart",s=>{Kt.unlock();for(let e of s.changedTouches)e.clientX>innerWidth*.35&&Ia.set(e.identifier,{x:e.clientX,y:e.clientY});s.preventDefault()},{passive:!1});function kE(s){for(let e of s.changedTouches){let t=Ia.get(e.identifier);t&&(j.state==="play"&&Ku(e.clientX-t.x,e.clientY-t.y,1.35),t.x=e.clientX,t.y=e.clientY)}s.preventDefault()}function Zp(s){for(let e of s.changedTouches){let t=Ia.get(e.identifier);t&&t.fire&&(Ec=Math.max(0,Ec-1),jp()),Ia.delete(e.identifier)}}window.addEventListener("touchmove",kE,{passive:!1});window.addEventListener("touchend",Zp);window.addEventListener("touchcancel",Zp);for(let s of["tfire","tfire2"])me(s).addEventListener("touchstart",e=>{Kt.unlock();for(let t of e.changedTouches)Ia.set(t.identifier,{x:t.clientX,y:t.clientY,fire:!0}),Ec++;jp(),e.preventDefault(),e.stopPropagation()},{passive:!1});me("tzoom").addEventListener("touchstart",s=>{wr=!wr,me("tzoom").classList.toggle("on",wr),s.preventDefault(),s.stopPropagation()},{passive:!1});for(let s of["tw0","tw1","tw2"])me(s).addEventListener("touchstart",e=>{De.select(+me(s).dataset.w),e.preventDefault(),e.stopPropagation()},{passive:!1});me("tpause").addEventListener("touchstart",s=>{vc(),s.preventDefault(),s.stopPropagation()},{passive:!1});document.addEventListener("visibilitychange",()=>{document.hidden&&vc()});document.addEventListener("gesturestart",s=>s.preventDefault());var Qp=performance.now(),QE=0,ku=0,Qu=0,Gu=0,yc={last:{}};function $i(s,e){yc.last[s]!==e&&(yc.last[s]=e,me(s).textContent=e)}var Rn=new T,xc=new T;function GE(s){j.time+=s,Hu.material.uniforms.time.value=j.time;let e=j.state==="play";if(e){for(te.wt+=s;te.events.length&&te.events[0].t<=te.wt;)te.events.shift().f();!te.events.length&&te.wt>5&&Ut.hostiles===0&&Ut.proj.length===0&&NE(),te.comboT-=s,te.comboT<=0&&(te.combo=Math.max(1,te.combo-s*2))}j.state==="menu"&&(Gu+=s,Ut.hostiles<2&&Gu>8&&(Gu=0,Yp())),(j.state==="play"||j.state==="menu"||j.state==="boot")&&Ut.update(s),wa+=((wr&&e?1:0)-wa)*Math.min(1,s*10),j.zoomK=wa,j.state==="menu"&&(bs=Math.sin(j.time*.05)*.35-.05,Es=-.1+Math.sin(j.time*.07)*.03);let t=58+(Uu[De.cur].fov-58)*wa;Math.abs(pt.fov-t)>.01&&(pt.fov=t,pt.updateProjectionMatrix()),Cr=Math.max(0,Cr-s*2.4);let n=Cr*Cr*.05;if(pt.position.copy(j.freeCam||Zn),pt.rotation.set(Es+(Math.random()-.5)*n,bs+(Math.random()-.5)*n,(Math.random()-.5)*n*.6,"YXZ"),pt.updateMatrixWorld(),j.intro&&UE(s),e?De.update(s,$n&&!j.intro):De.update(s,!1),ci.howitzer){let i=ci.howitzer,r=Math.PI+bs*.9;i.rotation.y+=(r-i.rotation.y)*Math.min(1,s*2),ci.howBarrel&&(ci.howBarrel.rotation.x=-Sa(.08+Es*.6,-.05,.6))}if(pn.update(s,pt.position),j.fires||(j.fires=[[-48,-30,1],[95,-150,1.6],[-150,-200,1.8],[40,-320,2.2]].map(([i,r,a])=>({p:new T(i,Math.max(0,Me(i,r))+.5,r),s:a}))),!j.fires.burnAdded&&ci.fleet.burning){j.fires.burnAdded=!0;for(let i of ci.fleet.burning)j.fires.push({p:i,s:5})}for(let i of j.fires)Math.random()<s*(j.quality==="low"?2.5:5)&&pn.burn(i.p,i.s);if(Qu-=s,Qu<=0){Qu=kt(1.5,4.5);let i=ci.fleet.flashes[Math.floor(Math.random()*ci.fleet.flashes.length)];if(pn.glowAt(i.clone().add(Rn.set(kt(-40,40),kt(5,15),0)),kt(25,45),.18,(pn.glow,void 0),3),setTimeout(()=>Kt.distant(),2e3+Math.random()*3e3),j.state!=="menu"&&Math.random()<.25){let r=kt(-200,200),a=kt(-260,-150);j.explode(xc.set(r,0,a),kt(1.2,1.8),{water:!0})}}if(Sr=Math.max(0,Sr-s*1.4),me("dmg").style.opacity=Sr.toFixed(2),e){$i("score",te.score),$i("combo",te.combo>=1.5?`\u8FDE\u6740 \xD7${(Math.floor(te.combo*2)/2).toFixed(1)}`:"");let i=Math.round(te.hp/te.hpMax*100);$i("basev",i+"%"),me("basebar").firstElementChild.style.width=i+"%",$i("left",te.events.length?"\u654C\u519B\u6B63\u5728\u767B\u9646\u2026":`\u5269\u4F59\u654C\u519B ${Ut.hostiles}`);let r=De.cur;$i("wname",Uu[r].name);let a=r===0?De.over?"\u8FC7\u70ED \xB7 \u51B7\u5374\u4E2D":"\u6E29\u5EA6 "+Math.round(De.heat*100)+"%":De.reload[r]>0?`\u88C5\u586B\u4E2D ${De.reload[r].toFixed(1)}s`:r===2?De.lock?De.lockT>=.6?"\u5DF2\u9501\u5B9A \xB7 \u5F00\u706B\uFF01":"\u9501\u5B9A\u4E2D\u2026":"\u5C31\u7EEA \xB7 \u5BF9\u51C6\u98DE\u673A\u9501\u5B9A":"\u5C31\u7EEA";$i("wstat",a);let o=me("heat");if(o.firstElementChild.style.width=(r===0?De.heat*100:(1-De.reload[r]/De.reloadT[r])*100)+"%",o.classList.toggle("hot",r===0&&(De.over||De.heat>.8)),yc.last.w!==r){yc.last.w=r;for(let l of document.querySelectorAll("#wlist span"))l.classList.toggle("on",+l.dataset.w===r);for(let l of["tw0","tw1","tw2"])me(l).classList.toggle("on",+me(l).dataset.w===r)}if(r===1){let l=De.trace(pt.position,Rn.set(0,0,-1).applyQuaternion(pt.quaternion),1600);$i("range",`\u843D\u70B9\u8DDD\u79BB ${Math.round(l.t)} m \xB7 \u98DE\u884C ${(.8+l.t/240).toFixed(1)} s`)}else $i("range","");let c=me("lock");r===2&&De.lock&&De.lock.alive?(Rn.copy(De.lock.obj.position).project(pt),Rn.z<1?(c.style.display="block",c.style.left=(Rn.x+1)/2*innerWidth+"px",c.style.top=(1-Rn.y)/2*innerHeight+"px",c.classList.toggle("ok",De.lockT>=.6)):c.style.display="none"):c.style.display="none",me("scope").classList.toggle("on",wa>.6&&r!==0)}}function $p(s){let e=jn.grade.uniforms;e.time.value=j.time,e.dmg.value=Sr*.8,e.exposure.value=1,Rn.copy(pt.position).add(j.sunDir.clone().multiplyScalar(1e3)).project(pt),e.sunUV.value.set((Rn.x+1)/2,(Rn.y+1)/2,Rn.z<1&&Math.abs(Rn.x)<1.6&&Math.abs(Rn.y)<1.6?1:0),jn.comp.render(s)}function bc(s){requestAnimationFrame(bc);let e=Math.min(.05,(s-Qp)/1e3);Qp=s,!(j.state==="boot"&&!jn)&&(e*=IE,jn&&(GE(e),$p(e)),ku++,QE+=(performance.now()-s)/1e3+0,s-(bc.t0||0)>1e3&&(Qt.fps?me("fps").textContent=ku+" fps":me("fps").textContent="",bc.t0=s,ku=0))}requestAnimationFrame(bc);wE().catch(s=>{console.error(s),me("bootmsg").textContent="\u52A0\u8F7D\u5931\u8D25\uFF1A"+(s&&s.message)+"\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5"});})();
