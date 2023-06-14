import styled from "styled-components"

interface CampoDigitacaoProps {
  tipo: string
  valor: string
  placeholder: string
  onChange: (value: string) => void
  label?: string
}

const Campo = styled.input`
  background-color: #f0f0f0;
  margin: 1em 0;
  box-sizing: border-box;
  box-shadow: 2px 2px 6px rgba(0,0,0, 0.25);
  border-radius: 8px;
  border: none;
  width: 100%;
  padding: 16px;

  &:focus {
    outline: none;
    border: none;
  }
`
const Rotulo = styled.label`
  display: block;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: var(--azul-escuro);
`
const Container = styled.div`
  width: 100%;
`

export function CampoDigitacao({ tipo, valor, placeholder, onChange, label }: CampoDigitacaoProps) {
  return (
    <Container>
      <Rotulo htmlFor="">{label}</Rotulo>
      <Campo
        type={tipo}
        value={valor}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
        required
      />
    </Container>
  )
}