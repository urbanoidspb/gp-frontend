<template>
  <div class="wrapper">
    <Contacts/>
    <no-ssr>
      <Navbar id="Navbar"/>
    </no-ssr>

    <section class="events">
        <h2 class="title">Мероприятия</h2>
        <main>
          <Event v-for="event in events.slice(0, this.eventsOnPage)" v-bind:key="event.id" v-bind:event-id="event.id" v-bind:event-title="event.title" v-bind:event-time="event.time" v-bind:event-status="event.is_relevant" v-bind:event-photo="event.photos[0]" v-bind:event-participants="event.participants"/>
        </main>
        <div class="showallRow">
            <button v-on:click="eventsOnPage += 6" class="showall" to="/about">Показать ещё</button>
        </div>
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
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Contacts,
    Navbar,
    Event,
    Footer
  },

  data() {
    return {
         eventsOnPage: 6
    }
  },

  async asyncData ({store}) {
    await store.dispatch('actSetEvents');
      return {
        events: store.getters.getEvents
    }
  }

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
    margin-top: 4rem;
}

.events main,
.showallRow {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2vw;
  margin: 5vw 0;
}

.events .showall {
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

@media (min-width: 1880px) {
  html {
  font-size: 24px;
  }
}


@media (max-width: 1880px) {
  html {
  font-size: 23px;
  }
}

@media (max-width: 1840px) {
  html {
  font-size: 22px;
  }
}

@media (max-width: 1740px) {
  html {
  font-size: 21px;
  }
}

@media (max-width: 1640px) {
  html {
  font-size: 20px;
  }
}

@media (max-width: 1540px) {
  html {
  font-size: 19px;
  }
}

@media (max-width: 1440px) {
  html {
  font-size: 18px;
  }
}

@media (max-width: 1340px) {
  html {
  font-size: 16px;
  }
}

@media (max-width: 1200px) {
  html {
  font-size: 14px;
  }
}

@media (max-width: 1050px) {
  html {
  font-size: 13px;
  }
}

@media (max-width: 992px) {
  html {
  font-size: 12px;
  }
}

@media (max-width: 910px) {
  html {
  font-size: 11px;
  }
}

@media (max-width: 840px) {
  html {
  font-size: 10px;
  }
}

@media (max-width: 700px) {
  html {
  font-size: 9px;
  }
}

@media (max-width: 650px) {
  html {
  font-size: 8px;
  }
}

@media (max-width: 576px) {
  html {
  font-size: 7px;
  }
  #Navbar {
    margin-bottom: 2vw;
  }
}

@media (max-width: 420px) {
  html {
  font-size: 6px;
  }
  .events main {
    grid-template-columns: 1fr 1fr;
    grid-gap: 4vw;
    margin: 10vw 0;
  }  
}

@media (max-width: 360px) {
  html {
  font-size: 5px;
  }
}

</style>