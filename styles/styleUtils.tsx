interface colorProps {
    color: string // forma hexadecimal
    porcentaje: number // porcentaje o de 0 a 100
}

const parseIntToHex = (number: number) : string => {
  let cerosIzq = ''
  if (number < 1048576) { cerosIzq = '0' }
  if (number < 65536) { cerosIzq = '00' }
  if (number < 4096) { cerosIzq = '000' }
  if (number < 256) { cerosIzq = '0000' }
  if (number < 16) { cerosIzq = '00000' }
  return cerosIzq + number.toString(16)
}

export const lighten = ({ color, porcentaje } : colorProps) : string => {
  const numberColor :number = parseInt(color.slice(1), 16)
  const diferencial : number = 16777215 - numberColor
  const numberResult = Math.floor(numberColor + diferencial * porcentaje)
  const stringResult = parseIntToHex(numberResult)
  return `#${stringResult}`
}

export const darken = ({ color, porcentaje } : colorProps) : string => {
  const numberColor :number = parseInt(color.slice(1), 16)
  const numberResult = Math.floor(numberColor - numberColor * porcentaje)
  const stringResult = parseIntToHex(numberResult)
  return `#${stringResult}`
}

export const addOpacity = ({ color, porcentaje } : colorProps) => {
  const opacityHex : string = Math.floor(porcentaje * 255).toString(16)
  return `${color}${opacityHex}`
}
