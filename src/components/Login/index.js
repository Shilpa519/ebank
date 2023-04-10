import {Component} from 'react'

import Cookie from 'js-cookie'

import {Redirect} from 'react-router-dom'

import {
  MainContainer,
  ImageContainer,
  Image,
  FormContainer,
  Welcome,
  InputContainer,
  ErrorMsg,
  Button,
  Label,
  Input,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = e => {
    if (e.target.value !== '') {
      this.setState({username: e.target.value})
    } else {
      this.setState({
        username: '',
        showSubmitError: true,
      })
    }
  }

  onChangePassword = e => {
    if (e.target.value !== '') {
      this.setState({password: e.target.value})
    } else {
      this.setState({
        password: '',
        showSubmitError: true,
      })
    }
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookie.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = error => {
    this.setState({errorMsg: error, showSubmitError: true})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    console.log(options)
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      this.onSubmitSuccess(data.jwtToken)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderPasswordFiled = () => {
    const {password} = this.state
    return (
      <>
        <Label htmlFor="password">PIN</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Enter PIN"
        />
      </>
    )
  }

  renderUsernameFiled = () => {
    const {username} = this.state
    return (
      <>
        <Label htmlFor="username">User ID</Label>
        <Input
          type="text"
          id="username"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Enter User ID"
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg, username, password} = this.state
    let text = null
    if (showSubmitError) {
      if (username === '') {
        text = errorMsg
      } else if (password === '') {
        text = 'Invalid PIN'
      } else {
        text = "User ID and PIN didn't match "
      }
    }
    const jwtToken = Cookie.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <MainContainer>
        <ImageContainer>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
          />
        </ImageContainer>
        <FormContainer onSubmit={this.submitForm}>
          <Welcome>Welcome Back!</Welcome>
          <InputContainer>{this.renderUsernameFiled()}</InputContainer>
          <InputContainer>{this.renderPasswordFiled()}</InputContainer>
          <Button type="submit">Login</Button>
          <ErrorMsg>{text}</ErrorMsg>
        </FormContainer>
      </MainContainer>
    )
  }
}
export default Login
