import {FaStar} from 'react-icons/fa'
import {PiGitForkLight} from 'react-icons/pi'
import {AiOutlineIssuesClose} from 'react-icons/ai'
import './index.css'

const RepositoryItem = props => {
  const {details, isActive} = props
  const {name, avatar_url, forks_count, issues_count, stars_count} = details
  return (
    <div className="card">
      <img src={avatar_url} alt={name} width="50px" />
      <h4>{name}</h4>
      <div className="divi">
        <FaStar />
        <p>{`${stars_count} stars`}</p>
      </div>
      <div className="divi">
        <PiGitForkLight />
        <p>{`${forks_count} forks`}</p>
      </div>
      <div className="divi">
        <AiOutlineIssuesClose />
        <p>{`${issues_count} issues`}</p>
      </div>
    </div>
  )
}
export default RepositoryItem
