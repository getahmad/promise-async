const getFirstName =()=> {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            return(true)? resolve("Binar"): reject(Error("Gagal"))
        },3000);
    });
};

const getLastName =()=> {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            return(true)? resolve("Academy"): reject(Error("Gagal"))
        },3000);
    });
};

const handleOnClick = () => { 
    Promise.all([getFirstName(),getLastName()]).then(([result1, result2]) =>{
        document.querySelector("#hasil").innerText= `${result1} ${result2}`
    })
    .then(response => {
        console.log(response)
    })
    .catch(error => console.log('error', error));
}