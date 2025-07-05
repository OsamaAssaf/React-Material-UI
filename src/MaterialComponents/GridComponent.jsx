import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function GridComponent() {
  return (
    <>
      <Grid container>
        <Grid item size={{ md: 3, xs: 12, sm: 6 }}>
          <Paper>1</Paper>
        </Grid>
        <Grid item size={{ md: 3, xs: 12, sm: 6 }}>
          <Paper>2</Paper>
        </Grid>
        <Grid item size={{ md: 3, xs: 12, sm: 6 }}>
          <Paper>3</Paper>
        </Grid>
        <Grid item size={{ md: 3, xs: 12, sm: 6 }}>
          <Paper>4</Paper>
        </Grid>
      </Grid>
      {/* /////////////// */}
      <Grid container spacing={3}>
        {[].map((item) => (
          <Grid item key={item.id} size={{ xs: 12, md: 6, lg: 4 }}>
            <Paper>{item.title}</Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
