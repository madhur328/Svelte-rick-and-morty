<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import CardContainer from "./components/CardContainer.svelte";
  import SearchBox from "./components/SearchBox.svelte";
  import Modal from "./components/Modal.svelte";
  import { selectRandom } from "./helper_functions/selectRandom";
  let random_chars_string = selectRandom(1, 826, 6).join();
  let chars = fetch(
    `https://rickandmortyapi.com/api/character/${random_chars_string}`
  ).then((res) => res.json());

  let modal = {
    show: false,
    arg: null,
    props: null,
    modalShow(arg, props) {
      modal = { ...modal, show: true, arg, props };
    },
  };
</script>

<Modal bind:modal>
  <svelte:component this={modal.arg} {...modal.props} />
</Modal>

<main>
  <Header bind:modal />
  <div class="title_wrapper">
    <h1 class="title">The Rick and Morty <br /> API</h1>
    <img
      class="background"
      src="/img/background.PNG"
      alt="Ric and morty background"
    />
  </div>
  <SearchBox bind:chars />
  <CardContainer bind:modal bind:chars />
  <Footer />
</main>

<style>
  .title_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title {
    font-size: 5.625rem;
    margin: 0px;
    color: rgb(32, 35, 41);
    font-weight: 900;
    line-height: 1.1;
    text-align: center;
    z-index: -2;
  }

  .background {
    position: absolute;
    z-index: -3;
  }
  @media (max-width: 767px) {
    .title {
      font-size: 3rem;
      padding: 20px 10px;
    }
  }
</style>
