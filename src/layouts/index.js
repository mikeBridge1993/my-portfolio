import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import './styles/index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Miguel Bettencourt Portfolio"
      meta={[
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
      ]}
      script={[
        { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js' },
        { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.bundle.min.js' },
        { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js' }
      ]}
    />
    <div>
    <Header />
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
