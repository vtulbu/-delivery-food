<script setup lang="ts">
import { ICON_LEFT, ICON_RIGHT, PRIMARY, SECONDARY } from '@/utils'

const props = defineProps<{
  variant?: typeof PRIMARY | typeof SECONDARY
}>()
</script>

<template>
  <button :class="[props.variant === SECONDARY ? 'secondary' : 'primary']">
    <span v-if="$slots[ICON_LEFT]">
      <slot :name="ICON_LEFT"></slot>
    </span>
    <slot>Отправить</slot>
    <span v-if="$slots[ICON_RIGHT]">
      <slot :name="ICON_RIGHT"></slot>
    </span>
  </button>
</template>

<style scoped>
button {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  background: var(--white);
  border: 1px solid var(--light-silver);
  border-radius: 2px;
  line-height: 24px;
  font-weight: 600;
}

.primary {
  background: var(--primary);
  border: 1px solid var(--primary);
  color: var(--white);
}

.secondary {
  background: var(--secondary);
  border: 1px solid var(--secondary);
  color: var(--black);
}

span {
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  transition: all 0.3s;
}

button:hover {
  cursor: pointer;
  transform: scale(1.01);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

button:active {
  transform: scale(0.98);
}
</style>
