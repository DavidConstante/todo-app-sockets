
import { getNotes, createNote, deleteNote, getNote, updateNote } from "./controllers/note.controller";

export default function socket(io) {
    io.on('connection', (socket) => {
        console.log('New user conected');

        const emitNotes = async () => {
            const notes = await getNotes()
            console.log(notes.length);

            io.emit('server:loadNotes', notes)
        }
        emitNotes();

        socket.on('client:saveNote', async (data) => {
            const noteSaved = await createNote(data);
            io.emit('server:newNote', noteSaved)
        })

        socket.on('client:deleteNote', async (id) => {
            await deleteNote(id);
            emitNotes();
        })

        socket.on('client:findNote', async (id) => {
            const note = await getNote(id);
            io.emit('server:noteFinded', note)
        })

        socket.on('client:updateNote', async (note) => {
            await updateNote(note);
            emitNotes();
        })
    })
}