import ProductForm from "@/app/actions/ProductForm.js";

export default async function ProductsPage() {
    let response = await fetch('http://localhost:3000/api/products');
    let { data: products } = await response.json();

    return (
        <div>
            <h1>Products</h1>

            <form action={async(formData) => {
                "use server";
                console.log("formData from client:.",formData);
                let response = await ProductForm(formData);
                console.log("Product added successfully", response);
            }}>
                <input className="border-2 p-2 hover:border-blue-500" type="text" placeholder="add product" name="productName"/>
                <input className="border-2 p-2 hover:bg-blue-500" type="submit" value="Add Product" />
            </form>
            <ul>
                {products?.map(product => (
                    <li key={product.id}>
                        {product.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}
