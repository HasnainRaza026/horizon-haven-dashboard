import ButtonFill from "../../ui/ButtonFill";
import Container from "../../ui/Container";
import InputField from "../../ui/InputField";
import Logo from "../../ui/Logo";
import { useForm } from "react-hook-form";
import type { LoginType } from "./authTypes";
import useLogin from "./useLogin";
import ThemeButton from "../../ui/ThemeButton";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>();

  const { loginMutation, isPending } = useLogin();

  const onSubmit = (data: LoginType) => {
    loginMutation(data);
  };

  return (
    <div className="bg-bg-lt-secondary dark:bg-bg-dr-secondary flex h-dvh w-full flex-col items-center justify-center gap-12">
      {/* Adding theme button to apply theme colors */}
      <div className="hidden">
        <ThemeButton />
      </div>
      <Logo isLogin={true} />

      <Container style="!w-[400px] shadow-md">
        <Container.Heading style="!text-center !font-medium">
          Login to your account
        </Container.Heading>
        <form className="space-y-7" onSubmit={handleSubmit(onSubmit)}>
          <Container.Flex>
            <InputField
              label="Email"
              type="email"
              id="email"
              defaultValue="fakeuser@example.com"
              error={errors?.email?.message}
              register={register("email", {
                required: "This field is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            <InputField
              label="Password"
              type="password"
              id="password"
              defaultValue="Fake@123"
              error={errors?.password?.message}
              register={register("password", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
            />
          </Container.Flex>
          <Container.Button>
            <ButtonFill
              color="blue"
              type="submit"
              style="w-full text-sm"
              isDisabled={isPending}
              isPending={isPending}
            >
              {isPending ? "Logging in" : "Login"}
            </ButtonFill>
          </Container.Button>
        </form>
      </Container>

      {/* <Rooms /> */}
    </div>
  );
}

export default Login;
