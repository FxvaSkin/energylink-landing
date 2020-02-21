import querystring from 'querystring'
const token = process.env.TELEGRAM_TOKEN

exports.handler = function(event, context, callback) {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  // When the method is POST, the name will no longer be in the event’s
  // queryStringParameters – it’ll be in the event body encoded as a query string
  const params = querystring.parse(event.body)
  const { name = 'ананимус', phone } = params

  console.log({ token })
  console.log(name, phone)

  callback(null, {
    statusCode: 200,
    body: { status: 'ok' },
  })
}
