import RouterConfig from "./router/RouterConfig";
import { TodosProvider } from './components/providers/TodosProvider';


const App = () => {
  return (
    <TodosProvider> {/* Set provider */}
      <RouterConfig />
    </TodosProvider>
  );
}

export default App;
