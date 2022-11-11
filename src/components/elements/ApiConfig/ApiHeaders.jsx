
const authpost=(token)=>{
    return {
      'Authorization': `Bearer ${token}`
    }
}
const authfile=(token)=>{
  return {
    'Authorization': `Bearer ${token}`,
    'accept': '*/*',
    'Content-Type': 'multipart/form-data',
  }
}
export {
  authfile,
  authpost
}