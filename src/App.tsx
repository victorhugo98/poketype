import React from "react";
import Error from "./Components/Error/Error";
import "./App.css";
import useHandleFetch from "./Components/useHandleFetch";
import Loading from "./Components/Loading/Loading";
import Pokemon from "./Components/Pokemon/Pokemon";
import { PokeProps } from "./Interfaces/Interfaces";
import Buttons from "./Components/Button/HandleButtons";

function App() {
  const { request, data, loading, error } = useHandleFetch<PokeProps>();

  React.useEffect(() => {
    async function getData() {
      const { jsonResponse } = await request(
        "https://pokeapi.co/api/v2/pokemon/"
      );
    }
    getData();
  }, [request]);

  React.useEffect(() => {
    window.scrollTo({top:0})
  },[data])

  if (error) return <Error>{error}</Error>;
  if (loading) return <Loading />;
  if (data && data.results instanceof Array)
    return (
      <>
        {data.results.map((results, index) => (
          <Pokemon results={results} key={index} />
        ))}
        <Buttons data={data} request={request} />
      </>
    );
  return null;
}

export default App;
