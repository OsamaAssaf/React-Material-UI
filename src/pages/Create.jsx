import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const useStyles = makeStyles({
  // btn: {
  //   fontSize: 60,
  //   backgroundColor: "violet",
  //   "&:hover": { backgroundColor: "blue" },
  // },
  // title: {
  //   textDecoration: "underline",
  //   marginBottom: 20,
  // },
  field: {
    marginTop: "20px !important",
    marginBottom: "20px !important",
    display: "block",
  },
});

export default function Create() {
  const classes = useStyles();

  const history = useHistory();

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const [category, setCategory] = useState("todos");

  function handleSubmit(event) {
    event.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if (!title) {
      setTitleError(true);
    }
    if (!details) {
      setDetailsError(true);
    }
    if (title && details) {
      console.log(title, details, category);
      addNote(title, details, category);
    }
  }

  async function addNote(title, details, category) {
    await fetch("http://localhost:8000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, details, category }),
    });
    history.push("/");
  }

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a new note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className={classes.field}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          value={details}
          onChange={(event) => setDetails(event.target.value)}
          className={classes.field}
          label="Details"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          multiline
          rows={4}
          error={detailsError}
        />

        <FormControl className={classes.field}>
          <FormLabel>Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(event) => setCategory(event.target.value)}
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
        <br />

        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
