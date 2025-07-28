<template>
  <button
    :class="[
      'btn',
      { 'btn-sm': size == 'sm' },
      { 'btn-lg': size == 'lg' },
      { 'w-100': wFull },
      outLine ? `btn-outline-${color}` : `btn-${color}`,
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">

defineProps({
  size: {
    default: "normal",
    type: String,
  },
  wFull: {
    default: false,
    type: Boolean,
  },
  outLine: {
    default: false,
    type: Boolean,
  },
  color: {
    default: "primary",
    type: String,
  },
});
</script>
