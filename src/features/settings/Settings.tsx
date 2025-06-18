import { useState } from "react";
import ButtonFill from "../../ui/ButtonFill";
import Container from "../../ui/Container";
import InputFieldQuantity from "../../ui/InputFieldQuantity";

function Settings() {
  const [maxNights, setMaxNights] = useState(10);
  const [minNights, setMinNights] = useState(2);
  const [maxGuests, setMaxGuests] = useState(8);
  const [breakfastPrice, setBreakfastPrice] = useState(25);

  const handleChange = (value: number, setValue: (value: number) => void) => {
    if (value >= 0) {
      setValue(value);
    }
  };

  const handleSubmit = () => {
    console.log(minNights, maxNights, maxGuests, breakfastPrice);
  };

  return (
    <Container>
      <Container.Heading>Update Settings</Container.Heading>
      <Container.Grid>
        <InputFieldQuantity
          label="Minimum Nights"
          value={minNights}
          setValue={(value) => handleChange(value, setMinNights)}
        />
        <InputFieldQuantity
          label="Maximum Nights"
          value={maxNights}
          setValue={(value) => handleChange(value, setMaxNights)}
        />
        <InputFieldQuantity
          label="Maximum Guests"
          value={maxGuests}
          setValue={(value) => handleChange(value, setMaxGuests)}
        />
        <InputFieldQuantity
          label="Breakfast Price"
          value={breakfastPrice}
          setValue={(value) => handleChange(value, setBreakfastPrice)}
        />
      </Container.Grid>
      <Container.Button>
        <ButtonFill
          color="blue"
          style="w-full text-sm"
          onClickFn={() => handleSubmit()}
        >
          Update
        </ButtonFill>
      </Container.Button>
    </Container>
  );
}

export default Settings;
