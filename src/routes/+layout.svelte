<script lang="ts">
  import "../app.css";

  import {
    DarkMode,
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
  } from "flowbite-svelte";

  let { children } = $props();
</script>

<div
  class="relative min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
>
  <header>
    <Navbar color="default" class="fixed">
      <NavBrand href="/">
        <span
          class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
          >reads.org.uk</span
        >
      </NavBrand>
      <NavHamburger />
      <NavUl>
        <NavLi href="/">Home</NavLi>
        <NavLi href="/posts">Posts</NavLi>
        <NavLi href="/#">About</NavLi>
        <NavLi href="/#">Contact</NavLi>
      </NavUl>
      <DarkMode />
    </Navbar>
  </header>

  <main class="pt-24">
    <div class="container mx-auto">
      {@render children()}
    </div>
  </main>
</div>
