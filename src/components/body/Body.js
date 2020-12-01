import React from 'react';
import '../../css/index.css';

import { UploaderComponent, TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { getUser, getImages, deleteImage, updateTitle } from '../../services';

import axios from 'axios';

import capa from '../../css/images/come_come.png';

import perfil from '../../css/images/perfil.jpg';

var imageIndex;

const Body = () => {

    const [showEdit, setShowEdit] = React.useState(false);
    const [imageTitle, setImageTitle] = React.useState();
    const [fillUser, setFillUser] = React.useState();
    const [fillImages, setFillImages] = React.useState();

    const [newTitle, setNewTitle] = React.useState({});
    
    const [image, setImage] = React.useState(
        {
            file: null
        }
    );
    
    let imageUrl = [
        {
            url: 'https://super.abril.com.br/wp-content/uploads/2019/01/fortnite-jogo-lavagem.png'
        }
    ]

    const target = document.getElementById("uploadBanner");
    const path = {
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save'
    }
  
    React.useEffect(() => {
        console.log("fillImages", fillImages);
    },[fillImages])
    
    const titleOnBlur = (args) => {
        setImageTitle(args.value);
    }

    React.useEffect(() => {
        async function load() {
            let _getUser = await getUser(2)
              .then(response => {
                  if (response.ok) {
                      return response.json();
                  }
                })
          
              setFillUser(_getUser);
            }
        load();
    }, []);

    React.useEffect(() => {
        async function load() {
            let _getImages = await getImages(2)
              .then(response => {
                  if (response.ok) {
                      return response.json();
                  }
                })
          
              setFillImages(_getImages);
            }
        load();
    }, []);

    const handleFile = (e) => {
        console.log(e.target.files, "$$$$$");
        console.log(e.target.files[0], "$$$$$");
        let file = e.target.files[0];
        setImage({file: file})
    }
    
    const handleClick = (e) => {
        console.log("THE STATE -----", image);
        
        let file = image.file;
        let formData = new FormData();
        formData.append('image', file);
        formData.append('name', "Imagem1");

        //postImage(file, fillUser.id, imageTitle)

        axios({
            url: 'http://localhost:3000/' + "image?" + "user=" + fillUser.id + "&title=" + imageTitle,
            method: "POST",
            headers: {

            },
            data: formData
        })
    }

    const deleteOneImage = (idItem) => {
        console.log("idItem", idItem);
        deleteImage(idItem);
    }

    const newTitleBlur = (args) => {
        setNewTitle(
            {
                title: args.value
            }
        )
    }

    const changeTitle = (titleId) => {
        console.log("newTitle", newTitle);
        console.log("id::", titleId);
        updateTitle(newTitle, titleId);
    }

    const editarImages = () => {
        if(showEdit == false){
            setShowEdit(true);
        } else{
            setShowEdit(false);
        }
    }
    
    return (
        <div id="bodyComponent">
            <div className="capa">
                <img src={capa} alt="" />
            </div>

            <div className="perfil">
                <img src={perfil} alt="" />
            </div>
            <div className="mainDiv">

                <label>Vitor Santos Pereira</label>

                <button id="editButton" onClick={editarImages}>Editar</button>

            </div>
            <form className="formEdit">
                    <label>Enviar Imagem</label><br/>
                    <input id="chooseFile" type="file" name="file" onChange={(e) => handleFile(e)} /><br/>
                    <button id="uploadButton" type="button" onClick={(e) => handleClick(e)}>Upload</button>
                    <TextBoxComponent 
                        id="title"
                        name="title"
                        blur={(args) => titleOnBlur(args)}
                        placeholder="Escreva aqui um titulo"
                        required
                    />
            </form>

            <div className="cards">
                <div className="grid-container">
                            {fillImages &&
                                fillImages.map((i, index) => {
                                    imageIndex= index;
                                    
                                    return(
                                        <div className="itensImage">
                                            <img className="grid-item" src={"http://localhost:3000/image/" + i.imageUrl}alt="" />
                                            <span id="imageTitle">{i.title}</span>
                                            {showEdit &&
                                                <>
                                                    <button  onClick={() => deleteOneImage(i.id)}>Excluir</button>
                                                    <TextBoxComponent 
                                                        id="newTitle"
                                                        name="newTitle"
                                                        placeholder="Digite um novo titulo"
                                                        blur={(args) => newTitleBlur(args)}
                                                    />
                                                    <button id="changeTitle" onClick={() => changeTitle(i.id)}>Editar Titulo</button>
                                                </>
                                            }
                                        </div>
                                    )
                                })
                            }
                            
                </div>
            </div>
        </div>
    );
}

export default Body;