/* PRAGMA BIM V7 - architectural viewer imported from approved published source. */
/* Isolated within INCORP CYCLE; source PRAGMA website untouched. */
const ARCH_408_GZ_B64="";
(()=>{
const defs=[
 ['arch','Arquitetônico','#6c4aa0',['vivatti','arquitet','arquitetonico']],
 ['gas','Central de Gás','#d78a37',['central de gas','gas']],
 ['struct','Estrutural','#7b7f88',['estrutural','estrutura']],
 ['hydro','Hidrossanitário','#3f8bc9',['hidrossanit','hidraul']],
 ['fire','Projeto de Incêndio','#c84f54',['incendio','pscip','pci']],
 ['electric','Elétrico','#d3a82f',['eletrico','eletrica']],
 ['feeders','Elétrico Alimentadores','#b98522',['alimentador']],
 ['spda','SPDA','#4c8d78',['spda']],
 ['telecom','Telecom','#9b64b4',['telecom','cabeamento','dados']]
];
const explain={arch:'Modelo arquitetônico de referência, usado como base espacial para a leitura coordenada das demais disciplinas.',gas:'Infraestrutura da central de gás e sua relação com arquitetura, shafts e áreas técnicas.',struct:'Elementos estruturais para leitura de interferências com passagens, prumadas e instalações.',hydro:'Redes hidrossanitárias, prumadas, ramais, reservação e drenagem do empreendimento.',fire:'Projeto de prevenção e combate a incêndio integrado ao modelo coordenado.',electric:'Infraestrutura elétrica geral, pontos, circuitos e distribuição.',feeders:'Alimentadores elétricos e trajetos principais de distribuição de energia.',spda:'Sistema de proteção contra descargas atmosféricas, captação, descidas e aterramento.',telecom:'Cabeamento, telecomunicações e infraestrutura de dados integrada às demais disciplinas.'};

const ar=document.querySelector('.ar');
const MODEL_URLS={
 arch:{name:'Arquitetônico 408 · IFC R02 · Visual V3',url:'https://static.wixstatic.com/3d/a8bcb7_5fc6972b45464f4395fbf736e685d186.glb',fallback:'https://static.wixstatic.com/3d/a8bcb7_6d70221311164f3993e9354917b66f73.glb'},
 gas:{name:'Central de Gás',url:'https://static.wixstatic.com/3d/a8bcb7_afdf0f44f9224d469edac3aa5a40a4e4.glb',fallback:'https://static.wixstatic.com/3d/a8bcb7_045785781f2a41679087bc5c984277b5.glb'},
 struct:{name:'Estrutural',url:'https://static.wixstatic.com/3d/a8bcb7_b925d2c25bb64e2e847d8beca125ebd5.glb',fallback:'https://static.wixstatic.com/3d/a8bcb7_979c789eb8c64bb291bdb6a250433c0d.glb'},
 hydro:{name:'Hidrossanitário',url:'https://static.wixstatic.com/3d/a8bcb7_097a2df4bb4f4039b91a62895666e9dc.glb',fallback:'https://static.wixstatic.com/3d/a8bcb7_88c5c928a76149879afc96fa637aebbc.glb'},
 fire:{name:'Projeto de Incêndio',url:'https://static.wixstatic.com/3d/a8bcb7_211f866347754f7ea94fa2544f2553e1.glb',fallback:'https://static.wixstatic.com/3d/a8bcb7_67dd4218d32448a8aa8d67ac420b6d0f.glb'},
 electric:{name:'Elétrico',url:'https://static.wixstatic.com/3d/a8bcb7_24cfb9029744455f8f0cb3fd02bff28a.glb',fallback:'https://static.wixstatic.com/3d/a8bcb7_3ef30bec66534ef19370ea23d1304cc5.glb'},
 feeders:{name:'Elétrico Alimentadores',url:'https://static.wixstatic.com/3d/a8bcb7_aefc46f75a7549329bc9768dc5ca0b31.glb',fallback:'https://static.wixstatic.com/3d/a8bcb7_db6b9182355d46b0afc8fcf15b688ee1.glb'},
 spda:{name:'SPDA',url:'https://static.wixstatic.com/3d/a8bcb7_fffd9e7347244054914f9623230c13dc.glb',fallback:'https://static.wixstatic.com/3d/a8bcb7_25cd0af3c1344e66b0d00e9812303b9c.glb'},
 telecom:{name:'Telecom',url:'https://static.wixstatic.com/3d/a8bcb7_86907ff118e1427cba0372af6509296e.glb',fallback:'https://static.wixstatic.com/3d/a8bcb7_52a770c30526450fafdd7e6a59373c62.glb'}
};
const rows=defs.map(d=>'<div class="layer-row" style="--layer:'+d[2]+'" data-row="'+d[0]+'"><label><input type="checkbox" data-layer="'+d[0]+'" checked><i></i></label><button class="layer-name" data-layer-name="'+d[0]+'" aria-pressed="false">'+d[1]+'</button></div>').join('');
ar.innerHTML='<div class="pbimLab"><div class="pbimCanvasWrap"><canvas class="pbimCanvas" id="bimCanvas"></canvas><div class="pbimOrigin">INCORP CYCLE · MODELO INTEGRADO</div><div class="pbimWalkHint">Clique no 3D para ativar SETAS / WASD · Q/E para altura</div><button type="button" class="pbimFsBtn" id="pbimFsBtn" aria-label="Tela cheia" title="Tela cheia"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"/></svg></button><div class="pbimLoad" id="bimLoad" role="status" aria-live="polite"><div class="pragmaV27LoaderCard"><span class="pragmaV27LoaderIcon" aria-hidden="true"></span><strong id="bimLoadText">Preparando visualização 3D</strong><p class="pragmaV27LoaderCaption">Organizando as disciplinas</p><div class="pbimProgress"><i id="bimProgressBar"></i></div><small class="pragmaV27LoaderPercent" id="bimProgressNumber">0%</small></div></div><div class="pbimView"><button type="button" data-view="general" class="is-active" aria-pressed="true">Vista geral</button><button type="button" data-view="front" aria-pressed="false">Frontal</button><button type="button" data-view="top" aria-pressed="false">Superior</button></div></div><aside class="pbimLayers"><h3>Disciplinas</h3><div class="fine">Clique no nome ou no seletor para mostrar e ocultar a disciplina.</div><div id="layerRows">'+rows+'</div><div class="pbimExplain"><strong id="explainTitle">Modelo integrado</strong><p id="explainText">Os nove arquivos são carregados diretamente do Media Manager desta página.</p></div><div class="pbimCut"><span>Corte horizontal</span><input id="cutRange" type="range" min="0" max="100" value="0"><small><span id="cutValue">0%</span> · corte de cima para baixo.</small></div></aside></div>';

const pragmaArchCheckbox=ar.querySelector('[data-layer="arch"]');
if(pragmaArchCheckbox)pragmaArchCheckbox.checked=true;
const explainTitle=document.getElementById('explainTitle'),explainText=document.getElementById('explainText');
const loadBox=document.getElementById('bimLoad'),loadText=document.getElementById('bimLoadText'),progressBar=document.getElementById('bimProgressBar');
const cut=document.getElementById('cutRange'),cutValue=document.getElementById('cutValue');
function selectLayer(key){
 const d=defs.find(x=>x[0]===key);if(!d)return;
 explainTitle.textContent=d[1];explainText.textContent=explain[key]||'';
 ar.querySelectorAll('.layer-name').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.layerName===key)));
}
let THREE,OrbitControls,GLTFLoader,DRACOLoader,KTX2Loader,MeshoptDecoder,renderer,scene,camera,controls,root,plane,dracoLoader,ktx2Loader;
const models={},loading={};let readyCount=0,started=false;
async function importThree(){
 const [t,c,l,d,k,m]=await Promise.all([
  import('https://cdn.jsdelivr.net/npm/three@0.186.1/+esm'),
  import('https://cdn.jsdelivr.net/npm/three@0.186.1/examples/jsm/controls/OrbitControls.js/+esm'),
  import('https://cdn.jsdelivr.net/npm/three@0.186.1/examples/jsm/loaders/GLTFLoader.js/+esm'),
  import('https://cdn.jsdelivr.net/npm/three@0.186.1/examples/jsm/loaders/DRACOLoader.js/+esm'),
  import('https://cdn.jsdelivr.net/npm/three@0.186.1/examples/jsm/loaders/KTX2Loader.js/+esm'),
  import('https://cdn.jsdelivr.net/npm/three@0.186.1/examples/jsm/libs/meshopt_decoder.module.js/+esm')
 ]);
 THREE=t;OrbitControls=c.OrbitControls;GLTFLoader=l.GLTFLoader;DRACOLoader=d.DRACOLoader;KTX2Loader=k.KTX2Loader;MeshoptDecoder=m.MeshoptDecoder||m.default||m;
}

/* PRAGMA V23 — desempenho adaptativo sem modificar modelos ou coordenadas */
const pragmaBimPerf={
  maxDpr:(navigator.deviceMemory&&navigator.deviceMemory<=4)?1.35:Math.min(2,Math.max(1.6,(window.devicePixelRatio||1)*1.12)),
  minDpr:(navigator.deviceMemory&&navigator.deviceMemory<=4)?1:1.2,
  pixelRatio:1,
  visible:true,width:0,height:0,fps:0,drawCalls:0
};
pragmaBimPerf.pixelRatio=pragmaBimPerf.maxDpr;

