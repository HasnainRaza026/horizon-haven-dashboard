function Modal({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: string;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs">
      <div
        className={`bg-bg-lt-primary dark:bg-bg-dr-primary flex max-w-[500px] flex-col gap-6 rounded-lg p-7 ${style ? style : ""}`}
      >
        {children}
      </div>
    </div>
  );
}

function ModalContent({
  title,
  content,
  text,
}: {
  title: string;
  text?: string;
  content?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="dark:!text-tx-lt-primary text-xl font-bold">{title}</h2>
      {text ? (
        <p className="dark:!text-tx-lt-secondary !text-tx-dr-secondary font-medium">
          {text}
        </p>
      ) : (
        content
      )}
    </div>
  );
}

function ModalButton({ children }: { children: React.ReactNode }) {
  return <div className="flex justify-end gap-3.5">{children}</div>;
}

Modal.Content = ModalContent;
Modal.Button = ModalButton;

export default Modal;
