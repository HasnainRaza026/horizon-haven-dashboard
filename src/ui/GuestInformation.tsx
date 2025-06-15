import Container from "./Container";

function GuestInformation() {
  return (
    <Container>
      <Container.Heading>Guest Information</Container.Heading>
      <Container.Details>
        <Container.Detail title="Name" information="Hassnain Raza" />
        <Container.Detail
          title="Email"
          information="hasnainraza0026@gmail.com"
        />
        <Container.Detail title="Nationality" information="Pakistan 🇵🇰" />
        <Container.Detail title="National Id" information="1234-5678-9" />
      </Container.Details>
    </Container>
  );
}

export default GuestInformation;
