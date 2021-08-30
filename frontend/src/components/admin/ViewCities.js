import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewCities = (props) => {
  console.log(props);
  const [cities, setCities] = useState([]); //setea todas las cities al fetchear
  const [state, setState] = useState(false); //cambiar el estado al borrar y vuelve a fetchear
  const [cityToEdit, setCityToEdit] = useState({
    // name: null,
    // prefecture: null,
    // region: null,
    // description: null,
    // src: null,
    // src2: null,
    // src3: null
  });
  // const [update, setUpdate] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/cities")
      .then((res) => setCities(res.data.response));
  }, [state]);

  const deleteCity = (e) => {
    let id = e.target.value;
    let body = { id: id };
    axios
      .delete(`http://localhost:4000/api/city/${id}`, { body })
      .then((res) => console.log(res));
    setState(!state);
  };
  const getAll = () => {
    axios
      .get("http://localhost:4000/api/cities")
      .then((res) => setCities(res.data.response));
  };

  const editCity = (e) => {
    let id = e.target.value;
    axios
      .put(`http://localhost:4000/api/city/${id}`, { cityToEdit })
      .then((res) => console.log(res));
    setState(!state);
  };
  const inputHandler = (e) => {
    console.log(e.target.value);
    setCityToEdit({
      [e.target.name]: e.target.value,
    });
  };
  console.log(cityToEdit);

  return (
    <>
      <button className="getAll" onClick={getAll}>
        Get All Cities
      </button>
      <div>
        {cities.map((city, index) => {
          return (
            <div className="dbCardCity">
              <p>{city._id}</p>
              <label htmlFor="name">City: {city.name}</label>
              <input
                id="name"
                type="text"
                onChange={inputHandler}
                name="name"
              />
              <label htmlFor="prefecture">Prefecture: {city.prefecture}</label>
              <input
                id="prefecture"
                type="text"
                onChange={inputHandler}
                name="prefecture"
              />
              <label htmlFor="region">Region: {city.region}</label>
              <input
                id="region"
                type="text"
                onChange={inputHandler}
                name="region"
              />
              <label htmlFor="description">
                Description: {city.description}
              </label>
              <input
                id="description"
                type="description"
                onChange={inputHandler}
                name="description"
              />
              <label htmlFor="src">Image 1: {city.src}</label>
              <input id="src" type="text" onChange={inputHandler} name="src" />
              <label htmlFor="src2">Image 2: {city.src2}</label>
              <input
                id="src2"
                type="text"
                onChange={inputHandler}
                name="src2"
              />
              <label htmlFor="src3">Image 3: {city.src3}</label>
              <input
                id="src3"
                type="text"
                onChange={inputHandler}
                name="src3"
              />
              <div className="buttons">
                <button className="edit" value={city._id} onClick={editCity}>
                  Edit
                </button>
                <button
                  className="remove"
                  value={city._id}
                  onClick={deleteCity}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ViewCities;

// onChange={inputHandler}
