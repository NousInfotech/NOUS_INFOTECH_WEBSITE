// lib/sendFormData.ts

interface FormPayload {
    name: string;
    email: string;
    message: string;
    phoneNo: string;
}
 
const API_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_API_URL || "";

export async function sendFormData(payload: FormPayload): Promise<void> {
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

        console.log(data);

        console.log("✅ Form data sent:", payload);
    } catch (error) {
        console.error("❌ Failed to send form data:", error);
    }
}
