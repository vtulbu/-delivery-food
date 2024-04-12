<script setup lang="ts">
import { Rating, LazyLoadingImage, CardHeading, PriceKitchen } from '@/components'
import type { PartnerInfo } from '@/types'

defineProps<PartnerInfo>()
</script>

<template>
  <RouterLink :to="products.split('.')[0]">
    <LazyLoadingImage :src="image" :alt="name" />
    <div class="container-card">
      <CardHeading
        v-bind="{
          name,
          time_of_delivery
        }"
      />
      <Rating :stars />
      <PriceKitchen
        v-bind="{
          price,
          kitchen
        }"
      />
    </div>
  </RouterLink>
</template>

<style scoped>
a {
  display: flex;
  flex-direction: column;
  background: var(--white);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin-bottom: 30px;
  text-decoration: none;
  color: black;
  transition: 0.3s ease;
}

a:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: scale(1.02);
}

a::v-deep img {
  border-radius: 8px 8px 0 0;
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.container-card {
  padding: 20px 23px 35px;
}
</style>
