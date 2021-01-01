import React from 'react'
import './App.css';
import {Card, CardBody} from "skp-react-basics";
import 'skp-react-basics/dist/index.css'
import {Accordion, ElevatedCard} from "./components/ElevatedCard";
function App() {
  return (
    <div className="App">
      <Card>
        <CardBody>
            <div className="grid">
                <div>
                    <h2>
                        Questions And Answers About Login
                    </h2>
                </div>
                <div>
                    <ElevatedCard>
                        <Accordion title={"Do I have to allow the use of cookes?"}>
                            Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.
                        </Accordion>
                    </ElevatedCard>

                    <ElevatedCard>
                        <Accordion title={"How do I change my My Page password?"}>
                            Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.
                        </Accordion>
                    </ElevatedCard>

                    <ElevatedCard>
                        <Accordion title={"What is BankID?"}>
                            Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.
                        </Accordion>
                    </ElevatedCard>

                    <ElevatedCard>
                        <Accordion title={"Whose birth number can I use?"}>
                            Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.
                        </Accordion>
                    </ElevatedCard>

                    <ElevatedCard>
                        <Accordion title={"When do I recieve a password ordered by letter?"}>
                            Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan
                        </Accordion>
                    </ElevatedCard>
                </div>
            </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default App;
