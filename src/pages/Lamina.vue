﻿<template>
    <div class="container-lamina">
        <div class="box-lamina">
            <div class="content-lamina">
                <img
                    src="https://images.unsplash.com/photo-1510176387329-6139e868a152?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=460&q=80"
                    alt=""
                />
                <p>content-lamina-1</p>
            </div>
        </div>
        <div class="box-lamina">
            <div class="content-lamina">
                <img
                    src="https://images.unsplash.com/photo-1610156830615-2eb9732de349?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=433&q=80"
                    alt=""
                />
                <p>content-lamina-2</p>
            </div>
        </div>
        <div class="box-lamina">
            <div class="content-lamina">
                <img
                    src="https://images.unsplash.com/photo-1565445816358-50ff7338ed59?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=350&q=80"
                    alt=""
                />
                <p>content-lamina-3</p>
            </div>
        </div>
        <div class="box-lamina">
            <div class="content-lamina">
                <img src="@/style/images/lattice_1.jpg" />
                <p>content-lamina-4</p>
            </div>
        </div>
        <div class="box-lamina">
            <div class="content-lamina">
                <p>content-lamina-5</p>
            </div>
        </div>
        <div class="box-lamina">
            <div class="content-lamina">
                <img
                    src="https://images.unsplash.com/photo-1610121956321-b7b52b13cf89?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=488&q=80"
                    alt=""
                />
                <p><!-- date-fns --></p>
                <p>Сегодня: {{ new Date() | date("dd MMMM yyyy") }}</p>
                <p>date-fns</p>
            </div>
        </div>
        <div class="box-lamina">
            <div class="content-lamina">
                <!-- модальное окно -->
                <div class="">
                    <button
                        class="btn btnWhite"
                        @click="modalValidate = !modalValidate"
                    >
                        Оставить заявку
                    </button>

                    <modalValidate
                        v-show="modalValidate"
                        @close="modalValidate = false"
                    />
                </div>

                <p>модальное окно</p>
            </div>
        </div>
    </div>
</template>

<script>
import modalValidate from "@/components/ModalValidate.vue";
import {dateFilter, createDateFilter} from "vue-date-fns";
import locale from "date-fns/locale/ru";

export default {
    components: {
        modalValidate: modalValidate,
    },
    data() {
        return {
            modalValidate: false,
        };
    },
    filters: {
        date: createDateFilter("dd MMMM yyyy", {locale}),
    },
};
</script>

<style scoped>
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
