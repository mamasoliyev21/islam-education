import { ButtonProps } from "./button.props";
import styles from './button.module.css'
import cn from 'classnames'
import ArrowIcon from './arrow.svg'

export const Button = ({
  children,
  oppearance,
  arrow = "none",
  ...props
}: ButtonProps): JSX.Element => {
  return (
		<button
			className={cn(styles.button, {
				[styles.primary]: oppearance === 'primary',
				[styles.ghost]: oppearance === 'ghost',
			})}
			{...props}
		>
			{children}

			{arrow !== 'none' && (
				<span
					className={cn(styles.arrow, {
						[styles.down]: arrow === 'down',
					})}
				>
					<ArrowIcon />
				</span>
			)}
		</button>
	);
};
