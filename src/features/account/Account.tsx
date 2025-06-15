import ChangePassword from "./ChangePassword";
import PersonalInformation from "./PersonalInformation";

function Account() {
  return (
    <div className="flex w-fit flex-col items-start gap-4">
      <PersonalInformation />
      <ChangePassword />
    </div>
  );
}

export default Account;
