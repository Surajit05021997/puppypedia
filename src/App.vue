<template>
  <AppHeader />
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue';
</script>

<style scoped>
.container {
  padding: 16px 24px;
}
</style>
