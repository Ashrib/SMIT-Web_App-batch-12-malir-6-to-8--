export default async function Page() {
    // const res = await fetch('https://dummyjson.com/products');
    const res = await fetch('http://localhost:3000/api/products');
    const data = await res.json()
    return (
        <div>
            {/* {data.products.map((element) => {
                return (
                    <div> {element.id} </div>
                )
            })} */}

            {data.message}
        </div>
    )          
}