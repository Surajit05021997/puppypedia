<template>
  <AppHeader />
  <div id="main" class="container">
    <router-view></router-view>
  </div>
  <AppFooter />
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
</script>

<style scoped>
.container {
  padding: 16px 8px;
  /*100vh-header height*/
  min-height: calc(100vh - 152px);
}

@media (min-width: 480px) {
  .container {
    padding: 16px 16px;
  }
}

@media (min-width: 768px) {
  .container {
    padding: 16px 24px;
  }
}
</style>
