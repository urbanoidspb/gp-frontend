import Vuex from 'vuex';
import * as axios from 'axios';
import HTTPS from '../modules/https';

const creatStore = () => {
    return new Vuex.Store({
        state: {
            news: [],
            galleries: []
        },
        getters: {
            getNews(state) {
                return state.news;
            },
            getGalleries(state) {
                return state.galleries;
            }
        },
        mutations: {
            setNews (state, news) {
                state.news = news;
            },
            setGalleries (state, galleries) {
                state.galleries = galleries;
            },
        },
        actions: {
            async actSetNews(context) {
                const req = await HTTPS.get('news ')
                context.commit('setNews', req.data);
            },
            async actSetGalleries(context) {
                const req = await HTTPS.get('albums')
                context.commit('setGalleries', req.data);
            },
            submitMember (context, { member }) {
                HTTPS.post('members/join', member)
            }
        }

    });
};

export default creatStore