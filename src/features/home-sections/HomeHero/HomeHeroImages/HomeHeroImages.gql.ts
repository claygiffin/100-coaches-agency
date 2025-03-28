import { ResponsiveImageFragment } from "@/features/dato-image";
import gql from "graphql-tag";

export const HomeHeroImagesFragment = gql`
  fragment HomeHeroImages on FileField {
    horizontal: responsiveImage(
      imgixParams: {
        q: 75
        sat: -100
        bri: -33
        con: -75
        ar: "16:10"
        fit: crop
      }
    ) {
      ...ResponsiveImage
    }
    vertical: responsiveImage(
      imgixParams: {
        q: 75
        sat: -100
        bri: -33
        con: -75
        ar: "2:3"
        fit: crop
      }
    ) {
      ...ResponsiveImage
    }
    focalPoint {
      x
      y
    }
  }
  ${ResponsiveImageFragment}
`
