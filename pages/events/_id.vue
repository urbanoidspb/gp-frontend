<template>
<div>
    <section class="events">
        <h2 class="title">{{Event.title}}</h2>
        <h3 class="status" v-if="!Event.is_relevant">Акция завершена</h3>
        <article>
            <img :src="photoSrc(Event.photos)" alt="">
            <p>
                {{Event.description}}
            </p>
            <div class="ModalRow">
              <Modal id="Modal" v-bind:event-id="Event.id" v-bind:event-status="Event.is_relevant"/>
            </div>
        </article>
        <section class="another_events">
            <header>
                <h3>Мероприятия</h3>
            </header>
            <main>
                <Event class="event_block" v-for="event in events.slice(0, 4)" v-bind:key="event.id" v-bind:event-id="event.id" v-bind:event-title="event.title" v-bind:event-time="event.time" v-bind:event-status="event.is_relevant" v-bind:event-photo="event.photos[0]"/>
            </main>
        </section>
    </section>
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
  methods: {
    photoSrc(photos) {
      if (photos[0] !== undefined) {
        return photos[0].path
      }
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
    font-size: 1.5rem;
    grid-column: 2/6;
    margin: 2vw 0;
    line-height: 2.5rem;
    white-space: pre-line;
}

.ModalRow {
  width: 100%;
  height: 3.5rem;
  grid-column: 3/5;
  text-align: center;
}

article #Modal {
    height: 100%;
    color: white;
    font-weight: 500;
    outline: none;
}

.another_events header h3 {
  text-align: center;
  font-size: 2rem;
}

.another_events main {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2vw;
  margin: 3vw 0 3vw;
}

@media (max-width: 420px) {
  .another_events main {
    grid-template-columns: 1fr 1fr;
    grid-gap: 4vw;
    margin: 4vw 0;
  }  
  article button {
    grid-column: 2/6;
    font-size: 2rem;
    padding: 1rem 0;
  }

  .events .title {
    margin: 4rem 0 2rem;
  }

  .events article img {
    grid-column: 1/7;
  }

  .events article p {
    grid-column: 1/7;
    margin: 5vw 0;
    font-size: 2.2rem;
  }

  .another_events header h3 {
    text-align: center;
    font-size: 2.5rem;
  }

  article #Modal {
    grid-column: 3/5;
  }

  .event_block:last-child,
  .event_block:nth-child(3){
    display: none !important;
  }
}
</style>