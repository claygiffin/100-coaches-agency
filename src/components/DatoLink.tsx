import { SerializedStyles } from '@emotion/react'
import { Link } from 'gatsby'
import { Fragment } from 'react'

import ArrowButton from './ArrowButton'
import CoachCategoryMenu from './CoachCategoryMenu'
import SwCategoryMenu from './SwCategoryMenu'

type PropTypes = {
  link: {
    __typename:
      | 'DatoCmsInternalLink'
      | 'DatoCmsCoachMenuLink'
      | 'DatoCmsSWMenuLink'
      | 'DatoCmsExternalLink'
    linkText: string
    url?: string
  }
  arrowButton?: boolean
  buttonStyle?: 'INLINE' | 'OUTLINE' | 'FILL'
  buttonColor?: 'GOLD_LIGHT' | 'GOLD_DARK' | 'WHITE'
  css?: SerializedStyles
}

const DatoLink = ({
  link,
  arrowButton = false,
  buttonStyle,
  buttonColor,
  ...props
}: PropTypes) => {
  console.log(link.__typename)
  return (
    <Fragment>
      {arrowButton ? (
        <Fragment>
          {link.__typename === 'DatoCmsInternalLink' && (
            <ArrowButton
              as={Link}
              text={link.linkText}
              to={link.url || ''}
              style={buttonStyle}
              color={buttonColor}
              {...props}
            />
          )}
          {link.__typename === 'DatoCmsCoachMenuLink' && (
            <ArrowButton
              text={link.linkText}
              style={buttonStyle}
              color={buttonColor}
              {...props}
            >
              <CoachCategoryMenu />
            </ArrowButton>
          )}
          {link.__typename === 'DatoCmsSWMenuLink' && (
            <ArrowButton
              text={link.linkText}
              style={buttonStyle}
              color={buttonColor}
              {...props}
            >
              <SwCategoryMenu />
            </ArrowButton>
          )}
        </Fragment>
      ) : (
        <Fragment>
          {link.__typename === 'DatoCmsInternalLink' && (
            <Link to={link.url || ''} {...props}>
              <span>{link.linkText}</span>
            </Link>
          )}
          {link.__typename === 'DatoCmsCoachMenuLink' && (
            <div {...props}>
              <span>{link.linkText}</span>
              <CoachCategoryMenu />
            </div>
          )}
          {link.__typename === 'DatoCmsSWMenuLink' && (
            <div {...props}>
              <span>{link.linkText}</span>
              <SwCategoryMenu />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  )
}

export default DatoLink
