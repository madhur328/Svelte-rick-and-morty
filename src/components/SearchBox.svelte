<script>
    export let chars;
    let inputVal;
    import Tagify from '@yaireo/tagify'

    function character(node) {
        let inputBox = new Tagify(node, {
                whitelist:[],
                dropdown : {
                    classname     : "color-blue",
                    enabled       : 0,              // show the dropdown immediately on focus
                    maxItems      : 6,
                    position      : "text",         // place the dropdown near the typed text
                    closeOnSelect : false,          // keep the dropdown open after selecting a suggestion
                    highlightFirst: true
                },
                enforceWhitelist: true,
                maxTags: 6, 
                editTags: false,
        });
        let controller;

        inputBox.on('input', onInput);

        function onInput( e ){
            var value = e.detail.value
            inputVal = inputBox.value;
            if(value === '') return
            inputBox.whitelist = null // reset the whitelist

            // https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
            controller && controller.abort()
            controller = new AbortController()

            // show loading animation and hide the suggestions dropdown
            inputBox.loading(true).dropdown.hide()

            fetch('https://rickandmortyapi.com/api/character/?name=' + value, {signal:controller.signal})
                .then(res => res.json())
                .then(json => {
                    if(!json.results) return
                    inputBox.whitelist = json.results.map(elem => {
                        return {id: elem.id, value: elem.name}
                    })
                    inputBox.loading(false).dropdown.show(value) // render the suggestions dropdown
                })
                .catch(() => {})
                .finally(() => {
                    inputBox.loading(false)
                })
        }

        return {
            destroy() {

            }
        };
    }
    const buildTeam = () => {
        chars = fetch(`https://rickandmortyapi.com/api/character/${inputVal.map(elem => elem.id).join()}`)
				.then(res => res.json());
    }
</script>

<div class="container">
    <input class="input"  use:character type="text">
    <button on:click={buildTeam}>Build Team</button>
</div>

<style>
    .container {
        display: flex;
        padding: 10px;
        justify-content: center;
        align-items: stretch;
    }
    .input {
        width: 70%;
        margin-right: 10px;
        border-radius: 0.5rem;
    }
    button {
        cursor: pointer;
        margin-bottom: 0;
        border-radius: 0.5rem;
        color: black;
        font-weight: 500;
        font-size: 16px;
    }
    button:hover {
        border: 1px solid transparent;
        background: rgb(255, 152, 0);
        color: rgb(255, 255, 255);
    }
</style>