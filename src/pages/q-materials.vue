<template>
  <div>
    <q-splitter v-model="splitterModel" style="height: 400px">
      <template v-slot:before>
        <div class="q-pa-md">
          <div class="text-h4 q-mb-md">Темы</div>
          <div class="q-pa-md">
            <q-table
              bordered
              :rows="rows"
              :columns="columns"
              row-key="name"
              :filter="filter"
              @row-click="findLesson"
            >
              <template v-slot:top-right>
                <q-input
                  borderless
                  dense
                  debounce="300"
                  v-model="filter"
                  placeholder="Поиск"
                >
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>
              </template>
            </q-table>
          </div>
        </div>
      </template>

      <template v-slot:separator>
        <q-avatar
          color="primary"
          text-color="white"
          size="40px"
          icon="drag_indicator"
        />
      </template>

      <template v-slot:after>
        <div class="q-pa-md">
          <div class="text-h4 q-mb-md">Учебные материалы</div>
          <div class="q-pa-md">
            <q-table
              bordered
              :rows="rowsMat"
              :columns="columnsMat"
              row-key="name"
              :filter="filter"
            >
              <template v-slot:top-right>
                <q-input
                  borderless
                  dense
                  debounce="300"
                  v-model="filter"
                  placeholder="Поиск"
                >
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>
              </template>
            </q-table>
          </div>
        </div>
      </template>
    </q-splitter>
  </div>
</template>

<script setup>
import { stringify } from "postcss";
import { useQuasar } from "quasar";
import { onMounted, ref } from "vue";
const $q = useQuasar();
const filter = ref("");
const rows = ref([]);
const rowsMat = ref([]);
const splitterModel = 50;

onMounted();
{
  listTask();
}

async function listTask() {
  try {
    const result = await fetch("/topic/all", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await result.json();
    // console.log(data);
    // console.log(data.length);
    if (data.length != 0) {
      let code = data[0].code;
      // console.log(code);
      rows.value.push(data[0]);
      // console.log(rows);
      for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          const element = data[key];
          if (code != element.code) {
            rows.value.push(element);
            // console.log(rows);
            code = element.code;
          }
        }
      }
    }
    // rows.value = console.log(rows.value);
  } catch (error) {
    $q.notify({
      color: "red-5",
      textColor: "white",
      icon: "warning",
      message: "Не удалось подключиться к серверу",
    });
  }
}

async function findLesson(e, row) {
  try {
    console.log("/lesson/get/" + row.code.trim());
    const result = await fetch("/lesson/topic/" + row.code.trim(), {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await result.json();
    console.log(data);
    console.log(data.length);
    if (data.length != 0) {
      let code = data[0].code;
      console.log(code);
      rowsMat.value = data;
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

const columns = [
  {
    name: "code",
    align: "left",
    label: "Код",
    field: "code",
    sortable: true,
  },
  {
    name: "title",
    required: true,
    label: "Заголовок",
    align: "left",
    field: (row) => row.title,
    sortable: true,
  },
  {
    name: "description",
    required: true,
    label: "Описание",
    align: "left",
    field: (row) => row.title,
    sortable: true,
  },
];
const columnsMat = [
  {
    name: "code",
    align: "left",
    label: "Код",
    field: "code",
    sortable: true,
  },
  {
    name: "title",
    required: true,
    label: "Заголовок",
    align: "left",
    field: (row) => row.title,
    sortable: true,
  },
  {
    name: "autor",
    required: true,
    label: "Автор",
    align: "left",
    field: (row) => row.title,
    sortable: true,
  },
];
</script>
