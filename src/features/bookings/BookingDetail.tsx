import Badge from "../../ui/Badge";
import ButtonFill from "../../ui/ButtonFill";
import ButtonOutline from "../../ui/ButtonOutline";
import Container from "../../ui/Container";
import GuestInformation from "../../ui/GuestInformation";

function BookingDetail() {
  return (
    <div className="flex w-fit flex-col items-center gap-4">
      <GuestInformation />
      <Container>
        <Container.Heading>Booking Information</Container.Heading>
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
      </Container>
      <div className="flex w-full justify-between gap-4 px-2 py-4">
        <div className="space-x-4">
          <ButtonFill color="blue">Check in</ButtonFill>
          <ButtonFill color="red">Delete</ButtonFill>
        </div>
        <ButtonOutline>Back</ButtonOutline>
      </div>
    </div>
  );
}

export default BookingDetail;
