import https from 'https'

const token = process.env.TELEGRAM_TOKEN
const chatId = process.env.CHAT_ID
const chatId2 = process.env.CHAT_ID2

exports.handler = function(event, context, callback) {
  if (!token || !chatId) {
    return { statusCode: 500, body: 'Environment variables required' }
  }
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const { name = 'ананимус', phoneNumber } = JSON.parse(event.body)

  if (!phoneNumber) {
    return { statusCode: 402, body: 'Bad Request' }
  }
  const encoded = `${name}%0A%2B${encodeURI(phoneNumber)}`

  https
    .get(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encoded}`,
      () => {},
    )
    .on('error', err => {
      console.log('Error: ' + err.message)
    })

  https
    .get(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId2}&text=${encoded}`,
      () => {},
    )
    .on('error', err => {
      console.log('Error: ' + err.message)
    })

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ status: 'ok' }),
  })
}
