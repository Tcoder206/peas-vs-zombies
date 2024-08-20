const cvs = document.getElementById("canvas");
import { ctx } from "../../structure/variables.js";
import {
  gameSetting,
  gameHandles
} from "../../structure/variables.js";

import { img_menu } from "../../structure/graphics.js";

class CanvasButton {
  constructor(x, y, width, height, background) {
    this.x = x;
    this.y = y;
    this.background = background;
    this.width = width;
    this.height = height;
    this.noWrap = true;
  }
  build(text, color = "black", fontSize, noWrap) {
    const setRound = (text.length + fontSize)/10
    const setWidth = text.length/2 * fontSize;
    const setHeight = (text.length/2 * fontSize)/3;
    const remainingPart = setWidth - text.length
    
    ctx.fillStyle = this.background;
    ctx.beginPath();
    ctx.roundRect(this.x, this.y, setWidth, setHeight, setRound);
    ctx.fill();
    
    ctx.textAlign = "center";
    ctx.fillStyle = color;
    ctx.font = `${fontSize}px Arial`;
    ctx.fillText(text, this.x, this.y);
  }
}

export function handleMenu() {
  const playBtn = new CanvasButton(cvs.width/2, cvs.height/2, 100, 200, "purple");
  playBtn.build("Play game", "white", 50);
}