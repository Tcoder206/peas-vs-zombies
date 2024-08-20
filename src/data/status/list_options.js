const cvs = document.getElementById("canvas");
import { ctx } from "../../structure/variables.js";
import { gameSetting, gameHandles } from "../../structure/variables.js";

import { characterImg } from "../../structure/graphics.js";

import { allDefenders } from "../defenders/list.js";
import { allEnermies } from "../enermies/list.js";

const cardWidth = gameSetting.cardSize.width;
const cardHeight = gameSetting.cardSize.height;

const cellSize = gameSetting.cellSize;
const linePos = 10;
const validCol = cvs.width / cellSize;
const validRow = (cvs.height - cellSize)/cellSize;

// const boardGap = 0.7;
const boardGap = -0.05;

const halfBoardWidth = cellSize * (validCol + boardGap) - linePos - cvs.width / 2;
const halfBoardHeight = cellSize * validRow - linePos * 7;
const roundBoard = (halfBoardWidth + halfBoardHeight)/(linePos*10);

const cellSizeDistance = cellSize + linePos;

export const listOptions = []

function designCards(cardColor, defImg, cardPosX, cardPosY, imgSetting) {
  ctx.fillStyle = cardColor;
  ctx.fillRect(cardPosX, cardPosY, cardWidth, cardHeight);
  ctx.drawImage(defImg.image, 0, 0, characterImg._info.width, imgSetting.height , cardPosX, imgSetting.y, cardWidth, cardHeight)  
  ctx.strokeStyle = imgSetting.color;
  ctx.strokeRect(cardPosX, cardPosY, cardWidth, cardHeight);
}

export function defenderCards(cardColor, defImg, defCost, cardPosX, cardPosY) {

  designCards(cardColor, defImg, cardPosX, cardPosY, { height: characterImg._info.height + 45, y: cardPosY + 15, color: "black"})
  
  const costHeight = 21;
  
  const digit = `${defCost}☀︎`.toString().length;
  const fixDigit = (((digit - 2 == 3) && 5.5) || ((digit - 2 == 4) && 2.5)) * (digit - 2);
  ctx.fillStyle = "yellow";
  ctx.fillRect(cardPosX, cardPosY, cardWidth, costHeight)
  ctx.fillStyle = "black";
  ctx.font = "16px Arial";
  ctx.fillText(`${defCost} ☀︎`, cardPosX + fixDigit, cardPosY + 18);
  ctx.strokeStyle = "gray";
  ctx.strokeRect(cardPosX, cardPosY, cardWidth, costHeight);
}

export function enermyCards(cardColor, enerImg, defHealth, cardPosX, cardPosY) {
  
  designCards(cardColor, enerImg, cardPosX, cardPosY, { height: characterImg._info.height + 30, y: cardPosY + 12, color: "blueviolet"})
  
  const health = `${defHealth} ❤`;
  const digit = health.length;
  const fixDigit = (((digit - 2 == 3) && 5) || ((digit - 2 == 4) && 2) || ((digit - 2 == 5) && 0)) * (digit - 2);
  ctx.fillStyle = "purple";
  ctx.fillRect(cardPosX, cardPosY, cardWidth, 21)
  ctx.fillStyle = "red";
  ctx.font = "16px Arial";
  ctx.fillText(health, cardPosX + fixDigit, cardPosY + 18);
  ctx.strokeStyle = "gray";
  ctx.strokeRect(cardPosX, cardPosY, cardWidth, 21);
}

// Defenders

