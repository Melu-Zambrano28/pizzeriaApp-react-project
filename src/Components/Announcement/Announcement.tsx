import React, { FunctionComponent, Fragment } from 'react'
import style from './Announcement.module.scss'

type AnnouncementType = {
  title: string
  announcement: string
}

const getClassByLength = (text: string): string => {
  let length: number = text.length
  return length <= 40 ? 'center' : 'left'
}

const Announcement: FunctionComponent<AnnouncementType> = ({ title, announcement }) => {
  return (
    <div className={style.announceContext}>
      <div className={style.announceItems}>
        <h1 className={style.titleAnnounce}>{title}</h1>
        <p className={style[getClassByLength(announcement)]}>{announcement}</p>
      </div>
    </div>
  )
}

export { Announcement }
