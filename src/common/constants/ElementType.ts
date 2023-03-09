export enum ElementType {
  None,
  Fire,
  Water,
  Wind,
  Earth,
  Thunder,
  Yin,
  Crystal,
};

const elementTypeLabels = {
  [ElementType.None]: "無",
  [ElementType.Fire]: "火",
  [ElementType.Water]: "水",
  [ElementType.Wind]: "風",
  [ElementType.Earth]: "地",
  [ElementType.Thunder]: "雷",
  [ElementType.Yin]: "陰",
  [ElementType.Crystal]: "晶",
}

export const getElementLabel = (type:ElementType) => {
  return elementTypeLabels[type];
};

export const getElementTypes = () => {
  const elementTypes = [
    ElementType.None,
    ElementType.Fire,
    ElementType.Water,
    ElementType.Wind,
    ElementType.Earth,
    ElementType.Thunder,
    ElementType.Yin,
    ElementType.Crystal,
  ];

  return elementTypes.map(et => ({
    typ: et,
    lbl: elementTypeLabels[et],
  }));
};