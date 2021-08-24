import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default class Home extends React.Component {
  render() {
    document.title = "MyTinerary - Find your perfect trip!";
    window.scrollTo(0, 0);
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}
