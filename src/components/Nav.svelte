<script>
	export let segment;
</script>

<style>
	nav {
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	li a:hover {
		color:#000;
	}
	li a,
	[aria-current] {
		position: relative;
		display: inline-block;
	}
	li a::after {
		position: absolute;
		content: '';
		width: calc(100% - 2em);
		height: 2px;
		background-color: #fff;
		display: block;
		bottom: 0px;
		transition: background 0.2s;
	}
	li:hover a::after,
	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 2em);
		height: 2px;
		background-color: #0089F7;
		display: block;
		bottom: 0px;
	}

	a {
		text-decoration: none;
		padding: 1em 1em;
		display: block;
		text-align: center
	}
	a.active {
		font-weight: bold;
	}
	

	@media (max-width: 768px) {
		nav {
    		overflow-y: hidden;
			overflow-x: auto;
		}
		nav ul { 
			height: 50px;
			display: flex;
		}	
		nav ul li {
			float: none;
			white-space: nowrap;
		} 
	}
</style>

<nav>
	<ul>
		<li><a class:active="{segment === undefined}" aria-current='{segment === undefined ? "page" : undefined}' href='.'>Overview</a></li>
		<li><a class:active="{segment === 'solutions'}"  aria-current='{segment === "solutions" ? "page" : undefined}' href='solutions'>Solutions</a></li>
		<li><a class:active="{segment === 'pricing'}"  aria-current='{segment === "pricing" ? "page" : undefined}' href='pricing'>Pricing</a></li>
		<li><a class:active="{segment === 'demos'}"  aria-current='{segment === "demos" ? "page" : undefined}' href='demos'>Demos</a></li>
		<li><a class:active="{segment === 'contact'}"  aria-current='{segment === "contact" ? "page" : undefined}' href='contact'>Contact Us</a></li>
	</ul>
</nav>
