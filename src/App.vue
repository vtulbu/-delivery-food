<script setup lang="ts">
import { RouterView } from 'vue-router'

import { Header, Footer } from '@components'
</script>

<template>
  <Header />
  <main>
    <RouterView v-slot="{ Component, route }">
      <Transition name="fade" mode="out-in">
        <div :key="route.name || ''">
          <component :is="Component"></component>
        </div>
      </Transition>
    </RouterView>
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

.fade-enter-active {
  transition: all 500ms ease-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
