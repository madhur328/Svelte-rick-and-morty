<script>
  export let char;
  export let modal;
  export let cache;
  import { getEpisode } from "../helper_functions/getEpisode.js";
  import CharacterDetailedInfoModal from "./CharacterDetailedInfoModal.svelte";
  let promise = getEpisode(cache, char);
</script>

<div class="card">
  <img class="card-img" src={char.image} alt="Character" />
  <div class="char-info-container">
    <div class="name-status-container">
      <h2
        on:click={() => modal.modalShow(CharacterDetailedInfoModal, { char })}
        class="char-name"
        class:multiline={char.name.length > 26}
      >
        {char.name}
      </h2>
      <span>
        <div
          class="status-icon"
          class:dead={char.status === "Dead"}
          class:unknown={char.status === "unknown"}
          class:alive={char.status === "Alive"}
        />
        {char.status} - {char.species}
      </span>
    </div>
    <div class="location-container">
      <span class="location text">Last known location:</span>
      <span class="location value">{char.location.name}</span>
    </div>
    <div class="episode-seen-container">
      <span class="episode-seen text">First seen in:</span>
      <span class="episode-seen value">
        {#await promise}
          {""}
        {:then ep_name}
          {ep_name}
        {/await}
      </span>
    </div>
  </div>
</div>

<style>
  .card {
    width: 600px;
    height: 220px;
    display: flex;
    overflow: hidden;
    background: rgb(60, 62, 68);
    color: rgb(255, 255, 255);
    border-radius: 0.5rem;
    margin: 0.75rem;
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px,
      rgb(0 0 0 / 6%) 0px 2px 4px -1px;
  }
  .card-img {
    flex: 2 1 0%;
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: opacity 0.5s ease 0s;
    object-fit: cover;
  }

  .char-info-container {
    flex: 3 1 0%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.75rem;
  }

  .name-status-container,
  .location-container,
  .episode-seen-container {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
  }

  .char-name {
    font-size: 1.5rem;
    line-height: 1.1;
    margin: 0;
    cursor: pointer;
  }
  .char-name:hover {
    color: rgb(255, 152, 0);
  }

  .char-name.multiline {
    font-size: 1.25rem;
  }

  span {
    text-transform: capitalize;
    font-size: 16px;
  }

  .status-icon {
    display: inline-block;
    height: 0.5rem;
    width: 0.5rem;
    margin-right: 0.375rem;
    border-radius: 50%;
  }
  .dead {
    background: rgb(214, 61, 46);
  }
  .alive {
    background: rgb(85, 204, 68);
  }
  .unknown {
    background: rgb(158, 158, 158);
  }

  .text {
    color: rgb(158, 158, 158);
    font-size: 16px;
    font-weight: 500;
  }

  .value {
    font-size: 18px;
  }
  @media (max-width: 767px) {
    .card {
      flex-direction: column;
      height: unset;
    }
    .card-img {
      max-height: 200px;
      display: block;
      object-fit: cover;
    }
  }
</style>
