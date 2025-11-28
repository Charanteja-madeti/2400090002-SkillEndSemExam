import React, { useState } from "react";
import EventCard from "./EventCard";
import EventModal from "./EventModal";
import "./App.css";

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      title: "Tech Conference",
      date: "2025-01-18",
      location: "Hyderabad",
      description: "A conference on emerging technology trends."
    },
    {
      id: 2,
      title: "Music Fest",
      date: "2025-02-10",
      location: "Bangalore",
      description: "A live open-air music festival."
    }
  ];

  return (
    <div className="app">
      <h1>Upcoming Events</h1>

      <div className="event-list">
        {events.map(event => (
          <EventCard
            key={event.id}
            event={event}
            onClick={() => setSelectedEvent(event)}
          />
        ))}
      </div>

      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
}

export default App;
