import React from 'react'
import noChatsImg from '../images/no-chats.png'
import searchIcon from '../images/search.png';
import {
  SendOutlined, PlusOutlined, FilterOutlined, FormOutlined, EllipsisOutlined
} from "@ant-design/icons";
export default function Messages() {
  const chats = [
    { id: 1, name: 'Alice B', message: 'Could you please give more details?' },
    { id: 2, name: 'Bob B', message: 'Could you please give more details' },
    { id: 3, name: 'Charlie K', message: 'Could you please give more details' },
  ];

let emptyData = {};
 

  return (
    <div className='messageContainer'>
      <div className="chatContainer">
        <div>
          <div className='chatHead'>
            <div>
              Chats
            </div>
            <div className='chatIcons'>
              <FilterOutlined className='iconGrey' />
              <FormOutlined className='iconGrey' />
            </div>
          </div>

        </div>

       {emptyData && (<div className='chatList'>

          <div class="search-filter-container" style={{ position: "relative", marginTop: "0px !important" }}>
            <div class="search-input-container">
              <input type="text" id="searchInput" placeholder="Search" class="search-input" />
              <div class="search-icon">
                <img src={searchIcon} alt='' />
              </div>
            </div>
          </div>
          <div className='chatDate'>
            <span>July 2024</span>
          </div>

          <ul>
            {chats.map(chat => (
              <li key={chat.id} >
                <div className="chat-item" >

                  <div className="profile-initials">
                    <span>
                      {chat.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                    <span className="green-tick">&#10004;</span>
                  </div>

                  <div className='chatContent'>
                    <div>
                      <div className="chat-name">{chat.name}</div>
                      <div className="chat-last-message">{chat.message}</div>
                    </div>
                    <div className='lastMessageTime'>
                      11:18 AM
                    </div>
                  </div>

                </div>

              </li>
            ))}
          </ul>
        </div>)
}
      </div>

      {emptyData?(<div className="conversation-box">

        <div className='convoHead'>
          <div className="convo-item" >
            <div className="profile-initials" >
              <span>
                AB
              </span>  <span className="green-tick">&#10004;</span>
            </div>
            <div style={{ alignSelf: "center" }}>
              <div className="chat-name">AB dev</div>
            </div>
          </div>
          <div className='chatIcons'>
            <EllipsisOutlined className='iconGrey' />
          </div>
        </div>

        <div className='convo-list'>
        <div className='chatDate' style={{textAlign:"center"}}>
            <span>Jul 21. 10:20 AM</span>
          </div>
          <div className="" >
            <div className=''>
              <div className='sender'>
                <div className='senderProfile'>
                  <div className="profile-initials">
                    <span>
                      AB</span>
                    <span className="green-tick">&#10004;</span>

                  </div>
                  <div>
                    <div className='sender-name'>
                      <div className="chat-name-convo">AB Dev</div>
                      <div className='lastMessageTime'>
                        11:18 AM
                      </div>
                    </div>
                    <div className="sender-message-box">
                      <span>
                        Builder: Hello! Absolutely, I'd be happy to provide more information. We're currently developing a new residential community with 3-bedroom and 4-bedroom homes. The project is located in the Greenfield area, close to schools and parks.
                      </span>
                    </div>
                  </div>


                </div>


              </div>
              <div className='receiver'>
                <div className='lastMessageTime' style={{ textAlign: "end" }}>11:10 AM</div>
                <div className='receiver-message-box'>
                  <span>
                    That sounds impressive. I will go through it.
                  </span>
                </div>
              </div>



            </div>

          </div>
        </div>
        <div className='message-input'>
          <div class="input-container">
            <input type="text" id='messaseInput' placeholder="Type a message" />
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
              <line x1="9" y1="9" x2="9.01" y2="9"></line>
              <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg>
            <PlusOutlined className='iconGrey' />
            |  <SendOutlined className='iconGrey' />
          </div>
        </div>

      </div>) : (<div className='noChats'>
            <img src={noChatsImg} alt='no chats' />
        </div>

      )}

    </div>
  )
}
