<template>
<div>
    <up v-if="(this.NewsOnPage > 8)"/>

    <section class="news">
        <h2 class="title">Новости</h2>
        <main>
            <client-only>
                <News v-for="NewsItem in news.slice(0, this.NewsOnPage)" v-bind:key="NewsItem.id" v-bind:news-item-id="NewsItem.id" v-bind:news-item-title="NewsItem.title" v-bind:news-item-date="NewsItem.created_at" v-bind:news-item-photo="NewsItem.photos[0]"/>
            </client-only>
        </main>
        <div class="showallRow">
            <button v-on:click="NewsOnPage += 8" v-if="!(this.NewsOnPage >= news.length)" class="showall" to="/about">Показать ещё</button>
        </div>
    </section>
</div>
</template>

<script>
import Contacts from '~/components/Contacts.vue'
import Navbar from '~/components/Navbar.vue'
import News from '~/components/News.vue'
import up from '~/components/up.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Contacts,
    Navbar,
    News,
    up,
    Footer
  },

  data() {
    return {
         NewsOnPage: 8
    }
  },

  async asyncData ({store}) {
      await store.dispatch('actSetNews');
      return {
        news: store.getters.getNews
    }
  }
}
</script>

<style>
.news .title {
    text-align: center;
    font-size: 3rem;
    margin-top: 4rem;
}

.news main,
.showallRow {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2vw;
  margin: 5vw 0;
}

.showallRow {
  grid-template-columns: 1fr 1fr 1fr;
}

.news .showall {
    grid-column: 2/3;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    padding: 0.7rem 1.2rem;
    background: transparent;
    font-family: 'Rubik', sans-serif;
    border: 1px solid #023C71;
    border-radius: 100px;
    text-decoration: none;
    color: #023C71;
    font-weight: 500;
    outline: none;
    cursor: pointer;
}

@media (max-width: 420px) {
  .news main {
    grid-template-columns: 1fr 1fr;
    grid-gap: 4vw 2vw;
    margin: 10vw 0;
  }  
}
</style>