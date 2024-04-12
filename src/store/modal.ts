import { defineStore } from 'pinia'

export const modalState = defineStore('modal', {
  state: () => ({
    isOpen: false
  }),
  getters: {
    isModalOpen: (state) => state.isOpen
  },
  actions: {
    openModal() {
      this.isOpen = true
    },
    closeModal() {
      this.isOpen = false
    }
  }
})
