import React from 'react'
import { TextMark } from '../TextMark/TexMark'
import style from './CardComponent.module.scss'

type cardType = {
  id?: number
  path: string
  description: string
  textmarkCopy: string
  backgroundMark?: string | undefined
}

const CardComponent: React.FunctionComponent<cardType> = ({ path, description, textmarkCopy, backgroundMark }) => {
  return (
    <div className={style.containerImage}>
      {/* <TextMark text={textmarkCopy} markClass={backgroundMark} /> */}
      <div className={style.textmark}>{textmarkCopy}</div>
      <div className={style.contentImage}>
        <img className={style.imageCard} src={path} alt={description} />
      </div>
    </div>
  )
}

export { CardComponent }
