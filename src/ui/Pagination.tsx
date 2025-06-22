import { PiGreaterThan, PiLessThan } from "react-icons/pi";
import { useSearchParams } from "react-router-dom";

const PAGE_SIZE = 10;

function Pagination({ totalRows }: { totalRows: number }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = searchParams.get("page") || "1";
  const rowsPerPage = Math.ceil(totalRows / PAGE_SIZE);

  const handlePreviousClick = () => {
    if (Number(currentPage) > 1) {
      searchParams.set("page", String(Number(currentPage) - 1));
      setSearchParams(searchParams, { replace: true });
    }
  };

  const handleNextClick = () => {
    if (Number(currentPage) < rowsPerPage) {
      searchParams.set("page", String(Number(currentPage) + 1));
      setSearchParams(searchParams, { replace: true });
    }
  };

  const handlePageClick = (page: string) => {
    searchParams.set("page", page);
    setSearchParams(searchParams, { replace: true });
  };

  if (rowsPerPage === 1) {
    return null;
  }

  return (
    <div className="flex w-full items-center justify-between px-7.5 py-3">
      <Button
        disabled={Number(currentPage) === 1}
        icon={<PiLessThan className="dark:text-tx-lt-primary text-sm" />}
        text="Previous"
        onClick={handlePreviousClick}
      />
      <div className="flex gap-2.5">
        {rowsPerPage < 7 ? (
          <>
            {Array.from({ length: rowsPerPage }, (_, index) => (
              <Page
                number={String(index + 1)}
                isActive={currentPage === String(index + 1)}
                onClickFn={() => handlePageClick(String(index + 1))}
              />
            ))}
          </>
        ) : (
          <>
            <Page
              number={"1"}
              isActive={currentPage === "1"}
              onClickFn={() => handlePageClick("1")}
            />
            <Page
              number={"2"}
              isActive={currentPage === "2"}
              onClickFn={() => handlePageClick("2")}
            />
            <Page
              number={"3"}
              isActive={currentPage === "3"}
              onClickFn={() => handlePageClick("3")}
            />
            <Page
              number={"..."}
              isActive={
                Number(currentPage) > 3 && Number(currentPage) < rowsPerPage - 2
              }
            />
            <Page
              number={String(rowsPerPage - 2)}
              isActive={currentPage === String(rowsPerPage - 2)}
              onClickFn={() => handlePageClick(String(rowsPerPage - 2))}
            />
            <Page
              number={String(rowsPerPage - 1)}
              isActive={currentPage === String(rowsPerPage - 1)}
              onClickFn={() => handlePageClick(String(rowsPerPage - 1))}
            />
            <Page
              number={String(rowsPerPage)}
              isActive={currentPage === String(rowsPerPage)}
              onClickFn={() => handlePageClick(String(rowsPerPage))}
            />
          </>
        )}
      </div>
      <Button
        disabled={Number(currentPage) === rowsPerPage}
        icon={<PiGreaterThan className="dark:text-tx-lt-primary text-sm" />}
        text="Next"
        onClick={handleNextClick}
      />
    </div>
  );
}

function Button({
  icon,
  text,
  onClick,
  disabled,
}: {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <div
      className={`group hover:bg-main flex items-center gap-1 rounded-sm px-3 py-1.5 duration-200 ${
        disabled ? "cursor-not-allowed opacity-60 dark:opacity-40" : ""
      }`}
      onClick={disabled ? undefined : onClick}
    >
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
  onClickFn,
}: {
  number: string;
  isActive: boolean;
  onClickFn?: () => void;
}) {
  return (
    <span
      className={`!text-tx-dr-primary dark:!text-tx-lt-primary flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium ${
        isActive ? "bg-main !text-tx-lt-primary" : ""
      }`}
      onClick={onClickFn}
    >
      {number}
    </span>
  );
}

export default Pagination;
