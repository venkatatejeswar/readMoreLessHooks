import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const ReadMoreContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const Title = styled.h1`
  color: #1e293b;
  font-size: 28px;
  font-weight: 700;
  font-family: 'Roboto';
`

export const Desc = styled.p`
  color: #334155;
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
`
export const Image = styled.img`
  width: 95%;
  height: 280px;
`
export const Description = styled.p`
  color: #334155;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  font-family: 'Roboto';
`
export const Button = styled.button`
  min-width: 100px;
  padding: 12px;
  background-color: #1f81ff;
  color: #ffffff;
  font-size: 14px;
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 6px;
  font-weight: 500;
`
