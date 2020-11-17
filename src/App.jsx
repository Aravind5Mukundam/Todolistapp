import React, { useEffect, useState ,Component} from 'react';
import axios from 'axios';
// import Header from './Header';
// import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import {BASE_URL} from "./Constant";
// import {Route, Switch} from 'react-router-dom';

const App = () => {

  const[addItem, setAddItem] = useState([]);

    useEffect(() => {
        async function addData(){
            const response =  await axios.get(BASE_URL);
            setAddItem(response.data);
        }
        addData();
    }, []);
    
    const addNote = async  (note) => {
        // alert('clicked');
        const addedNote = await axios.post(BASE_URL, note);
        // console.log(addedNote.data);
        setAddItem((prevData) => {
            return [...prevData, addedNote.data];
        })
        // console.log(addItem);

    };

    const onDelete = (key) => {
        setAddItem((prevData) => {
            // console.log(prevData);
            // const updatedData = prevData.filter((currData, index) => {
            //     return index !== id;
            // })
            // console.log(addItem);
            const newData = [];
            prevData.forEach(element => {
                if(element._id === key){
                    axios.delete(`${BASE_URL}/${element._id}`)
                }
                else{
                    newData.push(element);
                }
            });
            return newData;
            
        })
    }

    return (
        <>
           
            <CreateNote passNote={addNote}
              
            />           
            { addItem.map((val, index) => {
                return <Note key={val._id} id={val._id} 
                title={val.title} content={val.content} 
                deleteItem={onDelete} />;
            })}
            
        </>
    )
}

export default App;
