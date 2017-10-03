import React from "react";

import PortfolioHeaderSection from "./PortfolioHeaderSection";
import InfoText from "./InfoText";
import BigImageSection from "./BigImageSection";
import TwoImagesSection from "./TwoImagesSection";
import SeparatorLine from "./SeparatorLine";
import NextCase from "./NextCase";
import Footer from "./Footer";

const PortfolioSura = props =>
  <div>
    <PortfolioHeaderSection {...props.header} />
    <InfoText {...props.infoText1} />
    <SeparatorLine />
    <InfoText {...props.infoText2} />
    <BigImageSection bigImage={props.bigImage1} />
    <InfoText {...props.infoText3} />
    <TwoImagesSection
      image={props.bigImage2}
      classCont="p-big-two-image-section"
      classInner="p-two-image"
    />
    <InfoText {...props.infoText4} />
    <NextCase title={props.nextCase.title} link={props.nextCase.id} />
    <Footer />
  </div>;

export default PortfolioSura;
