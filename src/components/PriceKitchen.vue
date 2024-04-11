<script setup lang="ts">
defineProps<{
  price: number
  kitchen: string
}>()
</script>

<template>
  <span> {{ price }} ₽ </span>
  <span> {{ kitchen }} </span>
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
