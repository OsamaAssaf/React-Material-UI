import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";

export default function RadioComponent() {
  return (
    <>
      {" "}
      <RadioGroup>
        <Radio value="hello" />
        <Radio value="goodby" />
      </RadioGroup>
      {/* /////////////// */}
      <RadioGroup
      // value={category}
      // onChange={(event) => setCategory(event.target.value)}
      >
        <FormControlLabel value="money" control={<Radio />} label="Money" />
        <FormControlLabel value="todos" control={<Radio />} label="Todos" />
        <FormControlLabel
          value="reminders"
          control={<Radio />}
          label="Reminders"
        />
        <FormControlLabel value="word" control={<Radio />} label="Word" />
      </RadioGroup>
      {/* /////////////// */}
      <FormControl
        // className={classes.field}
        error={true}
        required
      >
        <FormLabel>Category</FormLabel>
        <RadioGroup
        // value={category}
        // onChange={(event) => setCategory(event.target.value)}
        >
          <FormControlLabel value="money" control={<Radio />} label="Money" />
          <FormControlLabel value="todos" control={<Radio />} label="Todos" />
          <FormControlLabel
            value="reminders"
            control={<Radio />}
            label="Reminders"
          />
          <FormControlLabel value="word" control={<Radio />} label="Word" />
        </RadioGroup>
      </FormControl>
    </>
  );
}
