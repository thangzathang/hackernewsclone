import Stories from "./pages/stories";
import Navigo from "navigo";

const router = new Navigo(null, true, "#");

export default class RouterHandler {
  constructor() {
    this.createRoutes();
  }

  createRoutes() {
    const routes = [
      {
        path: "/",
        page: Stories,
      },
    ];

    routes.forEach((route) => {
      router
        .on(route.path, () => {
          console.log(route.page());
        })
        .resolve();
    });
  }
}
