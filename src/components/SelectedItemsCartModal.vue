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
        <div v-for="item in cart.$state.cart" :key="item.id">
          <LazyLoadingImage :src="item.image" :alt="item.name" class="cart-img" />
          <div class="product-details">
            <p class="product-name">{{ item.name }}</p>
            <p class="product-quantity">Количество: {{ item.quantity }}</p>
            <p>Total: ₽{{ item.price * item.quantity }}</p>
          </div>
          <Button @click="cart.removeFromCart(item.id)" class="delete-button">Delete</Button>
        </div>
      </TransitionGroup>
    </div>
    <div>
      <p class="total">Total: ₽{{ cart.cartTotal }}</p>
    </div>
  </Modal>
</template>

<style scoped>
h2 {
  border-top: 1px solid var(--light-silver);
  padding-top: 20px;
}

:deep(.cart-img) {
  width: 100%;
  height: 100px;
  object-fit: contain;
  min-height: unset;
}

:deep(button) {
  margin-left: auto;
}

.total {
  font-weight: 800;
  font-size: 1.2rem;
  border-top: 1px solid var(--light-silver);
  padding-top: 20px;
}

.empty-cart {
  text-align: center;
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
