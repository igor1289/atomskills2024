<template>
  <div class="q-pa-md">
    <q-table
      bordered
      title="Темы"
      :rows="rows"
      :columns="columns"
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
</template>

<script setup>
import { useQuasar } from "quasar";
import { onMounted, ref } from "vue";
const $q = useQuasar();
const filter = ref("");
const rows = ref([]);
// onMounted();
// {
//   listTask();
// }

// async function listTask() {
//   try {
//     const result = await fetch("/task/all", {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     });
//     const data = await result.json();
//     // console.log(data);
//     // console.log(data.length);
//     if (data.length != 0) {
//       let code = data[0].code;
//       // console.log(code);
//       rows.value.push(data[0]);
//       // console.log(rows);
//       for (const key in data) {
//         if (Object.hasOwnProperty.call(data, key)) {
//           const element = data[key];
//           if (code != element.code) {
//             rows.value.push(element);
//             // console.log(rows);
//             code = element.code;
//           }
//         }
//       }
//     }
//     // rows.value = console.log(rows.value);
//   } catch (error) {
//     $q.notify({
//       color: "red-5",
//       textColor: "white",
//       icon: "warning",
//       message: "Не удалось подключиться к серверу",
//     });
//   }
// }

const columns = [
  {
    name: "title",
    required: true,
    label: "Заголовок",
    align: "left",
    field: (row) => row.title,
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
</script>
