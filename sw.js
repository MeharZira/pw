self.addEventListener('push', ()=>{
    self.registration.sendNotification('Test Notification', {});
});