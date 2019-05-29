<template>
    <section class="card">
        <div class="photo" :style="{backgroundImage}">
            <span class="status">
                <div class="circ" :style="circStyle"></div>
                <span id="status" :style="statusStyle">{{statusText}}</span>
            </span>
            <router-link :to="{ path: '/events/' + eventId }"></router-link>
        </div>
        <section class="info">
            <router-link :to="{ path: '/events/' + eventId }" class="event_name">{{eventTitle.slice(0,40) + ellipsis}}</router-link>
            <p class="date">{{eventTime}}</p>
            <Modal class="сomeIn" v-bind:event-id="eventId"/>
        </section>
    </section>
</template>

<script>
import Modal from '~/components/Modal.vue'

export default {
    name: 'Event',
    components: {
        Modal
    },
    props: {
        eventId: Number,
        eventTitle: String,
        eventTime: String,
        eventStatus: Boolean,
        eventPhoto: String
    },
    computed: {
        backgroundImage() {
                var style = 'url("' + this.eventPhoto + ") 50% 50% no-repeat;"
                return style;
        },
        statusText() {
            return this.eventStatus ? "Активно" : "Закончилось"
        },
        circStyle() { 
            return {
                background: !this.eventStatus ? "#C55468" : ""
            }
        },
        statusStyle() { 
            return {
                color: !this.eventStatus ? "#C55468" : ""
            }
        },
        ellipsis() {
            var el;
           return (this.eventTitle.length > 40) ? el = "..." : el = '';
        }
    },
}
</script>

<style scoped>
    .card {
        padding: 0;
        width: 100%;
        height: 40vw;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
        border-radius: 15px;
        font-family: 'Rubik', sans-serif;
    }

    .photo > a {
        cursor: pointer;
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
    }

    .photo {
        border-radius: 15px 15px 0 0;
        display: block;
        padding: 0;
        margin: 0;
        width: 100%;
        height: 55%;
        padding: 1.5rem 1rem;
        background-size: cover;
        position: relative;
    }

    .status {
        display: flex;
        align-items: center;
        text-align: center;
        font-weight: 500;
        font-size: 0.875rem;
        color: #4AE0B3;
    }

    .circ {
        width: 2em;
        height: 2em;
        background: #4AE0B3;
        border-radius: 50%;
        margin-right: 0.3rem;
    }

    .info {
        display: flex;
        flex-direction: column;
        height: 45%;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
    }
    
    .event_name {
        text-align: center;
        font-size: 1.5rem;
        font-weight: 500;
        color: #323232;
    }

    .date {
        font-size: 1.125rem;
        color: black;
    }

    .сomeIn {
        width: 100%;
        height: 30%;
        border: none;
        font-size: 1.5rem;
        background: #5EB8D3;
        border-radius: 30px;
        font-family: 'Rubik', sans-serif;
        outline: none;
        color: white;
        font-weight: 500;
        cursor: pointer;
    }

    @media (max-width: 420px) {
        .card {
            height: 100vw;
        }
         .status {
            font-size: 2rem;
        }
        .event_name {
            font-size: 3rem;
        }
        .circ {
            width: 2em;
            height: 2em;
            margin-right: 0.5rem;
        }
        .photo {
            padding: 2rem 2rem;
        }
        .date {
            font-size: 2rem;
        }
        button {
            font-size: 3rem;
        }
        .info {
            padding: 2rem;
        }
        .сomeIn {
            font-size: 2.5rem;
        }
    }
</style>