let pragmaV28GestureFrame=null;
function setupScene(){
 const canvas=document.getElementById('bimCanvas');
 renderer=new THREE.WebGLRenderer({canvas,antialias:true,powerPreference:'high-performance'});
 renderer.setPixelRatio(pragmaBimPerf.pixelRatio);
 renderer.setClearColor(0x232830,1);renderer.localClippingEnabled=true;
 scene=new THREE.Scene();root=new THREE.Group();root.position.set(0,0,0);root.rotation.set(0,0,0);root.scale.set(1,1,1);scene.add(root);
 camera=new THREE.PerspectiveCamera(38,1,.01,100000);scene.add(camera);
 scene.add(new THREE.HemisphereLight(0xffffff,0x6a6270,2));
 const sun=new THREE.DirectionalLight(0xffffff,2.6);sun.position.set(5,8,6);scene.add(sun);
 controls=new OrbitControls(camera,canvas);controls.enableDamping=true;controls.dampingFactor=.075;controls.rotateSpeed=.82;controls.zoomSpeed=.9;controls.panSpeed=.88;
 plane=new THREE.Plane(new THREE.Vector3(0,-1,0),1e9);renderer.clippingPlanes=[plane];
 dracoLoader=new DRACOLoader();
 dracoLoader.setDecoderPath('https://cdn.jsdelivr.net/npm/three@0.186.1/examples/jsm/libs/draco/');
 dracoLoader.setDecoderConfig({type:'wasm'});
 ktx2Loader=new KTX2Loader();
 ktx2Loader.setTranscoderPath('https://cdn.jsdelivr.net/npm/three@0.186.1/examples/jsm/libs/basis/');
 ktx2Loader.detectSupport(renderer);

 function resize(){
   const bounds=canvas.parentElement.getBoundingClientRect();
   const w=Math.max(1,Math.round(bounds.width)),h=Math.max(1,Math.round(bounds.height));
   if(w===pragmaBimPerf.width&&h===pragmaBimPerf.height)return;
   pragmaBimPerf.width=w;pragmaBimPerf.height=h;
   renderer.setSize(w,h,false);
   camera.aspect=Math.max(.01,w/h);
   camera.updateProjectionMatrix();
 }
 resize();
 new ResizeObserver(resize).observe(canvas.parentElement);
 if(typeof IntersectionObserver==='function'){
   const observer=new IntersectionObserver(entries=>{
     pragmaBimPerf.visible=entries.some(e=>e.isIntersecting);
   },{rootMargin:'140px 0px',threshold:0});
   observer.observe(canvas.parentElement);
 }
 let previous=performance.now(),sampleStart=previous,frames=0;
 function renderLoop(now){
   requestAnimationFrame(renderLoop);
   const fullscreen=!!document.fullscreenElement||
     !!canvas.closest('.pbimFullscreenFallback');
   if(document.hidden||(!pragmaBimPerf.visible&&!fullscreen)){
     previous=now;sampleStart=now;frames=0;
     return;
   }
   const dt=Math.min(.06,Math.max(.001,(now-previous)/1000||1/60));
   previous=now;
   controls.dampingFactor=1-Math.pow(.925,dt*60);
   if(pragmaV28GestureFrame)pragmaV28GestureFrame(now);
   controls.update(dt);
   renderer.render(scene,camera);
   frames++;
   const elapsed=now-sampleStart;
   if(elapsed<3200)return;
   const fps=frames*1000/elapsed;
   pragmaBimPerf.fps=Math.round(fps*10)/10;
   pragmaBimPerf.drawCalls=renderer.info.render.calls;
   if(readyCount>=7){
     let next=pragmaBimPerf.pixelRatio;
     if(fps<40)next=Math.max(pragmaBimPerf.minDpr,next-.13);
     else if(fps>57)next=Math.min(pragmaBimPerf.maxDpr,next+.06);
     next=Math.round(next*100)/100;
     if(Math.abs(next-pragmaBimPerf.pixelRatio)>.025){
       pragmaBimPerf.pixelRatio=next;
       renderer.setPixelRatio(next);
     }
   }
   window.PRAGMA_BIM_PERFORMANCE={
     version:'V23',fps:pragmaBimPerf.fps,
     pixelRatio:pragmaBimPerf.pixelRatio,
     maxPixelRatio:pragmaBimPerf.maxDpr,
     drawCalls:pragmaBimPerf.drawCalls,
     edgesBatched:true,pausedOffscreen:!pragmaBimPerf.visible
   };
   frames=0;sampleStart=now;
 }
 requestAnimationFrame(renderLoop);

}

function initBimWalkControls(){
 const wrap=document.querySelector('.pbimCanvasWrap');
 const lab=document.querySelector('.pbimLab');
 const canvas=document.getElementById('bimCanvas');
 const fsBtn=document.getElementById('pbimFsBtn');
 if(!wrap||!lab||!canvas||!fsBtn)return;

 canvas.tabIndex=0;
 controls.enableZoom=false;
 canvas.setAttribute('aria-label','Visualizador 3D. Clique para ativar as setas e WASD, Q e E.');
 const keys=new Set();
 let walkEnabled=false;
 let last=performance.now();

 function panelActive(){
   const r=ar.getBoundingClientRect();
   return r.right>innerWidth*.20&&r.left<innerWidth*.80&&r.bottom>innerHeight*.20&&r.top<innerHeight*.80;
 }
 function isTypingTarget(t){
   return !!(t&&t.closest&&t.closest('input,textarea,select,[contenteditable="true"]'));
 }
 let pragmaCachedWalkScale=1,pragmaCachedWalkUntil=0;
 function movementScale(){
   const now=performance.now();
   if(now<pragmaCachedWalkUntil)return pragmaCachedWalkScale;
   pragmaCachedWalkUntil=now+2200;
   const b=visibleBox();
   if(!b||b.isEmpty())return pragmaCachedWalkScale;
   const size=b.getSize(new THREE.Vector3());
   pragmaCachedWalkScale=Math.max(.15,Math.max(size.x,size.y,size.z)*.0035);
   return pragmaCachedWalkScale;
 }
 function keyName(e){
   if(e.code==='KeyW'||e.key==='ArrowUp')return 'forward';
   if(e.code==='KeyS'||e.key==='ArrowDown')return 'back';
   if(e.code==='KeyA'||e.key==='ArrowLeft')return 'left';
   if(e.code==='KeyD'||e.key==='ArrowRight')return 'right';
   if(e.code==='KeyQ')return 'up';
   if(e.code==='KeyE')return 'down';
   return '';
 }
 function keyDown(e){
   const k=keyName(e);
   if(!k||isTypingTarget(e.target))return;
   if(document.activeElement!==canvas)return;
   walkEnabled=true;
   keys.add(k);
   e.preventDefault();
   e.stopPropagation();
 }
 function keyUp(e){
   const k=keyName(e);
   if(!k)return;
   keys.delete(k);
   if(!keys.size)walkEnabled=false;
 }
 addEventListener('keydown',keyDown,true);
 addEventListener('keyup',keyUp,true);
 addEventListener('blur',()=>{keys.clear();walkEnabled=false});
 canvas.addEventListener('blur',()=>{keys.clear();walkEnabled=false;controls.enableZoom=false});
 document.addEventListener('pointerdown',event=>{
  if(event.target!==canvas&&document.activeElement===canvas)canvas.blur();
 },true);
 document.addEventListener('visibilitychange',()=>{if(document.hidden){keys.clear();walkEnabled=false;canvas.blur()}});

 canvas.addEventListener('pointerdown',()=>{
   controls.enableZoom=true;
   try{canvas.focus({preventScroll:true})}catch(_){canvas.focus()}
 });

 function resizeRenderer(){
   const r=wrap.getBoundingClientRect();
   renderer.setSize(Math.max(1,r.width),Math.max(1,r.height),false);
   camera.aspect=Math.max(.01,r.width/Math.max(1,r.height));
   camera.updateProjectionMatrix();
 }
 async function toggleFullscreen(){
   try{
     if(document.fullscreenElement===lab){
       await document.exitFullscreen();
       return;
     }
     if(document.fullscreenElement)await document.exitFullscreen();
     if(lab.requestFullscreen){
       await lab.requestFullscreen();
       setTimeout(resizeRenderer,120);
       return;
     }
   }catch(_){}
   const on=lab.classList.toggle('pbimFullscreenFallback');
   document.body.style.overflow=on?'hidden':'';
   setTimeout(resizeRenderer,120);
 }

 fsBtn.addEventListener('click',e=>{
   e.preventDefault();
   e.stopPropagation();
   toggleFullscreen();
 });

 document.addEventListener('fullscreenchange',()=>setTimeout(resizeRenderer,100));

 addEventListener('keydown',e=>{
   if(e.key==='Escape'&&lab.classList.contains('pbimFullscreenFallback')){
     lab.classList.remove('pbimFullscreenFallback');
     document.body.style.overflow='';
     setTimeout(resizeRenderer,100);
   }
 },true);

 (function walkLoop(now){
   requestAnimationFrame(walkLoop);
   const dt=Math.min(.05,(now-last)/1000||0);
   last=now;
   if(!walkEnabled||!keys.size||!camera||!controls)return;

   const speed=movementScale()*dt*60;
   const forward=new THREE.Vector3();
   camera.getWorldDirection(forward);
   forward.y=0;
   if(forward.lengthSq()<1e-6)forward.set(0,0,-1);
   forward.normalize();

   const right=new THREE.Vector3().crossVectors(forward,new THREE.Vector3(0,1,0)).normalize();
   const up=new THREE.Vector3(0,1,0);
   const delta=new THREE.Vector3();

   if(keys.has('forward'))delta.addScaledVector(forward,speed);
   if(keys.has('back'))delta.addScaledVector(forward,-speed);
   if(keys.has('right'))delta.addScaledVector(right,speed);
   if(keys.has('left'))delta.addScaledVector(right,-speed);
   if(keys.has('up'))delta.addScaledVector(up,speed);
   if(keys.has('down'))delta.addScaledVector(up,-speed);

   if(delta.lengthSq()>0){
     camera.position.add(delta);
     controls.target.add(delta);
     controls.update();
   }
 })(performance.now());
}
function visibleBox(){
 const b=new THREE.Box3();let any=false;
 Object.values(models).forEach(g=>{if(g&&g.visible){b.expandByObject(g);any=true}});
 return any?b:null;
}
function updateCut(){
 const b=visibleBox();if(!b||b.isEmpty())return;
 const t=Number(cut.value)/100;
 plane.constant=b.max.y-t*(b.max.y-b.min.y);
 cutValue.textContent=Math.round(t*100)+'%';
}
function fit(view='general',initialZoom=1){
 const b=visibleBox();if(!b||b.isEmpty())return;
 const size=b.getSize(new THREE.Vector3()),center=b.getCenter(new THREE.Vector3());
 const r=Math.max(size.x,size.y,size.z,1),d=r*1.55/Math.max(1,initialZoom);
 controls.target.copy(center);
 if(view==='front')camera.position.set(center.x,center.y+r*.12,center.z+d);
 else if(view==='top')camera.position.set(center.x,center.y+d,center.z+.001);
 else camera.position.set(center.x+d*.8,center.y+d*.55,center.z+d*.8);
 camera.near=Math.max(.01,d/1000);camera.far=d*30;camera.updateProjectionMatrix();controls.update();updateCut();
}


const STRUCT_RAW_URL='https://static.wixstatic.com/3d/a8bcb7_94f66ad7b987438c8ce2d1a31161f8d3.glb';
let sharedCoordFix=null,sharedCoordFixPromise=null;

