import { ScrollToggle } from '../ScrollToggle/ScrollToggle'
import styles from './BurgerIcon.module.scss'

type PropTypes = {
  open: boolean
  toggleOpen: () => void
}

export const BurgerIcon = ({ open, toggleOpen }: PropTypes) => {
  return (
    <button
      aria-label="Menu"
      className={styles.burgerIcon}
      onClick={toggleOpen}
      data-open={open}
    >
      <span />
      <span />
      <span />
      <span />
      {open && <ScrollToggle />}
    </button>
  )
}
