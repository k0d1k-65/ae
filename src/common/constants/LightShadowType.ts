export const LightShadowType = {
  Light: "天",
  Shadow: "冥",
} as const;

export type LightShadowType = typeof LightShadowType[keyof typeof LightShadowType];

// export enum LightShadowType {
//   Light = "天",
//   Shadow = "冥",
// };
