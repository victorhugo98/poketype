import React from "react";
import { PokeItem, ResultProps } from "../../Interfaces/Interfaces";
import useHandleFetch from "../useHandleFetch";
import PokemonItem from "./PokemonItem";
import Skeleton from "../Skeleton/Skeleton";

const Pokemon = (props: ResultProps) => {
  const { results } = props;
  const { request, data } = useHandleFetch<PokeItem>();
  const [skeleton, setSkeleton] = React.useState(true);

  React.useEffect(() => {
    async function getData() {
      await request(results.url);
    }
    getData();
  }, []);

  if (data && "name" in data && "base_experience" in data)
    return (
      <>
        <PokemonItem
          setSkeleton={setSkeleton}
          name={data.name}
          base_experience={data.base_experience}
          sprites={data.sprites}
        />
      </>
    );

  if (skeleton) {
    return <Skeleton />;
  }

  return null;
};

export default Pokemon;
