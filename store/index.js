import Vuex from 'vuex';
import * as axios from 'axios';

const creatStore = () => {
    return new Vuex.Store({
        state: {
            events: [{"id":1,"title":"Aliquam officiis sint quo  biko fok dokfo.","description":"\u041d\u043e\u0437\u0434\u0440\u0435\u0432\u0443. \u2014 \u0410 \u043a\u0430\u043a\u0430\u044f \u0431\u044b, \u043e\u0434\u043d\u0430\u043a\u043e \u0436, \u043f\u043e\u0440\u044f\u0434\u043a\u043e\u043c. \u0425\u043e\u0442\u044f \u0431\u0440\u0438\u0447\u043a\u0430 \u043c\u0447\u0430\u043b\u0430\u0441\u044c \u0432\u043e \u0432\u0441\u044e \u0441\u0442\u0435\u043d\u0443, \u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0435 \u043c\u0430\u0441\u043b\u044f\u043d\u044b\u043c\u0438 \u043a\u0440\u0430\u0441\u043a\u0430\u043c\u0438, \u2014 \u0441\u043b\u043e\u0432\u043e\u043c, \u043d\u0430\u0447\u043d\u0443\u0442 \u0433\u043b\u0430\u0434\u044c\u044e, \u0430 \u043a\u043e\u043d\u0447\u0430\u0442 \u0433\u0430\u0434\u044c\u044e. \u2014 \u0412\u0437\u0434\u043e\u0440! \u2014 \u0441\u043a\u0430\u0437\u0430\u043b \u0421\u043e\u0431\u0430\u043a\u0435\u0432\u0438\u0447. \u2014 \u0422\u044b \u0432\u043e\u0437\u044c\u043c\u0438 \u0438\u0445\u043d\u0438\u0439-\u0442\u043e.","time":"2019-05-30","is_relevant":false,"created_at":"2019-05-30 02:07:29","updated_at":"2019-05-30 02:07:29","photos":[],"participants":[]},{"id":2,"title":"Unde id porro labore.","description":"\u0422\u0430\u043a \u0443\u0436, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043d\u0435 \u043f\u0440\u043e\u0433\u043e\u0432\u043e\u0440\u0438\u0441\u044c \u043d\u0438\u043a\u043e\u043c\u0443. \u042f \u0437\u0430\u0434\u0443\u043c\u0430\u043b \u0436\u0435\u043d\u0438\u0442\u044c\u0441\u044f; \u043d\u043e \u043d\u0443\u0436\u043d\u043e \u0442\u0435\u0431\u0435 \u2014 \u0434\u0430\u043c \u0438\u0445 \u0432 \u0418\u0442\u0430\u043b\u0438\u0438 \u043f\u043e \u0441\u043e\u0432\u0435\u0442\u0443 \u0432\u0435\u0437\u0448\u0438\u0445 \u0438\u0445 \u043a\u0443\u0440\u044c\u0435\u0440\u043e\u0432. \u0413\u043e\u0441\u043f\u043e\u0434\u0438\u043d \u0441\u043a\u0438\u043d\u0443\u043b \u0441 \u0441\u0435\u0431\u044f \u0441\u0431\u0440\u0443\u044e, \u043a\u0430\u043a \u0432\u0435\u0440\u0445\u043d\u044e\u044e, \u0442\u0430\u043a \u0438 \u043f\u0438\u0442\u044c. \u2014 \u041e\u0442\u0447\u0435\u0433\u043e \u0436 \u043d\u0435.","time":"2019-05-30","is_relevant":false,"created_at":"2019-05-30 02:07:29","updated_at":"2019-05-30 02:07:29","photos":[],"participants":[]},{"id":3,"title":"Rerum et autem et sit beatae.","description":"\u0427\u0438\u0447\u0438\u043a\u043e\u0432, \u2014 \u0438 \u0432 \u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433, \u0438 \u043d\u0430 \u0432\u0438\u0441\u0435\u0432\u0448\u0438\u0435 \u043d\u0430 \u0433\u043e\u043b\u0443\u0431\u044b\u0445 \u0438 \u043a\u0440\u0430\u0441\u043d\u044b\u0445 \u043b\u0435\u043d\u0442\u043e\u0447\u043a\u0430\u0445, \u043e\u043a\u043e\u0442\u0438\u0432\u0448\u0430\u044f\u0441\u044f \u043d\u0435\u0434\u0430\u0432\u043d\u043e \u043a\u043e\u0448\u043a\u0430, \u0437\u0435\u0440\u043a\u0430\u043b\u043e, \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0432\u0448\u0435\u0435 \u0432\u043c\u0435\u0441\u0442\u043e \u0434\u0432\u0443\u0445 \u0447\u0435\u0442\u044b\u0440\u0435 \u0433\u043b\u0430\u0437\u0430, \u0430 \u0432\u043c\u0435\u0441\u0442\u043e \u043b\u0438\u0446\u0430 \u043a\u0430\u043a\u0443\u044e-\u0442\u043e \u043b\u0435\u043f\u0435\u0448\u043a\u0443; \u043d\u0430\u043a\u043e\u043d\u0435\u0446 \u043d\u0430\u0442\u044b\u043a\u0430\u043d\u043d\u044b\u0435.","time":"2019-05-30","is_relevant":false,"created_at":"2019-05-30 02:07:29","updated_at":"2019-05-30 02:07:29","photos":[],"participants":[]},{"id":4,"title":"Ipsum sit similique dolor ea.","description":"\u0412\u0435\u0434\u044c, \u044f \u0447\u0430\u0439, \u0437\u0430\u0441\u0435\u0434\u0430\u0442\u0435\u043b\u044c? \u2014 \u041d\u0435\u0442, \u0431\u0440\u0430\u0442, \u044f \u0432\u0441\u0435 \u043d\u0435 \u0431\u044b\u043b\u043e \u043d\u0438\u043a\u0430\u043a\u043e\u0439 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0432\u044b\u0431\u0440\u0430\u0442\u044c\u0441\u044f: \u0432 \u0434\u0432\u0435\u0440\u044f\u0445 \u0441 \u041c\u0430\u043d\u0438\u043b\u043e\u0432\u044b\u043c. \u041e\u043d\u0430 \u0431\u044b\u043b\u0430 \u043e\u0434\u0435\u0442\u0430 \u043b\u0443\u0447\u0448\u0435, \u043d\u0435\u0436\u0435\u043b\u0438 \u0432\u0447\u0435\u0440\u0430, \u2014 \u0432 \u043f\u0440\u043e\u0448\u0435\u0434\u0448\u0438\u0439 \u0447\u0435\u0442\u0432\u0435\u0440\u0433. \u041e\u0447\u0435\u043d\u044c \u043f\u0440\u0438\u044f\u0442\u043d\u043e \u043f\u0440\u043e\u0432\u0435\u043b\u0438 \u0442\u0430\u043c \u0432\u0440\u0435\u043c\u044f?.","time":"2019-05-30","is_relevant":false,"created_at":"2019-05-30 02:07:29","updated_at":"2019-05-30 02:07:29","photos":[],"participants":[]},{"id":5,"title":"Et aut et enim officiis aut.","description":"\u041d\u043e \u0433\u0435\u0440\u043e\u0439 \u043d\u0430\u0448 \u0443\u0436\u0435 \u0431\u044b\u043b \u0441\u0445\u0432\u0430\u0447\u0435\u043d \u043f\u043e\u0434 \u0440\u0443\u043a\u0443 \u0442\u043e \u0441 \u043e\u0434\u043d\u043e\u0439, \u0442\u043e \u0441 \u043e\u0434\u043d\u043e\u0439, \u0442\u043e \u0441 \u0431\u043e\u0433\u043e\u043c \u043c\u043e\u0436\u043d\u043e \u0431\u044b \u0437\u0430\u043c\u0435\u0442\u0438\u0442\u044c, \u0447\u0442\u043e \u0440\u0443\u043a\u0438 \u0431\u044b\u043b\u0438 \u0432\u044b\u043c\u044b\u0442\u044b \u043e\u0433\u0443\u0440\u0435\u0447\u043d\u044b\u043c \u0440\u0430\u0441\u0441\u043e\u043b\u043e\u043c. \u2014 \u0414\u0443\u0448\u0435\u043d\u044c\u043a\u0430, \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u044e \u0442\u0435\u0431\u0435, \u2014 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u043b \u043e\u043d, \u0441\u043d\u043e\u0432\u0430 \u043e\u0431\u0440\u0430\u0442\u044f\u0441\u044c \u043a.","time":"2019-05-30","is_relevant":false,"created_at":"2019-05-30 02:07:29","updated_at":"2019-05-30 02:07:29","photos":[],"participants":[]},{"id":6,"title":"Ratione assumenda non maxime.","description":"\u041d\u0443, \u043d\u0435\u0447\u0435\u0433\u043e \u0441 \u0432\u0430\u043c\u0438 \u0434\u0435\u043b\u0430\u0442\u044c, \u0438\u0437\u0432\u043e\u043b\u044c\u0442\u0435! \u0423\u0431\u044b\u0442\u043e\u043a, \u0434\u0430 \u043d\u0440\u0430\u0432 \u0442\u0430\u043a\u043e\u0439 \u0441\u043e\u0431\u0430\u0447\u0438\u0439: \u2014 \u043d\u0435 \u0432\u044b\u043f\u0443\u0441\u043a\u0430\u043b \u0438\u0437\u043e \u0440\u0442\u0430 \u0442\u0440\u0443\u0431\u043a\u0438 \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u044b\u043b\u043e \u043e\u0431\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u0440\u043e\u043f\u0438\u0441\u0430\u043d\u043e \u2014 \u0440\u0435\u043c\u0435\u0441\u043b\u043e, \u0437\u0432\u0430\u043d\u0438\u0435, \u043b\u0435\u0442\u0430 \u0438 \u0443\u0436\u0435 \u0442\u0430\u043a\u0438\u0435 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044f! \u042f \u0434\u043e\u043b\u0436\u0435\u043d \u0432\u0430\u043c.","time":"2019-05-30","is_relevant":false,"created_at":"2019-05-30 02:07:29","updated_at":"2019-05-30 02:07:29","photos":[],"participants":[{"id":1,"first_name":"\u041a\u043b\u0435\u043c\u0435\u043d\u0442\u0438\u043d\u0430","last_name":"\u041b\u043e\u0433\u0438\u043d\u043e\u0432","patronymic":"\u041a\u0443\u0437\u044c\u043c\u0430 \u0415\u0432\u0433\u0435\u043d\u044c\u0435\u0432\u0438\u0447 \u041f\u0440\u043e\u0445\u043e\u0440\u043e\u0432","email":"sukin.faina@example.com","phone":"(495) 019-9384","event_id":6}]},{"id":7,"title":"Reiciendis itaque facilis ab.","description":"\u0422\u044b \u043f\u044c\u044f\u043d \u043a\u0430\u043a \u0441\u0430\u043f\u043e\u0436\u043d\u0438\u043a! \u2014 \u0441\u043a\u0430\u0437\u0430\u043b \u043e\u043d, \u2014 \u043d\u0430\u043a\u043b\u043e\u043d\u0438\u0432\u0448\u0438\u0441\u044c \u043a \u0410\u043b\u043a\u0438\u0434\u0443. \u2014 \u041f\u0430\u0440\u0430\u043f\u0430\u043d, \u2014 \u043e\u0442\u0432\u0435\u0447\u0430\u043b \u0421\u0435\u043b\u0438\u0444\u0430\u043d. \u2014 \u042d\u0442\u043e \u2014 \u043d\u0435\u0445\u043e\u0440\u043e\u0448\u043e \u043e\u043f\u0440\u043e\u043a\u0438\u043d\u0443\u0442\u044c, \u044f \u0443\u0436 \u0441\u0430\u043c \u0437\u043d\u0430\u044e; \u0443\u0436 \u044f \u043d\u0438\u043a\u0430\u043a \u043d\u0435 \u043f\u0440\u0438\u0448\u0435\u043b\u0441\u044f \u043f\u043e\u0441\u0440\u0435\u0434\u0438 \u0434\u043e\u043c\u0430, \u043a\u0430\u043a \u043d\u0438 \u043f\u0440\u0438\u0441\u043a\u043e\u0440\u0431\u043d\u043e \u0442\u043e \u0438.","time":"2019-05-30","is_relevant":false,"created_at":"2019-05-30 02:07:29","updated_at":"2019-05-30 02:07:29","photos":[],"participants":[{"id":2,"first_name":"\u0418\u043d\u0435\u0441\u0441\u0430","last_name":"\u041d\u043e\u0441\u043a\u043e\u0432","patronymic":"\u0424\u0438\u043b\u0438\u043f\u043f \u0410\u043b\u0435\u043a\u0441\u0435\u0435\u0432\u0438\u0447 \u0411\u0435\u043b\u044f\u043a\u043e\u0432","email":"lazarev.taisiy@example.net","phone":"(35222) 54-4920","event_id":7}]},{"id":8,"title":"Esse dolores doloremque sunt.","description":"\u042f \u0437\u0430\u0434\u0443\u043c\u0430\u043b \u0436\u0435\u043d\u0438\u0442\u044c\u0441\u044f; \u043d\u043e \u043d\u0443\u0436\u043d\u043e \u0442\u0435\u0431\u0435 \u2014 \u043a\u0430\u043a\u043e\u0433\u043e-\u043d\u0438\u0431\u0443\u0434\u044c \u0449\u0435\u043d\u043a\u0430 \u0441\u0440\u0435\u0434\u043d\u0435\u0439 \u0440\u0443\u043a\u0438 \u0438\u043b\u0438 \u0437\u043e\u043b\u043e\u0442\u0443\u044e \u043f\u0435\u0447\u0430\u0442\u043a\u0443 \u043a \u0447\u0430\u0441\u0430\u043c. \u2014 \u041d\u0443, \u0432\u0438\u0434\u0438\u0442\u0435, \u043c\u0430\u0442\u0443\u0448\u043a\u0430. \u0410 \u0442\u0435\u043f\u0435\u0440\u044c \u043f\u0440\u0438\u043c\u0438\u0442\u0435 \u0432 \u0441\u043e\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u043e, \u0447\u0442\u043e \u0440\u0430\u0437\u043b\u0443\u0447\u0438\u043b\u0438 \u0438\u0445 \u0441 \u043f\u0440\u0438\u044f\u0442\u0435\u043b\u044f\u043c\u0438, \u0438\u043b\u0438.","time":"2019-05-30","is_relevant":false,"created_at":"2019-05-30 02:07:29","updated_at":"2019-05-30 02:07:29","photos":[],"participants":[{"id":3,"first_name":"\u0413\u043e\u0440\u0434\u0435\u0439","last_name":"\u0410\u043d\u0442\u043e\u043d\u043e\u0432","patronymic":"\u0415\u043b\u0438\u0441\u0435\u0435\u0432 \u042e\u0440\u0438\u0439 \u041b\u044c\u0432\u043e\u0432\u0438\u0447","email":"taisiy.anisimov@example.org","phone":"+7 (922) 339-9429","event_id":8}]},{"id":9,"title":"Labore veniam eaque unde.","description":"\u0414\u0430 \u043c\u043d\u0435 \u0445\u043e\u0447\u0435\u0442\u0441\u044f, \u0447\u0442\u043e\u0431\u044b \u0438 \u0442\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u043b \u0432\u044b\u0433\u043e\u0434\u0443. \u0427\u0438\u0447\u0438\u043a\u043e\u0432 \u043f\u043e\u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u0438\u043b \u0437\u0430 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438 \u043d\u0430\u043f\u0440\u044f\u043c\u0438\u043a \u043e\u0442\u043a\u0430\u0437\u0430\u043b\u0441\u044f \u0438 \u043e\u0442 \u0443\u0434\u043e\u0432\u043e\u043b\u044c\u0441\u0442\u0432\u0438\u044f \u2014 \u043f\u043e\u0447\u0442\u0438 \u0441\u043e\u0432\u0441\u0435\u043c \u0437\u0430\u0436\u043c\u0443\u0440\u0438\u043b \u0433\u043b\u0430\u0437\u0430, \u043a\u0430\u043a \u043a\u043e\u0442, \u0443 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0438\u0445 \u0432\u043e\u0441\u0435\u043c\u044c\u0441\u043e\u0442, \u2014 \u0441\u043b\u043e\u0432\u043e\u043c, \u043d\u0435.","time":"2019-05-30","is_relevant":true,"created_at":"2019-05-30 02:07:29","updated_at":"2019-05-30 02:07:29","photos":[],"participants":[{"id":4,"first_name":"\u0420\u043e\u0431\u0435\u0440\u0442","last_name":"\u041a\u043e\u043c\u0438\u0441\u0441\u0430\u0440\u043e\u0432","patronymic":"\u0424\u0438\u043b\u0430\u0442\u043e\u0432\u0430 \u0418\u0437\u043e\u043b\u044c\u0434\u0430 \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u043e\u0432\u043d\u0430","email":"olesy.lytkin@example.com","phone":"(35222) 13-3196","event_id":9}]},{"id":10,"title":"Rem itaque at saepe ex.","description":"\u041e\u043d\u0430 \u043f\u043e\u0434\u043d\u044f\u043b\u0430\u0441\u044c \u0441 \u0434\u0438\u0432\u0430\u043d\u0430, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0441\u0438\u0434\u0435\u043b\u0430 \u0442\u0430\u043a\u0430\u044f \u0436\u0435 \u0431\u0435\u0437\u0434\u043d\u0430 \u0447\u0430\u0439\u043d\u044b\u0445 \u0447\u0430\u0448\u0435\u043a, \u043a\u0430\u043a \u043f\u0442\u0438\u0446 \u043d\u0430 \u043c\u043e\u0440\u0441\u043a\u043e\u043c \u0431\u0435\u0440\u0435\u0433\u0443; \u0442\u0435 \u0436\u0435 \u043a\u0430\u0440\u0442\u0438\u043d\u044b \u0432\u043e \u0432\u0441\u044e \u043f\u0440\u043e\u043f\u0430\u0449\u0443\u044e \u0438 \u0434\u0435\u0440\u0435\u0432\u043d\u044f \u041d\u043e\u0437\u0434\u0440\u0435\u0432\u0430 \u0434\u0430\u0432\u043d\u043e \u0443\u043d\u0435\u0441\u043b\u0430\u0441\u044c \u0438\u0437 \u0432\u0438\u0434\u0430, \u0437\u0430\u043a\u0440\u044b\u0432\u0448\u0438\u0441\u044c \u043f\u043e\u043b\u044f\u043c\u0438.","time":"2019-05-30","is_relevant":true,"created_at":"2019-05-30 02:07:29","updated_at":"2019-05-30 02:07:29","photos":[],"participants":[{"id":5,"first_name":"\u042d\u043c\u043c\u0430","last_name":"\u0410\u043d\u0438\u0441\u0438\u043c\u043e\u0432","patronymic":"\u0424\u0435\u0434\u043e\u0441\u044c\u044f \u0410\u043d\u0434\u0440\u0435\u0435\u0432\u043d\u0430 \u041b\u043e\u0433\u0438\u043d\u043e\u0432\u0430","email":"pavel36@example.org","phone":"+7 (922) 644-7036","event_id":10}]},{"id":11,"title":"Non animi et quia sunt quod.","description":"\u0422\u043e\u0442 \u0436\u0435 \u0441\u0430\u043c\u044b\u0439 \u043a\u0440\u0435\u043f\u043a\u0438\u0439 \u0438 \u043d\u0430 \u0432\u0435\u0447\u0435\u0440\u0438\u043d\u043a\u0435, \u0431\u0443\u0434\u044c \u0432\u0441\u0435 \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u0447\u0438\u043d\u0430, \u041f\u0440\u043e\u043c\u0435\u0442\u0435\u0439 \u0442\u0430\u043a \u0438 \u043e\u0441\u0442\u0430\u043b\u0441\u044f \u0441 \u0440\u0430\u0437\u0438\u043d\u0443\u0442\u044b\u043c \u0440\u0442\u043e\u043c \u0432 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0435\u043d\u0438\u0435 \u0435\u0433\u043e \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u043e\u0442\u043b\u0438\u0447\u0438\u0442\u044c \u0438\u0445 \u043e\u0442 \u043f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0441\u043a\u0438\u0445, \u0438\u043c\u0435\u043b\u0438 \u0442\u0430\u043a \u0436\u0435 \u043d\u0435\u0431\u0440\u0435\u0436\u043d\u043e \u043f\u043e\u0434\u0441\u0435\u0434\u0430\u043b\u0438 \u043a.","time":"2019-05-30","is_relevant":false,"created_at":"2019-05-30 02:07:29","updated_at":"2019-05-30 02:07:29","photos":[{"id":7,"path":"https:\/\/lorempixel.com\/640\/480\/?41227"}],"participants":[]}],
            news: [{"id":1,"title":"Eos at omnis sunt.","text":"Nobis officia quae inventore. Omnis quam facere dolor aspernatur ut rerum voluptatem. Nisi aut voluptate exercitationem vel.","created_at":"2019-05-30 02:07:29","updated_at":"2019-05-30 02:07:29","photos":[]},{"id":2,"title":"Ut qui officiis non nemo.","text":"Et nam voluptate architecto officiis facere a omnis ea. Magni eaque qui ut quod non. Esse facere repellat omnis commodi ex non sunt. Non nisi sit nihil quis ipsum.","created_at":"2019-05-30 02:07:29","updated_at":"2019-05-30 02:07:29","photos":[]},{"id":3,"title":"Ea consectetur aut et.","text":"Eveniet quibusdam consequatur ea sed. Ut itaque consequatur placeat recusandae aut quisquam dolore. Ullam ipsam suscipit architecto facilis.","created_at":"2019-05-30 02:07:29","updated_at":"2019-05-30 02:07:29","photos":[]},{"id":4,"title":"Quaerat esse voluptas ut est.","text":"Est sequi quo accusantium assumenda porro cum. Quae provident exercitationem id aliquam animi. Earum vel alias nemo sed voluptatibus. Iure consequatur explicabo tempore suscipit maxime.","created_at":"2019-05-30 02:07:29","updated_at":"2019-05-30 02:07:29","photos":[]},{"id":5,"title":"Iste quia velit doloremque.","text":"Nostrum dolorem unde laudantium non maxime voluptatibus officia veritatis. Non odit molestiae quidem id quos alias odio id. Similique hic voluptatem commodi a qui dolore impedit.","created_at":"2019-05-30 02:07:29","updated_at":"2019-05-30 02:07:29","photos":[]},{"id":6,"title":"Saepe nam nulla quia totam.","text":"Voluptate nobis quibusdam alias blanditiis illum dolores id vero. Maiores soluta dolorem magnam vero voluptatem. Eos enim ut in totam recusandae optio eum.","created_at":"2019-05-30 02:07:29","updated_at":"2019-05-30 02:07:29","photos":[{"id":8,"path":"https:\/\/lorempixel.com\/640\/480\/?82391"}]}],
            galleries: [{"id":1,"title":"Eos at omnis sunt.","text":"Nobis officia quae inventore. Omnis quam facere dolor aspernatur ut rerum voluptatem. Nisi aut voluptate exercitationem vel.","created_at":"2019-05-30 02:07:29","updated_at":"2019-05-30 02:07:29","photos":[]},{"id":2,"title":"Ut qui officiis non nemo.","text":"Et nam voluptate architecto officiis facere a omnis ea. Magni eaque qui ut quod non. Esse facere repellat omnis commodi ex non sunt. Non nisi sit nihil quis ipsum.","created_at":"2019-05-30 02:07:29","updated_at":"2019-05-30 02:07:29","photos":[]},{"id":3,"title":"Ea consectetur aut et.","text":"Eveniet quibusdam consequatur ea sed. Ut itaque consequatur placeat recusandae aut quisquam dolore. Ullam ipsam suscipit architecto facilis.","created_at":"2019-05-30 02:07:29","updated_at":"2019-05-30 02:07:29","photos":[]},{"id":4,"title":"Quaerat esse voluptas ut est.","text":"Est sequi quo accusantium assumenda porro cum. Quae provident exercitationem id aliquam animi. Earum vel alias nemo sed voluptatibus. Iure consequatur explicabo tempore suscipit maxime.","created_at":"2019-05-30 02:07:29","updated_at":"2019-05-30 02:07:29","photos":[]},{"id":5,"title":"Iste quia velit doloremque.","text":"Nostrum dolorem unde laudantium non maxime voluptatibus officia veritatis. Non odit molestiae quidem id quos alias odio id. Similique hic voluptatem commodi a qui dolore impedit.","created_at":"2019-05-30 02:07:29","updated_at":"2019-05-30 02:07:29","photos":[]},{"id":6,"title":"Saepe nam nulla quia totam.","text":"Voluptate nobis quibusdam alias blanditiis illum dolores id vero. Maiores soluta dolorem magnam vero voluptatem. Eos enim ut in totam recusandae optio eum.","created_at":"2019-05-30 02:07:29","updated_at":"2019-05-30 02:07:29","photos":[{"id":8,"path":"https:\/\/lorempixel.com\/640\/480\/?82391"}]}]
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
                const req = await axios.get('https://fea7511f.ngrok.io/api/events')
                context.commit('setEvents', req.data);
            },
            async actSetNews(context) {
                const req = await axios.get('https://fea7511f.ngrok.io/api/news ')
                context.commit('setNews', req.data);
            },
            async actSetGalleries(context) {
                const req = await axios.get('https://fea7511f.ngrok.io/api/albums')
                context.commit('setGalleries', req.data);
            },
            submitParticipant (context, { eventId, participant }) {
              let Event = this.state.events.find((event) => event.id == eventId);
              context.commit('addParticipantToEvent', { Event, participant});
              axios
                .post('https://fea7511f.ngrok.io/api/events/1/join', participant)
            }
        }

    });
};

export default creatStore