export const getFeed = async () => {
  return fetch(`${import.meta.env.VITE_API_URL}/feed`)
}
