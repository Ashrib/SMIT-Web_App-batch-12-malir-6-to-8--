import dbConnect from "@/lib/dbConnect";
import ProductModel from "@/lib/modals/ProductModel.js";
import { NextResponse } from "next/server";


export async function GET(req, { params }) {
    try {

        const { id } = await params;

        await dbConnect();
        let product = await ProductModel.findById(id);
        console.log("product", product);
        return NextResponse.json({ message: "product data successfully fetched", data: product });
    } catch (error) {
        console.error("Error fetching product:", error);
        return NextResponse.json({ message: "Error fetching product", error: error.message }, { status: 500 });
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


export async function DELETE(request, { params }) {
    try {
        const { id } = await params;

        await dbConnect();
        let product = await ProductModel.findByIdAndDelete(id);
        console.log("successfully deleted", product);
        return NextResponse.json({ message: "product data successfully deleted", data: product });
    } catch (error) {
        console.error("Error deleting product:", error);
        return NextResponse.json({ message: "Error deleting product", error: error.message }, { status: 500 });
    }
}


export async function PUT(request) {
    let obj = await request.json();
    console.log("obj", obj);    
   try {
       await dbConnect();
       let product = await ProductModel.findByIdAndUpdate(obj.id, obj);
       console.log("successfully updated", product);
       return NextResponse.json({ message: "products data successfully updated", data: product });
   } catch (error) {
       console.error("Error updating product:", error);
       return NextResponse.json({ message: "Error updating product", error: error.message }, { status: 500 });
   }

}

