<script>
	// Svelte Transitions
	import { fly, fade, slide } from 'svelte/transition';

	//images
	import diamond from '../routes/images/diamond.png';
	import diamondRing from '../routes/images/diamond-ring.png';
	import creditCards from '../routes/images/credit-cards.png';
	import RoseIcon from '../routes/images/rose.png';
</script>

<div class="container" transition:slide>
	<div class="img-container">
		<img
			src="https://d2f04zsu3x5x6p.cloudfront.net/fulfillment/storefronts/17597/72d91fa8-070c-4fb8-9573-060187adcebf.jpg"
			alt="Restful Rose Logo"
		/>
	</div>
	<div class="gray-box" transition:fade={{ duration: 200 }}>
		<div class="rose-box">
			<img src={RoseIcon} alt="rose icon" in:fade={{ duration: 700 }} />
		</div>
		<div class="rose-box">
			<img src={RoseIcon} alt="rose icon" in:fade={{ duration: 700 }} />
		</div>
	</div>
	<div class="row">
		<div class="column">
			<h1>Content Header</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex minima maiores quis ipsum
				eligendi repellendus architecto ad sapiente neque. Expedita architecto nisi iusto, corporis
				corrupti ducimus quo voluptatem. Expedita, esse.
			</p>
			<br />
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. At, tempora. Molestiae quidem ut
				recusandae quas iusto neque, eum nostrum, dolorum tenetur totam asperiores officiis?
				Accusantium harum itaque molestiae cupiditate, dolore a fuga ipsum vel debitis consequuntur,
				doloremque placeat, corrupti iste.
			</p>
		</div>
		<div class="column">
			<h1>Content Header</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex minima maiores quis ipsum
				eligendi repellendus architecto ad sapiente neque. Expedita architecto nisi iusto, corporis
				corrupti ducimus quo voluptatem. Expedita, esse.
			</p>
			<br />
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. At, tempora. Molestiae quidem ut
				recusandae quas iusto neque, eum nostrum, dolorum tenetur totam asperiores officiis?
				Accusantium harum itaque molestiae cupiditate, dolore a fuga ipsum vel debitis consequuntur,
				doloremque placeat, corrupti iste.
			</p>
		</div>
	</div>
	<div class="about-info">
		<div class="box-container">
			<div class="box" id="box">
				<div class="img-box">
					<img src={diamond} alt="diamond" />
				</div>
				<h3>Something for Everyone</h3>
				<p>
					We hope when you shop our unique products at Restful Rose, you'll find the perfect gift
					for everyone on your list.
				</p>
			</div>
			<div class="box">
				<div class="img-box">
					<img src={diamondRing} alt="diamond ring" />
				</div>
				<h3>Satisfaction Guaranteed</h3>
				<p>
					When you buy from Restful Rose, you can trust you'll get a great product! We stand behind
					every shipped item.
				</p>
			</div>
			<div class="box">
				<div class="img-box">
					<img src={creditCards} alt="credit cards" />
				</div>
				<h3>Secure Shopping</h3>
				<p>
					When it comes to security, Restful Rose uses best in class technology to protect your
					transactions and your privacy
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	.gray-box {
		position: absolute;
		top: 28%;
		left: 0;
		display: flex;
		justify-content: space-between;
		height: 250px;
		width: 100vw;
		padding: 0 5%;
		background-color: #a0a0a0;
		z-index: -10;
	}
	.rose-box {
		height: 100%;
		max-width: 300px;
	}
	.rose-box img {
		height: 100%;
		width: 100%;
	}
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0rem calc((100vw - 1300px) / 2);
	}

	.img-container {
		max-width: 450px;
		height: auto;
		margin: 4rem 3rem 3rem;
		background-color: #000;
		border-radius: 15px;
	}
	.img-container img {
		height: 100%;
		width: 100%;
		border-radius: 15px;
		box-shadow: 3px 9px 15px rgba(0, 0, 0, 0.7);
	}
	.row {
		display: flex;
	}
	.column {
		justify-content: space-around;
		max-width: 450px;
		margin: 0 2rem;
		padding: 1rem;
	}
	.column h1 {
		text-align: center;
		margin-bottom: 1rem;
	}
	.about-info {
		width: 100%;
		padding: 2rem;
		margin: 2rem 0;
		background-color: #a0a0a0;
	}
	.box-container {
		display: flex;
		justify-content: space-around;
	}
	.box {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: auto;
		max-width: 300px;
		margin: 10px;
		padding: 10px;
		background-color: #ececec;
		border-radius: 15px;
	}
	.img-box {
		height: 75px;
		width: 85px;
		margin: 1rem 0;
	}
	.img-box img {
		height: 100%;
		width: 100%;
	}
	.box h3 {
		text-align: center;
		margin-bottom: 1rem;
		font-size: 1.5rem;
	}
	.box p {
		text-align: center;
		padding-bottom: 1rem;
	}
	@media screen and (max-width: 1100px) {
		.gray-box {
			height: 150px;
		}
		.img-container {
			max-width: 350px;
		}
		@media screen and (max-width: 768px) {
			.gray-box {
				top: 22%;
				padding: 0;
			}
			.img-container {
				max-width: 250px;
			}
			.column {
				width: 50%;
				margin: 0;
				padding: 1rem;
			}
		}
		@media screen and (max-width: 555px) {
			.gray-box {
				position: relative;
				top: -10rem;
				margin-bottom: -8rem;
				padding: 0 7%;
			}
			.img-container {
				max-width: 350px;
				margin-bottom: 13rem;
			}
			.row {
				flex-direction: column;
				width: 100%;
				margin: 0 auto;
			}
			.column {
				margin: 0 auto;
				width: 100%;
			}
			.box-container {
				flex-direction: column;
			}
			.box {
				margin: 10px auto;
			}
		}
		@media screen and (max-width: 390px) {
			.gray-box {
				height: 100px;
			}
		}
	}
</style>
