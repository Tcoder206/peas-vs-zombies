const cvs = document.getElementById("canvas");
import { ctx } from "../../structure/variables.js";
import {
  gameSetting,
  gameHandles,
  collision
} from "../../structure/variables.js";

const { 
  cellSize,
  projectiles,
  enermies
} = gameSetting;


function convertGradCol(obj) {
  if(Array.isArray(obj.color)) {
    const centerX = obj.x + obj.width / 2;
    const centerY = obj.y + obj.height /2;
    const gradient = ctx.createLinearGradient(obj.x , obj.y, obj.x + obj.width/2, obj.y + obj.height/2);
    obj.color.forEach((col, ind) => {
      const ratio = ind/(obj.color.length - 1)
      gradient.addColorStop(ratio, col);
    });
    return gradient;
  }
  return obj.color;
}

export default class Projectile{
  constructor(obj) {
    this.x = obj.x;
    this.y = obj.y;
    this.width = cellSize/10;
    this.height = cellSize/10;
    this.power = obj.power;
    this.speed = 5;
    this.color = obj.color;
    this.lineCol = obj.lineColor
  }
  update() {
    this.x += this.speed;
  }
  draw() {
    ctx.fillStyle = convertGradCol({
      x: this.x,
      y: this.y,
      color: this.color,
      width: this.width,
      height: this.height,
    });
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.width, 0, Math.PI * 2);
    ctx.fill();
  }
}


export function handleProjectiles() {
  for(let i = 0; i < projectiles.length; i++){
    projectiles[i].update();
    projectiles[i].draw();
    for(let j = 0; j < enermies.length; j++){
      if(projectiles[i] && enermies[j] && collision(projectiles[i], enermies[j])) {
        enermies[j].health -= projectiles[i].power;
        projectiles.splice(i, 1);
        i--;
      }
    }
    
    if(projectiles[i] && projectiles[i].x > cvs.width) {
      projectiles.splice(i, 1);
      i--;
    }
  }
}