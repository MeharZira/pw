var push = require('web-push')

let keys = {
    publicKey: 'BOnvoH9TkmXW_eV31N-U3cxrMgnQ9FNnhIXx9JB43S1KyRCwHZC7yyumYRTbpKycbu9ACAsaX09r-HedtECcU_o',   
    privateKey: 'aGXfuNo82BDG-xa5MvBHoncYIawuBMmgQnbwNbppNk8'
  }

  push.setVapidDetails('mailto:test@code.co.uk', keys.publicKey, keys.privateKey)

  let sub = {}

  push.sendNotification(sub, "Test Message")