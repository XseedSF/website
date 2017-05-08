import React from 'react';

import PortfolioMelancia from './PortfolioMelancia';
import melancia from '../../images/portfolio/melancia.jpg';
import melanciaLogo from '../../images/portfolio/melanciaLogo.png';

const PortfolioPage = ({ match }) => {

	const renderPortfolio = (id) => {
		switch (id) {
			case '1':
				return <PortfolioMelancia {...portfolios[id]} />
				break;
			case '2':
				return <PortfolioMelancia {...portfolios[id]} />
				break;
			default:
				return (
					<div>
						No se encuentra el proyecto
					</div>
				)
				break;
		}
	};

	return (
		<div>
			{ renderPortfolio(match.params.portfolioId) }
		</div>
	)
}

export default PortfolioPage;

const portfolios = {
	'1': {
		'name': 'Melancia',
		'header': {
			'iconImage': melanciaLogo,
			'name': 'Melancia',
			'title': 'Life quality',
			'background': melancia,
			'title2': 'improved & ensured.',
			'subtitle': 'APP / WEBSITE',
			'description': 'In 2014 we participated in the creation of a new platfomr meant to transform the way corporations distribute, locate, and merchandise products with massive sales.',
		},
		'infoText1': {
			'smallTitle': 'background',
			'title': 'A real cool title goes here',
			'text': `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem orci, aliquet non mauris pretium, faucibus viverra purus. Praesent faucibus, neque at suscipit ullamcorper, nulla arcu volutpat mauris, ac ornare libero ligula maximus ligula. Vestibulum non orci nibh. Aenean non libero nibh. Nulla auctor diam placerat auctor dictum. Morbi dolor sapien, consequat ut mi sed, condimentum vestibulum orci. Praesent elit enim, pretium nec elementum nec, commodo sed quam. Nullam eleifend condimentum risus ut viverra. Fusce tincidunt bibendum mi eget convallis. Nulla facilisi. Vestibulum sagittis, nisl a rhoncus dignissim, lacus tortor scelerisque felis, nec tincidunt nibh ligula vitae justo. Aenean a lacus tortor. Integer non diam ut mauris mollis porta eget sed sem. Donec nec sodales metus. Suspendisse id justo tristique, ornare mauris ac, luctus turpis.

Aliquam erat volutpat. Nunc sed sem eget lorem facilisis bibendum. Etiam a nulla porttitor, fringilla turpis in, aliquam erat. Mauris non tellus augue. Integer ultricies sed mauris vel rhoncus. Aenean tincidunt enim at congue venenatis. Proin faucibus mollis arcu, id elementum mi imperdiet nec. Etiam vitae ultrices urna.`,
		},
		'bigImage1': melancia,
		'infoText2': {
			'smallTitle': 'the task',
			'title': 'A real cool title goes here',
			'text': `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem orci, aliquet non mauris pretium, faucibus viverra purus. Praesent faucibus, neque at suscipit ullamcorper, nulla arcu volutpat mauris, ac ornare libero ligula maximus ligula. Vestibulum non orci nibh. Aenean non libero nibh. Nulla auctor diam placerat auctor dictum. Morbi dolor sapien, consequat ut mi sed, condimentum vestibulum orci. Praesent elit enim, pretium nec elementum nec, commodo sed quam. Nullam eleifend condimentum risus ut viverra. Fusce tincidunt bibendum mi eget convallis. Nulla facilisi. Vestibulum sagittis, nisl a rhoncus dignissim, lacus tortor scelerisque felis, nec tincidunt nibh ligula vitae justo. Aenean a lacus tortor. Integer non diam ut mauris mollis porta eget sed sem. Donec nec sodales metus. Suspendisse id justo tristique, ornare mauris ac, luctus turpis.

Aliquam erat volutpat. Nunc sed sem eget lorem facilisis bibendum. Etiam a nulla porttitor, fringilla turpis in, aliquam erat. Mauris non tellus augue. Integer ultricies sed mauris vel rhoncus. Aenean tincidunt enim at congue venenatis. Proin faucibus mollis arcu, id elementum mi imperdiet nec. Etiam vitae ultrices urna.`,
		},
		'bigImage2': melancia,
		'infoText3': {
			'smallTitle': 'mobile',
			'title': 'Moving from gathering to optimizing',
			'text': `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem orci, aliquet non mauris pretium, faucibus viverra purus. Praesent faucibus, neque at suscipit ullamcorper, nulla arcu volutpat mauris, ac ornare libero ligula maximus ligula. Vestibulum non orci nibh. Aenean non libero nibh. Nulla auctor diam placerat auctor dictum. Morbi dolor sapien, consequat ut mi sed, condimentum vestibulum orci. Praesent elit enim, pretium nec elementum nec, commodo sed quam. Nullam eleifend condimentum risus ut viverra. Fusce tincidunt bibendum mi eget convallis. Nulla facilisi. Vestibulum sagittis, nisl a rhoncus dignissim, lacus tortor scelerisque felis, nec tincidunt nibh ligula vitae justo. Aenean a lacus tortor. Integer non diam ut mauris mollis porta eget sed sem. Donec nec sodales metus. Suspendisse id justo tristique, ornare mauris ac, luctus turpis.

Aliquam erat volutpat. Nunc sed sem eget lorem facilisis bibendum. Etiam a nulla porttitor, fringilla turpis in, aliquam erat. Mauris non tellus augue. Integer ultricies sed mauris vel rhoncus. Aenean tincidunt enim at congue venenatis. Proin faucibus mollis arcu, id elementum mi imperdiet nec. Etiam vitae ultrices urna.`,
		},
	},
	'2': {
		'name': 'Sura',
		'header': {
			'iconImage': melanciaLogo,
			'name': 'Melancia',
			'title': 'Life quality',
			'background': melancia,
			'title2': 'improved & ensured.',
			'subtitle': 'APP / WEBSITE',
			'description': 'In 2014 we participated in the creation of a new platfomr meant to transform the way corporations distribute, locate, and merchandise products with massive sales.',
		},
		'infoText1': {
			'smallTitle': 'background',
			'title': 'A real cool title goes here',
			'text': `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem orci, aliquet non mauris pretium, faucibus viverra purus. Praesent faucibus, neque at suscipit ullamcorper, nulla arcu volutpat mauris, ac ornare libero ligula maximus ligula. Vestibulum non orci nibh. Aenean non libero nibh. Nulla auctor diam placerat auctor dictum. Morbi dolor sapien, consequat ut mi sed, condimentum vestibulum orci. Praesent elit enim, pretium nec elementum nec, commodo sed quam. Nullam eleifend condimentum risus ut viverra. Fusce tincidunt bibendum mi eget convallis. Nulla facilisi. Vestibulum sagittis, nisl a rhoncus dignissim, lacus tortor scelerisque felis, nec tincidunt nibh ligula vitae justo. Aenean a lacus tortor. Integer non diam ut mauris mollis porta eget sed sem. Donec nec sodales metus. Suspendisse id justo tristique, ornare mauris ac, luctus turpis.

Aliquam erat volutpat. Nunc sed sem eget lorem facilisis bibendum. Etiam a nulla porttitor, fringilla turpis in, aliquam erat. Mauris non tellus augue. Integer ultricies sed mauris vel rhoncus. Aenean tincidunt enim at congue venenatis. Proin faucibus mollis arcu, id elementum mi imperdiet nec. Etiam vitae ultrices urna.`,
		},
		'bigImage1': melancia,
		'infoText2': {
			'smallTitle': 'the task',
			'title': 'A real cool title goes here',
			'text': `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem orci, aliquet non mauris pretium, faucibus viverra purus. Praesent faucibus, neque at suscipit ullamcorper, nulla arcu volutpat mauris, ac ornare libero ligula maximus ligula. Vestibulum non orci nibh. Aenean non libero nibh. Nulla auctor diam placerat auctor dictum. Morbi dolor sapien, consequat ut mi sed, condimentum vestibulum orci. Praesent elit enim, pretium nec elementum nec, commodo sed quam. Nullam eleifend condimentum risus ut viverra. Fusce tincidunt bibendum mi eget convallis. Nulla facilisi. Vestibulum sagittis, nisl a rhoncus dignissim, lacus tortor scelerisque felis, nec tincidunt nibh ligula vitae justo. Aenean a lacus tortor. Integer non diam ut mauris mollis porta eget sed sem. Donec nec sodales metus. Suspendisse id justo tristique, ornare mauris ac, luctus turpis.

Aliquam erat volutpat. Nunc sed sem eget lorem facilisis bibendum. Etiam a nulla porttitor, fringilla turpis in, aliquam erat. Mauris non tellus augue. Integer ultricies sed mauris vel rhoncus. Aenean tincidunt enim at congue venenatis. Proin faucibus mollis arcu, id elementum mi imperdiet nec. Etiam vitae ultrices urna.`,
		},
		'bigImage2': melancia,
		'infoText3': {
			'smallTitle': 'mobile',
			'title': 'Moving from gathering to optimizing',
			'text': `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem orci, aliquet non mauris pretium, faucibus viverra purus. Praesent faucibus, neque at suscipit ullamcorper, nulla arcu volutpat mauris, ac ornare libero ligula maximus ligula. Vestibulum non orci nibh. Aenean non libero nibh. Nulla auctor diam placerat auctor dictum. Morbi dolor sapien, consequat ut mi sed, condimentum vestibulum orci. Praesent elit enim, pretium nec elementum nec, commodo sed quam. Nullam eleifend condimentum risus ut viverra. Fusce tincidunt bibendum mi eget convallis. Nulla facilisi. Vestibulum sagittis, nisl a rhoncus dignissim, lacus tortor scelerisque felis, nec tincidunt nibh ligula vitae justo. Aenean a lacus tortor. Integer non diam ut mauris mollis porta eget sed sem. Donec nec sodales metus. Suspendisse id justo tristique, ornare mauris ac, luctus turpis.

Aliquam erat volutpat. Nunc sed sem eget lorem facilisis bibendum. Etiam a nulla porttitor, fringilla turpis in, aliquam erat. Mauris non tellus augue. Integer ultricies sed mauris vel rhoncus. Aenean tincidunt enim at congue venenatis. Proin faucibus mollis arcu, id elementum mi imperdiet nec. Etiam vitae ultrices urna.`,
		},
	}
};
