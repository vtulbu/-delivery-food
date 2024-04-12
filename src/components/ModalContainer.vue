<script setup lang="ts">
import { modalState } from '@/store'

const modal = modalState()
</script>

<template>
  <div class="modal-mask" v-if="modal.$state.isOpen">
    <div class="modal-container">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-container {
  width: 300px;
  margin: 150px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  overflow-y: auto;
  max-height: 60vh;
  max-width: 50vw;
  min-width: 600px;
}
</style>
