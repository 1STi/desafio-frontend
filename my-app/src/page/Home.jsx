import React from "react";
import { useState, useEffect } from "react";
import ContentWeather from "../components/ContentWeather";
import "../styles/Home.css";
import { BsSearch } from "react-icons/bs";
import TableCapital from "../components/TableCapital";
import { getAllInfo } from "../api/Api";

function Home() {
  const [city, setCity] = useState("");
  const [show, setShow] = useState(true);
  const [cities, setCities] = useState([]);
  const [capitaisCity, setCapitaisCity] = useState([]);
  const [cityRender, setCityRender] = useState({});

  useEffect(() => {
    setCapitaisCity([
      {
        name: "São Paulo",
        max: 30,
        min: 20,
      },
      {
        name: "Rio de Janeiro",
        max: 30,
        min: 20,
      },
      {
        name: "Belo Horizonte",
        max: 30,
        min: 20,
      },
      {
        name: "Brasília",
        max: 30,
        min: 20,
      },
      {
        name: "Salvador",
        max: 30,
        min: 20,
      },
    ]);
    // const fetchCities = async () => {
    //   const response = await getAllInfo();
    //   const data = response.data;
    //   data.map((city) => {
    //     const { cidade, temperaturaMaxima, temperaturaMinima } = city;
    //     setCities((cities) => [
    //       ...cities,
    //       cidade,
    //       temperaturaMaxima,
    //       temperaturaMinima,
    //     ]);
    //   });
    // };
    // const fetchCapitals = async () => {
    //   const response = await getAllInfo();
    //   const data = response.data;
    //   for (let i = 0; i < 10; i++) {
    //     const { cidade, temperaturaMaxima, temperaturaMinima } = data[i];
    //     setCapitaisCity((capitaisCity) => [
    //       ...capitaisCity,
    //       cidade,
    //       temperaturaMaxima,
    //       temperaturaMinima,
    //     ]);
    //   }
    // };
    // // Ta pegando as informações da API e colocando no array de cidades
    // fetchCities();
    // fetchCapitals();
  }, []);

  const showCitySearch = () => {
    if (city == "") {
      alert("Insira o nome da cidade");
    } else {
      const {
        cidade,
        temperaturaMaxima,
        temperaturaMinima,
        estado,
        sensasaoTermica,
        vento,
        humidade,
      } = cities.filter((city) => city.cidade == city);
      setCityRender({
        cidade,
        temperaturaMaxima,
        temperaturaMinima,
        estado,
        sensasaoTermica,
        vento,
        humidade,
      });
      setShow(!show);
    }
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
              <TableCapital cities={capitaisCity} />
              <TableCapital cities={capitaisCity} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
