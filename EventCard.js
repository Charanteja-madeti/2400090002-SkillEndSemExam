import React from "react";

export default function EventCard({ event, onClick }) {
  return (
    <div className="event-card" onClick={onClick}>
      <h3>{event.title}</h3>
      <p>{event.date}</p>
    </div>
  );
}
