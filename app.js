class App extends React.Component {
  state = {
    value: "",
  };
  handleInput = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  handleSearch = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="wrapper">
        <header>
          <h1>London</h1>
        </header>
        <main>
          <p className="date">01-02-2021</p>
          <p className="temperature">30*C</p>
          <p className="weather">Clouds</p>
        </main>
        <form onSubmit={this.handleSearch}>
          <label forhtml="city-Input">
            <input
              id="city-Input"
              type="text"
              value={this.state.value}
              placeholder="SEARCH FOR A CITY"
              onChange={this.handleInput}
            />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </label>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
