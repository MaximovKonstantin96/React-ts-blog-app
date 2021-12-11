import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  HOME_PAGE = "/",
  LOGIN_PAGE = "/login",
  REGISTER_PAGE = "/register",
  PROFILE_PAGE = "/profile",
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN_PAGE, exact: true, component: LoginPage },
  { path: RouteNames.REGISTER_PAGE, exact: true, component: RegisterPage },
  { path: RouteNames.HOME_PAGE, exact: true, component: HomePage },
];

export const privateRoutes: IRoute[] = [
  { path: RouteNames.PROFILE_PAGE, exact: true, component: ProfilePage },
  { path: RouteNames.HOME_PAGE, exact: true, component: HomePage },
];
