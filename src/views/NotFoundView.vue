<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="error-page">
    <h1>404 - Страница не найдена</h1>
    <p>Извините, страница, которую вы ищете, не существует.</p>
    <RouterLink to="/" class="link">Вернуться на главную</RouterLink>
  </div>
</template>

<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  text-align: center;
}

.error-page h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.error-page p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.link {
  text-decoration: none;
  color: var(--primary-color);
  font-weight: bold;
  cursor: pointer;
}

.link {
  text-decoration: underline;
}
</style>
