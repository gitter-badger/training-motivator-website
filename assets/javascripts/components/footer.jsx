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
        <span className='current-year'>&copy; {this.currentYear()}</span>
      </section>
    )
  }
}
