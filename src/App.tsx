import { Fragment } from "react";
// // import { Button } from "./components/button/Button";
// import { Navbar } from "./components/navbar/Navbar";
// import logo from './assets/exampleLogo2.png';
import FontStyles from "./components/fonts/FontStyles";
import { Button } from "./components/button/Button";
// import './components/fonts/FontStyles.css'

function App() {
    let linkLabels = [
        {
            label: 'About',
            linkTo: '',
            requireAuth: false
        },
        {
            label: 'Register',
            linkTo: '',
            requireAuth: false
        },
        {
            label: 'Log in',
            linkTo: '',
            requireAuth: false
        }
    ]

  return (
    <Fragment>
        <FontStyles/>
        {/* <Navbar logoPath={logo} label={"Brand Name"} linkLabels={linkLabels}/> */}
        <Button label={'Button'}/>
    </Fragment>
  );
}

export default App;