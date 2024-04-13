<script setup lang="ts">
import { shoppingCartStore, modalState } from '@/store'
import { Button, LazyLoadingImage, Modal } from '@components'

const cart = shoppingCartStore()
const { closeModal } = modalState()
</script>

<template>
  <Modal>
    <Button @click="closeModal">Закрыть</Button>
    <h2>Выбранные продукты</h2>
    <div v-if="cart.$state.cart.length === 0">
      <p class="empty-cart">Корзина пуста.</p>
    </div>
    <div v-else>
      <TransitionGroup name="list">
        <div v-for="item in cart.$state.cart" :key="item.id" class="item-food">
          <LazyLoadingImage :src="item.image" :alt="item.name" class="cart-img" />
          <div class="product-details">
            <p class="product-name">{{ item.name }}</p>
            <div class="quantity">
              <Button @click="cart.decrementQuantity(item.id)" variant="secondary">-</Button>
              <p class="product-quantity">Количество: {{ item.quantity }}</p>
              <Button @click="cart.incrementQuantity(item.id)" variant="secondary">+</Button>
            </div>
            <p>Total: ₽{{ item.price * item.quantity }}</p>
          </div>
          <Button @click="cart.removeFromCart(item.id)" class="delete-button">Удалить</Button>
        </div>
      </TransitionGroup>
    </div>
    <div class="total-container">
      <p class="total">Total: ₽{{ cart.cartTotal }}</p>
      <Button @click="cart.removeAllFromCart"> Очистить корзину </Button>
    </div>
  </Modal>
</template>

<style scoped>
h2 {
  border-top: 1px solid var(--light-silver);
  padding-top: 20px;
}

:deep(.cart-img) {
  border-radius: 8px;
  height: 100px;
  object-fit: contain;
  min-height: unset;
}

:deep(button) {
  margin-left: auto;
}

.total-container {
  font-weight: 800;
  font-size: 1.2rem;
  border-top: 1px solid var(--light-silver);
  margin-top: 20px;
}

.quantity {
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: flex-start;
}

.quantity :deep(button) {
  margin-left: 0;
}

.empty-cart {
  text-align: center;
}

.item-food {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
  border-bottom: 1px solid var(--light-silver);
}

.item-food:last-of-type {
  border-bottom: none;
}

.product-name {
  font-size: 1.2rem;
  font-weight: 800;
  line-height: 0.5;
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 300ms ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0.2);
}

.list-leave-active {
  opacity: 0;
}
</style>
