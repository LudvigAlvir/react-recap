import { useNotes } from "./stores/store";

function App() {
  const { notes, addNote, removeNote } = useNotes();
  return (
    <>
      <h1 className="text-3xl font-bold">Home page </h1>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          addNote(e.target.note.value);
        }}
      >
        <input type="text" id="note" name="note" className="border" />
        <button type="submit" className="bg-blue-900 text-white p-1 rounded">
          Add note
        </button>
      </form>
      {notes.map((note) => (
        <div key={note} className="flex gap-2">
          <p>{note}</p>
          <button
            className="border-red-500 rounded border"
            onClick={() => {
              removeNote(note);
            }}
          >
            Delete
          </button>
        </div>
      ))}
      <button>Delete all notes</button>
    </>
  );
}

export default App;
