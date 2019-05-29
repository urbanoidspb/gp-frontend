import Vuex from 'vuex';
import * as axios from 'axios';

const creatStore = () => {
    return new Vuex.Store({
        state: {
            events: [],
            news: [],
            galleries: []
        },
        getters: {
            getEvents(state) {
                return state.events;
            },
            getNews(state) {
                return state.news;
            },
            getGalleries(state) {
                return state.galleries;
            }
        },
        mutations: {
            setEvents (state, events) {
                state.events = events;
            },
            setNews (state, news) {
                state.news = news;
            },
            setGalleries (state, galleries) {
                state.galleries = galleries;
            },
            addParticipantToEvent (state, {Event, participant}) {
              Event.participants.push(participant);
            }
        },
        actions: {
            async actSetEvents(context) {
                const req = await axios.get('http://6ae7a55b.ngrok.io/api/events')
                context.commit('setEvents', req.data);
            },
            async actSetNews(context) {
                const req = await axios.get('http://6ae7a55b.ngrok.io/api/news ')
                context.commit('setNews', req.data);
            },
            async actSetGalleries(context) {
                const req = await axios.get('http://6ae7a55b.ngrok.io/api/albums')
                context.commit('setGalleries', req.data);
            },
            submitParticipant (context, { eventId, participant }) {
              let Event = this.state.events.find((event) => event.id == eventId);
              console.log(Event.participants);
              context.commit('addParticipantToEvent', { Event, participant});
              axios
                .post('http://6ae7a55b.ngrok.io/api/events/1/join', participant)
            }
        }

    });
};

export default creatStore