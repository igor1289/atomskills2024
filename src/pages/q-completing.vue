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
    <div class="text-h4 q-mb-md text-center">{{ dataTask.title }}</div>

    <div class="q-pa-md row justify-between">
      <div class="col-3">
        <div class="text-h6 text-center">Таймер</div>
        <div class="row justify-between">
          <div class="text-h6 text-italic text-left">
            Всего времени на задание : {{ dataTask.time }} минут
          </div>
          <div class="text-h6 text-italic text-left q-pb-md">
            Сложность : {{ dataTask.difficulty }}
          </div>
        </div>
      </div>
      <div class="col-7">
        <div class="row justify-evenly">
          <div class="text-h6 text-center">Оценка : {{ data[0].score }}</div>
          <div class="text-h6 text-center">Статус : {{ data[0].status }}</div>
        </div>
        <div class="text-h6 text-italic text-justify">
          Комментарий : {{ data[0].comment }}
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
      </template>

      <template v-slot:after>
        <div class="text-h6 q-ma-lg text-center">Учебный материал</div>
        <div class="q-px-md text-justify">
          ОПИСАНИЕ Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Quis praesentium cumque magnam odio iure quidem, quod illum numquam
          possimus obcaecati commodi minima assumenda consectetur culpa fuga
          nulla ullam. In, libero.
        </div>
      </template>
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

<script setup>
import { onMounted, ref } from "vue";
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

const loading = ref([false, false, false, false, false, false]);

const progress = ref(false);
const code = ref("");
const data = ref([]);
const dataTask = ref([]);

onMounted();
{
  listLesson();
}

async function listLesson() {
  const code = localStorage.getItem("current_lesson_result");
  try {
    // console.log("/result/one/" + code);
    const result = await fetch("/result/one/" + code, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    data.value = await result.json();
    if (data.value.length != 0) {
      const resultTask = await fetch("/task/pk/" + data.value[0].task, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      dataTask.value = await resultTask.json();
      console.log(dataTask.value);
    } else {
      $q.notify({
        color: "red-5",
        textColor: "white",
        icon: "warning",
        message: "Не удалось подключиться к серверу",
      });
    }
  } catch (error) {
    $q.notify({
      color: "red-5",
      textColor: "white",
      icon: "warning",
      message: "Не удалось подключиться к серверу",
    });
  }
}

function simulateProgress(number) {
  // we set loading state
  loading.value[number] = true;

  // simulate a delay
  setTimeout(() => {
    // we're done, we reset loading state
    loading.value[number] = false;
  }, 3000);
}

const splitterModel = ref(50);
</script>
