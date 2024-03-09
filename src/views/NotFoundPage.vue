<template>
  <div class="not-found-container">
    <img src="@/assets/icons/not_found_dog.svg" alt="Dog Image">
    <p>Page not found!</p>
  </div>
</template>

<style scoped>
.not-found-container {
  height: calc(100vh - 184px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.not-found-container img {
  width: 200px;
}

.not-found-container p {
  color: var(--clr-primary-900);
  font-size: 2rem;
  font-weight: var(--fw-bold);
}

@media (min-width: 768px) {
  .not-found-container img {
    width: 400px;
  }

  .not-found-container p {
    font-size: 4rem;
  }
}
</style>