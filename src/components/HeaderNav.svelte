<script>
	export let segment;

	let navWrapper;
		
		
	if (process.browser) {
		window.addEventListener('scroll', () => {
			const currentScroll = window.pageYOffset;
			if (currentScroll === 0) {
				navWrapper.style.backgroundColor = `rgba(15,9,47,0)`;
			} else {
				const opacity = (currentScroll >= 100)? 1: currentScroll/100;
				navWrapper.style.backgroundColor = `rgba(15,9,47,${opacity})`;
			}
		});
	}
</script>

<style>
	#ON-logo {
		width:125px;
		position: relative;
		z-index:10;
	}
	#ON-headerWrapper { 
		position: sticky;
		top: 0px;
		height: 0px;
		z-index:1000;
	}
	nav {
		display: flex;
		padding:12px 12px 12px 20px;
		min-height:40px;	
	    flex-flow: wrap;
	}

	.max {
		flex:1; 
		min-height: 40px;
		display: flex;
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
	@media (max-width: 768px) {
		.max {
			background:rgba(15,9,47,1);
			justify-content: center;
   			padding: 2px;
		}
			
		nav {
			padding:0px;
		}

		.navItems {
			display: none;
		}
	}
</style>

<div id="ON-headerWrapper">
	<nav bind:this="{navWrapper}">
		<div class="max">
			<img id="ON-logo" src="logo_oce_now.svg" alt="OCE Now" />
		</div>
		<div class="navItems">
			<ul>
				<li><a class:active="{segment === undefined}" aria-current='{segment === undefined ? "page" : undefined}' href='.'>Content Management</a></li>
				<li><a class:active="{segment === 'oda'}" aria-current='{segment === "oda" ? "page" : undefined}' href='https://oda.ocenow.com'>Digital Assistant</a></li>
				<li><a class:active="{segment === 'hcm'}" aria-current='{segment === "hcm" ? "page" : undefined}' href='https://hcm.ocenow.com'>Human Capital Management</a></li>

				<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
					the blog data when we hover over the link or tap it on a touchscreen -->
				<li><a class:active="{segment === 'blog'}" rel=prefetch aria-current='{segment === "blog" ? "page" : undefined}' href='https://blog.ocenow.com'>Blog</a></li>
			</ul>
		</div>
	</nav>
</div>