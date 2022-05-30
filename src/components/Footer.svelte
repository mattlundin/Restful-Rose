<script>
	import { fade } from 'svelte/transition';
</script>

<footer out:fade={{ duration: 0.1 }}>
	<p>Copyright © 2022 Restful Rose</p>
</footer>

<style>
	footer {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 40px;
		width: 100vw;
		background-color: #d3d3d3;
		color: #000;
	}
</style>
