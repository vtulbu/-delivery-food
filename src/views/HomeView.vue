<script setup lang="ts">
import { ref, onMounted } from 'vue'
import debounce from 'lodash.debounce'
import { Hero, PartnersContainer, PartnerCard } from '@/components'
import type { PartnerInfo, SearchItem } from '@/types'

const allPartnersInfo = ref<PartnerInfo[] | undefined>(undefined)
const infoPartners = ref<PartnerInfo[] | undefined>(undefined)
const searchKeys = ref<SearchItem[]>([])

onMounted(() => {
  import('@/db/partners.json')
    .then((module) => {
      allPartnersInfo.value = module.partners
      infoPartners.value = module.partners
    })
    .catch((error) => {
      console.error(error)
    })
})

const onInput = debounce(async (value: string) => {
  if (searchKeys.value.length === 0) {
    const file = await import('@/db/search.json')
    searchKeys.value = file.default
  }

  if (!value) {
    infoPartners.value = allPartnersInfo.value
    return
  }

  const selectedPartners = searchKeys.value.filter((item) =>
    item.keys.includes(value.toLowerCase())
  )

  if (selectedPartners.length === 0) {
    infoPartners.value = []
    return
  }

  infoPartners.value = allPartnersInfo.value?.filter((partner) =>
    selectedPartners.some((item) => item.name === partner.name)
  )
}, 300)
</script>

<template>
  <Hero />
  <PartnersContainer @input="onInput">
    <Transition name="cards">
      <div v-if="infoPartners && infoPartners.length">
        <PartnerCard v-for="partner in infoPartners" :key="partner.name" v-bind="partner" />
      </div>
      <div v-else-if="!infoPartners">
        <p>
          Не смогли загрузить данные.
          <br />
          Попробуйте ещё раз
        </p>
      </div>
      <div v-else-if="!infoPartners.length">
        <p>
          По вашему запросу ничего не найдено.
          <br />
          Попробуйте что-то другое
        </p>
      </div>
      <div v-else>
        <p>Что то пошло не по плану</p>
      </div>
    </Transition>
  </PartnersContainer>
</template>

<style scoped>
.cards-enter-active {
  transition:
    transform 250ms ease,
    opacity 100ms ease;
}

.cards-enter-from {
  opacity: 0;
  transform: translateY(150px);
}

.cards-leave-to {
  opacity: 0;
  transform: translateY(-250px);
}

p {
  text-align: center;
  font-size: 1.5rem;
  width: 100%;
  margin-top: 60px;
}

div {
  min-height: 400px;
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
