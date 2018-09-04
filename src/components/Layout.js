import React from 'react'
import { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.ico'
import '../styles/global'
import theme from '../styles/theme'
import config from '../utils/siteConfig'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Sticky from 'react-stickynode';
import PropTypes from 'prop-types'
 
import Firebase from '../utils/firebase';

class Layout extends React.Component{
  componentDidMount(){
    try{
    this.firebase = new Firebase();
    this.firebase.fbase().askForPermissioToReceiveNotifications();
  } catch (e){
    console.log("error: "+ e);
  }
  
  }
  

  
    
    render = ()=>(<div className="siteRoot">
    <Helmet>
      <title>{config.siteTitle}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={favicon} />
      <meta name="description" content={config.siteDescription} />
      <meta property="og:title" content={config.siteTitle} />
      <meta property="og:url" content={config.siteUrl} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={config.siteTitle} />
    </Helmet>

    <ThemeProvider theme={theme}>
      <>
        <div className="siteContent">
          <Sticky top='#header' bottomBoundary='#content' innerZ ={10}>
            <Menu />
          </Sticky>

          {this.props.children}
         
        </div>
        <Footer />
      </>
    </ThemeProvider>
  </div>)

  

}

Layout.propTypes = {
  
  children:PropTypes.array.isRequired
}


export default Layout
