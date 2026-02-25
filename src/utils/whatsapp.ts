export const WHATSAPP_NUMBER = '5521999999999'

export const WHATSAPP_DEFAULT_MESSAGE =
  'Olá! Gostaria de agendar um horário no Andressa Simplicio Beauty Studio. ✨'

export function getWhatsAppUrl(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
