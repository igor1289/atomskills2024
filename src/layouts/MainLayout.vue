<template>
  <q-layout view="hHr LpR fFr">
    <q-header elevated class="bg-primary shadow-2 text-white">
      <q-toolbar>
        <q-btn flat icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-btn flat to="/startPage" label="Стартовая страница" />
        </q-toolbar-title>

        <q-btn flat icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above bordered side="left">
      <q-scroll-area class="fit">
        <q-list padding class="menu-list">
          <q-item clickable v-ripple to="/recordBook">
            <q-item-section avatar>
              <q-icon name="book" />
            </q-item-section>

            <q-item-section> Дневник </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/materials">
            <q-item-section avatar>
              <q-icon name="clear_all" />
            </q-item-section>

            <q-item-section> Учебные материалы </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/tasks">
            <q-item-section avatar>
              <q-icon name="task" />
            </q-item-section>

            <q-item-section> Задания </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/rating">
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section> Рейтинг </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-drawer
      v-model="rightDrawerOpen"
      side="right"
      overlay
      behavior="mobile"
      bordered
    >
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>

<style lang="sass" scoped>
.menu-list .q-item
  border-radius: 0 32px 32px 0
</style>
