<template>
  <div id="app">
    <img :src="data.src.medium">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      data: {}
    };
  },
  beforeMount() {
    this.getPhoto();
  },
  methods: {
    async getPhoto() {
      const {
        data: { photos }
      } = await axios({
        url: "https://api.pexels.com/v1/curated?per_page=11&page=1",
        headers: {
          Authorization: "563492ad6f91700001000001de724c6a8c5e49e0b0ff25c80ec77d3d"
        }
      });
      this.data = photos[10];
    }
  }
};
</script>