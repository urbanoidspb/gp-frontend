<template>
  <div class="wrapper">
    <h2 class="title">O нас</h2>

    <img class="y_logo" src="~/assets/y_logo.png" alt="">

    <p>
      Санкт-Петербург, с момента основания, всегда находился в центре событий мировой и Российской истории и славился
      своим статусом инновационного, культурного, научного центра. Гражданское общество Петербурга никогда не оставалось
      в стороне от проблем города, страны и всегда было на острие важных событий и перемен, определяющих развитие нашей
      Родины.
    </p>

    <img src="~/assets/spb.png" alt="spb">

    <p>
      Сейчас городу нужны перемены и нужен существенный скачок вперед. Необходимо объединяться и менять наш город,
      делать его современным и инновационным, создавать комфортную городскую среду, привлекать талантливые кадры,
      способствовать развитию социальных лифтов, создать возможности для самореализации молодежи путем поддержки
      социальных проектов и перспективных инициатив.
    </p>

    <img src="~/assets/tima.png" alt="tima">

    <p>
      Для решение обозначенных задач, неравнодушными жителями Санкт-Петербурга, городскими патриотами было создано
      Движение «Петербург-город перемен!».
    </p>
    <p>
      Присоединиться к нашему движению могут все, вне зависимости от возраста, пола, политических убеждений, участия и
      членства в других общественных организациях и объединениях.
    <p>
      Движение «Петербург-Город перемен!» поддерживают некоммерческие организации и фонды, социально-ответственные
      предприниматели, которые хотят менять город и делать его лучше.
    </p>

    <section class="projects">
      <h2 class="section_name">Основные проекты</h2>
      <main>
        <div class="project">
          <h4>«Социальный город»</h4>
          <p>Основным направлением данного проекта является помощь и поддержка социально-ориентированных организаций и
            общественных инициатив.</p>
        </div>
        <div class="project">
          <h4>Культурный город»</h4>
          <p>Проект направлен на сохранение исторической памяти, развитие городского патриотизма и просвещения жителей
            города.</p>
        </div>
        <div class="project">
          <h4>Комфортный город»</h4>
          <p>Проект направлен на поддержку и развитие общественных инициатив, которые затрагивают благоустройство
            города.</p>
        </div>
        <div class="project">
          <h4>«Город будущего»</h4>
          <p>Проект направлен на развитие и поддержку площадок, при помощи которых будет реализовываться городской
            потенциал в сфере IT-проектов и прогрессивных идей.</p>
        </div>
      </main>
    </section>

    <section class="leads">
      <h2 class="section_name">Руководство</h2>
      <main>
        <div class="lead">
          <img class="avatar avatar1" src="~/assets/avatar1.png" alt="">
          <h4 class="fullname">Георгий Рожков</h4>
          <h5 class="post">cопредседатель движения</h5>
        </div>
        <div class="lead">
          <img class="avatar avatar2" src="~/assets/avatar2.png" alt="">
          <h4 class="fullname">Никита Донцов</h4>
          <h5 class="post">cопредседатель движения</h5>
        </div>
        <!-- <div class="lead">
            <img class="avatar avatar3" src="~/assets/avatar3.png" alt="">
            <h4 class="fullname">Екатерина Зиновкина</h4>
            <h5 class="post">cовет движения</h5>
        </div> -->
        <div class="lead">
          <img class="avatar avatar4" src="~/assets/avatar4.png" alt="">
          <h4 class="fullname">Андрей Калашников</h4>
          <h5 class="post">cовет движения</h5>
        </div>
      </main>
    </section>

    <section class="contacts_map">
      <h2 class="section_name">Контакты</h2>
      <div class="left_column">
            <span class="contact">
                <img src="~/assets/pointer.png" alt="">
                <span>Санкт - Петербург</span>
            </span>
        <span class="contact">
                <img src="~/assets/email.png" alt="">
                <a href="mailto:press@gorodperemen.spb.ru">press@gorodperemen.spb.ru</a>
            </span>
        <span class="contact">
                <img src="~/assets/tel.png" alt="">
                <a href="tel:+79822312466">+7(982)-231-24-66</a>
            </span>
      </div>
      <div class="right_column">
        <script type="text/javascript" charset="utf-8" async
                src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Abb380dd4a1d540e0392435f9438aa6fce3e42ee01a9a47f429aa150a0c04b920&amp;width=100%&amp;height=40vw&amp;lang=ru_RU&amp;scroll=true"></script>
      </div>
    </section>
  </div>
