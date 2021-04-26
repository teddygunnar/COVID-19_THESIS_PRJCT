import React from "react";
import styles from "./Dashboard.module.css";
import { Container, Grow } from "@material-ui/core";
import { Cards, Chart, CountryPicker } from "../";

import { fetchData } from "../../api";

class Dashboard extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    //fetch data
    const fetchedData = await fetchData(country);
    //set the state
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <Grow in>
        <Container className={styles.container}>
          <CountryPicker
            handleCountryChange={this.handleCountryChange}
            data={data}
            country={country}
          />
          <Cards data={data} country={country} />
          <Chart data={data} country={country} />
        </Container>
      </Grow>
    );
  }
}

export default Dashboard;
