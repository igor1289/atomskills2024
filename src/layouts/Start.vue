<template>
  <div class="q-pa-md bg-image">
    <q-img src="/public/icons/fon.png" class="fullscreen">
      <div class="absolute-full">
        <div class="q-pa-md q-gutter-y-sm">
          <q-toolbar class="text-white">
            <q-btn flat round dense icon="menu" class="q-mr-sm" />

            <div>
              <q-btn
                flat
                v-for="filter in backdropFilterList"
                :key="filter.label"
                style="color: white"
                label="Личный кабинет"
                no-caps
                @click="filter.onClick"
                icon="person"
              />

              <q-dialog v-model="dialog" :backdrop-filter="backdropFilter">
                <q-card>
                  <q-card-section class="row items-center q-pb-none text-h6">
                    Dialog
                  </q-card-section>

                  <q-card-section>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem nulla quia doloribus optio eos voluptatibus
                    fugiat labore accusantium provident eaque, debitis
                    architecto ipsam dignissimos, sapiente blanditiis
                    repudiandae accusamus explicabo dolor!
                  </q-card-section>

                  <q-card-actions align="right">
                    <q-btn flat label="Close" color="primary" v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </div>
          </q-toolbar>
        </div>

        <div class="text-center">
          <h1>TEST</h1>
          <h2>Testtesttest</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eum
            quo labore laborum natus est, laboriosam nesciunt praesentium
            ducimus saepe possimus consequuntur sunt esse odit ratione ad.
            Suscipit, excepturi quis!
          </p>
        </div>
      </div>
    </q-img>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const list = ["blur(4px) saturate(150%)"];

    const dialog = ref(false);
    const backdropFilter = ref(null);

    return {
      dialog,
      backdropFilter,
      backdropFilterList: list.map((filter) => ({
        label: filter,
        onClick: () => {
          backdropFilter.value = filter;
          dialog.value = true;
        },
      })),
    };
  },
};
</script>
