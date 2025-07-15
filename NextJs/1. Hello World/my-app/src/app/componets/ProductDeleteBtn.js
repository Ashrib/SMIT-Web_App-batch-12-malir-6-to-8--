'use client';

import { useRouter } from "next/navigation";

export default function ProductDeleteBtn({ productId }) {
     const router = useRouter()

    const handleDelete = async () => {
        try {
            let response = await fetch(`http://localhost:3000/api/products/${productId}`, {
            method: 'DELETE'
        });
        let data = await response.json();
        console.log(data);
        router.push('/products');
        } catch (error) {
            console.error("Error deleting product:", error);
        }

    }

    return (
        <button className="bg-red-500 p-1 hover:bg-red-700" onClick={handleDelete}>Delete</button>

    )
}