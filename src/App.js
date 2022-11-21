
import './App.css';
import Details from './Details';

function App() {
  let data=[
    {
      name:"bharath krishna",
      email:"bharathkrish@gmail.com",
      mobile:"8075851386"
    },
    {
      name:"baba",
      email:"babakrish@gmail.com",
      mobile:"5576788663"
    },
    {
      name:"sree kuttan",
      email:"kuttan@gmail.com",
      mobile:"74376678210"
    }
  ]
  return <>
    <Details data={data}/>
  </>
 
}

export default App;