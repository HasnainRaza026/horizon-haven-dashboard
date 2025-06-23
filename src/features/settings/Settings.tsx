import { useState, useEffect } from "react";
import NotFound from "../../ui/NotFound";
import ButtonFill from "../../ui/ButtonFill";
import Container from "../../ui/Container";
import InputFieldQuantity from "../../ui/InputFieldQuantity";
import PageSpinner from "../../ui/PageSpinner";
import useFetchSettings from "./useFetchSettings";
import useUpdateSettings from "./useUpdateSettings";
import ConfirmModal from "../../ui/ConfirmModal";

function Settings() {
  const { settings, isPending, isError } = useFetchSettings();
  const { updateSettingsMutation, isPending: isUpdating } = useUpdateSettings();

  const [maxNights, setMaxNights] = useState(0);
  const [minNights, setMinNights] = useState(0);
  const [maxGuests, setMaxGuests] = useState(0);
  const [breakfastPrice, setBreakfastPrice] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (settings) {
      setMaxNights(settings.max_nights || 0);
      setMinNights(settings.min_nights || 0);
      setMaxGuests(settings.max_guests || 0);
      setBreakfastPrice(settings.breakfast_price || 0);
    }
  }, [settings]);

  if (isPending) return <PageSpinner />;

  if (isError) return <NotFound message="Settings not found" />;

  const handleChange = (value: number, setValue: (value: number) => void) => {
    if (value > 0) {
      setValue(value);
    }
  };

  const hasUpdated =
    minNights !== settings?.min_nights ||
    maxNights !== settings?.max_nights ||
    maxGuests !== settings?.max_guests ||
    breakfastPrice !== settings?.breakfast_price;

  const handleSubmit = () => {
    const data = {
      min_nights: minNights,
      max_nights: maxNights,
      max_guests: maxGuests,
      breakfast_price: breakfastPrice,
    };

    updateSettingsMutation({
      settingsId: settings?.id || 1,
      settings: data,
    });
  };

  return (
    <>
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
            onClickFn={() => {
              if (hasUpdated) {
                setIsModalOpen(true);
              }
            }}
            isDisabled={!hasUpdated}
          >
            Update
          </ButtonFill>
        </Container.Button>
      </Container>
      {isModalOpen && hasUpdated && (
        <ConfirmModal
          cancelBtnFn={() => setIsModalOpen(false)}
          title="Update Settings"
          text="Are you sure you want to update the settings?"
          actionBtnColor="blue"
          actionBtnText="Update"
          actionBtnFn={() => handleSubmit()}
          isActionBtnPending={isUpdating}
        />
      )}
    </>
  );
}

export default Settings;
