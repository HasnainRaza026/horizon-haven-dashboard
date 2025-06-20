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
  isActionBtnPending,
}: {
  setIsConfirmModalOpen: (isOpen: boolean) => void;
  title: string;
  text: string;
  actionBtnColor?: "red" | "blue";
  actionBtnText: string;
  actionBtnFn: () => void;
  isActionBtnPending?: boolean;
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
          isPending={isActionBtnPending}
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
