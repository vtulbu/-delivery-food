<script setup lang="ts">
import { addSpaces } from '@/utils'
defineProps<{
  price: number
  kitchen: string
}>()
</script>

<template>
  <div>
    <span>От {{ addSpaces(price) }} ₽ </span>
    <span> {{ kitchen }} </span>
  </div>
</template>

<style scoped>
span {
  color: #8c8c8c;
  line-height: 32px;
}

span:last-of-type::before {
  content: '';
  content: '';
  width: 5px;
  height: 5px;
  background-color: #8c8c8c;
  display: inline-block;
  vertical-align: middle;
  border-radius: 50%;
  margin: 0 10px;
}
</style>
