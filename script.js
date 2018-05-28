const arr = [{
        "name": "jim@yahoo.com",
        "email": 22,
        "age": "Jim Carry"
    },
    {
        "name": 45,
        "email": "John Carmack",
        "age": "john.carmack@ign.com"
    },
    {
        "name": "Daisy Ridley",
        "email": 30,
        "age": "daisy@disney.com"
    },
    {
        "name": "Billy Idol",
        "email": 70,
        "age": "billy@gmail.com"
    }
];


function processData(arr) {
    let arr2 = [];

    for (let i = 0; i < arr.length; i++) {

        let obj = {
            name: '',
            email: '',
            age: 0
        };

        for (let j in arr[i]) {
            if (/^[0-9]*$/.test(arr[i][j])) {
                obj.age = arr[i][j];
            }
            if (/@/.test(arr[i][j])) {
                obj.email = arr[i][j];
            }
            if (/\s/.test(arr[i][j])) {
                obj.name = arr[i][j];
            }
            arr2.push(obj);
        }

        for (let k = 0; k < arr2.length; k++) {
            if (arr2[k].email === 'billy@gmail.com') {
                console.log(arr2[k]);
                return arr2[k];
            }
        }
    }
}

processData(arr);