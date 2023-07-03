import {useState} from 'react'
import {
  AppContainer,
  Title,
  Desc,
  Image,
  Description,
  Button,
  ReadMoreContainer,
} from './styledComponents'

const ReadMore = props => {
  const [readMore, setRead] = useState(false)

  const {reactHooksDescription} = props
  const slicedDesc = reactHooksDescription.slice(0, 170)
  const onChangeBtn = () => {
    setRead(prevState => !prevState)
  }
  return (
    <AppContainer>
      <ReadMoreContainer>
        <Title>React Hooks</Title>
        <Desc>Hooks are a new addition to React</Desc>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Description>
          {readMore ? reactHooksDescription : slicedDesc}
        </Description>
        <Button type="button" onClick={onChangeBtn}>
          {readMore ? 'Read Less' : 'Read More'}
        </Button>
      </ReadMoreContainer>
    </AppContainer>
  )
}

export default ReadMore
