const BASE_URL = "http://localhost:8080"

export async function getTodoItems() {
    const response = await fetch(`${BASE_URL}/todos`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response.json();
}