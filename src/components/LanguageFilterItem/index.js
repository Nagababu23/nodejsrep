import './index.css'

const LanguageFilterItem = props => {
  const {details, blogItems, isActive} = props
  const {id, language} = details
  const getItems = () => {
    blogItems(id)
  }
  return (
    <li>
      <button onClick={getItems} className={isActive ? 'active' : 'buton'}>
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
