import React from 'react'
import { TagProps } from '..'
import styles from './tag.module.css'
import cn from 'classnames'

export const Tag = ({size = 'm', color = "primary",children}: TagProps): JSX.Element => {
  return (
    <div className={cn(styles.tag, {
      [styles.s]: size =='s',
      [styles.m]: size =='m',
      [styles.red]: color == 'red',
      [styles.primary]: color == 'primary',
      [styles.green]: color == 'green',
    })}>
      {children}
    </div> 
  )
}

