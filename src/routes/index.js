import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Teresina from "../pages/Teresina";
import SaoPaulo from "../pages/Teresina";
import RioDeJaneiro from "../pages/Teresina";

const Routes = props => {
    return (
        <Router>
            <Switch>
                {/*<Route path="/:state/:city" element={<Home />} />*/}
                <Route path="/pi/teresina" element={<Teresina city={props.city} />} />
                <Route path="/sp/sao-paulo" element={<SaoPaulo city={props.city} />} />
                <Route path="/rj/rio-de-janeiro" element={<RioDeJaneiro city={props.city} />} />
            </Switch>
        </Router>
    )
}

export default Routes