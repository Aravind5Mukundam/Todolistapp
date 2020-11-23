import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
   .card{
       background-color:  #f0a500;
       
       
   }
   .btn{
    background-color:  red;
   }
    
`;

const Note = (props) => {
    
    const deleteNote = () => {
        props.deleteItem(props.id);
    };
    
    return (
        <>  
            <Styles>
                <Card style={{width: '18rem'}}className="card">
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <br />
                        
                        <Card.Text>{props.content}</Card.Text>
                        <button className="btn" onClick={deleteNote} >
                            <DeleteOutlineIcon className='deleteIcon' />
                        </button>
                    </Card.Body>
                </Card>
            </Styles>
           
        </>
    )
}

export default Note;