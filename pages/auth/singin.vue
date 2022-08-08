<template>
  <div class="hero is-fullheight">
    <div class="hero-body is-justify-content-center is-align-items-center">
      <form
        @submit.prevent="submit"
        class="columns is-flex is-flex-direction-column box"
      >
        <div class="column">
          <label for="email">Email</label>
          <input
            class="input is-primary"
            type="text"
            placeholder="Email address"
            v-model="form.email"
          />

          <p class="help is-danger" v-if="errors">
            <!-- {{ errors.email[0] }} -->
          </p>
        </div>
        <div class="column">
          <label for="Name">Password</label>
          <input
            class="input is-primary"
            id="password"
            type="password"
            name="password"
            autocomplete="on"
            placeholder="Password"
            v-model="form.password"
          />
          <a href="forget.html" class="is-size-7 has-text-primary"
            >forget password?</a
          >
        </div>
        <div class="column">
          <button class="button is-primary is-fullwidth" type="submit">
            Login
          </button>
        </div>
        <div class="has-text-centered">
          <p class="is-size-7">
            Don't have an account?
            <a href="#" class="has-text-primary">Sign up</a>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  middleware: "guest",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    async submit() {
      await this.$auth.login({
        data: this.form,
      });
    },
  },
};
</script>
