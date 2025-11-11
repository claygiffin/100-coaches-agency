import { type ComponentProps } from 'react'

import { BaseLayer } from './BaseLayer/BaseLayer'
import styles from './HWWBackground.module.scss'
import { Icons } from './Icons/Icons'
import { PhaseLayer } from './PhaseLayer/PhaseLayer'

import type { Keyframe } from '../HowWeWork'

type Props = ComponentProps<'div'> & {
  keyframe: Keyframe
  activeStep?: number
}

export const HWWBackground = ({
  keyframe,
  activeStep,
  ...props
}: Props) => {
  const getPhaseNumber = () => {
    const match = keyframe?.match(/^Phase(\d)/)
    return match ? Number(match[1]) : undefined
  }
  const getBaseLayerColor = () => {
    if (keyframe?.startsWith('Phase')) {
      return 'Gold'
    }
    switch (keyframe) {
      default:
      case 'Hero':
      case 'Intro':
        return 'White'
      case 'Outro':
        return 'Dark'
    }
  }
  const getBackgroundColor = () => {
    if (keyframe?.startsWith('Phase1')) {
      return 'White'
    }
    if (keyframe?.startsWith('Phase2')) {
      return 'Dark'
    }
    switch (keyframe) {
      default:
      case 'Hero':
        return 'Gold'
      case 'Intro':
        return 'White'
      case 'Outro':
        return 'Dark'
    }
  }
  return (
    <div
      className={styles.container}
      data-background-color={getBackgroundColor()}
      data-active-step={activeStep}
      {...props}
    >
      <div
        data-background-color="White"
        data-is-active={getBackgroundColor() === 'White'}
        className={styles.background}
      />
      <div
        data-background-color="Dark"
        data-is-active={getBackgroundColor() === 'Dark'}
        className={styles.background}
      />
      <div
        data-background-color="Gold"
        data-is-active={getBackgroundColor() === 'Gold'}
        className={styles.background}
      />
      <div className={styles.inner}>
        <BaseLayer
          color={getBaseLayerColor()}
          showSections={getPhaseNumber() ? true : false}
        />
        <PhaseLayer phase={getPhaseNumber()} />
        <Icons activeStep={activeStep} />
      </div>
    </div>
  )
}
