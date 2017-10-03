import React from "react";
import { Link } from "react-router-dom";

import proyecto from "../images/proyecto.png";
import proyectoGu from "../images/caseGu.png";
import proyectoMelancia from "../images/caseMelancia.png";
import proyectoSura from "../images/caseSura.png";

import caseAntel from "../images/caseAntel.png";
import caseBimbo from "../images/caseBimbo.png";
import caseCoca from "../images/caseCoca.png";
import caseGeotrakr from "../images/caseGeotrakr.png";
import caseMemory from "../images/caseMemory.png";
import caseSalus from "../images/caseSalus.png";
import caseScotia from "../images/caseScotia.png";
import caseSuraAgro from "../images/caseSuraAgro.png";
import caseSuraCRM from "../images/caseSuraCRM.png";

const Brands = [
  { image: require("../images/clients_01.png"), id: 1 },
  { image: require("../images/clients_02.png"), id: 2 },
  { image: require("../images/clients_03.png"), id: 3 },
  { image: require("../images/clients_04.png"), id: 4 },
  { image: require("../images/clients_05.png"), id: 5 },
  { image: require("../images/clients_06.png"), id: 6 }
];

const Portfolio = () =>
  <section className="portfolio-container">
    <div className="portfolio-projects">

      <div className="portfolio-project-container p-content portfolio-project-container-left-element">
        <Link to={"/portfolio/1"}>
          <img
            className="portfolio-img"
            alt="How we work"
            src={proyectoGu}
            draggable="false"
          />
          <div className="p-overlay">
            <h4 className="portfolio-project-name">
              {" "}GuTrade - Mobile & Web App / Website{" "}
            </h4>
          </div>
        </Link>
      </div>

      <div className="portfolio-project-container p-content portfolio-project-container-left-element">
        <Link to={"/portfolio/3"}>
          <img
            className="portfolio-img"
            alt="How we work"
            src={proyectoSura}
            draggable="false"
          />
          <div className="p-overlay">
            <h4 className="portfolio-project-name"> Sura - App & Web </h4>
          </div>
        </Link>
      </div>

      {/*<div className="portfolio-project-container p-content portfolio-project-container-left-element">

								<img className="portfolio-img"
					     		alt="How we work" src={proyecto} draggable="false" />
					     	<div className="p-overlay">
					     		<h4 className="portfolio-project-name"> Bimbo </h4>
					     	</div>
						</div>*/}

      <div className="portfolio-project-container p-content portfolio-project-container-left-element">
        <Link to={"/portfolio/2"}>
          <img
            className="portfolio-img"
            alt="How we work"
            src={proyectoMelancia}
            draggable="false"
          />
          <div className="p-overlay">
            <h4 className="portfolio-project-name"> Melancia - App & Web </h4>
          </div>
        </Link>
      </div>

      <div className="portfolio-project-container p-content portfolio-project-container-left-element">
        <Link to={"/portfolio/4"}>
          <img
            className="portfolio-img"
            alt="How we work"
            src={caseGeotrakr}
            draggable="false"
          />
          <div className="p-overlay">
            <h4 className="portfolio-project-name"> Geotrakr - Mobile App </h4>
          </div>
        </Link>
      </div>

      <div className="portfolio-project-container p-content portfolio-project-container-left-element">
        <Link to={"/portfolio/5"}>
          <img
            className="portfolio-img"
            alt="How we work"
            src={caseSalus}
            draggable="false"
          />
          <div className="p-overlay">
            <h4 className="portfolio-project-name"> Salus - Web App </h4>
          </div>
        </Link>
      </div>

      <div
        style={{ marginBottom: "150px" }}
        className="portfolio-project-container p-content portfolio-project-container-left-element "
      >
        <Link to={"/portfolio/6"}>
          <img
            className="portfolio-img"
            alt="How we work"
            src={caseCoca}
            draggable="false"
          />
          <div className="p-overlay">
            <h4 className="portfolio-project-name"> Coca Cola - Web App </h4>
          </div>
        </Link>
      </div>

      <div id="portfolio-project-title" className="portfolio-project-container">
        <h1 className="portfolio-our-work"> Our Work </h1>
        <p className="portfolio-our-work-sub">Digital solutions, </p>
        <p className="portfolio-our-work-sub">created for and by humans </p>
      </div>

      <div className="portfolio-project-container p-content">
        <Link to={"/portfolio/7"}>
          <img
            className="portfolio-img"
            alt="How we work"
            src={caseMemory}
            draggable="false"
          />
          <div className="p-overlay">
            <h4 className="portfolio-project-name"> Memory - Web App </h4>
          </div>
        </Link>
      </div>

      <div className="portfolio-project-container p-content">
        <Link to={"/portfolio/8"}>
          <img
            className="portfolio-img"
            alt="How we work"
            src={caseScotia}
            draggable="false"
          />
          <div className="p-overlay">
            <h4 className="portfolio-project-name"> Scotiabank - Web App </h4>
          </div>
        </Link>
      </div>

      <div className="portfolio-project-container p-content">
        <Link to={"/portfolio/9"}>
          <img
            className="portfolio-img"
            alt="How we work"
            src={caseBimbo}
            draggable="false"
          />
          <div className="p-overlay">
            <h4 className="portfolio-project-name">
              {" "}Bimbo - Mobile & Web App{" "}
            </h4>
          </div>
        </Link>
      </div>

      <div className="portfolio-project-container p-content">
        <Link to={"/portfolio/10"}>
          <img
            className="portfolio-img"
            alt="How we work"
            src={caseAntel}
            draggable="false"
          />
          <div className="p-overlay">
            <h4 className="portfolio-project-name">
              {" "}Vera TV - Mobile & Web App / Website{" "}
            </h4>
          </div>
        </Link>
      </div>

      <div className="portfolio-project-container p-content">
        <Link to={"/portfolio/11"}>
          <img
            className="portfolio-img"
            alt="How we work"
            src={caseSuraCRM}
            draggable="false"
          />
          <div className="p-overlay">
            <h4 className="portfolio-project-name"> Sura - Web App </h4>
          </div>
        </Link>
      </div>

      <div className="portfolio-project-container p-content">
        <Link to={"/portfolio/12"}>
          <img
            className="portfolio-img"
            alt="How we work"
            src={caseSuraAgro}
            draggable="false"
          />
          <div className="p-overlay">
            <h4 className="portfolio-project-name">
              {" "}Sura - Mobile & Web App / Website{" "}
            </h4>
          </div>
        </Link>
      </div>

      {/*<div className="portfolio-project-container p-content">
							<img className="portfolio-img"
					     		alt="How we work" src={proyecto} draggable="false" />
					     	<div className="p-overlay">
					     		<h4 className="portfolio-project-name"> Bimbo - App & Web </h4>
					     	</div>
						</div>*/}
    </div>
    <div className="clear"> </div>
    <div className="portfolio-client-cont">
      <h2 className="portfolio-client-cont-title">
        {" "}{`Other clients we're very proud of`}
      </h2>
      <div className="portfolio-client-list-cont">
        {Brands.map(brand =>
          <div className="portfolio-client-logo-cont" key={brand.id}>
            <img
              className="portfolio-logo-img"
              alt="How we work"
              src={brand.image}
              draggable="false"
            />
          </div>
        )}
      </div>

    </div>
  </section>;

export default Portfolio;
