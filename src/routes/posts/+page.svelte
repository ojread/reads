<script>
  /** @type {{ data: import('./$types').PageData }} */
  let { data } = $props();
</script>

{#if data.posts}
  <ul>
    {#each data.posts as { date, slug, title }, i}
      <li>
        <a href={`/posts/${slug}`}>{date.toLocaleDateString()} - {title}</a>
      </li>
    {/each}
  </ul>
{:else}
  <p>No posts yet.</p>
{/if}
