export const getAllChrps = async () => {
  return fetch(`${import.meta.env.VITE_API_URL}/chrp`)
}

export const postNewChrp = async (newChrp) => {
  await fetch(`${import.meta.env.VITE_API_URL}/chrp`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newChrp)
  })
}
