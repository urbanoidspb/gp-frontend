<template>
<div>
    <up v-if="(this.galleriesOnPage > 6)"/>

    <section class="gallery">
        <h2 class="title">Галерея</h2>
        <main>
            <div class="main_item"  v-for="gallery in galleries.slice(0, this.galleriesOnPage)" v-bind:key="gallery.id" >
                <client-only>
                    <Gallery v-bind:gallery-id="gallery.id" v-bind:gallery-photos="gallery.photos" v-bind:gallery-time="gallery.time"/>
                </client-only>
                <h2 class="name">{{funcTitle(gallery.title)}}</h2>
            </div>
        </main>
        <div class="showallRow">
            <button v-on:click="galleriesOnPage += 6" v-if="!(this.galleriesOnPage >= galleries.length)" class="showall" to="/about">Показать ещё</button>
        </div>
    </section>
</div>
</template>

<script>
import Contacts from '~/components/Contacts.vue'
import Navbar from '~/components/Navbar.vue'
import Gallery from '~/components/Gallery.vue'
import up from '~/components/up.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Contacts,
    Navbar,
    Gallery,
    up,
    Footer
  },
  data() {
    return {
         galleriesOnPage: 6
    }
  },
  async asyncData ({store}) {
      await store.dispatch('actSetGalleries');
      return {
        galleries: store.getters.getGalleries
    }
  },

  methods: {
    ellipsis(title) {
        var el;
        return (title.length > 40) ? el = "..." : el = '';
    },
    funcTitle(title) {
            return title.toString().slice(0,40) + this.ellipsis(title.toString())
        },
  },
}
</script>

<style>
.gallery .title {
    text-align: center;
    font-size: 3rem;
    margin-top: 4rem;
}

.gallery main,
.showallRow {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 4vw 2vw;
  margin: 5vw 0;
}

.main_item > h2 {
    margin-top: 0.5rem;
    font-size: 1.4rem;
    font-weight: 500;    
}

.gallery .showall {
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
  .gallery main {
    grid-template-columns: 1fr 1fr;
    grid-gap: 4vw;
    margin: 10vw 0;
  }  
  .main_item > h2 {
    margin-top: 0.5rem;
    font-size: 2rem;   
  }
}
</style>