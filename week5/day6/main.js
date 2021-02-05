// setup ThreeJS
const scene = new THREE.Scene();
scene.background = new THREE.Color( "fff" );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// add cube 
const geometry = new THREE.BoxGeometry(1, 1, 1); // x y  z
const material = new THREE.MeshBasicMaterial( { color: "#1F8EE7"  } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
camera.position.z = 5; 



// reder the cube
function animate() {
    cube.rotation.y += 0.01;
    cube.rotation.x += 0.01;
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();

