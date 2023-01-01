import {Component} from 'react'
import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  state = {
    isShow: false,
  }

  showFaq = id => {
    const {isShow} = this.state
    this.setState(() => ({
      isShow: !isShow,
    }))
  }

  render() {
    const {faqsList} = this.props
    const {isShow} = this.state

    return (
      <div className="bg-container">
        <div className="bottom-container">
          <h1>FAQs</h1>
          <ul>
            {faqsList.map(faqObject => (
              <FaqItem
                key={faqObject.id}
                faqDetails={faqObject}
                showFaq={this.showFaq}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
