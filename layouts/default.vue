<template>
  <div>
    <Contacts/>
    <div class="wrapper">
      <Navbar id="Navbar"/>
      <nuxt/>
    </div>
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

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.background {
  width: 100%;
  background: #0C6293;
  grid-column: 1/15;
  display: grid;
  grid-template-columns: 1fr repeat(12, 1fr) 1fr;
}

#Footer {
  grid-column: 2/14;
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr repeat(12, 1fr) 1fr;
  font-family: 'Rubik', sans-serif;
}

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

.wrapper > .y_logo {
  grid-column: 7/9;
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
  .events main {
    grid-template-columns: 1fr 1fr;
    grid-gap: 4vw;
    margin: 10vw 0;
  }
}

@media (max-width: 360px) {
  html {
    font-size: 5px;
  }
}

@media (min-width: 420px) and (orientation: portrait) {
  .background {
    margin-top: 30vh;
  }
}

@media (max-width: 1175px) and (orientation: portrait) {
  .background {
    margin-top: 45vh;
  }
}
</style>

<script>
  import Contacts from "../components/Contacts";
  import Navbar from "../components/Navbar";
  import Footer from "../components/Footer";

  export default {
    components: {Contacts, Navbar, Footer}
  }
</script>