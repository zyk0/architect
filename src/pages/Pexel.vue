<template>
  <div>
    <Art />
  </div>
</template>

<script>
  import Art from "@/components/Art.vue";

  export default {
    //name: "app",
    components: {
      Art
    }
  };
</script>

<style>
	container {
	  margin: 0 auto;
	  max-width: 1200px;
	  width: 85%;
	}

	a {
	  text-decoration: none;
	  color: #333;
	}
</style>