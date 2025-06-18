import ButtonFill from "../../ui/ButtonFill";
import Container from "../../ui/Container";

function PersonalInformation() {
  return (
    <Container>
      <Container.Heading>Personal Information</Container.Heading>
      <Container.Grid>
        <Container.Detail title="First Name" information="Hassnain" />
        <Container.Detail title="Last Name" information="Raza" />
        <Container.Detail title="Phone" information="1234-5678-9" />
        <Container.Detail
          title="Email"
          information="hasnainraza0026@gmail.com"
        />
        <Container.Detail title="Address" information="XYZ Apartment 003" />
        <Container.Detail title="Role" information="Admin Manager" />
      </Container.Grid>
      <Container.Button>
        <ButtonFill color="blue" style="text-sm" onClickFn={() => {}}>
          Update Information
        </ButtonFill>
      </Container.Button>
    </Container>
  );
}

export default PersonalInformation;
