<template>
  <nav>
    <ul>
      <li v-for="item in navItems" :key="item.linkText">
        <router-link
          :to="{name: item.component}"
          class="nav-link"
          @click="$emit('collapse-menu')"
        >
          {{ item.linkText }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const navItems = [
  {
    linkText: 'Breeds',
    component: 'pupBreeds',
  },
  {
    linkText: 'Health',
    component: 'pupHealth',
  },
  {
    linkText: 'Training',
    component: 'pupTraining',
  },
  {
    linkText: 'Lifestyle',
    component: 'pupLifestyle',
  },
  {
    linkText: 'About Us',
    component: 'aboutUs',
  },
];
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 24px;
}

li {
  list-style: none;
}

.nav-link {
  color: var(--clr-primary-600);
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 250ms;
}

.router-link-active {
  color: var(--clr-primary-900);
  background-color: var(--clr-primary-600);
}

.nav-link:hover {
  color: var(--clr-primary-900);
  background-color: var(--clr-primary-600);
}

/*:active should be below :hover*/
.nav-link:active {
  color: var(--clr-primary-600);
  background-color: var(--clr-primary-700);
}

@media (min-width: 768px) {
  ul {
    flex-direction: row;
    align-items: center;
  }
}

@media (min-width: 992px) {
  ul {
    gap: 32px;
  }
}
</style>
