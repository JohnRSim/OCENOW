<script>
	export let segment;
</script>

<style>
	nav {
		float: right;
		margin: 12px;
	}
	ul {
		margin: 0;
		padding: 0;
		display: flex;
	}

	li {
		list-style: none;
		margin:0px 10px;	
	    align-self: center;
	}

	a {
		background:#0F092F;
		border-radius: 100px;
		padding:10px 18px;
		color:#fff;
		text-transform: uppercase;
		text-decoration: none;
		font-size:0.8em;
		transition: background 0.3s;
		display: block;
		text-align: center;
	}
	a:hover,
	a.active {
		background:#0089F7;
	}
	a.active {
		font-weight: bold;
	}
</style>

<nav>
	<ul>
		<li><a class:active="{segment === undefined}" aria-current='{segment === undefined ? "page" : undefined}' href='.'>Content Management</a></li>
		<li><a class:active="{segment === 'oda'}" aria-current='{segment === "oda" ? "page" : undefined}' href='about'>Digital Assistant</a></li>
		<li><a class:active="{segment === 'hcm'}" aria-current='{segment === "hcm" ? "page" : undefined}' href='about'>Human Capital Management</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a class:active="{segment === 'blog'}" rel=prefetch aria-current='{segment === "blog" ? "page" : undefined}' href='blog'>Blog</a></li>
	</ul>
</nav>
