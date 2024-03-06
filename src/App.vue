<template>
  <AppHeader />
  <div id="main" class="container">
    <router-view></router-view>
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue';
</script>

<style scoped>
.container {
  padding: 16px 24px;
  /*100vh-header height*/
  min-height: calc(100vh - 96px);
}
</style>
