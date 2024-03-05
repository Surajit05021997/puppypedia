<template>
  <router-link class="logo" to="/">
    <img
      src="@/assets/icons/puppypedia_logo.svg"
      alt="Puppypedia Logo"
      class="logo-img"
      @click="$emit('collapse-menu')"
    >
    <span class="logo-text">Puppypedia</span>
  </router-link>
</template>

<script setup>
</script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo:active {
  color: var(--clr-primary-600);
}

.logo:hover {
  color: var(--clr-primary-600);
}

.logo-img {
  height: 64px;
}

.logo-text {
  font-size: 32px;
  font-weight: var(--fw-bold);
  color: var(--clr-primary-600);
  display: none;
}


@media (min-width: 992px) {
  .logo-text {
    display: inline;
  }
}
</style>