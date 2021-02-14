<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>Create</h4>
      </div>

      <form>
        <div class="input-field">
          <input id="name" type="text" />
          <label for="name">Name</label>
          <span class="helper-text invalid">Enter the name</span>
        </div>

        <div class="input-field">
          <input id="limit" type="number" />
          <label for="limit">Limit</label>
          <span class="helper-text invalid">Minimum value</span>
        </div>

        <button class="btn waves-effect waves-light" type="submit">
          Create
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>
