import React from "react";
import { SearchContext } from "../SearchContext";
import styled from "styled-components";

const Card = styled.div`
  position: relative;
  width: 80vw;
  max-width: 600px;
  background-color: #fff3e4;
  box-shadow: 0 1px 16px 1px rgba(0, 0, 0, 0.2);
  padding: 15px 40px;
  color: #505050;

  @media (max-width: 740px) {
    width: 100%;
    box-shadow: 0 3px 8px 1px rgba(0, 0, 0, 0.2) inset 0 4px 8px 0px rgba(0,0,0,0.2);
  }
`;

const Close = styled.span`
  position: absolute;
  top: 7px;
  right: 15px;
  font-size: 1.4rem;
  color: #ff9a00;
  font-weight: bold;
  cursor: pointer;
`;

const City = styled.p`
  font-weight: bold;
  color: inherit;
`;

const Weather = styled.h2`
  font-size: 3.5rem;
  color: inherit;
  margin: 0.8rem 0;

  @media (max-width: 740px) {
    font-size: 2rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 15vw);
  gap: 20px;

  @media (max-width: 740px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Low = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
  color: inherit;

  &::before {
    content: "↓";
    display: inline-block;
    color: #ff9a00;
  }
`;

const High = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
  color: inherit;
  margin-left: 15px;

  &::before {
    content: "↑";
    display: inline-block;
    color: #ff9a00;
  }
`;

const Stats = styled.p`
  font-size: 1.2rem;
  font-weight: 300;

  @media (max-width: 740px) {
    font-size: 1.1rem;
  }
`;

const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  border-top: 1px solid #ff9a00;
  margin-top: 15px;
  padding-top: 5px;
  justify-content: center;

  @media (max-width: 740px) {
    grid-template-columns: repeat(4, 1fr);
    width: calc(100% + 80px);
    position: relative;
    margin-left: -40px;
  }
`;

const Days = styled.div`
  font-size: 1.3rem;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  @media (max-width: 740px) {
    &:last-child {
      display: none;
    }
  }

  b {
    font-size: 1rem;
    color: #ff9a00;

    &:first-child {
      margin-right: 10px;
    }
  }
`;

const Single = () => {
  const { search, setSearch, loading, error } = React.useContext(SearchContext);

  function handleClose() {
    setSearch(null);
  }

  if (error) return <p>{error.message}</p>;
  if (loading === true) return <p>Carregando...</p>;
  if (search)
    return (
      <Card>
        <Close onClick={handleClose}>X</Close>
        <City>{`${search.location.city}, ${search.location.region} - ${search.location.country}`}</City>
        <Weather>{`${search.current_observation.condition.temperature}ºC ${search.current_observation.condition.text}`}</Weather>
        <StatsGrid>
          <div>
            <Low>{`${search.forecasts[0].low}º`}</Low>
            <High>{`${search.forecasts[0].high}º`}</High>
          </div>
          <Stats>
            Sensação <b>{`${search.current_observation.wind.chill}ºC`}</b>
          </Stats>
          <Stats>
            Vento <b>{`${search.current_observation.wind.speed}km/h`}</b>
          </Stats>
          <Stats>
            Humidade{" "}
            <b>{`${search.current_observation.atmosphere.humidity}%`}</b>
          </Stats>
        </StatsGrid>
        <DaysGrid>
          {search.forecasts.map((day: any, index: number) =>
            index !== 0 && index < 6 ? (
              <Days key={day.date}>
                <span>{day.day}</span>
                <div>
                  <b>{day.low}º</b>
                  <b>{day.high}º</b>
                </div>
              </Days>
            ) : (
              ""
            )
          )}
        </DaysGrid>
      </Card>
    );
  else return null;
};

export default Single;
