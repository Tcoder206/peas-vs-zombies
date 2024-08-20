const cvs = document.getElementById("canvas");
cvs.width = 1000;
cvs.height = 600;
export const ctx = cvs.getContext("2d");

export const gameSetting = {
  cellSize : 100,
  cellGap : 3,
  gameGrid : [],
  defenders : [],
  enermies : [],
  numberOfResources : 1000,
  frame: 0,
  enermiesInterval : 100,
  projectiles : [],
  enermyPos : [],
  resources : [],
  teamDefenders: [],
  maxSlot: 10,
  currentAmount: 0,
  gameOver: false,
  defenderIds: undefined,
  chooseDefender: undefined,
  savePreviousTeam: [],
  isChoosingTeam: false,
  isStartGame: false,
  isShowingMenu: false,
  isOpeningSetting: false,
  cardSize: {
    width: 65,
    height: 85
  }
}

export const gameHandles = {
  
  // Game board
  
  controlBars: {
    width: cvs.width,
    height: gameSetting.cellSize
  },
  
  // Mouse
  
  mouse: {
    x: undefined,
    y: undefined,
    width: 0.1,
    height: 0.1
  },
  
  button: {
    start: undefined,
    play: undefined
  }
}


export function collision(first, second) {
  if(! (first.x > second.x + second.width ||
        first.x + first.width < second.x ||
        first.y > second.y + second.height ||
        first.y + first.height < second.y )){
    return true;
  }
}

export function disabledCard(cardPosX, cardPosY, isSelected = false) {
  if(isSelected) {
    ctx.fillStyle = "rgba(0,0,0,0.3)";
    ctx.fillRect(cardPosX, cardPosY, gameSetting.cardSize.width, gameSetting.cardSize.height)
  }
}
