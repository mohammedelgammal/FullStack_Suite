import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Button } from "src/common/ui";
import { ThemeType } from "src/types";
import { getAvailableNotes } from "src/utils/helpers";

const ShowNote = () => {
  const params = useParams();
  const navigate = useNavigate();
  const notes = getAvailableNotes(),
    note = notes.find((n) => n.id.toString() == params.id);

  const handleDeleteNote = (id: number) => {
    const notes = getAvailableNotes();
    const filteredNotes = notes.filter((note) => note.id !== id);
    localStorage.setItem("notes", JSON.stringify(filteredNotes));
    navigate(-1);
  };

  return note ? (
    <div>
      <h1>{note.title}</h1>
      <p>{note.body}</p>
      <div>
        <Button
          onClick={() => handleDeleteNote(note.id)}
          theme={ThemeType.DELETE}
        >
          Delete
        </Button>
        <Button theme={ThemeType.PRIMARY}>Edit</Button>
        <Button href=".." theme={ThemeType.SECONDARY}>
          Return
        </Button>
      </div>
    </div>
  ) : (
    <Navigate to={""} />
  );
};

export default ShowNote;
