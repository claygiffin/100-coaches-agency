'use client'

import type { ComponentProps } from 'react'

import { useCoachMenuContext } from '@/contexts/coachMenuContext'

import { CategoryMenu } from '../CategoryMenu/CategoryMenu'

type Props = ComponentProps<'nav'> & {
  coachCategories:
    | Queries.CoachCategoryMenuFragment[]
    | null
    | undefined
  backArrow?: boolean
}
export const CoachCategoryMenu = ({
  backArrow,
  coachCategories,
}: Props) => {
  const { coachMenuIsOpen, setCoachMenuIsOpen } = useCoachMenuContext()
  return (
    <CategoryMenu
      path="/coaches/"
      categories={coachCategories}
      heading="Coaches dedicated to finding the right solutions to your business challenges."
      backArrow={backArrow}
      allLink
      open={coachMenuIsOpen}
      setOpen={setCoachMenuIsOpen}
    />
  )
}
