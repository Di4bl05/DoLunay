import { NextApiRequest, NextApiResponse } from 'next';

const solicitudesHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { productName, userEmail } = req.body;

        // Here you would typically handle the request, e.g., save it to a database
        // For now, we'll just return a success message
        if (!productName || !userEmail) {
            return res.status(400).json({ message: 'Product name and user email are required.' });
        }

        // Simulate saving the request
        // await saveRequestToDatabase({ productName, userEmail });

        return res.status(200).json({ message: 'Request submitted successfully!' });
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};

export default solicitudesHandler;