function modelBox(obj){
 obj.updateMatrixWorld(true);
 return new THREE.Box3().setFromObject(obj);
}
function sizeScore(a,b){
 const eps=1e-6;
 return Math.pow(Math.log((a.x+eps)/(b.x+eps)),2)
      + Math.pow(Math.log((a.y+eps)/(b.y+eps)),2)
      + Math.pow(Math.log((a.z+eps)/(b.z+eps)),2);
}
async function deriveStructuralCorrection(){
 if(sharedCoordFix)return sharedCoordFix;
 if(sharedCoordFixPromise)return sharedCoordFixPromise;
 sharedCoordFixPromise=(async()=>{
   const corrected=models.struct||await loadModel('struct');
   const raw=await loaderPromise(STRUCT_RAW_URL);

   corrected.position.set(0,0,0);
   corrected.rotation.set(0,0,0);
   corrected.scale.set(1,1,1);
   corrected.updateMatrix();
   corrected.updateMatrixWorld(true);

   const targetBox=modelBox(corrected);
   const targetSize=targetBox.getSize(new THREE.Vector3());
   const quarter=[0,Math.PI/2,-Math.PI/2,Math.PI];
   let best=null;

   for(const rx of quarter){
     for(const ry of quarter){
       for(const rz of quarter){
         raw.position.set(0,0,0);
         raw.rotation.set(rx,ry,rz);
         raw.scale.set(1,1,1);
         raw.updateMatrix();
         raw.updateMatrixWorld(true);
         const box=modelBox(raw);
         const size=box.getSize(new THREE.Vector3());
         const score=sizeScore(size,targetSize);
         if(!best||score<best.score){
           best={score,rotation:[rx,ry,rz]};
         }
       }
     }
   }

   raw.position.set(0,0,0);
   raw.rotation.set(best.rotation[0],best.rotation[1],best.rotation[2]);
   raw.scale.set(1,1,1);
   raw.updateMatrix();
   raw.updateMatrixWorld(true);

   const rawBox=modelBox(raw);
   const tc=targetBox.getCenter(new THREE.Vector3());
   const rc=rawBox.getCenter(new THREE.Vector3());

   sharedCoordFix={
     rotation:best.rotation,
     position:[
       tc.x-rc.x,
       targetBox.min.y-rawBox.min.y,
       tc.z-rc.z
     ],
     score:best.score
   };
   return sharedCoordFix;
 })();
 return sharedCoordFixPromise;
}

async function coordinateToArchitecture(key,obj){
 if(!obj)return;

 // Corrected structural overlay is already the reference: do not move it again.
 if(key==='struct'){
   obj.position.set(0,0,0);
   obj.rotation.set(0,0,0);
   obj.scale.set(1,1,1);
   obj.updateMatrix();
   obj.updateMatrixWorld(true);
   return;
 }

 // These four disciplines receive exactly the transform inferred
 // from Original Structural -> Corrected Structural.
 if(['spda','electric','feeders','telecom'].includes(key)){
   const fix=await deriveStructuralCorrection();
   obj.position.set(fix.position[0],fix.position[1],fix.position[2]);
   obj.rotation.set(fix.rotation[0],fix.rotation[1],fix.rotation[2]);
   obj.scale.set(1,1,1);
   obj.updateMatrix();
   obj.updateMatrixWorld(true);
   return;
 }

 // New 408 architecture: preserve X/Z and orientation, but put its physical base at Y=0.
 if(key==='arch'){
   obj.position.set(0,0,0);
   obj.rotation.set(0,0,0);
   obj.scale.set(1,1,1);
   obj.updateMatrix();
   obj.updateMatrixWorld(true);
   const box=modelBox(obj);
   if(!box.isEmpty()){
     obj.position.y -= box.min.y;
     obj.updateMatrix();
     obj.updateMatrixWorld(true);
   }
   return;
 }

 // Gas, hydro and fire remain in their native coordinates.
 obj.position.set(0,0,0);
 obj.rotation.set(0,0,0);
 obj.scale.set(1,1,1);
 obj.updateMatrix();
 obj.updateMatrixWorld(true);
}


async function autoCoordinateFinalSet(){
  const arch=models.arch;
  const hydro=models.hydro;
  const fire=models.fire;
  const structural=models.struct;
  if(!arch||!structural)return;

  function centerOf(obj){
    const b=modelBox(obj);
    return {box:b,center:b.getCenter(new THREE.Vector3())};
  }

  // 1. Use Hydro + Fire as the stable federated anchor for the new 408 architecture.
  const anchors=[hydro,fire].filter(Boolean).map(centerOf).filter(x=>!x.box.isEmpty());
  if(anchors.length){
    const ref=new THREE.Vector3();
    anchors.forEach(a=>ref.add(a.center));
    ref.multiplyScalar(1/anchors.length);

    const a=centerOf(arch);
    arch.position.x += ref.x-a.center.x;
    arch.position.y += ref.y-a.center.y;
    arch.position.z += ref.z-a.center.z;
    arch.updateMatrix();
    arch.updateMatrixWorld(true);
  }

  // 2. Compute ONE final translation using Structural vs Architecture.
  //    X/Z use building center. Y uses the roof/top so piles do not drag the structure downward.
  const ab=modelBox(arch);
  const sb=modelBox(structural);
  if(ab.isEmpty()||sb.isEmpty())return;

  const ac=ab.getCenter(new THREE.Vector3());
  const sc=sb.getCenter(new THREE.Vector3());
  const finalShift=new THREE.Vector3(
    ac.x-sc.x,
    ab.max.y-sb.max.y,
    ac.z-sc.z
  );

  // 3. Preserve the relative coordination already created by the structural orientation fix:
  //    apply exactly the same final translation to Structural + SPDA + Electrical + Feeders + Telecom.
  ['struct','spda','electric','feeders','telecom'].forEach(key=>{
    const obj=models[key];
    if(!obj)return;
    obj.position.add(finalShift);
    obj.updateMatrix();
    obj.updateMatrixWorld(true);
  });

  window.PRAGMA_BIM_ALIGNMENT={
    version:'v3',
    architectureAnchor:'hydro+fire centers',
    groupReference:'structural roof + building center',
    shift:{x:finalShift.x,y:finalShift.y,z:finalShift.z}
  };

  pragmaLockEightModels();
  pragmaStructuralFinish("solid");
  updateCut();
}


/* PRAGMA V18 — BIM federado definitivo · nove modelos travados */
const PRAGMA_APPROVED_ALIGNMENT=Object.freeze({longitudinalX:1.55,transversalZ:-0.05});
const PRAGMA_PRIOR_POSITION=Object.freeze({x:-6.15,y:-0.45,z:1.10});
const PRAGMA_HYDRO_POSITION=Object.freeze({x:-11.20,y:-1.81,z:-1.10});
const PRAGMA_GAS_POSITION=Object.freeze({x:-5.32,y:-5.25,z:3.16});
const PRAGMA_ELECTRIC_POSITION=Object.freeze({x:-2.08,y:-6.20,z:0.00});
const PRAGMA_TELECOM_POSITION=Object.freeze({x:-1.34,y:-5.95,z:-0.10});
const PRAGMA_LOCKED_POSITION=Object.freeze({x:6.20,y:-15.00,z:12.48});
let pragmaLinkedGroup=null;
const pragmaLinkedOffsets={...PRAGMA_LOCKED_POSITION};



function pragmaLockEightModels(){
  if(pragmaLinkedGroup)return true;
  const arch=models.arch,structural=models.struct;
  const fire=models.fire,hydro=models.hydro,gas=models.gas;
  const electric=models.electric,telecom=models.telecom,feeders=models.feeders;
  const status=document.getElementById('pragmaLinkedStatus');
  if(!arch||!structural){
    if(status)status.textContent='Aguardando Arquitetônico 408 e Estrutural';
    return false;
  }

  // Recreate prior approved placement and capture each discipline at its original lock step.
  arch.position.x-=PRAGMA_APPROVED_ALIGNMENT.longitudinalX;
  arch.position.z-=PRAGMA_APPROVED_ALIGNMENT.transversalZ;
  arch.updateMatrix();arch.updateMatrixWorld(true);
  root.updateMatrixWorld(true);
  const linked=new THREE.Group();
  linked.name='PRAGMA · 8 disciplinas travadas · SPDA independente';
  root.add(linked);
  linked.attach(arch);linked.attach(structural);
  linked.position.set(PRAGMA_PRIOR_POSITION.x,PRAGMA_PRIOR_POSITION.y,PRAGMA_PRIOR_POSITION.z);
  linked.updateMatrixWorld(true);
  if(fire){root.updateMatrixWorld(true);linked.attach(fire);linked.updateMatrixWorld(true)}
  linked.position.set(PRAGMA_HYDRO_POSITION.x,PRAGMA_HYDRO_POSITION.y,PRAGMA_HYDRO_POSITION.z);
  linked.updateMatrixWorld(true);
  if(hydro){root.updateMatrixWorld(true);linked.attach(hydro);linked.updateMatrixWorld(true)}
  linked.position.set(PRAGMA_GAS_POSITION.x,PRAGMA_GAS_POSITION.y,PRAGMA_GAS_POSITION.z);
  linked.updateMatrixWorld(true);
  if(gas){root.updateMatrixWorld(true);linked.attach(gas);linked.updateMatrixWorld(true)}
  linked.position.set(PRAGMA_ELECTRIC_POSITION.x,PRAGMA_ELECTRIC_POSITION.y,PRAGMA_ELECTRIC_POSITION.z);
  linked.updateMatrixWorld(true);
  if(electric){root.updateMatrixWorld(true);linked.attach(electric);linked.updateMatrixWorld(true)}

  // Restore V16 position when Telecom and Feeders were originally joined.
  linked.position.set(PRAGMA_TELECOM_POSITION.x,PRAGMA_TELECOM_POSITION.y,PRAGMA_TELECOM_POSITION.z);
  linked.updateMatrix();linked.updateMatrixWorld(true);
  if(telecom){root.updateMatrixWorld(true);linked.attach(telecom);linked.updateMatrixWorld(true)}
  if(feeders){root.updateMatrixWorld(true);linked.attach(feeders);linked.updateMatrixWorld(true)}
  // Move eight locked models together to the V17 screenshot position.
  linked.position.set(pragmaLinkedOffsets.x,pragmaLinkedOffsets.y,pragmaLinkedOffsets.z);
  linked.updateMatrix();linked.updateMatrixWorld(true);
  pragmaLinkedGroup=linked;
  const members=['arch','struct','fire','hydro','gas','electric','telecom','feeders']
    .filter(key=>models[key]&&linked.children.includes(models[key]));
  if(status){
    status.textContent=members.length===8?'Travados · os 8 movem juntos':'Grupo travado · '+members.length+'/8 modelos';
    status.style.color='#4a845f';
  }
  window.PRAGMA_BIM_LOCK_STATE={
    linked:true,version:'V17',members,
    relativeAlignment:{longitudinalX:1.55,transversalZ:-0.05},
    groupMove:{...pragmaLinkedOffsets},approvedGroupMove:{...PRAGMA_LOCKED_POSITION},
    previousElectricPosition:{...PRAGMA_ELECTRIC_POSITION},
    telecomWorldPositionPreserved:!!telecom,
    feedersWorldPositionPreserved:!!feeders,
    spdaIndependent:true
  };
  updateCut();
  return true;
}

