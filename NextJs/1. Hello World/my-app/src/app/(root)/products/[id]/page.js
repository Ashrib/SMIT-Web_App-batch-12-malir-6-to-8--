import ProductForm from "@/app/actions/ProductForm.js";
import ProductDeleteBtn from "@/app/componets/ProductDeleteBtn.js";
import Link from "next/link";

export default async function ProductsPage({ params }) {
    let { id } = await params;
    console.log("params", id);

    let response = await fetch(`http://localhost:3000/api/products/${id}`);
    let { data: product } = await response.json();

    return (
        <div>
            <h1 className="text-2xl font-bold text-center p-4">{product.name}</h1>
            <p className="text-gray-600">Price: ${product.price}</p>
            <p className="text-gray-500">Description: {product.description}</p>
            <div>
                <button className="bg-green-500 p-1 hover:bg-green-700">Edit</button>
                <ProductDeleteBtn productId={product._id} />
            </div>
        </div>
    );
}
