<template>
  <q-page class="row justify-center flex flex-center">
    <div class="q-pa-md col-8" style="max-width: 600px">
      <q-form @submit="onSubmit" class="q-gutter-md">
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
          v-model="pwd"
          filled
          type="password"
          :rules="[
            (val) => (val && val.length > 0) || 'Пожалуйста, введите пароль!',
          ]"
          hint="Пароль"
        />

        <div>
          <q-btn label="Войти" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref } from "vue";

const $q = useQuasar();

const name = ref("");
const pwd = ref("");

const onSubmit = async () => {
  console.log(123123123);

  try {
    const result = await fetch("/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name.value, password: pwd.value }),
    });

    const data = await result.json();

    console.log(data);

    if (data.access_token) {
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("user_id", data.user_id);
      localStorage.setItem("user_name", data.user_name);

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
};
</script>
