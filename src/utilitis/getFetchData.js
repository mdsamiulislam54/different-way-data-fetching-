

const url = 'https://jsonplaceholder.typicode.com/users'

const fetchData =  () => {
    const data = fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok' + response.statusText);
        }
        return response.json();
    })
    .then((data) => {
        
        return data
    })
    .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
    });


    return data
}


export default fetchData