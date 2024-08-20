const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");

import {
  gameSetting,
  gameHandles,
  collision
} from "../structure/variables.js";
import { img_ground } from "../structure/graphics.js";

const { cellSize, gameGrid } = gameSetting;

const { mouse } = gameHandles;


class Cell {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  draw() {
    ctx.drawImage(img_ground,0,0,640,640,this.x,this.y,this.width,this.height);
    if(gameSetting.isStartGame && !gameSetting.isChoosingTeam && gameSetting.chooseDefender){
      if(mouse.x && mouse.y && collision(this, mouse)){
        ctx.strokeStyle = "black";
        ctx.strokeRect(this.x, this.y, this.width, this.height)
      }
    }
  }
}

function createGrid() {
  for(let y = cellSize; y < cvs.height; y += cellSize){
    for(let x = 0; x < cvs.width; x += cellSize){
      gameGrid.push(new Cell(x, y, cellSize, cellSize));
    }
  }
}
createGrid()

export function handleGameGrid() {
  for(let i = 0; i < gameGrid.length; i++){
    gameGrid[i].draw();
  }
}