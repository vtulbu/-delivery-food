<script setup lang="ts">
import { RouterView } from 'vue-router'

import { Header } from '@components'
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 40px 0;
}
</style>
