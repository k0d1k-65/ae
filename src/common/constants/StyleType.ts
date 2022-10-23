export const StyleType = {
  NS: "NS",
  AS: "AS",
  ES: "ES",
} as const;

export type StyleType = typeof StyleType[keyof typeof StyleType];