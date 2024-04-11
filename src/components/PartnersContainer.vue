<script setup lang="ts">
import { Input } from '@components'
import { SearchIcon } from '@icons'
</script>

<template>
  <section>
    <div>
      <h2>Рестораны</h2>
      <Input placeholder="Поиск блюд и ресторанов" id="search-restaurants">
        <template #icon_left>
          <SearchIcon />
        </template>
      </Input>
    </div>
    <slot></slot>
  </section>
</template>

<style scoped>
div {
  margin-bottom: 40px;
}

h2 {
  font-size: 20px;
  line-height: 42px;
  margin: 0;
}

@media (min-width: 768px) {
  div {
    display: flex;
    justify-content: space-between;
  }

  div > div {
    min-width: 300px;
  }

  h2 {
    font-size: 36px;
  }
}
</style>
