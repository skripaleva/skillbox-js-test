const getData = async () => {
    console.log('4')
    const data = await fetch('/public/projects.json');
    if(data.ok) {
        return data.json()
    } else {
        throw new Error(`Данные не были получены ${data.status} ${data.statusText}`)
    }
}

const getCourses = (callback, prop, value) => {
    console.log('5')
    getData()
        .then(data => {
            if (value) {
                console.log('1')
                callback(data.filter(item => item[prop].includes(value)))
            } else {
                console.log('2')
                callback(data)
            }
        })
        .catch(err => {
            console.log(err)
        })
}

export default getCourses;
