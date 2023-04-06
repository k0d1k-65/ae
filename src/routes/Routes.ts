import Ocr from "../components/ocr";
import Home from "../pages/Home";
import SamplePage1 from "../pages/SamplePage1";

export const AppRoutes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/unit/master",
    component: SamplePage1,
    exact: true
  },
  {
    path: "/unit/skill",
    component: SamplePage1,
    exact: true
  },
  {
    path: "/sim/damage",
    component: SamplePage1,
    exact: true
  },
  {
    path: "/sim/battle",
    component: SamplePage1,
    exact: true
  },
  {
    path: "/util/ocr",
    component: Ocr,
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
};
