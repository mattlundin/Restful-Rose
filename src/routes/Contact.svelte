<script>
	import Form from '../components/Form.svelte';
	import { fly, fade, slide } from 'svelte/transition';
</script>

<div class="container" transition:slide>
	<div class="contact-header">
		<h1>Contact Us Today!</h1>
		<p>Do you have a particular saying you want? What about an image or art file?</p>
		<p>Fill out the form below and we'll be in touch shortly!</p>
	</div>

	<Form />
</div>

<style>
	.container {
		/* display: flex;
		flex-direction: column;
		align-items: center; */
		justify-content: center;
		height: calc(100vh - 110px - 4rem);
		padding: 0 10px;
	}
	.contact-header {
		text-align: center;
		width: 100%;
		margin-bottom: 2rem;
		margin-top: 4rem;
	}
	.contact-header h1 {
		margin-bottom: 2rem;
		font-family: 'Alex Brush', cursive;
		font-size: clamp(3rem, 10vw, 5rem);
	}
	.contact-header p {
		font-size: 1.3rem;
	}
</style>
