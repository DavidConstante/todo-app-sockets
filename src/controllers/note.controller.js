import { json } from "express";
import { modelNames } from "mongoose";
import NoteModel from "../models/note.model";

export const getNotes = async () => {
    try {
        const rta = await NoteModel.find();
        return rta
    } catch (error) {
        console.log('Error Model DB');
    }
}

export const getNote = async (id) => {
    try {
        const filter = { _id: id };
        return await NoteModel.findById(filter)
    } catch (error) {

    }
}

export const createNote = async (data) => {
    try {
        const { title, content } = data;
        const newNote = new NoteModel({ title, content });
        const rta = await newNote.save();
        return rta;

    } catch (error) {

    }
}

export const deleteNote = async (id) => {
    try {
        const filter = { _id: id };
        const rta = await NoteModel.deleteOne(filter);
        return rta
    } catch (error) {

    }
}

export const updateNote = async (note) => {
    try {
        const filter = { _id: note.id };
        const rta = await NoteModel.findOneAndUpdate(filter, note);
        return rta;
    } catch (error) {

    }
}