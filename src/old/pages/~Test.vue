<template>
  <div class="monsterlessons">
  
  <br><br><br><br>
  <p><router-link class="link" to="/test/1">test page 1</router-link></p>
  <p><router-link class="link" to="/test/2">test page 2</router-link></p>
  <p><router-link class="link" to="/test/3">test page 3</router-link></p>	
  <br><br><br><br>
  
    <p class="fullname">
		hello, 
		{{firstName || 'incognito'}} 
		{{lastName  || 'noname'}}!
	</p>
	<br><br><br>
	<button @click="increaseCounter">Increase</button>
	<br><br><br>
	<p><b>count: </b>{{ count }}</p>
	<p><b>this.$store.state.count: </b>{{ this.$store.state.count }}</p>
  </div>
</template>


<script>
	export default {
		
	  data: () => ({
		  firstName: 'Denis', 
		  lastName: 'Meshsdfs'
	  }),
	  
	  computed: {
		count() {
			console.log('store', this.$store)
			return this.$store.state.count
		}
	  },
	  
	  methods: {
		 ifLastnameUpdate(value){
			console.log('watch: ', value);
		},
		
		increaseCounter() {
			console.log('increaseCounter')
			this.$store.commit('increment')
		}
		
	  },
	  
	  watch: {
		  lastName: 'ifLastnameUpdate'
	  },
	  
	  created () {
		console.log('this.$route: ',          this.$route)
		console.log('this.$route.fullPath: ', this.$route.fullPath)
	  }
	  
	};
</script>

<style scoped>
.monsterlessons{
	margin: 50px 50px 50px 50px;
	background: #181818;
}

	.fullname{
		margin-top: 50px;
		color: #ffffff;
		background: #696969;
	}
</style>
