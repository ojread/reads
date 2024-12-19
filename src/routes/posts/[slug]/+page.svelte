<script>
  /** @type {{ data: import('./$types').PageData }} */
  let { data } = $props();
</script>

{#if data.post}
  <h1>{data.post.title}</h1>
  <p>{data.post.date.toLocaleDateString()}</p>
{:else}
  <p>No post found.</p>
{/if}
