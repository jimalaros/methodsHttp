export const getData = async () => {
    const URL = 'http://localhost:4000';
                
    let res = await fetch(`${URL}/datos`);
    let data = await res.json();
 
    return data;
}