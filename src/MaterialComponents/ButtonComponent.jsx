import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function ButtonComponent() {
  return (
    <>
      <Button type="submit" color="primary">
        Submit
      </Button>
      {/* /////////////// */}
      <Button type="submit" color="secondary" variant="outlined">
        Submit
      </Button>
      {/* /////////////// */}
      <Button
        type="submit"
        color="secondary"
        variant="contained"
        disableElevation
      >
        Submit
      </Button>
      {/* /////////////// */}
      <ButtonGroup>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      {/* /////////////// */}
      <ButtonGroup color="secondary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      {/* /////////////// */}
      <Button
        type="submit"
        color="secondary"
        variant="contained"
        onClick={() => console.log("Button Clicked")}
        startIcon={<SendIcon />}
        endIcon={<KeyboardArrowRightIcon />}
      ></Button>
    </>
  );
}
