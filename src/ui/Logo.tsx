import { BsHouses } from "react-icons/bs";

function Logo({ isLogin = false }: { isLogin?: boolean }) {
  return (
    <div className={`flex gap-3.5 ${isLogin ? "flex-col items-center" : ""}`}>
      <BsHouses className={`logo-icon ${isLogin ? "!text-5xl" : ""}`} />
      <h1 className="font-logo dark:text-tx-lt-primary text-2xl text-nowrap">
        <span className="font-bold">Horizon</span> <span>Haven</span>
      </h1>
    </div>
  );
}

export default Logo;
