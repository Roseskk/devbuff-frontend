import { useApi } from './useApi'
import { ref } from 'vue'

const { request, BASE_URL } = useApi()
const user = ref({})

export const useUser = () => {
  const getUser = async (uuid = '') => {
    const response = await request(uuid ? `/profile/${uuid}` : '/profile')
    user.value = {
      avatar: getUserProfileUrl(response.data.id),
      ...response.data,
    }
    return response
  }

  const getUserProfileUrl = (uuid) => {
    return `${BASE_URL}/photo/profile/${uuid}`
  }

  return {
    user,
    getUser,
    getUserProfileUrl,
  }
}
