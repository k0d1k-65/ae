export enum WeaponType {
  Lod,
  Sward,
  Katana,
  Axe,
  Lance,
  Bow,
  Fist,
  Hammer,
};

const weaponTypeLabels = {
  [WeaponType.Lod]: "杖",
  [WeaponType.Sward]: "剣",
  [WeaponType.Katana]: "刀",
  [WeaponType.Axe]: "斧",
  [WeaponType.Lance]: "槍",
  [WeaponType.Bow]: "弓",
  [WeaponType.Fist]: "拳",
  [WeaponType.Hammer]: "槌",
}

export const getWeaponLabel = (type:WeaponType) => {
  return weaponTypeLabels[type];
};

export const getWeaponTypes = () => {
  const weaponTypes = [
    WeaponType.Lod,
    WeaponType.Sward,
    WeaponType.Katana,
    WeaponType.Axe,
    WeaponType.Lance,
    WeaponType.Bow,
    WeaponType.Fist,
    WeaponType.Hammer,
  ];

  return weaponTypes.map(wt => ({
    typ: wt,
    lbl: weaponTypeLabels[wt],
  }));
};