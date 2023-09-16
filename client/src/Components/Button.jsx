import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import "../Styles/Button.css";
import axios from "axios";
import Modal from "react-modal";

const Button = () => {
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleConfirmation = () => {
    if (name && tag) {
      closeModal();
      uploadImage();
    } else {
      alert("Please fill in the name and tag.");
    }
  };

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("tag", tag);
    formData.append("photo", document.getElementById("file_picker").files[0]);

    axios
      .post("http://localhost:5000/api/save", formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error uploading image:", err);
      });
  };

  return (
    <div>
      <button className="button" onClick={openModal}>
        <AiFillPlusCircle />
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Upload Image Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2 className="modal-title">Upload Image</h2>
        <label htmlFor="name" className="modal-label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="modal-input"
        />

        <label htmlFor="tag" className="modal-label">
          Tag:
        </label>
        <input
          type="text"
          id="tag"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="modal-input"
        />

        <label htmlFor="file_picker" className="modal-label">
          Choose Image:
        </label>
        <input
          type="file"
          name="file_picker"
          id="file_picker"
          className="modal-input"
        />

        <button onClick={handleConfirmation} className="modal-button">
          Confirm Upload
        </button>
        <button onClick={closeModal} className="modal-button cancel">
          Cancel
        </button>
      </Modal>
    </div>
  );
};

export default Button;
