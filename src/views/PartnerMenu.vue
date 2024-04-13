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
import { type PartnerInfo, type FoodItem } from '@/types'
import { shoppingCartStore, modalState } from '@/store'

const $route = useRoute()
const router = useRouter()
const cart = shoppingCartStore()
const partner = $route.params[PARTNER]
const menuData = ref<FoodItem[] | undefined>(undefined)
const sortOption = ref<string>(SORT_OPTIONS[0].value)
const { openModal } = modalState()

const infoPartner = ref<PartnerInfo | undefined>(undefined)

onMounted(() => {
  import(`@/db/${partner}.json`)
    .then((module) => {
      menuData.value = module.default
      sortArrayObject(menuData.value || [], sortOption.value === 'cheap' ? 'asc' : 'desc', 'price')
    })

    .catch(() => {
      router.push({ name: 'NotFoundView' })
    })

  import(`@/db/partners.json`).then((module) => {
    infoPartner.value = module.partners.find(
      (partnerInfo: PartnerInfo) => partnerInfo.products.split('.')[0] === partner
    )
    document.title = `${document.title} - ${infoPartner.value?.name || ''}`
  })
})

watch(sortOption, (option) => {
  sortArrayObject(menuData.value || [], option === 'cheap' ? 'asc' : 'desc', 'price')
})
</script>

<template>
  <section class="heading">
    <div class="partner-info" v-if="infoPartner">
      <h2>
        {{ infoPartner.name }}
      </h2>
      <Rating :stars="infoPartner.stars" />
      <PriceKitchen
        v-bind="{
          price: infoPartner.price,
          kitchen: infoPartner.kitchen
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
  </section>
  <section v-if="menuData" class="cards">
    <ItemFoodCard v-for="item in menuData" :key="item.id" v-bind="item" />
  </section>
  <SelectedItemsCartModal />
</template>

<style scoped>
h2 {
  margin: 0;
  flex: 1 1 100%;
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
  gap: 20px;
  flex-wrap: wrap;
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

@media (min-width: 768px) {
  h2 {
    flex: 1 1 auto;
    font-size: 36px;
  }
}

@media (min-width: 1024px) {
  :deep(.container-card) {
    flex-basis: 32%;
  }
}
</style>
