<template>
    <div class="carousel">
        <div class="carousel-inner">
            <div class="toggle-carousel">
                <span @click="setIndex(photo.index)" :class="photo.index === currentIndex ? 'active-button' : null" v-for="photo of photos" :key="photo.index"></span>
            </div>
            <div class="carousel-item"  v-for="photo of photos" :key="photo.index" >
                <transition name="carousel-text" mode="in-out">
                    <div v-if="photo.index === currentIndex" class="textwrapper">
                    <h1 class="text">{{ photo.text.toUpperCase() }}</h1>
                    <p class="comment">{{ photo.comment }}</p>
                    </div>
                </transition>
                <transition name="carousel">
                <img v-if="photo.index === currentIndex" :src="photo.link"/>
                </transition>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

//creating the timer
let slideTimer:any = null;

onMounted(() => {
    slideTimer = setInterval(() => {
        if (currentIndex.value === 6) {
            currentIndex.value = 1;
        } else {
            currentIndex.value++;
        }
    }, 3000)
    
});

onUnmounted(() => {
    clearInterval(slideTimer);
})

const currentIndex = ref(1);

function setIndex(number:number) {
    currentIndex.value = number;
};

    const photos = ref([
        {
            index: 1,
            link:'/img/carousel01.png',
            text: 'Rainbow Land',
            comment: 'WHERE ALL COLORS SHINE'
        },
        {
            index: 2,
            link: '/img/carousel02.png',
            text: 'Nature',
            comment:'Fun for the whole family'
        },
        {
            index: 3,
            link: '/img/carousel03.png',
            text: 'English',
            comment: 'Immersed in a english speaking enviromnment'
        },
        {
            index: 4,
            link: '/img/carousel04.png',
            text: 'Take a Break',
            comment: 'Connect with loved ones and nature'
        },
        {
            index: 5,
            link: '/img/carousel05.png',
            text: 'Enjoy New Zealand',
            comment: 'A welcoming and multicultural country'
        },
        {
            index: 6,
            link: '/img/carousel06.png',
            text: 'Warm Christmas',
            comment: 'Enjoy a warm December day by the river and waterfall'
        }
    ]);
</script>

<style scoped>
.carousel-text-enter-from {
    opacity: 0;
    transform: translateY(-30px);
}

.carousel-text-enter-to,
.carousel-text-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.carousel-text-leave-to {
    opacity: 0;
    transform: translateY(30px);

}

.carousel-text-enter-active {
    transition: all 1.5s ease-in-out;
}

.carousel-text-leave-active {
    transition: all 0.3s;
}

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
    max-height: 100vh;
    height: 65vw;
    overflow: hidden;
    margin: 0;
    padding: 0;
    position: relative;
    background-color: black;
}

img {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
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
    height: auto;
}

.toggle-carousel {
    position: absolute;
    z-index: 10;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    margin: 0 auto;
    width: 30%;
    max-width: 200px;
    height: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.toggle-carousel > * {
    background-color: #e2e2e288;
    border: 2px solid #53535384;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    margin: 0 5px;
    transition: all .1s ease-in;
}

.active-button {
    background-color: #830909a0;
    box-shadow: 0px 0px 8px 9px #be0606cc;
    border-color: rgb(93, 3, 3);
}
.toggle-carousel > span:hover {
    box-shadow: 0px 0px 8px 9px #ffffffaa;
}

.textwrapper {
    position: absolute;
    top: 20%;
    left: 10%;
    font-family: Arial, Helvetica, sans-serif;
    color: #ddd;
    z-index: 15;
    width: 35%;
    text-shadow: 2px 2px #2a2a2a;
}

.text {
    font-size: 4rem;
    font-weight: bold;
}

.comment {
    font-size: 1.5rem;
    font-weight: bold;
}




@media screen and (max-width: 720px) {
    .toggle-carousel > * {
        width: 10px;
        height: 10px;
    }

    .textwrapper {
        top: 35%;
    }
    .text {
        font-size: 2rem;
    }

    .comment {
        font-size: 1rem;
    }
    .toggle-carousel {
        bottom: 2%;
    }
}


@media screen and (max-width: 480px) {
    .toggle-carousel > * {
        width: 8px;
        height: 8px;
        border: 1px solid transparent;
    }

    .toggle-carousel {
        bottom: 2%;
        width: auto;
    }

    .active-button {
    box-shadow: 0px 0px 3px 2px #be0606cc;
    }
    .toggle-carousel > span:hover {
    box-shadow: 0px 0px 3px 2px #ffffffaa;
    }

    .textwrapper {
        top: 35%;
        width: 60%;
    }
    .text {
        font-size: 1.4rem;
    }

    .comment {
        font-size: 0.8rem;
}
}
</style>
