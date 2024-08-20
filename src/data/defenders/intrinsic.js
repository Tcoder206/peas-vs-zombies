const cvs = document.getElementById("canvas");

function slowEffect(ener) {
  const currentDelay = (3 * ener.speed) / 2
  ener.speed = currentDelay // Frame là 100 thì tăng lên 150
}

function poisonEffect(def, ener, cooldown = 1000) {
  if(cooldown) ener.health -= def.affectZombies;
}

function repelEffect(def, ener, whenZombieNotGoOutToRightCanvas) {
  if(whenZombieNotGoOutToRightCanvas) {
    const repelRight = ener.movement * 2;
    ener.movement -= repelRight;
  }
}

function productEffect(def, resources) {
  if(def.cost >= 1000) {
    resources += 500;
  } else if(def.cost >= 500 && def.cost < 1000) {
    resources += 100;
  } else if(def.cost >= 100 && def.cost < 500) {
    resources += 50;
  } else {
    resources += 25;
  }
}

function increaseTeamPower(def, team) {
  team.map(eachDef => {
    eachDef.health += def.buffPower;
    eachDef.projectile.damage += def.buffPower;
  })
}

function increaseSelfPower(def) {
  def.health += def.buffPower;
  def.projectile.damage += def.buffPower;
}

function wideAreaAttack() {
}

export function intrinsic(defenders, enermies, type) {
  const effect = [
    slowEffect(enermies),
    poisonEffect(defenders, enermies),
    repelEffect(defenders, enermies, ),
    productEffect(defenders, enermies, ),
    increaseTeamPower(defenders, ),
    increaseSelfPower(defenders)
  ]
  return effect[type];
}