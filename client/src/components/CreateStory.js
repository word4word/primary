import React from 'react'

import io from 'socket.io-client'

const socket = io()

const CreateStory = (props) => {

  const createStory = (e) => {
    e.preventDefault()
    const newStory = {}
    newStory.title = document.getElementById('createTitle').value
    newStory.numberUsers = document.getElementById('createNUsers').value
    // $.ajax({
    //   type: 'POST',
    //   url:'/stories', 
    //   data: newStory, 
    //   dataType: 'json',
    //   success: function(res){
    //     console.log('~~~',res)
    //     window.location = res.redirect
    //   }
    // })

    socket.emit("gameStart")


  }

  return (
    <div className="createStoryWrap">
    {
      // <h3>Enter Room Name</h3>
    }
      <form onSubmit={createStory}>
      {
        // <div>  
        //   <input className="createStoryInput createTitleInput" id="createTitle" type="text" placeholder="Room Name" />
        // </div>
        // <div>
        //   <h3>Number of users</h3>
        //   <input className="createStoryInput createNumberInput" id="createNUsers" type="number" min="1" max="10" placeholder="5"/>
        // </div>
        
      }
        <div className='createButtonWrap'>
          <input className="standardButton blackButton" type="submit" value="Start Game" />
        </div>
      </form>
    </div>
  )
}

export default CreateStory