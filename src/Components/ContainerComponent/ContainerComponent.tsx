import React, { Fragment } from 'react'
import style from './ContainerComponent.module.scss'

const ContainerComponent: React.FunctionComponent = ({ children }) => {
  return (
    <Fragment>
      <div className={style.container}>
        <div className={style.containerInfo}>
          <div className={style.itemInfo}>{children}</div>
        </div>
      </div>
    </Fragment>
  )
}

export { ContainerComponent }
