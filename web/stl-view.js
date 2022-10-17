"use strict";

const models = [{
	path: "./bass_tuner/",
	types: ["obj", "stl"],
	parts: [
		"Duesenberg_bass_tuner v3_Duesenberg_bass_tuner v3_big_washer_1_Body1",
		"Duesenberg_bass_tuner v3_Duesenberg_bass_tuner v3_body_1_Body1",
		"Duesenberg_bass_tuner v3_Duesenberg_bass_tuner v3_flange_nut_1_Body1",
		"Duesenberg_bass_tuner v3_Duesenberg_bass_tuner v3_knob_1_Body1",
		"Duesenberg_bass_tuner v3_Duesenberg_bass_tuner v3_knob_shaft_1_Body1",
		"Duesenberg_bass_tuner v3_Duesenberg_bass_tuner v3_metal_washer_1_Body1",
		"Duesenberg_bass_tuner v3_Duesenberg_bass_tuner v3_plastic_washer_1_Body1",
		"Duesenberg_bass_tuner v3_Duesenberg_bass_tuner v3_string_pin_1_Body1",
		"Duesenberg_bass_tuner v3_Duesenberg_bass_tuner v3_90258A121_Phillips Oval Head Screws_1_Body1"
	]
}, {
	path: "./fret/",
	types: ["obj", "stl"],
	parts: [
		"fret wagon v17_fret wagon v17_Axle_1_Axle pin_1_Body1",
		"fret wagon v17_fret wagon v17_Axle_1_mini_wheel_assembly v3 (1)(Mirror)_1_mini wheel (1)(Mirror)_1_Body1",
		"fret wagon v17_fret wagon v17_Axle_1_mini_wheel_assembly v3 (1)(Mirror)_1_mini wheel bearing (1)(Mirror)_1_Body1",
		"fret wagon v17_fret wagon v17_Axle_1_mini_wheel_assembly v3 (1)(Mirror)_1_mini wheel bearing (1)(Mirror)_2_Body1",
		"fret wagon v17_fret wagon v17_Axle_1_mini_wheel_assembly v3 (1)(Mirror)_1_wheel washer (2)(Mirror)_1_Body1",
		"fret wagon v17_fret wagon v17_Axle_1_mini_wheel_assembly v3_1_mini wheel bearing_1_Body1",
		"fret wagon v17_fret wagon v17_Axle_1_mini_wheel_assembly v3_1_mini wheel bearing_2_Body1",
		"fret wagon v17_fret wagon v17_Axle_1_mini_wheel_assembly v3_1_mini wheel_1_Body1",
		"fret wagon v17_fret wagon v17_Axle_1_mini_wheel_assembly v3_1_wheel washer_1_Body1",
		"fret wagon v17_fret wagon v17_Axle_1_wheel washer (1)_1_Body1",
		"fret wagon v17_fret wagon v17_Axle_1_wheel washer (1)_2_Body1",
		"fret wagon v17_fret wagon v17_Axle_1_wheel washer (3)(Mirror)_1_Body1",
		"fret wagon v17_fret wagon v17_Axle_1_wheel washer (3)(Mirror)_2_Body1",
		"fret wagon v17_fret wagon v17_Axle_2_Axle pin_1_Body1",
		"fret wagon v17_fret wagon v17_Axle_2_mini_wheel_assembly v3 (1)(Mirror)_1_mini wheel (1)(Mirror)_1_Body1",
		"fret wagon v17_fret wagon v17_Axle_2_mini_wheel_assembly v3 (1)(Mirror)_1_mini wheel bearing (1)(Mirror)_1_Body1",
		"fret wagon v17_fret wagon v17_Axle_2_mini_wheel_assembly v3 (1)(Mirror)_1_mini wheel bearing (1)(Mirror)_2_Body1",
		"fret wagon v17_fret wagon v17_Axle_2_mini_wheel_assembly v3 (1)(Mirror)_1_wheel washer (2)(Mirror)_1_Body1",
		"fret wagon v17_fret wagon v17_Axle_2_mini_wheel_assembly v3_1_mini wheel bearing_1_Body1",
		"fret wagon v17_fret wagon v17_Axle_2_mini_wheel_assembly v3_1_mini wheel bearing_2_Body1",
		"fret wagon v17_fret wagon v17_Axle_2_mini_wheel_assembly v3_1_mini wheel_1_Body1",
		"fret wagon v17_fret wagon v17_Axle_2_mini_wheel_assembly v3_1_wheel washer_1_Body1",
		"fret wagon v17_fret wagon v17_Axle_2_wheel washer (1)_1_Body1",
		"fret wagon v17_fret wagon v17_Axle_2_wheel washer (1)_2_Body1",
		"fret wagon v17_fret wagon v17_Axle_2_wheel washer (3)(Mirror)_1_Body1",
		"fret wagon v17_fret wagon v17_Axle_2_wheel washer (3)(Mirror)_2_Body1",
		"fret wagon v17_fret wagon v17_fret_1_35mm_1_Body1",
		"fret wagon v17_fret wagon v17_fret_1_35mm_2_Body1",
		"fret wagon v17_fret wagon v17_fret_1_fret steel",
		"fret wagon v17_fret wagon v17_fret_1_fret support left",
		"fret wagon v17_fret wagon v17_fret_1_fret support right",
		"fret wagon v17_fret wagon v17_wood version_1_belt lock(Mirror)_1_Body1",
		"fret wagon v17_fret wagon v17_wood version_1_belt lock_1_Body1",
		"fret wagon v17_fret wagon v17_wood version_1_bottom sheet_1_Body1",
		"fret wagon v17_fret wagon v17_wood version_1_middle sheet_1_Body1",
		"fret wagon v17_fret wagon v17_wood version_1_top sheet_1_Body1"
	]
}];


