import ButtonFill from "../../ui/ButtonFill";
import ButtonOutline from "../../ui/ButtonOutline";
import Modal from "../../ui/Modal";
import RoomForm from "./RoomForm";

function RoomModal({
  title,
  btnTitle,
  setIsModalOpen,
}: {
  title: string;
  btnTitle: string;
  setIsModalOpen: (isOpen: boolean) => void;
}) {
  return (
    <Modal style="w-[500px]">
      <Modal.Content title={title} content={<RoomForm />} />
      <Modal.Button>
        <ButtonFill color="blue" style="text-sm" onClickFn={() => {}}>
          {btnTitle}
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

export default RoomModal;