function pragmaMoveLinkedModels(axis,value){
  if(!pragmaLinkedGroup||!['x','y','z'].includes(axis))return;
  const n=Number(value);
  if(!Number.isFinite(n))return;
  const limit=axis==='y'?50:30;
  const next=Math.round(Math.max(-limit,Math.min(limit,n))*100)/100;
  pragmaLinkedOffsets[axis]=next;
  pragmaLinkedGroup.position.set(pragmaLinkedOffsets.x,pragmaLinkedOffsets.y,pragmaLinkedOffsets.z);
  pragmaLinkedGroup.updateMatrix();
  pragmaLinkedGroup.updateMatrixWorld(true);
  const range=document.getElementById('pragmaLinkedRange'+axis.toUpperCase());
  const num=document.getElementById('pragmaLinkedNum'+axis.toUpperCase());
  if(range)range.value=String(next);
  if(num)num.value=next.toFixed(2);
  if(window.PRAGMA_BIM_LOCK_STATE)window.PRAGMA_BIM_LOCK_STATE.groupMove={...pragmaLinkedOffsets};
  updateCut();
}

function pragmaStructuralFinish(mode){
  const s=models.struct;if(!s)return;
  s.traverse(node=>{
    if(!node.isMesh||!node.material)return;
    if(!node.userData.pragmaOriginalMaterials){
      node.userData.pragmaOriginalMaterials=Array.isArray(node.material)?node.material.slice():[node.material];
      node.material=Array.isArray(node.material)?node.material.map(m=>m.clone()):node.material.clone();
    }
    const materials=Array.isArray(node.material)?node.material:[node.material];
    for(const m of materials){
      if(!m)continue;
      m.transparent=mode==='transparent';
      m.opacity=mode==='transparent'?.28:1;
      m.depthWrite=mode!=='transparent';
      m.needsUpdate=true;
    }
  });
}


/* PRAGMA V17 — SPDA X90 Z90 e ajuste de altura independente */
const PRAGMA_SPDA_APPROVED_ROTATION=Object.freeze({x:90,z:90});
const pragmaSpdaAngles={...PRAGMA_SPDA_APPROVED_ROTATION};
let pragmaSpdaPivot=null;
function pragmaMountSpdaPivot(){
  if(pragmaSpdaPivot)return true;
  const obj=models.spda;
  const status=document.getElementById('pragmaSpdaStatus');
  if(!obj){
    if(status)status.textContent='Aguardando carregamento do SPDA';
    return false;
  }
  const bounds=modelBox(obj);
  if(bounds.isEmpty()){
    if(status)status.textContent='SPDA sem geometria carregada';
    return false;
  }
  const worldCenter=bounds.getCenter(new THREE.Vector3());
  root.updateMatrixWorld(true);
  const pivot=new THREE.Group();
  pivot.name='PRAGMA · SPDA · Pivô de rotação';
  pivot.position.copy(root.worldToLocal(worldCenter.clone()));
  pivot.rotation.order='XYZ';
  root.add(pivot);
  pivot.updateMatrixWorld(true);
  pivot.attach(obj);
  pivot.updateMatrixWorld(true);
  pragmaSpdaPivot=pivot;
  pragmaSpdaBasePosition=pivot.position.clone();
  pragmaSetSpdaRotation('x',pragmaSpdaAngles.x);
  for(const axis of ['x','z','y'])pragmaTranslateSpda(axis,pragmaSpdaOffsets[axis]);
  pragmaFinalizeSpdaLock();
  if(status){
    status.textContent='SPDA independente · rotação X 90° e Z 90° aprovada';
    status.style.color='#6c4aa0';
  }
  return true;
}
function pragmaSetSpdaRotation(axis,value){
  if(axis!=='x'&&axis!=='z')return;
  const n=Number(value);
  if(!Number.isFinite(n))return;
  const angle=Math.max(-180,Math.min(180,Math.round(n)));
  pragmaSpdaAngles[axis]=angle;
  if(pragmaSpdaPivot){
    pragmaSpdaPivot.rotation.set(
      THREE.MathUtils.degToRad(pragmaSpdaAngles.x),0,
      THREE.MathUtils.degToRad(pragmaSpdaAngles.z),'XYZ'
    );
    pragmaSpdaPivot.updateMatrixWorld(true);
    updateCut();
  }
  const input=document.getElementById('pragmaSpdaRotation'+axis.toUpperCase());
  const number=document.getElementById('pragmaSpdaDegrees'+axis.toUpperCase());
  if(input)input.value=String(angle);
  if(number)number.value=String(angle);
  window.PRAGMA_SPDA_ROTATION={
    x:pragmaSpdaAngles.x,z:pragmaSpdaAngles.z,
    unit:'degrees',pivot:'model-center',locked:true,groupUnchanged:true
  };
}
function pragmaInstallSpdaControls(){
  const sidebar=ar.querySelector('.pbimLayers');
  if(!sidebar||document.getElementById('pragmaSpdaPanel'))return;
  const panel=document.createElement('div');
  panel.id='pragmaSpdaPanel';
  panel.style.cssText='margin-top:14px;padding:13px 0 4px;border-top:1px solid rgba(100,70,115,.22)';
  const title=document.createElement('strong');
  title.textContent='SPDA · rotação independente';
  title.style.cssText='display:block;font-size:13px;margin-bottom:6px';
  panel.appendChild(title);
  const status=document.createElement('small');
  status.id='pragmaSpdaStatus';
  status.textContent='Aguardando SPDA…';
  status.style.cssText='display:block;line-height:1.4;margin-bottom:9px';
  panel.appendChild(status);
  for(const axis of ['x','z']){
    const row=document.createElement('div');
    row.style.cssText='margin-bottom:12px';
    const label=document.createElement('label');
    label.textContent='Rotação '+axis.toUpperCase()+' · graus';
    label.style.cssText='display:block;font-size:11px;font-weight:650;margin-bottom:5px';
    row.appendChild(label);
    const controls=document.createElement('div');
    controls.style.cssText='display:flex;gap:6px;align-items:center';
    const range=document.createElement('input');
    range.type='range';
    range.id='pragmaSpdaRotation'+axis.toUpperCase();
    range.min='-180';range.max='180';range.step='1';range.value=String(pragmaSpdaAngles[axis]);
    range.style.cssText='width:100%;flex:1;min-width:0;margin:0';
    range.setAttribute('aria-label','Rotação SPDA '+axis.toUpperCase());
    const number=document.createElement('input');
    number.type='number';
    number.id='pragmaSpdaDegrees'+axis.toUpperCase();
    number.min='-180';number.max='180';number.step='1';number.value=String(pragmaSpdaAngles[axis]);
    number.style.cssText='width:70px;flex:0 0 70px;padding:6px 5px;border:1px solid #d8cadd;border-radius:7px;background:#fff;color:#442954';
    number.setAttribute('aria-label','Rotação SPDA '+axis.toUpperCase()+' em graus');
    range.addEventListener('input',e=>pragmaSetSpdaRotation(axis,e.target.value));
    number.addEventListener('change',e=>pragmaSetSpdaRotation(axis,e.target.value));
    controls.appendChild(range);controls.appendChild(number);
    row.appendChild(controls);
    const buttons=document.createElement('div');
    buttons.style.cssText='display:flex;gap:6px;margin-top:6px';
    for(const delta of [-90,90]){
      const btn=document.createElement('button');
      btn.type='button';
      btn.textContent=delta<0?'−90°':'+90°';
      btn.style.cssText='flex:1;border:1px solid #d8cadd;border-radius:7px;background:#faf7fb;color:#653878;padding:5px 6px;cursor:pointer;font-size:11px';
      btn.addEventListener('click',()=>pragmaSetSpdaRotation(axis,pragmaSpdaAngles[axis]+delta));
      buttons.appendChild(btn);
    }
    row.appendChild(buttons);panel.appendChild(row);
  }
  const reset=document.createElement('button');
  reset.type='button';
  reset.textContent='Restaurar rotação aprovada do SPDA';
  reset.style.cssText='width:100%;padding:8px;border:1px solid #c9b3cf;border-radius:8px;background:#f8f3fa;color:#653878;cursor:pointer;font-weight:650;font-size:11px';
  reset.addEventListener('click',()=>{
    pragmaSetSpdaRotation('x',PRAGMA_SPDA_APPROVED_ROTATION.x);
    pragmaSetSpdaRotation('z',PRAGMA_SPDA_APPROVED_ROTATION.z);
  });
  panel.appendChild(reset);
  const note=document.createElement('small');
  note.textContent='Os oito modelos travados não giram. O SPDA será travado somente após o ajuste final.';
  note.style.cssText='display:block;line-height:1.5;margin-top:9px';
  panel.appendChild(note);
  sidebar.appendChild(panel);
}



/* PRAGMA V17: SPDA XYZ fine positioning */
const PRAGMA_FINAL_SPDA_TRANSLATION=Object.freeze({x:-1.34,y:4.45,z:0.25});
const pragmaSpdaOffsets={...PRAGMA_FINAL_SPDA_TRANSLATION};
let pragmaSpdaBasePosition=null;
function pragmaTranslateSpda(axis,value){
 if(!['x','y','z'].includes(axis))return;
 const num=Number(value);if(!Number.isFinite(num))return;
 pragmaSpdaOffsets[axis]=Math.round(Math.max(-50,Math.min(50,num))*100)/100;
 if(pragmaSpdaPivot&&pragmaSpdaBasePosition){
  pragmaSpdaPivot.position.set(pragmaSpdaBasePosition.x+pragmaSpdaOffsets.x,pragmaSpdaBasePosition.y+pragmaSpdaOffsets.y,pragmaSpdaBasePosition.z+pragmaSpdaOffsets.z);
  pragmaSpdaPivot.updateMatrixWorld(true);
  updateCut();
 }
 const range=document.getElementById('pragmaSpdaMove'+axis.toUpperCase());
 const field=document.getElementById('pragmaSpdaOffset'+axis.toUpperCase());
 if(range)range.value=String(pragmaSpdaOffsets[axis]);
 if(field)field.value=pragmaSpdaOffsets[axis].toFixed(2);
 window.PRAGMA_SPDA_TRANSLATION={...pragmaSpdaOffsets,rotation:{...pragmaSpdaAngles},independent:false,permanent:true};
}

/* PRAGMA V18 — configuração definitiva dos nove modelos BIM */
function pragmaFinalizeSpdaLock(){
  const linked=pragmaLinkedGroup;
  const pivot=pragmaSpdaPivot;
  const spda=models.spda;
  if(!linked||!pivot||!spda)return false;
  // Attach the fully positioned and rotated SPDA to the already-locked federation.
  // THREE.Group.attach preserves the exact world transform previously approved.
  root.updateMatrixWorld(true);
  if(pivot.parent!==linked){
    linked.attach(pivot);
    linked.updateMatrixWorld(true);
  }
  linked.name='PRAGMA · BIM federado · 9 modelos travados';
  pivot.userData.pragmaPermanentLock=true;
  const state=window.PRAGMA_BIM_LOCK_STATE;
  if(state){
    state.version='V18';
    state.members=[...new Set([...(state.members||[]),'spda'])];
    state.spdaIndependent=false;
    state.spdaLocked=true;
    state.spdaFinalTranslation={...PRAGMA_FINAL_SPDA_TRANSLATION};
    state.spdaFinalRotation={...PRAGMA_SPDA_APPROVED_ROTATION};
  }
  window.PRAGMA_BIM_FINAL_STATE={
    version:'V18',
    lockedModels:['arch','struct','fire','hydro','gas','electric','telecom','feeders','spda'],
    groupPosition:{...PRAGMA_LOCKED_POSITION},
    spdaRotation:{...PRAGMA_SPDA_APPROVED_ROTATION},
    spdaIndependentOffset:{...PRAGMA_FINAL_SPDA_TRANSLATION},
    allModelsShareGroup:true,
    adjustmentPanelsVisible:false
  };
  const status=document.getElementById('pragmaLinkedStatus');
  if(status){status.textContent='Travados · os 9 modelos movem juntos';status.style.color='#4a845f'}
  updateCut();
  return true;
}

