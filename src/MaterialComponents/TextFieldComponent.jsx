import TextField from "@mui/material/TextField";

export default function TextFieldComponent() {
  return (
    <>
      <TextField
        // value={title}
        // onChange={(event) => setTitle(event.target.value)}
        // className={classes.field}
        label="Note Title"
        variant="outlined"
        color="secondary"
        fullWidth
        required
        // error={titleError}
      />
      {/* /////////////// */}
      <TextField
        // value={details}
        // onChange={(event) => setDetails(event.target.value)}
        // className={classes.field}
        label="Details"
        variant="outlined"
        color="secondary"
        fullWidth
        required
        multiline
        rows={4}
        // error={detailsError}
      />
    </>
  );
}
