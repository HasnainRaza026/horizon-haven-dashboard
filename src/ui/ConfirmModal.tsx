import ButtonFill from "./ButtonFill";
import ButtonOutline from "./ButtonOutline";
import Modal from "./Modal";

function ConfirmModal({
  cancelBtnFn,
  title,
  text,
  actionBtnColor,
  actionBtnText,
  actionBtnFn,
  isActionBtnPending,
}: {
  cancelBtnFn: () => void;
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
            cancelBtnFn();
          }}
        >
          Cancel
        </ButtonOutline>
      </Modal.Button>
    </Modal>
  );
}

export default ConfirmModal;
