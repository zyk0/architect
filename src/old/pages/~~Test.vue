<template>
  <div>
    <img :src="data.src.tiny">
  </div>
</template>


<script>
import axios from 'axios'

export default {
  data() { return { data: {} }; },
  
  beforeMount() {
    this.getPhoto();
  },
  
  methods: {
    async getPhoto() {
      const { data: { photos } } = await axios({
        url: "https://api.pexels.com/v1/curated?per_page=11&page=1",
		headers: {
		  "Content-type": "application/json",
          "Authorization": "563492ad6f91700001000001523f987b034e4793826e3867488801e6"
        }
      });
      this.data = photos[0];
    }
  }
};
</script>
