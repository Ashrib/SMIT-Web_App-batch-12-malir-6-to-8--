"use server";

export default async function ProductForm( formData ) {
    try {
        console.log("formData", formData.get("productName"));
        let response = await fetch('http://localhost:3000/api/products',{
            method: "POST",
            body: JSON.stringify({
                name: formData.get("productName")
            })
        });

        console.log("response", response);
        return response;
    } catch (error) {
        console.error("Error adding product:", error);
    }
}