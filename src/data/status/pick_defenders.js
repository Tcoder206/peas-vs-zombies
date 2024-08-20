const cvs = document.getElementById("canvas");
import { listOptions } from "./list_options.js";
import { allDefenders } from "../defenders/list.js";
import { gameSetting, gameHandles, collision, disabledCard } from "../../structure/variables.js";

export function pickDefenders() {
  
  let isAddingDefender = false;

  gameSetting.defenderIds = new Set(gameSetting.teamDefenders.map(def => def.id));

  const handleClick = () => {
    const { mouse } = gameHandles;

    let clickedOnDefender = false;
    
    if(gameSetting.isChoosingTeam) {

      // Kiểm tra xem có click vào defender đã tồn tại không để xóa nó
      for (let i = 0; i < gameSetting.teamDefenders.length; i++) {
        const teamDefender = gameSetting.teamDefenders[i];
        if (collision(mouse, teamDefender)) {
          gameSetting.teamDefenders.splice(i, 1);
          const defenderIndex = (teamDefender.id.split("_"))[1]
          listOptions[defenderIndex].isSelected = false;
          gameSetting.teamDefenders.removeDefender = defenderIndex;
          gameSetting.defenderIds.delete(defenderIndex);
          gameSetting.currentAmount--;
          clickedOnDefender = true;
          break;
        }
      }

      if(!clickedOnDefender) {
        
        // Chọn defender mới từ listOptions
        for (let i = 0; i < listOptions.length; i++) {
          
          if (collision(mouse, listOptions[i]) && gameSetting.defenderIds.size < gameSetting.maxSlot) {
            
            const optionId = listOptions[i].id;
            if (!gameSetting.defenderIds.has(optionId)) {
              gameSetting.teamDefenders.push({ ...listOptions[i], ...allDefenders[i] });
              listOptions[optionId].isSelected = true;
              gameSetting.defenderIds.add(optionId);
              gameSetting.currentAmount++;
            }
            break;
            
          }
          
        }
        
      }
      
    }
  };
  return () => {
    if (!isAddingDefender) {
      cvs.addEventListener("click", handleClick);
      isAddingDefender = true;
    }
  };
}
