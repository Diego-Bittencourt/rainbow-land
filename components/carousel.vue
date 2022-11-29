<template>
    <div class="carousel">
        <div class="carousel-inner">
            <div class="toggle-carousel">
                <span @click="setIndex(photo.index)" v-for="photo of photos" :key="photo.index"></span>
            </div>
            <div class="carousel-item"  v-for="photo of photos" :key="photo.index" >
                <transition name="carousel">
                <img v-if="photo.index === currentIndex" :src="photo.link"/>
                </transition>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

const currentIndex = ref(1);

function setIndex(number:number) {
    currentIndex.value = number;
};

    const photos = ref([
        {
            index: 1,
            link:'/img/carousel01.png'
        },
        {
            index: 2,
            link: '/img/carousel02.png'
        },
        {
            index: 3,
            link: '/img/carousel03.png'
        },
        {
            index: 4,
            link: '/img/carousel04.png'
        },
        {
            index: 5,
            link: '/img/carousel05.png'
        },
        {
            index: 6,
            link: '/img/carousel06.png'
        }
    ]);
</script>

<style scoped>

.carousel-enter-from {
    transform: translateX(100vw);
}

.carousel-enter-to {
    transform: translateX(0);
}


.carousel-leave-from {
    transform: translateX(0);
}

.carousel-leave-to {
    transform: translateX(-100vw);
}

.carousel-leave-active,
.carousel-enter-active {
    transition: all 1.5s ease-in-out;
}
.carousel {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    margin: 0;
    padding: 0;
    position: relative;
}

img {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    width: 100vw;
    height: auto;
}

.carousel-item {
    position: absolute;
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100vw;
}

.carousel-inner {
    width: 100vw;
}

.toggle-carousel {
    position: absolute;
    z-index: 1;
    top: 90vh;
    left: 50%;
    transform: translateX(-50%);
    margin: 0 auto;
    width: 30%;
    max-width: 200px;
    height: 30px;
    display: flex;
    justify-content: space-around;
    align-content: center;
}

.toggle-carousel > span {
    background-color: #333333cc;
    border: 1px solid #ffffffaa;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin: 0 5px;
    transition: all .1s ease-in;
}

.toggle-carousel > span:hover {
    box-shadow: 0px 0px 8px 9px #ffffffaa;
}
</style>
