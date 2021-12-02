import { useState } from "react";
import citiesJson from "./cities.json";
import { useFormik } from "formik";

function Cities({ getCapital }) {
  const [city] = useState(citiesJson);

  const { handleChange, values } = useFormik({
    initialValues: {
      cityName: "",
    },
  });

  const sendCapital = () => {
    getCapital(values.cityName);
  };

  sendCapital();

  return (
    <form>
      <select onChange={handleChange} name="cityName" className="selection">
        {city.map((item) => (
          <option key={item.id} value={item.name} selected={item.id === 6}>
            {item.name}
          </option>
        ))}
      </select>
    </form>
  );
}

export default Cities;
