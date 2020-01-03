const convertToDollar = (rupees) => {
  if (typeof rupees === 'number') {
    return rupees * 64;
  } else {
   // return `${rupees} is not a number`;
    throw Error('Amount needs to be in number')

  }
}

// let dollar = convertToDollar('');
// console.log(dollar);
try{

    const dollar = convertToDollar("2")
    console.log(dollar);
    
}catch (e){
    console.log(e);
}
