<template>
  <div :class="$style.container">
    <div :class="$style.message"></div>
    <div :class="$style.controls">
      <input :class="$style.input" @keydown.enter="$emit('user-message', $event.target.value)" />
      <button :class="$style.btn">送出</button>
    </div>
  </div>
</template>

<script>
export default {
  setup(props, { expose }) {
    const newMessage = str => {
      console.log(str)
    }
    expose({
      newMessage
    })
  }
}
</script>

<style lang="scss" module>
.container {
  width: 100%;
  position: relative;

  .message {
    height: 100%;
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