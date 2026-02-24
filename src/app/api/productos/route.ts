import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
    try {
        const products = await db.getProducts(); // Fetch products from the database
        return NextResponse.json(products);
    } catch {
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    const productData = await request.json();
    try {
        const newProduct = await db.createProduct(productData); // Create a new product in the database
        return NextResponse.json(newProduct, { status: 201 });
    } catch {
        return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    const { id, ...productData } = await request.json();
    try {
        const updatedProduct = await db.updateProduct(id, productData); // Update an existing product
        return NextResponse.json(updatedProduct);
    } catch {
        return NextResponse.json({ error: 'Failed to update product' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    const { id } = await request.json();
    try {
        await db.deleteProduct(id); // Delete a product from the database
        return NextResponse.json({ message: 'Product deleted successfully' });
    } catch {
        return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
    }
}