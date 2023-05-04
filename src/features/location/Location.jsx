import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { save } from "./locationSlice";

const Location = () => {
  const [locationName, setLocationName] = useState("");
  const dispatch = useDispatch();
  const { locations } = useSelector((state) => state.locations);

  const handleData = (e) => setLocationName(e.target.value);

  const hanldeSave = () => {
    const ifPrestent = locations.includes(locationName);
    if (locationName !== undefined && !ifPrestent) {
      dispatch(save(locationName));
      setLocationName("");
    } else {
      setLocationName("");
    }
  };
  return (
    <div>
      <form>
        <input value={locationName} onChange={handleData} />
        <button type="button" onClick={hanldeSave}>
          Add
        </button>
      </form>
      <h3>
        {locations.map((item) => {
          return <li>{item}</li>;
        })}
      </h3>
    </div>
  );
};

export default Location;
