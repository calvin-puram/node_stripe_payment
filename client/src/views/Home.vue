<template>
  <div class="container">
    <div v-for="book in getBooks" :key="book.id">
      <div class="row  ">
        <div class="col-md-6 col-sm-12 text-center">
          <h1 class="mt-5 pt-3">{{ book.name }}</h1>
          <p class="lead">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatum, non.
          </p>
          <p class="text-dark">Price: ${{ book.price }}</p>
          <button
            :disabled="getLoader"
            class="btn btn-primary btn-large mt-2"
            @click="buyBook(book._id)"
          >
            Buy Book
          </button>
        </div>

        <div class="col-md-6 col-sm-12 text-center mt-5">
          <img :src="`img/${book.image}`" alt="book" width="50%" height="70%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Nprogress from "nprogress";
import store from "../store/index";

export default {
  name: "Home",
  computed: mapGetters(["getBooks", "getSession", "getLoader"]),
  beforeRouteEnter(to, from, next) {
    Nprogress.start();
    store.dispatch("allBooks").then(res => {
      if (res && res.data.success) {
        Nprogress.done();
      }
      next();
    });
  },
  methods: {
    ...mapActions(["allBooks", "session"]),
    async buyBook(id) {
      const stripe = window.Stripe(process.env.VUE_APP_STRIPE_PUBLIC);
      await this.session(id);
      console.log(this.getSession);
      await stripe.redirectToCheckout({
        sessionId: this.getSession.id
      });
    }
  },
  created() {
    console.log(process.env.VUE_APP_STRIPE_PUBLIC);
  }
};
</script>
