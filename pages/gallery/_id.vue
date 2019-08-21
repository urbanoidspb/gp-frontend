<template>
<div>

    <section class="gallery_id">
        <h2 class="title">Санкт-Петербург</h2>
        <main>
            <img v-for="photo in Gallery.photos.slice(0, this.PhotosOnPage)" v-bind:key="photo" :src="photoSrc(photo)" alt="">
        </main>
        <div class="showallRow">
            <button v-on:click="PhotosOnPage += 6" class="showall" v-if="!(this.PhotosOnPage >= Gallery.photos.length)">Показать ещё</button>
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
         PhotosOnPage: 6
    }
  },
  computed: {
    Gallery() {
      return this.galleries.find((gallery) => gallery.id == this.$route.params.id)
    },
    
  },
  methods: {
    photoSrc(photo) {
      if (photo !== undefined) {
        return photo.path
      }
    }
  },
  async asyncData ({store}) {
   await store.dispatch('actSetGalleries');
      return {
        galleries: store.getters.getGalleries
    }
  },
}
</script>

<style>
.gallery_id .title {
    text-align: center;
    font-size: 3rem;
    margin-top: 4rem;
}

.gallery_id main,
.showallRow {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 4vw 2vw;
  margin: 5vw 0;
}

.gallery_id main img {
    width: 100%;
}

.gallery_id .showall {
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

@media (max-width: 576px) {
  .gallery_id main {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2vw;
  }  
}

@media (max-width: 420px) {
  .gallery_id main {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 4vw;
    margin: 10vw 0;
  }  
  .main_item > h2 {
    margin-top: 1rem;
    font-size: 2.5rem;   
  }
}
</style>