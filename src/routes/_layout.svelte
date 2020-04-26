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
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
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

	}
</style>


<div id="ON-siteWrapper">
	<HeaderNav {segment}/>
	<header>
		<article>
			<h1>Your Content Experience Accelerator</h1>
			<p>
				Helping to rapidly create dynamic microsites, portals and support personalised users experiences with the<br /> 
				<a class="extlink" href="https://www.oracle.com/middleware/technologies/content-experience.html" target="_blank" rel="noreferrer">Oracle Content and Experience platform</a>
			</p>
			<button>Learn More</button>
		</article>

		<div id="ON-powered">
			<img id="ON-logoOracle" src="images/logo_oracle.svg" alt="Oracle" />
			<b>POWERED BY</b>
		</div>
		<img class="carousel lazy" 
			src="/images/oce_now_header_img_th.png" 
			data-src="/images/oce_now_header_img.png" 
			data-srcset="/images/oce_now_header_img.png 1x" 
			alt="" />
	</header>

	<Nav {segment}/>

	<div style="min-height:120px;background:#D4D3DE"></div>
</div>




<main>
	<slot></slot>
</main>