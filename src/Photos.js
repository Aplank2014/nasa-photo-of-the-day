import React, { useState, useEffect  } from "react";
import axios from "axios";
import Header from "./Header";
import { Container, Row } from "reactstrap";


function Photos() {
  const [nasaData, setNasaData] = useState({});
 
  useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=e8x7uyaDvmfbCPAvREOePG4TLeQLPmymlVQdDDK5')
      .then(res =>{
        setNasaData(res.data)
        });
    },[]);
    console.log('nasa data --->', nasaData)
  return (
      <Container>
        
              <Row>
              <Header data={nasaData}/> 
              <img src={nasaData.url} alt="a random nasa photo" />
              </Row>
      </Container>
  )
            }            
export default Photos