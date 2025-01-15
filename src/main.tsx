import {
  NotFoundRoute,
  RouterProvider,
  createRouter,
} from "@tanstack/react-router";

import { Route as rootRoute } from "./presentation/routes/__root";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { routeTree } from "./routeTree.gen";
import "./global.css";

const notFound = () => <div>Not Found component</div>;

const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: notFound,
});

const router = createRouter({
  routeTree,
  notFoundRoute,
  basepath: import.meta.env.BASE_URL,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
