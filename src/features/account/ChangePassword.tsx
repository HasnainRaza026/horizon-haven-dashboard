import ButtonFill from "../../ui/ButtonFill";
import Container from "../../ui/Container";
import InputField from "../../ui/InputField";
import { useForm } from "react-hook-form";
import useUpdatePassword from "./useUpdatePassword";
import ConfirmModal from "../../ui/ConfirmModal";
import { setIsUpdatePasswordModalOpen } from "./accountSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";

interface ChangePasswordForm {
  newPassword: string;
  confirmPassword: string;
}

function ChangePassword() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
    reset,
  } = useForm<ChangePasswordForm>();

  const { updatePasswordMutation, isPending } = useUpdatePassword();
  const { isUpdatePasswordModalOpen } = useSelector(
    (state: RootState) => state.account,
  );

  const onSubmit = () => {
    dispatch(setIsUpdatePasswordModalOpen(true));
  };

  const hasChanged =
    watch("newPassword") === "" || watch("confirmPassword") === "";

  return (
    <>
      <Container style="!w-[400px]">
        <Container.Heading>Change Password</Container.Heading>
        <form className="space-y-7" onSubmit={handleSubmit(onSubmit)}>
          <Container.Flex>
            <InputField
              label="New Password"
              type="password"
              id="newPassword"
              error={errors?.newPassword?.message}
              register={register("newPassword", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
            />
            <InputField
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              error={errors?.confirmPassword?.message}
              register={register("confirmPassword", {
                required: "This field is required",
                validate: (value) => {
                  const newPassword = getValues("newPassword");
                  return value === newPassword || "Passwords do not match";
                },
              })}
            />
          </Container.Flex>
          <Container.Button>
            <ButtonFill
              color="blue"
              style="w-full text-sm"
              type="submit"
              isDisabled={hasChanged}
            >
              Update Password
            </ButtonFill>
          </Container.Button>
        </form>
      </Container>
      {isUpdatePasswordModalOpen && (
        <ConfirmModal
          title="Update Password"
          text="Are you sure you want to update your password?"
          actionBtnText="Update"
          actionBtnColor="blue"
          isActionBtnPending={isPending}
          actionBtnFn={() => {
            updatePasswordMutation(getValues("newPassword"), {
              onSuccess: () => {
                reset();
              },
            });
          }}
          cancelBtnFn={() => {
            dispatch(setIsUpdatePasswordModalOpen(false));
          }}
        />
      )}
    </>
  );
}

export default ChangePassword;
