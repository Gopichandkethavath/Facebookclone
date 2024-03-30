import { Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, QuestionAnswer, QuestionAnswerOutlined, RssFeed, School, VideoSettingsOutlined, WorkOutline } from '@mui/icons-material'
import './feed.css'

function Fide() {
  return (
    <div className='feed'>
      <div className="sidewrapper">
        <ul className="sidelist">
          <li className="listitems">
          <RssFeed className='listicon'/>
          <span className="sidewrappertext">Feed</span>
          </li>
          <li className="listitems">
          <Chat className='listicon'/>
          <span className="sidewrappertext">Chats</span>
          </li>
          <li className="listitems">
          <PlayCircleFilledOutlined className='listicon'/>
          <span className="sidewrappertext">Videos</span>
          </li>
          <li className="listitems">
          <Group className='listicon'/>
          <span className="sidewrappertext">Groups</span>
          </li>
          <li className="listitems">
          <Bookmark className='listicon'/>
          <span className="sidewrappertext">Bookmarks</span>
          </li>
          <li className="listitems">
          <HelpOutline className='listicon'/>
          <span className="sidewrappertext">Questions</span>
          </li>
          <li className="listitems">
          <WorkOutline className='listicon'/>
          <span className="sidewrappertext">Jobs</span>
          </li>
          <li className="listitems">
          <Event className='listicon'/>
          <span className="sidewrappertext">Events</span>
          </li>
          <li className="listitems">
          <School className='listicon'/>
          <span className="sidewrappertext">Courses</span>
          </li>

        </ul>
        <button>Show More</button>
        <div className="separate">
          <div className="friendswrapper">
            <ul className="friendslist">
              <li className="list">
                <img src="/assests/person1.jpeg"   className='listimg' alt="hello" />
                <span className="friendname">Gopi</span>

              </li>
              <li className="list">
                <img src="/assests/person2.jpeg" className='listimg' alt="hello" />
                <span className="friendname">Chinnu</span>
              </li>
              <li className="list">
                <img src="/assests/person4.jpeg" className='listimg' alt="hello" />
                <span className="friendname">Antony</span>
              </li>
              <li className="list">
                <img src="/assests/person3.webp" className='listimg' alt="hello" />
                <span className="friendname">jhon</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Fide