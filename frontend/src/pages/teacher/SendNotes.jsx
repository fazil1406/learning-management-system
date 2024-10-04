import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";

const SendNotes = () => {
  const [title, setTitle] = useState("");
  const [Faculty, setFaculty] = useState("");
  const [file, setFile] = useState(null);
  const [notesList, setNotesList] = useState([]);
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({
    title: "",
    author: "",
    description: "",
    file: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();

    setErrors({ title: "", file: "" });

    let hasError = false;
    if (!title) {
      setErrors((prev) => ({ ...prev, title: "Title is required" }));
      hasError = true;
    }

    if (!file) {
      setErrors((prev) => ({ ...prev, file: "File is required" }));
      hasError = true;
    }

    if (hasError) return;

    const newnotes = { title, Faculty, file, description };
    setNotesList([...notesList, newnotes]);
    setTitle("");
    setFaculty("");
    setFile(null);
    setDescription("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Upload a Notes</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-10 rounded-lg shadow-md"
      >
        <div className="mb-5 py-2">
          <FloatLabel>
            <label
              className="block  text-gray-700 text-sm font-bold mb-5"
              htmlFor="title"
            >
              Title
            </label>

            <InputText
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight  focus:ring-indigo-500 focus:border-indigo-500"
            />
          </FloatLabel>
          {errors.title && (
            <p className="text-red-500 text-xs italic">{errors.title}</p>
          )}
        </div>
        <div className="mb-5 py-2">
          <FloatLabel>
            <label
              className="block text-gray-700 text-sm font-bold mb-5 "
              htmlFor="Faculty"
            >
              Faculty Name
            </label>
            <InputText
              type="text"
              id="Faculty"
              value={Faculty}
              onChange={(e) => setFaculty(e.target.value)}
              className="shadow  border border-gray-300  rounded-lg w-full py-2 px-3  focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 leading-tight "
            />
          </FloatLabel>
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-2 "
          >
            Description
          </label>
          <textarea
            type="text"
            id="description"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter description here"
          />
        </div>
        <div className="mb-4 py-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="file"
          >
            Upload Notes
          </label>
          <input
            type="file"
            id="file"
            accept=".pdf"
            onChange={(e) => setFile(e.target.files[0])}
            className="block w-full text-sm text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          />
          {errors.file && (
            <p className="text-red-500 text-xs italic">{errors.file}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Upload notes
        </button>
      </form>

      <h2 className="text-xl font-semibold mt-6">Uploaded Books</h2>
      <ul className="w-full max-w-md mt-4">
        {notesList.map((note, index) => (
          <li
            key={index}
            className="border border-gray-300 p-4 mb-2 rounded-lg bg-gray-50"
          >
            <h3 className="font-bold">{note.title}</h3>
            <p className="text-gray-600">Faculty {note.Faculty}</p>

            <p className="text-gray-600">File: {note.file.name}</p>
            <p className="text-gray-600">Description: {note.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SendNotes;
