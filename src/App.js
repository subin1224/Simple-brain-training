import "./App.css";
import { PageLayout } from "./components/PageLayout";
import { Txt } from "./components/Txt";
import { Button } from "./components/Button";

function App() {
  return (
    <>
      <PageLayout>
        <Txt typography="h1">Simple Brain Training</Txt>
        <Button>Start</Button>
      </PageLayout>
    </>
  );
}

export default App;
