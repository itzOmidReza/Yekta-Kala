<script setup lang="ts">
import { FetchApi } from '~/utilities/CustomFetchApi';
import { onMounted } from 'vue'

onMounted(async()=>{
  var res = await FetchApi('/banner');
  console.log(res)
})
</script>

<template>
  <div>

  </div>
</template>

<style scoped></style>