function pragmaInstallSpdaPositionControls(){
 const aside=ar.querySelector('.pbimLayers');
 if(!aside||document.getElementById('pragmaSpdaTranslatePanel'))return;
 const panel=document.createElement('div');panel.id='pragmaSpdaTranslatePanel';
 panel.style.cssText='margin-top:14px;padding:13px 0 4px;border-top:1px solid rgba(100,70,115,.22)';
 const heading=document.createElement('strong');heading.textContent='SPDA · deslocamento independente';
 heading.style.cssText='display:block;font-size:13px;margin-bottom:7px';panel.appendChild(heading);
 const desc=document.createElement('small');desc.textContent='X, Z e Y · de −50 a +50 m · precisão de 1 cm';
 desc.style.cssText='display:block;line-height:1.5;margin-bottom:9px';panel.appendChild(desc);
 for(const axis of ['x','z','y']){
  const block=document.createElement('div');block.style.cssText='margin-bottom:11px';
  const lbl=document.createElement('label');lbl.textContent={x:'Longitudinal · X',z:'Transversal · Z',y:'Altura · Y'}[axis];
  lbl.style.cssText='display:block;font-size:11px;font-weight:650;margin-bottom:4px';block.appendChild(lbl);
  const line=document.createElement('div');line.style.cssText='display:flex;align-items:center;gap:7px';
  const range=document.createElement('input');range.type='range';range.id='pragmaSpdaMove'+axis.toUpperCase();
  range.min='-50';range.max='50';range.step='0.01';range.value='0';
  range.style.cssText='width:100%;min-width:0;flex:1;margin:0';
  const num=document.createElement('input');num.type='number';num.id='pragmaSpdaOffset'+axis.toUpperCase();
  num.min='-50';num.max='50';num.step='0.01';num.value='0.00';
  num.style.cssText='width:75px;min-width:75px;padding:6px 5px;border:1px solid #d8cadd;border-radius:7px;background:#fff;color:#442954';
  range.addEventListener('input',e=>pragmaTranslateSpda(axis,e.target.value));
  num.addEventListener('change',e=>pragmaTranslateSpda(axis,e.target.value));
  line.appendChild(range);line.appendChild(num);block.appendChild(line);panel.appendChild(block);
 }
 const reset=document.createElement('button');reset.type='button';reset.textContent='Restaurar deslocamento do SPDA';
 reset.style.cssText='width:100%;padding:8px;border:1px solid #c9b3cf;border-radius:8px;background:#f8f3fa;color:#653878;cursor:pointer;font-weight:650;font-size:11px';
 reset.addEventListener('click',()=>['x','y','z'].forEach(a=>pragmaTranslateSpda(a,0)));
 panel.appendChild(reset);aside.appendChild(panel);
}

function pragmaInsertTools(){
  const aside=ar.querySelector('.pbimLayers');
  if(!aside||document.getElementById('pragmaLinkedPanel'))return;
  const p=document.createElement('div');
  p.id='pragmaLinkedPanel';
  p.className='pbimCut pragmaAlignmentPanel';
  p.style.cssText='margin-top:14px;padding-top:12px;border-top:1px solid rgba(100,70,115,.2);display:block';

  const heading=document.createElement('strong');
  heading.textContent='Arquitetônico 408 + Estrutural + Incêndio + Hidrossanitário + Central de Gás + Elétrico + Telecom + Elétrico Alimentadores';
  heading.style.cssText='display:block;font-size:13px;margin-bottom:5px';
  p.appendChild(heading);
  const status=document.createElement('small');
  status.id='pragmaLinkedStatus';
  status.textContent='Preparando vinculação…';
  status.style.cssText='display:block;font-weight:700;margin-bottom:5px';
  p.appendChild(status);
  const approved=document.createElement('small');
  approved.textContent='Encaixe Arq./Estr.: X 1,55 m · Z −0,05 m. Posição travada: X +6,20 m · Z +12,48 m · Y −15,00 m.';
  approved.style.cssText='display:block;line-height:1.5;margin-bottom:12px';
  p.appendChild(approved);
  const caption=document.createElement('span');
  caption.textContent='Movimentação conjunta dos 8 modelos · precisão de 1 cm';
  caption.style.cssText='display:block;font-size:11px;font-weight:700;margin-bottom:10px';
  p.appendChild(caption);

  const axes=[
    {axis:'x',label:'Longitudinal · X',limit:30},
    {axis:'z',label:'Transversal · Z',limit:30},
    {axis:'y',label:'Altura · Y',limit:50}
  ];
  axes.forEach(def=>{
    const row=document.createElement('div');
    row.style.cssText='display:block;margin-bottom:11px';
    const label=document.createElement('label');
    label.style.cssText='display:block;font-size:11px;font-weight:650;margin-bottom:4px';
    label.textContent=def.label;
    const controls=document.createElement('div');
    controls.style.cssText='display:flex;align-items:center;gap:7px';
    const range=document.createElement('input');
    range.type='range';
    range.id='pragmaLinkedRange'+def.axis.toUpperCase();
    range.min=String(-def.limit);range.max=String(def.limit);
    range.step='0.01';range.value=String(pragmaLinkedOffsets[def.axis]);
    range.style.cssText='min-width:0;flex:1;width:100%;margin:0';
    const num=document.createElement('input');
    num.type='number';
    num.id='pragmaLinkedNum'+def.axis.toUpperCase();
    num.min=range.min;num.max=range.max;num.step='0.01';num.value=pragmaLinkedOffsets[def.axis].toFixed(2);
    num.title='Deslocamento em metros';
    num.setAttribute('aria-label',def.label+' em metros');
    num.style.cssText='flex:0 0 75px;width:75px;min-width:75px;padding:6px 5px;border:1px solid #d8cadd;border-radius:7px;font:inherit;background:#fff;color:#442954';
    range.addEventListener('input',ev=>pragmaMoveLinkedModels(def.axis,ev.target.value));
    num.addEventListener('change',ev=>pragmaMoveLinkedModels(def.axis,ev.target.value));
    controls.appendChild(range);controls.appendChild(num);
    row.appendChild(label);row.appendChild(controls);
    p.appendChild(row);
  });

  const reset=document.createElement('button');
  reset.type='button';
  reset.textContent='Restaurar posição travada';
  reset.style.cssText='width:100%;padding:9px 8px;border:1px solid #c9b3cf;border-radius:8px;background:#f8f3fa;color:#653878;cursor:pointer;font-weight:650';
  reset.addEventListener('click',()=>{['x','y','z'].forEach(axis=>pragmaMoveLinkedModels(axis,PRAGMA_LOCKED_POSITION[axis]));});
  p.appendChild(reset);

  const finishLabel=document.createElement('label');
  finishLabel.textContent='Estrutural · acabamento';
  finishLabel.style.cssText='display:block;margin-top:14px;margin-bottom:6px;font-size:11px;font-weight:650';
  p.appendChild(finishLabel);
  const select=document.createElement('select');
  select.id='pragmaStructMode';
  select.style.cssText='width:100%;padding:9px;border-radius:8px;border:1px solid #d8cadd;background:#fff;color:#442954';
  const solid=document.createElement('option');
  solid.value='solid';solid.textContent='Sólido';
  const transparent=document.createElement('option');
  transparent.value='transparent';transparent.textContent='Transparente (28%)';
  select.appendChild(solid);select.appendChild(transparent);
  select.addEventListener('change',ev=>pragmaStructuralFinish(ev.target.value));
  p.appendChild(select);
  aside.appendChild(p);
}

function updateProgress(){
 const pct=Math.min(95,Math.round(readyCount/9*95));
 progressBar.style.width=pct+'%';
 const counter=document.getElementById('bimProgressNumber');
 if(counter)counter.textContent=pct+'%';
 loadText.textContent='Preparando visualização 3D';
}
function loaderPromise(url){
 return new Promise((resolve,reject)=>{
  const loader=new GLTFLoader();
  loader.setDRACOLoader(dracoLoader);
  loader.setKTX2Loader(ktx2Loader);
  loader.setMeshoptDecoder(MeshoptDecoder);
  loader.load(url,g=>resolve(g.scene),undefined,reject);
 });
}

async function loaderInlineGzip(b64){
  const raw=atob(b64);
  const gz=new Uint8Array(raw.length);
  for(let i=0;i<raw.length;i++)gz[i]=raw.charCodeAt(i);
  if(typeof DecompressionStream!=='function')throw new Error('DecompressionStream indisponível');
  const stream=new Blob([gz]).stream().pipeThrough(new DecompressionStream('gzip'));
  const buffer=await new Response(stream).arrayBuffer();
  return await new Promise((resolve,reject)=>{
    const loader=new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);
    loader.setKTX2Loader(ktx2Loader);
    loader.setMeshoptDecoder(MeshoptDecoder);
    loader.parse(buffer,'',g=>resolve(g.scene),reject);
  });
}

/* PRAGMA V14 — contornos BIM */
const pragmaEdgeCache=new WeakMap();
const pragmaSoftCache=new WeakMap();


/* PRAGMA V25 — reforço estrutural, layout simples e rotação controlável */
const pragmaStructEdgeCache=new WeakMap();

