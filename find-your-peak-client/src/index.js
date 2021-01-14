console.log('script loaded')

async function getData(){
    let resp = await fetch(`https://findyourpeak.herokuapp.com/api/activities`);
    return await resp.json();
}

window.onload = () => {

    async function run(){
        let data = await getData();
        console.log(data);
    }

    run();
}