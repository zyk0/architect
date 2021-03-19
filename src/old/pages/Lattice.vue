<template>
<div class="container-lamina">
  <div class="box-lamina">
    <div class="content-lamina">
      <img src="https://images.unsplash.com/photo-1510176387329-6139e868a152?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=460&q=80" alt="">
      <p>
	    Against the wall you must cry
		Anxiety is made to feel
	  </p>
    </div>
  </div>
  <div class="box-lamina">
    <div class="content-lamina">
     <img src='@/style/images/lattice_1.jpg'>
    </div>
  </div>
  <div class="box-lamina">
    <div class="content-lamina">
      <img src="https://images.unsplash.com/photo-1565445816358-50ff7338ed59?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=350&q=80" alt="">
      <p>
	    The curtains are made of dreams
		I'm searching my mind at once
	  </p>
    </div>
  </div>
  <div class="box-lamina">
    <div class="content-lamina">
      <div class="vertical">
        <span class="verticalmenu">Architecture</span>
        <span class="verticalmenu"><b class="line"></b>Design</span>
        <span class="verticalmenu"><b class="line"></b>Studio</span>
      </div>
    </div>
  </div>
  <div class="box-lamina">
    <div class="content-lamina">
      <div class="item item-5">
				<p class="item-5-logo">
					<span class="glitch" data-text="FASHIONGLITCH">
						FASHIONGLITCH
					</span>
				</p>
				<div class="glitch" data-text="GLITCH">GLITCH</div>
			</div>
    </div>
  </div>
  <div class="box-lamina">
    <div class="content-lamina">
      <img src="https://images.unsplash.com/photo-1610121956321-b7b52b13cf89?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=488&q=80" alt="">
    </div>
  </div>
  <div class="box-lamina">
    <div class="content-lamina">
    </div>
  </div>
</div>
</template>

<script>
export default {
	data () {
		return {
			links: [
				{ title: 'Home', url: '/home/architecture' },
				{ title: 'Home', url: '/home/design' },
				{ title: 'Home', url: '/home/studio' }
			]
		}
	}
}
</script>

<style scoped>
.verticalmenu{
	margin: 10px 0px 0px 0px;
}
.verticalmenu:nth-child(1n){
	padding: 0px 0px 0px 0px;
}
.verticalmenu:nth-child(2n){
	padding: 0px 0px 0px 0px;
}
.verticalmenu:nth-child(3n){
	padding: 10px 0px 0px 0px;
}


/*
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  align-self: center;
  min-height: 100vh;
  background: #222222;
}

.container {
  position: relative;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: minmax(100px, auto);
  margin: 0px 0px 0px 0px;
  grid-auto-flow: dense;
  grid-gap: 2px;
}

.container .box {
  color: #929796;
  background: #333333;
  padding: 10px;
  display: grid;
  font-size: 20px;
  place-items: center;
  text-align: center;
  color: #ffffff;
  transition: 0.5s;
}

.container .box:hover {
  background: #707070;
}

.container .box img {
  position: relative;
  max-width: 90%;
  margin-bottom: 5px;
}

.container .box:nth-child(1) {
  grid-column: span 2;
  grid-row: span 1;
}

.container .box:nth-child(2) {
  grid-column: span 1;
  grid-row: span 2;
}

.container .box:nth-child(4) {
  grid-column: span 1;
  grid-row: span 2;
}

.container .box:nth-child(5) {
  grid-column: span 3;
  grid-row: span 1;
}


@media (max-width: 799px) {
  .container {
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
    grid-template-rows: minmax(auto, auto);
  }
  .container .box {
    grid-column: unset !important;
    grid-row: unset !important;
  }
}
*/
</style>