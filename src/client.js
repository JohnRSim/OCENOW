import * as sapper from '@sapper/app';

//initialise sapper app
sapper.start({
	target: document.querySelector('#sapper')
}).then(() => {
	console.info('[OCENow][Ready]');
});

//prefeetch all routes improve app performance
sapper.prefetchRoutes();