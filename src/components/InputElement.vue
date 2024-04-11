<script setup lang="ts">
import { ICON_LEFT, ICON_RIGHT, LABEL } from '@/utils'
</script>

<template>
  <div class="input-container">
    <label v-if="$slots[LABEL]" :for="$attrs.id as string">
      <slot :name="LABEL"></slot>
    </label>
    <div>
      <span v-if="$slots[ICON_LEFT]">
        <slot :name="ICON_LEFT"></slot>
      </span>

      <input v-bind="$attrs" />
      <span v-if="$slots[ICON_RIGHT]">
        <slot :name="ICON_RIGHT"></slot>
      </span>
    </div>
  </div>
</template>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
}

div {
  position: relative;
}

input {
  background-color: var(--white);
  border: 1px solid var(--light-silver);
  border-radius: 2px;
  line-height: 24px;
  padding: 8px 36px;
  width: 100%;
}

label {
  margin-bottom: 12px;
  margin-left: 8px;
}

span {
  position: absolute;
  margin: 0 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

span:first-of-type {
  top: 50%;
  transform: translateY(-50%);
}

span:nth-of-type(2) {
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

input:focus {
  outline: 2px var(--primary) solid;
}
</style>
