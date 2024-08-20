const cvs = document.getElementById("canvas");
import {
  ctx,
  gameSetting,
  gameHandles
} from "./structure/variables.js";



import { handlePlayGame } from "./structure/events.js";

const { controlBars } = gameHandles;

import { handleGameGrid } from "./data/cell.js";
import { handleDefenders } from "./data/defenders/defender.js";
import { handleProjectiles } from "./data/projectiles/projectile.js";
import { handleEnermies } from "./data/enermies/enermy.js";
import { handleResources } from "./data/resources/resource.js";
import { handleStatus } from "./data/status/main_bar.js";
// import { handleMenu } from "./data/handles/menu.js";

import { showAllListOptions } from "./data/status/list_options.js";
import { pickDefenders } from "./data/status/pick_defenders.js";
const setUpTeam = pickDefenders();

gameSetting.isChoosingTeam = true;
export function animate() {
  // handleMenu();
  ctx.clearRect(0,0,cvs.width,cvs.height);
  if(!gameSetting.gameOver) {
    handlePlayGame();
    if(gameSetting.isStartGame){
      handleGameGrid();
      handleStatus();
      gameSetting.frame++;  
      handleDefenders();
      handleEnermies();
      handleProjectiles();
      handleResources();
    }
    if(gameSetting.isChoosingTeam) {
      handleGameGrid();
      showAllListOptions();
      setUpTeam();
      handleStatus();
    }
    requestAnimationFrame(animate);
  }
}