/* PRAGMA V25 — traço estrutural com espessura real em pixels */
function pragmaV24BoldStructuralOutline(object,positions){
 try{
  const count=Math.floor((positions?.length||0)/6);
  if(count<1)return;
  const cap=46000,step=Math.max(1,Math.ceil(count/cap));
  const max=Math.ceil(count/step);
  const starts=new Float32Array(max*3),ends=new Float32Array(max*3);
  let written=0;
  for(let i=0;i<count;i+=step){
   const k=i*6;
   if(written>=max)break;
   starts.set(positions.subarray(k,k+3),written*3);
   ends.set(positions.subarray(k+3,k+6),written*3);
   written++;
  }
  if(!written)return;
  const geo=new THREE.InstancedBufferGeometry();
  geo.setAttribute('position',new THREE.Float32BufferAttribute([0,-1,0,1,-1,0,0,1,0,1,1,0],3));
  geo.setIndex([0,1,2,2,1,3]);
  geo.setAttribute('instanceStart',new THREE.InstancedBufferAttribute(starts.subarray(0,written*3),3));
  geo.setAttribute('instanceEnd',new THREE.InstancedBufferAttribute(ends.subarray(0,written*3),3));
  geo.instanceCount=written;
  const mat=new THREE.ShaderMaterial({
   uniforms:{
    uResolution:{value:new THREE.Vector2(1,1)},
    uThickness:{value:2.3}
   },
   vertexShader:[
    'uniform vec2 uResolution;',
    'uniform float uThickness;',
    'attribute vec3 instanceStart;',
    'attribute vec3 instanceEnd;',
    'void main(){',
    ' vec4 p0=projectionMatrix*modelViewMatrix*vec4(instanceStart,1.0);',
    ' vec4 p1=projectionMatrix*modelViewMatrix*vec4(instanceEnd,1.0);',
    ' vec2 a=p0.xy/max(.001,p0.w);',
    ' vec2 b=p1.xy/max(.001,p1.w);',
    ' vec2 d=(b-a)*uResolution;',
    ' float lengthD=length(d);',
    ' vec2 n=lengthD>.0001?vec2(-d.y,d.x)/lengthD:vec2(1.0,0.0);',
    ' vec4 clip=mix(p0,p1,position.x);',
    ' clip.xy+=n*position.y*(uThickness/uResolution)*clip.w;',
    ' clip.z-=.00085*clip.w;',
    ' gl_Position=clip;',
    '}'
   ].join('\n'),
   fragmentShader:'void main(){gl_FragColor=vec4(.38,.35,.41,.97);}',
   transparent:true,depthTest:true,depthWrite:false,
   side:THREE.DoubleSide,toneMapped:false
  });
  const heavy=new THREE.Mesh(geo,mat);
  heavy.name='PRAGMA Estrutural · Arestas Reforçadas';
  heavy.renderOrder=7;
  heavy.frustumCulled=false;
  heavy.onBeforeRender=function(renderer){
   renderer.getDrawingBufferSize(mat.uniforms.uResolution.value);
   mat.uniforms.uThickness.value=2.3*renderer.getPixelRatio();
  };
  object.add(heavy);
  object.userData.pragmaV24EmphasizedEdges=heavy;
  window.PRAGMA_STRUCTURAL_EDGES={
   version:'V25',color:'#615969',opacity:.97,
   lineWidthCssPx:2.3,emphasizedSegments:written,enhanced:true,
   renderer:'batched-gpu-instancing'
  };
 }catch(err){
  window.PRAGMA_STRUCTURAL_EDGES={version:'V25',enhanced:false,fallback:'strong-ordinary-lines',reason:String(err)};
  console.warn('PRAGMA · contorno estrutural de reserva',err);
 }
}

function pragmaSketchModel(obj,key=''){
 if(!obj||obj.userData.pragmaBatchedOutlineV23)return;
 obj.userData.pragmaBatchedOutlineV23=true;
 const isStructure=key==='struct';
 let budget=220000,edgeBudget=480000,softened=0;
 const ink=new THREE.LineBasicMaterial({
   color:isStructure?0x655c6b:0x7b7283,
   transparent:true,
   opacity:isStructure?1:.52,
   depthTest:true,depthWrite:false
 });
 const edgeCache=isStructure?pragmaStructEdgeCache:pragmaEdgeCache;
 const entries=[];
 let count=0;
 obj.updateMatrixWorld(true);
 const inv=new THREE.Matrix4().copy(obj.matrixWorld).invert();
 obj.traverse(mesh=>{
   if(!mesh.isMesh||!mesh.geometry||!mesh.material)return;
   const mats=Array.isArray(mesh.material)?mesh.material:[mesh.material];
   if(mats.some(m=>m&&(m.opacity<0.94||(m.transparent&&m.opacity<1)||(m.transmission||0)>.1)))return;
   const toned=mats.map(old=>{
     let m=pragmaSoftCache.get(old);
     if(!m){
       m=old.clone();
       if(m.color){
         const hsl={h:0,s:0,l:0};
         m.color.getHSL(hsl);
         m.color.setHSL(hsl.h,hsl.s*.73,Math.min(1,hsl.l*1.01));
       }
       pragmaSoftCache.set(old,m);
     }
     if(isStructure){
       // Recede coplanar surfaces minimally so linework stays crisp.
       const copy=m.clone();
       copy.polygonOffset=true;
       copy.polygonOffsetFactor=1;
       copy.polygonOffsetUnits=1;
       copy.needsUpdate=true;
       return copy;
     }
     return m;
   });
   mesh.material=Array.isArray(mesh.material)?toned:toned[0];
   softened++;
   if(mesh.isSkinnedMesh||mesh.isInstancedMesh)return;
   const geom=mesh.geometry,pos=geom.getAttribute('position');
   if(!pos||!pos.count)return;
   const triangles=Math.floor((geom.index?geom.index.count:pos.count)/3);
   if(triangles<1||triangles>70000||triangles>budget)return;
   if(!geom.boundingBox)geom.computeBoundingBox();
   if(geom.boundingBox){
     const size=geom.boundingBox.getSize(new THREE.Vector3());
     if(Math.max(size.x,size.y,size.z)<.075)return;
   }
   try{
     let edges=edgeCache.get(geom);
     if(!edges){
       edges=new THREE.EdgesGeometry(geom,isStructure?25:36);
       edgeCache.set(geom,edges);
     }
     const attr=edges.getAttribute('position');
     if(!attr||attr.count===0||count+attr.count>edgeBudget)return;
     budget-=triangles;count+=attr.count;
     mesh.updateMatrixWorld(true);
     const relative=new THREE.Matrix4().multiplyMatrices(inv,mesh.matrixWorld);
     entries.push({attr,relative});
   }catch(e){console.warn('PRAGMA · aresta BIM ignorada',e)}
 });
 if(count>0){
   const packed=new Float32Array(count*3);
   const point=new THREE.Vector3();
   let offset=0;
   for(const entry of entries){
     const values=entry.attr.array,itemSize=entry.attr.itemSize;
     for(let i=0;i<entry.attr.count;i++){
       const k=i*itemSize;
       point.set(values[k],values[k+1],values[k+2]).applyMatrix4(entry.relative);
       packed[offset++]=point.x;
       packed[offset++]=point.y;
       packed[offset++]=point.z;
     }
   }
   const geometry=new THREE.BufferGeometry();
   geometry.setAttribute('position',new THREE.BufferAttribute(packed,3));
   geometry.computeBoundingSphere();
   const strokes=new THREE.LineSegments(geometry,ink);
   strokes.name='PRAGMA Arestas';strokes.renderOrder=6;
   obj.add(strokes);
   obj.userData.pragmaBatchOutline=strokes;
   if(isStructure){
     // Only Structural receives the optional 1.75px emphasis.
     pragmaV24BoldStructuralOutline(obj,packed);
   }
 }
 if(!window.PRAGMA_BIM_EDGE_STATS)window.PRAGMA_BIM_EDGE_STATS={};
 window.PRAGMA_BIM_EDGE_STATS[obj.name||String(Object.keys(window.PRAGMA_BIM_EDGE_STATS).length)]={
   version:'V24',meshMaterialsSoftened:softened,
   sourceMeshesMerged:entries.length,batchDrawCalls:count?1:0,
   outlineVertices:count,strongStructuralEdges:isStructure
 };
 console.info('PRAGMA V24 · contornos BIM',obj.name,{meshes:entries.length,vertices:count,structural:isStructure});
}

