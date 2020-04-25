<script>
	import HeaderNav from '../components/HeaderNav.svelte';
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	header {
		min-height:500px;
		background-image: url("/images/oce_now_header_img.png");
		background-repeat: no-repeat;
		background-size: cover;
		background-position: top;
		position: relative;
	}
	#ON-logo {
		width:125px;
  		margin: 16px 0px 0px 20px;
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
</style>


<div id="ON-siteWrapper">
	<header>
		<img id="ON-logo" src="logo_oce_now.svg" alt="OCE Now" />
		<HeaderNav {segment}/>
		<article>
			<h1>Your Content Experience Accelerator</h1>
			<p>
				Helping to rapidly create dynamic microsites, portals and support personalised users experiences with the<br /> 
				Oracle Content and Experience platform.
			</p>
			<button>Learn More</button>
		</article>

		<div id="ON-powered">
			<img id="ON-logoOracle" src="images/logo_oracle.svg" alt="Oracle" />
			<b>POWERED BY</b>
		</div>
	</header>

	<Nav {segment}/>

	<div style="min-height:120px;background:#D4D3DE"></div>
</div>




<main>
	<slot></slot>
</main>