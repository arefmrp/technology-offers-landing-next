export async function productsFetch(){
    const data = await fetch('http://localhost:3000/data/products.json');
    return data.json()
}