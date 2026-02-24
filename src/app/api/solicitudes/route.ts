import { NextResponse } from 'next/server';

// Array to store requests in memory for demonstration
const solicitudes: Array<{
    id: string;
    productName: string;
    productLink?: string;
    description?: string;
    email: string;
    createdAt: string;
}> = [];

export async function POST(request: Request) {
    try {
        const { productName, productLink, description, email } = await request.json();

        // Validate required fields
        if (!productName || !email) {
            return NextResponse.json(
                { message: 'Product name and email are required.' },
                { status: 400 }
            );
        }

        // Create new request object
        const newSolicitud = {
            id: Date.now().toString(),
            productName,
            productLink,
            description,
            email,
            createdAt: new Date().toISOString(),
        };

        // Save the request
        solicitudes.push(newSolicitud);

        return NextResponse.json(
            { message: 'Request submitted successfully!', solicitud: newSolicitud },
            { status: 201 }
        );
    } catch {
        return NextResponse.json(
            { message: 'Error processing request' },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json(solicitudes);
}