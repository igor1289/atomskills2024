<template>
  <q-layout view="hHr LpR fFr">
    <q-header elevated class="bg-primary shadow-2 text-white">
      <q-toolbar>
        <q-btn flat @click="drawerLeft = !drawerLeft" icon="menu" />

        <q-toolbar-title>
          <q-btn flat to="/" label="Стартовая страница" />
        </q-toolbar-title>

        <q-btn
          flat
          @click="drawerRight = !drawerRight"
          label="Личный кабинет"
          icon="account_circle"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawerLeft" show-if-above bordered side="left">
      <q-scroll-area class="fit">
        <q-list padding class="menu-list">
          <q-item clickable v-ripple to="/recordBook">
            <q-item-section avatar>
              <q-icon name="book" />
            </q-item-section>

            <q-item-section> Дневник </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/completedTasks">
            <q-item-section avatar>
              <q-icon name="check" />
            </q-item-section>

            <q-item-section> Проверка заданий </q-item-section>
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
      v-model="drawerRight"
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
    return {
      drawerLeft: ref(false),
      drawerRight: ref(false),
    };
  },
};
</script>

<style lang="sass" scoped>
.menu-list .q-item
  border-radius: 0 32px 32px 0
</style>
