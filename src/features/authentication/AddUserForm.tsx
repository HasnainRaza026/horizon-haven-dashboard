import ButtonFill from "../../ui/ButtonFill";
import Container from "../../ui/Container";
import { useForm } from "react-hook-form";
import InputField from "../../ui/InputField";
import type { SignupType } from "./authTypes";
import useSignup from "./useSignup";

function AddUserForm() {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<SignupType>();

  const { createUserMutation, isPending } = useSignup();

  const onSubmit = (data: SignupType) => {
    createUserMutation(data, {
      onSuccess: () => {
        reset();
      },
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
      <Container.Grid>
        <InputField
          label="First Name"
          type="text"
          id="first_name"
          placeholder="John"
          register={register("first_name", {
            required: "This field is required",
          })}
          error={errors?.first_name?.message}
        />
        <InputField
          label="Last Name"
          type="text"
          id="last_name"
          placeholder="Doe"
          register={register("last_name", {
            required: "This field is required",
          })}
          error={errors?.last_name?.message}
        />
        <InputField
          label="Email"
          type="email"
          id="email"
          placeholder="john.doe@example.com"
          register={register("email", {
            required: "This field is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
          error={errors?.email?.message}
        />
        <InputField
          label="Phone Number"
          type="text"
          id="phone_number"
          placeholder="+1234567890"
          register={register("phone_number", {
            required: "This field is required",
            pattern: {
              value: /^[0]{1}[0-9]{10}$/,
              message: "Invalid phone number",
            },
          })}
          error={errors?.phone_number?.message}
        />
        <InputField
          label="Role"
          type="text"
          id="role"
          placeholder="Admin"
          register={register("role", {
            required: "This field is required",
          })}
          error={errors?.role?.message}
        />
        <InputField
          label="Address"
          isOptional={true}
          type="text"
          id="address"
          placeholder="123 Main St, Anytown, USA"
          register={register("address")}
        />
        <InputField
          label="Password"
          type="password"
          id="password"
          register={register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          })}
          error={errors?.password?.message}
        />
        <InputField
          label="Confirm Password"
          type="password"
          id="confirm_password"
          register={register("confirm_password", {
            required: "This field is required",
            validate: (value) => {
              const password = getValues("password");
              return value === password || "Passwords do not match";
            },
          })}
          error={errors?.confirm_password?.message}
        />
      </Container.Grid>
      <Container.Button>
        <ButtonFill
          color="blue"
          style="w-full text-sm"
          type="submit"
          isPending={isPending}
          isDisabled={isPending}
        >
          Add User
        </ButtonFill>
      </Container.Button>
    </form>
  );
}

export default AddUserForm;
