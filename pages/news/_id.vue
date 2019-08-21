<template>
<div>
    <section class="news">
        <h2 class="title">{{NewsItem.title}}</h2>
        <article>
            <img :src="photoSrc(NewsItem.photos)" alt="">
            <p>
                {{NewsItem.text}}
            </p>
        </article>
        <section class="another_news">
            <header>
                <h3>Другие новости</h3>
            </header>
            <main>
                <News class="news_block" v-for="NewsItem in news.slice(0, 4)" v-bind:key="NewsItem.id" v-bind:news-item-id="NewsItem.id" v-bind:news-item-title="NewsItem.title" v-bind:news-item-date="NewsItem.created_at" v-bind:news-item-photo="NewsItem.photos[0]"/>
            </main>
        </section>
    </section>
</div>
</template>

<script>
import Contacts from '~/components/Contacts.vue'
import Navbar from '~/components/Navbar.vue'
import News from '~/components/News.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Contacts,
    Navbar,
    News,
    Footer
  },
  computed: {
    NewsItem() {
      return this.news.find((NewsItem) => NewsItem.id == this.$route.params.id)
    }
  },
  methods: {
    photoSrc(photos) {
      if (photos[0] !== undefined) {
        return photos[0].path
      }
    }
  },
  async asyncData ({store}) {
    await store.dispatch('actSetNews');
      return {
        news: store.getters.getNews
    }
  },
}
</script>

<style>
.news .title {
    text-align: center;
    font-size: 3rem;
    margin: 4rem 0;
}

.news article {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin-bottom: 5vw;
}

.news article img {
    grid-column: 2/6;
    width: 100%;
}

.news article p {
    font-size: 1.5rem;
    grid-column: 2/6;
    margin: 2vw 0;
    line-height: 2.5rem;
}

.another_news header h3 {
  text-align: center;
  font-size: 2rem;
}

.another_news main {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2vw;
  margin: 3vw 0 3vw;
}

@media (max-width: 420px) {
  .another_news main {
    grid-template-columns: 1fr 1fr;
    grid-gap: 4vw;
    margin: 4vw 0;
  }  
  .news article img {
    grid-column: 1/7;
  }

  .news article p {
    grid-column: 1/7;
    margin: 5vw 0 2vw;
    font-size: 2.2rem;
  }

  .another_news header h3 {
    font-size: 2.5rem;
  }

  .news_block:last-child,
  .news_block:nth-child(3){
    display: none !important;
  }
}
</style>