import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #152850;
  min-height: 100vh;
  max-height: 100%;
  font-family: 'Roboto';
`

export const ImageContainer = styled.div`
  background-color: #e0eefe;
  height: 100vh;
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 10px;
`

export const Image = styled.img`
  height: 80vh;
`

export const FormContainer = styled.form`
  background-color: #ffffff;
  height: 100vh;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
  border-radius: 10px;
`

export const Welcome = styled.h1`
  font-weight: 800;
  font-size: 45px;
  margin-left: 30px;
  color: #183b56;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  border-radius: 5px;
  border-color: transparent;
  margin-bottom: 10px;
`

export const Label = styled.label`
  font-size: 15px;
  font-weight: 600;
  color: #5a7184;
  padding: 5px;
`
export const Input = styled.input`
  font-size: 15px;
  padding: 10px;
  width: 450px;
  border-color: #c3cad9;
  border-radius: 5px;
`
export const Button = styled.button`
  width: 450px;
  background-color: #1565d8;
  color: #f8fafc;
  padding: 15px;
  border-radius: 6px;
  border-color: transparent;
  font-size: 15px;
  margin-left: 30px;
  margin-top: 25px;
`

export const ErrorMsg = styled.p`
  text-align: center;
  font-size: 10px;
  color: #ff0b37;
`
