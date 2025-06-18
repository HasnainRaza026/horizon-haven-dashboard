import ButtonFill from "../../ui/ButtonFill";
import ButtonOutline from "../../ui/ButtonOutline";
import Modal from "../../ui/Modal";
import BookingInformation from "./BookingInformation";

function CheckinModal({
  setIsModalOpen,
}: {
  setIsModalOpen: (isOpen: boolean) => void;
}) {
  return (
    <Modal style="w-[500px]">
      <Modal.Content title="Check in" content={<BookingInformation />} />
      <Modal.Button>
        <ButtonFill color="blue" style="text-sm" onClickFn={() => {}}>
          Check in
        </ButtonFill>
        <ButtonOutline
          style="text-sm"
          onClickFn={() => {
            setIsModalOpen(false);
          }}
        >
          Cancel
        </ButtonOutline>
      </Modal.Button>
    </Modal>
  );
}

export default CheckinModal;
