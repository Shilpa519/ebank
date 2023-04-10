import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookie from 'js-cookie'

import {
  HomeContainer,
  LogoLogoutContainer,
  Logo,
  LogoutButton,
  Heading,
  Card,
} from './styledComponents'

class Home extends Component {
  onLogout = () => {
    const {history} = this.props
    Cookie.remove('jwt_token')
    history.replace('/ebank/login')
  }

  render() {
    const jwtToken = Cookie.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/ebank/login" />
    }
    return (
      <HomeContainer>
        <LogoLogoutContainer>
          <Logo>
            <img
              src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png "
              alt="website logo"
            />
          </Logo>
          <LogoutButton type="button" onClick={this.onLogout}>
            Logout
          </LogoutButton>
        </LogoLogoutContainer>
        <Heading>Your Flexibility, Our Excellence</Heading>
        <Card
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
        />
      </HomeContainer>
    )
  }
}

export default Home
