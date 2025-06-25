import { useForm } from "react-hook-form";
import Container from "../../ui/Container";
import InputField from "../../ui/InputField";
import ButtonFill from "../../ui/ButtonFill";
import ButtonOutline from "../../ui/ButtonOutline";
import useFetchUser from "../authentication/useFetchUser";
import PageSpinner from "../../ui/PageSpinner";
import NotFound from "../../ui/NotFound";
import type { UserType } from "./accountTypes";
import useUpdateAccount from "./useUpdateAccount";
import { useDispatch } from "react-redux";
import { setIsUpdateModalOpen } from "./accountSlice";

function UpdateAccountForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<UserType>();

  const { updateAccountMutation, isPending: isUpdatePending } =
    useUpdateAccount();

  const { userData, isLoading, isError } = useFetchUser();

  if (isLoading) {
    return <PageSpinner />;
  }

  if (isError) {
    return <NotFound message="Something went wrong" />;
  }

  const onSubmitUpdateAccount = (data: UserType) => {
    updateAccountMutation(data, {
      onSuccess: () => {
        dispatch(setIsUpdateModalOpen(false));
      },
    });
  };

  const hasUpdated =
    watch("first_name") !== userData?.first_name ||
    watch("last_name") !== userData?.last_name ||
    watch("phone_number") !== userData?.phone_number ||
    watch("address") !== userData?.address ||
    watch("role") !== userData?.role ||
    (watch("avatar") as unknown as FileList)?.length > 0;

  return (
    <form onSubmit={handleSubmit(onSubmitUpdateAccount)} className="space-y-7">
      <Container.Grid>
        <InputField
          defaultValue={userData?.first_name || ""}
          isDisabled={isUpdatePending}
          label="First Name"
          type="text"
          id="first_name"
          register={register("first_name", {
            required: "This field is required",
          })}
          error={errors?.first_name?.message}
        />
        <InputField
          defaultValue={userData?.last_name || ""}
          isDisabled={isUpdatePending}
          label="Last Name"
          type="text"
          id="last_name"
          register={register("last_name", {
            required: "This field is required",
          })}
          error={errors?.last_name?.message}
        />
        <InputField
          defaultValue={userData?.phone_number || ""}
          isDisabled={isUpdatePending}
          label="Phone Number"
          type="text"
          id="phone_number"
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
          defaultValue={userData?.address || ""}
          isDisabled={isUpdatePending}
          label="Address"
          type="text"
          id="address"
          placeholder="XYZ Apartment 003"
          register={register("address")}
          error={errors?.address?.message}
        />
        <InputField
          defaultValue={userData?.role || ""}
          isDisabled={isUpdatePending}
          label="Role"
          type="text"
          id="role"
          register={register("role", {
            required: "This field is required",
          })}
          error={errors?.role?.message}
        />
        <InputField
          isDisabled={isUpdatePending}
          label="Profile Image"
          type="file"
          id="avatar"
          placeholder="Upload image"
          accept="image/*"
          register={register("avatar")}
          error={errors?.avatar?.message}
        />
      </Container.Grid>
      <Container.Button style="gap-4">
        <ButtonFill
          color="blue"
          style="text-sm"
          type="submit"
          isPending={isUpdatePending}
          isDisabled={isUpdatePending || !hasUpdated}
        >
          Update
        </ButtonFill>
        <ButtonOutline
          style="text-sm"
          type="button"
          disabled={isUpdatePending}
          onClickFn={() => {
            reset();
            dispatch(setIsUpdateModalOpen(false));
          }}
        >
          Cancel
        </ButtonOutline>
      </Container.Button>
    </form>
  );
}

export default UpdateAccountForm;
