<script>
  import Card from "./Card.svelte";

  import { cacheEpisodes } from "../helper_functions/cacheEpisodes";
  export let modal;
  export let chars;
  let cache = {};
  $: cache = cacheEpisodes(chars, cache);
</script>

<div class="card-container">
  {#await chars then chars}
    {#if Array.isArray(chars)}
      {#each chars as char (char.id)}
        <Card on:modalShow bind:modal {cache} {char} />
      {/each}
    {:else}
      <Card on:modalShow bind:modal {cache} char={chars} />
    {/if}
  {:catch errors}
    {errors}
  {/await}
</div>

<style>
  .card-container {
    padding: 4.5rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background: rgb(36, 40, 47);
    min-height: calc(50vh - 60px);
  }
  @media (max-width: 767px) {
    .card-container {
      padding: 2rem 0;
    }
  }
</style>
