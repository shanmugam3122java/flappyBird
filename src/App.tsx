import ListGroup from "./components/ListGroup";
import FingerprintJS from '@fingerprintjs/fingerprintjs';
// import macaddress from 'macaddress';

function App(){

  const fpPromise = FingerprintJS.load();
  
  fpPromise.then(fp => {
    fp.get().then(result => {
      const visitorId = result.visitorId;
      console.log(visitorId); // Use this as a pseudo-unique ID
    });  
  });

  // macaddress.all((err, all) => {
  //   console.log(all); // Lists all network interfaces and their MAC addresses
  // });

  return <div><ListGroup/></div>
}

export default App;

