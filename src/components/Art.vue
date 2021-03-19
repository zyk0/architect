<template>
  <div>
		<!-- поиск изображений -->
    <section class="header">
      <div class="search">
        <input
          type="text"
          name="query"
          v-model="query"
          class="input"
          :placeholder="query"
          @keyup.enter="searchPhotos"
        />
      </div>
      <p class=""></p>
    </section>

    <image-grid :photos="photos" />

  </div>
</template>

<script>
import ImageGrid from "./ImageGrid";

export default {
  name: "app-art",
  components: {
    ImageGrid,
  },
  data() {

    let search_request = [
		'architectures',
		'architectural design',
		'buildings',
		'architecture city',
		'urban architecture',
		'architectural building',
		'architectures']
	let query = search_request[Math.floor(Math.random() * search_request.length)];
	console.log('query: ', query);

    return {
      apiUrl: "https://api.pexels.com/v1/search/",
	  page: Math.floor(Math.random()*100), //рандомная страница запроса
      per_page: 3, //кол-о рез-ов на страницу, по дефолту: 15
	  apiKey: "563492ad6f91700001000001523f987b034e4793826e3867488801e6", 
	  //не трогайте мой API-ключ!
	  query: query, // поизвольный поисковый запрос из массива
      photos: null
    };
  },
  methods: {
    searchPhotos() {
      const url = `${this.apiUrl}?page=${this.page}&per_page=${this.per_page}&query=${this.query}`;
      // https://api.pexels.com/v1/search/ ?page=123 &per_page=15 &query=поисковый_запрос

      const getPexels = url => {
        const options = {
          method: "GET",
          headers: {
            Authorization: this.apiKey
          }
        };

        const result = fetch(url, options)
          .then(res => res.json())
          .then(data => {
            this.photos = data.photos;

				console.log('this.photos: ', this.photos);
				//console.log('this.photos.length: ', this.photos.length); //>>3
				//console.log('this.photos.avg_color: ', this.photos[1].avg_color); //>> #696861
				//console.log('typeof this.photos.avg_color: ', typeof this.photos[1].avg_color); //>>String
				//console.log('this.photos.photographer: ', this.photos[1].photographer);
				//console.log('this.photos.src: ', this.photos[1].src);

          });

        return result;
      };

      getPexels(url);
      //this.query = " "; // очистка поискового запроса из input
    }
  },
  created() {
    this.searchPhotos();
  }
};
</script>

<style scoped>
body{
	background: white;
}
</style>