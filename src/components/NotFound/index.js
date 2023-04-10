import {MainContainer, NotFoundImage, Heading, Para} from './styledComponents'

const NotFound = () => (
  <MainContainer className="not-found-container">
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png  "
      alt="not found"
      className="not-found"
    />
    <Heading className="not-found-heading">Page Not Found</Heading>
    <Para className="not-found-description">
      We are sorry, the page you requested could not be found.
    </Para>
  </MainContainer>
)

export default NotFound
