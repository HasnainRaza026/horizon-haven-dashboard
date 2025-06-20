import Modal from "../../ui/Modal";
import RoomForm from "./RoomForm";

function RoomModal({ title }: { title: string }) {
  return (
    <Modal style="w-[500px]">
      <Modal.Content title={title} content={<RoomForm />} />
    </Modal>
  );
}

export default RoomModal;
