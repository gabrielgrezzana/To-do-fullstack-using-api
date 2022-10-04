import '../CreateNote/Note.css'
import Modal from 'react-modal'
import { useState } from 'react'
import axios from 'axios';


export function Note({setObjetos, getCards}){
const [openmodal, setOpenModal] = useState(false);
const [notes, setNotes] = useState({link:"aleatorio"})


    function openModal(){
        setOpenModal(!openmodal)
    }

    async function getNote(event) {
        event.preventDefault()
      
       const response = await axios.post('https://repository-management.herokuapp.com/repo/create-repository', notes)
        const teste = response.data;
        console.log(response)
       setObjetos(teste)
       getCards()
       
    }

 
    return (
        <>
            <div className='organizacaoNote'>
                <button onClick={openModal} className='bn30'>Criar anotação</button>
            </div>
            
            <Modal 
            className="Modal1"
            isOpen={openmodal}
            onRequestClose={openModal}
            >
                <form className='formLogin' onSubmit={getNote}>
                    <label>Name:</label>
                    <input type="text" name="name" onChange={event => setNotes({
                        ...notes,name : event.target.value
                    })}></input>
                    <label>Prioridade:</label>
                    <input type="text" placeholder='High, Medium, Low' name='priority' onChange={event => setNotes({
                        ...notes, priority: event.target.value
                    })}></input>
                    <label>Data:</label>
                    <input type="date" name='deadline' onChange={event => setNotes({
                        ...notes, deadline: event.target.value
                    })}></input>
                    <label>Note:</label>
                    <textarea type="text" className='label10' name='note' onChange={event => setNotes({
                        ...notes, note: event.target.value
                    })}></textarea>
                    <button className='buttonEntrar' type='submit'>Entrar!</button>
                </form>
            </Modal>
        </>
    )
}
