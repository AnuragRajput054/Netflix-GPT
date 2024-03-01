

export const  checkValidData = (email , password) =>{
      
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
        email
      );

    //   const isNameValid = /^[A-Za-z\s]{1,}[.]{0,1}[A-Za-z\s]{0,}$/.test(name);
      const isPasswordValid =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
      if (!isEmailValid) return "Email ID is not valid";
      if (!isPasswordValid) return "Password is not valid";
    //   if(!isNameValid) return "Name Is not Valid, Please Try Something diffrent!";
    
      return null;
}