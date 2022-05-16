import React from "react";

const UserContext = React.createContext('NTT')

const UserProvider = UserContext.Provider
const Userconsumer = UserContext.Consumer

export {UserProvider, Userconsumer }
export default UserContext