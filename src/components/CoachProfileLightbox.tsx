import { CoachProps } from '../types/customTypes'
import { toSlug } from '../utils/helpers'
import CoachProfile from './CoachProfile'
import Lightbox from './Lightbox'

type PropTypes = {
  coach: CoachProps
}

const CoachProfileLightbox = ({ coach }: PropTypes) => {
  return (
    <Lightbox slug={`coaches/profiles/${toSlug(coach.name)}`}>
      <CoachProfile coach={coach} />
    </Lightbox>
  )
}

export default CoachProfileLightbox
