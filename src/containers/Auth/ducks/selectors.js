export const getLoggedIn = state => state.auth.user.isLoggedIn
export const getRegistered = state => state.auth.user.hasRegistered
export const getMaxAccounts = state => state.auth.user.data.maxAccounts
export const getUserID = state => state.auth.user.data.id
export const getAuthToken = state => state.auth.user.token
export const getLoadingState = state => state.auth.AuthRequestState.isLoading
