
const authpost=(token)=>{
    return {
      'Authorization': `Bearer ${token}`
    }
}
const authfile=(token)=>{
  return {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'multipart/form-data',
  }
}
export {
  authfile,
  authpost
}