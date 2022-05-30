<script>
	import { onMount } from 'svelte';
	import RoseIcon from '../routes/images/rose.png';

	// Show mobile icon and display menu
	let showMobileMenu = false;

	// List of navigation items
	const navItems = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/About' },
		{ label: 'Products', href: '/Products' },
		{ label: 'Contact', href: '/Contact' }
	];

	// Mobile menu click event handler
	const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);

	// Media match query handler
	const mediaQueryHandler = (e) => {
		// Reset mobile state
		if (!e.matches) {
			showMobileMenu = false;
		}
	};

	// Attach media query listener on mount hook
	onMount(() => {
		const mediaListener = window.matchMedia('(max-width: 767px)');

		mediaListener.addListener(mediaQueryHandler);
	});
</script>

<nav>
	<div class="logo">
		<img src={RoseIcon} alt="" />
	</div>
	<div class="inner">
		<div on:click={handleMobileIconClick} class={`mobile-icon${showMobileMenu ? ' active' : ''}`}>
			<div class="middle-line" />
		</div>
		<ul class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
			{#each navItems as item}
				<!-- on:click={mediaQueryHandler} closes mobile menu on nav item click -->
				<li on:click={mediaQueryHandler}>
					<a href={item.href}>{item.label}</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style>
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 70px;
		width: 100vw;
		padding: 0 2rem;
		background-color: #d3d3d3;
		box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.25);
	}
	.logo {
		height: 60px;
		width: 60px;
	}
	.logo img {
		height: 100%;
		width: 100%;
	}
	.inner {
		max-width: 980px;
		padding-left: 20px;
		padding-right: 20px;
		margin-left: auto;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		height: 100%;
	}

	.mobile-icon {
		width: 25px;
		height: 14px;
		position: relative;
		user-select: none;
		cursor: pointer;
	}

	.mobile-icon:after,
	.mobile-icon:before,
	.middle-line {
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		background-color: #000;
		transition: all 0.4s;
		transform-origin: center;
	}

	.mobile-icon:before,
	.middle-line {
		top: 0;
	}

	.mobile-icon:after,
	.middle-line {
		bottom: 0;
	}

	.mobile-icon:before {
		width: 66%;
	}

	.mobile-icon:after {
		width: 33%;
	}

	.middle-line {
		margin: auto;
	}

	.mobile-icon:hover:before,
	.mobile-icon:hover:after,
	.mobile-icon.active:before,
	.mobile-icon.active:after,
	.mobile-icon.active .middle-line {
		width: 100%;
	}

	.mobile-icon.active:before,
	.mobile-icon.active:after {
		top: 50%;
		transform: rotate(-45deg);
	}

	.mobile-icon.active .middle-line {
		transform: rotate(45deg);
	}

	.navbar-list {
		display: none;
		width: 100%;
		justify-content: space-between;
		margin: 0;
		padding: 0 40px;
	}

	.navbar-list.mobile {
		background-color: rgba(0, 0, 0, 0.8);
		color: #fff;
		position: fixed;
		display: block;
		height: calc(100% - 70px);
		bottom: 0;
		left: 0;
		z-index: 10;
	}
	.navbar-list.mobile a {
		color: #fff;
	}

	.navbar-list li {
		list-style-type: none;
		position: relative;
	}

	.navbar-list li:before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1px;
		background-color: #424245;
	}

	.navbar-list a {
		color: #000;
		text-decoration: none;
		display: flex;
		height: 45px;
		align-items: center;
		padding: 0 10px;
		font-size: 1.6rem;
		transition: 0.2s ease-in-out;
	}
	.navbar-list a:hover {
		transform: scale(1.1);
	}

	@media only screen and (min-width: 767px) {
		.mobile-icon {
			display: none;
		}

		.navbar-list {
			display: flex;
			padding: 0;
		}
		.navbar-list li {
			text-align: center;
		}

		.navbar-list a {
			display: inline-flex;
		}
	}
</style>
