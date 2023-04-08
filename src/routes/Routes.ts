import { Ocr } from "../components/Ocr"
import Home from "../components/Home";
import { Test } from "../components/Test";
import { TsvMarkdownConverter } from "../components/util/tsvMarkdownConverter";

export const AppRoutes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/unit/master",
    component: Test,
    exact: true
  },
  {
    path: "/unit/skill",
    component: Test,
    exact: true
  },
  {
    path: "/sim/damage",
    component: Test,
    exact: true
  },
  {
    path: "/sim/battle",
    component: Test,
    exact: true
  },
  {
    path: "/util/ocr",
    component: Ocr,
    exact: true
  },
  {
    path: "/util/tsv-markdown-converter",
    component: TsvMarkdownConverter,
    exact: true
  },
];

export const NavLinks = {
  home: {
    path: "/",
    name: "Home",
  },
  master: {
    path: "/unit/master",
    name: "【マスタ】",
  },
  units: {
    path: "/unit/skill",
    name: "Char",
  },
  damageCalc: {
    path: "/sim/damage",
    name: "ダメージ計算",
  },
  battleCalc: {
    path: "/sim/battle",
    name: "バトルシミュレータ",
  },
  imageOcr: {
    path: "/util/ocr",
    name: "OCR",
  },
  tsvMarkdownConverter: {
    path: "/util/tsv-markdown-converter",
    name: "TSV-MD変換",
  },
};
