import React from "react";
import { useState, useEffect } from "react";
import ContentWeather from "../components/ContentWeather";
import "../styles/Home.css";
import { BsSearch } from "react-icons/bs";
import TableCapital from "../components/TableCapital";
import { getAllInfo } from "../api/Api";

// import { Container } from './styles';

function Home() {
  const [city, setCity] = useState("");
  const [show, setShow] = useState(false);
  const [cities, setCities] = useState([]);

  const [tamScreen, setTamScreen] = useState(window.screen.width);

  useEffect(() => {
    setCities([
      {
        name: "São Paulo",
        min: 20,
        max: 30,
      },
      {
        name: "Rio de Janeiro",
        min: 20,
        max: 30,
      },
      {
        name: "Belo Horizonte",
        min: 20,
        max: 30,
      },
      {
        name: "Brasília",
        min: 20,
        max: 30,
      },
      {
        name: "Salvador",
        min: 20,
        max: 30,
      },
    ]);
  }, []);

  const fetchWeather = async () => {
    const response = await getAllInfo();
    console.log(response);
  };

  return (
    <>
      <div className="container">
        <div className="text-main-container">
          <h1>Previsão do Tempo</h1>
        </div>
        <div className="container-content">
          {show ? <ContentWeather /> : null}
        </div>

        <div className="container-input">
          <input
            type="text"
            placeholder="Insira o nome da cidade"
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={fetchWeather}>
            <BsSearch />
          </button>
        </div>

        <div className="container-capitals">
          <div className="organize-capitals">
            <h2>Capitais</h2>
            <div className="capitals">
              <TableCapital cities={cities} />
              <TableCapital cities={cities} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
