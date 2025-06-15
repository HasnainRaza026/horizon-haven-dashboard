import ButtonFill from "../../ui/ButtonFill";
import Container from "../../ui/Container";
import { useForm } from "react-hook-form";
import InputField from "../../ui/InputField";

interface AddUserForm {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  role: string;
  address?: string;
  password: string;
  confirmPassword: string;
}

function AddUserForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<AddUserForm>();

  const onSubmit = (data: AddUserForm) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
      <Container.Grid>
        <InputField
          label="First Name"
          type="text"
          id="firstName"
          placeholder="John"
          register={register("firstName", {
            required: "This field is required",
          })}
          error={errors?.firstName?.message}
        />
        <InputField
          label="Last Name"
          type="text"
          id="lastName"
          placeholder="Doe"
          register={register("lastName", {
            required: "This field is required",
          })}
          error={errors?.lastName?.message}
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
          id="phoneNumber"
          placeholder="+1234567890"
          register={register("phoneNumber", {
            required: "This field is required",
            pattern: {
              value: /^\+?[1-9]\d{1,14}$/,
              message: "Invalid phone number",
            },
          })}
          error={errors?.phoneNumber?.message}
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
          id="confirmPassword"
          register={register("confirmPassword", {
            required: "This field is required",
            validate: (value) => {
              const password = getValues("password");
              return value === password || "Passwords do not match";
            },
          })}
          error={errors?.confirmPassword?.message}
        />
      </Container.Grid>
      <Container.Button>
        <ButtonFill color="blue" style="w-full text-sm">
          Add User
        </ButtonFill>
      </Container.Button>
    </form>
  );
}

export default AddUserForm;
