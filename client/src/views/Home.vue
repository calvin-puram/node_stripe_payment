<template>
  <div class="container">
    <div v-for="book in getBooks" :key="book.id">
      <div class="row my-5">
        <div class="col-md-6 col-sm-12 text-center">
          <h1 class="mt-3 pt-3">{{ book.name }}</h1>
          <p class="lead">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatum, non.
          </p>
          <button
            class="btn btn-primary btn-large mt-2"
            @click="buyBook(book._id)"
          >
            Buy Book
          </button>
        </div>

        <div class="col-md-6 col-sm-12 text-center">
          <img :src="`img/${book.image}`" alt="book" width="50%" height="70%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  computed: mapGetters(["getBooks", "getSession"]),
  data() {
    return {
      stripe: null
    };
  },
  mounted() {
    this.stripe = window.Stripe("pk_test_vojJa5IosfOt5PKz2iBn9kzQ00Gyfx4q3o");
  },
  methods: {
    ...mapActions(["allBooks", "session"]),
    async buyBook(id) {
      await this.session(id);
      console.log(this.getSession);
      await this.stripe.redirectToCheckout({
        sessionId: this.getSession.id
      });
    }
  },
  created() {
    this.allBooks();
  }
};
</script>
