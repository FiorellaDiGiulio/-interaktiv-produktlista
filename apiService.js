export async function getProducts() { 
    const url = 'https://fakestoreapi.com/products';
    
    try {
        const response = await fetch(url);

        // Om fetch inte returnerar 200 OK
        if (!response.ok) {
            throw new Error("Kunde inte ladda produkter");
        }

        const data = await response.json();
        return data;

    } catch (error) {
        // Om något går fel i fetch eller json()
        throw new Error("Ett fel har inträffat: " + error.message);
    }
}
