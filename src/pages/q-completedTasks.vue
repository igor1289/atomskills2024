<template>
  <div class="q-pa-md">
    <q-table
      bordered
      title="Проверка заданий"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :filter="filter"
      @row-click="findTask"
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

<script setup>
import { useQuasar } from "quasar";
import { onMounted, ref } from "vue";
const $q = useQuasar();
const filter = ref("");
const rows = ref([]);

async function getTaskList() {
  try {
    const result = await fetch("/result/all", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = await result.json();

    console.log(data);

    rows.value = data;
  } catch (error) {
    $q.notify({
      color: "red-5",
      textColor: "white",
      icon: "warning",
      message: "Не удалось подключиться к серверу",
    });
  }
}

async function findTask(e, row) {
  localStorage.setItem("current_lesson_result", row.id);
  window.location.href = "/#/completing";
  // try {
  //   const result = await fetch("/result/one/" + row.id, {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const data = await result.json();
  //   console.log(data);
  //   localStorage.setItem("current_lesson_result", data.id);
  //   window.location.href = "/#/completing";
  // } catch (error) {
  //   $q.notify({
  //     color: "red-5",
  //     textColor: "white",
  //     icon: "warning",
  //     message: "Не удалось подключиться к серверу",
  //   });
  // }
}

onMounted();
{
  getTaskList();
}

const columns = [
  {
    name: "task",
    required: true,
    label: "Задание",
    align: "left",
    field: (row) => row.title,
    sortable: true,
  },
  {
    name: "student",
    required: true,
    label: "Исполнитель",
    align: "left",
    field: (row) => row.student,
    sortable: true,
  },
  {
    name: "teacher",
    required: true,
    label: "Проверяющий",
    align: "left",
    field: (row) => row.teacher,
    sortable: true,
  },
  {
    name: "status",
    required: true,
    label: "Статус",
    align: "left",
    field: (row) => row.status,
    sortable: true,
  },
  { name: "score", label: "Оценка", field: (row) => row.score, sortable: true },
  {
    name: "time",
    label: "Время выполнения",
    field: (row) => row.time,
    sortable: true,
  },
  {
    name: "comment",
    align: "center",
    label: "Комментарий",
    sortable: false,
  },
];
</script>
