import AppRouter from "./router/AppRouter";
import AppProvider from "./app/AppProvider";


function App() {

  return (

    <AppProvider>

      <AppRouter />

    </AppProvider>

  );

}


export default App;