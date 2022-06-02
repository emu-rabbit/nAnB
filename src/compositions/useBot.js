export default function useBot (chatInstance) {
  return new Bot(chatInstance)
}

class Bot {
  constructor(chatInstanceIn) {
    this.chatInstance = chatInstanceIn
    this.readResolver = () => {}

    this.echoStep()
  }
  speak(str) {
    this.chatInstance.newMessage('bot', str)
  }
  read() {
    return new Promise(resolve => {
      this.readResolver = resolve
    })
  }
  input(str) {
    this.chatInstance.newMessage('user', str)
    this.readResolver(str)
  }
  run(step) {
    step(this)
  }
  // Steps
  echoStep = async () => {
    this.speak('Hello I\'m echo')
    const result = await this.read()
    console.log(result)
    this.run(this.echoStep)
  }
}