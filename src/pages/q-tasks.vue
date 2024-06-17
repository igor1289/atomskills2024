<template>
  <div class="q-pa-md">
    <q-table
      grid
      grid-header
      flat
      bordered
      :rows="rows"
      :columns="columns"
      row-key="name"
      :filter="filter"
      hide-header
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
    name: "difficulty",
    align: "center",
    label: "Сложность",
    field: "difficulty",
    sortable: true,
  },
  {
    name: "time",
    label: "Время выполнения (мин)",
    field: "time",
    sortable: true,
  },
];

const rows = [
  {
    name: "Задание1",
    difficulty: 1,
    time: 60,
  },
  {
    name: "Задание2",
    difficulty: 2,
    time: 50,
  },
  {
    name: "Задание3",
    difficulty: 1,
    time: 80,
  },
  {
    name: "Задание4",
    difficulty: 3,
    time: 20,
  },
  {
    name: "Задание5",
    difficulty: 3,
    time: 10,
  },
  {
    name: "Задание6",
    difficulty: 1,
    time: 70,
  },
  {
    name: "Задание1",
    difficulty: 1,
    time: 60,
  },
  {
    name: "Задание2",
    difficulty: 2,
    time: 50,
  },
  {
    name: "Задание3",
    difficulty: 1,
    time: 80,
  },
  {
    name: "Задание4",
    difficulty: 3,
    time: 20,
  },
  {
    name: "Задание5",
    difficulty: 3,
    time: 10,
  },
  {
    name: "Задание6",
    difficulty: 1,
    time: 70,
  },
  {
    name: "Задание1",
    difficulty: 1,
    time: 60,
  },
  {
    name: "Задание2",
    difficulty: 2,
    time: 50,
  },
  {
    name: "Задание3",
    difficulty: 1,
    time: 80,
  },
  {
    name: "Задание4",
    difficulty: 3,
    time: 20,
  },
  {
    name: "Задание5",
    difficulty: 3,
    time: 10,
  },
  {
    name: "Задание6",
    difficulty: 1,
    time: 70,
  },
  {
    name: "Задание1",
    difficulty: 1,
    time: 60,
  },
  {
    name: "Задание2",
    difficulty: 2,
    time: 50,
  },
  {
    name: "Задание3",
    difficulty: 1,
    time: 80,
  },
  {
    name: "Задание4",
    difficulty: 3,
    time: 20,
  },
  {
    name: "Задание5",
    difficulty: 3,
    time: 10,
  },
  {
    name: "Задание6",
    difficulty: 1,
    time: 70,
  },
];

export default {
  setup() {
    return {
      filter: ref(""),
      columns,
      rows,
    };
  },
};
</script>
