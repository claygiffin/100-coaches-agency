// Modified StructuredText component to handle Gatsby's incompatible type generation
import {
  StructuredText,
  type StructuredTextDocument,
  type StructuredTextGraphQlResponseRecord,
  type StructuredTextPropTypes,
} from 'react-datocms/structured-text'

import { linksRule, noEmptyParagraphsRule } from './customNodeRules'

interface Props<
  R1 extends
    StructuredTextGraphQlResponseRecord = StructuredTextGraphQlResponseRecord,
  R2 extends
    StructuredTextGraphQlResponseRecord = StructuredTextGraphQlResponseRecord,
  R3 extends
    StructuredTextGraphQlResponseRecord = StructuredTextGraphQlResponseRecord,
> extends Omit<StructuredTextPropTypes<R1, R2, R3>, 'data'> {
  data:
    | {
        value:
          | StructuredTextDocument
          | Record<string, unknown>
          | unknown
          | null
        blocks?: readonly (R1 | null | undefined)[] | null
        links?: readonly (R2 | null | undefined)[] | null
        inlineBlocks?: readonly (R3 | null | undefined)[] | null
      }
    | null
    | undefined
}

export const DatoStructuredText = <
  R1 extends
    StructuredTextGraphQlResponseRecord = StructuredTextGraphQlResponseRecord,
  R2 extends
    StructuredTextGraphQlResponseRecord = StructuredTextGraphQlResponseRecord,
  R3 extends
    StructuredTextGraphQlResponseRecord = StructuredTextGraphQlResponseRecord,
>({
  data,
  customNodeRules,
  ...props
}: Props<R1, R2, R3>) => {
  if (data) {
    return (
      <StructuredText
        data={
          data as {
            value: StructuredTextDocument
            blocks?: R1[]
            links?: R2[]
            inlineBlocks?: R3[]
          }
        }
        customNodeRules={[linksRule, ...(customNodeRules || [])]}
        {...props}
      />
    )
  }
}
