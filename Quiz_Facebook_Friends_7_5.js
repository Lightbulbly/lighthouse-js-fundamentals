var facebookProfile = {
name: "Eric",
friends: 3,
messages: ["hey","haa","hu"],
postMessage: function (newMessage){
  facebookProfile.messages.push(newMessage);
},
deleteMessage: function (index){
  facebookProfile.messages.splice(index,1);
},
addFriend: function (){
  facebookProfile.friends+=1;
},
removeFriend: function (){
  facebookProfile.friends-=1;
}

}
    
// In an array, 
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

 