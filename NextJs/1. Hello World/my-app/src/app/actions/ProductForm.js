"use server";

import { revalidatePath } from "next/cache";

export default async function ProductForm( formData ) {
    try {
        console.log("formData", formData.get("productName"));
        let response = await fetch('http://localhost:3000/api/products',{
            method: "POST",
            body: JSON.stringify({
                name: formData.get("productName"),
                price: Number(formData.get("productPrice")),
                description: formData.get("productDescription"),
            })
        });

        console.log("response", response);
        revalidatePath('/products')
        return response;
    } catch (error) {
        console.error("Error adding product:", error);
    }
}