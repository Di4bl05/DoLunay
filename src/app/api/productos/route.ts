import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
    try {
        const products = await db.getProducts();
        return NextResponse.json(products);
    } catch {
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    const productData = await request.json();
    try {
        const newProduct = await db.createProduct(productData);
        return NextResponse.json(newProduct, { status: 201 });
    } catch {
        return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const url = new URL(request.url);
        const id = url.searchParams.get('id');
        const productData = await request.json();
        
        if (!id) {
            return NextResponse.json({ error: 'Product ID required' }, { status: 400 });
        }

        const updatedProduct = await db.updateProduct(id, productData);
        
        if (!updatedProduct) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        return NextResponse.json(updatedProduct);
    } catch {
        return NextResponse.json({ error: 'Failed to update product' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const url = new URL(request.url);
        const id = url.searchParams.get('id');
        
        if (!id) {
            return NextResponse.json({ error: 'Product ID required' }, { status: 400 });
        }

        const success = await db.deleteProduct(id);
        
        if (!success) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Product deleted successfully' });
    } catch {
        return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
    }
}