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
      <section>
        <a className='current-year' href='http://kamil.lelonek.me/'>&copy; {this.currentYear()} Kamil Lelonek</a>
        <br />
        <a href={this.API_URL}>API</a>
      </section>
    )
  }
}
