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

    <div class="text-h4 q-mb-md text-center">Задание 1</div>
    <div class="text-h6 text-italic text-right">
      Всего времени на задание : 15 минут
    </div>
    <div class="text-h6 text-italic text-right q-pb-md">Сложность : 2</div>
    <div class="q-mb-md text-justify">
      ОПИСАНИЕ Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
      praesentium cumque magnam odio iure quidem, quod illum numquam possimus
      obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In,
      libero.
    </div>
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
  </q-tab-panel>
</template>

<script>
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

export default {
  setup() {
    const filter = ref("");
    const filterRef = ref(null);
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
    // const simple = ref([]);
    // onMounted();
    // {
    //   listLesson();
    // }

    // async function listLesson() {
    //   try {
    //     const result = await fetch("/lesson/all", {
    //       method: "GET",
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //       },
    //     });
    //     const resultTopic = await fetch("/topic/all", {
    //       method: "GET",
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //       },
    //     });
    //     const data = await result.json();
    //     console.log(data);
    //     const dataTopic = await resultTopic.json();
    //     console.log(dataTopic);

    //     if (dataTopic.length != 0) {
    //       dataTopic.forEach((element) => {
    //         console.log(element.code);
    //         let filteredByAge = data.filter((element) => {
    //           if (element.code == data.topic_code) return element;
    //         });
    //         console.log(filteredByAge);
    //         simple.value.push({
    //           label: element.title,
    //           code: element.code,
    //         });
    //       });
    //     }
    //   } catch (error) {
    //     $q.notify({
    //       color: "red-5",
    //       textColor: "white",
    //       icon: "warning",
    //       message: "Не удалось подключиться к серверу",
    //     });
    //   }
    // }
    return {
      splitterModel: ref(30),
      selected: ref("Food"),
      filter,
      filterRef,
      columns,
      rows,
      loading,
      progress,
      simulateProgress,

      resetFilter() {
        filter.value = "";
        filterRef.value.focus();
      },
    };
  },
};
</script>
