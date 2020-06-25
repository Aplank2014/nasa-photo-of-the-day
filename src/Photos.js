import React, { useState, useEffect  } from "react";
import axios from "axios";
import Header from "./Header";

function Photos() {
  const [nasaData, setNasaData] = useState([]);
 
  useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=e8x7uyaDvmfbCPAvREOePG4TLeQLPmymlVQdDDK5')
      .then(res => {
         // console.log(res.data) 
          setNasaData(res.data);
      });
  }, []);

  return (
      <div className="Container">
              <div className="entry">
              <Header {...nasaData} />
              <Photos {...nasaData} />
              </div>
      </div>
  )
}
export default Photos