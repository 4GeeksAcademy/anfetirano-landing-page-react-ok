import React from 'react';
import styles from "../component/Button.module.css";
import pokeballImage from "../../img/pokebola.png";
const CustomButton = () => {
    return (
        <button
            className={styles.pokeballButton}
            style={{ backgroundImage: `url(${pokeballImage})` }}
        ></button>
    );
};

export default CustomButton;
