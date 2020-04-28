<script>
  import { onMount } from 'svelte';

	//transitions
	import { send, receive } from '@ocenow/transition/crossfade';
	import { fade } from 'svelte/transition';

  onMount(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  });
</script>

<style>
	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}

	.overview {
		padding: 2em 0em;
	}
	.overview ul {
		margin:0px;
		padding:0px;
		display: flex;
		flex-wrap: wrap;
   		justify-content: space-around;
	}
	
	.overview ul li {
		list-style: none;
		display: flex;
		flex-direction: column;
		flex:1;
		margin: 10px;
    	min-width: 240px;
    	max-width: 240px;
	}
	.overview ul li div {
		padding:20px;
		box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.3);
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		flex:1;
	}
	.overview ul li p {
		flex:1;
	}
	.overview ul li img {
		margin:20px;
	}
	h2 {
		text-align: center;
	}
	h3 {
		font-weight:bold;
	}
	button {
		min-height:40px;
		border:0px;
		border-radius: 100px;
		background: #4A67F3;
		color:#fff;
		text-transform: uppercase;
		padding:0px 32px;
		display: flex;
		margin:10px auto 0px;
		justify-content: center;
		cursor:pointer;
		font-size:1em;
		transition: background 0.2s, color 0.2s;
		align-items: center;

	}

	.demo {
		background:#f7f6f9;
		min-height:100px;
		padding: 2em 0em;
	}
	#chrome {
		background-image: url("/galaxy-s9-minimal-mockup.png");
		background-size: contain;
		background-repeat: no-repeat;
		width: 388px;
		margin: 40px auto;
		overflow: hidden;
		height: 808px;
	}
	#globalBody {
		background:#000;
		position: relative;
		border-radius: 20px;
		margin: 40px 14px;
		overflow: hidden;
		height: 735px;
		width: 360px;
	}
</style>

<svelte:head>
	<title>OCE Now - Your Content Experience Accelerator</title>
	<meta name="description" content="The Enterprise Content Management Accelerator For HCM; Providing a true Employee Engagement Platform">
</svelte:head>

<div class="overview">
	<div class="wrapper">
		<h2>Accelerator Features</h2>
		<ul>
			<li>
				<img src="/images/developer.svg" alt="" />
				<div>
					<h3>Personalised Content</h3>
					<p>
						Deliver a personalised experience to your authenticated users.
						Matching user properties with content defined taxonomy datasets. 
					</p>
					<button>Learn More</button>
				</div>
			</li>
			<li>
				<img src="/images/developer.svg" alt="" />
				<div>
					<h3>Document Management</h3>
					<p>Manage, search and share documents.</p>
					<button>Learn More</button>
				</div>
			</li>
			<li>
				<img src="/images/developer.svg" alt="" />
				<div>
					<h3>Conversations</h3>
					<p>Start one to one conversations or connect via video chat.</p>
					<button>Learn More</button>
				</div>
			</li>
			<!--<li>
				<img src="/images/developer.svg" alt="" />
				<div>
					<h3>Social</h3>
					<p>Enable community contributed content and allow comments and likes against content items.</p>
					<button>Learn More</button>
				</div>
			</li>
			<li>
				<img src="/images/developer.svg" alt="" />
				<div>
					<h3>Employee Directory</h3>
					<p>Search easily for user and add them to your contacts list.</p>
					<button>Learn More</button>
				</div>
			</li>
			<li>
				<img src="/images/developer.svg" alt="" />
				<div>
					<h3>Advanced Search</h3>
					<p>Providing advanced smart search or the ability to easily integrate with Google cloud or mindbreeze enterprise search platforms.</p>
					<button>Learn More</button>
				</div>
			</li>
			<li>
				<img src="/images/developer.svg" alt="" />
				<div>
					<h3>Profile Management</h3>
					<p>Manage your user profile and customise your public profile.</p>
					<button>Learn More</button>
				</div>
			</li>
			<li>
				<img src="/images/developer.svg" alt="" />
				<div>
					<h3>Authentication</h3>
					<p>Authenticate with IDCS or enable login and registration support via oAuth to other providers ie facebook.</p>
					<button>Learn More</button>
				</div>
			</li>
			<li>
				<img src="/images/developer.svg" alt="" />
				<div>
					<h3>Notifications</h3>
					<p>Send emails, web or mobile push notifications.</p>
					<button>Learn More</button>
				</div>
			</li>
			<li>
				<img src="/images/developer.svg" alt="" />
				<div>
					<h3>Media Delivery</h3>
					<p>Easily consume and stream video, audio from streaming media providers, to quickly add vlog and podcast capabilites to your site.</p>
					<button>Learn More</button>
				</div>
			</li>-->
		</ul>
	</div>
</div>

<div class="demo">
	<div class="wrapper">
		<h2>OCE Now Preview</h2>
		
		<div id="chrome">
			<div id="globalBody">
				<video width="100%" height="100%" id="hedgehog-video" 
					loop
					data-fps="30" 
					autoplay 
					muted
					playsinline
					autobuffer
					preload="auto" 
					data-source-default-type-mp4="/videos/glow.mp4">

					Your browser does not support the video tag.

					<source src="/videos/glow.mp4" type="video/mp4">
				</video>
			</div>
		</div>

	</div>
</div>