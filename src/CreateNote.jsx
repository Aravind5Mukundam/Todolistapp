import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import {Form} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
   .form-control{
       width: 25%;      
       padding: 25px;
       
   }
    
`;

const CreateNote = (props) => {
    
    const[note, setNote] =useState({
        title: "",
        content: ""
    });

    const InputEvent = (e) => {
        // const value = e.target.value;
        // const name = e.target.name;

        const {name, value} = e.target;

        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    const addEvent = () => {
        props.passNote(note)
        setNote({
            title: "",
            content: ""
        });
    }
    
    return (
        <>
            <div className='main_note'>
                <Form>
                    <Form.Group>
                        <br/>
                        <Styles>
                            <Form.Control className="form-control" type="text" placeholder="Title" size="lg" name="title" value={note.title} onChange={InputEvent} autoComplete="off" />
                            <br />
                            <Form.Control className="form-control" type="text" placeholder="Write a note" rows="" column="" name="content" value={note.content} onChange={InputEvent} />
                            <br />
                        </Styles>
                        
                    </Form.Group>
                    <Button onClick={addEvent}>
                        <AddIcon className='plus_sign' />
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default CreateNote;

