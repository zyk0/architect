<template>
    <div class="content-wrapper">
        <section>
            <div class="container">
                <div class="auth">
                    <div class="auth__banner">
                        <img src="@/style/images/ekb.jpg" />
                    </div>
                    <div class="auth__form">
                        <div>динамический роут {{ $route.params.id }}</div>
                        <p>
                            обратно на
                            <router-link class="link" to="/">
                                главную
                            </router-link>
                            страницу
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    //data() {return {id: this.$route.params.id}},
    created() {
        console.log("this.$route: ", this.$route);
        console.log("this.$route.fullPath: ", this.$route.fullPath);
        console.log("this.$route.params.id: ", this.$route.params.id);
    },
};
</script>

<style scoped>
section {
    margin-top: 5px;
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
</style>
