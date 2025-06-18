import ButtonFill from "../../ui/ButtonFill";
import ButtonOutline from "../../ui/ButtonOutline";
import Container from "../../ui/Container";
import GuestInformation from "../../ui/GuestInformation";
import { useNavigate } from "react-router-dom";
import BookingInformation from "./BookingInformation";
import { useState } from "react";
import ConfirmModal from "../../ui/ConfirmModal";

function BookingDetail() {
  const navigate = useNavigate();
  const [isCheckinModalOpen, setIsCheckinModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  return (
    <>
      <div className="flex w-fit flex-col items-center gap-4">
        <GuestInformation />
        <Container>
          <Container.Heading>Booking Information</Container.Heading>
          <BookingInformation />
        </Container>
        <div className="flex w-full justify-between gap-4 px-2 py-4">
          <div className="space-x-4">
            <ButtonFill
              color="blue"
              onClickFn={() => setIsCheckinModalOpen(true)}
            >
              Check in
            </ButtonFill>
            <ButtonFill
              color="red"
              onClickFn={() => setIsDeleteModalOpen(true)}
            >
              Delete
            </ButtonFill>
          </div>
          <ButtonOutline onClickFn={() => navigate("/bookings")}>
            Back
          </ButtonOutline>
        </div>
      </div>
      {isCheckinModalOpen && (
        <ConfirmModal
          setIsConfirmModalOpen={setIsCheckinModalOpen}
          title="Check in"
          text="Confirm this booking of room 001"
          actionBtnText="Confirm"
          actionBtnColor="blue"
          actionBtnFn={() => {}}
        />
      )}
      {isDeleteModalOpen && (
        <ConfirmModal
          setIsConfirmModalOpen={setIsDeleteModalOpen}
          title="Delete Booking"
          text="Are you sure you want to delete this booking permanently? "
          actionBtnText="Delete"
          actionBtnFn={() => {}}
        />
      )}
    </>
  );
}

export default BookingDetail;
