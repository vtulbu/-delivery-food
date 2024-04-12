<script setup lang="ts">
import { Button, LazyLoadingImage } from '@components'
import { ShoppingCartWhite } from '@icons'
import type { FoodItem } from '@/types'

defineProps<FoodItem>()
</script>

<template>
  <div class="container-card">
    <LazyLoadingImage :src="image" :alt="name" />
    <div class="card-text">
      <h3 class="card-title card-title-reg">
        {{ name }}
      </h3>
      <div class="ingredients">
        {{ description }}
      </div>
    </div>
    <div class="card-button">
      <Button @click="console.log('clicked')">
        <template #icon_right>
          <ShoppingCartWhite />
        </template>
        В корзину
      </Button>
      <strong class="card-price-bold">545 ₽</strong>
    </div>
  </div>
</template>

<style scoped>
h3 {
  margin: 0;
  margin-bottom: 10px;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 32px;
  font-weight: 400;
}

.container-card {
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
}

:deep(img) {
  border-radius: 8px 8px 0 0;
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.card-text {
  padding: 20px 25px 0 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.ingredients {
  color: var(--philippine-gray);
  font-size: 18px;
  line-height: 21px;
}

.card-button {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 25px;
  margin-top: auto;
}
</style>
