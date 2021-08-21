import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/header/Navbar";
import Itinerary from "../components/main/Itinerary";
import Footer from "../components/Footer";
import { messageOne, msgNoExist } from "../components/Message";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
import itinerariesActions from "../redux/actions/itinerariesActions";

const City = (props) => {
  window.scrollTo(0, 0);
  useEffect(() => {
    if (!props.allCities.length) {
      props.history.push("/cities");
      return false;
    }
    props.getCity(props.match.params.id);
    props.getItineraries(props.match.params.id);
  }, []);
  console.log(props.itineraries);
  return (
    <div className="cityContainer">
      <Navbar />
      <div style={{ minHeight: "80vh" }}>
        <div
          style={{
            backgroundImage: `url('${props.city.src}')`,
            width: "100%",
            minHeight: "80vh",
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "-1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "15vh", color: "white" }}>
            {props.city.name}
          </h1>
        </div>
      </div>
      <section
        style={{
          display: "flex",
          padding: "0vh 5vw",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {props.itineraries.map((itinerary) => (
          <Itinerary itinerary={itinerary} key={itinerary._id} />
        ))}
      </section>
      <div
        style={{
          minHeight: "30vh",
          marginTop: "5vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Link to="/cities" className="come-back">
          Back to Cities
        </Link>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    city: state.cities.chosenCity,
    allCities: state.cities.allCities,
    itineraries: state.itineraries.itinerariesList,
  };
};

const mapDispatchToProps = {
  getCity: citiesActions.getOneCity,
  getItineraries: itinerariesActions.getList,
};

export default connect(mapStateToProps, mapDispatchToProps)(City);
