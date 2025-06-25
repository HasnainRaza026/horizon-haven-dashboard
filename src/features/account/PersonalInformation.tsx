import ButtonFill from "../../ui/ButtonFill";
import Container from "../../ui/Container";
import PageSpinner from "../../ui/PageSpinner";
import useFetchUser from "../authentication/useFetchUser";
import NotFound from "../../ui/NotFound";
import { useDispatch } from "react-redux";
import { setIsUpdateModalOpen } from "./accountSlice";

function PersonalInformation() {
  const dispatch = useDispatch();
  const { user, userData, isLoading, isError } = useFetchUser();

  if (isLoading) {
    return <PageSpinner />;
  }

  if (isError) {
    return <NotFound message="Something went wrong" />;
  }

  return (
    <Container>
      <Container.Heading>Personal Information</Container.Heading>
      <Container.Grid>
        <Container.Detail
          title="First Name"
          information={userData?.first_name}
        />
        <Container.Detail title="Last Name" information={userData?.last_name} />
        <Container.Detail title="Phone" information={userData?.phone_number} />
        <Container.Detail title="Email" information={user?.user?.email} />
        <Container.Detail
          title="Address"
          information={userData?.address || "N/A"}
        />
        <Container.Detail title="Role" information={userData?.role} />
      </Container.Grid>
      <Container.Button>
        <ButtonFill
          color="blue"
          style="text-sm"
          onClickFn={() => dispatch(setIsUpdateModalOpen(true))}
        >
          Update Information
        </ButtonFill>
      </Container.Button>
    </Container>
  );
}

export default PersonalInformation;
