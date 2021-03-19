<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1 class="title">404</h1>
	     	<h2 class="title">страница не найдена</h2>
        <p>Переход на <router-link class="link" to="/">главную</router-link> страницу</p>
		
		<p class="goToLogin">Либо переход на <span @click="goToLogin">Login</span> страницу</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
	//data () { return {} },
	methods: {	
		goToLogin(){
			this.$router.push('/login')
			console.log('this.$router.push: ', this.$router );
		}
	}
}
</script>

<style lang="scss" scoped>
.wrapper-content {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.goToLogin{
	cursor: pointer; 
}
</style>
