// && - AND operator - Both sides need to be true
// || - OR operator - One side need to be be false
let isVerified = true
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true
if (isVerified && isLoggedIn && hasPaymentToken) {
    console.log("Grant access to paid courses");
    
}
else if(isVerified || isGuest){
    console.log('allow free previews');
    
}else{
    console.log('MESSAGE: contact Admin');
    
}
//14/may/2019 8roza ramazan at 6:00pm video number 8 hiteshChoudary youtube  