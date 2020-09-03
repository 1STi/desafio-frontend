import React from "react";
import { SearchContext } from "../SearchContext";
import styled from "styled-components";

const Card = styled.div`
  width: 80vw;
  max-width: 600px;
  background-color: #fff3e4;
  box-shadow: 0 1px 16px 1px rgba(0, 0, 0, 0.2);
  padding: 15px 40px;
  color: #505050;
`;

const City = styled.p`
  font-weight: bold;
  color: inherit;
`;

const Weather = styled.h2`
  font-size: 3.5rem;
  color: inherit;
  margin: 0.8rem 0;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 15vw);
  gap: 20px;
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
`;

const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  border-top: 1px solid #ff9a00;
  margin-top: 15px;
  padding-top: 5px;
  justify-content: center;
`;

const Days = styled.div`
  font-size: 1.3rem;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  b {
    font-size: 1rem;
    color: #ff9a00;

    &:first-child {
      margin-right: 10px;
    }
  }
`;

const Single = () => {
  const { search } = React.useContext(SearchContext);

  return (
    <>
      {search && (
        <Card>
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
      )}
    </>
  );
};

export default Single;
