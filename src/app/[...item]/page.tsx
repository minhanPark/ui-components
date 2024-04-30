import { ROUTE_PATH, isParentRoute, routes } from "@/routes";

const Page = ({ params: { item } }: { params: { item: string[] } }) => {
  const path = ["", ...item].join("/") as ROUTE_PATH;
  const route = routes[path];
  if (!route || isParentRoute(route)) return null;
  const { children: Component } = route;
  return Component ? <Component /> : null;
};

export default Page;
