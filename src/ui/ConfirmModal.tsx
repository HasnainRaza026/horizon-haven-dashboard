import ButtonFill from "./ButtonFill";
import ButtonOutline from "./ButtonOutline";
import Modal from "./Modal";

function ConfirmModal({
  setIsConfirmModalOpen,
  title,
  text,
  actionBtnColor,
  actionBtnText,
  actionBtnFn,
}: {
  setIsConfirmModalOpen: (isOpen: boolean) => void;
  title: string;
  text: string;
  actionBtnColor?: "red" | "blue";
  actionBtnText: string;
  actionBtnFn: () => void;
}) {
  return (
    <Modal>
      <Modal.Content title={title} text={text} />
      <Modal.Button>
        <ButtonFill
          color={actionBtnColor || "red"}
          style="text-sm"
          onClickFn={() => {
            actionBtnFn();
          }}
        >
          {actionBtnText}
        </ButtonFill>
        <ButtonOutline
          style="text-sm"
          onClickFn={() => {
            setIsConfirmModalOpen(false);
          }}
        >
          Cancel
        </ButtonOutline>
      </Modal.Button>
    </Modal>
  );
}

export default ConfirmModal;
