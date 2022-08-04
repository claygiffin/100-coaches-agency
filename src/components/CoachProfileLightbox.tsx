import { CoachProps, TeamMemberProps } from '../types/customTypes'
import { toSlug } from '../utils/helpers'
import CoachProfile from './CoachProfile'
import Lightbox from './Lightbox'

type PropTypes = {
  coach: CoachProps | TeamMemberProps
  directory?: string
}

const CoachProfileLightbox = ({
  coach,
  directory = 'coaches/profiles',
}: PropTypes) => {
  return (
    <Lightbox slug={`${directory}/${toSlug(coach.name)}`}>
      <CoachProfile coach={coach} />
    </Lightbox>
  )
}

export default CoachProfileLightbox
