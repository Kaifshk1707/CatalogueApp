import axiosInstance from "./axiosInstance";
//json-server --watch db.json
// npx json-server --watch db.json --port 3000
export const getRequest = async (endpoint) => {
    try {
        const response = await axiosInstance.get(endpoint);
        return response.data;
    } catch (error) {
        console.log("GET Error:", error.message);
        throw error;
    }
};