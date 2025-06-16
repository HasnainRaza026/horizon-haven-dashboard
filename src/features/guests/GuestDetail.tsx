import ButtonFill from "../../ui/ButtonFill";
import ButtonOutline from "../../ui/ButtonOutline";
import GuestInformation from "../../ui/GuestInformation";
import { useNavigate } from "react-router-dom";

function GuestDetail() {
  const navigate = useNavigate();

  return (
    <div className="flex w-fit flex-col items-center gap-8">
      <GuestInformation />
      <div className="flex w-full justify-end px-2">
        <div className="space-x-4">
          <ButtonFill color="red">Delete</ButtonFill>
          <ButtonOutline onClickFn={() => navigate("/guests")}>
            Back
          </ButtonOutline>
        </div>
      </div>
    </div>
  );
}

export default GuestDetail;
