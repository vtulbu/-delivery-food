<script setup lang="ts">
defineProps<{
  name: string
  time_of_delivery: number
}>()
</script>

<template>
  <div>
    <h3>{{ name }}</h3>
    <span>{{ time_of_delivery }} мин</span>
  </div>
</template>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

h3 {
  margin: 0;
  font-size: 18px;
  line-height: 32px;
}

span {
  font-size: 12px;
  line-height: 20px;
  color: var(--white);
  background: #262626;
  border-radius: 2px;
  padding: 2px 8px;
}

@media (min-width: 768px) {
  h3 {
    font-size: 22px;
  }
}
</style>
