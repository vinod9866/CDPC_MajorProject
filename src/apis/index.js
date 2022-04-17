let host = "http://3.111.79.215:8080/api"
// let host = "http://localhost:8080/api"

let token = localStorage.getItem("token");

export const login = (obj)=>{
    return fetch(`${host}/auth/login`,{
        method:'POST',
        headers:{
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(obj)
    }).then(res => res)
    .catch(err => err)
}

export const studentProfileUpdate = (obj)=>{
    return fetch(`${host}/user/profile`,{
        method:'PUT',
        headers:{
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer "+token
        },
        body: JSON.stringify(obj)
    }).then(res => res)
    .catch(err => err)
} 

export const addStudentResume = (data) =>{
    return fetch(`${host}/user/resume`,{
        method:'POST',
        headers:{
            // "Content-Type": "multipart/form-data; boundary=<calculated when request is sent>",
            "Authorization": "Bearer "+token
        },
        body: data
    }).then(res => res)
    .catch(err => err)
}

export const addStudentProfile = (obj) =>{
    return fetch(`${host}/user/profile`,{
        method:'POST',
        headers:{
            // "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer "+token
        },
        body: obj
    }).then(res => res)
    .catch(err => err)
}

export const getAllStudents = () =>{
    return fetch(`${host}/user/users`,{
        method:'GET',
        headers:{
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer "+token
        }
    }).then(res => res)
    .catch(err => err)
}

export const getStudent = () =>{
    return fetch(`${host}/user/user`,{
        method:'GET',
        headers:{
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer "+token
        }
    }).then(res => res)
    .catch(err => err)
}

export const getStudentById = (id) =>{
    return fetch(`${host}/user/${id}`,{
        method:'GET',
        headers:{
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer "+token
        }
    }).then(res => res)
    .catch(err => err)
}

export const getDrives = () =>{
    return fetch(`${host}/drive/all`,{
        method:'GET',
        headers:{
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer "+token
        }
    }).then(res => res)
    .catch(err => err)
}

export const getDriveRegisteredStudents = (driveId) =>{
    return fetch(`${host}/drive/register/all/${driveId}`,{
        method:'GET',
        headers:{
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer "+token
        }
    }).then(res => res)
    .catch(err => err)
}

export const registerDrive = (driveId,userId) =>{
    return fetch(`${host}/drive/register/${driveId}/${userId}`,{
        method:'GET',
        headers:{
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer "+token
        }
    }).then(res => res)
    .catch(err => err)
}

export const getDrive = (driveId) =>{
    return fetch(`${host}/drive/${driveId}`,{
        method:'GET',
        headers:{
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer "+token
        }
    }).then(res => res)
    .catch(err => err)
}

export const saveDrive = (obj) =>{
    return fetch(`${host}/drive/save`,{
        method:'POST',
        headers:{
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer "+token
        },
        body:JSON.stringify(obj)
    }).then(res => res)
    .catch(err => err)
}

export const updateDrive = (driveId,obj) =>{
    return fetch(`${host}/drive/update/${driveId}`,{
        method:'PUT',
        headers:{
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer "+token
        },
        body:JSON.stringify(obj)
    }).then(res => res)
    .catch(err => err)
}

export const getNotifications = () =>{
    return fetch(`${host}/broadcast/all`,{
        method:'GET',
        headers:{
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer "+token
        }
    }).then(res => res)
    .catch(err => err)
}

export const forgotPasswordApi = (userId) =>{
    return fetch(`${host}/auth/forgotPassword/{userId}?userId=${userId}`,{
        method:'GET',
        headers:{
            "Content-Type": "application/json; charset=utf-8",
        }
    }).then(res => res)
    .catch(err => err)
}

export const resetPasswordApi = (token,password) =>{
    return fetch(`${host}/auth/reset/{token}/{passwod}?token=${token}&password=${password}`,{
        method:'GET',
        headers:{
            "Content-Type": "application/json; charset=utf-8",
        }
    }).then(res => res)
    .catch(err => err)
}

