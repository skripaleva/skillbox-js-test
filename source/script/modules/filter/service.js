const getData = async () => {
    const data = await fetch('/public/projects.json');
    if(data.ok) {
        return data.json()
    } else {
        throw new Error(`Данные не были получены ${data.status} ${data.statusText}`)
    }
}

const getCourses = (callback, prop, value) => {
    getData()
        .then(data => {
            if (!value || value==='#all') {
                callback(data)
            } else {
                callback(data.filter(item => item[prop].includes(value)))
            }
        })
        .catch(err => {
            console.log(err)
        })
}

export default getCourses;
