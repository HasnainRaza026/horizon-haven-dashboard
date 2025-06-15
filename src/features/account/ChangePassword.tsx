import ButtonFill from "../../ui/ButtonFill";
import Container from "../../ui/Container";
import InputField from "../../ui/InputField";
import { useForm } from "react-hook-form";

interface ChangePasswordForm {
  newPassword: string;
  confirmPassword: string;
}

function ChangePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<ChangePasswordForm>();

  const onSubmit = (data: ChangePasswordForm) => {
    console.log(data);
  };

  return (
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
          <ButtonFill color="blue" style="w-full text-sm">
            Update Password
          </ButtonFill>
        </Container.Button>
      </form>
    </Container>
  );
}

export default ChangePassword;
