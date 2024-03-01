<template>
  <router-link class="logo" to="/">
    <img src="@/assets/icons/puppypedia_logo.svg" alt="Puppypedia Logo" class="logo-img">
    <span class="logo-text">Puppypedia</span>
  </router-link>
</template>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-img {
  height: 64px;
}

.logo {
  font-size: 32px;
  font-weight: var(--fw-bold);
  color: var(--clr-primary-600);
}

.logo:active {
  color: var(--clr-primary-600);
}

.logo:hover {
  color: var(--clr-primary-600);
}
</style>