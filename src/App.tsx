import RouterConfig from "./router/RouterConfig";
import { TodosProvider } from './providers/TodosProvider';


const App = () => {
  return (
    <TodosProvider> {/* Set provider */}
      <RouterConfig />
    </TodosProvider>
  );
}

export default App;
