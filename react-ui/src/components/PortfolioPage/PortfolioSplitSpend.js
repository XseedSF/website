import React from "react";

import PortfolioHeaderSection from "./PortfolioHeaderSection";
import InfoText from "./InfoText";
import BigImageSection from "./BigImageSection";
import NextCase from "./NextCase";
import Footer from "./Footer";
import Slider from 'react-slick';

import slider1 from '../../images/portfolio/splitspend-slider01.png';
import slider2 from '../../images/portfolio/splitspend-slider02.png';
import slider3 from '../../images/portfolio/splitspend-slider03.png';
import slider4 from '../../images/portfolio/splitspend-slider04.png';

const PortfolioSplitSpend = props =>
  <div>
    <PortfolioHeaderSection {...props.header} />
    <InfoText {...props.infoText1} />
    <BigImageSection styleImage={{width: "auto", height: "100vh"}} bigImage={props.bigImage1} />
    <InfoText {...props.infoText2} />
    <SplitSpendSlider></SplitSpendSlider>
    <InfoText {...props.infoText3} />
    <BigImageSection bigImage={props.bigImage2} />
    <InfoText {...props.infoText4} />
    <BigImageSection bigImage={props.bigImage3} />
    <InfoText {...props.infoText5} />
    <NextCase title={props.nextCase.title} link={props.nextCase.id} />
    <Footer />
  </div>;

  class SplitSpendSlider extends React.Component {
  	render () {
  	    const settingsSplit = {
  	      dots: false,
  	      dotsClass: 'testimonial-dots',
  	      infinite: true,
  	      slidesToShow: 1,
  	      slidesToScroll: 1,
  	      speed: 700
  	    };
  	    return (
  	      <div className='testimonial-slider-container'>

  	      	<Slider {...settingsSplit}>
          		<div className="splitspend-slider-div">
                <img className="splitspend-slider-image" src={slider1} alt="" />
      				</div>
          		<div className="splitspend-slider-div">
          			<img  className="splitspend-slider-image" src={slider2} alt="" />
      				</div>
  						<div className="splitspend-slider-div">
          			<img className="splitspend-slider-image" src={slider3} alt="" />
      				</div>
              <div className="splitspend-slider-div">
          			<img className="splitspend-slider-image"  src={slider4} alt="" />
      				</div>
      			{/*<div>
          			<Testimonial image='http://placekitten.com/g/250/250'
          				name='Jon Doe Jr.' company='Google Inc, CTO' text={text1}
          				/>
      			</div>
      			<div>
          			<Testimonial image='http://placekitten.com/g/250/250'
          				name='Jon Doe Jr.' company='Google Inc, CTO' text={text1}
          				/>
      			</div>*/}
  	        </Slider>
  	      </div>
  	    );
  	}
  };

export default PortfolioSplitSpend;
