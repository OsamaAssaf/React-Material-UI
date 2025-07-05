import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Avatar, IconButton, Typography } from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { blue, green, pink, yellow } from "@mui/material/colors";

const useStyles = makeStyles({
  // test: {
  //   border: (note) => {
  //     if (note.category === "work") {
  //       return "1px solid red";
  //     }
  //   },
  // },

  avatar: {
    backgroundColor: (note) => {
      if (note.category === "work") {
        return `${yellow[700]} !important`;
      }
      if (note.category === "money") {
        return `${green[500]} !important`;
      }
      if (note.category === "todos") {
        return `${pink[500]} !important`;
      }
      return `${blue[500]} !important`;
    },
  },
});

export default function NoteCard({ note, handleDelete }) {
  const classes = useStyles(note);
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
