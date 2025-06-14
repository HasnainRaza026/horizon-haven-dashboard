import Row from "../../ui/Row";

function BookingRowHeader() {
  return (
    <Row padding={"px-7.5 py-5"}>
      <Row.Cell style="max-w-[100px]">
        <Row.Title>Room</Row.Title>
      </Row.Cell>
      <Row.Cell>
        <Row.Title>Guest</Row.Title>
      </Row.Cell>
      <Row.Cell>
        <Row.Title>Stay</Row.Title>
      </Row.Cell>
      <Row.Cell style="max-w-[100px] text-center">
        <Row.Title>Status</Row.Title>
      </Row.Cell>
      <Row.Cell style="text-center">
        <Row.Title>Amount</Row.Title>
      </Row.Cell>
      <Row.EmptyCell />
    </Row>
  );
}

export default BookingRowHeader;
