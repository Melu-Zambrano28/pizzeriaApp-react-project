import React, { FunctionComponent } from 'react'
import style from './TextMark.module.scss'

type TextMarkType = {
  text: string
  markClass: string | undefined
}

const TextMark: FunctionComponent<TextMarkType> = ({ text, markClass }) => {
  let classMark = markClass === undefined || markClass === '' ? 'defaultMark' : markClass
  return (
    <div className={style[classMark]}>
      <p className={style.text}>{text}</p>
    </div>
  )
}

export { TextMark }
