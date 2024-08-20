import { characterImg } from "../../structure/graphics.js"

/*
Intrinsics: 
0: Slow
1: Poison
2: Repel
3: Product Sun
4: Buff (Team)
5: Buff (Self)
6: Wide Area Attack
*/


export const allDefenders = [
  
  {
    id: "pea_0",
    name: "Peashooter",
    cost: 100,
    image: characterImg.pea.normal,
    cooldown: 5,
    delay: 1,
    health: 100,
    intrinsic: [],
    affectZombies: 0,
    buffPower: 0,
    projectile: {
      color: "lime",
      slash: false,
      damage: 20,
    }
  },
  
  // {
  //   id: "pea_1",
  //   name: "Fire Peashooter",
  //   cost: 150,
  //   image: characterImg.pea.fire,
  //   cooldown: 5,
  //   delay: 1,
  //   health: 100,
  //   intrinsic: [],
  //   affectZombies: 0,
  //   buffPower: 0,
  //   projectile: {
  //     color: "red",
  //     slash: false,
  //     damage: 30,
  //   }
  // },
  
  {
    // id: "pea_2",
    id: "pea_1",
    name: "Snow Peashooter",
    cost: 150,
    image: characterImg.pea.snow,
    cooldown: 5,
    delay: 1,
    health: 100,
    intrinsic: [0],
    affectZombies: 0,
    buffPower: 0,
    projectile: {
      color: "skyblue",
      slash: false,
      damage: 20,
    }
  },
  
  {
    // id: "pea_3",
    id: "pea_2",
    name: "Kha Banh Peashooter",
    cost: 200,
    image: characterImg.pea.young,
    cooldown: 10,
    delay: 1,
    health: 500,
    intrinsic: [1],
    buffPower: 0,
    affectZombies: 10,
    projectile: {
      color: "#FFDFC4",
      slash: true,
      damage: 20,
    }
  },
  
  {
    // id: "pea_4",
    id: "pea_3",
    name: "Electric Peashooter",
    cost: 200,
    image: characterImg.pea.elec,
    cooldown: 5,
    delay: 1,
    health: 200,
    intrinsic: [1],
    affectZombies: 0,
    buffPower: 0,
    projectile: {
      color: "cyan",
      slash: true,
      damage: 30,
    }
  },
  
  {
    // id: "pea_5",
    id: "pea_4",
    name: "Primary Peashooter",
    cost: 150,
    image: characterImg.pea.primal,
    cooldown: 5,
    delay: 1,
    health: 200,
    intrinsic: [2],
    affectZombies: 0,
    buffPower: 0,
    projectile: {
      color: "darkgreen",
      slash: false,
      damage: 30,
    }
  },
  
  {
    // id: "pea_6",
    id: "pea_5",
    name: "Sweet Peashooter",
    cost: 150,
    image: characterImg.pea.sweet,
    cooldown: 5,
    delay: 1,
    health: 100,
    intrinsic: [0, 1, 4],
    buffPower: 10,
    affectZombies: 20,
    projectile: {
      color: "deeppink",
      slash: false,
      damage: 30,
    }
  },
  
  {
    // id: "pea_7",
    id: "pea_6",
    name: "Shadow Peashooter",
    cost: 200,
    image: characterImg.pea.shadow,
    cooldown: 5,
    delay: 1,
    health: 250,
    intrinsic: [5],
    buffPower: 20,
    affectZombies: 0,
    projectile: {
      color: "rebeccapurple",
      slash: true,
      damage: 50,
    }
  },
  
  {
    // id: "pea_8",
    id: "pea_7",
    name: "Bomb Peashooter",
    cost: 350,
    image: characterImg.pea.bomb,
    cooldown: 15,
    delay: 1,
    health: 300,
    intrinsic: [6],
    buffPower: 0,
    affectZombies: 0,
    projectile: {
      color: "orange",
      slash: false,
      damage: 100,
    }
  },
  
  {
    // id: "pea_9",
    id: "pea_8",
    name: "Sun Peashooter",
    cost: 150,
    image: characterImg.pea.sun,
    cooldown: 5,
    delay: 1,
    health: 50,
    intrinsic: [3],
    buffPower: 0, // Product Sun
    affectZombies: 0,
    projectile: {
      color: "yellow",
      slash: false,
      damage: 50,
    }
  },
  
  {
    // id: "pea_10",
    id: "pea_9",
    name: "Doom Peashooter",
    cost: 450,
    image: characterImg.pea.doom,
    cooldown: 15,
    delay: 1,
    health: 100,
    intrinsic: [6],
    buffPower: 0,
    affectZombies: 0,
    projectile: {
      color: "black",
      slash: false,
      damage: 1000,
    }
  },
  
  {
    // id: "pea_11",
    id: "pea_10",
    name: "Iron Peashooter",
    cost: 500,
    image: characterImg.pea.iron,
    cooldown: 15,
    delay: 1,
    health: 500,
    intrinsic: [1, 2, 5],
    buffPower: 50,
    affectZombies: 50,
    projectile: {
      color: ["white", "red"],
      slash: false,
      damage: 300,
    }
  },
  
  {
    // id: "pea_12",
    id: "pea_11",
    name: "Goo Peashooter",
    cost: 200,
    image: characterImg.pea.goo,
    cooldown: 5,
    delay: 1,
    health: 200,
    intrinsic: [1],
    buffPower: 0,
    affectZombies: 30,
    projectile: {
      color: "purple",
      slash: false,
      damage: 30,
    }
  },
  
  {
    // id: "pea_13",
    id: "pea_12",
    name: "Gatling Peashooter",
    cost: 400,
    image: characterImg.pea.gatling,
    cooldown: 5,
    delay: 1,
    health: 200,
    intrinsic: [4, 5],
    buffPower: 50,
    affectZombies: 0,
    projectile: {
      color: "lightgreen",
      slash: false,
      damage: 10,
    }
  },
  
  {
    // id: "pea_14", // Lost sun
    id: "pea_13",
    name: "God Pinecorn Peashooter",
    cost: 750,
    image: characterImg.pea.god,
    cooldown: 5,
    delay: 1,
    health: 1000,
    intrinsic: [0, 1, 4, 5],
    buffPower: 100,
    affectZombies: 100,
    projectile: {
      color: ['gold', 'lime'],
      slash: true,
      damage: 500,
    }
  },
  
  {
    // id: "pea_15",
    id: "pea_14",
    name: "Gojo Peashooter",
    cost: 1000,
    image: characterImg.pea.gojo,
    cooldown: 5,
    delay: 1,
    health: 5000,
    intrinsic: [0, 2, 3, 5, 6],
    buffPower: 100,
    affectZombies: 100,
    projectile: {
      color: ['cyan' , 'violet'],
      slash: true,
      damage: 2000,
    }
  },

  {
    // id: "pea_16",
    id: "pea_15",
    name: "Science Peashooter",
    cost: 650,
    image: characterImg.pea.dr,
    cooldown: 5,
    delay: 1,
    health: 5000,
    intrinsic: [0, 1, 2, 3, 4],
    buffPower: 200,
    affectZombies: 200,
    projectile: {
      color: undefined,
      slash: false,
      damage: 50,
    }
  },
  
]