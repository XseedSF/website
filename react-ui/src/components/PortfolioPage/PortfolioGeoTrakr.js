import React from "react";

import PortfolioHeaderSection from "./PortfolioHeaderSection";
import InfoText from "./InfoText";
import BigImageSection from "./BigImageSection";
import NextCase from "./NextCase";
import Footer from "./Footer";

const PortfolioGeoTrakr = props =>
  <div>
    <PortfolioHeaderSection {...props.header} />
    <InfoText {...props.infoText1} />
    <BigImageSection bigImage={props.bigImage1} style={{ height: "85vh" }} />
    <InfoText {...props.infoText2} />
    <BigImageSection bigImage={props.bigImage2} />
    <InfoText {...props.infoText3} />
    <NextCase title={props.nextCase.title} link={props.nextCase.id} />
    <Footer />
  </div>;

export default PortfolioGeoTrakr;
