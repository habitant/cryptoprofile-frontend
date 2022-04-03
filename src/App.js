import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "layouts/Admin.js";

function App() {
    return (
        <BrowserRouter>
            <Switch>
            <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
            <Redirect from="/" to="/admin/dashboard" />
            </Switch>
        </BrowserRouter>
    )
};

export default App;