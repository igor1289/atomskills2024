<template>
  <div class="bg-image">
    <q-parallax src="/public/icons/fon1.jpg" :height="500">
      <div class="q-pa-lg absolute-top text-white">
        <q-toolbar>
          <div class="">
            <q-btn flat icon="menu" to="/recordBook" />
          </div>

          <div class="fixed-top-right absolute-top-right">
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
                    filled
                    class="full-width"
                    color="primary"
                    label="Зарегистрироваться"
                    @click="secondDialog = true"
                  />
                </q-card-section>

                <q-card-section class="q-pt-none">
                  <q-input
                    filled
                    v-model="login"
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
                  <q-btn flat label="Войти" @click="onLog" />

                  <q-btn flat label="Закрыть" v-close-popup />
                </q-card-actions>
              </q-card>
            </q-dialog>

            <q-dialog v-model="secondDialog" :backdrop-filter="backdropFilter">
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
                        <div class="col-4 q-pa-sm">
                          <div class="q-pb-md">
                            <q-img src="/public/icons/man.png">
                              <!-- <q-file
                                  v-model="file"
                                  class="absolute-full all-pointer-events"
                                >
                                  <q-icon
                                    class="q-pb-md"
                                    name="attach_file"
                                    size="32px"
                                  />
                                </q-file> -->
                            </q-img>
                          </div>

                          <q-input
                            filled
                            v-model="login"
                            label="Логин"
                            lazy-rules
                            :rules="[
                              (val) =>
                                (val && val.length > 0) || 'Придумайте логин',
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
                        </div>

                        <div class="col-8 q-pa-md">
                          <q-input
                            class="q-pb-lg"
                            filled
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
                            class="q-pb-lg"
                            filled
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
                            filled
                            v-model="fatherName"
                            label="Отчество"
                            lazy-rules
                            :rules="[
                              (val) =>
                                (val && val.length > 0) ||
                                'Пожалуйста, введите отчество!',
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
                            class="q-pb-lg"
                            filled
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
                            filled
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

      <div class="absolute column items-center">
        <img
          src="/public/icons/logo-o.png"
          style="width: 150px; height: 150px"
        />
        <div class="text-h3 text-white text-center">НАШЕ НАЗВАНИЕ ПРОДУКТА</div>
        <div class="text-h6 text-grey-3 text-center">WeldingAndSons</div>
      </div>
    </q-parallax>
  </div>

  <div class="">
    <div class="text-center">
      <h1>TEST</h1>
      <h2>Testtesttest</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eum quo
        labore laborum natus est, laboriosam nesciunt praesentium ducimus saepe
        possimus consequuntur sunt esse odit ratione ad. Suscipit, excepturi
        quis!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eum quo
        labore laborum natus est, laboriosam nesciunt praesentium ducimus saepe
        possimus consequuntur sunt esse odit ratione ad. Suscipit, excepturi
        quis!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eum quo
        labore laborum natus est, laboriosam nesciunt praesentium ducimus saepe
        possimus consequuntur sunt esse odit ratione ad. Suscipit, excepturi
        quis!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eum quo
        labore laborum natus est, laboriosam nesciunt praesentium ducimus saepe
        possimus consequuntur sunt esse odit ratione ad. Suscipit, excepturi
        quis!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eum quo
        labore laborum natus est, laboriosam nesciunt praesentium ducimus saepe
        possimus consequuntur sunt esse odit ratione ad. Suscipit, excepturi
        quis!
      </p>
    </div>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
import { QParallax } from "quasar";

export default {
  components: {
    QParallax,
  },
  setup() {
    const list = ["blur(10px) saturate(150%)"];
    const backdropFilter = ref(null);
    const $q = useQuasar();

    const name = ref(null);
    const accept = ref(false);
    const lastName = ref(null);
    const fatherName = ref(null);
    const email = ref(null);
    const tel = ref(null);
    const login = ref(null);
    const pol = ref("line");
    const password = ref(null);

    return {
      backdropFilter,
      inception: ref(false),
      secondDialog: ref(false),
      name,
      pol,
      accept,
      password,
      isPwd: ref(true),
      email,
      tel,
      lastName,
      fatherName,
      login,

      backdropFilterList: list.map((filter) => ({
        label: filter,
        onClick: () => {
          backdropFilter.value = filter;
          dialog.value = true;
        },
      })),

      async onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first",
          });
        } else {
          try {
            const result = await fetch("/user/create", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: login.value,
                password: password.value,
                lastName: lastName.value,
                firstName: name.value,
                fatherName: fatherName.value,
                email: email.value,
                tel: tel.value,
                isAdmin: false,
                isTeacher: false,
              }),
            });

            const data = await result.json();

            if (!data.isError) {
              $q.notify({
                color: "green-4",
                textColor: "white",
                icon: "cloud_done",
                message:
                  "Вы зарегистрированы. Войдите под своим логином и паролем.",
              });
            } else {
              $q.notify({
                color: "red-5",
                textColor: "white",
                icon: "warning",
                message: data.message,
              });
              console.log("Не удалось подключиться к серверу");
            }
          } catch (error) {
            $q.notify({
              color: "red-5",
              textColor: "white",
              icon: "warning",
              message: data.message,
            });
          }
        }
      },

      async onLog() {
        try {
          const result = await fetch("/user/login", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: login.value,
              password: password.value,
            }),
          });

          const data = await result.json();

          if (data.access_token) {
            localStorage.setItem("access_token", data.access_token);
            localStorage.setItem("user_id", data.user_id);
            localStorage.setItem("user_name", data.user_name);
            window.location.href = "/#/recordBook";
          } else {
            $q.notify({
              color: "red-5",
              textColor: "white",
              icon: "warning",
              message: data.message,
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
      },
      onReset() {
        name.value = null;
        tel.value = null;
        email.value = null;
        lastName.value = null;
        fatherName.value = null;
        login.value = null;
        accept.value = false;
        pol.value = null;
        password.value = null;
      },
    };
  },
};
</script>
