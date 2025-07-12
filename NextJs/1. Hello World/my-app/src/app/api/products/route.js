import { NextResponse } from "next/server";

let products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" }
];

export async function GET(req, { params }) {

    return NextResponse.json({ message: "products data successfully fetched", data: products })
}

export async function POST(request) {

    let obj = await request.json();
    products.push({...obj, id: products.length + 1 });

    return NextResponse.json({ message: "products data successfully added", data: products })
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

