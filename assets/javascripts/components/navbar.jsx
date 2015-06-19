import { Navbar, Nav } from 'react-bootstrap'
import { NavItemLink } from 'react-router-bootstrap'

export default class extends React.Component {
  render() {
    return (
      <Navbar brand='Training Motivator' inverse fixedTop>
        <Nav right>
        </Nav>
      </Navbar>
    )
  }
}
