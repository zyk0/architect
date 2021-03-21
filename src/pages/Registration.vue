<template>
    <div class="content-wrapper">
        <section>
            <div class="container">
                <div class="auth">
                    <div class="auth__banner">
                        <img src="@/style/images/reg.jpg" />
                    </div>

                    <div class="auth__form">
                        <span class="title2">форма регистрации</span>
                        <form @submit.prevent="onSubmit">
                            <div
                                class="form-item"
                                :class="{errorInput: $v.email.$error}"
                            >
                                <input
                                    type="email"
                                    placeholder="Почтовый ящик"
                                    v-model="email"
                                    :class="{error: $v.email.$error}"
                                    @change="$v.email.$touch()"
                                />
                                <div class="error" v-if="!$v.email.required">
                                    поле обязательно для заполнения
                                </div>
                                <div class="error" v-if="!$v.email.email">
                                    email не корректный!
                                </div>
                            </div>

                            <div
                                class="form-item"
                                :class="{errorInput: $v.password.$error}"
                            >
                                <input
                                    type="password"
                                    placeholder="Пароль"
                                    v-model="password"
                                    :class="{error: $v.password.$error}"
                                    @change="$v.password.$touch()"
                                />
                                <div class="error" v-if="!$v.password.required">
                                    поле пароль обязателен для заполнения
                                </div>
                                <div
                                    class="error"
                                    v-if="!$v.password.minLength"
                                >
                                    длина пароля не менее
                                    {{
                                        $v.password.$params.minLength.min
                                    }}
                                    символов!
                                    <p>сейчас длина: {{ password.length }}</p>
                                </div>
                            </div>

                            <div
                                class="form-item"
                                :class="{errorInput: $v.repeatPassword.$error}"
                            >
                                <input
                                    type="password"
                                    placeholder="Повторите пароль"
                                    v-model="repeatPassword"
                                    :class="{error: $v.repeatPassword.$error}"
                                    @change="$v.repeatPassword.$touch()"
                                />
                                <div
                                    class="error"
                                    v-if="!$v.repeatPassword.sameAsPassword"
                                >
                                    оба пароля должны быть идентичными!
                                </div>
                            </div>

                            <div class="buttons-list">
                                <button
                                    class="button button-primary"
                                    type="submit"
                                    :class="{'button-disable': $v.$invalid}"
                                >
                                    Зарегистрироваться
                                </button>

                                <!--	isSubmitting: {{isSubmitting}}  смотрим состояние -->
                            </div>

                            <div class="buttons-list buttons-list--info">
                                <p class="typo__p" v-if="submitStatus === 'OK'">
                                    спасибо за регистрацию <br />
                                    Сейчас перенаправим на главную страницу
                                </p>
                                <p
                                    class="typo__p"
                                    v-if="submitStatus === 'ERROR'"
                                >
                                    пожалуйста, заполните поля корректно
                                </p>
                                <p class="typo__p" v-else="v-else">
                                    {{ submitStatus }}
                                </p>
                            </div>
                            <div class="buttons-list buttons-list--info">
                                <span
                                    >уже зарегистрированы?
                                    <p>
                                        на
                                        <router-link class="link" to="/login"
                                            >страницу логина</router-link
                                        >
                                    </p>
                                    <p>
                                        на
                                        <router-link class="link" to="/"
                                            >главную страницу</router-link
                                        >
                                    </p>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import {required, email, minLength, sameAs} from "vuelidate/lib/validators";

export default {
    data() {
        return {
            email: "",
            password: "",
            repeatPassword: "",
            submitStatus: null,
        };
    },

    // Vuelidate
    validations: {
        email: {
            required,
            email,
        },
        password: {
            required,
            minLength: minLength(6),
        },
        repeatPassword: {
            sameAsPassword: sameAs("password"),
        },
    },

    methods: {
        // Registration button
        onSubmit() {
            console.log("this.email: " + this.email);
            console.log("password: " + this.password);
            // Initialize Vuelidate
            this.$v.$touch();
            // Invalid
            if (this.$v.$invalid) {
                console.log("ERROR !!!");
                this.submitStatus = "ERROR";
                // Valid
            } else {
                // User
                const user = {
                    email: this.email,
                    password: this.password,
                };

                this.submitStatus = "OK";
                console.log(
                    "this.submitStatus: " + this.submitStatus,
                    "email: " + user.email + " pass: " + user.password
                );

                //редирект на главную!
                //this.$router.push('/')
                setTimeout(() => this.$router.push({path: "/"}), 3000);
            }
        },
    },
};
</script>

<style scoped>
section {
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
    color: #ad0d03;
}
.form-item.errorInput .error {
    display: block;
}
input.error {
    border-color: #ad0d03;
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

.button-disable {
    opacity: 0.6;
}
</style>
