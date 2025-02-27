var push = require('web-push')

let keys = {
    publicKey: 'BOnvoH9TkmXW_eV31N-U3cxrMgnQ9FNnhIXx9JB43S1KyRCwHZC7yyumYRTbpKycbu9ACAsaX09r-HedtECcU_o',   
    privateKey: 'aGXfuNo82BDG-xa5MvBHoncYIawuBMmgQnbwNbppNk8'
  }

  push.setVapidDetails('mailto:test@code.co.uk', keys.publicKey, keys.privateKey)

  let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/ckWtVJj09mg:APA91bEmMDSDRghTSYxdhy2sAlMX8JGUgEJklypDc28P8aPziMRZmzZ8GdeO8r7S1bFE1lLt-ngnbb0JzER5JjxrueSPMlUb00HIDBMAixTrzPWwB5zNOGAAFRbAkWqfzT6Wimc2bkzJ","expirationTime":null,"keys":{"p256dh":"BPupQnpQkvhgo_rtE9sW-3P6V0v_Mzu5NCz4r8oIYmXdRPq8wLiiRVtWha0O9UdgjZP2zlQJ9BToj4FcVFbqyNk","auth":"XWvc8YQtM7L3OjnWJ4Fauw"}};

  push.sendNotification(sub, "Test Message")