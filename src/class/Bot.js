import i18n from '@/i18n.js'
import nAnBGuesser from './nAnBGuesser'
import nAnBQuestioner from './nAnBQuestioner'
import Parsers from './Parsers'
import Validators from './Validators'

const t = i18n.global.t

export default class Bot {
  constructor(chatInstanceIn) {
    this.chatInstance = chatInstanceIn

    this.inputParser = str => str
    this.inputValidator = () => true
    this.readResolver = () => {}

    this.wrongCount = 0

    this.echoFirst = true

    this.run(this.menuStep)
  }
  async speak(str) {
    await Bot.wait(400)
    this.chatInstance.markWriting(true)
    await Bot.wait(1500)
    this.chatInstance.newMessage('bot', str)
    this.chatInstance.markWriting(false)
  }
  async speakRange(key, end) {
    for (let i = 0; i <= end; i ++) {
      await this.speak(t(`${key}_${i}`))
    }
  }
  read(parser, validator) {
    return new Promise(resolve => {
      this.inputParser = parser ?? (str => str)
      this.inputValidator = validator ?? (() => true)
      this.readResolver = resolve
    })
  }
  input(str) {
    this.chatInstance.newMessage('user', str)

    if (this.wrongCount >= 5) return

    if (this.inputValidator(str)) {
      const parsed = this.inputParser(str)
      this.readResolver(parsed)
      this.readResolver = () => {}
    } else {
      this.speak(t('input_validate_failed'))
      this.wrongCount ++

      if (this.wrongCount >= 5) {
        this.speak(t('leave'))
        this.readResolver = () => {}
      }
    }
  }
  static wait(millionSecond){
    return new Promise(resolve => {
        setTimeout(resolve, millionSecond);
    });
  }
  async run(step) {
    await step()
    this.chatInstance.markSection()
  }
  // Steps
  echoStep = async () => {
    if (this.echoFirst) {
      await this.speak(t('echo_hello'))
      this.echoFirst = false
    }
    const result = await this.read()
    await this.speak(result)
    this.run(this.echoStep)
  }
  menuStep = async () => {
    await this.speakRange('menu_intro', 3)
    const result = await this.read(Parsers.int(), Validators.range(1, 2))
    switch (result) {
      case 1:
        this.run(this.nAnBGuesserStep)
        break
      case 2:
        this.run(this.nAnBQuestionerStep)
        break
    }
  }
  nAnBGuesserStep = async () => {
    const n = 5
    await this.speak(t('nanb_guesser_intro', { count: n }))

    const nAnB = new nAnBQuestioner(n)
    console.log({ ans: nAnB.ans })

    let ab
    do {
      const result = await this.read(Parsers.cut(n), Validators.nAnBAnswer(n, false))
      ab = nAnB.judge(result)
      await this.speak(`${ab.a}A${ab.b}B`)
    } while(ab.a !== n)

    await this.speak(t('you_win'))
    await navigator.clipboard.writeText(nAnB.generateShare())
    await this.speak(t('saved_to_clipboard'))
    this.run(this.menuStep)
  }
  nAnBQuestionerStep = async () => {
    const n = 5

    const nAnB = new nAnBGuesser(n)

    let ab
    do {
      const g = nAnB.guess()
      await this.speak(t('nanb_questioner_guess', { guess: g }))
      ab = await this.read(Parsers.ab(), Validators.nAnBab(n))
      nAnB.applyAB(ab)
    } while(ab.a !== n)

    await this.speak(t('i_win'))
    this.run(this.menuStep)
  }
}