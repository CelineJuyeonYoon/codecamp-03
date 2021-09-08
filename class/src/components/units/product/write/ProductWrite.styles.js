import styled from '@emotion/styled'

export const Wrapper = styled.div`

`
export const Title = styled.div`
  color: ${(props) => (props.isEdit ? 'orange' : 'darkgreen')};
`
export const Column = styled.input`

`