"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

function drawRect() {

}
context.lineWidth = 1;
context.fillStyle = 'black';
context.beginPath();
context.rect(50, 50, 300, 300);
context.stroke();
context.fill();

context.lineWidth = 1;
context.fillStyle = '#66FF00';
context.beginPath();
context.rect(75, 150, 50, 50);
context.fill();

context.lineWidth = 1;
context.fillStyle = '#66FF00';
context.beginPath();
context.rect(275, 150, 50, 50);
context.fill();

context.lineWidth = 1;
context.fillStyle = '#66FF00';
context.beginPath();
context.rect(125, 200, 50, 50);
context.fill();

context.lineWidth = 1;
context.fillStyle = '#66FF00';
context.beginPath();
context.rect(225, 200, 50, 50);
context.fill();

context.lineWidth = 1;
context.fillStyle = '#66FF00';
context.beginPath();
context.rect(125, 250, 50, 50);
context.fill();

context.lineWidth = 1;
context.fillstyle = '#66FF00';
context.beginPath();
context.rect(225, 250, 50, 50);
context.fill();

context.lineWidth = 1;
context.fillstyle = '#66FF00';
context.beginPath();
context.rect(75, 250, 50, 50);
context.fill();

context.lineWidth = 1;
context.fillStyle = '#66FF00';
context.beginPath();
context.rect(275, 250, 50, 50);
context.fill();