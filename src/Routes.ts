import Home from "./home";
import { Test } from "./test";
import UnitStatComponent from "./unit-stat";
import Units from "./units";

export const AppRoutes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  // {
  //   path: "/dev/unit",
  //   component: Units,
  //   exact: true,
  // },
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
  // devUnit: {
  //   path: "/dev/unit",
  //   name: "devUnit",
  // },
  test: {
    path: "/test",
    name: "TEST",
  },
  unitEdit: {
    path: "/unit/edit",
    name: "【ユニット編集】",
  },
};
