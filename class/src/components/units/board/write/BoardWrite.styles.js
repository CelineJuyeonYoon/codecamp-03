import styled from '@emotion/styled'

export const MyButton = styled.button`
  background-color: ${(props) => (props.qqq === true ? 'yellow' : 'gray')}
`

export const Title = styled.h1`
  color: ${(props) => (props.zzz === true ? 'blue' : 'pink')};
`
