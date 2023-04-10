import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to bottom, #152850, #183b56);
  min-height: 100vh;
  max-height: 100%;
`

export const LogoLogoutContainer = styled.div`
  display: flex;
  margin: 10px;
  justify-content: space-between;
`
export const Logo = styled.button`
  height: 100px;
  width: 100px;
  border-radius: 5px;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
`
export const LogoutButton = styled.button`
  height: 50px;
  font-size: 14px;
  padding: 15px;
  color: #c3cad9;
  width: 100px;
  border-radius: 5px;
  background-color: transparent;
  border-color: #c3cad9;
  cursor: pointer;
`
export const Heading = styled.h1`
  text-align: center;
  font-size: 45px;
  font-weight: 800;
  color: #ffffff;
`

export const Card = styled.img`
  align-items: center;
  width: 650px;
  height: 650px;
  margin: auto;
`
