import React from 'react'

const Chat = (props) => {
    //Fake mensages data
    const messages = [
        {
            authorId: 1,
            authorName: "John Doe",
            message: "oiii, como vai você?",
        },
        {
            authorId: 2,
            authorName: "Jane Doe",
            message: "Oi, eu estou bem e você?",
        },
        {
            authorId: 3,
            authorName: "Lucas",
            message: "Estou bem, obg por peguntar!",
        }
    ];
    //-----------------------------------------------------------
  return  <div id='chat-container' style={{width: "400px", height: "600px"}} className='m-4 bg-secondary rounded-4 p-3 d-flex flex-column'>
    <h1>Chat</h1>

    <div id="chat-body" className=' d-flex  flex-column gap-3 overflow--y-hidden h-100'>
        {messages.map((message, index) => (

            <div className='align-self-start me-5 bg-warning rounded-3 p-2 text-dark'  key={index}>
                <div id="message-author" className='fw-bold'>{message.author} </div>
                <div id="message-text" className=''>{message.message}</div>
         </div>
        ))}
    </div>

    <div id="chat-footer" className='input-group'>
        <input 
        id='msgUser'
        name='msgUser'
        className=''
         type="text" 
         placeholder='Mensagem' />
         
        <i className='bi bi-send-fill'></i>
    </div>
  </div>
  
};

export default Chat