import React from "react";

import PortfolioHeaderSection from "./PortfolioHeaderSection";
import InfoText from "./InfoText";
import BigImageSection from "./BigImageSection";
import NextCase from "./NextCase";
import Footer from "./Footer";

const PortfolioMemory = props =>
  <div>
    <PortfolioHeaderSection {...props.header} />
    <InfoText {...props.infoText1} />
    <BigImageSection bigImage={props.bigImage1} />
    <InfoText {...props.infoText2} />
    <NextCase title={props.nextCase.title} link={props.nextCase.id} />
    <Footer />
  </div>;

export default PortfolioMemory;
