export default function useBot (chatInstance) {
  return new Bot(chatInstance)
}

class Bot {
  constructor(chatInstanceIn) {
    this.chatInstance = chatInstanceIn
    this.readResolver = () => {}

    this.echoFirst = true

    this.echoStep()
  }
  async speak(str) {
    await Bot.wait(400)
    this.chatInstance.markWriting(true)
    await Bot.wait(1500)
    this.chatInstance.newMessage('bot', str)
    this.chatInstance.markWriting(false)
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
  static wait(millionSecond){
    return new Promise(resolve => {
        setTimeout(resolve, millionSecond);
    });
  }
  // Steps
  echoStep = async () => {
    if (this.echoFirst) {
      await this.speak('Hello I\'m echo')
      this.echoFirst = false
    }
    const result = await this.read()
    await this.speak(result)
    this.run(this.echoStep)
  }
}