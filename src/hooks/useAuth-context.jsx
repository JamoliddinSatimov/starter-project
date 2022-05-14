import { useContext } from "react"
import { AuthContext } from "src/contex/auth-context"

function useAuth() {
    const { token, setToken } = useContext(AuthContext)
    return { token, setToken }
}

export default useAuth
