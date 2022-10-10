"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

function drawSpaceInvader() {

}
context.beginPath();
context.strokestyle = "black";
context.rect(0, 0, 300, 300)
context.stroke();