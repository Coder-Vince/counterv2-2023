import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const Headers = () => {
  return (
    <header>
      <FontAwesomeIcon icon={faRocket} />
      <p>React Counter v2 - Le Retour du Compteur 😡</p>
    </header>
  );
};

export default Headers;
