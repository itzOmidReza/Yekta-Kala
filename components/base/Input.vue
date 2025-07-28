<script setup lang="ts">
import { useField } from "vee-validate";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "",
  },
  ignoreErrorMessage: {
    type: Boolean,
    default: false,
  },
});

const {
  value: inputValue,
  errorMessage,
  handleChange,
  setValue,
} = useField(props.name, undefined, {
  initialValue: props.modelValue,
});

const emit = defineEmits(["update:modelValue"]);

watch(
  () => props.modelValue,
  (val) => {
    setValue(val);
  }
);

const handelInputChange = (e: any) => {
  emit("update:modelValue", e.target.value);
  handleChange(e);
};
</script>
<template>
  <div class="form-element-row">
    <label class="label fs-7">{{ label }}</label>
    <input
      :name="name"
      :value="modelValue"
      :type="type"
      :class="['form-control',{'error-input':errorMessage}]"
      :placeholder="placeholder"
      @input="handelInputChange"
    />
    <span class="text-danger" v-if="errorMessage && ignoreErrorMessage == false">{{
      errorMessage
    }}</span>
  </div>
</template>


