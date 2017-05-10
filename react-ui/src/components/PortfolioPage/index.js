import React from 'react';

import PortfolioGuTrade from './PortfolioGuTrade';
import guTradeBg from '../../images/portfolio/gutrade-bg.png';
import guTradeLogo from '../../images/portfolio/gutrade-logo.png';
import guTradeMockup1 from '../../images/portfolio/gutrade-mockups.png';
import guTradeVideo from '../../videos/xseed720.mp4';

import PortfolioMelancia from './PortfolioMelancia';
import melanciaBg from '../../images/portfolio/melancia-bg.png';
import melanciaLogo from '../../images/portfolio/melancia-logo.png';
import melanciaMockup1 from '../../images/portfolio/melancia-mockup-1.png';
import melanciaMockup2 from '../../images/portfolio/melancia-mockup-2.png';

import PortfolioSura from './PortfolioSura';
import suraBg from '../../images/portfolio/sura-bg.png';
import suraLogo from '../../images/portfolio/sura-logo.png';
import suraMockups from '../../images/portfolio/sura-mockups.png';
import suraWeb01 from '../../images/portfolio/sura-website01.png';
import suraWeb02 from '../../images/portfolio/sura-website02.png';

const portfolios = {
	'1': {
		'name': 'GuTrade',
		'header': {
			'iconImage': guTradeLogo,
			'background': guTradeBg,
			'name': 'GuTrade',
			'title': 'Redefining product visibility',
			'title2': 'through merchandising',
			'subtitle': 'Mobile & Web App / Website',
			'description': 'In 2014 we participated in the creation of a new platfomr meant to transform the way corporations distribute, locate, and merchandise products with massive sales.',
		},
		'infoText1': {
			'smallTitle': 'background',
			'title': 'A real cool title goes here',
			'text': `GuTrade decided to team up with us after noting the need for structure inside companies with massive product sales. We took their ideas, and brought them to life.

Merchants have a major role in the growth of products, for they are the employees present at the Points of Sale and get access to key information, used by marketing and sales departments to create strategies.  All too often this information got lost in translation, and it even took weeks for handwritten papers to get to the right department.`,
		},
		'videoUrl': guTradeVideo,
		'infoText2': {
			'smallTitle': 'The task',
			'title': 'Re-thinking the old ways',
			'text': `Our alliance brings whats important to the forefront. The biggest flaw in companies’ M.O. was present in the attainment of information regarding their products.  We decided to create a simple, reliable, and quick platform, aimed to benefit directly the merchants and the sales/marketing department, and ultimately, their products.`
		},
		'bigImage1': guTradeMockup1,
		'infoText3': {
			'smallTitle': '????',
			'title': 'Who, where, what',
			'text': `The first stage in our solution was creating a mobile app for merchants, where they can locate through GPS where the P.O.S. are, gather, and save all the information regarding their product in the moment, with or without Internet Connection. As for team leaders, or any kind of higher-ups in companies, the mobile app allows them to keep track of where their products are, and also know if they were delivered in time and place.`
		},
		'infoText4': {
			'smallTitle': '????',
			'title': 'Growth & organization',
			'text': `The second stage came as an addition and a necessity that appeared from the usage of the mobile platform.

The web app adds task management and resource optimization to GuTrade. Higher-ups in the company are now allowed to create tasks, assign routes and notes to merchants, while keeping track of their performance in all of the previous tasks.

The mobile app is also updated and expanded to interact with the desktop app, merchants are now able to receive all the things they should do in a day, straight from their managers, in a clean, straightforward and simple way.`
		},
		'bigImage2': guTradeMockup1,
		'infoText5': {
			'smallTitle': '????',
			'title': 'Who, where, what',
			'text': `The last stage in the development of GuTrade is where the meat of the product really is. The two previous platforms now open a new dimension where information about the status of the product in each P.O.S. is available in real time. Processing and showing this info in a visual and understandable way is the latest layer of GuTrade, where the sales and marketing team find the biggest benefit, take action according to the status of their product with no lags, no misunderstandings, and in a simple way.`
		},
		'nextCase': {
			'id': '2',
			'title': 'MELANCIA: Bringing the mall to a smartphone'
		}
	},
	'2': {
		'name': 'Melancia',
		'header': {
			'iconImage': melanciaLogo,
			'background': melanciaBg,
			'name': 'Melancia',
			'title': 'Life quality',
			'title2': 'improved & ensured.',
			'subtitle': 'App / Website',
			'description': 'In 2014 we participated in the creation of a new platfomr meant to transform the way corporations distribute, locate, and merchandise products with massive sales.',
		},
		'infoText1': {
			'smallTitle': 'background',
			'title': 'A real cool title goes here',
			'text': `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem orci, aliquet non mauris pretium, faucibus viverra purus. Praesent faucibus, neque at suscipit ullamcorper, nulla arcu volutpat mauris, ac ornare libero ligula maximus ligula. Vestibulum non orci nibh. Aenean non libero nibh. Nulla auctor diam placerat auctor dictum. Morbi dolor sapien, consequat ut mi sed, condimentum vestibulum orci. Praesent elit enim, pretium nec elementum nec, commodo sed quam. Nullam eleifend condimentum risus ut viverra. Fusce tincidunt bibendum mi eget convallis. Nulla facilisi. Vestibulum sagittis, nisl a rhoncus dignissim, lacus tortor scelerisque felis, nec tincidunt nibh ligula vitae justo. Aenean a lacus tortor. Integer non diam ut mauris mollis porta eget sed sem. Donec nec sodales metus. Suspendisse id justo tristique, ornare mauris ac, luctus turpis.

Aliquam erat volutpat. Nunc sed sem eget lorem facilisis bibendum. Etiam a nulla porttitor, fringilla turpis in, aliquam erat. Mauris non tellus augue. Integer ultricies sed mauris vel rhoncus. Aenean tincidunt enim at congue venenatis. Proin faucibus mollis arcu, id elementum mi imperdiet nec. Etiam vitae ultrices urna.`,
		},
		'bigImage1': melanciaMockup1,
		'infoText2': {
			'smallTitle': 'the task',
			'title': 'A real cool title goes here',
			'text': `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem orci, aliquet non mauris pretium, faucibus viverra purus. Praesent faucibus, neque at suscipit ullamcorper, nulla arcu volutpat mauris, ac ornare libero ligula maximus ligula. Vestibulum non orci nibh. Aenean non libero nibh. Nulla auctor diam placerat auctor dictum. Morbi dolor sapien, consequat ut mi sed, condimentum vestibulum orci. Praesent elit enim, pretium nec elementum nec, commodo sed quam. Nullam eleifend condimentum risus ut viverra. Fusce tincidunt bibendum mi eget convallis. Nulla facilisi. Vestibulum sagittis, nisl a rhoncus dignissim, lacus tortor scelerisque felis, nec tincidunt nibh ligula vitae justo. Aenean a lacus tortor. Integer non diam ut mauris mollis porta eget sed sem. Donec nec sodales metus. Suspendisse id justo tristique, ornare mauris ac, luctus turpis.

Aliquam erat volutpat. Nunc sed sem eget lorem facilisis bibendum. Etiam a nulla porttitor, fringilla turpis in, aliquam erat. Mauris non tellus augue. Integer ultricies sed mauris vel rhoncus. Aenean tincidunt enim at congue venenatis. Proin faucibus mollis arcu, id elementum mi imperdiet nec. Etiam vitae ultrices urna.`,
		},
		'bigImage2': melanciaMockup2,
		'infoText3': {
			'smallTitle': 'mobile',
			'title': 'Moving from gathering to optimizing',
			'text': `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem orci, aliquet non mauris pretium, faucibus viverra purus. Praesent faucibus, neque at suscipit ullamcorper, nulla arcu volutpat mauris, ac ornare libero ligula maximus ligula. Vestibulum non orci nibh. Aenean non libero nibh. Nulla auctor diam placerat auctor dictum. Morbi dolor sapien, consequat ut mi sed, condimentum vestibulum orci. Praesent elit enim, pretium nec elementum nec, commodo sed quam. Nullam eleifend condimentum risus ut viverra. Fusce tincidunt bibendum mi eget convallis. Nulla facilisi. Vestibulum sagittis, nisl a rhoncus dignissim, lacus tortor scelerisque felis, nec tincidunt nibh ligula vitae justo. Aenean a lacus tortor. Integer non diam ut mauris mollis porta eget sed sem. Donec nec sodales metus. Suspendisse id justo tristique, ornare mauris ac, luctus turpis.

Aliquam erat volutpat. Nunc sed sem eget lorem facilisis bibendum. Etiam a nulla porttitor, fringilla turpis in, aliquam erat. Mauris non tellus augue. Integer ultricies sed mauris vel rhoncus. Aenean tincidunt enim at congue venenatis. Proin faucibus mollis arcu, id elementum mi imperdiet nec. Etiam vitae ultrices urna.`,
		},
		'nextCase': {
			'id': '3',
			'title': 'SURA: Creating safety in an instant'
		}
	},
	'3': {
		'name': 'Sura',
		'header': {
			'iconImage': suraLogo,
			'background': suraBg,
			'name': 'Melancia',
			'title': 'Life quality',
			'title2': 'improved & ensured.',
			'subtitle': 'App / Website',
			'description': 'In 2014 we participated in the creation of a new platfomr meant to transform the way corporations distribute, locate, and merchandise products with massive sales.',
		},
		'infoText1': {
			'smallTitle': 'background',
			'title': 'A real cool title goes here',
			'text': `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem orci, aliquet non mauris pretium, faucibus viverra purus. Praesent faucibus, neque at suscipit ullamcorper, nulla arcu volutpat mauris, ac ornare libero ligula maximus ligula. Vestibulum non orci nibh. Aenean non libero nibh. Nulla auctor diam placerat auctor dictum. Morbi dolor sapien, consequat ut mi sed, condimentum vestibulum orci. Praesent elit enim, pretium nec elementum nec, commodo sed quam. Nullam eleifend condimentum risus ut viverra. Fusce tincidunt bibendum mi eget convallis. Nulla facilisi. Vestibulum sagittis, nisl a rhoncus dignissim, lacus tortor scelerisque felis, nec tincidunt nibh ligula vitae justo. Aenean a lacus tortor. Integer non diam ut mauris mollis porta eget sed sem. Donec nec sodales metus. Suspendisse id justo tristique, ornare mauris ac, luctus turpis.

Aliquam erat volutpat. Nunc sed sem eget lorem facilisis bibendum. Etiam a nulla porttitor, fringilla turpis in, aliquam erat. Mauris non tellus augue. Integer ultricies sed mauris vel rhoncus. Aenean tincidunt enim at congue venenatis. Proin faucibus mollis arcu, id elementum mi imperdiet nec. Etiam vitae ultrices urna.`,
		},
		'bigImage1': suraMockups,
		'infoText2': {
			'smallTitle': 'the task',
			'title': 'A real cool title goes here',
			'text': `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem orci, aliquet non mauris pretium, faucibus viverra purus. Praesent faucibus, neque at suscipit ullamcorper, nulla arcu volutpat mauris, ac ornare libero ligula maximus ligula. Vestibulum non orci nibh. Aenean non libero nibh. Nulla auctor diam placerat auctor dictum. Morbi dolor sapien, consequat ut mi sed, condimentum vestibulum orci. Praesent elit enim, pretium nec elementum nec, commodo sed quam. Nullam eleifend condimentum risus ut viverra. Fusce tincidunt bibendum mi eget convallis. Nulla facilisi. Vestibulum sagittis, nisl a rhoncus dignissim, lacus tortor scelerisque felis, nec tincidunt nibh ligula vitae justo. Aenean a lacus tortor. Integer non diam ut mauris mollis porta eget sed sem. Donec nec sodales metus. Suspendisse id justo tristique, ornare mauris ac, luctus turpis.

Aliquam erat volutpat. Nunc sed sem eget lorem facilisis bibendum. Etiam a nulla porttitor, fringilla turpis in, aliquam erat. Mauris non tellus augue. Integer ultricies sed mauris vel rhoncus. Aenean tincidunt enim at congue venenatis. Proin faucibus mollis arcu, id elementum mi imperdiet nec. Etiam vitae ultrices urna.`,
		},
		'bigImage2': {
			'image1': suraWeb01,
			'image2': suraWeb02,
		},
		'infoText3': {
			'smallTitle': 'mobile',
			'title': 'Moving from gathering to optimizing',
			'text': `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem orci, aliquet non mauris pretium, faucibus viverra purus. Praesent faucibus, neque at suscipit ullamcorper, nulla arcu volutpat mauris, ac ornare libero ligula maximus ligula. Vestibulum non orci nibh. Aenean non libero nibh. Nulla auctor diam placerat auctor dictum. Morbi dolor sapien, consequat ut mi sed, condimentum vestibulum orci. Praesent elit enim, pretium nec elementum nec, commodo sed quam. Nullam eleifend condimentum risus ut viverra. Fusce tincidunt bibendum mi eget convallis. Nulla facilisi. Vestibulum sagittis, nisl a rhoncus dignissim, lacus tortor scelerisque felis, nec tincidunt nibh ligula vitae justo. Aenean a lacus tortor. Integer non diam ut mauris mollis porta eget sed sem. Donec nec sodales metus. Suspendisse id justo tristique, ornare mauris ac, luctus turpis.

Aliquam erat volutpat. Nunc sed sem eget lorem facilisis bibendum. Etiam a nulla porttitor, fringilla turpis in, aliquam erat. Mauris non tellus augue. Integer ultricies sed mauris vel rhoncus. Aenean tincidunt enim at congue venenatis. Proin faucibus mollis arcu, id elementum mi imperdiet nec. Etiam vitae ultrices urna.`,
		},
		'nextCase': {
			'id': '1',
			'title': 'GUTRADE: Merchandising from a new perspective'
		}
	}
};

const PortfolioPage = ({ match }) => {

	const renderPortfolio = (id) => {
		switch (id) {
			case '1':
				return <PortfolioGuTrade {...portfolios[id]} />
			case '2':
				return <PortfolioMelancia {...portfolios[id]} />
			case '3':
				return <PortfolioSura {...portfolios[id]} />
			default:
				return (
					<div>
						No se encuentra el proyecto
					</div>
				)
		}
	};

	return (
		<div>
			{ renderPortfolio(match.params.portfolioId) }
		</div>
	)
}

export default PortfolioPage;
