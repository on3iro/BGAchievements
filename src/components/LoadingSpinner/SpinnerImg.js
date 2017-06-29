import styled from 'styled-components'

import Img from 'components/Img'

const SpinnerImg = styled(Img)`
  width: ${props => props.controls ? '20px' : '80px'};
`

export default SpinnerImg
