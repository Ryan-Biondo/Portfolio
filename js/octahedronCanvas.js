(function () {
  let camera, scene, renderer, shape;

  init();
  animate();

  function init() {
    camera = new THREE.PerspectiveCamera(
      90,
      window.innerWidth / window.innerHeight,
      0.01,
      1000
    );
    camera.position.z = 12;

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
        vec3 colorLow = vec3(0.11764705882, 0.56470588235, 1.0);  // #1c90ff
        vec3 colorHigh = vec3(0.0, 0.72941176471, 0.78039215686);  // #00bac7
        float gradient = vUv.y * 0.5 + 0.5; 
        gradient = clamp(gradient, 0.0, 1.0);
        vec3 color = mix(colorLow, colorHigh, gradient);
        gl_FragColor = vec4(color, 1.0);
      }
    `,
    });

    const geometry = new THREE.OctahedronGeometry(7);
    shape = new THREE.Mesh(geometry, shaderMaterial);
    shape.rotation.x = Math.PI / 2;
    shape.rotation.y = Math.PI / 3;
    shape.rotation.z = Math.PI / 4;

    shape.position.set(0, -2, 0);
    scene.add(shape);

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight
    );
    document
      .getElementById('octahedronCanvas')
      .appendChild(renderer.domElement);

    window.addEventListener('resize', onResize, false);
  }

  function onResize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    (camera.aspect = window.innerWidth / window.innerHeight),
      camera.updateProjectionMatrix();
  }

  function animate() {
    requestAnimationFrame(animate);

    shape.rotation.x += 0.00001;
    shape.rotation.y += 0.00002;

    renderer.render(scene, camera);
  }
})();
