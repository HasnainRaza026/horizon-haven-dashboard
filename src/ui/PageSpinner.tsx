import Spinner from "./Spinner";

function PageSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs">
      <Spinner page={true} />
    </div>
  );
}

export default PageSpinner;
