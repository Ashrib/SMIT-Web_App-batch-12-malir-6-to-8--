import dbConnect from "@/lib/dbConnect";
import ProductModel from "@/lib/modals/ProductModel.js";
import { Trykker } from "next/font/google";
import { NextResponse } from "next/server";

let products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" }
];

export async function GET(req) {
    try {
        await dbConnect();
        let products = await ProductModel.find();
        console.log("products", products);
        return NextResponse.json({ message: "products data successfully fetched", data: products });
    } catch (error) {
        console.error("Error fetching products:", error);
        return NextResponse.json({ message: "Error fetching products", error: error.message }, { status: 500 });
    }
}

export async function POST(request) {

    try {
        await dbConnect();
        let obj = await request.json();
        console.log("api obj :", obj);
        let newProduct =  new ProductModel(obj);
        await newProduct.save();
        console.log("new Product successfully added ", newProduct);
        
        return NextResponse.json({ message: "products data successfully added", data: newProduct })
    } catch (error) {
        console.error("Error adding product:", error);
        return NextResponse.json({ message: "Error adding product", error: error.message }, { status: 500 });
    }


}



export async function DELETE(request) {
    let obj = await request.json();
    products = products.filter(product => product.id !== obj.id);

    return NextResponse.json({ message: "products data successfully deleted", data: products })
}


export async function PUT(request) {
    let obj = await request.json();
    console.log("obj", obj);    
    products = products.map((product) => {
        if (product.id == obj.id) {
            product.name = obj.name;
        }
        return product;
    });

    return NextResponse.json({ message: "products data successfully updated", data: products })
}

