<script>
	import { fly, slide } from 'svelte/transition';
</script>

<div class="container" transition:slide>
	<!-- <RoseBackground /> -->
	<div class="main">
		<h1 in:fly={{ x: -500, duration: 650, delay: 100 }}>Restful Rose</h1>
		<p in:fly={{ x: -500, duration: 600, delay: 300 }}>A gift for every occasion...</p>
	</div>
</div>

<style>
	.container {
		height: calc(100vh - 110px);
		width: 100%;
		background-color: #000;
		background-image: url('https://images.unsplash.com/photo-1516565349308-c76fe36a115c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069');
		background-position: center;
		background-repeat: no-repeat;

		/* object-fit: cover; */
	}
	.main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		text-align: center;
		height: 100%;
		font-family: 'Alex Brush', cursive;
		font-weight: normal;
		color: #fff;
	}
	.main h1 {
		font-size: clamp(6rem, 10vw, 8.5rem);
		font-weight: normal;
	}
	.main p {
		margin-top: 2rem;
		font-size: 3rem;
	}
</style>
