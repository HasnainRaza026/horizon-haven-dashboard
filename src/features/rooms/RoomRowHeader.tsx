import Row from "../../ui/Row";

function RoomRowHeader() {
  return (
    <Row padding={"px-7.5 py-5"}>
      <Row.Cell style="max-w-[150px]">
        <Row.Title>Image</Row.Title>
      </Row.Cell>
      <Row.Cell>
        <Row.Title>Room</Row.Title>
      </Row.Cell>
      <Row.Cell>
        <Row.Title>Capacity</Row.Title>
      </Row.Cell>
      <Row.Cell style="text-center">
        <Row.Title>Price</Row.Title>
      </Row.Cell>
      <Row.Cell style="max-w-[150px]">
        <Row.Title>Discount</Row.Title>
      </Row.Cell>
      <Row.EmptyCell />
    </Row>
  );
}

export default RoomRowHeader;
