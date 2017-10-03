import React from "react";

import portfolios from "./portfoliosData";

import PortfolioGuTrade from "./PortfolioGuTrade";
import PortfolioMelancia from "./PortfolioMelancia";
import PortfolioSura from "./PortfolioSura";
import PortfolioGeoTrakr from "./PortfolioGeoTrakr";
import PortfolioSalus from "./PortfolioSalus";
import PortfolioCocalCola from "./PortfolioCocalCola";
import PortfolioMemory from "./PortfolioMemory";
import PortfolioScotiabank from "./PortfolioScotiabank";
import PortfolioBimbo from "./PortfolioBimbo";
import PortfolioAntel from "./PortfolioAntel";
import PortfolioSuraCRM from "./PortfolioSuraCRM";
import PortfolioSuraAgro from "./PortfolioSuraAgro";

const PortfolioPage = ({ match }) => {
  const renderPortfolio = id => {
    switch (id) {
      case "1":
        return <PortfolioGuTrade {...portfolios[id]} />;
      case "2":
        return <PortfolioMelancia {...portfolios[id]} />;
      case "3":
        return <PortfolioSura {...portfolios[id]} />;
      case "4":
        return <PortfolioGeoTrakr {...portfolios[id]} />;
      case "5":
        return <PortfolioSalus {...portfolios[id]} />;
      case "6":
        return <PortfolioCocalCola {...portfolios[id]} />;
      case "7":
        return <PortfolioMemory {...portfolios[id]} />;
      case "8":
        return <PortfolioScotiabank {...portfolios[id]} />;
      case "9":
        return <PortfolioBimbo {...portfolios[id]} />;
      case "10":
        return <PortfolioAntel {...portfolios[id]} />;
      case "11":
        return <PortfolioSuraCRM {...portfolios[id]} />;
      case "12":
        return <PortfolioSuraAgro {...portfolios[id]} />;

      default:
        return (
          <div>
            No se encuentra el proyecto
          </div>
        );
    }
  };

  return (
    <div>
      {renderPortfolio(match.params.portfolioId)}
    </div>
  );
};

export default PortfolioPage;
