<script setup lang="ts">
import { HouseIcon, LogoApp, UserIcon } from '@icons'
import { Button, Input } from '@components'
</script>

<template>
  <header>
    <RouterLink to="/">
      <LogoApp />
    </RouterLink>
    <Input placeholder="Адрес доставки" id="search-location">
      <template #icon_left>
        <HouseIcon />
      </template>
    </Input>
    <Button>
      <template #icon_left>
        <UserIcon />
      </template>
      Войти
    </Button>
  </header>
</template>

<style>
header {
  margin-bottom: 40px;
  display: flex;
  flex-flow: wrap;
  gap: 15px;
  max-width: var(--max-width);
  margin: 0 auto;
}

button {
  order: 2;
  margin-left: auto;
}

header div {
  order: 3;
  flex: 1 1 100%;
}

@media (min-width: 768px) {
  header {
    gap: 30px;
  }

  button {
    order: 3;
  }

  header > div {
    order: 2;
    flex: 1 1 auto;
  }
}
</style>
