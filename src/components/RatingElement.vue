<script setup lang="ts">
import { StarIcon } from '@icons'
defineProps<{
  stars: number
}>()
</script>

<template>
  <div>
    <StarIcon />
    <span>
      {{ stars }}
    </span>
  </div>
</template>

<style scoped>
div {
  display: flex;
  align-items: center;
  gap: 5px;
}

span {
  font-size: 14px;
  color: #ffc107;
  font-weight: bold;
  font-size: 18px;
  line-height: 32px;
}
</style>
