export const getDataById = async (id) => {
    const URL = 'http://localhost:4000'
                
    let res = await fetch(`${URL}/datos/${id}`);
    let data = await res.json();
 
    return data;
}