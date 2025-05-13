const apiUrl: string =
    (import.meta as any).env.DEV ? "http://localhost:8000/api/v1" :
        "https://SOSlms-backend.onrender.com/api/v1";

export {
    apiUrl
};