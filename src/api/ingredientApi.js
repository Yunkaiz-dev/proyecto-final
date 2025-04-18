const API_BASE_URL = "https://localhost:7068/api";

// Función para crear un ingrediente
const createIngredient = async (ingredient) => {
    try {
        const response = await fetch(`${API_BASE_URL}/Ingredient`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ingredient),
        });

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error en crear un ingrediente:", error);
        return { success: false, message: error.message };
    }
};

// Funcion para obtener todos los ingredientes
const getIngredients = async ({ limit, group } = {}) => {
    try {
        // Construir los parametros de consulta dinamicamente
        const queryParams = new URLSearchParams();
        if (limit) queryParams.append("limit", limit);
        if (group) queryParams.append("group", group);

        // Crear la URL final con los parametros
        const url = `${API_BASE_URL}/Ingredient${queryParams.toString() ? `?${queryParams}` : ""}`;

        // Llamada a la API
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error en obtener ingrediente:", error);
        return { success: false, message: error.message };
    }
};

// Funcion para obtener un ingrediente por ID
const getIngredientById = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/Ingredient/${id}`);
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error en obtener un ingrediente por ID:", error);
        return { success: false, message: error.message };
    }
};

// Funcion para actualizar un ingrediente
const updateIngredient = async (id, ingredient) => {
    try {
        const response = await fetch(`${API_BASE_URL}/Ingredient/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(ingredient),
        });

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error en actualizar un ingrediente:", error);
        return { success: false, message: error.message };
    }
};

// Funcion para eliminar un ingrediente
const deleteIngredient = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/Ingredient/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error en eliminar un ingrediente:", error);
        return { success: false, message: error.message };
    }
};

export default {
    createIngredient,
    getIngredients,
    getIngredientById,
    updateIngredient,
    deleteIngredient,
};
