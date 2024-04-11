<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps<{
  src: string
  alt: string
}>()

const imageRef = ref(undefined)
const isLoading = ref(true)
const containerImage = ref(undefined)

const lazyLoadImage = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const image = entry.target.querySelector('img') as HTMLImageElement

      setTimeout(() => {
        const src = image.getAttribute('data-src') || ''
        image.src = src
        observer.unobserve(entry.target)
        isLoading.value = false
      }, 200)
    }
  })
}

onMounted(() => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }

  const observer = new IntersectionObserver(lazyLoadImage, options)
  containerImage.value && observer.observe(containerImage.value)
})
</script>

<template>
  <div class="lazy-load-image" ref="containerImage">
    <div v-show="isLoading" class="loading-circle"></div>
    <Transition>
      <img v-show="!isLoading" :alt ref="imageRef" v-bind="$attrs" :data-src="src" />
    </Transition>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 500ms ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.lazy-load-image {
  position: relative;
  width: 100%;
  min-height: 150px;
}

.loading-circle {
  position: absolute;
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 2s linear infinite;
  top: calc(50% - 20px);
  left: calc(50% - 20px);
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
