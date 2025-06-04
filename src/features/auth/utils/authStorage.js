

const DEMO_USER_KEY = 'demo_registered _key';


export const getDemoUser = ()=>{
    try {
        const userJson = localStorage.getItem(DEMO_USER_KEY)
        return userJson ? JSON.parse(userJson) : []
    } catch (error) {
        console.log("Error parsing demo user from localstorage",error)
        return []
    }
}

export const addNewUser = (newUser)=>{
    const users = getDemoUser();

    if(users.some(user=>user.name == newUser.name)){
        return {success:false,message:"User already Exist"}
    }

    const updatedUser = [...users,newUser]

    localStorage.setItem(DEMO_USER_KEY,JSON.stringify(updatedUser))

    return {success:true,user:newUser}
}

export const findDemoUser = (newUser)=>{

       const users = getDemoUser()
    
       return users.find((user)=>user.password == newUser.password && user.email == newUser.email)

}

export const generateRandomToken = (length = 64) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};