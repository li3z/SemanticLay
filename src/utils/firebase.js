import firebase from 'firebase/app';
import msg from 'firebase/messaging';

class Firebase {
   static instance;
  
  fbase = () =>{
    if (this.instance) {
      return this.instance;
    }
    firebase.initializeApp({messagingSenderId: "824440442769"});
    
    this.instance = this;
    return this.instance;

  }; 
  
   askForPermissioToReceiveNotifications = async () => {
    try {
      console.log("ask to");
      const messaging = firebase.messaging();
  
      await messaging.requestPermission();
      const token = await messaging.getToken();
      console.log('user token: ', token);
      console.log("https://iid.googleapis.com/iid/v1/" + token + "/rel/topics/all");
      (async () => {
        try {
          await fetch("https://iid.googleapis.com/iid/v1/" + token + "/rel/topics/all", {
            headers: {
              'Authorization': 'key=AAAAv_R6z5E:APA91bHLXWzm5oMfs44Q6iZRxOQhI9-kQKaxpeY497zYE_XamXGlPymImjGhXpst_zjv89h4zrRWh7DmoPpw8rCnHXhmHAIcSWl75A6d5sPq0TNgLDGaemewxe7BIhW4fqLt5nLFekDX',
              'Content-Type' : 'application/json'
            },
            method :"POST"
          }).then(res => console.log(res))
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
          return token;
        } catch (e) {
          console.log("Booo")
        }
      })();
    } catch (error) {
      console.error(error);
    };
  }

}

export default Firebase;