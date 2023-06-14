import styled from 'styled-components'
import bgblue from './bgblue.png'
import { Outlet } from 'react-router-dom'

const ContainerPrincipal = styled.div`
  background-image: url(${bgblue});
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const Container = styled.div`
  background-color: white;
  width: 50vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export function PaginaBaseFormulario() {

  return (
    <ContainerPrincipal>
      <Container>
        <Outlet />
      </Container>
    </ContainerPrincipal>
  )
}