<template>
    <transition name="modal">
        <div class="modal__wrapper" @click="$emit('close')">
            <div class="modal-content" v-on:click.stop="">
                <!--
				 v-on:click.stop=
				 модификатор события для v-on
				 событие click не будет всплывать дальше
				-->
                <div class="modal-header">
                    <span class="modal-title"> {{ title }} </span>
                    <span class="button-close" @click="$emit('close')">
                        &#10060;
                    </span>
                </div>

                <div class="modal-body">
                    <slot name="body">slot body</slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    data() {
        return {};
    },
    mounted() {
        /*  закрытие по ESC */
        document.body.addEventListener("keyup", (keybordevent) => {
            if (keybordevent.keyCode === 27) {
                this.$emit("close");
                console.log(" button 27 - Esc");
            }
        });
    },
    computed: {},
    methods: {},
};
</script>

<style lang="scss" scoped>
// Animation
.modal-enter {
    opacity: 0;
}
.modal-leave-active {
    opacity: 0;
}
.modal-enter .modal-content,
.modal-leave-active .modal-content {
    transform: scale(1.2);
}

.modal__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    transition: opacity 0.2s ease;
    right: 0;
    z-index: 998;
    background-color: rgba(00, 00, 00, 0.48);
}

.modal-content {
    position: relative;
    max-width: 600px;
    padding: 20px 18px;
    background-color: #ffffff;
    color: #4c4e52;
    border: 1px solid #4c4e52;
    transition: all 0.2s ease;
    border-radius: 0px;
    z-index: 999;
    overflow: hidden;
    padding-bottom: 20px;
    @media screen and (min-width: 900px) {
        min-width: 500px;
    }
}
.modal-header {
    display: flex;
    align-self: center;
    justify-content: space-between;
    padding-bottom: 20px;
    span {
        font-size: 24px;
    }
    .button-close {
        cursor: pointer;
    }
}
.modal-body {
    text-align: center;
}
</style>
