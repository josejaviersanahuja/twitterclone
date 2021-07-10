interface colorProps {
    color: string // forma hexadecimal
    porcentaje: number // porcentaje o de 0 a 100
}

const parseIntToHex = (number: number) : string => {
  let cerosIzq = ''
  if (number < 16) { cerosIzq = '0' }
  return cerosIzq + number.toString(16)
}

export const lighten = ({ color, porcentaje } : colorProps) : string => {
  const redColor :number = parseInt(color.slice(1, 3), 16)
  const greenColor : number = parseInt(color.slice(3, 5), 16)
  const blueColor : number = parseInt(color.slice(5, 7), 16)
  const diffRedColor : number = 255 - redColor
  const redResult = Math.floor(redColor + diffRedColor * porcentaje)
  const diffGreenColor : number = 255 - greenColor
  const greenResult = Math.floor(greenColor + diffGreenColor * porcentaje)
  const diffBlueColor : number = 255 - blueColor
  const blueResult = Math.floor(blueColor + diffBlueColor * porcentaje)
  const stringRedResult = parseIntToHex(redResult)
  const stringGreenResult = parseIntToHex(greenResult)
  const stringBlueResult = parseIntToHex(blueResult)
  return `#${stringRedResult}${stringGreenResult}${stringBlueResult}`
}

export const darken = ({ color, porcentaje } : colorProps) : string => {
  const redColor :number = parseInt(color.slice(1, 3), 16)
  const greenColor : number = parseInt(color.slice(3, 5), 16)
  const blueColor : number = parseInt(color.slice(5, 7), 16)
  const redResult = Math.floor(redColor - redColor * porcentaje)
  const greenResult = Math.floor(greenColor - greenColor * porcentaje)
  const blueResult = Math.floor(blueColor - blueColor * porcentaje)
  const stringRedResult = parseIntToHex(redResult)
  const stringGreenResult = parseIntToHex(greenResult)
  const stringBlueResult = parseIntToHex(blueResult)
  return `#${stringRedResult}${stringGreenResult}${stringBlueResult}`
}

export const addOpacity = ({ color, porcentaje } : colorProps) => {
  const opacityHex : string = Math.floor(porcentaje * 255).toString(16)
  return `${color}${opacityHex}`
}
