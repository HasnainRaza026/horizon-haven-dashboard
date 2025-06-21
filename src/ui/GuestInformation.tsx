import Container from "./Container";
import type { GuestType } from "../features/guests/guestTypes";

function GuestInformation({ guest }: { guest: GuestType }) {
  return (
    <Container>
      <Container.Heading>Guest Information</Container.Heading>
      <Container.Grid>
        <Container.Detail
          title="Name"
          information={`${guest.first_name} ${guest.last_name}`}
        />
        <Container.Detail title="Email" information={guest.email} />
        <Container.Detail title="Nationality" information={guest.nationality} />
        <Container.Detail title="National Id" information={guest.national_id} />
      </Container.Grid>
    </Container>
  );
}

export default GuestInformation;
