export default function MasonryComponent() {
  return (
    <>
      <Masonry spacing={3} columns={{ xs: 1, md: 2, lg: 3 }}>
        {[].map((note) => (
          <div key={note.id}>
            <NoteCard
              note={note}
              // handleDelete={handleDelete}
            />
          </div>
        ))}
      </Masonry>
    </>
  );
}
