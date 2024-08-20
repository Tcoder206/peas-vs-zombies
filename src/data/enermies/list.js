import { characterImg } from "../../structure/graphics.js"

/*
Intrinsics:
1. Decrease Power
2. Call zombies
3. Steal resources
4. Buff (team)
5. Buff (self)
6. Wide Area Attack
*/

export const allEnermies = [
  
  {
    id: "zombie_0",
    name: "Basic Zombie",
    image: characterImg.zom.basic,
    cooldown: 10,
    health: 100,
    intrinsic: [],
    affectPlants: 0,
    buffPower: 0,
    damage: 10,
    received: 25,
    delay: 1 // Tốc độ (speed) của zombie (delay càng cao speed càng chậm)
  },
  
  {
    id: "zombie_1",
    name: "Conehead Zombie",
    image: characterImg.zom.headcone,
    cooldown: 50,
    health: 200,
    intrinsic: [],
    affectPlants: 0,
    buffPower: 0,
    damage: 20,
    received: 25,
    delay: 1
  },
  
  {
    id: "zombie_2",
    name: "Buckethead Zombie",
    image: characterImg.zom.buckethead,
    cooldown: 100,
    health: 300,
    intrinsic: [],
    affectPlants: 0,
    buffPower: 0,
    damage: 30,
    received: 50,
    delay: 1
  },
  
  {
    id: "zombie_3",
    name: "Armwrester Zombie",
    image: characterImg.zom.armwrester,
    cooldown: 500,
    health: 500,
    intrinsic: [5],
    affectPlants: 0,
    buffPower: 20,
    damage: 50,
    received: 50,
    delay: 2
  },
  
  {
    id: "zombie_4",
    name: "Vest Zombie",
    image: characterImg.zom.vest,
    cooldown: 700,
    health: 500,
    intrinsic: [2],
    affectPlants: 0,
    buffPower: 20,
    damage: 50,
    received: 50,
    delay: 2
  },
  
  {
    id: "zombie_5",
    name: "Car Zombie",
    image: characterImg.zom.car,
    cooldown: 1000,
    health: 500,
    intrinsic: [2],
    affectPlants: 0,
    buffPower: 20,
    damage: 100,
    received: 75,
    delay: 1
  },
  
  {
    id: "zombie_6",
    name: "Gargantuar Zombie",
    image: characterImg.zom.gargantuar,
    cooldown: 1200,
    health: 1000,
    intrinsic: [4],
    affectPlants: 0,
    buffPower: 50,
    damage: 200,
    received: 100,
    delay: 3
  },

  // Xuất hiện sau giây cooldown 1500
  {
    id: "zombie_7",
    name: "Basic Radioactive Zombie",
    image: characterImg.zom.basicRadioactive,
    cooldown: 200,
    health: 500,
    intrinsic: [1],
    affectPlants: 10,
    buffPower: 0,
    damage: 50,
    received: 50,
    delay: 2
  },
  
  {
    id: "zombie_8",
    name: "Headcone Radioactive Zombie",
    image: characterImg.zom.headconeRadioactive,
    cooldown: 400,
    health: 1000,
    intrinsic: [1],
    affectPlants: 20,
    buffPower: 0,
    damage: 100,
    received: 50,
    delay: 3
  },

  {
    id: "zombie_9",
    name: "Buckethead Radioactive Zombie",
    image: characterImg.zom.bucketheadRadioactive,
    cooldown: 800,
    health: 1500,
    intrinsic: [1],
    affectPlants: 30,
    buffPower: 0,
    damage: 150,
    received: 75,
    delay: 3
  },

  {
    id: "zombie_10",
    name: "Car Radioactive Zombie",
    image: characterImg.zom.carRadioactive,
    cooldown: 1000,
    health: 2000,
    intrinsic: [1, 3],
    affectPlants: 50,
    buffPower: 0,
    damage: 300,
    received: 75,
    delay: 2
  },
  
  {
    id: "zombie_11",
    name: "Gargantuar Radioactive Zombie",
    image: characterImg.zom.gargantuarRadioactive,
    cooldown: 2000,
    health: 3000,
    intrinsic: [1, 3, 5],
    affectPlants: 50,
    buffPower: 200,
    damage: 500,
    received: 100,
    delay: 5
  },
  
  {
    id: "zombie_12",
    name: "Genetically Mutated Gargantuar Zombie",
    image: characterImg.zom.basicGenMutated,
    cooldown: 3000,
    health: 5000,
    intrinsic: [1, 2, 3, 5],
    affectPlants: 100,
    buffPower: 200,
    damage: 1000,
    received: 125,
    delay: 5
  },
  
  {
    id: "zombie_13",
    name: "Headcone Genetically Mutated Gargantuar Zombie",
    image: characterImg.zom.headconeGenMutated,
    cooldown: 5000,
    health: 10000,
    intrinsic: [1, 2, 3, 5],
    affectPlants: 200,
    buffPower: 500,
    damage: 5000,
    received: 150,
    delay: 7
  },
  
  {
    id: "zombie_14",
    name: "Buckethead Genetically Mutated Gargantuar Zombie",
    image: characterImg.zom.bucketheadGenMutated,
    cooldown: 10000,
    health: 15000,
    intrinsic: [1, 2, 3, 4, 5],
    affectPlants: 500,
    buffPower: 1000,
    damage: 10000,
    received: 200,
    delay: 10
  },

  {
    id: "zombie_15",
    name: "Robotic Zomboss",
    image: characterImg.zom.roboticZomboss,
    cooldown: 20000,
    health: 30000,
    intrinsic: [1, 2, 3, 4, 5],
    affectPlants: 100,
    buffPower: 1000,
    damage: 5000,
    received: 300,
    delay: 20
  },
]