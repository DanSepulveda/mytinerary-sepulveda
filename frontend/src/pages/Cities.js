import styles from "../styles/cities.module.css";
import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Cardcity from "../components/Cardcity";
import Footer from "../components/Footer";
import Nocity from "../components/Nocity";
import { mensaje } from "../components/Message";

import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";

const Cities = (props) => {
  document.title = "MyTinerary - Cities";
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    async function evaluateError() {
      try {
        await props.getCities(props.token);
        setLoader(false);
      } catch {
        mensaje();
        props.history.push("/");
      }
    }
    if (!props.allCities.length) {
      evaluateError();
    } else {
      props.getFiltered("");
      setLoader(false);
    }
  }, [props.token]);

  const handlerCity = (e) => {
    props.getFiltered(e.target.value);
  };

  if (loader) {
    return (
      <div className="loader">
        <img src="/assets/loader.gif" />
      </div>
    );
  }

  let result = props.cities.map((city, index) => (
    <Cardcity city={city} key={index} index={index} />
  ));

  let message = !props.cities.length && <Nocity />

  return (
    <>
      <header className={styles.cities}>
        <Navbar />
      </header>
      <div
        className={styles.cityHero}
        style={{ backgroundImage: "url('/assets/banner/6.png')" }}
      >
        <h1>
          Find your next
          <br />
          travel destination
        </h1>
      </div>
      <input
        type="text"
        placeholder="Choose your destination"
        className={styles.searcher}
        onChange={handlerCity}
      />
      {message}
      <div className={styles.rejilla}>{result}</div>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    allCities: state.cities.allCities,
    cities: state.cities.filteredCities,
    token: state.users.token
  };
};
const mapDispatchToProps = {
  getCities: citiesActions.getList,
  getFiltered: citiesActions.getFilteredList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
