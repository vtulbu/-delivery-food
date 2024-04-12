<script setup lang="ts">
import { ref, onMounted } from 'vue'
import debounce from 'lodash.debounce'
import { Hero, PartnersContainer, PartnerCard } from '@/components'
import type { PartnerInfo, SearchItem } from '@/types'

const infoPartners = ref<PartnerInfo[] | undefined>(undefined)
const searchKeys = ref<SearchItem[]>([])

onMounted(() => {
  import('@/db/partners.json').then((module) => {
    infoPartners.value = module.partners
  })
})

const onInput = debounce(async (value: string) => {
  if (searchKeys.value.length === 0) {
    const file = await import('@/db/search.json')
    searchKeys.value = file.default
  }

  const partners = searchKeys.value.filter((item) => item.keys.includes(value.toLowerCase()))

  if (partners.length === 0) {
    infoPartners.value = undefined
    return
  }

  infoPartners.value = infoPartners.value?.filter((partner) =>
    partners.some((item) => item.name === partner.name)
  )
}, 300)
</script>

<template>
  <Hero />
  <PartnersContainer @input="onInput">
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
