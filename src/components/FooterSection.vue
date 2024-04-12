<script setup>
import { LogoApp, InstagramIcon, FacebookIcon, VkIcon } from '@icons'
</script>

<template>
  <footer>
    <LogoApp />
    <nav>
      <a v-for="link in ['Ресторанам', 'Курьерам', 'Пресс-центр', 'Контакты']" :key="link" href="#">
        {{ link }}
      </a>
    </nav>
    <div>
      <a v-for="icon in [InstagramIcon, FacebookIcon, VkIcon]" :key="icon.name">
        <component :is="icon"></component>
      </a>
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
}

a {
  color: var(--davys-grey);
}

div {
  display: flex;
  gap: 20px;
  align-items: center;
}

@media (min-width: 768px) {
  footer {
    flex-direction: row;
    padding: 60px 20px;
  }

  nav {
    flex-direction: row;
    justify-items: flex-end;
    gap: 16px;
  }

  div {
    flex: 1;
    justify-content: flex-end;
  }
}

@media (min-width: 1024px) {
  footer {
    max-width: var(--max-width);
    margin: 0 auto;
  }
}
</style>
