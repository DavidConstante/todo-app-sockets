import { saveNote, deleteNote, updateNote, findNote } from "./socket.js";

const $noteForm = document.querySelector('#noteForm');
const $noteList = document.querySelector('#noteList');

const $btnCleanForm = document.querySelector('#btnCleanForm');

let saveId = '';


const noteUi = (note) => {
    const div = document.createElement("div");
    div.innerHTML = `
          <a  class="block relative p-6 mx-8 my-2 max-w bg-white rounded-lg border border-gray-200 shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="w-4/5 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  ${note.title}
                  </h5>
                  <p class="font-normal text-gray-700 dark:text-gray-400">
                  ${note.content}
                    </p>
                    <div class=" absolute flex flex-row right-0 top-0">
                        <img data-id=${note._id} class="edit w-10 m-2  " src="./img/edit.svg" alt="edit" srcset="">
                        <img data-id=${note._id} class="delete w-10 m-2  " src="./img/delete.svg" alt="" srcset="">

                    </div>

                </a>
    
    `

    const $btnEdit = div.querySelector('.edit');
    const $btnDelete = div.querySelector('.delete');

    $btnDelete.addEventListener('click', () => {
        deleteNote($btnDelete.dataset.id);
    })

    $btnEdit.addEventListener('click', async () => {
        const id = ($btnEdit.dataset.id);
        await findNote(id);

    })

    return div;
}

$btnCleanForm.addEventListener('click', () => {
    cleanForm();
})

export const onHandleSubmit = (e) => {
    e.preventDefault();

    if (saveId) {
        updateNote({
            id: saveId,
            title: $noteForm['title'].value,
            content: $noteForm['content'].value
        });
        cleanForm();
    } else {
        saveNote($noteForm['title'].value, $noteForm['content'].value.trim()) //Save New note
        cleanForm();
    }

}

const cleanForm = () => {
    $noteForm['title'].value = ''
    $noteForm['content'].value = ''
    saveId = ''
}

export const fillForm = (note) => {
    $noteForm['title'].value = note.title;
    $noteForm['content'].value = note.content;
    saveId = note._id
}

export const renderNotes = (notes) => {
    $noteList.innerHTML = ``;
    notes.forEach(note => {
        $noteList.append(noteUi(note))
    });
}

export const appendNote = (note) => {
    $noteList.append(noteUi(note));
}