import { CoachProps, TeamMemberProps } from '../types/customTypes'
import { toSlug } from '../utils/helpers'
import CoachProfile from './CoachProfile'
import Lightbox from './Lightbox'

type PropTypes = {
  coach: CoachProps | TeamMemberProps
  directory?: string
  onClick?: () => void
}

const CoachProfileLightbox = ({
  coach,
  directory = 'coaches/profiles',
  onClick = () => {
    return
  },
}: PropTypes) => {
  return (
    <Lightbox
      slug={`${directory}/${toSlug(coach.name)}`}
      onClick={onClick}
    >
      <CoachProfile coach={coach} />
    </Lightbox>
  )
}

export default CoachProfileLightbox
