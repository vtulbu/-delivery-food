<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Hero, PartnersContainer, PartnerCard } from '@/components'
import type { PartnerInfo } from '@/types'

const infoPartners = ref<PartnerInfo[] | undefined>(undefined)

onMounted(() => {
  import('@/db/partners.json').then((module) => {
    infoPartners.value = module.partners
  })
})
</script>

<template>
  <Hero />
  <PartnersContainer>
    <Transition>
      <div v-if="infoPartners">
        <PartnerCard v-for="partner in infoPartners" :key="partner.name" v-bind="partner" />
      </div>
    </Transition>
  </PartnersContainer>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: transform 0.8s;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(100%);
}

@media (min-width: 624px) {
  div {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
  }

  div a {
    flex-basis: 49%;
  }
}

@media (min-width: 1024px) {
  div a {
    flex-basis: 32%;
  }
}
</style>
