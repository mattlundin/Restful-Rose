<script>
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div class="nav">
	<Navbar />
</div>

<slot><!-- optional fallback --></slot>

<div class="footer">
	<Footer />
</div>
