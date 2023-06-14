import styled from 'styled-components'
import bgblue from './bgblue.png'

const ContainerPrincipal = styled.div`
  background-image: url(${bgblue});
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export function PaginaBaseFormulario() {

  return (
    <ContainerPrincipal></ContainerPrincipal>
  )
}