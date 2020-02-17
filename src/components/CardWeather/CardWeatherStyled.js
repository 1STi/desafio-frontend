import styled from "styled-components";

const CardWeatherContainer = styled.div`
  box-shadow: ${props => props.theme.shadows};
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 90%;
  padding: ${props => props.theme.padding.large};
  margin-bottom: ${props => props.theme.margin.regular};
  @media (max-width: 360px) {
    padding: ${props => props.theme.padding.regular};
    width: 100%;
  }
`;

const ForecastContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ForecastWeekDay = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: ${props => props.theme.margin.small};
`;

const WeekDay = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.typography.size.small};
  font-weight: 800;
  @media (max-width: 360px) {
    font-size: ${props => props.theme.typography.size.smallest};
  }
`;

const WeekDayTemp = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.typography.size.smallest};
  font-weight: 800;
  color: ${props => props.theme.colors.primary};
`;

const Location = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.typography.size.smallest};
  font-weight: 800;
`;

const WeatherNow = styled.h2`
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.typography.size.largest};
  font-weight: 600;
  margin: ${props => props.theme.margin.regular} 0;
`;

const ItemsWeatherNow = styled.p`
  width: 100px;
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.typography.size.smallest};
  font-weight: 300;
  margin: ${props => props.theme.margin.small} 0;

  span {
    font-weight: 800;
  }
`;

const Row = styled.div`
  display: flex;
`;

const Arrow = styled.img`
  width: 15px;
  fill: ${props => props.theme.colors.primary};
`;

const Close = styled.span`
  color: ${props => props.theme.colors.primary};
  font-size: 30px;
  position: absolute;
  right: 15px;
  top: 0px;
  cursor: pointer;
`;

const Error = styled.h2`
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.typography.size.large};
  font-weight: 600;
  margin: ${props => props.theme.margin.regular} 0;
  text-align: center;
`;

export {
  CardWeatherContainer,
  Location,
  ForecastContainer,
  ForecastWeekDay,
  WeekDay,
  WeekDayTemp,
  WeatherNow,
  ItemsWeatherNow,
  Row,
  Arrow,
  Close,
  Error
};
