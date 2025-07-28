<script setup lang="ts">
import * as Yup from "yup";
import { Form } from "vee-validate";

const email = ref('')
const formSchema = Yup.object().shape({
  email:Yup.string().required().email(),
})
</script>

<template>
  <div>

  {{ email }}
    <Form :validation-schema="formSchema">
      <BaseInput name="email" v-model="email" label="ایمیل" placeholder="ایمیل خود را واردکنید" />
    </Form>
  </div>
</template>

<style scoped></style>
