import configureOpenAPI from "server/src/lib/configure-open-api";
import createApp from "server/src/lib/create-app";
import index from "server/src/routes/index.route";
import tasks from "server/src/routes/tasks/tasks.index";

const app = createApp();

configureOpenAPI(app);

const routes = [
  index,
  tasks,
] as const;

routes.forEach((route) => {
  app.route("/", route);
});

export type AppType = typeof routes[number];

export default app;
