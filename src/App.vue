<script setup lang="ts">
import { RouterView } from 'vue-router'

import { Header, Footer } from '@components'
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<style>
main {
  margin: 0 auto;
  padding: 40px 20px;
  background: linear-gradient(180deg, rgba(245, 245, 245, 0) 1.04%, #f5f5f5 100%);
}

main section {
  max-width: var(--max-width);
  margin: auto;
}
</style>
