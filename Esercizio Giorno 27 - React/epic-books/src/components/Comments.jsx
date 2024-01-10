let key = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NjIzNTI2NzYxNDAwMTgzYzJlZWYiLCJpYXQiOjE3MDQ4OTczMDUsImV4cCI6MTcwNjEwNjkwNX0.Yh0cS0KwH4tFUmuX_h1dFWrTMFRoHBiwXzTtQOzZ5LU'

export default  class Comments {
    constructor(state) {
        if (state.selected === true) {
            return (
            fetch('https://striveschool-api.herokuapp.com/api/comments/', {
                method: 'GET',
                headers: {
                    'Authorization': key
                }
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                <p>
                    {data.comment} + ' ' + {data.rate} + ' ' + {data.elementId}
                </p>
            })
            .catch((error) => {
                console.error('Error:', error)
            }));
    }
}}

/* export default function Comments(state) {

        if (state.selected === true) {
            return (
            fetch('https://striveschool-api.herokuapp.com/api/comments/', {
                method: 'GET',
                headers: {
                    'Authorization': key
                }
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                <p>
                    {data.comment} + ' ' + {data.rate} + ' ' + {data.elementId}
                </p>
            })
            .catch((error) => {
                console.error('Error:', error)
            }));
        }} */