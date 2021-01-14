console.log('script loaded')

async function getData(){
    let url = `https://findyourpeak.herokuapp.com/activities`;
    let resp = await fetch(url);
    return await resp.json();
}

window.onload = () => {

    async function run(){
        let data = await getData();
        console.log(data);
    }

    run();
}