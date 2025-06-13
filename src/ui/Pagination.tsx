import { useState } from "react";
import { PiGreaterThan, PiLessThan } from "react-icons/pi";

function Pagination() {
  const [currentPage, setCurrentPage] = useState("1");

  const handlePageClick = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex w-full items-center justify-between px-7.5 py-3">
      <Button
        icon={<PiLessThan className="dark:text-tx-lt-primary text-sm" />}
        text="Previous"
      />
      <div className="flex gap-2.5">
        <Page
          number={"1"}
          isActive={currentPage === "1"}
          onClick={handlePageClick}
        />
        <Page
          number={"2"}
          isActive={currentPage === "2"}
          onClick={handlePageClick}
        />
        <Page
          number={"3"}
          isActive={currentPage === "3"}
          onClick={handlePageClick}
        />
        <Page number={"..."} isActive={false} onClick={() => {}} />
        <Page
          number={"13"}
          isActive={currentPage === "13"}
          onClick={handlePageClick}
        />
        <Page
          number={"14"}
          isActive={currentPage === "14"}
          onClick={handlePageClick}
        />
        <Page
          number={"15"}
          isActive={currentPage === "15"}
          onClick={handlePageClick}
        />
      </div>
      <Button
        icon={<PiGreaterThan className="dark:text-tx-lt-primary text-sm" />}
        text="Next"
      />
    </div>
  );
}

function Button({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="group hover:bg-main flex items-center gap-1 rounded-sm px-3 py-1.5 duration-200">
      {text === "Previous" && (
        <span className="group-hover:text-tx-lt-primary">{icon}</span>
      )}
      <span className="text-tx-dr-primary dark:text-tx-lt-primary group-hover:text-tx-lt-primary text-sm font-semibold duration-200">
        {text}
      </span>
      {text === "Next" && (
        <span className="group-hover:text-tx-lt-primary">{icon}</span>
      )}
    </div>
  );
}

function Page({
  number,
  isActive,
  onClick,
}: {
  number: string;
  isActive: boolean;
  onClick: (page: string) => void;
}) {
  return (
    <span
      onClick={() => onClick(number)}
      className={`!text-tx-dr-primary dark:!text-tx-lt-primary flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium ${
        isActive ? "bg-main !text-tx-lt-primary" : ""
      }`}
    >
      {number}
    </span>
  );
}

export default Pagination;
