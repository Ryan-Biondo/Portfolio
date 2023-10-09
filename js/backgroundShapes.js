let camera, scene, renderer;
let shapes = [];

init();
animate();

function init() {
  camera = new THREE.PerspectiveCamera(
    70,
    document.documentElement.clientWidth /
      document.documentElement.clientHeight,
    0.01,
    1000
  );
  camera.position.z = 10;

  scene = new THREE.Scene();

  const shaderMaterial = new THREE.ShaderMaterial({
    vertexShader: `
      varying vec3 vUv; 

      void main() {
        vUv = position; 
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vUv;
      
      void main() {
        vec3 colorLow = vec3(0.20392156863, 0.59607843137, 0.85882352941);  // #3498db
        vec3 colorHigh = vec3(0.14117647059, 0.94509803922, 1.0);  // #24f1ff
        float gradient = vUv.y * 0.95 + 0.05; 
        vec3 color = mix(colorLow, colorHigh, gradient);
        gl_FragColor = vec4(color, 1.0);
      }
    `,
  });

  const geometry = [
    new THREE.TetrahedronGeometry(6),
    new THREE.BoxGeometry(5, 5, 5),
    new THREE.OctahedronGeometry(2),
    new THREE.DodecahedronGeometry(1.5),
    new THREE.IcosahedronGeometry(1),
  ];

  const positions = [
    { x: -3.5, y: 2.5, z: 0 },
    { x: 3, y: -25, z: 0 },
    { x: 2, y: -40, z: 0 },
    { x: 0, y: -60, z: 0 },
    { x: 0, y: -76, z: 0 },
  ];

  shapes = geometry.map((geo, index) => {
    const shape = new THREE.Mesh(geo, shaderMaterial);
    shape.position.set(
      positions[index].x,
      positions[index].y,
      positions[index].z
    );
    scene.add(shape);
    return shape;
  });

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(
    document.documentElement.clientWidth,
    document.documentElement.clientHeight
  );
  document.getElementById('threejsBackground').appendChild(renderer.domElement);

  window.addEventListener('scroll', onScroll, false);
  window.addEventListener('resize', onResize, false);
}

function onScroll() {
  const scrollY = window.scrollY;
  camera.position.y = -scrollY * 0.02;
  camera.updateProjectionMatrix();
}

function onResize() {
  renderer.setSize(
    document.documentElement.clientWidth,
    document.documentElement.clientHeight
  );
  camera.aspect =
    document.documentElement.clientWidth /
    document.documentElement.clientHeight;
  camera.updateProjectionMatrix();
}

function animate() {
  requestAnimationFrame(animate);

  shapes.forEach((shape) => {
    shape.rotation.x += 0.0002;
    shape.rotation.y += 0.0003;
  });

  renderer.render(scene, camera);
}
