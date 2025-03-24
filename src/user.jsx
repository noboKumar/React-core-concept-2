import { use } from "react"

export default function Users({fetchUser}) {
    const user = use(fetchUser)
    return(
        <div className="box">
            <h2>User name: {user.length}</h2>
        </div>
    )
}
