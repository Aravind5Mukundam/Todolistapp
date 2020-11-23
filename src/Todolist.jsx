
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import {BASE_URL} from './Constant';


const Todolist = () => {

  const[addItem, setAddItem] = useState([]);

    useEffect(() => {
        async function addData(){
            const response =  await axios.get(BASE_URL);
            setAddItem(response.data);
        }
        addData();
    }, []);
    
    const addNote = async  (note) => {
        
        const addedNote = await axios.post(BASE_URL, note);
        
        setAddItem((prevData) => {
            return [...prevData, addedNote.data];
        })
        

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
            <Header/>
            <CreateNote passNote={addNote}
              
            />           
            { addItem.map((val, index) => {
                return <Note key={val._id} id={val._id} 
                title={val.title} content={val.content} 
                deleteItem={onDelete} />;
            })}
            <Footer/>
        </>
    )
}

export default Todolist;
