'use server'

type submitFormProps = {
  siteName: string
  formName: string
  data: { [key: string]: string | null }
  recipients: string
  botField: boolean
}
export const submitForm = async ({
  siteName,
  formName,
  data,
  recipients,
  botField,
}: submitFormProps) => {
  try {
    const response = await fetch(
      `${process.env.N8N_CONTACT_FORM_WEBHOOK_URL}`,
      {
        method: 'POST',
        headers: {
          'Webhook-Auth': `${process.env.N8N_WEBHOOK_TOKEN}`,
        },
        body: JSON.stringify({
          'site-name': siteName,
          'form-name': formName,
          ...data,
          recipients,
          botField,
        }),
      }
    )
    const responseBody = await response.json()
    if (response.ok) {
      return {
        statusCode: 200,
        body: responseBody,
      }
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
    }
  }
}
