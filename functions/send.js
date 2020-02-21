const token = process.env.TELEGRAM_TOKEN

exports.handler = function(event, context, callback) {
  console.log({ token })
  console.log(event)
  callback(null, {
    statusCode: 200,
    body: 'Hello, World',
  })
}
