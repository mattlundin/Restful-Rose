<script>
	// svelte
	import { fly, fade, slide } from 'svelte/transition';
	import { onDestroy } from 'svelte';

	// images
	import momTurquoise from '../routes/images/mom-thank-you-turquoise.webp';
	import infinity from '../routes/images/infinity.webp';
	import momEternalHope from '../routes/images/mom-eternal-hope.webp';
	import momHug from '../routes/images/mom-hug.webp';
	import momBlack from '../routes/images/mom-thank-you-black.webp';
	import momPink from '../routes/images/mom-thank-you-pink.webp';
	// import { src } from 'svelte/internal';

	// image slider
	const carouselPhotos = [
		{ momTurquoise },
		{ infinity },
		{ momEternalHope },
		{ momHug },
		{ momBlack },
		{ momPink }
	];

	// let index = 0;

	// index = (index + 1) % carouselPhotos.length;
	// onDestroy(() => clearInterval(interval));

	// const interval = setInterval(() => (counter += 1), 1000);
</script>

<div class="container" transition:slide>
	<div class="products-header">
		<h1>Products They'll Love</h1>
		<h3>
			Loved by 1000s of people. Our one of a kind JewelCards are the perfect way to say how you
			really feel. Made of the highest quality materials throughout and shipped from the USA fast
			makes it the perfect gift experience. Select your style
		</h3>
	</div>
	<div class="products-container">
		<div class="product-box">
			<div class="product-img">
				<img src={momTurquoise} alt="" />
			</div>
			<h3>Dear Mom - Thank you for everything! Love Knot Necklace</h3>
			<button
				><a
					href="https://restfulrose.com/products/restful-rose-dmteallove-knot-necklace?variant=41828776050888"
					target="_blank">View Product</a
				></button
			>
		</div>
		<div class="product-box">
			<div class="product-img">
				<img src={infinity} alt="" />
			</div>
			<h3>I love you to infinity and beyond! Infinity Necklace</h3>
			<button
				><a
					href="https://restfulrose.com/products/restful-rose-loveyoutoinfinity?variant=41829394251976"
					target="_blank">View Product</a
				></button
			>
		</div>
		<div class="product-box">
			<div class="product-img">
				<img src={momEternalHope} alt="" />
			</div>
			<h3>Dear Mom - Thank you for everything! Eternal Hope Necklace</h3>
			<button
				><a
					href="https://restfulrose.com/products/restful-rose-dmeternalhopenecklace?variant=41828756947144"
					target="_blank">View Product</a
				></button
			>
		</div>
		<div class="product-box">
			<div class="product-img">
				<img src={momHug} alt="" />
			</div>
			<h3>Mom Hug! Two heart Necklace</h3>
			<button
				><a
					href="https://restfulrose.com/products/restful-rose-momhugnecklace?variant=41828887789768"
					target="_blank">View Product</a
				></button
			>
		</div>
		<div class="product-box">
			<div class="product-img">
				<img src={momBlack} alt="" />
			</div>
			<h3>Dear Mom - Thank you for everything! Love Knot Necklace</h3>
			<button
				><a
					href="https://restfulrose.com/products/restful-rose-dmblacklove-knot-necklace?variant=41828802461896"
					target="_blank"
				>
					View Product</a
				></button
			>
		</div>
		<div class="product-box">
			<div class="product-img">
				<img src={momPink} alt="" />
			</div>
			<h3>Dear Mom - Thank you for everything! Love Knot Necklace</h3>
			<button
				><a
					href="https://restfulrose.com/products/restful-rose-dmbrown-love-knot-necklace?variant=41828802920648"
					target="_blank">View Product</a
				></button
			>
		</div>
	</div>
</div>

<style>
	/* .slider-container {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 50vh;
		width: 100%;
	}
	.slider-container img {
		height: 400px;
		width: 400px;
	} */
	.products-header {
		text-align: center;
		margin: 0 auto;
		padding: 4rem;
	}
	.products-header h1 {
		margin-bottom: 2rem;
		font-family: 'Alex Brush', cursive;
		font-size: clamp(3rem, 10vw, 5rem);
	}
	.products-header h1 {
		max-width: 900px;
		margin: 0 auto 2rem;
	}
	.products-container {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	.product-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 470px;
		width: 350px;
		margin: 2rem;
		background-color: #d3d3d3;
	}
	.product-box h3 {
		text-align: center;
		margin: 10px 0;
		font-size: 1.4rem;
	}
	.product-box button {
		margin-top: auto;
		margin-bottom: 10px;
		padding: 5px;
		border: 0.5px solid #000;
		border-radius: 5px;
		cursor: pointer;
		transition: 0.3s ease;
	}
	.product-box button:hover {
		box-shadow: 2px 5px 8px rgba(0, 0, 0, 0.4);
	}
	.product-box button a {
		color: #000;
		text-decoration: none;
	}
	.product-img {
		height: 350px;
		width: 350px;
	}
	.product-img img {
		height: 100%;
		width: 100%;
	}

	@media only screen and (max-width: 555px) {
		.products-header {
			text-align: center;
			padding: 4rem 1rem;
		}
	}
</style>
