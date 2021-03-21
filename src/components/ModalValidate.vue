<template>
    <modal title="Оставить заявку" @close="$emit('close')">
        <!-- body -->
        <div slot="body">
            <form @submit.prevent="onSubmit">
                <!-- name -->
                <div class="form-item" :class="{errorInput: $v.name.$error}">
                    <label>Укажите Ваше имя:</label>
                    <p class="errorText" v-if="!$v.name.required">
                        Поле обязательно для заполнения!
                    </p>
                    <p class="errorText" v-if="!$v.name.minLength">
                        Name must have at least
                        {{ $v.name.$params.minLength.min }} !
                    </p>
                    <input
                        type="text"
                        placeholder="Имя"
                        v-model="name"
                        :class="{error: $v.name.$error}"
                        @change="$v.name.$touch()"
                    />
                </div>

                <!-- email -->
                <div class="form-item" :class="{errorInput: $v.email.$error}">
                    <label>Почтовый ящик:</label>
                    <p class="errorText" v-if="!$v.email.required">
                        Поле обязательно для заполнения!
                    </p>
                    <p class="errorText" v-if="!$v.email.email">
                        Email не корректный
                    </p>
                    <input
                        type="email"
                        placeholder="mail@gmail.com"
                        v-model="email"
                        :class="{error: $v.email.$error}"
                        @change="$v.email.$touch()"
                    />
                </div>

                <!-- mobile phone  -->
                <div class="form-item" :class="{errorInput: $v.phone.$error}">
                    <label>Номер телефона:</label>
                    <p class="errorText" v-if="!$v.phone.required">
                        Заполните поле!
                    </p>
                    <p class="errorText" v-if="!$v.phone.minLength">
                        Номер мобильного телефона не менее
                        {{ $v.phone.$params.minLength.min }} символов!
                    </p>
                    <input
                        type="tel"
                        min="11"
                        max="12"
                        placeholder="+7912*******"
                        v-model="phone"
                        :class="{error: $v.phone.$error}"
                        @change="$v.phone.$touch()"
                    />
                </div>

                <!-- button -->
                <button class="btn btnPrimary">Отправить</button>
            </form>
        </div>
    </modal>
</template>

<script>
import {required, minLength, email} from "vuelidate/lib/validators";

import modal from "@/components/Modal.vue";

export default {
    components: {modal},
    data() {
        return {
            name: "",
            email: "",
            phone: "",
        };
    },
    validations: {
        name: {
            required,
            minLength: minLength(6),
        },
        email: {
            required,
            email,
        },
        phone: {
            required,
            minLength: minLength(11),
        },
    },
    methods: {
        onSubmit() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                /*
        const user = {
          name:  this.name,
          email: this.email,
		  phone: this.phone
        }
		*/
                console.log("modal vuelidate  name: ", this.name);
                console.log("modal vuelidate  email: ", this.email);
                console.log("modal vuelidate  phone: ", this.phone);

                // reset - очистка полей
                // this.$emit('close') - закрытие при onSubmit(){}
                this.name = "";
                this.email = "";
                this.phone = "";
                this.$v.$reset();
                this.$emit("close");
            }
        },
    },
};
</script>

<style lang="scss">
.form-item .errorText {
    display: none;
    margin-bottom: 8px;
    font-size: 13.4px;
    color: #de4040;
}
.form-item {
    &.errorInput .errorText {
        display: block;
    }
}
input.error {
    border-color: #de4040;
}

input::placeholder {
    opacity: 0.5;
    color: #696969;
}
input {
    color: #000000;
}
</style>
