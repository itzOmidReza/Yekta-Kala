<template>
  <div class="page-wrapper">
    <!-- start of page-header -->
    <AppHeader />
    <!-- end of page-header -->
    <AppMobileHeader />
    <!-- start of page-content -->
    <main class="page-content">
      <div class="container">
        <slot />
      </div>
      <!-- start of quick-view-modal -->

      <!-- end of quick-view-modal -->
    </main>
    <!-- end of page-content -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],

  link: [{ rel: "stylesheet", href: "/css/dependencies.css" }],

  script: [
    { src: "js/dependencies/bootstrap-slider.min.js" },
    { src: "js/dependencies/bootstrap.bundle.min.js" },
    { src: "js/dependencies/fancybox.umd.js" },
    { src: "js/dependencies/iziToast.min.js" },
    { src: "js/dependencies/jquery-3.6.0.min.js" },
    { src: "js/dependencies/jquery.countdown.min.js" },
    { src: "js/dependencies/jquery.simple.timer.min.js" },
    { src: "js/dependencies/nouislider.min.js" },
    { src: "js/dependencies/remodal.min.js" },
    { src: "js/dependencies/select2.min.js" },
    { src: "js/dependencies/simplebar.min.js" },
    { src: "js/dependencies/swiper-bundle.min.js" },
    { src: "js/dependencies/wNumb.js" },
    { src: "js/dependencies/zoomsl.min.js" },
    { src: "js/theme.js" },
    { src: "js/custome.js" },

  ],
});
</script>
