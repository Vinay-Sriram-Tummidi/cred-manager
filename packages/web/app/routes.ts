import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // → /
  route("/dashboard", "routes/dashboard.tsx"), // → /dashboard
  route("*", "routes/404.tsx"), // → 404
] satisfies RouteConfig;