/* PRAGMA V22 — exclusão geométrica de tubo externo, malhas e linhas */
function pragmaV21RemoveTopHydroPipe(){
 const hydro=models.hydro,arch=models.arch;
 if(!hydro||!arch||hydro.userData.pragmaV21Processed)return;
 hydro.updateMatrixWorld(true);arch.updateMatrixWorld(true);
 const building=new THREE.Box3().setFromObject(arch);
 const footprint=building.getSize(new THREE.Vector3());
 const renderables=[];
 const boxOf=node=>{
  const geom=node.geometry;
  if(!geom)return null;
  if(!geom.boundingBox)geom.computeBoundingBox();
  return geom.boundingBox?.clone().applyMatrix4(node.matrixWorld);
 };
 hydro.traverse(node=>{
  if(!(node.isMesh||node.isLine||node.isLineSegments||node.isPoints)||!node.geometry||!node.visible)return;
  if(node.name==='PRAGMA Arestas'||node.name==='PRAGMA | Arestas desenhadas')return;
  const box=boxOf(node);
  if(!box||box.isEmpty())return;
  const sz=box.getSize(new THREE.Vector3());
  if(Math.max(sz.x,sz.y,sz.z)<.075)return;
  renderables.push({node,box,sz,center:box.getCenter(new THREE.Vector3())});
 });
 const report={
  version:'V22',discipline:'hydro',removed:0,renderables:renderables.length,
  strategy:null,selected:null,previousRulesCleared:true
 };
 window.PRAGMA_HYDRO_V21=report;
 if(renderables.length===0){report.strategy='no-renderables';return}
 const quant=(arr,p)=>{
  const v=arr.slice().sort((a,b)=>a-b);
  const at=(v.length-1)*p,i=Math.floor(at),f=at-i;
  return v[i]*(1-f)+v[Math.min(v.length-1,i+1)]*f;
 };
 const coreX=quant(renderables.map(o=>o.center.x),.5);
 const coreZ=quant(renderables.map(o=>o.center.z),.5);
 const spanX=Math.max(quant(renderables.map(o=>o.center.x),.8)-quant(renderables.map(o=>o.center.x),.2),.6);
 const spanZ=Math.max(quant(renderables.map(o=>o.center.z),.8)-quant(renderables.map(o=>o.center.z),.2),.6);
 const topAll=Math.max(...renderables.map(o=>o.box.max.y));
 const outsideFootprint=b=>{
  const dx=Math.max(0,building.min.x-b.max.x,b.min.x-building.max.x);
  const dz=Math.max(0,building.min.z-b.max.z,b.min.z-building.max.z);
  return Math.hypot(dx,dz);
 };
 const isolated=b=>{
  const c=b.getCenter(new THREE.Vector3());
  const coreOutside=Math.abs(c.x-coreX)>spanX*.95||Math.abs(c.z-coreZ)>spanZ*.95;
  const archOutside=outsideFootprint(b)>Math.max(.10,Math.min(footprint.x,footprint.z)*.007);
  return archOutside||coreOutside;
 };
 const vertical=size=>size.y>=.35&&size.y>2.2*Math.max(size.x,size.z,.035);
 const leaf=renderables.filter(o=>vertical(o.sz)&&isolated(o.box));
 leaf.sort((a,b)=>b.box.max.y-a.box.max.y);
 if(leaf.length){
   const c=leaf[0];
   const oldParent=c.node.parent;
   if(oldParent){
     oldParent.remove(c.node);
     report.strategy='highest-isolated-vertical-renderable';
     report.removed=1;
     report.selected={name:c.node.name||'(unnamed)',type:c.node.type,
       topY:+c.box.max.y.toFixed(3),outside:+outsideFootprint(c.box).toFixed(3)};
   }
 }
 // If the source combines several pipes in a single mesh, recover separate
 // components from triangle connectivity and remove only the extreme upper island.
 if(!report.removed){
  let winner=null;
  const candidates=renderables.filter(o=>o.node.isMesh).sort((a,b)=>b.box.max.y-a.box.max.y).slice(0,9);
  for(const entry of candidates){
   const geom=entry.node.geometry,pos=geom.getAttribute('position'),index=geom.index;
   if(!pos||pos.count<12||pos.count>440000)continue;
   const n=pos.count,idx=index?index.array:null,triangleCount=Math.floor((idx?idx.length:n)/3);
   if(triangleCount<6||triangleCount>380000)continue;
   const parent=new Int32Array(n);
   for(let i=0;i<n;i++)parent[i]=i;
   function find(i){while(parent[i]!==i){parent[i]=parent[parent[i]];i=parent[i]}return i}
   function join(a,b){a=find(a);b=find(b);if(a!==b)parent[b]=a}
   if(!idx){
    const seen=new Map();
    for(let i=0;i<n;i++){
     const key=Math.round(pos.getX(i)*1000)+','+
       Math.round(pos.getY(i)*1000)+','+Math.round(pos.getZ(i)*1000);
     const prior=seen.get(key);
     if(prior===undefined)seen.set(key,i);else join(i,prior);
    }
   }
   for(let i=0;i<triangleCount;i++){
    const j=i*3,a=idx?idx[j]:j,b=idx?idx[j+1]:j+1,c=idx?idx[j+2]:j+2;
    join(a,b);join(a,c);
   }
   const groups=new Map(),v=new THREE.Vector3();
   entry.node.updateMatrixWorld(true);
   for(let i=0;i<n;i++){
    const key=find(i);let g=groups.get(key);
    if(!g){g={root:key,box:new THREE.Box3(),vertices:0,triangles:0};groups.set(key,g)}
    v.set(pos.getX(i),pos.getY(i),pos.getZ(i)).applyMatrix4(entry.node.matrixWorld);
    g.box.expandByPoint(v);g.vertices++;
   }
   for(let i=0;i<triangleCount;i++){const a=idx?idx[i*3]:i*3;groups.get(find(a)).triangles++}
   for(const g of groups.values()){
    if(g.triangles<6||g.triangles>triangleCount*.38)continue;
    const size=g.box.getSize(new THREE.Vector3());
    if(!vertical(size)||!isolated(g.box))continue;
    const top=g.box.max.y;
    if(winner===null||top>winner.top)winner={node:entry.node,geometry:geom,
      index:idx,root:g.root,top,size,box:g.box,
      parent,triangleCount,groupCount:groups.size};
   }
  }
  if(winner){
   const node=winner.node,oldGeom=winner.geometry,originalIdx=winner.index;
   function root(i){let p=i;while(winner.parent[p]!==p)p=winner.parent[p];return p}
   const indexArray=originalIdx?originalIdx:Array.from({length:winner.parent.length},(_,i)=>i);
   const kept=[],groups=[];
   const originalGroups=oldGeom.groups.length?oldGeom.groups:
     [{start:0,count:indexArray.length,materialIndex:0}];
   for(const section of originalGroups){
    const before=kept.length,stop=Math.min(indexArray.length,section.start+section.count);
    for(let i=section.start;i+2<stop;i+=3){
     if(root(indexArray[i])!==winner.root){
      kept.push(indexArray[i],indexArray[i+1],indexArray[i+2]);
     }
    }
    if(kept.length>before)groups.push({start:before,count:kept.length-before,materialIndex:section.materialIndex});
   }
   if(kept.length<indexArray.length&&kept.length>0){
    const geo=oldGeom.clone();
    geo.setIndex(kept);
    geo.clearGroups();
    for(const g of groups)geo.addGroup(g.start,g.count,g.materialIndex);
    const bounds=new THREE.Box3(),point=new THREE.Vector3(),position=geo.getAttribute('position');
    for(const vertexIndex of kept)bounds.expandByPoint(point.fromBufferAttribute(position,vertexIndex));
    geo.boundingBox=bounds;
    geo.computeBoundingSphere();
    node.geometry=geo;
    const outline=node.userData.pragmaInkLines;
    if(outline&&outline.parent){
      outline.parent.remove(outline);
      outline.geometry.dispose();
      const edge=new THREE.LineSegments(new THREE.EdgesGeometry(geo,36),outline.material);
      edge.name='PRAGMA Arestas';
      node.add(edge);node.userData.pragmaInkLines=edge;
    }
    report.strategy='detached-vertical-geometry-component';
    report.removed=1;
    report.selected={mesh:node.name||'(unnamed)',topY:+winner.top.toFixed(3),
      componentTriangles:indexArray.length/3-kept.length/3,
      componentCount:winner.groupCount};
   }
  }
 }

 // Secondary extraction: GLB line primitives may combine many pipes in a
 // single LineSegments geometry. Remove only the detached vertical stroke.
 if(!report.removed){
  let best=null;
  const segmentSets=[];
  for(const item of renderables){
   if(!item.node.isLineSegments)continue;
   const geo=item.node.geometry,attr=geo.getAttribute('position');
   if(!attr)continue;
   const ids=geo.index?geo.index.array:null;
   const count=Math.floor((ids?ids.length:attr.count)/2);
   if(count<1||count>1200000)continue;
   item.node.updateMatrixWorld(true);
   const a=new THREE.Vector3(),b=new THREE.Vector3();
   const segments=[];
   for(let j=0;j<count;j++){
    const i=j*2;
    const u=ids?ids[i]:i,v=ids?ids[i+1]:i+1;
    a.fromBufferAttribute(attr,u).applyMatrix4(item.node.matrixWorld);
    b.fromBufferAttribute(attr,v).applyMatrix4(item.node.matrixWorld);
    const lo=Math.min(a.y,b.y),hi=Math.max(a.y,b.y);
    const horiz=Math.hypot(a.x-b.x,a.z-b.z);
    const midx=(a.x+b.x)/2,midz=(a.z+b.z)/2;
    const outsideFootprint=
       Math.max(0,building.min.x-Math.max(a.x,b.x),Math.min(a.x,b.x)-building.max.x,
         building.min.z-Math.max(a.z,b.z),Math.min(a.z,b.z)-building.max.z);
    const outsideMain=
      Math.abs(midx-coreX)>spanX*1.1||Math.abs(midz-coreZ)>spanZ*1.1;
    const vertical=hi-lo>.24&&hi-lo>Math.max(.06,horiz)*2.7;
    const segment={j,u,v,lo,hi,midx,midz,vertical,outside:outsideFootprint>.08||outsideMain};
    segments.push(segment);
    if(vertical&&segment.outside&&(!best||hi>best.segment.hi))
      best={item,segment};
   }
   segmentSets.push({item,geo,ids,segments});
  }
  if(best){
   const original=segmentSets.find(s=>s.item===best.item);
   const chosen=best.segment;
   const all=original.segments.length,kept=[];
   let excluded=0;
   for(const seg of original.segments){
    const samePipe=Math.hypot(seg.midx-chosen.midx,seg.midz-chosen.midz)<.28
      &&seg.hi>=chosen.lo-.5&&seg.lo<=chosen.hi+.5
      &&seg.outside;
    if(samePipe){excluded++;continue}
    kept.push(seg.u,seg.v);
   }
   if(excluded>0&&excluded<all*.3){
    const geometry=original.geo.clone();
    geometry.setIndex(kept);
    original.item.node.geometry=geometry;
    report.strategy='single-isolated-pipe-in-line-segments';
    report.removed=1;
    report.selected={name:original.item.node.name||'(merged lines)',
      segmentsRemoved:excluded,totalSegments:all,
      topY:+chosen.hi.toFixed(3)};
   }else if(all===1){
    original.item.node.parent?.remove(original.item.node);
    report.strategy='single-vertical-line-object';
    report.removed=1;
    report.selected={name:original.item.node.name||'(unnamed)',topY:+chosen.hi.toFixed(3)};
   }
  }
 }

 hydro.userData.pragmaV21Processed=true;
 if(!report.removed)report.strategy='no-individual-isolated-vertical-part-confirmed';
 hydro.updateMatrixWorld(true);
 updateCut();
 console.info('PRAGMA V21 · Hidrossanitário — remoção de peça externa:',report);
}

async function loadModel(key){
 if(models[key])return models[key];
 if(loading[key])return loading[key];
 const row=ar.querySelector('[data-row="'+key+'"]');row.classList.remove('failed','ready');row.classList.add('loading');
 const spec=MODEL_URLS[key];
 loading[key]=(async()=>{
   let obj;
   if(key==='arch'){
     try{obj=await loaderInlineGzip(ARCH_408_GZ_B64)}
     catch(first){
       console.warn('Arquitetônico 408 falhou; usando fallback anterior.',first);
       try{obj=await loaderPromise(spec.url)}
       catch(second){obj=await loaderPromise(spec.fallback)}
     }
   }else{
     try{obj=await loaderPromise(spec.url)}
     catch(first){obj=await loaderPromise(spec.fallback)}
   }
   obj.name=spec.name;obj.position.set(0,0,0);obj.rotation.set(0,0,0);obj.scale.set(1,1,1);obj.updateMatrix();obj.updateMatrixWorld(true);obj.visible=!!ar.querySelector('[data-layer="'+key+'"]')?.checked;
   obj.traverse(o=>{if(o.isMesh){o.frustumCulled=true}});
   if(key!=='hydro')pragmaSketchModel(obj,key);
   root.add(obj);models[key]=obj;await coordinateToArchitecture(key,obj);


   // Attach any previously approved discipline after reproducing its group movement.
   if(['fire','hydro','gas','electric','telecom','feeders'].includes(key)&&pragmaLinkedGroup
       &&!pragmaLinkedGroup.children.includes(obj)){
     const previous={fire:PRAGMA_PRIOR_POSITION,hydro:PRAGMA_HYDRO_POSITION,
       gas:PRAGMA_GAS_POSITION,electric:PRAGMA_ELECTRIC_POSITION,
       telecom:PRAGMA_TELECOM_POSITION,feeders:PRAGMA_TELECOM_POSITION};
     if(previous[key]){
       const ref=previous[key];
       obj.position.x+=pragmaLinkedOffsets.x-ref.x;
       obj.position.y+=pragmaLinkedOffsets.y-ref.y;
       obj.position.z+=pragmaLinkedOffsets.z-ref.z;
       obj.updateMatrix();obj.updateMatrixWorld(true);
     }
     // Telecom and feeders keep their native world placement when newly linked.
     root.updateMatrixWorld(true);
     pragmaLinkedGroup.attach(obj);
     pragmaLinkedGroup.updateMatrixWorld(true);
     const keys=['arch','struct','fire','hydro','gas','electric','telecom','feeders'];
     const members=keys.filter(k=>models[k]&&pragmaLinkedGroup.children.includes(models[k]));
     if(window.PRAGMA_BIM_LOCK_STATE)window.PRAGMA_BIM_LOCK_STATE.members=members;
     const status=document.getElementById('pragmaLinkedStatus');
     if(status)status.textContent=members.length===8
       ?'Travados · os 8 movem juntos'
       :'Grupo travado · '+members.length+'/8 modelos';
   }
   if(key==='spda'&&pragmaLinkedGroup){
     // Reproduce the same shared alignment that normal eager load receives.
     const aligned=window.PRAGMA_BIM_ALIGNMENT?.shift;
     if(aligned){
       obj.position.x+=aligned.x;
       obj.position.y+=aligned.y;
       obj.position.z+=aligned.z;
       obj.updateMatrix();obj.updateMatrixWorld(true);
     }
     pragmaMountSpdaPivot();
   }
   if(key==='hydro'&&pragmaLinkedGroup){
     pragmaV21RemoveTopHydroPipe();
     pragmaSketchModel(obj);
   }
   delete loading[key];
   row.classList.remove('loading','failed');row.classList.add('ready');
   readyCount++;updateProgress();
   if(key==='arch'&&readyCount===1&&obj.visible)fit('general');
   return obj;
 })().catch(e=>{delete loading[key];row.classList.remove('loading','ready');row.classList.add('failed');throw e});
 return loading[key];
}


