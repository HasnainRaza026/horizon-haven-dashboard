import { Outlet } from "react-router";

function AppLayout() {
  return (
    <>
      <div className="bg-base-highlight">
        <h1>Hello World</h1>
      </div>
      <Outlet />
    </>
  );
}

export default AppLayout;
