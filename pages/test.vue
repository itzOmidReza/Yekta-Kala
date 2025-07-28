<template>
  <div>
    <BaseButton size="sm" out-line w-full @click="isOpenModal = true">
      button
    </BaseButton>
  </div>

  <BaseModal v-model="isOpenModal">
    <h1>hello Omid</h1>
  </BaseModal>

  <BaseShowMore >
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio eaque saepe cumque enim incidunt dolor modi delectus doloribus, ab assumenda perspiciatis amet laboriosam reprehenderit et eos distinctio quae ea! Perspiciatis.
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio eaque saepe cumque enim incidunt dolor modi delectus doloribus, ab assumenda perspiciatis amet laboriosam reprehenderit et eos distinctio quae ea! Perspiciatis.
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio eaque saepe cumque enim incidunt dolor modi delectus doloribus, ab assumenda perspiciatis amet laboriosam reprehenderit et eos distinctio quae ea! Perspiciatis.
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio eaque saepe cumque enim incidunt dolor modi delectus doloribus, ab assumenda perspiciatis amet laboriosam reprehenderit et eos distinctio quae ea! Perspiciatis.
  </BaseShowMore>
</template>

<script setup lang="ts">
const isOpenModal = ref(false);
</script>

<style scoped>

</style>