import { Card } from "./components/Card";
import Header from "./Header";
import Navbar from "./components/Navbar";
import NavLink from "./components/NavLink";
import ShopCart from "./components/ShopCart";

function App() {
  return (
    <div>
      <Header />
      <Navbar name="Donutopia" logo="logo.png">
        <NavLink link="Donuts" />
        <NavLink link="Sobre" />
        <NavLink link="Contato" />
      </Navbar>

      <ShopCart />

      <div className="content">
        <div className="container my-5">
          <h1>Bem-vindo a Donutopia!</h1>
          <p>
            Um lugar mágico e saboroso, onde todos os seus desejos de donuts se
            tornam realidade!
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <Card img="donut-choco.png" sabor="Donut de chocolate">
                Feito com os melhores ingredientes, este donut de chocolate é
                irresistível.
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <Card img="donut-morango.png" sabor="Donut de morango">
                Feito com morangos frescos, este donut é a escolha perfeita para
                quem ama frutas.
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <Card img="donut-baunilha.png" sabor="Donut de baunilha">
                Este donut de baunilha é simples e delicioso.
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <Card img="donut-limao.png" sabor="Donut de limão">
                Refrescante e ácido, este donut de limão é uma ótima opção para
                o verão.
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <Card img="donut-ninho.png" sabor="Donut de leite ninho">
                Feito com leite ninho, este donut é a escolha perfeita para quem
                ama um sabor suave e cremoso.
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <Card img="donut-doceleite.png" sabor="Donut de doce de leite">
                Feito com doce de leite cremoso, este donut é a escolha perfeita
                para quem ama um sabor doce e suave.
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
