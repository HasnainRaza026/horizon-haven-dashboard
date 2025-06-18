import ButtonFill from "../../ui/ButtonFill";
import ButtonOutline from "../../ui/ButtonOutline";
import GuestInformation from "../../ui/GuestInformation";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ConfirmModal from "../../ui/ConfirmModal";

function GuestDetail() {
  const navigate = useNavigate();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  return (
    <>
      <div className="flex w-fit flex-col items-center gap-8">
        <GuestInformation />
        <div className="flex w-full justify-end px-2">
          <div className="space-x-4">
            <ButtonFill
              color="red"
              onClickFn={() => setIsDeleteModalOpen(true)}
            >
              Delete
            </ButtonFill>
            <ButtonOutline onClickFn={() => navigate("/guests")}>
              Back
            </ButtonOutline>
          </div>
        </div>
      </div>
      {isDeleteModalOpen && (
        <ConfirmModal
          setIsConfirmModalOpen={setIsDeleteModalOpen}
          title="Delete Guest"
          text="Are you sure you want to delete this guest permanently? "
          actionBtnText="Delete"
          actionBtnFn={() => {}}
        />
      )}
    </>
  );
}

export default GuestDetail;
