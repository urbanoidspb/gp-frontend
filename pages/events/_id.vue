<template>
  <div class="wrapper">
    <Contacts/>

    <no-ssr>
      <Navbar id="Navbar"/>
    </no-ssr>

    <section class="events">
        <h2 class="title">{{Event.title}}</h2>
        <h3 class="status" v-if="!Event.is_relevant">Акция завершена</h3>
        <article>
            <img :src="Event.photos[1]" alt="">
            <p>
                {{Event.description}}
            </p>
            <Modal id="Modal" v-bind:event-id="Event.id" v-bind:event-status="Event.is_relevant"/>
        </article>
        <section class="another_events">
            <header>
                <h3>Мероприятия</h3>
            </header>
            <main>
                <Event v-for="event in events.slice(0, 3)" v-bind:key="event.id" v-bind:event-id="event.id" v-bind:event-title="event.title" v-bind:event-time="event.time" v-bind:event-status="event.is_relevant" v-bind:event-photo="event.photos[0]"/>
            </main>
        </section>
    </section>

    <div class="background">
        <Footer id="Footer"/>
    </div>

  <!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(53837686, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/53837686" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->

  </div>
</template>

<script>
import Contacts from '~/components/Contacts.vue'
import Navbar from '~/components/Navbar.vue'
import Event from '~/components/Event.vue'
import Modal from '~/components/Modal.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Contacts,
    Navbar,
    Modal,
    Event,
    Footer
  },
  computed: {
    Event() {
      return this.events.find((event) => event.id == this.$route.params.id)
    }
  },
  async asyncData ({store}) {
    await store.dispatch('actSetEvents');
      return {
        events: store.getters.getEvents
    }
  },
}
</script>

<style>
html {
  font-size: 16px;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  font-family: 'Rubik', sans-serif;
}

.wrapper > * {
  grid-column: 2/14;
}

.events .title {
    text-align: center;
    font-size: 3rem;
    margin: 4rem 0 1rem;
    font-weight: 500;
}

.events > .status {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: 500;
    color: #CC203F;
}

.events article {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin-bottom: 5vw;
}

.events article img {
    grid-column: 2/6;
    width: 100%;
}

.events article p {
    font-size: 16px;
    grid-column: 2/6;
    margin: 2vw 0;
}

article #Modal {
    grid-column: 3/5;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    background: #C4C4C4;
    font-family: 'Rubik', sans-serif;
    border: none;
    border-radius: 30px;
    text-decoration: none;
    color: white;
    font-weight: 500;
    margin: 3vw 0;
    outline: none;
}

.another_events header h3 {
  text-align: center;
  font-size: 2rem;
}

.another_events main {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2vw;
  margin: 3vw 0 3vw;
}

.background {
  width: 100%;
  background: #0C6293;
  grid-column: 1/15;
  display: grid;
  grid-template-columns: repeat(14, 1fr);
}

#Footer {
  grid-column: 2/14;
}

@media (min-width: 1440px) {
  html {
  font-size: 20px;
  }
}

@media (min-width: 1920px) {
  html {
  font-size: 28px;
  }
}

@media (max-width: 1200px) {
  html {
  font-size: 14px;
  }
}

@media (max-width: 992px) {
  html {
  font-size: 12px;
  }
}

@media (max-width: 780px) {
  html {
  font-size: 10px;
  }
}

@media (max-width: 576px) {
  html {
  font-size: 8px;
  }
  .events main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2vw;
  }  
}

@media (max-width: 420px) {
  html {
  font-size: 7px;
  }
  .events main {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 4vw;
    margin: 4vw 0;
  }  
  article button {
    grid-column: 2/6;
    font-size: 2rem;
    padding: 1rem 0;
  }

  .events .title {
    margin: 6rem 0 2rem;
  }

  .events article img {
    grid-column: 1/7;
  }

.events article p {
    grid-column: 1/7;
    margin: 5vw 0;
  }

  .another_events header h3 {
    text-align: center;
    font-size: 2.5rem;
  }
}

@media (max-width: 360px) {
  html {
  font-size: 6px;
  }
}

</style>