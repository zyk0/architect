<template>
    <div>
        <div class="headline">
            <h2>Фотопримеры</h2>
        </div>
        <div class="headline">
            <p>json. изображения с API pexels</p>
        </div>

        <div class="img-section">
            <div class="container card">
                <div class="card-box" v-for="photo in photos" :key="photo.id">
                    <img
                        :src="photo.src.medium"
                        :alt="photo.photographer"
                        class="img"
                    />

                    <div class="card--info" :color="photo.avg_color">
                        <p>
                            <a
                                :href="photo.photographer_url"
                                target="_blank"
                                rel="noopener noreferrer"
                                >{{ photo.photographer }}
                                <small>{{ photo.photographer_id }}</small>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "image-grid",
    // data() {
    //   return {
    //     loading: true
    //   };
    // },
    props: {
        photos: Array,
    },
};
</script>

<style>
.headline {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    min-height: 20px;
    color: #ffffff;
    margin: 0px 0px 10px 0px;
}

.img-section {
    padding: 0px 0px 50px 0px;
}

.img {
    box-shadow: 0 5px 15px 2px rgba(0, 0, 0, 0.2);
}

.card--info p {
    font-size: 1rem;
    cursor: pointer;
    background: #ffffff;
    //background: coral;
}

.card {
    grid-auto-flow: dense;
}

.card-box {
    margin-bottom: 0.625em;
}

@media screen and (min-width: 768px) {
    .card {
        display: grid;
        gap: 2em;
        grid-template-columns: repeat(2, 1fr);
    }

    .card--info p {
        margin-top: 0em;
    }
}

@media screen and (min-width: 1025px) {
    .card {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media screen and (min-width: 1500px) {
    .card {
        grid-template-columns: repeat(2, 1fr);
    }
}

.small {
    font-size: 10px;
}
</style>
