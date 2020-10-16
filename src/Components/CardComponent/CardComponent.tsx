import React from 'react'
import style from './CardComponent.module.scss'

type cardType = {
  id?: number
  path: string
  description: string
  tag?: string
}

const CardComponent: React.FunctionComponent<cardType> = ({ path, description }) => {
  return (
    <div className={style.containerImage}>
      <img className={style.imageCard} src={path} alt={description} />
    </div>
  )
}

export { CardComponent }
