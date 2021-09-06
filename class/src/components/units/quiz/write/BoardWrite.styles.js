import styled from '@emotion/styled'

export const Writer = styled.input`
  
`
export const Title = styled.input`

`
export const Content = styled.input`

`
export const SubmitBtn = styled.button`
  background-color: ${(props) => (props.BTO === true ? 'yellow' : 'gray')}
`