<template>
  <q-layout view="hHr LpR fFr">
    <q-header
      elevated
      class="shadow-2 text-white"
      style="background: linear-gradient(185deg, #04173f 0%, #163c53 100%)"
    >
      <q-toolbar>
        <q-btn flat @click="drawerLeft = !drawerLeft" icon="menu" />

        <q-toolbar-title>
          <q-btn flat to="/" label="SPARK.EDU" />
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

          <!-- ВРЕМЕННО  -->
          <q-item clickable v-ripple to="/сurrentMaterial">
            <q-item-section> Материал </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/completing">
            <q-item-section> Выполнение Задания </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/currentTask">
            <q-item-section> Задание </q-item-section>
          </q-item>
          <!-- ВРЕМЕННО  -->
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-drawer
      v-model="drawerRight"
      side="right"
      overlay
      behavior="mobile"
      bordered
      show-if-above
      :width="350"
      :breakpoint="400"
    >
      <q-img
        class="absolute-top"
        src="/public/icons/fon1.jpg"
        style="height: 350px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="146px" class="q-mb-md">
            <img src="/public/icons/man.png" />
          </q-avatar>
          <div>
            <div class="text-h8 text-left">{{ f }}</div>
            <div class="text-h8 text-left">{{ i }}</div>
            <div class="text-h8 text-left">{{ o }}</div>
          </div>
        </div>
      </q-img>
      <div class="absolute-center">
        <div class="text-h5 text-center text-primary">Диплом</div>
        <div class="q-pb-md">
          <q-btn
            icon="download"
            @click="download"
            color="primary"
            label="Загрузить"
          />
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { onMounted, ref } from "vue";
import jsPDF from "jspdf";

const f = ref("");
const i = ref("");
const o = ref("");

onMounted();
{
  const user_name = localStorage.getItem("user_name");
  const fio = user_name.split(" ");

  f.value = fio[0];
  i.value = fio[1];
  o.value = fio[2];
}

export default {
  setup() {
    return {
      f,
      i,
      o,
      drawerLeft: ref(false),
      drawerRight: ref(false),
      download() {
        const doc = new jsPDF();

        doc.text(
          `Diplom was isuued by ${f.value}  ${i.value} ${o.value} .`,
          10,
          10
        );

        doc.save("Diplom.pdf");
      },
    };
  },
};
</script>

<style lang="sass" scoped>
.menu-list .q-item
  border-radius: 0 32px 32px 0
</style>
