<template>
  <div>
    <up v-if="(this.eventsOnPage > 8)"/>
    <section class="events">
      <h2 class="title">Мероприятия</h2>
      <main>
        <Event v-for="event in events.slice(0, this.eventsOnPage)" v-bind:key="event.id" v-bind:event-id="event.id"
               v-bind:event-title="event.title" v-bind:event-time="event.time" v-bind:event-status="event.is_relevant"
               v-bind:event-photo="event.photos[0]" v-bind:event-participants="event.participants"/>
      </main>
      <div class="showallRow">
        <button v-on:click="eventsOnPage += 8" v-if="!(this.eventsOnPage >= events.length)" class="showall" to="/about">
          Показать ещё
        </button>
      </div>
    </section>
  </div>
</template>

<script>
  import Contacts from '~/components/Contacts.vue'
  import Navbar from '~/components/Navbar.vue'
  import Event from '~/components/Event.vue'
  import up from '~/components/up.vue'
  import Footer from '~/components/Footer.vue'

  export default {
    components: {
      Contacts,
      Navbar,
      Event,
      up,
      Footer
    },

    data() {
      return {
        eventsOnPage: 8
      }
    },

    async asyncData({store}) {
      await store.dispatch('actSetEvents');
      return {
        events: store.getters.getEvents
      }
    }

  }
</script>

<style>
  .events .title {
    text-align: center;
    font-size: 3rem;
    margin-top: 4rem;
    font-weight: bold;
  }

  .events main,
  .showallRow {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2vw;
    margin: 5vw 0;
  }

  .showallRow {
    grid-template-columns: 1fr 1fr 1fr;
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

  @media (max-width: 420px) {
    .events main {
      grid-template-columns: 1fr 1fr;
      grid-gap: 4vw;
      margin: 10vw 0;
    }
  }
</style>