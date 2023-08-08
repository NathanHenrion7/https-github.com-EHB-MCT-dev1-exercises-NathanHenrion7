"use strict";

window.onresize = drawLine;

drawLine();

function drawLine() {
	let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	let context = canvas.getContext("2d");

	context.fillStyle = "purple";
	context.beginPath();
	context.ellipse(200, 200, 100, 50, Math.PI / 4, 0, Math.PI * 2);
	context.fill();
}
