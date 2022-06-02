import Bot from "@/class/Bot"

export default function useBot (chatInstance) {
  return new Bot(chatInstance)
}
