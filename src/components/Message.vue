<template>
  <div :class="$style.container">
    <div :class="$style.left">
      <img :class="$style.img" :src="require(`@/assets/${from}.jpg`)" />
    </div>
    <div :class="$style.right">
      <div>{{ t(`${from}_name`) }}</div>
      <div :class="$style.message" v-for="(message, index) in messages" :key="index">{{ message }}</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps({
  from: {
    type: String,
    default: 'bot'
  },
  messages: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss" module>
.container {
  width: 100%;
  margin-bottom: 2.5vh;

  .left, .right {
    display: inline-block;
  }

  .left {
    width: 12%;
  }

  .right {
    width: 88%;
    padding-left: 4%;
    overflow-wrap: break-word;
    vertical-align: top;

    .message {
      font-size: 0.9rem;
    }
  }
  .img {
    width: 100%;
    border-radius: 999999999px;
  }
}
</style>