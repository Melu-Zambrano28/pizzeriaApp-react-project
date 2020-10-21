import React, { FunctionComponent } from 'react'
import style from './TextMark.module.scss'

type TextMarkType = {
  text: string
  backgroundMark: string | undefined
}

const getClassForMark = (markDetail: string | undefined): string => {
  let classtoReturn: string = ''
  switch (markDetail) {
    case 'classicInfo':
      classtoReturn = 'yellowMark'
      break
    case 'newInfo':
      classtoReturn = 'greenMark'
      break
    case 'normalInfo':
      classtoReturn = 'whiteMark'
      break
    default:
      classtoReturn = 'yellowMark'
  }

  return classtoReturn
}

const TextMark: FunctionComponent<TextMarkType> = ({ text, backgroundMark }) => {
  return (
    <div className={style[getClassForMark(backgroundMark)]}>
      <p>{text}</p>
    </div>
  )
}

export { TextMark }
