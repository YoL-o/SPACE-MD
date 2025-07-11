// keepalive.js
require('./index.js')

// This keeps the container alive even if index.js finishes
setInterval(() => {}, 1000 * 60 * 60)
