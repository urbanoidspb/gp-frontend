<template>
  <div class="wrapper">
    <Contacts/>
    <no-ssr>
      <Navbar id="Navbar"/>
    </no-ssr>
    <section class="joinUs">
      <h2>Проектная площадка</h2>
      <h1>"Петербург - город перемен"</h1>
      <button class="SignInButton">Присоединиться</button>
      <p>*Форма заполняемая личными данными</p>
    </section>

    <section class="steps">
      <div class="step">
        <img src="~/assets/step1.png" alt="">
        <h3>Подай заявку</h3>
      </div>
      <div class="step">
        <img src="~/assets/step2.png" alt="">
        <h3>Защити проект</h3>
      </div>
      <div class="step">
        <img src="~/assets/step3.png" alt="">
        <h3>Получи поддержку</h3>
      </div>
    </section>

    <section class="events">
        <header>
          <h2>Мероприятия</h2>
          <router-link to="/events">Все мероприятия</router-link>
        </header>
        <main>
          <Event v-for="event in events.slice(0, 3)" v-bind:key="event.id" v-bind:event-id="event.id" v-bind:event-title="event.title" v-bind:event-time="event.time" v-bind:event-status="event.is_relevant" v-bind:event-photo="event.photos[0]"/>
        </main>
    </section>

    <section class="news">
        <header>
          <h2>Новости</h2>
          <router-link to="/news">Все новости</router-link>
        </header>
        <main>
          <News v-for="NewsItem in news.slice(0, 3)" v-bind:key="NewsItem.id" v-bind:news-item-id="NewsItem.id" v-bind:news-item-title="NewsItem.title" v-bind:news-item-date="NewsItem.created_at" v-bind:news-item-photo="NewsItem.photos[0]"/>
        </main>
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
import News from '~/components/News.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Contacts,
    Navbar,
    Event,
    News,
    Footer
  },
  async asyncData ({store}) {
      await store.dispatch('actSetEvents');
      await store.dispatch('actSetNews');
      return {
        events: store.getters.getEvents,
        news: store.getters.getNews
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

.joinUs {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 65vw;
  font-size: 2rem;
  color: #1B1B1B;
  background: url('../assets/main_background.png') 50% 50% no-repeat;
  background-size: contain;
}

.joinUs h1 {
  margin: 2rem 0 3rem;
}

.joinUs h2 {
  font-weight: 500;
  
}

.joinUs .SignInButton {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 2.5rem;
  background: #71D5A2;
  padding: 1rem 2rem;
  border: none;
  border-radius: 100px;
  text-decoration: none;
  color: white;
  outline: none;
  cursor: pointer;
}

.joinUs p {
  margin: 0.625rem 0;
  font-size: 0.825rem;
  color: #515050;
}

.steps {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1vw;
  margin: 5vw 0;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step img {
  width: 70%;
}

.step h3 {
  font-size: 2rem;
  padding: 2rem 0;
  font-weight: normal;
  text-align: center;
}

.events header,
.news header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.events header h2,
.news header h2 {
  font-size: 2.7rem;
  font-weight: 500;
}

.events header a,
.news header a {
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
}

.events main,
.news main {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2vw;
  margin: 5vw 0;
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
  .joinUs {
  height: 65vw;
  }
}

@media (max-width: 992px) {
  html {
  font-size: 12px;
  }
  .joinUs {
  height: 70vw;
  }
}

@media (max-width: 780px) {
  html {
  font-size: 10px;
  }
  .joinUs {
  height: 70vw;
  }
}

@media (max-width: 576px) {
  html {
  font-size: 8px;
  }
  .events main,
  .news main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2vw;
  }  
}

@media (max-width: 420px) {
  html {
  font-size: 7px;
  }
  #Navbar {
    padding-bottom: 8rem;
  }
  .events main,
  .news main {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 4vw;
    margin: 10vw 0;
  }  
  .steps {
    margin: 10vw 0;
  }
}

@media (max-width: 360px) {
  html {
  font-size: 6px;
  }
  .joinUs {
  height: 80vw;
  }
}

</style>

