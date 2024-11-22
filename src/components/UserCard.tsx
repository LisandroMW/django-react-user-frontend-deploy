import { User } from "../api/user.api";

interface UserCardProps{
    users: User[];

}


function UserCard({users}: UserCardProps) {
    return (
        <div className="user-card">
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            {user.username} 
                            <br />
                            {user.email}
                        </li>
                    ))}
                </ul>
        </div>
    )
}

export default UserCard