// "inspired by" https://tonybox.net/posts/simple-stl-viewer/

import * as THREE from "three";

import { OrbitControls } from  "./node_modules/three/examples/jsm/controls/OrbitControls.js";
import { STLLoader } from "./node_modules/three/examples/jsm/loaders/STLLoader.js";
import { OBJLoader } from "./node_modules/three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from "./node_modules/three/examples/jsm/loaders/MTLLoader.js";

/*
const renderers = [];

window.addEventListener('resize', function () {
    renderers.forEach(renderer => {
    	renderer.setSize(elem.clientWidth, elem.clientHeight);
    camera.aspect = elem.clientWidth/elem.clientHeight;
    camera.updateProjectionMatrix();
}, false);
*/

models.forEach((model, index) => {
	const height = window.innerHeight;
	const width = window.innerWidth;

	const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
	renderer.setSize(width, height);
	document.body.appendChild(renderer.domElement);

	const camera = new THREE.PerspectiveCamera( 70, width / height, 1, 1000 );
	camera.position.z = 100;

	const scene = new THREE.Scene();
	scene.add(new THREE.HemisphereLight(0xffffff, 1.5));
	/*
	//create a blue LineBasicMaterial
	const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

	const points = [];
	points.push( new THREE.Vector3( - 10, 0, 0 ) );
	points.push( new THREE.Vector3( 0, 10, 0 ) );
	points.push( new THREE.Vector3( 10, 0, 0 ) );

	const geometry = new THREE.BufferGeometry().setFromPoints( points );

	const line = new THREE.Line( geometry, material );

	scene.add( line );
	*/

	const controls = new OrbitControls(camera, renderer.domElement);
	controls.enableDamping = true;
	controls.rotateSpeed = 0.05;
	controls.dampingFactor = 0.1;
	controls.enableZoom = true;
	controls.autoRotate = true;
	controls.autoRotateSpeed = .75;


	if (model.types.indexOf("obj") !== -1) {
		model.parts.map((part, index) => {
			const mtl = new MTLLoader();
			mtl.setPath(`${model.path}obj/`);
			mtl.load(`${part}.mtl`, function (materials) {
				materials.preload();

				console.log("her!" + `${part}.mtl`);
				const obj = new OBJLoader();
				obj.setPath(`${model.path}obj/`);

				obj.setMaterials(materials);
				obj.load(`${part}.obj`, function (object) {
					console.log(`${part}.obj`);
					scene.add(object);
				});

			});
		});
	}

	if (model.types.indexOf("stl") !== -1) {

		model.parts.map((part, index) => {
			const loader = new STLLoader();
		
			loader.load( `${model.path}stl/${part}.stl`, function ( geometry ) {
				const material = new THREE.MeshPhongMaterial({ 
			        color: 0xaaaaaa, 
			        specular: 50, 
			        shininess: 10
			    });
		    	const mesh = new THREE.Mesh(geometry, material);
	        	//scene.add(mesh);

	        	const middle = new THREE.Vector3();
				geometry.computeBoundingBox();
				geometry.boundingBox.getCenter(middle);
				mesh.geometry.applyMatrix4(new THREE.Matrix4().makeTranslation(-middle.x, -middle.y, -middle.z));

				const largestDimension = Math.max(geometry.boundingBox.max.x,
				                            geometry.boundingBox.max.y, 
				                            geometry.boundingBox.max.z)
				camera.position.z = largestDimension * 1.5;

				const animate = function () {
				    requestAnimationFrame(animate);
				    controls.update();
				    renderer.render(scene, camera);
				}; 

				animate();
			});
		});
	}

	renderer.render( scene, camera );
});