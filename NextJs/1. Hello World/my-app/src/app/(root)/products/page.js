import ProductForm from "@/app/actions/ProductForm.js";
import ProductDeleteBtn from "@/app/componets/ProductDeleteBtn.js";
import Link from "next/link";

export default async function ProductsPage() {
    let response = await fetch('http://localhost:3000/api/products');
    let { data: products } = await response.json();

    return (
        <div>

            <form className="flex flex-col gap-2 border-2 p-10 bg-gray-200" action={async(formData) => {
                "use server";
                console.log("formData from client:.",formData);
                let response = await ProductForm(formData);
                console.log("Product added successfully", response);
            }}>
                <input className="border-2 p-2 hover:border-blue-500" type="text" placeholder="name" name="productName"/>
                <input className="border-2 p-2 hover:border-blue-500" type="text" placeholder="price" name="productPrice"/>
                <input className="border-2 p-2 hover:border-blue-500" type="text" placeholder="description" name="productDescription"/>
                <input className="border-2 p-2 cursor-pointer bg-blue-500 hover:bg-blue-700 hover:border-white" type="submit" value="Add Product" />
            </form>
            <h1 className="text-2xl font-bold text-center p-4">All Products</h1>

            <div className="flex flex-col gap-2  ">
                {products?.map(product => (
                    <Link key={product._id} href={`/products/${product._id}`}>
                        <div className="border-1 p-2 hover:bg-gray-300">
                            <div>
                                <h2 className="text-xl font-semibold">{product.name}</h2>
                            <p className="text-gray-600">Price: ${product.price}</p>
                            <p className="text-gray-500">Description: {product.description}</p>
                            </div>
                            
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
