const cvs = document.getElementById("canvas");
import { ctx } from "./variables.js";

import { listOptions } from "../data/status/list_options.js";

import Defender from "../data/defenders/defender.js";

import {
  gameHandles,
  gameSetting,
  collision,
  disabledCard,
} from "./variables.js";
const mouse = gameHandles.mouse;
const { cellSize, defenders, cellGap } = gameSetting;

import { allDefenders } from "../data/defenders/list.js";

export function handlePlayGame() {
  let cvsPos = cvs.getBoundingClientRect();
  cvs.addEventListener("mousemove", (e) => {
    mouse.x = e.x - cvsPos.left;
    mouse.y = e.y - cvsPos.top;
  });
  cvs.addEventListener("mouseleave", (e) => {
    mouse.x = undefined;
    mouse.y = undefined;
  });
  window.addEventListener("resize", () => {
    cvsPos = cvs.getBoundingClientRect();
  });

  const eventStartBtn = () => {
    if (
      collision(mouse, gameHandles.button.start) &&
      gameSetting.teamDefenders.length >= gameSetting.maxSlot &&
      gameSetting.defenderIds.size >= gameSetting.maxSlot
    ) {
      gameSetting.isStartGame = true;
      gameSetting.isChoosingTeam = false;
    }
  };

  const eventChooseDefender = () => {
    cvs.removeEventListener("click", eventBuildDefender);
    gameSetting.teamDefenders.map(def => {
      if (collision(mouse, def) && gameSetting.numberOfResources >= def.cost) {
        gameSetting.chooseDefender = def;
      }
    });
  };

  const eventBuildDefender = () => {
    const gridPosX = mouse.x - (mouse.x % cellSize) + cellGap / 2;
    const gridPosY = mouse.y - (mouse.y % cellSize) + cellGap / 2;
    if (gridPosY < cellSize) return;
    for (let i = 0; i < defenders.length; i++) {
      if (defenders[i].x === gridPosX && defenders[i].y === gridPosY) return;
    }
    if(gameSetting.chooseDefender) {
      defenders.push(new Defender( {...gameSetting.chooseDefender, x: gridPosX, y: gridPosY} ) );
      gameSetting.numberOfResources -= gameSetting.chooseDefender.cost;
      gameSetting.chooseDefender = undefined;
      cvs.removeEventListener("click", eventBuildDefender);
      cvs.addEventListener("click", eventChooseDefender);
    }
  };
  
  if(gameSetting.isChoosingTeam){
    cvs.addEventListener("click", eventStartBtn);
  } else {
    cvs.removeEventListener("click", eventStartBtn);
  }
  
  if(gameSetting.isStartGame && !gameSetting.isChoosingTeam) {
    cvs.removeEventListener("click", eventStartBtn);

    if(!gameSetting.chooseDefender){
      cvs.addEventListener("click", eventChooseDefender);
    } else {
      cvs.addEventListener("click", eventBuildDefender);
    }
  } else {
    cvs.removeEventListener("click", eventBuildDefender);
  }
}
