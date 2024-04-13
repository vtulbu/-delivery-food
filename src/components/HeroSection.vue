<script setup lang="ts"></script>

<template>
  <section>
    <h1>
      Онлайн-сервис
      <br />
      доставки еды на дом
    </h1>
    <p>Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком</p>
  </section>
</template>

<style scoped>
section {
  background-color: var(--secondary);
  padding: 20px;
  box-shadow: 0 7px 12px rgba(158, 158, 163, 0.1);
  border-radius: 10px;
  margin-bottom: 56px;
}

h1 {
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 1.4;
  color: var(--dark-charcoal);
}

p {
  font-size: 18px;
  max-width: 400px;
  color: var(--dark-charcoal);
}

@media (min-width: 768px) {
  section {
    background: var(--secondary) url(../img/promo/pizza.png) no-repeat top -100px right -250px /
      830px;
    padding: 50px;
    background-size: 500px;
    background-position: center right -200px;
  }

  h1 {
    font-size: 36px;
    line-height: 46px;
  }
}

@media (min-width: 1024px) {
  section {
    background-size: 850px;
    background-position: center right -250px;
    padding: 60px;
  }

  p {
    font-size: 24px;
  }
}
</style>
