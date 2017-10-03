import React from "react";

import PortfolioHeaderSection from "./PortfolioHeaderSection";
import InfoText from "./InfoText";
import BigImageSection from "./BigImageSection";
import NextCase from "./NextCase";
import Footer from "./Footer";

const PortfolioAntel = props =>
  <div>
    <PortfolioHeaderSection {...props.header} />
    <InfoText {...props.infoText1} />
    <BigImageSection bigImage={props.bigImage1} style={{ height: "85vh" }} />
    <InfoText {...props.infoText2} />
    <BigImageSection bigImage={props.bigImage2} style={{ height: "85vh" }} />
    <InfoText {...props.infoText3} />
    <BigImageSection bigImage={props.bigImage3} />
    <NextCase title={props.nextCase.title} link={props.nextCase.id} />
    <Footer />
  </div>;

export default PortfolioAntel;
