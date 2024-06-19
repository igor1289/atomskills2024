<template>
  <q-tab-panel name="Задание 1">
    <div class="q-pa-md row justify-between">
      <div class="">
        <q-btn
          :loading="loading[0]"
          icon="send"
          color="primary"
          @click="simulateProgress(0)"
          label="Отправить"
        />
      </div>
      <div class="">
        <q-btn color="primary" label="Проверить/Уточнить" />
      </div>
    </div>
    <div class="text-h4 q-mb-md text-center">Задание 1</div>

    <div class="q-pa-md row justify-between">
      <div class="col-3">
        <div class="text-h6 text-center">Таймер</div>
        <div class="row justify-between">
          <div class="text-h6 text-italic text-left">
            Всего времени на задание : 15 минут
          </div>
          <div class="text-h6 text-italic text-left q-pb-md">Сложность : 2</div>
        </div>
      </div>
      <div class="col-7">
        <div class="row justify-evenly">
          <div class="text-h6 text-center">Оценка : Отлично</div>
          <div class="text-h6 text-center">Статус : В работе</div>
        </div>
        <div class="text-h6 text-italic text-justify">
          Комментарий : Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Magnam obcaecati ratione quo eum laborum harum, possimus
          laudantium facere sit laboriosam quidem consectetur rem nostrum natus
          adipisci? Quam perferendis beatae ducimus?
        </div>
      </div>
    </div>

    <q-splitter v-model="splitterModel" style="height: 100%">
      <template v-slot:before>
        <div class="text-h6 q-ma-lg text-center">Описание задания</div>

        <div class="q-px-md text-justify">
          ОПИСАНИЕ Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Quis praesentium cumque magnam odio iure quidem, quod illum numquam
          possimus obcaecati commodi minima assumenda consectetur culpa fuga
          nulla ullam. In, libero.
        </div>
        <div class="q-pa-md">
          <q-table
            class="my-sticky-header-column-table"
            bordered
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
      </template>

      <template v-slot:after>
        <div class="text-h6 q-ma-lg text-center">Учебный материал</div>
        <div class="q-px-md text-justify">
          ОПИСАНИЕ Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Quis praesentium cumque magnam odio iure quidem, quod illum numquam
          possimus obcaecati commodi minima assumenda consectetur culpa fuga
          nulla ullam. In, libero.
        </div>
        <div class="q-pa-md">
          <q-table
            class="my-sticky-header-column-table"
            bordered
            :rows="rowsMat"
            :columns="columnsMat"
            row-key="name"
          >
            <template v-slot:body-cell-image="props">
              <q-td :props="props">
                <div>
                  <img :src="props.row.image" />
                </div>
              </q-td>
            </template>
          </q-table></div
      ></template>
    </q-splitter>

    <div class="q-pa-md">
      <div class="q-pb-md">
        <q-btn icon="download" color="primary" label="Загрузить результат" />
      </div>
      <q-table
        class="my-sticky-header-column-table"
        bordered
        :rows="rowsRez"
        :columns="columnsRez"
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
  </q-tab-panel>
</template>

<script>
import { ref } from "vue";
const columns = [
  {
    name: "title",
    required: true,
    label: "Заголовок",
    align: "left",
    field: (row) => row.name,
    sortable: true,
  },
  {
    name: "image",
    label: "Файл",
    field: "image",
    sortable: false,
  },
];
const columnsMat = [
  {
    name: "title",
    required: true,
    label: "Заголовок",
    align: "left",
    field: (row) => row.name,
    sortable: true,
  },
  {
    name: "image",
    label: "Файл",
    field: "image",
    sortable: false,
  },
];
const columnsRez = [
  {
    name: "title",
    required: true,
    label: "Заголовок",
    align: "left",
    field: (row) => row.name,
    sortable: true,
  },
  {
    name: "image",
    label: "Файл",
    field: "image",
    sortable: false,
  },
  {
    name: "comment",
    required: true,
    label: "Комментарий",
    align: "right",
  },
];
const rows = [];
const rowsMat = [];
const rowsRez = [];

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
      rows,
      columns,
      rowsMat,
      columnsMat,
      rowsRez,
      columnsRez,
      progress,
      simulateProgress,
      splitterModel: ref(50),
    };
  },
};
</script>
