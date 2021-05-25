//8. Make this a class component
//9. When this component mounts get the country id from the url
import React from 'react';
import axios from 'axios';

class CountryDetails extends React.Component {
  state = {
      name: '',
      capital: '',
      area: '',
      borders: [] 
  };

  getCountry = async() => {
      const countryId = this.props.match.params.id;
      const country = await axios.get(
          `https://restcountries.eu/rest/v2/alpha/${countryId}`
      )
      
    this.setState({
        name: country.data.name,
        capital: country.data.capital,
        area: country.data.area,
        borders: country.data.borders
    })
  }
  async componentDidMount() {
    this.getCountry();
  }
    
//runs when there's a change on the state or on any prop
    componentDidUpdate(prevState, prevProps) {
        //To prevent an infinite loop
        if(prevProps !== this.props) {
            this.getCountry();
        }
    }


  render() {
    //11. Render the state
    const {name, capital, area, borders} = this.state;
    return (
        <>
            <h2>{name}</h2>
            <h4>{capital}</h4>
            <p>{area}</p>
        </>
    )
  }
}
export default CountryDetails