/* PRAGMA V21 — convite para orbitar, mão animada e giro automático suave */

/* PRAGMA V25 — pause e retomada real do giro automático */

/* PRAGMA V28 — gesto e rotação 3D sincronizados no mesmo frame */
function pragmaV27StartGestureDemo(){
 const wrap=ar.querySelector('.pbimCanvasWrap');
 const canvas=document.getElementById('bimCanvas');
 if(!wrap||!canvas||!camera||!controls||wrap.dataset.pragmaV27Gesture)return;
 wrap.dataset.pragmaV27Gesture='waiting';
 if(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches)return;
 let observer=null;
 const start=()=>{
  if(wrap.dataset.pragmaV27Gesture!=='waiting'||document.hidden)return;
  wrap.dataset.pragmaV27Gesture='running';
  observer?.disconnect();
  wrap.querySelector('.pragmaOrbitGuide')?.remove();
  const hand=document.createElement('div');
  hand.className='pragmaV27DragHand';
  hand.setAttribute('aria-hidden','true');
  const icon=document.createElement('span');
  icon.className='pragmaV27HandIcon';icon.textContent='✋';
  const label=document.createElement('span');label.textContent='Arraste para girar';
  hand.appendChild(icon);hand.appendChild(label);wrap.appendChild(hand);
  const button=document.getElementById('pragmaOrbitPause');
  const up=new THREE.Vector3(0,1,0);
  let lastAngle=0,finished=false;
  controls.autoRotate=false;
  const dampingWasOn=controls.enableDamping;
  controls.enableDamping=false;
  controls.update();
  const pivot=controls.target.clone();
  const baseOffset=camera.position.clone().sub(pivot);
  const liveOffset=new THREE.Vector3();
  const info={version:'V28',running:true,movesCamera:true,movesObjects:false,sameFrame:true,
   maxDegrees:28.65,frames:0};
  window.PRAGMA_BIM_GESTURE=info;
  function rotate(angle){
   liveOffset.copy(baseOffset).applyAxisAngle(up,angle);
   camera.position.copy(pivot).add(liveOffset);
   camera.lookAt(pivot);
   info.currentAngleDegrees=Math.round(angle*180/Math.PI*100)/100;
  }
  function finish(completed){
   if(finished)return;
   finished=true;info.running=false;info.completed=completed;
   pragmaV28GestureFrame=null;
   controls.enableDamping=dampingWasOn;
   hand.remove();
   canvas.removeEventListener('pointerdown',cancel);
   canvas.removeEventListener('wheel',cancel);
   button?.removeEventListener('click',cancel);
   if(completed){
    rotate(0);
    if(!button?.classList.contains('paused')&&!document.hidden)controls.autoRotate=true;
   }
   wrap.dataset.pragmaV27Gesture='done';
  }
  function cancel(){finish(false)}
  canvas.addEventListener('pointerdown',cancel,{once:true});
  canvas.addEventListener('wheel',cancel,{once:true,passive:true});
  button?.addEventListener('click',cancel,{once:true});
  const beginAt=performance.now(),duration=5400;
  function animate(now){
   if(finished)return;
   if(document.hidden||button?.classList.contains('paused')){finish(false);return}
   const p=Math.min(1,(now-beginAt)/duration);
   const wave=Math.sin(p*Math.PI*2);
   const angle=.50*wave;
   rotate(angle);lastAngle=angle;
   hand.style.left=(50+wave*18)+'%';
   info.handOffsetPercent=Math.round(wave*1800)/100;
   info.frames++;
   hand.style.top=(51+Math.sin(Math.PI*p)*2)+'%';
   if(p>=1)finish(true);
  }
  pragmaV28GestureFrame=animate;
 };
 const rect=wrap.getBoundingClientRect();
 if(rect.top<innerHeight*.8&&rect.bottom>innerHeight*.18){start();return}
 if(typeof IntersectionObserver==='function'){
  observer=new IntersectionObserver(entries=>{
   if(entries.some(e=>e.isIntersecting&&e.intersectionRatio>.18))start();
  },{threshold:[.05,.2,.4]});
  observer.observe(wrap);
 }else{
  const onScroll=()=>{
   const r=wrap.getBoundingClientRect();
   if(r.top<innerHeight*.8&&r.bottom>innerHeight*.18){
    removeEventListener('scroll',onScroll);start();
   }
  };
  addEventListener('scroll',onScroll,{passive:true});
 }
}

function pragmaV21OrbitExperience(){
 const wrap=ar.querySelector('.pbimCanvasWrap');
 const canvas=document.getElementById('bimCanvas');
 if(!wrap||!canvas||!controls||wrap.querySelector('.pragmaOrbitGuide'))return;
 controls.autoRotate=true;
 controls.autoRotateSpeed=.36;
 let manuallyPaused=false,idleTimer=null;
 const button=document.createElement('button');
 button.type='button';button.id='pragmaOrbitPause';
 button.className='pragmaOrbitPauseBtn';wrap.appendChild(button);
 function sync(){
  button.textContent=manuallyPaused?'▶':'⏸';
  button.title=manuallyPaused?'Retomar rotação':'Pausar rotação';
  button.setAttribute('aria-label',manuallyPaused?'Retomar rotação automática':'Pausar rotação automática');
  button.setAttribute('aria-pressed',String(manuallyPaused));
  button.classList.toggle('paused',manuallyPaused);
  window.PRAGMA_BIM_ORBIT_CONTROL={manuallyPaused,autoRotate:controls.autoRotate};
 }
 function pauseTemporary(){
  controls.autoRotate=false;
  clearTimeout(idleTimer);
  idleTimer=null;
  if(!manuallyPaused)idleTimer=setTimeout(()=>{
   idleTimer=null;
   if(!manuallyPaused&&!document.hidden)controls.autoRotate=true;
   sync();
  },9000);
 }
 button.addEventListener('click',e=>{
  e.preventDefault();e.stopPropagation();
  manuallyPaused=!manuallyPaused;
  clearTimeout(idleTimer);idleTimer=null;
  controls.autoRotate=!manuallyPaused;
  sync();
 });
 canvas.addEventListener('pointerdown',()=>{
  canvas.style.cursor='grabbing';pauseTemporary();
  wrap.querySelector('.pragmaOrbitGuide')?.classList.add('pragmaGuideDismiss');
 });
 window.addEventListener('pointerup',()=>{canvas.style.cursor='grab'});
 canvas.addEventListener('wheel',pauseTemporary,{passive:true});
 controls.addEventListener('start',pauseTemporary);
 document.addEventListener('visibilitychange',()=>{
  if(manuallyPaused)controls.autoRotate=false;
  else if(!document.hidden&&!idleTimer)controls.autoRotate=true;
 });
 const guide=document.createElement('div');
 guide.className='pragmaOrbitGuide';
 guide.setAttribute('aria-hidden','true');
 const hand=document.createElement('span');hand.className='pragmaOrbitHand';hand.textContent='✋';
 const hint=document.createElement('span');hint.textContent='Arraste para girar · use a roda para aproximar';
 guide.appendChild(hand);guide.appendChild(hint);wrap.appendChild(guide);
 setTimeout(()=>guide.classList.add('pragmaGuideDismiss'),8000);
 sync();
}

async function startBim(){
 // All placements and rotations are permanently set in the model federation.
 // Keep discipline visibility, cut, views and navigation; no alignment sliders.
 if(started)return;started=true;
 try{
  loadText.textContent='Preparando visualizador BIM…';
  await importThree();setupScene();initBimWalkControls();pragmaV21OrbitExperience();
  await loadModel('arch');
  const rest=defs.map(d=>d[0]).filter(k=>k!=='arch');
  await Promise.allSettled(rest.map(loadModel));
  await autoCoordinateFinalSet();
  pragmaV21RemoveTopHydroPipe();
  if(models.hydro)pragmaSketchModel(models.hydro);
  pragmaMountSpdaPivot();
  if(readyCount>0){
   fit('general',1.62);
   progressBar.style.width='100%';
   const percent=document.getElementById('bimProgressNumber');
   if(percent)percent.textContent='100%';
   loadText.textContent='Visualização pronta';
   await new Promise(done=>requestAnimationFrame(()=>requestAnimationFrame(done)));
   loadBox.classList.add('hide');
   setTimeout(()=>{
    loadBox.style.display='none';
    pragmaV27StartGestureDemo();
   },480);
  }else{
   loadText.textContent='Não foi possível carregar o modelo 3D';
   const caption=loadBox.querySelector('.pragmaV27LoaderCaption');
   if(caption)caption.textContent='Atualize a página para tentar novamente.';
  }
 }catch(e){loadText.textContent='Falha ao iniciar o modelo integrado';console.error('BIM',e)}
}
ar.querySelectorAll('[data-layer]').forEach(input=>input.addEventListener('change',async()=>{
 const key=input.dataset.layer;selectLayer(key);
 try{const g=await loadModel(key);g.visible=input.checked;updateCut()}catch(_){input.checked=false}
}));
ar.querySelectorAll('[data-layer-name]').forEach(btn=>btn.addEventListener('click',async()=>{
 const key=btn.dataset.layerName,input=ar.querySelector('[data-layer="'+key+'"]');selectLayer(key);
 try{const g=await loadModel(key);const next=!g.visible;g.visible=next;input.checked=next;updateCut()}catch(_){}
}));
cut.addEventListener('input',updateCut);
ar.querySelectorAll('[data-view]').forEach(btn=>btn.addEventListener('click',()=>{fit(btn.dataset.view);ar.querySelectorAll('[data-view]').forEach(other=>{const active=other===btn;other.classList.toggle('is-active',active);other.setAttribute('aria-pressed',String(active))})}));
setTimeout(startBim,700);



})();
