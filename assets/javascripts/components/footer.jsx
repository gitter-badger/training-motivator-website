import { Navbar, Nav, NavItem } from 'react-bootstrap'

export default class extends React.Component {
  constructor() {
    super();
    this.API_URL = environment.HOST
  }

  currentYear() {
    return new Date().getFullYear()
  }

  render() {
    return (
      <Navbar fixedBottom>
        <Nav>
          <NavItem className='current-year' href='https://2015.battlehack.org/berlin'>&copy; BattleHack Berlin {this.currentYear()}</NavItem>
        </Nav>
        <Nav right>
          <NavItem href={this.API_URL}>API</NavItem>
        </Nav>
      </Navbar>
    )
  }
}
