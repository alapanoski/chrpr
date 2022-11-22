export const getUserDetailsFromUsername = (username) => {
  return fetch(`${import.meta.env.VITE_API_URL}/user/${username}`)
}

export const getDisplayName = (username) => {
  return fetch(`${import.meta.env.VITE_API_URL}/user/${username}/displayname`)
}

export const addpNewUser = async (user) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  console.log(res)
}

export const loginUser = async (user) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  console.log(res)
}
