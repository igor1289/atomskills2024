<template>
  <div>
    <q-splitter v-model="splitterModel" style="height: 100%">
      <template v-slot:before>
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
              Quis praesentium cumque magnam odio iure quidem, quod illum
              numquam possimus obcaecati commodi minima assumenda consectetur
              culpa fuga nulla ullam. In, libero.
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
      </template>
    </q-splitter>
  </div>
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
const columnsTasks = [
  {
    name: "tasks",
    required: true,
    label: "Задание",
    align: "left",
    field: (row) => row.name,
    sortable: true,
  },
  {
    name: "code",
    label: "Code",
    sortable: false,
  },
];
const rowsTasks = [
  {
    name: "Task1",
    code: 123,
  },
  {
    name: "Task2",
    code: 321,
  },
];

const rows = [
  {
    name: "Картинка1",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Картинка2",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Картинка3",
    image: "https://via.placeholder.com/150",
  },
];

export default {
  setup() {
    const filter = ref("");
    const filterRef = ref(null);
    const simple = ref([]);
    onMounted();
    {
      listLesson();
    }

    async function listLesson() {
      try {
        const result = await fetch("/lesson/all", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const resultTopic = await fetch("/topic/all", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const data = await result.json();
        console.log(data);
        const dataTopic = await resultTopic.json();
        console.log(dataTopic);

        if (dataTopic.length != 0) {
          dataTopic.forEach((element) => {
            console.log(element.code);
            let filteredByAge = data.filter((element) => {
              if (element.code == data.topic_code) return element;
            });
            console.log(filteredByAge);
            simple.value.push({
              label: element.title,
              code: element.code,
            });
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
    return {
      splitterModel: ref(30),
      selected: ref("Food"),
      filter,
      filterRef,
      columns,
      rows,
      columnsTasks,
      rowsTasks,

      // simple: [
      //   {
      //     label: "Тема1",
      //     code: "topic1",
      //     children: [
      //       {
      //         label: "Учебный матреиал 1",
      //         icon: "restaurant_menu",
      //         code: "ls1",
      //       },
      //       {
      //         label: "Учебный матреиал 2",
      //         icon: "room_service",
      //         code: "ls2",
      //       },
      //       {
      //         label: "Учебный матреиал 3",
      //         icon: "photo",
      //         code: "ls3",
      //       },
      //     ],
      //   },
      // ],
      resetFilter() {
        filter.value = "";
        filterRef.value.focus();
      },
    };
  },
};
</script>
