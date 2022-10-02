import '../Body/Body.css'
import { Header } from '../Header/Header'
import { Note } from '../CreateNote/Note'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Modal from 'react-modal'


export function Body () {
const [objetos, setObjetos] = useState([])
const [getall ,  setGetAll] = useState([])
const [modalCard, setModalCard] = useState(false)

    function changeModal (){
        setModalCard(!modalCard)
    }

    function loggout () {
        localStorage.removeItem("userToken");
    }

    async function getCards () {
        const a = await axios.get('https://repository-management.herokuapp.com/repo/get-all-repository')
        
        setGetAll(a.data)
    }
    
    async function deleteCards(name) {
        await axios.delete('https://repository-management.herokuapp.com/repo/delete-repository/' + name)
        getCards()
    }

   useEffect(() => {
    getCards()
   },[])

    return (
        <>
        <Header />
       
        <div className="Body">
            <button onClick={loggout}>loggout</button>
        <Note  setObjetos={setObjetos} getCards={getCards}/>
            <div className='organizacao'>
                        
                {getall.map((f) => {
                  return <div className='quadradoTarefas' onClick={changeModal}> 
                  <div className="tarefas">
                    <h3>Tarefas:</h3>
                    <h4>{f.name}</h4>
                    <h5>{f.priority}</h5>
                    <h5>{f.deadline}</h5>
                    <h5>{f.note}</h5>
                    <button className='bn30' onClick={(() => {
                        deleteCards(f.name)
                    })}>Delete</button>
                    <Modal 
            className="Modal1"
            isOpen={modalCard}
            onRequestClose={changeModal}
            >
                <div className='quadradoTarefas' onClick={changeModal}> 
                  <div className="tarefas">
                    <h3>Tarefas:</h3>
                    <h4>{f.name}</h4>
                    <h5>{f.priority}</h5>
                    <h5>{f.deadline}</h5>
                    <h5>{f.note}</h5>
                    <button className='bn30' onClick={(() => {
                        deleteCards(f.name)
                    })}>Delete</button>
                    </div>
                    </div>
            </Modal>
                </div>
                </div>
                
                })}
           
            </div>
        </div>
        
        </>
    )
}