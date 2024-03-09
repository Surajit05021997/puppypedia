<template>
  <header :class="expandedMenu">
    <div class="container">
      <AppLogo @collapse-menu="expandedMenu['expanded-menu']=false" />
      <div class="nav-container">
        <img
          v-if="!expandedMenu['expanded-menu']"
          src="@/assets/icons/burger-menu.svg"
          alt="Menu Icon"
          class="burger-menu-icon"
          @click="toggleMenu"
        >
        <img
          v-else
          src="@/assets/icons/cross.svg"
          alt="Cross Icon"
          class="cross-icon"
          @click="toggleMenu"
        >
        <AppNavbar class="navbar" :class="expandedMenu" @collapse-menu="expandedMenu['expanded-menu']=false" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import AppLogo from './AppLogo.vue';
import AppNavbar from './AppNavbar.vue';

let expandedMenu = ref({
  'expanded-menu': false,
});

const toggleMenu = function() {
  expandedMenu.value['expanded-menu'] = !expandedMenu.value['expanded-menu'];
}
</script>

<style scoped>
header {
  padding: 16px 24px;
  height: 96px;
  background-color: var(--clr-primary-900);
  /* overflow-x: hidden; */
  /* transition: height 500ms; */
}

header.expanded-menu {
  height: 348px;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: start;
}

.nav-container {
  display: flex;
  flex-direction: column;
  align-items: end;
  padding-top: 16px;
  gap: 24px;
}

.burger-menu-icon, .cross-icon {
  width: 32px;
  cursor: pointer;
}

.navbar {
  display: none;
  /* transform: translateX(132px); */
  /* transition: transform 250ms ease-in; */
}

.navbar.expanded-menu {
  display: block;
  transform: translateX(0);
}

@media (min-width: 768px) {
  .container {
    align-items: center;
  }

  .nav-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 0;
    gap: 0;
  }

  .burger-menu-icon, .cross-icon {
    display: none;
  }

  .navbar {
    display: block;
  }
}
</style>