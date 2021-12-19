<script>
    import HelpUsInfoModal from "./HelpUsInfoModal.svelte";
    export let modal;
</script>
<header>
    <div class="nav">
        <img src="/img/rick-morty-logo.PNG" alt="Rick and Morty Logo">
        <ul>
            <li>Docs</li>
            <li>About</li>
            <li><span on:click={() => {modal.modalShow(HelpUsInfoModal, {})}}>HELP US</span></li>
        </ul>
    </div>
</header>

<style>
    header{
      padding: 0px 1.5rem;
      align-items: center;
      width: 100%;
    }
    .nav{
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 60px;
    }
    ul{
        display: flex;
        list-style-type: none;
        align-items: center;
        margin: 0px;
        padding: 0px;
    }
    li{
        font-weight: 700;
        cursor: pointer;
    }
    li:hover {
        color: rgb(255, 152, 0);
    }

    li:not(:last-child) {
        margin-right: 1.75rem;
    }
    span {
        border: 1px solid rgb(255, 152, 0);
        border-radius: 0.5rem;
        padding: 0.5rem 1rem;
        font-size: 0.75rem;
    }
    span:hover{
        border: 1px solid transparent;
        background: rgb(255, 152, 0);
        color: rgb(255, 255, 255);
    }
    img{
      width:40px;
      height:40px;
    }
  </style>