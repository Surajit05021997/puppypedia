<template>
  <div class="loading-overlay">
    <div class="loading-spinner"></div>
  </div>
</template>

<style scoped>
.loading-overlay {
  height: calc(100vh - 96px);
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: var(--clr-neutral-900);
  opacity: 0.85;
  color: white;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-spinner {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: .5rem solid var(--clr-neutral-100);
  border-top-color: var(--clr-primary-900);
  animation: loading 0.7s infinite;
}

@keyframes loading {
  from { transform : rotate(0turn) }
  to { transform : rotate(1turn) }
}
</style>