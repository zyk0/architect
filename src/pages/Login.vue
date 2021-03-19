<template>
 <div class="content-wrapper">
	 <section>
		 <div class="container">
			 <div class="auth">
				 <div class="auth__banner">
				 <img src="@/style/images/log.jpg">
				 </div>
			 <div class="auth__form">

			 <span class="title2">форма для логина</span>
				 <form @submit.prevent="onSubmit">

					 <div class="form-item" :class="{ errorInput: $v.email.$error }">
						 <input
						  type="email"
							placeholder="Почтовый ящик"
							v-model="email"
							:class="{ error: $v.email.$error }"
							@change="$v.email.$touch()"
						 />
						 <div class="error" v-if="!$v.email.required">поле обязательно для заполнения</div>
						 <div class="error" v-if="!$v.email.email">email не корректный!</div>
					 </div>

					 <div class="form-item" :class="{ errorInput: $v.password.$error }">
						<input
							type="password"
							placeholder="Пароль"
							v-model="password"
							:class="{ error: $v.password.$error }"
							@change="$v.password.$touch()"/>
						<div class="error" v-if="!$v.password.required">поле пароль обязательно для заполнения</div>
						<div class="error" v-if="!$v.password.minLength">длина пароля не менее {{ $v.password.$params.minLength.min }} символов!
							<p>сейчас длина: {{password.length}}</p>
						</div>
					 </div>

						 <div class="buttons-list">
							<button
								class="button button-primary"
								type="submit"
								:class="{ 'button-disable': $v.$invalid }"
								>
								Залогиниться
							</button>
						 </div>

					 <div class="buttons-list buttons-list--info">
						 <p class="typo__p" v-if="submitStatus === 'OK' ">вы успешно залогинились! <br> Сейчас перенаправим на главную страницу</p>
						 <p class="typo__p" v-if="submitStatus === 'ERROR'">пожалуйста, заполните поля корректно</p>
						 <p class="typo__p" v-else="v-else">{{ submitStatus }}</p>
					 </div>
					 <div class="buttons-list buttons-list--info">
						 <span>еще не зарегистрированы?
							<p>на <router-link class="link" to="/registration">страницу регистрации</router-link></p>
							<p>на <router-link class="link" to="/">главную страницу</router-link></p>
						 </span>
					 </div>
				 </form>

				 <!--<pre>{{$v.email}}</pre>-->
			 </div>
			 </div>
		 </div>
	 </section>
 </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators';

export default {

  data () {
    return {
      email: '',
      password: '',
      submitStatus: null
    }
	console.log('typeof submitStatus: 	', typeof submitStatus)
  },

  // validations:
  validations: {
    email: {
      required: required,
      email: email
    },
    password: {
      required: required,
      minLength: minLength(6)
    }
  },

  methods: {
    // Registration button
    onSubmit () {
			console.log('this.email: ' + this.email);
			console.log('this.password: ' + this.password);


				// Initialize Vuelidate
				this.$v.$touch()
				// Invalid
				if (this.$v.$invalid) {
					console.log('ERROR');
					this.submitStatus = 'ERROR'
					// Valid
				} else {
					//this.submitStatus = 'PENDING'
					console.log('OK.');
					this.submitStatus = 'OK'

					// объект User с почтой и паролем
					const user = {
						email: this.email,
						password: this.password
					}

					console.log('logIN !!!', 'this.submitStatus:' + this.submitStatus, 'email: ' + user.email + ' pass: ' + user.password);

					//редирект на главную с задержкой на 2 секунды
					//this.$router.push('/')
					setTimeout( () => this.$router.push({ path: '/'}), 3000);

				}
    }
  }
}
</script>

<style scoped>

	section{
		margin-top: 75px;
	}

	.auth {
	  display: flex;
	  justify-content: space-between;
	  flex-wrap: wrap;
	}
	.auth__banner,
	.auth__form {
	  width: 50%;
	}
	@media screen and (max-width: 768px) {
	  .auth__banner,
	  .auth__form {
		width: 100%;
		margin-bottom: 30px;
	  }
	  .auth__banner:last-child,
	  .auth__form:last-child {
		margin-bottom: 0;
	  }
	}
	.auth__form {
	  max-width: 400px;
	}
	.form-item .error {
	  display: none;
	  margin-bottom: 8px;
	  font-size: 16px;
	  color: #AD0D03;
	}
	.form-item.errorInput .error {
	  display: block;
	}
	input.error {
	  border-color: #AD0D03;
	}
	.buttons-list {
	  text-align: center;
	  margin-bottom: 20px;
	  width: 100%;
	}
	.buttons-list.buttons-list--info {
	  text-align: center;
	}
	.buttons-list.buttons-list--info:last-child {
	  margin-bottom: 0;
	}
	a {
	  color: #707070;
	}
	.button-disable{
		 opacity: 0.6;
	}
</style>