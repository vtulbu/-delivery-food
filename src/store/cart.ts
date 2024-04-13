import type { CartItem } from '@/types'
import { defineStore } from 'pinia'

export const shoppingCartStore = defineStore('cart', {
  state: () => ({
    cart: JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[],
    total: 0
  }),
  getters: {
    cartTotal: (state) => {
      return state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    },
    totalItems: (state) => {
      return state.cart.reduce((acc, item) => acc + item.quantity, 0)
    }
  },
  actions: {
    addToCart(item: CartItem) {
      const existingItem = this.cart.find((i) => i.id === item.id)
      if (existingItem) {
        existingItem.quantity += item.quantity
      } else {
        this.cart.push(item)
      }
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    removeFromCart(id: string) {
      const index = this.cart.findIndex((i) => i.id === id)
      if (index !== -1) {
        this.cart.splice(index, 1)
      }
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    removeAllFromCart() {
      this.cart = []
      localStorage.setItem('cart', JSON.stringify(this.cart))
    }
  }
})
