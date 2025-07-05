import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Masonry from "@mui/lab/Masonry";
import NoteCard from "../components/NoteCard";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      const response = await fetch("http://localhost:8000/notes");
      const data = await response.json();
      setNotes(data);
    }
    fetchNotes();
  }, []);

  async function handleDelete(id) {
    await fetch(`http://localhost:8000/notes/${id}`, {
      method: "DELETE",
    });

    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  return (
    <Container>
      {/* <Grid container spacing={3}>
        {notes.map((note) => (
          <Grid key={note.id} size={{ xs: 12, md: 6, lg: 4 }}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid> */}

      <Masonry spacing={3} columns={{ xs: 1, md: 2, lg: 3 }}>
        {notes.map((note) => (
          <div key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
}
