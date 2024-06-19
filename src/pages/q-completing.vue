<template>
  <q-tab-panel name="Задание 1">
    <div class="q-pa-md row justify-between">
      <div class="">
        <q-btn
          :loading="loading[0]"
          color="secondary"
          @click="simulateProgress(0)"
          label="Отправить"
        />
      </div>
      <div class="">
        <q-btn color="secondary" label="Проверить/Уточнить" />
      </div>
    </div>
    <div class="text-h4 q-mb-md text-center">Задание 1</div>

    <div class="text-h6 text-center">Оценка</div>
    <div class="text-h6 text-center">Статус</div>
    <div class="text-h6 text-center">Комментарий</div>
    <div class="text-h6 text-center">Таймер</div>
    <div class="text-h6 text-center">Время всего по заданию</div>
    <div class="text-h6 text-center">Сложность</div>
    <q-splitter v-model="splitterModel" style="height: 100%">
      <template v-slot:before>
        <div class="q-pa-md">
          <div class="text-h6 text-grey-3 text-center">Сложность</div>
        </div>
      </template>

      <template v-slot:after>
        <div class="text-h6 text-grey-3 text-center">Сложность</div></template
      >
    </q-splitter>
  </q-tab-panel>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const loading = ref([false, false, false, false, false, false]);

    const progress = ref(false);

    function simulateProgress(number) {
      // we set loading state
      loading.value[number] = true;

      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        loading.value[number] = false;
      }, 3000);
    }

    return {
      loading,
      progress,
      simulateProgress,
      splitterModel: ref(50),
    };
  },
};
</script>
