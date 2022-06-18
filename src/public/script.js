import { loadNotes, onNewNote, findedNote } from './socket.js';
import { onHandleSubmit, renderNotes, appendNote, fillForm } from './ui.js';

const $noteForm = document.querySelector('#noteForm');


onNewNote(appendNote);
loadNotes(renderNotes);
findedNote(fillForm);


$noteForm.addEventListener('submit', onHandleSubmit);
