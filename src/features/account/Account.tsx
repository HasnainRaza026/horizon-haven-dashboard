import ChangePassword from "./ChangePassword";
import PersonalInformation from "./PersonalInformation";
import Modal from "../../ui/Modal";
import UpdateAccountForm from "./UpdateAccountForm";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

function Account() {
  const { isUpdateModalOpen } = useSelector(
    (state: RootState) => state.account,
  );

  return (
    <>
      <div className="flex w-fit flex-col items-start gap-4">
        <PersonalInformation />
        <ChangePassword />
      </div>
      {isUpdateModalOpen && (
        <Modal style="w-[500px]">
          <Modal.Content
            title="Update Information"
            content={<UpdateAccountForm />}
          />
        </Modal>
      )}
    </>
  );
}

export default Account;
