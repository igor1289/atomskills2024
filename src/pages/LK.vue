<template>
  <q-page class="row justify-center flex flex-center">
    <!-- <div class="col" style="max-width: 200px">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg"> </q-img>
      <q-file v-model="model" label="Ваше фото">
        <q-icon name="attach_file" />
      </q-file>
    </div> -->

    <div class="q-pa-md col-8" style="max-width: 600px">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
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
            (val) => (val && val.length > 0) || 'Пожалуйста, введите фамилию!',
          ]"
        />
        <q-input
          filled
          v-model="fatherName"
          label="Отчество"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Пожалуйста, введите отчетсво!',
          ]"
        />

        <q-input
          filled
          type="number"
          v-model="age"
          label="Возраст *"
          lazy-rules
          :rules="[
            (val) =>
              (val !== null && val !== '') || 'Пожалуйста, введите возраст',
            (val) =>
              (val > 0 && val < 100) || 'Пожалуйста, введите настоящий возраст',
          ]"
        />

        <div class="q-pa-md">
          <div class="q-gutter-sm">
            <q-radio v-model="pol" val="Man" label="Мужской" />
            <q-radio v-model="pol" val="Woman" label="Женский" />
          </div>
        </div>

        <q-input v-model="email" filled type="email" hint="Email" />
        <q-input v-model="tel" filled type="tel" hint="Телефон" />

        <q-input
          filled
          v-model="lastName"
          label="Логин"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Логин']"
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

        <q-toggle v-model="accept" label="I accept the license and terms" />

        <div>
          <q-btn label="Зарегистрироваться" type="submit" color="primary" />
          <q-btn
            label="Сбросить"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
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
