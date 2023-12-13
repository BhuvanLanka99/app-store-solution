// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItemDetails, clickTabItem} = props
  const {tabId, displayText} = tabItemDetails

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }
  return (
    <li className="tab-item">
      <button type="button" className="button2" onClick={onClickTabItem}>
        <p className="tab-name">{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
