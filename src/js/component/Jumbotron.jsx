import React from 'react';
import styles from "../component/Jumbotron.module.css";
import pokemon from "../../img/pokemon.png";
import CustomButton from "../component/CustomButton.jsx";


const Jumbotron = () => {
  return (
    <div className={`d-flex align-items-center justify-content-center ${styles.jumbotron}`}>
      <div className={`card w-80 mt-3 ms-3 me-3 ${styles.card}`}>
        <div className="card-body text-center">
          <img src={pokemon} className="img-fluid" alt="Pokemon" />
          <p className="card-text">Welcome to the wonderful world of Pokémon, where adventure awaits around every corner! Embark on an epic journey through vibrant regions filled with diverse Pokémon species, from the lush forests of Kanto to the icy peaks of Sinnoh. Along the way, you'll meet fascinating characters, forge unbreakable bonds with your Pokémon companions, and strive to become the ultimate Pokémon Master.

            As you traverse through towns, cities, and wild landscapes, you'll encounter challenging Gym Leaders, formidable rivals, and legendary Pokémon that will test your skills and determination. But fear not! With the guidance of Professor Oak and other wise mentors, as well as the support of your loyal Pokémon team, you'll overcome any obstacle that stands in your way.

            Whether you're a seasoned Trainer or just starting your Pokémon journey, there's always something new to discover in this enchanting world. So grab your Poké Ball, prepare your team, and get ready to embark on an unforgettable adventure filled with friendship, excitement, and endless possibilities! Pokémon awaits, Trainer - are you ready to catch 'em all</p>
          <CustomButton />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
