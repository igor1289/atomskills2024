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
    <!-- <template v-slot:before>
      <div class="q-pa-md">
        <q-input ref="filterRef" filled v-model="filter" label="Поиск">
          <template v-slot:append>
            <q-icon
              v-if="filter !== ''"
              name="clear"
              class="cursor-pointer"
              @click="resetFilter"
            />
          </template>
        </q-input>
        <q-tree
          :nodes="simple"
          :filter="filter"
          node-key="label"
          selected-color="primary"
          v-model:selected="selected"
          default-expand-all
        />
      </div>
    </template>

    <template v-slot:after>
      <q-tab-panels
        v-model="selected"
        animated
        transition-prev="jump-up"
        transition-next="jump-up"
      >
        <q-tab-panel name="Учебный матреиал 1">
          <div class="text-h4 q-mb-md text-center">Учебный матреиал 1</div>
          <div class="text-h6 q-mb-md text-right">Автор</div>
          <p class="text-justify">
            ОПИСАНИЕ Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Quis praesentium cumque magnam odio iure quidem, quod illum numquam
            possimus obcaecati commodi minima assumenda consectetur culpa fuga
            nulla ullam. In, libero.
          </p>
          <div>
            <q-table
              class="my-sticky-header-column-table"
              bordered
              title="Список приложений"
              :rows="rows"
              :columns="columns"
              row-key="name"
            >
              <template v-slot:body-cell-image="props">
                <q-td :props="props">
                  <div>
                    <img :src="props.row.image" />
                  </div>
                </q-td>
              </template>
            </q-table>
          </div>
          <div class="q-pt-md">
            <q-table
              title="Задания"
              bordered
              :rows="rowsTasks"
              :columns="columnsTasks"
              row-key="nameKey"
            >
            </q-table>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </template> -->
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
    };
  },
};
</script>
