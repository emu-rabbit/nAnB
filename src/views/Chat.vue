<template>
  <chat-box v-show="bot" ref="chat" @user-message="bot.input($event)" />
</template>

<script setup>
import ChatBox from '@/components/ChatBox.vue'
import useBot from '@/compositions/useBot.js'
import { ref, onMounted } from 'vue'

const chat = ref(null)
let bot = ref(null)

onMounted(() => {
  bot.value = useBot(chat.value)
})
</script>
