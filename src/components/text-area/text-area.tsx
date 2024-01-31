import styles from './text-area.module.css'
import cn from 'classnames'
import { TextAreaProps } from './text-area.props'

export const TextArea = ({className,  ...props}: TextAreaProps): JSX.Element => {
  return (
    <textarea className={cn(styles.textarea, className)} {...props}></textarea>
  )
}
