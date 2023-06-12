import React from "react";
import { PokeItem } from "../../Interfaces/Interfaces";
import styles from "./PokemonItem.module.css";
const PokemonItem = ({
  name,
  base_experience,
  sprites,
  setSkeleton,
}: PokeItem) => {
  const pokemonSectionRef = React.useRef<HTMLDivElement>(null);

  function handleLoad() {
      setSkeleton(false);
    if (pokemonSectionRef.current)
      pokemonSectionRef.current.style.opacity = "1";
  }

  return (
    <section className={styles.pokemonContainer}>
      <div ref={pokemonSectionRef} style={{ opacity: "0" }}>
        <p> {name}</p>
        <p>{base_experience}</p>
        <img onLoad={handleLoad} src={sprites.front_default} alt={name} />
      </div>
    </section>
  );
};

export default PokemonItem;
