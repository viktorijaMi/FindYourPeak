async function getData(){
    let url = `http://localhost:9090/api/activities`;
    let resp = await fetch(url);
    return await resp.json();
}