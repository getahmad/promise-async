//tugas1 => promise.all dari study kasus yang sebelumnya di kerjakan

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
    .catch(error => console.log(error))
}




// code dari mas frey
// const getUser = (id, callback) => {
//   setTimeout(() => {
//     if (!id) {
//       return callback(Error("Invalid ID"))
//     }

//     let response;
//     if (id > 10) {
//       response = {
//         sucess: false,
//         id: id,
//         message: "User Not Found!"  
//       }
//     } else {
//       response = {
//         sucess: true,
//         id: id,
//         message: "User Found"
//       }
//     }

//     return callback(response);
//   }, 2000)
  
// }

// const handleOnClick = () => {
//   console.log("Clicked...")
//   getUser(9, (result) => {
//     const dataUser = result
//     console.log(dataUser)
//   })
// }




// promise

const getUser = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof id === "number" && id >= 0) {
        let response;
        if (id > 10) {
          resolve(
            response = {
              sucess: false,
              id: id,
              message: "User Not Found!",
            }
          );
        } else {
          resolve(response = {
            sucess: true,
            id: id,
            message: "User Found!",
          });
        }
      } else {
        reject(Error("Invalid ID"));
      }
    }, 2000);
  });
};

// tugas 2 => coba convert to Promise chaining

const handleOnClick1 = () => {
    console.log("clicked......")
    getUser(20)
    .then(hasil => {
        console.log(hasil)
        document.querySelector("#hasil1").innerText = `id: ${hasil.id}, message: ${hasil.message}, success: ${hasil.sucess}`
    })
    .catch(error =>  document.querySelector("#hasil1").innerText = `${error}`)
}




// tugas 3 => convert to promise all 

const handleOnClick2 = ()=> {
    console.log("clicked......")
    Promise.all([getUser(9)]).then((
        ([hasil])=> {
            console.log(hasil)
            document.querySelector("#hasil2").innerText = `id: ${hasil.id}, message: ${hasil.message}, success: ${hasil.sucess}`
        }
    ))
    .catch(error =>  document.querySelector("#hasil2").innerText = `${error}`)
}




// tugas 4 => convert to async-await

const handleOnClick3 = async () => {
    console.log("Clicked...")
    try{
        const hasil = await getUser(-9)  
        console.log(hasil)
        document.querySelector("#hasil3").innerText = `id: ${hasil.id}, message: ${hasil.message}, success: ${hasil.sucess}`

    }catch(error){
         document.querySelector("#hasil3").innerText = `${error}`
    }
}
