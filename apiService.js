export async function getproducts () { 
    const url = 'https://fakestoreapi.com/products';
    
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error ("kunde inte laddas");
        }
        const data = await response.json();
        return data;

 } catch (error) {
            throw new Error ("Ett fel har inträffat: "+ error.message);
 }
 
} 