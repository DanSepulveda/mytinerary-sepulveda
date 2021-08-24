import React from "react";
import Navbar from "../components/Navbar";

export default class Error404 extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <h1>Esta será la página de Error 404</h1>
      </>
    );
  }
}
