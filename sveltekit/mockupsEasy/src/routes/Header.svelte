<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from 'flowbite-svelte';
	import logo from '$lib/images/logo.svg';
  </script>
  
  <Navbar>
	<NavBrand href="/">
		<img src={ logo } class="h-12" alt="Logo" />
	  <span class="text-gray-900 self-center whitespace-nowrap text-2xl font-semibold lg:text-3xl dark:text-white">ockupsEasy</span>
	</NavBrand>
	<div class="flex md:order-2">
	  <Button size="sm" class="text-xl text-pretty font-black">Buy me a Coffee</Button>
	  <NavHamburger />
	</div>
	<NavUl class="order-1">
	  <NavLi href="/" active={true} class="text-xl font-semibold">T-shirts</NavLi>
	  <NavLi href="/about" class="text-xl font-semibold">Mugs</NavLi>
	  <NavLi href="/docs/components/navbar" class="text-xl font-semibold">Phone Cases</NavLi>
	  <NavLi href="/pricing" class="text-xl font-semibold">Tote Bags</NavLi>
	  <NavLi href="/contact" class="text-xl font-semibold">About Us</NavLi>
	  <NavLi href="/constructor" class="text-xl font-semibold">Constructor</NavLi>
	</NavUl>
  </Navbar>

