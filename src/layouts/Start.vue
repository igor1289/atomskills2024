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
                @click="inception = true"
                icon="person"
              />
              <q-dialog
                v-model="inception"
                backdrop-filter="blur(10px) saturate(150%)"
              >
                <q-card>
                  <q-card-section>
                    <div class="text-h6 text-center">Личный кабинет</div>
                    <q-btn
                      size="sm"
                      outline
                      class="full-width"
                      color="primary"
                      label="Зарегистрироваться"
                      @click="secondDialog = true"
                    />
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    <q-input
                      filled
                      v-model="lastName"
                      label="Логин"
                      lazy-rules
                      :rules="[
                        (val) => (val && val.length > 0) || 'Введите логин',
                      ]"
                    />

                    <q-input
                      v-model="password"
                      filled
                      :type="isPwd ? 'password' : 'text'"
                      hint="Пароль"
                    >
                      <template v-slot:append>
                        <q-icon
                          :name="isPwd ? 'visibility_off' : 'visibility'"
                          class="cursor-pointer"
                          @click="isPwd = !isPwd"
                        />
                      </template>
                    </q-input>
                  </q-card-section>

                  <q-card-actions align="right" class="text-primary">
                    <q-btn flat label="Войти" />

                    <q-btn flat label="Закрыть" v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>

              <q-dialog
                v-model="secondDialog"
                :backdrop-filter="backdropFilter"
              >
                <q-card>
                  <q-card-section class="row items-center q-pb-none text-h6">
                    <div class="text-h6">Личный кабинет</div>
                  </q-card-section>

                  <q-card-section>
                    <div style="max-width: 700px">
                      <q-form
                        @submit="onSubmit"
                        @reset="onReset"
                        class="q-gutter"
                      >
                        <div class="row example-row-column-width">
                          <div class="col-4 q-pa-md" style="max-width: 500px">
                            <div class="q-pb-md">
                              <q-img src="/public/icons/photoProfile.png">
                              </q-img>
                              <q-file v-model="model" label="Ваше фото">
                                <q-icon name="attach_file" />
                              </q-file>
                            </div>

                            <q-input
                              standout
                              v-model="lastName"
                              label="Логин"
                              lazy-rules
                              :rules="[
                                (val) =>
                                  (val && val.length > 0) || 'Придумайте логин',
                              ]"
                            />

                            <q-input
                              v-model="password"
                              standout
                              :type="isPwd ? 'password' : 'text'"
                              hint="Пароль"
                            >
                              <template v-slot:append>
                                <q-icon
                                  :name="
                                    isPwd ? 'visibility_off' : 'visibility'
                                  "
                                  class="cursor-pointer"
                                  @click="isPwd = !isPwd"
                                />
                              </template>
                            </q-input>
                          </div>

                          <div class="col-8 q-pa-md">
                            <q-input
                              standout
                              v-model="name"
                              label="Имя"
                              lazy-rules
                              :rules="[
                                (val) =>
                                  (val && val.length > 0) ||
                                  'Пожалуйста, введите имя!',
                              ]"
                            />
                            <q-input
                              standout
                              v-model="lastName"
                              label="Фамилия"
                              lazy-rules
                              :rules="[
                                (val) =>
                                  (val && val.length > 0) ||
                                  'Пожалуйста, введите фамилию!',
                              ]"
                            />
                            <q-input
                              standout
                              v-model="fatherName"
                              label="Отчество"
                              lazy-rules
                              :rules="[
                                (val) =>
                                  (val && val.length > 0) ||
                                  'Пожалуйста, введите отчетсво!',
                              ]"
                            />

                            <div class="">
                              <div class="q-gutter-sm">
                                <q-radio
                                  v-model="pol"
                                  val="Man"
                                  label="Мужской"
                                />
                                <q-radio
                                  v-model="pol"
                                  val="Woman"
                                  label="Женский"
                                />
                              </div>
                            </div>

                            <q-input
                              class="q-pb-md"
                              standout
                              v-model="email"
                              type="email"
                              prefix="Email:"
                              suffix="@gmail.com"
                            >
                              <template v-slot:prepend>
                                <q-icon name="mail" />
                              </template>
                            </q-input>

                            <q-input
                              class="q-pb-md"
                              standout
                              v-model="tel"
                              label="Телефон"
                              mask="+7 (###) ###-##-##"
                              fill-mask
                            />
                          </div>
                        </div>

                        <div class="q-pa-md">
                          <q-toggle
                            class="q-pb-md"
                            v-model="accept"
                            label="Я согласен на обработку персональных данных"
                          />
                          <div class="row example-row-column-width">
                            <q-btn
                              class="col"
                              label="Зарегистрироваться"
                              type="submit"
                              color="primary"
                            />
                            <q-btn
                              label="Очистить"
                              type="reset"
                              color="primary"
                              flat
                              class="q-ml-sm col"
                            />
                            <q-btn
                              flat
                              label="Закрыть"
                              color="primary"
                              v-close-popup
                            />
                          </div>
                        </div>
                      </q-form>
                    </div>
                  </q-card-section>
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
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  setup() {
    const list = ["blur(10px) saturate(150%)"];

    const backdropFilter = ref(null);

    const $q = useQuasar();

    const name = ref(null);
    const age = ref(null);
    const accept = ref(false);

    return {
      backdropFilter,
      inception: ref(false),
      secondDialog: ref(false),
      name,
      pol: ref("line"),
      age,
      accept,
      password: ref(""),
      isPwd: ref(true),
      email: ref(""),
      tel: ref(""),

      backdropFilterList: list.map((filter) => ({
        label: filter,
        onClick: () => {
          backdropFilter.value = filter;
          dialog.value = true;
        },
      })),

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first",
          });
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted",
          });
        }
      },

      onReset() {
        name.value = null;
        age.value = null;
        accept.value = false;
      },
    };
  },
};
</script>
