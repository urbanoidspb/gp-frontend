<template>
    <div class="block_for_underline">
        <section class="contacts">
            <nav class="contacts_item contacts_item_left">
                <a href="tel:+79822312466">+7(982)-231-24-66</a>
                <a href="mailto:gorodperemenspb@gmail.com">gorodperemenspb@gmail.com</a>
            </nav>
            <nav class="contacts_item contacts_item_right">
                <a href="https://www.youtube.com/channel/UCr26U87t9bCn7m4jtEhh4og" target="_blank"><div class="socials socials_youtube"></div></a>
                <a href="https://vk.com/spbperemen" target="_blank"><div class="socials socials_vk"></div></a>
                <a href="https://www.instagram.com/gorodperemen_spb/?igshid=nqqgwrfabss6" target="_blank"><div class="socials socials_insta"></div></a>
            </nav>
        </section>
    </div>
</template>

<script>
export default {
    name: 'contacts'
}
</script>

<style scoped>
    a {
        padding-right: 1rem;
        text-decoration: none;
        color: #515050;
        cursor: pointer;
    }

    a:last-child {
        padding-right: 0;
    }

    .block_for_underline {
        display: grid;
        grid-template-columns: 1fr repeat(12, 1fr) 1fr;
        border-bottom: 1px solid #D6D5D5;

        margin-bottom: 0.5rem;
    }

    .contacts {
        grid-column: 2/14;
        display: flex;
        align-items: center;
        font-family: 'Rubik', sans-serif;
        font-size: 1.125rem;
        padding: 0.3em 0;
    }

    .contacts_item {
        display: flex;
    }

    .contacts_item_right {
        margin-left: auto;
        align-items: center;
    }

    .contacts_item_right {
        margin-left: auto;
        align-items: center;
    }

    .contacts_item_right .socials {
        width: 1.5rem;
        height: 1.5rem;
    }

    .contacts_item_right .socials_youtube {
        background: url("../assets/youtube.png") 50% 50% no-repeat;
        background-size: contain;
    }

    .contacts_item_right .socials_vk {
        background: url("../assets/vk.png") 50% 50% no-repeat;
        background-size: contain;
    }

    .contacts_item_right .socials_insta {
        background: url("../assets/insta.png") 50% 50% no-repeat;
        background-size: contain;
    }

    @media (max-width: 765px) {
        .contacts {
            display: none;
        }
    }
</style>

