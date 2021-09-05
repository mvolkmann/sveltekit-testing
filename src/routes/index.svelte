<script>
  let firstName = '';
  let lastName = '';
  let greeting = '';
  function greet() {
    greeting = `Hello, ${firstName} ${lastName}!`;
  }
</script>

<h1>Cypress Demo</h1>

<form on:submit|preventDefault={greet}>
  <div>
    <label for="first-name">First Name</label>
    <input name="first-name" bind:value={firstName} />
  </div>
  <div>
    <label for="last-name">Last Name</label>
    <input name="last-name" bind:value={lastName} />
  </div>
  <button>Greet</button>
</form>

<h1>{greeting}</h1>

<style>
  form > div {
    margin-bottom: 0.5rem;
  }
</style>
