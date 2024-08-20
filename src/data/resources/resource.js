const cvs = document.getElementById("canvas");
import { ctx } from "../../structure/variables.js";
import {
  gameSetting,
  gameHandles,
  collision
} from "../../structure/variables.js";

const { mouse } = gameHandles;

const {
  cellSize,
  resources,
} = gameSetting;

const amounts = [25, 50, 75];

class Resource {
  constructor() {
    this.x = (Math.floor(Math.random() * cvs.width/cellSize) + 0.25)*cellSize;
    this.y = (Math.floor(Math.random() * 5) + 1)*cellSize + cellSize*0.75;
    this.width = cellSize / 4;
    this.height = cellSize / 4;
    this.amount = amounts[Math.floor(Math.random() * amounts.length)];
  }
  draw() {
    ctx.fillStyle = "gold";
    ctx.fillRect(this.x, this.y, this.width, this.height)
    ctx.fillStyle = "black";
    ctx.font = "15px Arial"
    ctx.fillText(this.amount, this.x + 5, this.y + 15);
  }
}

export function handleResources() {
  if(gameSetting.frame % (gameSetting.enermiesInterval * 2) === 0) {
    resources.push(new Resource());
  }
  for(let i = 0; i < resources.length; i++) {
    resources[i].draw();
    if(resources[i] && mouse.x && mouse.y && collision(resources[i], mouse)){
      gameSetting.numberOfResources += resources[i].amount;
      resources.splice(i, 1);
      i--;
    }
  }
}
