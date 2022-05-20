export async function detailsFetch(){
    const data = await fetch('http://localhost:3000/data/detail.json');
    return data.json()
}