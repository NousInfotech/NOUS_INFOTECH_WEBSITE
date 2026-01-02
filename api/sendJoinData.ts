// lib/sendJoinData.ts

interface JoinPayload {
    name: string;
    email: string;
    message: string;
    phoneNo: string;
    role?: string;
    type?: string;
}
 
const API_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_JOIN_API_URL || "";

export async function sendJoinData(payload: JoinPayload): Promise<void> {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        const data = await response.text();

        console.log("Response data:", data);
        console.log("✅ Join application data sent:", payload);
    } catch (error) {
        console.error("❌ Failed to send join application data:", error);
    }
}
