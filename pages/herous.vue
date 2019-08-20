<template>
<div>
  <Contacts/>
  <div class="wrapper">
      <Navbar id="Navbar"/>


    <h2 class="title">Город героев</h2>

    <section class="herous_sign_in">
        <div class="sign_in_main">
            <p>
                Героев нужно не только знать в лицо, но и награждать, за труд! Мы придумали, как сделать жизнь активистов интереснее и удобнее, а главное наглядно представить все их заслуги.
            </p>
            <a href="#" class="toHerous">Скоро</a>
        </div>
        <img src="~/assets/macbook.png" alt="">
    </section>


    <section class="hero_features">
        <div class="feature">
            <img src="~/assets/registration.png" alt="">
            <h2>Зарегистрируйтесь </h2>
        </div>
        <div class="feature">
            <img src="~/assets/pointstar.png" alt="">
            <h2>Отслеживайте и<br> посещайте мероприятия</h2>
        </div>
        <div class="feature">
            <img src="~/assets/qr.png" alt="">
            <h2>Сканируйте QR-коды,<br> чтобы получить Hero Coin</h2>
        </div>
        <div class="feature">
            <img src="~/assets/store.png" alt="">
            <h2>Тратьте заработанные <br>Hero Coin в магазине</h2>
        </div>
        <div class="feature">
            <img src="~/assets/dependable.png" alt="">
            <h2>Покажите всем, кто самый<br> крутой герой !</h2>
        </div>
    </section>

    <section class="hero_events hero_info_block">
        <div class="hero_info_column">
            <h2>Мероприятия</h2>
             <p>Посещая мероприятия города перемен, ты получаешь опыт и внутриигровую валюту, за считывание индивидуального QR- кода каждого мероприятия. Внутриигровую валюту можно потратить на мерч Города Перемен, скидки у партнеров и полезные призы</p>
        </div>
        <div class="hero_assets_column">
            <img src="~/assets/hero_event_1.png" alt="">
            <img src="~/assets/hero_event_2.png" alt="">
        </div>
    </section>

    <section class="hero_rating hero_info_block">
        <div class="hero_assets_column">
            <img src="~/assets/rate1.png" alt="">
            <img src="~/assets/rate2.png" alt="">
            <img src="~/assets/rate3.png" alt="">
            <img src="~/assets/rate4.png" alt="">
            <img src="~/assets/rate5.png" alt="">
        </div>
         <div class="hero_info_column">
            <h2>Рейтинг</h2>
             <p>Ещё один способ получить награду от Города перемен стать лучшим активистом месяца, оказавшись в первой тройке рейтинга. Добавляй мероприятия, которые хочешь посетить, в избранное, чтобы они всегда были на виду.</p>
        </div>
    </section>

    <section class="hero_friends hero_info_block">
        <div class="hero_info_column">
            <h2>Друзья</h2>
             <p>Добавляй друзей, используя реферальный код друга, и получай дополнительные очки. Как только у тебя появляются друзья в системе, вы можете следить за успехами друг друга.</p>
        </div>
        <div class="hero_assets_column">
            <img src="~/assets/hero_friend.png" alt="">
            <img src="~/assets/mini_hero_friend.png" alt="">
        </div>
    </section>

    <section class="hero_rating hero_rating_2 hero_info_block">
        <div class="hero_assets_column">
            <img src="~/assets/rate_card1.png" alt="">
            <img src="~/assets/rate_card2.png" alt="">
            <img src="~/assets/rate_card3.png" alt="">
        </div>
         <div class="hero_info_column">
            <h2>Рейтинг</h2>
             <p>Ещё один способ получить награду от Города перемен стать лучшим активистом месяца, оказавшись в первой тройке рейтинга. Добавляй мероприятия, которые хочешь посетить, в избранное, чтобы они всегда были на виду.</p>
        </div>
    </section>


    </div>
    <div class="stand_background">
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
  }
}
</script>

<style>
html {
  font-size: 16px;
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr repeat(12, 1fr) 1fr;
  font-family: 'Rubik', sans-serif;
  font-size: 1.5rem;
}

.wrapper > * {
  grid-column: 2/14;
}

img {
    width: 100%;
}

.title {
    text-align: center;
    font-size: 3rem;
    margin: 4rem 0;
    font-weight: 500;
}

.toHerous {
    display: inline;
    font-weight: bold;
    font-size: 2rem;
    background: #fff;
    border: 2px solid #71D5A2;
    padding: 1rem 2.5rem;
    border-radius: 100px;
    text-decoration: none;
    color: #71D5A2;
    cursor: pointer;
    height: 5rem;
    outline: none;
    margin: 2rem 0;
}

