<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import {
  Rating,
  PriceKitchen,
  ItemFoodCard,
  Sort,
  Button,
  SelectedItemsCartModal
} from '@/components'
import { PARTNER, SORT_OPTIONS, sortArrayObject } from '@/utils'
import { ShoppingCart } from '@icons'
import type { FoodItem } from '@/types'
import { shoppingCartStore, modalState } from '@/store'

const $route = useRoute()
const router = useRouter()
const cart = shoppingCartStore()
const partner = $route.params[PARTNER]
const menuData = ref<FoodItem[] | undefined>(undefined)
const sortOption = ref<string>(SORT_OPTIONS[0].value)
const { openModal } = modalState()

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
  <div class="heading">
    <div class="partner-info">
      <h2>Partner Menu</h2>
      <Rating :stars="10" />
      <PriceKitchen
        v-bind="{
          price: 10,
          kitchen: 'Italian'
        }"
      />
    </div>
    <div class="cart-sort-container">
      <Button @click="openModal">
        <template #icon_left>
          <ShoppingCart />
        </template>
        Корзина ({{ cart.totalItems }})
      </Button>
      <Sort @change="(option) => (sortOption = option)" :options="SORT_OPTIONS" />
    </div>
  </div>
  <div v-if="menuData" class="cards">
    <ItemFoodCard v-for="item in menuData" :key="item.id" v-bind="item" />
  </div>
  <SelectedItemsCartModal />
</template>

<style scoped>
h2 {
  margin: 0;
}

.heading {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 30px;
}

.partner-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cart-sort-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
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
