import styled from '@emotion/styled'

interface IButtonProps {
  able: boolean
}

export const MyButton = styled.button`
  background-color: ${(props: IButtonProps) => (props.able === true ? 'yellow' : 'gray')};
  `

interface ITitleProps {
  titleCol: boolean
}

export const Title = styled.h1`
  color: ${(props: ITitleProps) => (props.titleCol === true ? 'darkgreen' : 'red')}
`
