<template>
  <q-page class="flex flex-center">
    <div style="max-width: 700px">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter">
        <div class="row example-row-column-width">
          <div class="col-4 q-pa-md" style="max-width: 500px">
            <div class="q-pb-md">
              <q-img src="/public/icons/photoProfile.png"> </q-img>
              <q-file v-model="model" label="Ваше фото">
                <q-icon name="attach_file" />
              </q-file>
            </div>

            <q-input
              filled
              v-model="lastName"
              label="Логин"
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Придумайте логин']"
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
              filled
              v-model="name"
              label="Имя"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Пожалуйста, введите имя!',
              ]"
            />
            <q-input
              filled
              v-model="lastName"
              label="Фамилия"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Пожалуйста, введите фамилию!',
              ]"
            />
            <q-input
              filled
              v-model="fatherName"
              label="Отчество"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Пожалуйста, введите отчетсво!',
              ]"
            />

            <div class="">
              <div class="q-gutter-sm">
                <q-radio v-model="pol" val="Man" label="Мужской" />
                <q-radio v-model="pol" val="Woman" label="Женский" />
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
          </div>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const age = ref(null);
    const accept = ref(false);

    return {
      name,
      pol: ref("line"),
      age,
      accept,
      password: ref(""),
      isPwd: ref(true),
      email: ref(""),
      tel: ref(""),

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
