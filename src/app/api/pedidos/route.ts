import { NextResponse } from 'next/server';

interface Order {
    id: string;
    status: string;
    [key: string]: unknown;
}

const orders: Order[] = []; // This will hold the orders in memory for demonstration purposes

export async function GET() {
    return NextResponse.json(orders);
}

export async function POST(request: Request) {
    const newOrder = await request.json();
    orders.push(newOrder);
    return NextResponse.json(newOrder, { status: 201 });
}

export async function PATCH(request: Request) {
    const { id, status } = await request.json();
    const orderIndex = orders.findIndex(order => order.id === id);
    
    if (orderIndex !== -1) {
        orders[orderIndex].status = status;
        return NextResponse.json(orders[orderIndex]);
    }
    
    return NextResponse.json({ message: 'Order not found' }, { status: 404 });
}