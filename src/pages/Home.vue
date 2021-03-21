<template>
    <div class="wrapper-content wrapper-content--fixed">
        <section>
            <div class="">
                <div class="homecontainer">
                    <div class="item item-1">item 1</div>
                    <div class="item item-2">
                        <div class="item-2-title">item 2</div>
                        Sic ego nec sine te nec tecum vivere possum. Mens sana
                        in corpore sano. Audentes fortuna iuvat. Possunt, quia
                        posse videntur.
                    </div>
                    <div class="item item-3">item 3</div>
                    <div class="item item-4">
                        item-4
                        <div class="vertical">
                            <span
                                ><router-link class="link verticalmenu" to="/1"
                                    >Architecture</router-link
                                ></span
                            >
                            <span
                                ><router-link class="link verticalmenu" to="/2"
                                    ><b class="line"></b>Design</router-link
                                ></span
                            >
                            <span
                                ><router-link class="link verticalmenu" to="/3"
                                    ><b class="line"></b>Studio</router-link
                                ></span
                            >

                            <!--
						<span class="verticalmenu">Architecture</span>
						<span class="verticalmenu"><b class="line"></b>Design</span>
						<span class="verticalmenu"><b class="line"></b>Studio</span>
						-->
                        </div>

                        <!-- vertical menu router -->
                        <!--
				<div class="vertical">
						<span class="verticalmenu"
						     	v-for="link in links"
							    :key="link.title">
									<router-link
											class="navbar-link"
											:title="link.title"
											:to="link.url">
											{{ link.title }}
									</router-link>
						</span>
				</div>
				-->
                        <router-view></router-view>
                    </div>

                    <div class="item item-5">
                        <p class="item-5-logo">
                            <span class="glitch" data-text="FASHIONGLITCH">
                                FASHIONGLITCH
                            </span>
                        </p>
                        <div class="glitch" data-text="GLITCH">GLITCH</div>
                    </div>

                    <!-- <div class="item item-6"> item 6</div> -->
                    <div class="item item-7">item 7</div>
                    <div class="item item-8">
                        item 8 Ut ameris, amabilis esto. Amor omnibus idem.
                        Amantium irae amoris integratio est.
                    </div>

                    <div class="item item-9">item 09</div>
                    <div class="item item-10">
                        item 10 Ultima ratio regum. Flectere si nequeo superos,
                        Acheronta movebo. Mens agitat molem.
                    </div>
                    <div class="item item-11">item 11</div>
                    <div class="item item-12">item 12</div>

                    <div class="item item-13">item 13</div>
                    <div class="item item-14">item 14</div>
                    <div class="item item-15">item 15</div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {title: "Home", url: "/home/architecture"},
                {title: "Home", url: "/home/design"},
                {title: "Home", url: "/home/studio"},
            ],
        };
    },
};
</script>

<style scoped>
.verticalmenu {
    margin: 10px 0px 0px 0px;
}
.verticalmenu:nth-child(1n) {
    padding: 0px 0px 0px 0px;
}
.verticalmenu:nth-child(2n) {
    padding: 0px 0px 0px 0px;
}
.verticalmenu:nth-child(3n) {
    padding: 10px 0px 0px 0px;
}
</style>
