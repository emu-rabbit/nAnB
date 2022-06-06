<template>
  <div :class="$style.container">
    <div v-show="!isBottom" :class="$style.new" @click="markRead">
      <span>{{ t('new_message') }}</span>
      <span>{{ t('mark_read') }}</span>
    </div>
    <div ref="messageEl" :class="$style.message">
      <message
        v-for="(message, index) in messages"
        :key="index"
        :from="message.from"
        :messages="message.message"
      />
    </div>
    <div :class="$style.controls">
      <span :class="$style.writing" :style="{visibility: writing ? 'visible' : 'hidden'}">{{ t('bot_is_writing') }}</span>
      <input ref="input" :class="$style.input" @keydown.enter="handleInput()" />
      <button :class="$style.btn" @click="handleInput()">送出</button>
    </div>
  </div>
</template>



<script setup>
import { defineExpose, defineEmits, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Message from '@/components/Message.vue'

const { t } = useI18n()

const endOfSection = ref(false)
const markSection = () => {
  endOfSection.value = true
}

const isBottom = ref(true)
const markRead = () => {
  if (messageEl.value) {
    messageEl.value.scrollTo(0, 0)
    isBottom.value = true
  }
}

const messages = reactive([])
const messageEl = ref(null)
const newMessage = (from, message) => {
  if (messages[0] && messages[0].from === from && !endOfSection.value) {
    messages[0].message.push(message)
  } else {
    messages.unshift({
      from,
      message: [message]
    })
    if (endOfSection.value) endOfSection.value = false
  }
  if (messageEl.value && messageEl.value.scrollTop < 0) {
    isBottom.value = false
  }
}

const writing = ref(false)
const markWriting = (writingIn) => {
  writing.value = writingIn
}

const input = ref(null)
const emit = defineEmits(['user-message'])
const handleInput = () => {
  if (input.value) {
    emit('user-message', input.value.value)
    input.value.value = ''
  }
}

defineExpose({
  newMessage,
  markWriting,
  markSection
})
</script>

<style lang="scss" module>
.container {
  width: 100%;
  position: relative;

  .new {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    font-size: 1rem;
    background-color: rgb(86, 99, 233);
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }

  .message {
    height: calc(100% - 12vh);
    padding: 0 6%;
    display: flex;
    flex-direction: column-reverse;
    overflow-y: scroll;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-button {
      background: transparent;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-track-piece {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: rgb(0, 0, 0);
    }

    &::-webkit-scrollbar-track {
      box-shadow: transparent;
    }
  }

  .controls {
    position: absolute;
    bottom: 2vh;
    height: 10vh;
    width: 96%;
    margin-left: 2%;

    .writing {
      display: block;
      height: 2.8vh;
      padding: 0 4%;
      font-size: 0.9rem;
    }

    .input, .btn {
      height: 6vh;
      background-color: #424447;
      border: #151515 1px solid;
      color: white;
    }

    .input {
      width: 100%;
      padding: 0 4%;
      vertical-align: bottom;

      &:focus {
        outline: none;
      }
    }

    .btn {
      width: 20%;
      margin-left: -20%;
      border-left: #151515 1px solid;
    }
  }
}
</style>