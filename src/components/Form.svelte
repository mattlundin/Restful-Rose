<script>
</script>

<main>
	<div class="form-container">
		<form
			class="contact-form"
			action="https://formsubmit.co/matt@mattlundin.io"
			method="POST"
			target="_blank"
		>
			<input type="text" name="name" placeholder="Name" required />
			<input type="email" name="email" placeholder="Email" required />

			<textarea name="message" form="form" placeholder="Message" required />

			<div class="btn-container">
				<input class="file" type="file" name="attachment" accept="image/png, image/jpeg" />
				<button class="btn" name="submit" type="submit"> Send </button>
			</div>
		</form>
	</div>
</main>

<style>
	.form-container {
		width: 500px;
		max-width: 100%;
		margin: 0 auto 4rem;
		padding: 0 10px;
		background-color: #d3d3d3;
	}
	form {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	input {
		height: 1.5rem;
		margin: 0.5rem 0;
	}
	textarea {
		margin-top: 0.5rem;
		height: 5rem;
		font-family: inherit;
		font-size: inherit;
	}
	.btn-container {
		display: flex;
		justify-content: space-between;
	}
	.file {
		margin-top: 10px;
		/* cursor: pointer; */
	}
	.btn {
		height: 1.5rem;
		width: 3rem;
		margin-top: 10px;
		cursor: pointer;
	}
</style>
