<template>
  <q-tab-panel name="Задание 1">
    <div class="q-pa-md">
      <q-btn
        :loading="loading[0]"
        color="secondary"
        @click="simulateProgress(0)"
        label="Взять в работу"
        to="/completing"
      />
    </div>

    <div class="text-h4 q-mb-md text-center">{{ data.title }}</div>
    <div class="text-h6 text-italic text-right">
      Всего времени на задание : {{ data.time }} минут
    </div>
    <div class="text-h6 text-italic text-right q-pb-md">
      Сложность : {{ data.difficulty }}
    </div>
    <div class="q-mb-md text-justify">
      {{ data.content }}
    </div>
    <!-- <div>
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
    </div> -->
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
const rows = [];

const filter = ref("");
const filterRef = ref(null);
const loading = ref([false, false, false, false, false, false]);
const code = ref("");
const data = ref([]);

const progress = ref(false);
onMounted();
{
  listLesson();
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
// const simple = ref([]);

async function listLesson() {
  const code = localStorage.getItem("current_lesson");
  try {
    console.log("/task/pk/" + code);
    const result = await fetch("/task/pk/" + code, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    data.value = await result.json();
    console.log(data);
  } catch (error) {
    $q.notify({
      color: "red-5",
      textColor: "white",
      icon: "warning",
      message: "Не удалось подключиться к серверу",
    });
  }
}

async function resetFilter() {
  filter.value = "";
  filterRef.value.focus();
}

const splitterModel = ref(30);
const selected = ref("Food");
</script>
