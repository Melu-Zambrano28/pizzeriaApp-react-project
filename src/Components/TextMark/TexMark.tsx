import React, { FunctionComponent } from 'react'
import style from './TextMark.module.scss'

type TextMarkType = {
  text: string
  markDetail: string
}

const TextMark: FunctionComponent<TextMarkType> = ({ text, markDetail }) => {
  return (
    <div className={style.mark}>
      {text}-{markDetail}
    </div>
  )
}

export { TextMark }