function gridSystemCard(title, cardColor, gridBoardX, gridBoardY, gridCards, colPerRow) {
  
  const titlePosX = gridBoardX + linePos * 2;
  const titlePosY = gridBoardY + linePos * 3;
  ctx.fillStyle = "white";
  ctx.font = "22px Arial";
  ctx.fillText(title, titlePosX, titlePosY);
  
  let cardRow = 1;
  let cardCol = 1;
  let titleDistance = 0;
  for(let gridIndex in gridCards) {
    
    if(gridIndex == 0) titleDistance = linePos;
    
    const cardPosX = linePos + linePos * (cardCol - 1) + gridBoardX + cardWidth * (cardCol - 1);
    const cardPosY = linePos * cardRow + cardHeight * (cardRow - 1) + titlePosY + titleDistance;
    
    const isExistingCard = listOptions.find(card => card.id == gridIndex)
    
    if(!isExistingCard && (gridCards[gridIndex].id.split("_"))[0] == "pea") {
      listOptions.push({
        id: gridIndex,
        x: cardPosX,
        y: cardPosY,
        width: cardWidth,
        height: cardHeight,
        isSelected: false,
      })
    }
    
    // disabledCard
    
    const defCost = gridCards[gridIndex].cost;
    if(defCost) {
      defenderCards(cardColor, gridCards[gridIndex] ,defCost, cardPosX, cardPosY);
    } else {
      enermyCards(cardColor, gridCards[gridIndex], gridCards[gridIndex].health, cardPosX, cardPosY);
    }
    
    
    cardCol++;
    if(gridIndex != 0 && (Number(gridIndex) + 1) % colPerRow == 0) cardRow++;
    if((cardCol - 1) % colPerRow == 0) cardCol = 1;
  }
}

function designDefendersOptions() {
  
  const insideBoardX = linePos * 1.5;
  const insideBoardY = cellSize + linePos * 1.5;
  
  // Border
  ctx.fillStyle = "darkorange";
  ctx.beginPath();
  ctx.roundRect(linePos, cellSizeDistance, halfBoardWidth, halfBoardHeight, roundBoard);
  ctx.fill();
  // Inside Border
  ctx.fillStyle = "orange";
  ctx.beginPath();
  ctx.roundRect(insideBoardX, 
                insideBoardY,
                halfBoardWidth - linePos,
                halfBoardHeight - linePos,
                roundBoard);
  ctx.fill();
  
  // Cards
  gridSystemCard(`Choose your defenders: (${gameSetting.currentAmount}/${gameSetting.maxSlot})`, "azure",insideBoardX, insideBoardY, allDefenders, 6);
}

const enermiesPosX = halfBoardWidth + linePos * 2;
const enermiesPosY = cellSizeDistance;
const enermiesWidth = cvs.width - halfBoardWidth - linePos * 3;
const enermiesHeight = halfBoardHeight;

function designEnermiesOptions() {
  
  const insideBoardX = enermiesPosX + linePos/2;
  const insideBoardY = enermiesPosY + linePos/2;
  
  // Border
  ctx.fillStyle = "rebeccapurple";
  ctx.beginPath();
  ctx.roundRect(enermiesPosX, enermiesPosY, enermiesWidth, enermiesHeight, roundBoard);
  ctx.fill();
  // Inside Border
  ctx.fillStyle = "mediumpurple";
  ctx.beginPath();
  ctx.roundRect(insideBoardX, 
                insideBoardY,
                enermiesWidth - linePos,
                enermiesHeight - linePos,
                roundBoard);
  ctx.fill();
  
  // Cards:
  gridSystemCard("Enermies appear:", "violet", insideBoardX, insideBoardY, allEnermies, 6);
}

function playButton() {
  const btnPosX = cvs.width/2 - cellSize/2;
  const btnPosY = halfBoardHeight + cellSize + linePos * 1.5;
  const btnWidth = cellSize;
  const btnHeight = cvs.height - cellSize - halfBoardHeight - linePos * 2;
  ctx.fillStyle = "cornflowerblue";
  ctx.beginPath();
  ctx.roundRect(btnPosX, btnPosY, btnWidth, btnHeight, roundBoard);
  ctx.fill();
  
  ctx.strokeStyle = "blue";
  ctx.beginPath();
  ctx.roundRect(btnPosX, btnPosY, btnWidth, btnHeight, roundBoard);
  ctx.stroke();
  
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText("Start", btnPosX + btnWidth/4 + linePos/2, btnPosY + btnHeight/1.5)
  
  gameHandles.button.start = { x: btnPosX, y: btnPosY, width: btnWidth, height: btnHeight }
  
  if(gameSetting.teamDefenders.length < 10 && gameSetting.defenderIds.size < 10) {
    ctx.fillStyle = "rgba(0,0,0,0.3)";
    ctx.roundRect(btnPosX, btnPosY, btnWidth, btnHeight, roundBoard);
    ctx.fill();
  }
}

export function showAllListOptions() {
  designDefendersOptions();
  designEnermiesOptions();
  playButton();
}

