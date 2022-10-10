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

context.beginPath();
context.rect(20, 100, 50, 50);
context.rect(70, 150, 50, 50);
context.rect(70, 200, 50, 50);
context.rect(20, 200, 50, 50);
context.stroke();