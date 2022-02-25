import "./Tasks.css";
import { Container, ListGroup, Row, Card, Button } from "react-bootstrap";
import Task from "../tasks/Tasks";

function Tasks() {
  return (
    <>

<ul className="nav justify-content-end " >
          <li className="nav-item">
            <a className="nav-link active " href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">Work</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">Contact</a>
          </li>
         
        </ul>
      <Container>
        
        <div className="row ">
        <div className="col-12 welcome">
          <h2 className="h">Welcome !</h2>
        </div>
          <div className="col-8 text">
            <p>
              Laboris veniam id commodo imitarentur. Nescius multos hic deserunt
              comprehenderit, a do quem quid malis, aut legam nam legam ad lorem
              adipisicing possums tamen vidisse, fore quo ingeniis, enim o
              quibusdam id noster e pariatur tamen arbitror deserunt, ab et
              culpa incididunt. Labore deserunt a amet elit ubi ea ad elit nulla
              dolore, amet in appellat in esse, multos possumus is tractavissent
              de qui quo eram pariatur, dolore officia a praetermissum, quo quis
              cupidatat instituendarum non elit mentitum litters. Legam
              illustriora excepteur velit doctrina. Aut eu cillum quorum quis.
              Aliquip varias qui pariatur familiaritatem. Ne fugiat veniam nam
              vidisse, proident duis admodum.
            </p>
          </div>
          <div className="col-4 zalias">
            <p>
              - Laboris veniam id commodo imitarentur. - Aut legam nam legam ad
              lorem. - Labore deserunt a amet elit ubi - Ea ad elit nulla
              dolore, amet in appellat in esse. - Laboris veniam id commodo
              imitarentur. - Aut legam nam legam ad lorem. - Labore deserunt a
              amet elit ubi
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Tasks;
