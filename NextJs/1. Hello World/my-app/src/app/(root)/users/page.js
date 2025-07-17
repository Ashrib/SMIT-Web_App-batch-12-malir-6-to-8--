import UserSearchInput from "@/app/componets/UserSerachInput";

export default async function Users({searchParams}) {
    console.log("Search Params in Users:", await searchParams);
    let searchParamsValue = await searchParams;

    console.log("Search Params Value:", searchParamsValue);
    let users = [];
    try {
        users = await fetch(`${searchParamsValue.q? `https://dummyjson.com/users/search?q=${searchParamsValue?.q}` : 'https://dummyjson.com/users'}`);
        users = await users.json();
        // console.log(users);
    } catch (error) {
        console.error("Error fetching users:", error);
    }

    return (

        <div>
            <h2>Users</h2>
            <UserSearchInput/>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.users && users.users.map((user) => (
                <div key={user.id} className="border p-4 mb-4">
                    <h3>{user.firstName} {user.lastName}</h3>
                    <p>Email: {user.email}</p>
                    <p>Username: {user.username}</p>
                </div>
            ))}
        </div>
        </div>
    )
}


