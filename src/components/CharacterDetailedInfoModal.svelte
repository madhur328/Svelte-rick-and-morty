<script>
  export let char;
</script>

<img class="card-img" src={char.image} alt="Character" />
<div
  class="char-info"
  class:dead={char.status === "Dead"}
  class:unknown={char.status === "unknown"}
  class:alive={char.status === "Alive"}
>
  <h2>{char.name}</h2>
  <div class="info-box">
    <div>
      Status:
      <div
        class="status-icon"
        class:dead={char.status === "Dead"}
        class:unknown={char.status === "unknown"}
        class:alive={char.status === "Alive"}
      />
      <span>{char.status}</span>
    </div>
    <p>Species: <span>{char.species}</span></p>
    <p>Gender: <span>{char.gender}</span></p>
    <p>Origin Location:</p>
    <span>{char.origin.name}</span>
    <p>Last Known location:</p>
    <span>{char.location.name}</span>
  </div>
</div>

<style>
  h2 {
    color: rgb(255, 152, 0);
    text-align: center;
    line-height: 1.1;
    margin-bottom: 0;
  }
  p {
    text-align: left;
    margin: 0;
    font-size: 18px;
  }
  span {
    font-size: 16px;
    color: rgb(158, 158, 158);
    text-transform: capitalize;
    line-height: 1.1;
  }
  .card-img {
    flex: 2 1 0%;
    width: 100%;
    height: 100%;
    opacity: 1;
    align-self: center;
    transition: opacity 0.5s ease 0s;
    object-fit: cover;
  }

  .char-info {
    flex: 4 1 0%;
    width: 100%;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .char-info.dead {
    border-top: 2px solid rgb(214, 61, 46);
  }
  .char-info.alive {
    border-top: 2px solid rgb(85, 204, 68);
  }
  .char-info.unknown {
    border-top: 2px solid rgb(158, 158, 158);
  }

  .info-box {
    margin-top: 10px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .status-icon {
    display: inline-block;
    height: 0.5rem;
    width: 0.5rem;
    margin-right: 0.375rem;
    border-radius: 50%;
  }
  .status-icon.dead {
    background: rgb(214, 61, 46);
  }
  .status-icon.alive {
    background: rgb(85, 204, 68);
  }
  .status-icon.unknown {
    background: rgb(158, 158, 158);
  }
  @media (max-width: 767px) {
    .card-img {
      max-height: 200px;
      display: block;
      object-fit: cover;
    }
    .char-info.dead {
      border-top: unset;
      border-left: 2px solid rgb(214, 61, 46);
    }
    .char-info.alive {
      border-top: unset;
      border-left: 2px solid rgb(85, 204, 68);
    }
    .char-info.unknown {
      border-top: unset;
      border-left: 2px solid rgb(158, 158, 158);
    }
  }
</style>
