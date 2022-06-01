<template>
  <div :class="$style.container">
    <div :class="$style.message">
      <message from="bot" message="asd" />
    </div>
    <div :class="$style.controls">
      <input :class="$style.input" @keydown.enter="$emit('user-message', $event.target.value)" />
      <button :class="$style.btn">送出</button>
    </div>
  </div>
</template>



<script setup>
import { defineExpose } from 'vue'
import Message from '@/components/Message.vue'

const newMessage = str => {
  console.log(str)
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
    overflow: scroll;
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
      padding: 0 4vw;
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