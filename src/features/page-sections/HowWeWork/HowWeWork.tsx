'use client'

import {
  type ComponentProps,
  useCallback,
  useMemo,
  useState,
} from 'react'
import { useInView } from 'react-intersection-observer'

import { DatoStructuredText } from '@/features/dato-structured-text'
import { Flourish } from '@/features/decorations'
import { MarkdownHeading } from '@/features/ui'

import { HWWBackground } from './HWWBackground/HWWBackground'
import styles from './HowWeWork.module.scss'
import { MatchcraftStep } from './MatchcraftStep/MatchcraftStep'

type Props = ComponentProps<'div'> & {
  data: Queries.HowWeWorkFragment
}
export type Keyframe =
  | 'Hero'
  | 'Intro'
  | 'Phase1'
  | 'Phase1.0'
  | 'Phase1.1'
  | 'Phase1.2'
  | 'Phase1.3'
  | 'Phase2'
  | 'Phase2.0'
  | 'Phase2.1'
  | 'Phase2.2'
  | 'Phase2.3'
  | 'Outro'
  | undefined

export const HowWeWork = ({ data, ...props }: Props) => {
  const { inView: heroInView, ref: heroRef } = useInView({
    initialInView: true,
    rootMargin: '-25% 0% 0%',
  })
  const { inView: introInView, ref: introRef } = useInView({
    rootMargin: '-25% 0% 0%',
  })
  const { inView: phase1InView, ref: phase1Ref } = useInView({
    rootMargin: '0% 0% -50%',
  })
  const {
    inView: phase1InterstitialInView,
    ref: phase1InterstitialRef,
  } = useInView({
    rootMargin: '-50% 0% -50%',
  })
  const { inView: phase2InView, ref: phase2Ref } = useInView({
    rootMargin: '-50% 0% -50%',
  })
  const {
    inView: phase2InterstitialInView,
    ref: phase2InterstitialRef,
  } = useInView({
    rootMargin: '-50% 0% -50%',
  })
  const { inView: outroInView, ref: outroRef } = useInView({
    rootMargin: '0% 0% -50%',
  })
  const [stepVisibility, setStepVisibility] = useState<{
    [step: string]: boolean
  }>({})
  const visibleSteps = Object.keys(stepVisibility)
    .map(step => (stepVisibility[step] ? Number(step) : undefined))
    .filter(exists => exists) as number[]
  const activeStep = visibleSteps.length
    ? Math.max(...visibleSteps)
    : undefined
  const keyframe: Keyframe = useMemo(() => {
    if (heroInView) {
      return 'Hero'
    }
    if (introInView) {
      return 'Intro'
    }
    if (outroInView) {
      return 'Outro'
    }
    if (phase1InterstitialInView) {
      return 'Phase1.0'
    }
    if (phase2InterstitialInView) {
      return 'Phase2.0'
    }
    if (activeStep !== undefined) {
      if (activeStep < 4) {
        return `Phase1.${activeStep}` as Keyframe
      }
      if (activeStep > 3) {
        return `Phase2.${activeStep - 3}` as Keyframe
      }
    }
    if (phase1InView) {
      return 'Phase1'
    }
    if (phase2InView) {
      return 'Phase2'
    }
  }, [
    heroInView,
    introInView,
    phase1InterstitialInView,
    phase2InterstitialInView,
    phase1InView,
    phase2InView,
    activeStep,
    outroInView,
  ])
  const handleChangeStepVisibility = useCallback(
    (i: number, inView: boolean) => {
      setStepVisibility(prev => ({
        ...prev,
        [i + 1]: inView,
      }))
    },
    []
  )
  return (
    <div
      className={styles.container}
      data-keyframe={keyframe}
      {...props}
    >
      <HWWBackground
        keyframe={keyframe}
        activeStep={activeStep}
      />
      <section
        className={styles.hero}
        ref={heroRef}
      >
        <h1>How We Work</h1>
        <div className={styles.matchcraft}>
          <Flourish flip />
          <h2>Matchcraft</h2>
          <Flourish />
        </div>
        <div className={styles.heroDescription}>
          <DatoStructuredText data={data.heroDescription} />
        </div>
      </section>
      <section
        className={styles.intro}
        ref={introRef}
      >
        <div>
          <DatoStructuredText data={data.intro} />
        </div>
      </section>
      <section className={styles.steps}>
        <ol>
          <div
            ref={phase1Ref}
            className={styles.phase}
          >
            <div
              className={styles.interstitial}
              ref={phase1InterstitialRef}
            />
            {data.steps.map((step, i) => {
              if (i < 3)
                return (
                  <MatchcraftStep
                    data={step}
                    index={i}
                    onChangeInView={handleChangeStepVisibility}
                    key={i}
                  />
                )
            })}
          </div>
          <div
            ref={phase2Ref}
            className={styles.phase}
          >
            <div
              className={styles.interstitial}
              ref={phase2InterstitialRef}
            />
            {data.steps.map((step, i) => {
              if (i >= 3)
                return (
                  <MatchcraftStep
                    data={step}
                    index={i}
                    onChangeInView={handleChangeStepVisibility}
                    key={i}
                  />
                )
            })}
          </div>
        </ol>
      </section>
      <section
        ref={outroRef}
        className={styles.outro}
      >
        <div>
          <MarkdownHeading>{data.outroHeading}</MarkdownHeading>
          <div>
            <DatoStructuredText data={data.outroBody} />
          </div>
        </div>
      </section>
    </div>
  )
}
