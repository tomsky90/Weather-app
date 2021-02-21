const APIkey = "a401cd603ee800caa57e2a96c2193dbe";

class App extends React.Component {
  state = {
    value: "",
    date: "",
    city: "",
    temp: "",
    weather: "",
    error: false,
  };
  handleInput = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  handleSearch = (e) => {
    e.preventDefault();
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&units=metric&APPID=${APIkey}`;

    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("Nie udało sie");
      })
      .then((response) => response.json())
      .then((data) => {
        const todaydate = new Date().toLocaleString().slice(0, 10);
        const temperature = (data.main.temp * 1).toFixed(1);
        this.setState({
          date: todaydate,
          city: this.state.value,
          temp: temperature,
          weather: data.weather[0].description,
          error: false,
          value: "",
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          error: true,
          value: "",
          date: "",
          city: "",
          temp: "",
          weather: "",
        });
      });
  };
  render() {
    return (
      <div className="wrapper">
        <header>
          <h1>
            {this.state.error
              ? "Sorry we couldn't find your location"
              : this.state.city}
          </h1>
        </header>
        <main>
          <p className="date">{this.state.date}</p>
          <p className="temperature">
            {this.state.temp} {this.state.temp ? <span>&#176;C</span> : null}
          </p>
          <p className="weather">{this.state.weather}</p>
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
