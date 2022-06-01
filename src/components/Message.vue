<template>
  {{ from }}
  {{ message }}
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  from: {
    type: String,
    default: 'bot'
  },
  message: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" module>

</style>