export const getDataByCategory = async (parametro) => {
    const URL = 'http://localhost:4000';
                
    let res = await fetch(`${URL}/datos?categoria_like=${parametro}`);
    let data = await res.json();
 
    return data;
}