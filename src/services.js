let urlAPI = "http://localhost:3000/";

export async function getUser(id) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    return fetch(urlAPI + "user/" + id, requestOptions);
}

// export async function postImage(image, id, title) {

//     console.log(image);
//     console.log(id);
//     console.log(title);

//     var requestOptions = {
//         method: 'POST',
//         headers: {
//             "Content-Type": "multipart/form-data",
//             "Accept": "application/json",
//             "type": "formData"
//           },
//         data: image,
//     };

//     return fetch(urlAPI + "image?" + "user=" + id + "&title=" + title , requestOptions);
// }

export async function getImages(id) {
    var myHeaders = new Headers();

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    return fetch(urlAPI + "image/user/" + id, requestOptions);
}

export async function deleteImage(id) {

    var requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };

    return fetch(urlAPI + "image/" + id, requestOptions);
}

export async function updateTitle (body, id) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(body);

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
    };

    return fetch(urlAPI + "image/" + id, requestOptions);
}