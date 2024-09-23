import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { getAuth } from "firebase/auth";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Adjust the import based on your firebase config file
import MetaTags from "./MetaTags"; // Import MetaTags

const NoteComponent = () => {
  const [notes, setNotes] = useState([]);
  const [lastSavedNotes, setLastSavedNotes] = useState([]);
  const [isSaving, setIsSaving] = useState(false); // State for loading symbol
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    const initializeNotes = async () => {
      if (user) {
        const userId = user.uid;
        const userRef = doc(db, `users/${userId}`);

        console.log("Initializing notes for user:", userId);

        // Check local storage first
        const localNotes = localStorage.getItem("userNotes");
        if (localNotes) {
          console.log("Notes found in local storage.");
          try {
            const parsedNotes = JSON.parse(localNotes);
            // Check if the notes are not empty and valid
            if (Array.isArray(parsedNotes) && parsedNotes.length > 0) {
              setNotes(parsedNotes);
              setLastSavedNotes(parsedNotes);
            } else {
              console.log(
                "Local notes are empty or invalid. Fetching from Firestore."
              );
              fetchNotesFromFirestore(userRef);
            }
          } catch (error) {
            console.error("Error parsing local notes:", error);
            fetchNotesFromFirestore(userRef);
          }
        } else {
          console.log("No notes in local storage. Fetching from Firestore.");
          fetchNotesFromFirestore(userRef);
        }
      } else {
        console.log("User is not logged in!");
      }
    };

    const fetchNotesFromFirestore = async (userRef) => {
      try {
        console.log("Fetching notes from Firestore.");
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          const notesData = docSnap.data();
          const notesArray = Object.keys(notesData)
            .filter((key) => key.startsWith("Note"))
            .map((key) => ({
              id: key,
              content: notesData[key],
            }));
          setNotes(notesArray);
          setLastSavedNotes(notesArray);
          console.log("Notes fetched from Firestore successfully.");
        } else {
          console.log("No notes found. Creating default notes.");
          const defaultNotes = Array.from({ length: 5 }, (_, i) => ({
            id: `Note${i + 1}`,
            content: "",
          }));
          await setDoc(
            userRef,
            defaultNotes.reduce(
              (acc, note) => ({ ...acc, [note.id]: note.content }),
              {}
            )
          );
          setNotes(defaultNotes);
          setLastSavedNotes(defaultNotes);
          console.log("Default notes created and saved.");
        }
      } catch (error) {
        console.error("Error fetching or creating notes:", error);
      }
    };

    initializeNotes();
  }, [user]);

  useEffect(() => {
    const autoSaveInterval = setInterval(() => {
      if (hasChanges()) {
        console.log("Auto-saving notes...");
        saveNotes(); // Save to Firestore
        saveToLocalStorage(); // Save to local storage
      }
    }, 30 * 1000); // Auto-save every 30 seconds

    const handleBeforeUnload = () => {
      setIsSaving(true); // Show loading symbol
      console.log("Saving notes before unload...");
      saveNotes(); // Save to Firestore
      saveToLocalStorage(); // Save to local storage
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      clearInterval(autoSaveInterval);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [notes]);

  const hasChanges = () => {
    const changesExist =
      JSON.stringify(notes) !== JSON.stringify(lastSavedNotes);
    if (changesExist) {
      console.log("Changes detected in notes.");
    }
    return changesExist;
  };

  const saveToLocalStorage = () => {
    localStorage.setItem("userNotes", JSON.stringify(notes));
    console.log("Notes saved to local storage.");
  };

  const saveNotes = async () => {
    if (user && hasChanges()) {
      const userId = user.uid;
      const userRef = doc(db, `users/${userId}`);
      try {
        const notesObject = notes.reduce(
          (acc, note) => ({ ...acc, [note.id]: note.content }),
          {}
        );
        await updateDoc(userRef, notesObject);
        console.log("Notes saved to Firestore successfully.");
        setLastSavedNotes(notes);
      } catch (error) {
        console.error("Error saving notes:", error);
      }
    }
  };

  const handleNoteChange = (id, content) => {
    console.log(`Note ${id} changed.`);
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === id ? { ...note, content } : note))
    );
  };

  const handleManualSave = () => {
    if (hasChanges()) {
      console.log("Manual save triggered.");
      saveNotes();
      saveToLocalStorage();
    }
  };

  return (
    <>
      <MetaTags
        description="Save and organize important information about the colleges you're interested in. Keep track of your research, thoughts, and insights with UNIFYND's note-taking feature."
        keywords="college notes, save information, research colleges, study abroad notes, college insights, UNIFYND notes"
        url="https://unifynd.in/note-component"
        image="https://unifynd.in/path/to/college-notes-image.jpg" // Update with actual image URL
      />
      <div>
        <h2>Notes</h2>
        {isSaving && <div className="loading">Saving...</div>}{" "}
        {/* Loading symbol */}
        {notes.map((note) => (
          <div key={note.id} style={{ marginBottom: "20px" }}>
            <h3>{note.id}</h3>
            <ReactQuill
              value={note.content}
              onChange={(content) => handleNoteChange(note.id, content)}
              modules={quillModules}
            />
          </div>
        ))}
        <button onClick={handleManualSave}>Save Notes</button>
      </div>
    </>
  );
};

// Quill modules configuration
const quillModules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    [{ font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    ["link"],
    ["clean"],
  ],
};

export default NoteComponent;
