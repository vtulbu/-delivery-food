<script setup lang="ts">
defineProps<{ options: readonly { value: string; label: string }[] }>()
defineEmits<{
  (e: 'change', option: string): void
}>()
</script>

<template>
  <select @change="$emit('change', ($event.target as HTMLSelectElement)?.value || '')">
    <option v-for="{ value, label } in options" :value :key="value">
      {{ label }}
    </option>
  </select>
</template>

<style scoped>
select {
  padding: 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: var(--light-silver);
  appearance: none;
  transition: all 0.2s;
}

select:hover {
  cursor: pointer;
  transform: scale(1.01);
}

select:focus {
  outline: 2px solid var(--primary);
}
</style>
