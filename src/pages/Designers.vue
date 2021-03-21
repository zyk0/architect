<template>
    <div class="wrapper-content wrapper-content--fixed">
        <section>
            <div class="container">
                <h5>
                    <p>Лист json API</p>
                    Сортировка по возрасту и имени
                </h5>
                <table>
                    <thead>
                        <tr>
                            <th>Фото &#10004;</th>
                            <th @click="sort('name')">Имя &#8595;</th>
                            <th @click="sort('age')">Возраст &#8595;</th>
                            <th>Гендер</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="user in usersSort"
                            :key="user.id"
                            v-if="user.gender === 'female'"
                        >
                            <td><img :src="user.img" alt="Architect " /></td>
                            <td>{{ user.name }}</td>
                            <td>{{ user.age }}</td>
                            <td>{{ user.gender }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            users: [],
            currentSort: "name",
            currentSortDir: "asc",
        };
    },
    created() {
        axios
            .get(
                "https://gist.githubusercontent.com/zyk0/5aee9c131d501d1fd63f581ae5c8b263/raw/8a9ace6d5a384fc5eac925e3c08f218865020cf0/girl.json"
            )
            .then((response) => {
                // console.log(response.data)
                this.users = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },

    computed: {
        usersSort() {
            return this.users.sort((a, b) => {
                let modificator = 1;
                if (this.currentSortDir === "desc") {
                    modificator = -1;
                }
                if (a[this.currentSort] < b[this.currentSort]) {
                    return -1 * modificator;
                }
                if (a[this.currentSort] > b[this.currentSort]) {
                    return 1 * modificator;
                }
                return false;
            });
        },
    },

    methods: {
        sort(event) {
            if (event === this.currentSort) {
                // if-else
                if (this.currentSortDir === "asc") {
                    return (this.currentSortDir = "desc");
                } else {
                    return (this.currentSortDir = "asc");
                }

                // либо тернарным оператором ?:
                //this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc'
            } else {
                this.currentSort = event;
            }

            console.log(
                "sort: ",
                this.currentSort,
                " |dir: ",
                this.currentSortDir
            );
        },
    },
};
</script>

<style lang="scss" scoped>
img {
    width: 60px;
    height: auto;
    border-radius: 0%;
    margin-right: 16px;
}
.button-list {
    width: 100%;
    text-align: center;

    .btn {
        border-radius: 0px;
        margin: 0 20px;
    }
}
</style>
