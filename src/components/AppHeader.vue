<template>
  <header>
    <div class="container">
      <AppLogo />
      <AppNavbar />
    </div>
  </header>
</template>

<script setup>
import AppLogo from './AppLogo.vue';
import AppNavbar from './AppNavbar.vue';
</script>

<style scoped>
header {
  padding: 8px 16px;
  height: 80px;
  background-color: var(--clr-primary-900);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>