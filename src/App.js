import UseRefExample1 from "./components/UseRefExample1";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserRefExample2 from "./components/UserRefExample2";
import UseRefExample3 from "./components/UseRefExample3";
import UseMemoExample from "./components/UseMemoExample";
import UseCallbackExample from "./components/UseCallbackExample";
import CustomHookExample from "./components/CustomHookExample";
import CustomHookExample2 from "./components/CustomHookExample2";
function App() {
  return (
    <div className="container mt-5">
      {/*  <UseRefExample1 />
      <UserRefExample2 /> 
      <UseRefExample3 />
      <UseMemoExample />
      <UseCallbackExample />
      <CustomHookExample />*/}
      <CustomHookExample2 />
    </div>
  );
}

export default App;
