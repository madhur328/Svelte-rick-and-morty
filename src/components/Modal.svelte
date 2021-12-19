<script>
  export let modal;
  const toggle = () => {
    modal.show = !modal.show;
  };
</script>

{#if modal.show}
  <div class="backdrop" on:click|self={toggle}>
    <div class="modal">
      <div class="header">
        <span on:click={toggle} class="close-button">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            xmlns="http://www.w3.org/2000/svg"
            ><line
              fill="none"
              stroke="#000"
              stroke-width="1.1"
              x1="1"
              y1="1"
              x2="13"
              y2="13"
            /><line
              fill="none"
              stroke="#000"
              stroke-width="1.1"
              x1="13"
              y1="1"
              x2="1"
              y2="13"
            /></svg
          >
        </span>
      </div>
      <div class="modal-content"><slot /></div>
    </div>
  </div>
{/if}

<style>
  .backdrop {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0, 0, 0, 0.8);
    z-index: 1000;
  }

  .modal {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: stretch;
    padding: 20px;
    border-radius: 10px;
    min-width: 740px;
    background: #24282f;
    color: rgb(255, 255, 255);
  }
  .header {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .modal-content {
    padding-top: 10px;
    display: flex;
  }
  .close-button {
    color: #999;
    background-color: transparent;
    display: inline-block;
    fill: currentcolor;
    line-height: 0;
    cursor: pointer;
    transition: 0.1s ease-in-out;
  }
  .close-button [stroke*="#"] {
    stroke: currentcolor;
  }
  .close-button:hover {
    color: #666;
  }

  @media (max-width: 767px) {
    .modal {
      min-width: unset;
      max-width: 90%;
      max-height: 90%;
      overflow: auto;
    }
    .modal-content {
      flex-direction: column;
    }
  }
</style>
