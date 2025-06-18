import Badge from "../../ui/Badge";
import Container from "../../ui/Container";

function BookingInformation() {
  return (
    <Container.Grid>
      <Container.Detail title="Room" information="008" />
      <Container.Detail title="Stay" information="4 Nights" />
      <Container.Detail title="Check In" information="Nov 22 2025" />
      <Container.Detail title="Check Out" information="Nov 26 2025" />
      <Container.Detail title="Total Guests" information="5" />
      <Container.Detail
        title="Status"
        badge={<Badge color="yellow">Unconfirmed</Badge>}
      />
      <Container.Detail
        title="Breakfast"
        badge={<Badge color="red">No</Badge>}
      />
      <Container.Detail title="Amount" information="$42,00.00" />
    </Container.Grid>
  );
}

export default BookingInformation;
