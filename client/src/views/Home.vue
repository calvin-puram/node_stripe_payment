<template>
  <div class="container">
    <div v-for="book in books" :key="book.id">
      <div class="row mt-5">
        <div class="col-md-6 col-sm-12 text-center">
          <h1 class="display-3 mt-3 pt-3">{{ book.name }}</h1>
          <p class="lead">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatum, non.
          </p>
          <button class="btn btn-primary btn-large mt-2" @click="buyBook">
            Buy Book
          </button>
        </div>

        <div class="col-md-6 col-sm-12 text-center">
          <img :src="`img/${book.img}`" alt="book" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      books: [{ name: "Beat by God", img: "images.jpg", id: 123 }]
    };
  },
  methods: {
    buyBook() {}
  }
};
</script>
