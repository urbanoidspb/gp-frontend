<template>
    <nav>
        <router-link to="/"><img class="logo" src="~/assets/logo.png" alt=""></router-link>
        <button class="burger_btn">
            <img class="burger" @click="show = !show" key="openburger" src="~/assets/burger.png" alt="">
        </button>
        <transition name="fade">
            <ul class="mobile" :class="{'mobile-show': show}">
                <li><router-link to="/about" active-class="active">О нас</router-link></li>
                <li><router-link to="/changes" active-class="active">Плафторма перемен</router-link></li>
                <li><router-link to="/news" active-class="active">Новости</router-link></li>
                <li><router-link to="/gallery" active-class="active">Галерея</router-link></li>
                <li><a href="https://gorod-geroev.spb.ru">Город героев</a></li>
            </ul>
       </transition>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            show: false
        }
    },
}
</script>

<style scoped>
    .mobile {
        display: none;
    }

    .mobile-show {
        display: flex !important;
    }

    nav {
        display: flex;
        height: 4vw;
        align-items: center;
    }

    .logo {
        height: 4.5rem;
        max-width: 10rem;
        margin-left: 1.5rem;
    }

    .burger_btn {
        width: 4rem !important;
        height: 4rem;
        display: none;
        border: none;
        background: none;
        padding: 0;
    }

    .burger {
        width: 100%;
    }

    ul {
        display: flex;
        align-items: center;
        list-style: none;
        margin-left: auto;
        background: #fff;
    }

    li > a {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        text-decoration: none;
        color: #323232;
        font-family: 'Rubik', sans-serif;
        font-size: 1.125rem;
        font-weight: 500;
        padding: 0.5rem;
        margin-left: 3rem;
    }

    @media (min-width: 765px) {
        .mobile {
            display: flex;
        }

        li:last-child > a {
            color: #fff;
            padding: 0.5rem 1.5rem;
            background: #0C6293;
            border: 1px solid #0C6293;
            border-radius: 30px;
        }
    }

    .active{
        color: #0C6293;
    }

    li > a:hover {
        color: #0C6293;
    }

    li:last-child > a:hover {
        background: #fff;
    }


    @media (max-width: 765px) {

        nav, ul {
            flex-direction: column;
            align-items: flex-start;
            z-index: 1000;
            margin-left: -4rem;
        }

        .logo {
            height: 9rem;
            max-width: 15rem;
        }

        nav {
            height: 6vw;
        }

        ul {
            width: 110%;
            align-items: center;
            padding: 1rem 0;
            background: #fff;
        }

        li {
            display: block;
            width: 100%;
        }

         ul a {
            display: block;
            width: 100%;
            font-size: 2.3rem;
            padding: 1rem 0;
        }

        .burger_btn {
            margin-top: 1.4vw;
            align-self: flex-end;
            display: flex;
            position: absolute;
            cursor: pointer;
            width: 2rem;
            height: 2rem;
        }
    }

    @media (max-width: 650px) {
        .burger_btn {
            margin-top: 1vw;
        }
    }

    @media (max-width: 560px) {
        .burger_btn {
            margin-top: 0.7vw;
        }
    }

    @media (max-width: 420px) {
        .logo {
            height: 9rem;
            max-width: 15rem;
        }

        nav {
            height: 6vw;
        }

        .burger_btn {
            margin-top: 5vw;
        }
    }
</style>

