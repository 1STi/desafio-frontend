import React from "react";
import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";

import TableCapital from "../components/TableCapital";
import ContentWeather from "../components/ContentWeather";
import "../styles/Home.css";

import { getAllInfo } from "../api/Api";

function Home() {
  const [city, setCity] = useState("");
  const [show, setShow] = useState(true);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      const { status, data } = await getAllInfo();

      if (status === 200) {
        const cities = data.slice(0, 10);
        setCities(cities);
      }
    };

    fetchCities();
  }, []);

  const showCitySearch = () => {
    if (city === "") {
      alert("Insira o nome da cidade");
      return;
    }

    setShow(!show);
  };

  const cidade = {
    cidade: "São Paulo",
    temperaturaMaxima: 30,
    temperaturaMinima: 20,
    humidade: 20,
    sensasaoTermica: 20,
    estado: "SP",
    vento: 20,
  };

  return (
    <>
      <div className="container">
        <div className="text-main-container">
          <h1>Previsão do Tempo</h1>
        </div>

        <div className="container_search">
          <div className="container-content">
            {show ? (
              <ContentWeather
                cidade={cidade.cidade}
                estado={cidade.estado}
                humidade={cidade.humidade}
                sensasacaoTermica={cidade.sensasaoTermica}
                temMax={cidade.temperaturaMaxima}
                tempMin={cidade.temperaturaMinima}
                vento={cidade.vento}
              />
            ) : null}
          </div>

          <div className="container-input">
            <input
              type="text"
              placeholder="Insira o nome da cidade"
              onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={showCitySearch}>
              <BsSearch />
            </button>
          </div>
        </div>

        <div className="container-capitals">
          <div className="organize-capitals">
            <h2>Capitais</h2>
            <div className="capitals">
              <TableCapital cities={cities} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
