<template>
    <div class="wrapper">
        <header>
            <div class="navbar">
                <div class="container">
                    <div class="navbar-content">
                        <div class="logo">
                            <span class=""> Архитектурная студия <wbr /></span>
                            <span class="latin"
                                >&#8220;{{ slogan | uppercase }}&#8221;</span
                            >
                        </div>

                        <nav id="hamNav">
                            <label for="hamburger">&#9776;</label>
                            <input type="checkbox" id="hamburger" />
                            <div id="hamItems">
                                <ul class="navbar-list">
                                    <li
                                        class="navbar-item"
                                        v-for="link in links"
                                        :key="link.title"
                                    >
                                        <router-link
                                            class="navbar-link"
                                            :title="link.title"
                                            :to="link.url"
                                        >
                                            {{ link.title }}
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            slogan: "ad unguem",
            links: [
                {title: "Главная", url: "/"},
                {title: "Дизайнеры", url: "/designers"},
                {title: "Плитка", url: "/lamina"},
                {title: "Фото", url: "/pexel"},
                {title: "Регистрация", url: "/registration"},
                {title: "Логин", url: "/login"},
            ],
        };
    },
    filters: {
        uppercase(value) {
            return value.toUpperCase();
        },
    },
};
</script>

<style lang="scss">
.navbar-link {
    &.router-link-exact-active {
        color: #ffffff;
    }
    &.router-link-exact-active::after {
        content: "| ";
    }
}
.latin {
    font-weight: 600;
}
</style>
