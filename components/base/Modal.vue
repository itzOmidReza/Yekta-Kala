<template>
  <transition name="fade">
    <div
      v-if="modelValue"
      :class="['remodal-wrapper', { 'remodal-is-opened': modelValue }]"
      :style="{ display: modelValue ? 'block' : undefined }"
      @click.self="emit('update:modelValue', false)"
    >
      <div
        :class="[
          'remodal remodal-lg remodal-is-initialized',
          { 'remodal-is-opened': modelValue },
        ]"
        tabindex="-1"
      >
        <div class="remodal-header">
          <button
            @click="emit('update:modelValue', false)"
            class="remodal-close"
          ></button>
        </div>
        <div class="remodal-content">
          <slot />
        </div>
        <div class="remodal-footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["update:modelValue"]);
</script>

<style scoped>
/* background */
.remodal-wrapper {
  background: #00000036;
}
/* animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
