import React from "react";

export default function EventModal({ event, onClose }) {
  if (!event) return null;

  return (
    <div className="modal-bg">
      <div className="modal-box">
        <h2>{event.title}</h2>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Description:</strong> {event.description}</p>

        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
