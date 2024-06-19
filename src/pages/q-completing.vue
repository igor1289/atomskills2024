<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <q-btn
        :loading="loading[0]"
        color="secondary"
        @click="simulateProgress(0)"
        label="Button"
      />
      <q-btn color="secondary" label="Проверить/Уточнить" />
    </div>
    <div class="text-h6 text-grey-3 text-center">Заголовок задания</div>
    <div class="text-h6 text-grey-3 text-center">Оценка</div>
    <div class="text-h6 text-grey-3 text-center">Статус</div>
    <div class="text-h6 text-grey-3 text-center">Комментарий</div>
    <div class="text-h6 text-grey-3 text-center">Таймер</div>
    <div class="text-h6 text-grey-3 text-center">Время всего по заданию</div>
    <div class="text-h6 text-grey-3 text-center">Сложность</div>
  </q-page>
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
