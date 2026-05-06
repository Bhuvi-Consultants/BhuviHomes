import axios from "axios";

export async function POST(req) {
    try {
        const body = await req.json();

        const response = await axios.post(
            `${process.env.API_BASE_URL}/api/v1/lead`,
            body
        );

        return Response.json(response.data);

    } catch (error) {
        console.error(error);

        return Response.json(
            { message: "Something went wrong" },
            { status: 500 }
        );
    }
}