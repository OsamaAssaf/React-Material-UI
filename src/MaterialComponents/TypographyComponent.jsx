import Typography from "@mui/material/Typography";

export default function TypographyComponent() {
  return (
    <>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a new note
      </Typography>
      {/* /////////////// */}
      <Typography variant="h1" color="primary" align="center">
        Create a new note
      </Typography>
      {/* /////////////// */}
      <Typography color="secondary" noWrap>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Typography>
    </>
  );
}
