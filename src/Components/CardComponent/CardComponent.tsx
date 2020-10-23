import React from 'react'
import { TextMark } from '../TextMark/TexMark'
import style from './CardComponent.module.scss'

type cardType = {
  id?: number
  path: string
  description: string
  textMark: string
  backgroundMark?: string | undefined
}

const CardComponent: React.FunctionComponent<cardType> = ({ path, description, textMark, backgroundMark }) => {
  return (
    <div className={style.containerImage}>
      <TextMark text={textMark} markClass={backgroundMark} />
      <img className={style.imageCard} src={path} alt={description} />
    </div>
  )
}

export { CardComponent }
