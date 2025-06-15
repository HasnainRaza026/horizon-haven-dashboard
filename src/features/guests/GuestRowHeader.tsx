import Row from "../../ui/Row";

function GuestRowHeader() {
  return (
    <Row padding={"px-7.5 py-5"}>
      <Row.Cell>
        <Row.Title>Name</Row.Title>
      </Row.Cell>
      <Row.Cell>
        <Row.Title>Email</Row.Title>
      </Row.Cell>
      <Row.Cell style="text-center">
        <Row.Title>Booking History</Row.Title>
      </Row.Cell>
      <Row.Cell style="text-center">
        <Row.Title>Booking Status</Row.Title>
      </Row.Cell>
      <Row.EmptyCell />
    </Row>
  );
}

export default GuestRowHeader;
