export default function ({ store }) {
  if (store.getters["auth/authenticated"]) {
    return redirect("/dashboard");
  }
}
