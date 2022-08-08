<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link :to="{ name: 'index' }" class="navbar-item">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
      </nuxt-link>
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item"> Home </a>

        <a class="navbar-item"> Documentation </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> More </a>

          <div class="navbar-dropdown">
            <a class="navbar-item"> About </a>
            <a class="navbar-item"> Jobs </a>
            <a class="navbar-item"> Contact </a>
            <hr class="navbar-divider" />
            <a class="navbar-item"> Report an issue </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons" v-if="!authenticated">
            <nuxt-link :to="{ name: 'auth-singup' }" class="button is-primary">
              <strong>Sign up</strong>
            </nuxt-link>
            <nuxt-link :to="{ name: 'auth-singin' }" class="button is-light">
              Log in
            </nuxt-link>
          </div>
          <template class="buttons" v-if="authenticated">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                {{ user.name }}
              </a>
              <div class="navbar-dropdown is-right">
                <button class="navbar-item" @click.prevent="logout">
                  Log out
                </button>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$auth.logout();
    },
  },
};
</script>
