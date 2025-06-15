import Container from "../../ui/Container";
import AddUserForm from "./AddUserForm";

function User() {
  return (
    <Container style="w-[650px]">
      <Container.Heading>Add User</Container.Heading>
      <AddUserForm />
    </Container>
  );
}

export default User;
