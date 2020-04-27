<script>
	
	//svelte
	import { onDestroy, onMount, tick } from 'svelte';
	
	import HeaderNav from '../components/HeaderNav.svelte';
	import Nav from '../components/Nav.svelte';

	export let segment;

	
	//on mount set defaults
	onMount(async() => {
		console.info('[Layout][Mount]');
		
		window.lazyLoader();
	});
</script>

<style>
	header {
		min-height:500px;
		/*background-image: url("/images/oce_now_header_img_th.png");*/
		background-repeat: no-repeat;
		background-size: contain;
		background-position: top;
		position: relative;
		background-color:#130d32;
		overflow: hidden;
	}
	main {
		position: relative;
	}

	#ON-powered {
		position: absolute;
		bottom:10px;
		right:10px;
		background: #0F092F;
		border-radius: 8px;
		padding:12px;
		z-index:10;
	}
	
	#ON-powered b {
		display: block;
		text-align: center;
		color:#fff;
		font-size: 0.7em;
	}
	
	#ON-logoOracle {
		width:105px;
	}
	
	header article {
		margin-top:100px;
		margin-left:40px;
		margin-right:40px;
		background:rgba(14,8,44,0.3);
		padding:20px;
		border-radius: 12px;
		max-width:522px;
		font-family: 'nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		position: relative;
		z-index:10;	
	}
	
	header article h1 {
		color:#fff;
		font-weight:bold;
		font-size:1.7em;
	}
	
	header article p {
		color:#A1D5FF;
		font-size: 1.2em;
	}

	button {
		min-height:50px;
		border:0px;
		border-radius: 100px;
		background: #4A67F3;
		color:#fff;
		text-transform: uppercase;
		padding:0px 32px;
		display: flex;
		margin:10px 0px;
		justify-content: center;
		cursor:pointer;
		font-size:1.04em;
		transition: background 0.2s, color 0.2s;
		align-items: center;

	}

	article a {
		color:#ea1b22;
	}
	header .carousel {
		position: absolute;
		top:0px;
		left:0px;
		right:0px;
		bottom:0px;
		width:100%;
		z-index:1;
	}
	img.lazy {
		opacity:0
	}

	img {
		opacity:1;
		transition:opacity 1s;
	}
	.extlink::after {
		background-color: #ea1b22;
		-webkit-mask-image: url(/images/external-link-alt-solid.svg);
		mask-image: url(/images/external-link-alt-solid.svg);
		width: 12px;
		content: " ";
		display: inline-block;
		height: 12px;
		margin-left: 4px;
	}
	.extlink {
		display: block;
	}

	@media (max-width: 768px) {
		header article {
			margin-top:60px;
			margin-left:20px;
			margin-right:20px;
		}
		#ON-powered {
			left: 50%;
			right: auto;
			margin-left: -75px;
			width: 150px;
			text-align: center;
			padding: 0px;
		}

		button {
			min-height:40px;
			margin-top:20px;
		}

		.extlink {
			display: inline;
		}
	}

	:global(.wrapper) {
		max-width: 1000px;
		margin:0px auto;
	}

	h2 {
		text-align: center;
		color:#011835;
	}

	footer {
		background-color:#130d32;
	}
	.compatibility {
		padding:20px;
	}
	.compatibility ul {
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-line-pack: center;
		align-content: center;
		-ms-flex-pack: center;
		justify-content: center;
		padding: 1rem 0;
		margin: 0 auto;
		max-width: 40em;
		list-style: none;
	}
	.compatibility ul li {
		display: -ms-flexbox;
		display: flex;
		margin: 1rem;
		padding: 0;
		-ms-flex-align: center;
		align-items: center;
		font-size: 1rem;
		font-weight: 300;
		color: #fff;
		opacity: .4;
		transition: opacity .2s ease-out;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
	.compatibility ul img {
		display: block;
		width: 2em;
		height: 1.5em;
		object-fit: contain;
		margin-right: .325em;
	}
	.compatibility h4 {
		font-size: 1.25em;
		font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
		text-align: center;
		color: #fff;
		opacity: .4;
		font-weight: 300;
	}
</style>


<div id="ON-siteWrapper">
	<HeaderNav {segment}/>
	<header>
	
		<div class="wrapper">
			<article>
				<h1>Your Content Experience Accelerator</h1>
				<p>
					Helping to rapidly create dynamic microsites, portals and support personalised users experiences with the 
					<a class="extlink" href="https://www.oracle.com/middleware/technologies/content-experience.html" target="_blank" rel="noreferrer">Oracle Content and Experience platform</a>
				</p>
				<button>Learn More</button>
			</article>
			
			<div class="wrapper" style="position:absolute;bottom:0px;width:100%;">
				<div id="ON-powered">
					<img id="ON-logoOracle" src="images/logo_oracle.svg" alt="Powered by Oracle" />
					<b>POWERED BY</b>
				</div>
			</div>
		</div>
		<img class="carousel lazy" 
			src="/images/oce_now_header_img_th.png" 
			data-src="/images/oce_now_header_img.png" 
			data-srcset="/images/oce_now_header_img.png 1x" 
			alt="Oracle Content And Experience" />
	</header>

	<div class="wrapper">
		<Nav {segment}/>
	</div>
	<div style="background:#cfe5ff; text-align:center;padding:40px;">
		<div class="wrapper">
			<h2>Modern Components Designed for an Enterprise User Experience</h2>
			<p>
				Leveraging our experience with web development to provide responsive interactive and reusable components designed for the Oracle Content and Experience platform
			</p>
		</div>
	</div>
</div>




<main>
	<slot></slot>
</main>



<footer>
	<div class="wrapper compatibility">
		<h4>Use Standalone or With Your Favorite Framework</h4>

		<ul>
						
			<li>
				<img src="/images/logo-react.svg" alt="" />
				React
			</li>
			
			<li>
				<img src="/images/logo-vue.svg" alt="" />
				Vue
			</li>
			
			<li>
				<img src="/images/logo-angular.svg" alt="" />
				Angular
			</li>
			
			<li>
				<img src="/images/logo-svelte.svg" alt="" />
				Svelte
			</li>
			
			<li>
				<img src="/images/logo-electron.svg" alt="" />
				Electron
			</li>

			<li>
				<img src="/images/logo-bootstrap.svg" alt="" />
				Bootstrap
			</li>
			
			<li>
				<img src="/images/logo-zurb.svg" alt="" />
				Foundation
			</li>
			
			<li>
				<img src="/images/logo-jquery.svg" alt="" />
				jQuery
			</li>
			<li>
				<img src="/images/logo-jquery.svg" alt="" />
				JET
			</li>
			
		</ul>
	</div>
</footer>