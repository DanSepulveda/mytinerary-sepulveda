import styles from "../styles/panel.module.css";
import React, { useState } from "react";
import NewCity from "../components/admin/NewCity";
import ViewCities from "../components/admin/ViewCities";

const Panel = () => {
  const [view, setView] = useState("empty");

  let dataToShow;
  if (view === "newCity") {
    dataToShow = <NewCity />;
  } else if (view === "editCity") {
    dataToShow = <ViewCities />;
  } else {
    dataToShow = <h1>Hola</h1>;
  }

  return (
    <main className={styles.adminContainer}>
      <section className={styles.bacol}>
        <div className={styles.buttonSection}>
          <div className={styles.citiesButtons}>
            <button onClick={() => setView("newCity")}>New City</button>
            <button onClick={() => setView("editCity")}>Edit City</button>
          </div>
          <div className={styles.itinerariesButtons}>
            <button onClick={() => setView("newItinerary")}>
              New Itinerary
            </button>
            <button onClick={() => setView("editItinerary")}>
              Edit Itinerary
            </button>
          </div>
        </div>
        <div className={styles.view}>{dataToShow}</div>
      </section>
    </main>
  );
};
export default Panel;
