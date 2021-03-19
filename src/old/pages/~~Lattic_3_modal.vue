<template>
	<div class="envelope" >
	
		<div class="lattice-0">
			<p>lattice-0</p>
			<!--
			<div v-for="user in users" :key="user.id">
				<p>{{user.name}} - {{user.age}}</p>
			</div>
			-->
		</div>
		
		<div class="lattice-1">
			<p>lattice-1</p>
			<!-- 
			<img class="img_lattice" src='../style/images/lattice_1.jpg'>	
			-->		
		</div>
		
		<div class="lattice-2" >
			<p>lattice-2</p>
			<!--
			<span v-for="userdouble in usersdouble" :key="usersdouble.id">
				<p>{{userdouble.name}} - {{userdouble.age}}</p>
			</span>
			-->
		</div>
		
		<div class="lattice-3">
			<p>lattice-3</p>			
		</div>
		
		<div class="lattice-4">
			<p>lattice-4</p>
			<!-- modal start -->
				  <section>
					<div class="container">
					  <button
						class="btn"
						v-on:click="modalFirst = !modalFirst">
								  модальное  modalFirst
					  </button>
					  <modals
						title="модальное окно modalFirst"
						v-show="modalFirst"
						v-on:close="modalFirst = false">
						<div slot="body">
						  <p class="slotbody"> окно slot="body"</p>
							<button
							  class="btn btnPrimary"
							  v-on:click="modalFirst = !modalFirst">
							   Готово!
							</button>
						</div>
					  </modals>
					</div>
				  </section>
				<!-- modal finish -->	
		</div>
		
		<div class="lattice-5">
			<p>lattice-5</p>
			<!-- модальное окно с валидацией полей -->
		  <button class="btn btnPrimary"
			@click="modalValidate = !modalValidate">
			Оставить заявку
		  </button>
		  
          <modalValidate
			v-show="modalValidate"
			@close="modalValidate = false"
		  />
		  
		</div>
		
		
		
		<div class="lattice-6">
			<p>lattice-6</p>
			<!-- start second modal -->
          <button
		    class="btn btnWhite"
		    @click="modalSecond.show = !modalSecond.show">
		    отправить заявку
		  </button>
          <modals
            title="Заявка"
            v-show="modalSecond.show"
            @close="modalSecond.show = false">
            <!-- body -->
            <div slot="body">
              <form @submit.prevent="submitSecondForm">
                <label>Имя:</label>
                <input type="text" required v-model="modalSecond.name">
                <label>Email:</label>
                <input type="email" required v-model="modalSecond.email">
								<label>Номер телефона:</label>
                <input type="tel" required v-model="modalSecond.phone">
                <button class="btn btnDanger">Отправить!</button>
              </form>
            </div>
          </modals>
		<!-- finish second modal -->
		</div>
		
		<div class="lattice-7">
			<p>lattice-7</p>
		</div>
		
	</div>
</template>

<script>
	//import axios from 'axios';
	import modals from '@/components/Modal.vue';// подключаем modal
	import modalValidate from '@/components/ModalValidate.vue';

	export default {
	  components: { 
		modals: modals, 
		modalValidate: modalValidate 
	  },
	  data () {
		return {
			modalFirst: false,
			modalValidate: false,
			modalSecond: {
				show: false,
				name:  '  aaaaaa',
				email: '  @@@@@@',
				phone: '  ++++++'
			},		
		    //users: [],
			//usersdouble: []
		  }
		},
		  methods: {
			submitSecondForm () {
				console.log({
					name:  this.modalSecond.name,
					email: this.modalSecond.email,
					phone: this.modalSecond.phone
				})
				this.modalSecond.name  = ''
				this.modalSecond.email = ''
				this.modalSecond.phone = ''
				this.modalSecond.show  = false
			}
  },
  
  mounted(){
	  console.log('this.$route: ', this.$route.path);
  },
  
	  created () {
	  /* 
		axios
		  .get('https://gist.githubusercontent.com/zyk0/5aee9c131d501d1fd63f581ae5c8b263/raw/8a9ace6d5a384fc5eac925e3c08f218865020cf0/girl.json')
			.then(response => {
				//console.log('response.data: ', response.data)
			  this.users = response.data.slice(0, 3)
			  console.log('this.users.length: ', this.users.length)
			  
			  this.usersdouble = response.data.slice(3, 7)
			  console.log('this.usersdouble.length: ', this.usersdouble.length)
			  
			})
			.catch(error => {
			  console.log(error)
			})
			
	  */	
	  }
	}
</script>

<style lang="scss" scoped>
.img_lattice{
  width: 100%;
  height: 100%;
  object-fit: fill;	
}
.slotbody{margin-bottom: 20px;}

	.for{
		width: 50px;
		height: 30px;
	}
	.lattice-0{
		background: url('https://images.unsplash.com/photo-1610156830615-2eb9732de349?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=433&q=80');
	}
	.lattice-1{
		background: url('../style/images/lattice_1.jpg');
		background-repeat: no-repeat;
		object-fit: none;	
		
		/*
		background: url('https://images.unsplash.com/photo-1610971441253-ab06498a0749?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80');
		*/
	}
	.lattice-2{}
	.lattice-3{
		/*
		background: url('https://images.unsplash.com/photo-1565445816358-50ff7338ed59?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=350&q=80');
		*/
	}
	.lattice-4{
		background: url('');
	}
	.lattice-5{
		background: url('https://images.unsplash.com/photo-1510176387329-6139e868a152?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=460&q=80');
	}
	.lattice-6{
		background: url('https://images.unsplash.com/photo-1610121956321-b7b52b13cf89?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=488&q=80');
	}
	.lattice-7{
		background: url('');
	}
	
</style>