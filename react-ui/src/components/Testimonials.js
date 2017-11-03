import React from 'react';
import Slider from 'react-slick';
import gaston from '../images/gaston.jpg';
import fernando from '../images/fernando.png';
import virginia from '../images/virginia.png';
const textGaston = "We've been partners with Xseed from the very beginning. Their vast knowledge on Lean methodology, made the product grow according to the needs of our clients, and allowed us to make an effective monetization of development."
const textFernando = "The team at Xseed is excellent, both on a technical and professional level. They met our development standards, fitted our needs, and are always bringing innovation to our business";
const textVirginia = "XSeedSF complements SplitSpend wonderfully. Santiago, Andres, and Diego are brilliant, and working with them has been such a pleasure. We had our first meeting remotely where I had the opportunity to explain to them our vision for SplitSpend. The team at XSeedSF understood what we wanted after just one meeting and went to work on the project. The finished product is designed to be beautiful, simple and intuitive – XSeedSF really hit the mark! Santiago even redesigned our company logo and the new look perfectly exemplifies the essence of SplitSpend. I cannot thank the team at XSeedSF enough for their truly outstanding work.";

const Testimonial = (props) => {
	return (
		<div className="testimonial-inside-slider">
			<div className="testimonial-div-image">
				<img className="testimonial-img-circle" src={props.image} alt="testimonio"/>
			</div>
			<div className="testimonial-div-text">
				<p className="testimonial-text">
					{props.text}
				</p>
				<br className="testimonial-break-line" />
				<p className="testimonial-name"> {props.name} </p>
				<p className="testimonial-company"> {props.company} </p>
			</div>
		</div>
	)
}

class TestimonialsSlider extends React.Component {
	render () {
	    const settings = {
	      dots: true,
	      dotsClass: 'testimonial-dots',
	      infinite: true,
	      slidesToShow: 1,
	      slidesToScroll: 1,
	      //autoplay: true,
	      //autoplaySpeed: 3000,
	      speed: 700
	    };
	    return (
	      <div className='testimonial-slider-container'>

	      	<Slider {...settings}>
        		<div>
        			<Testimonial image={fernando}
        				name='Fernando Jorge' company='Seguros Sura, CTO' text={textFernando}
        				/>
    				</div>
        		<div>
        			<Testimonial image={gaston}
        				name='Gastón Legnani' company='Gu Trade, CTO' text={textGaston}
        				/>
    				</div>
						<div>
        			<Testimonial image={virginia}
        				name='Virginia Puccio' company='SplitSpend, Co-founder &amp; CEO' text={textVirginia}
        				/>
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

const TestimonialsSection = () => (
	<section className="testimonials-container">
		<div className="contact-container-caption">
			<div >
				<h1 className="testimonials-title"> Testimonials </h1>
				<div className="contact-divider"></div>
				<p className="contact-subtitle"> Know the impact, first hand from our very own </p>
				<p className="contact-subtitle"> partners in crime </p>
			</div>
			<TestimonialsSlider />
		</div>
	</section>
);

export default TestimonialsSection;
