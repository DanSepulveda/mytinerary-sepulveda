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
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(props.allCities);
    if (!props.allCities.length) {
      props.history.push("/cities");
      return false;
    }
    async function evaluateError() {
      try {
        props.getCity(props.match.params.id);
        await props.getItineraries(props.match.params.id);
        setLoader(false);
      } catch {
        props.history.push("/cities");
      }
    }
    evaluateError();
  }, []);

  if (loader) {
    return (
      <div className="loader">
        <img src="/assets/loader.gif" />
      </div>
    );
  }
  let message = (
    <div className="nocity">
      <div
        style={{
          backgroundImage: "url('/assets/under.png')",
          height: "30vh",
        }}
      ></div>
      <div className="message">
        <h2>Oops!</h2>
        <h3>We are still working on this section.</h3>
        <h4>Please come back on August 30</h4>
      </div>
    </div>
  );

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
        {!props.itineraries.length && message}
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
