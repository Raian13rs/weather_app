import { useState } from "react";
import axios from "axios";

function Api() {
    const [data, setData] = useState({});
  const [location, setLocation] = useState("");
//  Api call:
  const url = `https://https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=7f0d7e4d4f983de8d52e13016312a18d`;
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };
    return(
        <div>

        </div>
    )
}

export default Api