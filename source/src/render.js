import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

// Final grade: exposure, ACES filmic, split-toning, contrast, vignette, grain, damage tint, sun glare.
const GradeShader = {
  uniforms: { tDiffuse: { value: null }, exposure: { value: 1.0 }, time: { value: 0 }, vig: { value: 0.32 }, grain: { value: 0.035 }, dmg: { value: 0 }, sat: { value: 0.8 }, sunUV: { value: new THREE.Vector3(0.5, 0.5, 0) }, aspect: { value: 1.7 }, zoom: { value: 0 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: /* glsl */`
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
    }`,
};

export function makeRenderer(canvas, quality) {
  const r = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance', stencil: false });
  r.outputColorSpace = THREE.LinearSRGBColorSpace; r.toneMapping = THREE.NoToneMapping;
  r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFSoftShadowMap;
  return r;
}
export function makePost(renderer, scene, camera, quality) {
  const rt = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: quality === 'high' ? 4 : 0 });
  const comp = new EffectComposer(renderer, rt);
  comp.addPass(new RenderPass(scene, camera));
  let bloom = null;
  if (quality !== 'low') { bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.22, 0.4, 1.6); comp.addPass(bloom); }
  const grade = new ShaderPass(GradeShader); comp.addPass(grade);
  return { comp, bloom, grade };
}
