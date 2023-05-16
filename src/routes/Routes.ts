import Home from "../components/Home";
import { Test } from "../components/Test";
import UnitStatComponent from "../components/unit-stat";
import UnitBase from "../components/unit/UnitBase";

export const AppRoutes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/dev/unit",
    component: UnitBase,
    exact: true,
  },
  {
    path: "/test",
    component: Test,
    exact: true,
  },
  {
    path: "/unit/edit",
    component: UnitStatComponent,
    exact: true,
  },
];

export const NavLinks = {
  home: {
    path: "/",
    name: "Home",
  },
  devUnit: {
    path: "/dev/unit",
    name: "devUnit",
  },
  test: {
    path: "/test",
    name: "TEST",
  },
  unitEdit: {
    path: "/unit/edit",
    name: "【ユニット編集】",
  },
};
