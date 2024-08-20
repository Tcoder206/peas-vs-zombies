const cvs = document.getElementById("canvas");
import { ctx } from "../../structure/variables.js";
import {
  gameSetting,
  gameHandles
} from "../../structure/variables.js";

import { characterImg } from "../../structure/graphics.js";
import { allEnermies } from "./list.js";

const {
  cellGap,
  cellSize,
  enermies,
  enermyPos,
} = gameSetting;


  // {
  //   id: "zombie_0",
  //   name: "Basic Zombie",
  //   image: characterImg.zom.basic,
  //   cooldown: 10,
  //   health: 100,
  //   intrinsic: [],
  //   affectPlants: 0,
  //   buffPower: 0,
  //   damage: 10,
  //   delay: 1
  // },

class Enermy {
  constructor(obj){
    this.x = cvs.width;
    this.y = obj.verticalPos;
    this.width = cellSize;
    this.height = cellSize - cellGap/2;
    this.speed = 1/(2*obj.delay);
    this.movement = this.speed;
    this.health = obj.health;
    this.intrinsic = obj.intrinsic;
    this.maxHealth = this.health;
    this.img = obj.image;
    this.cd = obj.cooldown * 100;
    this.changeHardmode = 1500 * 100; 
    this.isMoreHardcore = obj.isHardcore || false;
    this.hardmodeCd = obj.cooldown + this.changeHardmode;
    this.imgWidth = characterImg._info.width;
    this.imgHeight = characterImg._info.height;
    this.received = obj.received
  }
  update() {
    this.x -= this.movement;
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.font = "20px Arial";
    ctx.fillText(Math.floor(this.health), this.x + 33 - 40, this.y + 15);
    ctx.drawImage(this.img, 0, 0, this.imgWidth, this.imgHeight, this.x - 40, this.y, this.width, this.height);
  }
}


export function handleEnermies() {
  for(let i = 0; i < enermies.length; i++) {
    enermies[i].draw();
    enermies[i].update();
    if(enermies[i].x < 0) gameSetting.gameOver = true;
    if(enermies[i].health <= 0) {
      gameSetting.numberOfResources += enermies[i].received;
      enermies.splice(i, 1);
      enermyPos.splice(i, 1);
      i--;
    }
  }
  for(let i = 0; i < allEnermies.length; i++) {
    const verticalPos = Math.floor(Math.random() * 5 + 1) * cellSize;
    if(gameSetting.frame % (allEnermies[i].cooldown * 10) == 0){
      enermies.push(new Enermy({ ...allEnermies[i], verticalPos }));
      enermyPos.push(verticalPos);
    }
    break;
  }
}
