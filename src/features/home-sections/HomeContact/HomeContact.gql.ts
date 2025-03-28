import { FormFragments } from "@/features/form";
import gql from "graphql-tag";

export const HomeContactFragment = gql`
  fragment HomeContact on HomePageRecord {
    contactHeading
    contactBody(markdown: true)
    contactForm {
      ...EmbeddedForm
    }
  }
  ${FormFragments}
`