@media (max-width: 420px) {
  .takeHero {
  width: 100%;
  font-weight: bold;
  font-size: 3rem;
  background: #71D5A2;
  padding: 2.5rem 6rem;
  border: none;
  border-radius: 100px;
  text-decoration: none;
  color: white;
  margin-bottom: 5rem;
  cursor: pointer;
  height: 8rem;
  outline: none;
}
}

.herous_sign_in {
    display: grid;
    grid-template-columns: 2fr 3fr;
}

.herous_sign_in p {
font-size: 1.6rem;
line-height: 2.25rem;
margin: 3rem 3rem 3rem 0;
}

.herous_sign_in img {
    width: 85%;
    margin-left: 10%;
}




.hero_features {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    margin: 5vw 0;
    grid-gap: 3vw 1vw;
}

.feature:nth-child(1) {
    grid-column: 1/3;
}
.feature:nth-child(2) {
    grid-column: 3/5;
}
.feature:nth-child(3) {
    grid-column: 5/7;
}
.feature:nth-child(4) {
    grid-column: 2/4;
}
.feature:nth-child(5) {
    grid-column: 4/6;
}

.feature {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.feature::before {
    position: absolute;
    content: '';
    display: block;
    background: rgba(74, 224, 179, 0.25);
    top: -10%;
    left: 20%;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    z-index: -1;
}

.feature::after {
    position: absolute;
    content: '';
    display: block;
    background: rgba(94, 184, 211, 0.25);
    bottom: 18%;
    right: 25%;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    z-index: -1;
}

.feature:nth-child(4)::before,
.feature:nth-child(5)::before {
    top: 10%;
    left: 20%;
    width: 10rem;
    height: 10rem;
}

.feature:nth-child(4)::after,
.feature:nth-child(5)::after {
    bottom: -5%;
    right: 25%;
    width: 6rem;
    height: 6rem;
}

.feature img {
    margin-bottom: 3.5rem;
    width: 30%;
}

.feature h2 {
    font-size: 1.5rem;
    line-height: 2.25rem;
    font-weight: 500;
    text-align: center;
}






.hero_info_block {
    display: grid;
    grid-template-columns: 4fr 6fr;
    grid-gap: 10vw;
    margin: 6rem 0;
    position: relative;
}

.hero_info_block::before {
    position: absolute;
    content: '';
    display: block;
    background: rgba(94, 184, 211, 0.25);
    top: -20%;
    right: 8%;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    z-index: -1;
}

.hero_info_column h2 {
    margin-bottom: 3rem;
}

.hero_info_column p {
    font-size: 1.6rem;
    line-height: 2.25rem;
}

.hero_assets_column {
    position: relative;
}

.hero_assets_column::before {
    position: absolute;
    content: '';
    display: block;
    background: rgba(74, 80, 224, 0.25);
    top: -5%;
    left: 0;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    z-index: -1;
}

.hero_assets_column::after {
    position: absolute;
    content: '';
    display: block;
    background: rgba(74, 224, 179, 0.25);
    bottom: -5%;
    right: 28%;
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    z-index: -1;
}

.hero_events  img{
    width: 40%;
}

.hero_events  img:nth-child(1){
    margin: 1rem 0 7rem;
}

.hero_events  img:nth-child(2){
    margin: 7rem 0 1rem;
}





.hero_rating {
    grid-template-columns: 1fr 1fr;
    padding: 0 6rem;
    grid-gap: 4vw;
}

.hero_rating::before {
    top: -15%;
    left: 30%;
}

.hero_rating .hero_info_column {
    margin-right:12rem;
}

.hero_rating .hero_assets_column img {
    margin-bottom: -2%;
    width: 90%;
}

.hero_rating .hero_assets_column::before {
    top: 5%;
    left: -2%;
    width: 12rem;
    height: 12rem;
}

.hero_rating .hero_assets_column::after {
    bottom: 10%;
    right: 0%;
}





.hero_friends .hero_assets_column {
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero_friends img:nth-child(1){
    width: 50%;
}

.hero_friends img:nth-child(2){
    width: 40%;
}

.hero_friends::before {
    top: 80%;
    left: 60%;
}

.hero_friends .hero_assets_column::before {
    top: 15%;
    left: 55%;
    width: 12rem;
    height: 12rem;
}

.hero_friends .hero_assets_column::after {
    bottom: 55%;
    right: 70%;
}




.hero_rating_2 .hero_assets_column {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

.hero_rating_2 .hero_assets_column  img {
    width: 75%;
}

.hero_rating_2 img:nth-child(1) {
    grid-column: 2/4;
}

.hero_rating_2 img:nth-child(2) {
    grid-column: 1/3;
     margin: 1rem -1rem 0 0;
}

.hero_rating_2 img:nth-child(3) {
    grid-column: 3/5;
    margin: 5rem 0 0 -3rem;
}







.stand_background {
  width: 100%;
  background: #0C6293;
  grid-column: 1/15;
  display: grid;
  grid-template-columns: 1fr repeat(12, 1fr) 1fr;
}

#Footer {
  grid-column: 2/14;
}

@media (min-width: 1920px) {
  html {
  font-size: 16px;
  }
}

@media (max-width: 1675px) {
  html {
  font-size: 15px;
  }
}

@media (max-width: 1575px) {
  html {
  font-size: 14px;
  }
}

@media (max-width: 1475px) {
  html {
  font-size: 13px;
  }
}

@media (max-width: 1375px) {
  html {
  font-size: 12px;
  }
}

@media (max-width: 1275px) {
  html {
  font-size: 11px;
  }
}

@media (max-width: 1175px) {
  html {
  font-size: 10px;
  }
}

@media (max-width: 1075px) {
  html {
  font-size: 9px;
  }
}

@media (max-width: 975px) {
  html {
  font-size: 8px;
  }

}

@media (max-width: 885px) {
  html {
  font-size: 7px;
  }
}

@media (max-width: 775px) {
  html {
  font-size: 6px;
  }
}

@media (max-width: 780px) {

}

@media (max-width: 700px) {

}

@media (max-width: 650px) {
  html {
  font-size: 5px;
  }
}

@media (max-width: 576px) {
  html {
  font-size: 4px;
  }
  #Navbar {
    margin-bottom: 2vw;
  }
}

@media (max-width: 420px) {
  .wrapper {
  grid-template-columns: 0.5fr repeat(12, 1fr) 0.5fr;
}
  html {
  font-size: 6px;
  }
  .title {
      margin: 6rem 0 3rem;
  }

  .herous_sign_in {
        grid-template-columns: 1fr;
    }

    .herous_sign_in img {
        margin-left: 0;
        order: -1;
        margin: 0 auto 3rem;
    }

    .herous_sign_in p {
        font-size: 2rem;
        line-height: 3.5rem;
        text-align: center;
        margin-right: 0;
    }

    .herous_sign_in .Particip {
        margin: 2rem auto;
    }

    .hero_features {
        grid-template-columns: 1fr;
        margin: 5vw 0;
        grid-gap: 10vw 0vw;
    }

    .feature:nth-child(1) {
        grid-column: 1;
    }
    .feature:nth-child(2) {
        grid-column: 1;
    }
    .feature:nth-child(3) {
        grid-column: 1;
    }
    .feature:nth-child(4) {
        grid-column: 1;
    }
    .feature:nth-child(5) {
        grid-column: 1;
    }

    .feature::before {
        width: 18rem;
        height: 18rem;
    }

    .feature::after {
        bottom: 0;
        width: 10rem;
        height: 10rem;
    }

    .feature:nth-child(4)::before,
    .feature:nth-child(5)::before {
        top: -10%;
        left: 15%;
        width: 23rem;
        height: 23rem;
    }

    .feature:nth-child(4)::after,
    .feature:nth-child(5)::after {
        bottom: -5%;
        right: 20%;
        width: 10rem;
        height: 10rem;
    }

    .feature img {
        margin-bottom: 3.5rem;
        width: 40%;
    }

    .feature h2 {
        font-size: 3rem;
        line-height: 3.3rem;
        letter-spacing: 0.1rem;
    }

    

    .hero_info_block {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 5vw;
        margin: 6rem 0;
        position: relative;
    }

    .hero_info_column h2 {
        font-size: 4rem;
        margin-bottom: 2rem;
        text-align: center;
    }

    .hero_info_column p {
        text-align: center;
        font-size: 2rem;
        line-height: 3.5rem;
    }

    .hero_events  .hero_assets_column{
        display: flex;
        justify-content: center;
        align-items: center;
    }



    .hero_rating {
        grid-template-columns: 1fr;
        padding: 0;
        grid-gap: 4vw;
    }


    .hero_rating .hero_info_column {
        margin-right:0;
        order: -1;
    }

    .hero_rating .hero_assets_column {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .hero_rating .hero_assets_column img {
        margin-bottom: 0;
        width: 70%;
    }

    .hero_rating_2 .hero_assets_column {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .hero_rating_2 .hero_assets_column img {
        width: 75%;
        margin: 0 auto;
    }

    .hero_rating_2 img:nth-child(1) {
        grid-column: 2/4;
    }

    .hero_rating_2 img:nth-child(2) {
        grid-column: 1/3;
        margin-top: -1.5rem;
    }

    .hero_rating_2 img:nth-child(3) {
        grid-column: 3/5;
        margin-top: 5rem;
    }
}

@media (max-width: 360px) {
  html {
  font-size: 5px;
  }
}

</style>