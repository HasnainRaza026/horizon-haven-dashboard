import { Outlet } from "react-router";

function AppLayout() {
  return (
    <>
      <div>Hello World</div>
      <Outlet />
    </>
  );
}

export default AppLayout;
