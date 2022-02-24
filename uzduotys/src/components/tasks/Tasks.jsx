import "./Tasks.css";
import { Container, ListGroup, Row, Card, Button } from "react-bootstrap";
import Task from "../tasks/Tasks";

function Tasks() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Container>
        <div className="col-12 welcome">
          <h2 className="h">Welcome</h2>
        </div>
        <div className="row ">
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
