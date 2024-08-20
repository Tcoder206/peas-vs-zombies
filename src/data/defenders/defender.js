const cvs = document.getElementById("canvas");
import { ctx } from "../../structure/variables.js";

import {
  gameSetting,
  gameHandles,
  collision
} from "../../structure/variables.js";

import { characterImg } from "../../structure/graphics.js";

import Projectile from "../projectiles/projectile.js";

import { intrinsic } from "./intrinsic.js";

const {
  cellGap,
  cellSize,
  projectiles,
  defenders,
  enermies,
  enermyPos
} = gameSetting;


// Defender
export default class Defender {
  constructor(obj) {
    // this.x = obj.x + 7.5;
    // this.y = obj.y + 25;
    // this.width = cellSize - cellGap/2 - 15;
    // this.height = cellSize - cellGap/2 - 25;
    this.x = obj.x; 
    this.y = obj.y;
    this.width = cellSize - cellGap;
    this.height = cellSize - cellGap;
    this.shooting = false;
    this.health = obj.health;
    this.projectiles = [];
    this.timer = 0;
    this.id = obj.id;
    this.name = obj.name;
    this.affectZombies = obj.affectZombies;
    this.buffPower = obj.buffPower;
    this.projectileStats = obj.projectile;
    this.intrinsics = obj.intrinsic;
    this.cd = obj.cooldown * 1000;
    this.cost = obj.cost;
    this.img = obj.image;
    this.delay = obj.delay * 100;
    this.imgWidth = characterImg._info.width;
    this.imgHeight = characterImg._info.height;
  }
  draw() {
    // Health
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText(Math.floor(this.health), this.x + 33, this.y + 25);
    
    // Draw defender
    ctx.drawImage(this.img, 0, 0, this.imgWidth, this.imgHeight, this.x, this.y, this.width, this.height);
  }
  update() {
    if (this.shooting) {
      if (this.timer % this.delay === 0){
        projectiles.push(new Projectile({
          x: this.x + cellSize, 
          y: this.y + cellSize / 2,
          color: this.projectileStats.color,
          power: this.projectileStats.damage,
        }));
      }
      this.timer++;
    }
  }
}


export function handleDefenders() {
  for(let i = 0; i < defenders.length; i++){
    defenders[i].draw();
    defenders[i].update();
    defenders[i].shooting = enermyPos.indexOf(defenders[i].y - cellGap/2) !== -1 ? true : false;
    for(let j = 0; j < enermies.length; j++){
      if(defenders[i] && collision(defenders[i], enermies[j])){
        enermies[j].movement = 0;
        defenders[i].health -= 1;
      }
      if(defenders[i] && defenders[i].health <= 0) {
        defenders.splice(i, 1);
        i--;
        enermies[j].movement = enermies[j].speed;
      }
    }
  }
}
