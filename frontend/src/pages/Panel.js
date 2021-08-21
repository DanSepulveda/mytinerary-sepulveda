import "../styles/panel.css";
import React, { useState } from "react";
import NewCity from "../components/admin/NewCity";
import ViewCities from "../components/admin/ViewCities";

const Panel = () => {
  const [view, setView] = useState("empty");

  let dataToShow;
  if (view == "newCity") {
    dataToShow = <NewCity />;
  } else if (view == "editCity") {
    dataToShow = <ViewCities />;
  } else {
    dataToShow = <h1>Hola</h1>;
  }

  return (
    <main className="admin-container">
      <section className="bacol">
        <div className="button-section">
          <div className="cities-buttons">
            <button onClick={() => setView("newCity")}>New City</button>
            <button onClick={() => setView("editCity")}>Edit City</button>
          </div>
          <div className="itineraries-buttons">
            <button onClick={() => setView("newItinerary")}>
              New Itinerary
            </button>
            <button onClick={() => setView("editItinerary")}>
              Edit Itinerary
            </button>
          </div>
        </div>
        <div className="view">{dataToShow}</div>
      </section>
    </main>
  );
};
export default Panel;
