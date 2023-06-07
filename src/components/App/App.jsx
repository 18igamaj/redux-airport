
import AirlinesForm from '../AirlinesForm/AirlinesForm'
import AirlinesList from '../AirlinesList/AirlinesList';
function App() {

  return (
    <div>
      <h1>Redux Airport</h1>
      {/* <input placeholder='Airline Name' />
      <button>Add Airline</button> */}
      <AirlinesForm />
      <table>{/* Airlines should be listed here */}</table>
      <AirlinesList />
    </div>
  );
}

export default App;
