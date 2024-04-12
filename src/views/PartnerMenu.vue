<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { Rating, PriceKitchen, ItemFoodCard, Sort } from '@/components'
import { PARTNER, SORT_OPTIONS, sortArrayObject } from '@/utils'
import type { FoodItem } from '@/types'

const $route = useRoute()
const router = useRouter()
const partner = $route.params[PARTNER]
const menuData = ref<FoodItem[] | undefined>(undefined)
const sortOption = ref<string>(SORT_OPTIONS[0].value)

onMounted(() => {
  import(`@/db/${partner}.json`)
    .then((module) => {
      menuData.value = module.default
      sortArrayObject(menuData.value || [], sortOption.value === 'cheap' ? 'asc' : 'desc', 'price')
    })
    .catch(() => {
      router.push({ name: 'NotFoundView' })
    })
})

watch(sortOption, (option) => {
  sortArrayObject(menuData.value || [], option === 'cheap' ? 'asc' : 'desc', 'price')
})
</script>

<template>
  <div class="partner-info">
    <h2>Partner Menu</h2>
    <Rating :stars="10" />
    <PriceKitchen
      v-bind="{
        price: 10,
        kitchen: 'Italian'
      }"
    />
    <Sort @change="(option) => (sortOption = option)" :options="SORT_OPTIONS" />
  </div>
  <div v-if="menuData" class="cards">
    <ItemFoodCard v-for="item in menuData" :key="item.id" v-bind="item" />
  </div>
</template>

<style scoped>
.partner-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media (min-width: 624px) {
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  :deep(.container-card) {
    flex-basis: 49%;
  }
}

@media (min-width: 1024px) {
  :deep(.container-card) {
    flex-basis: 32%;
  }
}
</style>
