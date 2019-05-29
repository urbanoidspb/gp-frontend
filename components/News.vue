<template>
    <section class="news" :style="{backgroundImage}">
        <h2>{{NewsItemTitle}}</h2>
        <span class="data">{{NewsItemDate}}</span>
        <router-link :to="{ path: '/news/' + NewsItemId }"></router-link>
    </section>
</template>

<script>

export default {
    name: 'News',
    components: {

    },
    props: {
        NewsItemId: Number,
        NewsItemTitle: String,
        NewsItemDate: String,
        NewsItemPhoto: String
    },
    computed: {
        backgroundImage() {
                    var style = 'url("' + this.NewsItemPhoto + ") 50% 50% no-repeat;"
                    return style;
            },
    }
}
</script>

<style scoped>
    .news {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 0;
        width: 100%;
        height: 18vw;
        border: 1px solid #71D5A2;
        border-radius: 15px;
        font-family: 'Rubik', sans-serif;
        color: white;
        box-shadow: inset -12px -181px 95px -72px rgba(0,0,0,0.75);
        background-size: cover;
        padding: 1rem 1rem;
        position: relative;
    }

    h2 {
        text-decoration: underline;
        font-weight: 500;
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    a {
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    @media (max-width: 420px) {
        .news {
            height: 40vw;
            padding: 3rem 2rem;
        }
        h2 {
            font-size: 3rem;
            margin-bottom: 2rem;
        }
        span {
            font-size: 2rem;
        }
    }
</style>
