// Modified StructuredText component to handle Gatsby's incompatible type generation
import {
  StructuredText,
  type StructuredTextDocument,
  type StructuredTextGraphQlResponseRecord,
  type StructuredTextPropTypes,
} from 'react-datocms/structured-text'

interface Props<
  R1 extends StructuredTextGraphQlResponseRecord,
  R2 extends StructuredTextGraphQlResponseRecord = R1,
> extends Omit<StructuredTextPropTypes<R1, R2>, 'data'> {
  data:
    | {
        value:
          | StructuredTextDocument
          | Record<string, unknown>
          | unknown
          | null
        blocks?: readonly (R1 | null | undefined)[] | null
        links?: readonly (R2 | null | undefined)[] | null
      }
    | null
    | undefined
}

export const DatoStructuredText = <
  R1 extends StructuredTextGraphQlResponseRecord,
  R2 extends StructuredTextGraphQlResponseRecord = R1,
>({
  data,
  ...props
}: Props<R1, R2>) => {
  if (data) {
    return (
      <StructuredText
        data={
          data as {
            value: StructuredTextDocument
            blocks?: R1[]
            links?: R2[]
          }
        }
        {...props}
      />
    )
  }
}
