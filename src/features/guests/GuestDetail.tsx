import ButtonFill from "../../ui/ButtonFill";
import ButtonOutline from "../../ui/ButtonOutline";
import GuestInformation from "../../ui/GuestInformation";

function GuestDetail() {
  return (
    <div className="flex w-fit flex-col items-center gap-8">
      <GuestInformation />
      <div className="flex w-full justify-end px-2">
        <div className="space-x-4">
          <ButtonFill color="red">Delete</ButtonFill>
          <ButtonOutline>Back</ButtonOutline>
        </div>
      </div>
    </div>
  );
}

export default GuestDetail;
