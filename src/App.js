import Private from "./Private"
import Public from "./Public"

import useAuth from "./hooks/useAuth-context"

export default function App() {
    const { token } = useAuth()
    if (token) {
        return <Private />
    }
    return <Public />
}
