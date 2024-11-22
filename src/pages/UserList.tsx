import { useEffect, useState } from "react"
import { getAllUsers, User } from "../api/user.api"
import UserCard from "../components/UserCard";



function UserList(){

    const [users, setUsers] = useState<User[]>([]);
    //const [loading, setLoading] = useState<boolean>(true);
    //const [error, setError] = useState<string | null>(null)




    useEffect(() =>{
        async function loadUsers(){
            const res = await getAllUsers()
            console.log(res)
            setUsers(res.data)
        }
        loadUsers();  
    }, [])

    return (
        <div className="user-list">
            <h2>Users</h2>
            {users.length > 0 ?(
                <UserCard users={users}/>
            ):(
                <p>No users found</p>
            )}

        </div>
    )
}

export default UserList