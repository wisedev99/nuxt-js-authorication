<template>
  <div class="container">
    <div class="columns is-justify-content-center">
      <div class="column is-6-tablet is-5-desktop is-4-widescreen is-3-fullh">
        <form method="POST" @submit.prevent="logout" class="box p-5">
          <label class="is-block mb-4">
            <span class="is-block mb-2">Name</span>
            <input
              required
              type="name"
              class="input"
              v-model="form.name"
              placeholder="Joe Bloggs"
            />
          </label>
          <label class="is-block mb-4">
            <span class="is-block mb-2">Email address</span>
            <input
              required
              type="email"
              class="input"
              v-model="form.email"
              placeholder="joe.bloggs@example.com"
            />
          </label>

          <label class="is-block mb-4">
            <span class="is-block mb-2">Password</span>
            <input
              name="password"
              type="password"
              class="input"
              v-model="form.password"
              minlength="6"
              placeholder="(must be 6+ chars)"
              required
            />
          </label>

          <div class="mb-4">
            <label>
              <input type="checkbox" name="tos" value="yes" required />
              <span>I agree with the TOS</span>
            </label>
          </div>

          <div class="mb-4">
            <button type="submit" class="button is-link px-4">Sign Up</button>
          </div>

          <div>
            <div class="is-size-7 has-text-right">
              by
              <a
                href="https://herotofu.com/start"
                class="has-text-dark"
                target="_blank"
                >HeroTofu</a
              >
            </div>
          </div>
        </form>
      </div>
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
        name: "",
        password: "",
      },
    };
  },
  methods: {
    async logout() {
      await this.$axios.post("register", this.form);
      this.$auth.login({
        data: {
          email: this.form.email,
          password: this.form.password,
        },
      });

      this.$router.push({
        name: "index",
      });
    },
  },
};
</script>
