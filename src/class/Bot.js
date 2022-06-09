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

    if (!localStorage.getItem('locale')) {
      this.run(this.localeStep)
    } else {
      this.run(this.menuStep)
    }
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
  async speakRandom(key, option, length) {
    const r = Math.floor(Math.random() * length)
    await this.speak(t(`${key}_${r}`, option))
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
      this.speakRandom('input_validate_failed', {}, 3)
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
  safariNoticeStep = async () => {
    if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent) && !localStorage.getItem('safari_notice')) {
      await this.speakRange('safari_notice', 2)
      localStorage.setItem('safari_notice', true)
    }
  }
  menuStep = async () => {
    await this.run(this.safariNoticeStep)
    await this.speakRange('menu_intro', 5)
    const result = await this.read(Parsers.int(), Validators.range(1, 4))
    switch (result) {
      case 1:
        this.run(this.nAnBGuesserStep)
        break
      case 2:
        this.run(this.nAnBQuestionerStep)
        break
      case 3:
        this.run(this.tutorialStep)
        break
      case 4:
        this.run(this.localeStep)
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
      ab = nAnB.onGuess(result)
      if (ab.a === n) break
      await this.speakRandom('nanb_guesser_ab', ab, 3)
    } while(ab.a !== n)

    let clipboardResult
    try {
      await navigator.clipboard.writeText(nAnB.generateShare())
      clipboardResult = t('saved_to_clipboard')
    } catch (e) {
      console.log(e)
      clipboardResult = t('unsaved_to_clipboard')
    }

    await this.speak(t('you_win'))
    await this.speak(clipboardResult)
    
    this.run(this.menuStep)
  }
  nAnBQuestionerStep = async () => {
    const n = 5

    const nAnB = new nAnBGuesser(n)

    try {
      let ab
      do {
        const g = nAnB.guess()
        await this.speakRandom('nanb_questioner_guess', { guess: g }, 3)
        ab = await this.read(Parsers.ab(), Validators.nAnBab(n))
        nAnB.applyAB(ab)
      } while(ab.a !== n)

      let clipboardResult
      try {
        await navigator.clipboard.writeText(nAnB.generateShare())
        clipboardResult = t('saved_to_clipboard')
      } catch (e) {
        console.log(e)
        clipboardResult = t('unsaved_to_clipboard')
      }

      await this.speak(t('i_win'))
      await this.speak(clipboardResult)

    } catch (e) {
      if (e.message === 'pool_empty') {
        await this.speak(t('nanb_questioner_pool_empty'))
      } else {
        throw e
      }
    }

    this.run(this.menuStep)
  }
  tutorialStep = async () => {
    await this.speakRange('tutorial', 7)
    this.run(this.menuStep)
  }
  localeStep = async () => {
    await this.speak('1. 繁體中文')
    await this.speak('2. English')
    await this.speak('3. 日本語')
    await this.speak(t('enter_the_number'))
    const result = await this.read(Parsers.int(), Validators.range(1, 3))
    switch (result) {
      case 1:
        i18n.global.locale.value = 'zh_TW'
        break
      case 2:
        i18n.global.locale.value = 'en_US'
        break
      case 3:
        i18n.global.locale.value = 'ja_JP'
        break
    }
    this.run(this.menuStep)
  }
}