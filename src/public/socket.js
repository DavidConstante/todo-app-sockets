const socket = io();

export const loadNotes = (callback) => {
    socket.on('server:loadNotes', callback)
}

export const saveNote = (title, content) => {
    socket.emit('client:saveNote', {
        title,
        content
    })
}

export const onNewNote = (callback) => {
    socket.on('server:newNote', callback)
}

export const findedNote = (callback) => {
    socket.on('server:noteFinded', callback)
}

export const deleteNote = (id) => {
    socket.emit('client:deleteNote', id)
}

export const updateNote = (note) => {
    socket.emit('client:updateNote', note)
}

export const findNote = (id) => {
    socket.emit('client:findNote', id)
}