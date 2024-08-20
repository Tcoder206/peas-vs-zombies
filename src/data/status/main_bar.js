const cvs = document.getElementById("canvas");
import { ctx } from "../../structure/variables.js";
import { gameSetting, gameHandles, collision, disabledCard } from "../../structure/variables.js";

import { defenderCards, listOptions } from "./list_options.js";

export function handleStatus() {
  
  ctx.fillStyle = "saddlebrown";
  ctx.fillRect(0,0, gameHandles.controlBars.width, gameHandles.controlBars.height);
  
  const resGap = 10;
  const paddingRight = resGap * 1.5;
  const resPosX = 25;
  const resPosY = 80;
  const cellSize = gameSetting.cellSize;
  const resources = gameSetting.numberOfResources;
  
  const maxSlot = gameSetting.maxSlot;
  
  const sunBoardWidth = cellSize - resGap - resPosX;
  const sunBoardHeight = cellSize - resGap * 2;
  ctx.strokeStyle = "sandybrown";
  ctx.beginPath();
  ctx.roundRect(paddingRight, resGap, sunBoardWidth, sunBoardHeight, 5);
  ctx.stroke();
  
  ctx.fillStyle = "brown";
  ctx.roundRect(paddingRight, resGap, sunBoardWidth, sunBoardHeight, 5);
  ctx.fill();
  
  ctx.fillStyle = "yellow";
  ctx.font = `18px Arial`;
  ctx.fillText(`${resources}☀︎`, resPosX, resPosY);
  
  // Vẽ các phần tử
  gameSetting.teamDefenders.map((char, ind) => {
    char.x = (paddingRight + char.width) * ind + resPosX + sunBoardWidth + paddingRight / 1.5;
    char.y = (cellSize - resPosY) / 2 - 3;
    defenderCards("azure", char, char.cost, char.x, char.y, char.isSelected);
    if(gameSetting.isStartGame && !gameSetting.isChoosingTeam){
      if(gameSetting.numberOfResources < char.cost) disabledCard(char.x, char.y, true);
    }
  });
  if(!gameSetting.isStartGame && gameSetting.isChoosingTeam){
    listOptions.map(def => {
      disabledCard(def.x, def.y, def.isSelected)
      if(gameSetting.teamDefenders.length == gameSetting.maxSlot &&
         gameSetting.defenderIds.size == gameSetting.maxSlot &&
        !def.isSelected){
        disabledCard(def.x, def.y, true);
      }
    });
  }
}