</template>

<script>
  import Contacts from '~/components/Contacts.vue'
  import Navbar from '~/components/Navbar.vue'
  import Footer from '~/components/Footer.vue'

  export default {
    components: {
      Contacts,
      Navbar,
      Footer
    }
  }
</script>

<style>
  .wrapper > * {
    grid-column: 2/14;
  }

  .wrapper > p {
    grid-column: 4/12;
    margin: 2rem;
    font-size: 1.5rem;
    line-height: 2.5rem;
  }

  .wrapper > img {
    width: 100%;
    grid-column: 2/14;
  }

  .title {
    text-align: center;
    font-size: 3rem;
    margin: 4rem 0 1rem;
    font-weight: 500;
  }

  .section_name {
    text-align: center;
    font-size: 2rem;
    margin: 5rem 0;
    font-weight: 500;
  }

  .projects {
    grid-column: 4/12;
  }

  .projects main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2vw;
  }

  .project {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #5EB8D3;
    color: white;
    border-radius: 25px;
    padding: 1rem;
    font-size: 1.5rem;
    line-height: 2rem;
    text-align: center;
  }

  .project h4 {
    margin-bottom: 2rem;
  }

  .project:first-child,
  .project:last-child {
    background: transparent;
    color: #5EB8D3;
    padding: 2rem 0;
  }

  .leads main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 3vw;
    margin-top: 6vw;
  }

  .lead {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .avatar {
    width: 60%;
    border-radius: 50%;
    border: 1px solid #71D5A2;
  }

  .fullname {
    font-size: 1.25rem;
    font-weight: 500;
    margin: 1rem 0;
    text-align: center;
  }

  .post {
    font-weight: normal;
    text-align: center;
  }

  .contacts_map {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 2vw;
    margin-bottom: 5vw;
  }

  .contacts_map .section_name {
    grid-column: 1/13;
  }

  .contacts_map .left_column {
    grid-column: 1/5;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1.125rem;
    font-weight: 500;
  }

  .left_column a {
    text-decoration: none;
    color: black;
  }

  .contact {
    display: flex;
    align-items: center;
    margin-bottom: 5vw;
  }

  .contact img {
    width: 1.5rem;
    margin-right: 2rem;
  }

  .contacts_map .right_column {
    grid-column: 5/13;
  }

  @media (max-width: 700px) {
    .contacts_map .left_column {
      grid-column: 1/13;
      font-size: 1.5rem;
    }

    .contacts_map .right_column {
      grid-column: 1/13;
    }

    .contact {
      margin-bottom: 2vw;
    }

    .projects {
      grid-column: 2/14;
    }
  }

  @media (max-width: 576px) {
    .wrapper > p {
      grid-column: 3/13;
    }

    .leads main {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-gap: 10vw;
      margin-top: 6vw;
    }

    .leads main .lead:nth-child(1) {
      grid-column: 1/5;
    }

    .leads main .lead:nth-child(2) {
      grid-column: 5/9;
    }

    .leads main .lead:nth-child(3) {
      grid-column: 3/7;
    }
  }

  @media (max-width: 420px) {
    .wrapper > p {
      grid-column: 2/14;
      font-size: 2rem;
      line-height: 4rem;
    }

    .section_name {
      font-size: 3rem;
    }

    .projects main {
      grid-template-columns: 1fr;
      grid-gap: 2vw;
    }

    .project {
      background: transparent;
      color: #5EB8D3;
      padding: 0;
      margin: 1rem 0;
      font-size: 2rem;
    }

    .project:nth-child(1),
    .project:nth-child(3) {
      background: #5EB8D3;
      color: white;
      padding: 3rem;
    }

    .fullname {
      font-size: 1.7rem;
    }

    .post {
      font-size: 1.5rem;
    }

    .contact {
      display: flex;
      align-items: center;
      margin-bottom: 5vw;
    }

    .left_column {
      grid-column: 1/13;
      font-size: 1.5rem;
    }

    .right_column {
      grid-column: 1/13;
    }
  }
</style>