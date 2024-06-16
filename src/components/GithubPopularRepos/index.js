import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    blogList: [],
    activeid: languageFiltersData[0].id,
    isLoading: true,
  }

  componentDidMount() {
    const {activeid} = this.state
    this.blogItems(activeid)
  }

  blogItems = async id => {
    this.setState({isLoading: true})
    const lang = languageFiltersData.find(each => id === each.id)
    const url = `https://apis.ccbp.in/popular-repos?language=${lang.language}`
    const option = {
      method: 'GET',
    }
    const response = await fetch(url, option)
    const data = await response.json()
    this.setState({
      blogList: data.popular_repos,
      activeid: id,
      isLoading: false,
    })
  }

  render() {
    const {blogList, activeid, isLoading} = this.state
    return (
      <div>
        <h1>Popular</h1>
        <ul>
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              details={each}
              key={each.id}
              blogItems={this.blogItems}
              isActive={activeid === each.id}
            />
          ))}
        </ul>
        <ul>
          {isLoading ? (
            <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
          ) : (
            blogList.map(each => (
              <RepositoryItem details={each} key={each.id} />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default GithubPopularRepos
