'use server'

type submitFormProps = {
  siteName: string
  n8nId?: string
  formName: string
  data: { [key: string]: string | null }
} & Record<string, unknown>

export const submitForm = async ({
  siteName,
  formName,
  n8nId,
  data,
  ...fields
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
          'n8n-id': n8nId,
          ...data,
          ...fields,
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
