"use client";

import {
  ChildRoute,
  ParentRoute,
  ROUTE_PATH,
  Route,
  gnbRootList,
  isParentRoute,
  routes,
} from "@/routes";
import classNames from "classnames";
import Link from "next/link";
import { useParams } from "next/navigation";

const ParentGnbItem = ({ name, link, children }: ParentRoute) => {
  return (
    <li className={classNames("parent", `items-${children.length}`, { open })}>
      <Link href={link}>{name}</Link>
      <ul className="subRoutes">
        {children.map((r) => {
          const route = routes[r];
          return <GnbItem {...route} key={route.key} />;
        })}
      </ul>
    </li>
  );
};
const ChildGnbItem = ({ name, link, children }: ChildRoute) => {
  return (
    <li>
      <Link href={link}>{name}</Link>
    </li>
  );
};

const GnbItem = (route: Route) => {
  if (isParentRoute(route)) return <ParentGnbItem {...route} />;
  return <ChildGnbItem {...route} />;
};

const Gnb = () => {
  const { item = [] } = useParams<{ item: string[] }>();
  const currentPath = ["", ...item].join("/") as ROUTE_PATH;
  return (
    <aside>
      <h1>
        UI 요소 모음<sub>RW</sub>
      </h1>
      <ul className="mainRoutes">
        {gnbRootList.map((r) => (
          <GnbItem {...r} key={r.key} />
        ))}
      </ul>
    </aside>
  );
};

export default Gnb;
