$(function() {
  //Makes window responsive
  window.addEventListener('resize', onWindowResize, false);

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  //Global variiables/Basics
  let width = window.innerWidth;
  let height = window.innerHeight;
  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera(55, width / height, 1, 1000);
  camera.position.z = 14;

  let renderer = new THREE.WebGLRenderer();
  renderer.shadowMapEnabled = true;
  renderer.shadowMapSoft = true;
  renderer.setClearColor(0x000000);
  renderer.setSize(window.innerWidth, window.innerHeight);

  //adds lights
  let light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1.5);
  scene.add(light);

  //adds orbit controls
  let controls = new THREE.OrbitControls(camera, renderer.domElement);

  //Creates the particles
  let particleTot = 0;
  let particles = [];

  let particleGeo = new THREE.SphereGeometry(2, 60, 60, 60);
  let particleMaterial = new THREE.MeshLambertMaterial({
    map: THREE.ImageUtils.loadTexture('img/white.jpg'),
  });
  particleTot = 4000;

  for (let i = 0; i < particleTot; i++) {
    particles[i] = new THREE.Mesh(particleGeo, particleMaterial);

    //scatters the particles
    particles[i].position.x =
      Math.random() * window.innerWidth * 2 - window.innerWidth;
    particles[i].position.y =
      Math.random() * window.innerHeight * 2 - window.innerHeight;
    particles[i].position.z =
      Math.random() * window.innerWidth * 2 - window.innerWidth;

    particles[i].direction = {
      x: Math.random(),
      y: Math.random(),
    };

    scene.add(particles[i]);
  }
  //end of particle creation

  //Creates the planets

  //The Sun
  let geometrySun = new THREE.SphereGeometry(4, 32, 32);
  let materialSun = new THREE.MeshLambertMaterial({
    map: THREE.ImageUtils.loadTexture('img/sun.jpg'),
  });
  let sphereSun = new THREE.Mesh(geometrySun, materialSun);
  sphereSun.position.x = -10.5;
  scene.add(sphereSun);
    sphereSun.name = 'Sun';

    //Mercury
  let geometryMer = new THREE.SphereGeometry(0.2, 32, 32);
  let materialMer = new THREE.MeshLambertMaterial({
    map: THREE.ImageUtils.loadTexture('img/mercury.jpg'),
  });
  let sphereMer = new THREE.Mesh(geometryMer, materialMer);
  sphereMer.position.x = -5;
    scene.add(sphereMer);
    sphereMer.name = 'Mercury';

  //Venus
  let geometryVen = new THREE.SphereGeometry(0.4, 32, 32);
  let materialVen = new THREE.MeshLambertMaterial({
    map: THREE.ImageUtils.loadTexture('img/venus.jpg'),
  });
  let sphereVen = new THREE.Mesh(geometryVen, materialVen);
  sphereVen.position.x = -4;
    scene.add(sphereVen);
    sphereVen.name = 'Venus';


    //Earth
  let geometryEar = new THREE.SphereGeometry(0.4, 32, 32);
  let materialEar = new THREE.MeshLambertMaterial({
    map: THREE.ImageUtils.loadTexture('img/earth.jpg'),
  });
  let sphereEar = new THREE.Mesh(geometryEar, materialEar);
  sphereEar.position.x = -2.5;
  sphereEar.name = 'Earth';
    scene.add(sphereEar);

  //Mars
  let geometryMar = new THREE.SphereGeometry(0.2, 32, 32);
  let materialMar = new THREE.MeshLambertMaterial({
    map: THREE.ImageUtils.loadTexture('img/mars.jpg'),
  });
  let sphereMar = new THREE.Mesh(geometryMar, materialMar);
  sphereMar.position.x = -1.5;
    sphereMar.name = 'Mars';

    scene.add(sphereMar);

  //Jupiter
  let geometryJup = new THREE.SphereGeometry(2, 32, 32);
  let materialJup = new THREE.MeshLambertMaterial({
    map: THREE.ImageUtils.loadTexture('img/jupiter.jpg'),
  });
  let sphereJup = new THREE.Mesh(geometryJup, materialJup);
  sphereJup.position.x = 1.5;
    sphereJup.name = 'Jupiter';

    scene.add(sphereJup);

  //Saturn
  let geometrySat = new THREE.SphereGeometry(1.5, 32, 32);
  let materialSat = new THREE.MeshLambertMaterial({
    map: THREE.ImageUtils.loadTexture('img/download.jpg'),
  });
  let sphereSat = new THREE.Mesh(geometrySat, materialSat);
  sphereSat.position.x = 5.5;
    sphereSat.name = 'Saturn';

    scene.add(sphereSat);

  //Uranus
  let geometryUra = new THREE.SphereGeometry(1, 32, 32);
  let materialUra = new THREE.MeshLambertMaterial({
    map: THREE.ImageUtils.loadTexture('img/uranus.jpg'),
  });
  let sphereUra = new THREE.Mesh(geometryUra, materialUra);
  sphereUra.position.x = 9;
    sphereUra.name = 'Uranus';

    scene.add(sphereUra);

  //Neptune
  let geometryNep = new THREE.SphereGeometry(1, 32, 32);
  let materialNep = new THREE.MeshLambertMaterial({
    map: THREE.ImageUtils.loadTexture('img/neptune.jpg'),
  });
  let sphereNep = new THREE.Mesh(geometryNep, materialNep);
  sphereNep.position.x =  12;
    sphereNep.name = 'Neptune';

    scene.add(sphereNep);

  //Sets up the raycaster

    let raycaster = new THREE.Raycaster();
    let mouse = new THREE.Vector2();
    let domEvents	= new THREEx.DomEvents(camera, renderer.domElement);

    function raycast ( e ) {

        mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;

        raycaster.setFromCamera( mouse, camera );

        mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;

        //2. set the picking ray from the camera position and mouse coordinates
        raycaster.setFromCamera( mouse, camera );

        let intersects = raycaster.intersectObjects( scene.children,true );

        for ( let i = 0; i < intersects.length; i++ ) {
            console.log( intersects[ i ].object.name);


            let url = 'https://en.wikipedia.org/wiki/' + intersects[i].object.name;
            console.log(url);
            let win = window.open(url,'_blank');
            win.focus();
        }
    }

  //Renders the scene
  function render() {
    //Makes the stars move

      for (let i = 0; i < particleTot; i++) {
          particles[i].position.x -= particles[i].direction.x;
          particles[i].position.y -= particles[i].direction.y;

          // if edge is reached, bounce back
          if (
              particles[i].position.x < -window.innerWidth ||
              particles[i].position.x > window.innerWidth
          ) {
              particles[i].direction.x = +particles[i].direction.x;
          }
          if (
              particles[i].position.y < -window.innerHeight ||
              particles[i].position.y > window.innerHeight
          ) {
              particles[i].direction.y = +particles[i].direction.y;
          }
      }

    //Makes planets rotate slightly
      sphereMer.rotation.y += 0.006;
      sphereVen.rotation.y += 0.002;
      sphereMar.rotation.y += 0.002;
      sphereEar.rotation.y += 0.006;
      sphereJup.rotation.y += 0.001;
      sphereSat.rotation.y += 0.001;
      sphereUra.rotation.y += 0.002;
      sphereNep.rotation.y += 0.002;
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  }
    window.addEventListener( 'mousedown', raycast, true );
  render();
  $('#webGL-container').append(renderer.domElement);

  //Last bracket
});
