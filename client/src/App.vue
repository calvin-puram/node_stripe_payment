<template>
  <div>
    <div>
      <Navbar />
    </div>

    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  components: {
    Navbar
  }
};
</script>
