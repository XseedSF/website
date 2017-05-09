import React from 'react';
import { Link } from 'react-router-dom';

import proyecto from '../images/proyecto.png';

const Brands = [
  { image: require('../images/brand01.png'), id: 1 },
  { image: require('../images/brand02.png'), id: 2 },
  { image: require('../images/brand03.png'), id: 3 },
  { image: require('../images/brand02.png'), id: 4 },
  { image: require('../images/brand01.png'), id: 5 },
  { image: require('../images/brand03.png'), id: 6 },
  { image: require('../images/brand03.png'), id: 7 },
  { image: require('../images/brand02.png'), id: 8 },
  { image: require('../images/brand01.png'), id: 9 }
];

const Portfolio = () => (
	<section className="portfolio-container">
		<div className="portfolio-projects">
			
			<div className="portfolio-project-container p-content portfolio-project-container-left-element">
				<Link to={'/portfolio/1'}>
					<img className="portfolio-img" 
		     		alt="How we work" src={proyecto} draggable="false" />
		     	<div className="p-overlay">
		     		<h4 className="portfolio-project-name"> GuTrade - Mobile & Web App / Website </h4>
		     	</div>
		    </Link>
			</div>

			
			
			
			<div className="portfolio-project-container p-content portfolio-project-container-left-element">
				<Link to={'/portfolio/3'}>
					<img className="portfolio-img" 
		     		alt="How we work" src={proyecto} draggable="false" />
		     	<div className="p-overlay">
		     		<h4 className="portfolio-project-name"> Sura - App & Web </h4>
		     	</div>
		    </Link>
			</div>

			<div className="portfolio-project-container p-content portfolio-project-container-left-element">
				
					<img className="portfolio-img" 
		     		alt="How we work" src={proyecto} draggable="false" />
		     	<div className="p-overlay">
		     		<h4 className="portfolio-project-name"> Bimbo </h4>
		     	</div>
			</div>

			<div id="portfolio-project-title" className="portfolio-project-container" >
				<h1 className="portfolio-our-work"> Our Work </h1>
				<p className="portfolio-our-work-sub">Take an in-depth look at the things</p>
				<p className="portfolio-our-work-sub">we do and how we do them</p>
			</div>

			<div className="portfolio-project-container p-content">
				<Link to={'/portfolio/2'}>
					<img className="portfolio-img" 
		     		alt="How we work" src={proyecto} draggable="false" />
		     	<div className="p-overlay">
		     		<h4 className="portfolio-project-name"> Melancia - App & Web </h4>
	     		</div>
	     	</Link>
			</div>
			<div className="portfolio-project-container p-content">
				<img className="portfolio-img" 
		     		alt="How we work" src={proyecto} draggable="false" />
		     	<div className="p-overlay">
		     		<h4 className="portfolio-project-name"> Bimbo - App & Web </h4>
		     	</div>
			</div>
		</div>
		<div className="clear"> </div>
		<div className="portfolio-client-cont">
			<h2 className="portfolio-client-cont-title"> Other clients we're very proud of</h2>
			<div className="portfolio-client-list-cont">
				{Brands.map((brand) => 
					<div className="portfolio-client-logo-cont" key={brand.id}>
						<img className="portfolio-logo-img" 
		     				alt="How we work" src={brand.image} draggable="false" />
					</div>
				)}
			</div>
		
		</div>
	</section>
);

export default Portfolio;