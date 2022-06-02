<template>
  <div :class="$style.container">
    <div :class="$style.message">
      <message
        v-for="(message, index) in messages"
        :key="index"
        :from="message.from"
        :message="message.message"
      />
    </div>
    <div :class="$style.controls">
      <input :class="$style.input" @keydown.enter="$emit('user-message', $event.target.value)" />
      <button :class="$style.btn">送出</button>
    </div>
  </div>
</template>



<script setup>
import { defineExpose, reactive } from 'vue'
import Message from '@/components/Message.vue'

const messages = reactive([])

const newMessage = (from, message) => {
  messages.unshift({
    from,
    message
  })
}

defineExpose({
  newMessage
})
</script>

<style lang="scss" module>
.container {
  width: 100%;
  position: relative;

  .message {
    height: calc(100% - 10vh);
    padding: 0 6%;
    display: flex;
    flex-direction: column-reverse;
    overflow-y: scroll;

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
    height: 6vh;
    width: 96%;
    margin-left: 2%;

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