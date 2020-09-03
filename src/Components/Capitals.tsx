import React from "react";
import styled from "styled-components";
import { GET_ALL } from "../api";

const Wrapper = styled.div`
  width: 46rem;

  &::before {
    content: "";
    display: block;
    height: 1px;
    width: 100%;
    background-color: #fff;
    margin: 3rem 0 1.5rem 0;
  }
`;

const Title = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  padding: 0 5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 40px 40px 1fr 40px 40px 1fr;
  gap: 15px;
  padding: 0 5rem;
  margin-top: 20px;
`;

const Labels = styled.span`
  font-size: 1rem;
  font-weight: 300;
`;

const Info = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
`;

const capitals = [
  "Rio de Janeiro",
  "São Paulo",
  "Belo Horizonte",
  "Brasília",
  "Belém",
  "Salvador",
  "Curitiba",
  "Fortaleza",
  "Manaus",
  "João Pessoa",
];

const Capitals = () => {
  const [data, setData] = React.useState<any>(null);

  React.useEffect(() => {
    async function fetchAll() {
      let result: Array<{}> = [];
      const responses = await Promise.all(
        capitals.map(async (capital) => {
          const { url, headers } = GET_ALL(capital);
          const response = await fetch(url, { headers });
          const json = response.json();
          return json;
        })
      );
      responses.forEach((item) => {
        result.push({
          city: item.location.city,
          low: item.forecasts[0].low,
          high: item.forecasts[0].high,
        });
      });
      setData(result);
    }
    fetchAll();
  }, []);

  return (
    <Wrapper>
      <Title>Capitais</Title>
      {data ? (
        <Grid>
          <Labels>Min</Labels>
          <Labels>Max</Labels>
          <Labels></Labels>
          <Labels>Min</Labels>
          <Labels>Max</Labels>
          <Labels></Labels>
          {data.map((item: any) => (
            <React.Fragment key={item.city}>
              <Info>{item.low}º</Info>
              <Info>{item.high}º</Info>
              <Info>{item.city}</Info>
            </React.Fragment>
          ))}
        </Grid>
      ) : (
        <p>Carregando...</p>
      )}
    </Wrapper>
  );
};

export default Capitals;
