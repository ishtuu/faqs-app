import './index.css'

const plusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

const minusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

const FaqItem = props => {
  const {isShow, faqDetails, showFaq} = props
  const {id, questionText, answerText} = faqDetails
  const showAnsImg = isShow ? minusImg : plusImg
  const showAltText = isShow ? 'minus' : 'plus'

  const toShowFaq = () => {
    showFaq(id)
  }

  return (
    <li className="ans-list-container">
      <div className="que-ans-container">
        <div className="question-container">
          <h1 className="h1">{questionText}</h1>
          <button type="button" onClick={showFaq}>
            <img src={showAnsImg} alt={showAltText} className="button" />
            {isShow ? <p> {answerText} </p> : ' '}
          </button>
        </div>
      </div>
    </li>
  )
}

export default FaqItem
