/*eslint-disable*/
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import React, { useState, useContext } from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Data from './data.js';
import Detail from './Detail.js';
import Cart from './Cart.js';
import axios from 'axios';

export let 재고context = React.createContext();

function App() {
  let [shoes, setShoes] = useState(Data);
  let [재고, 재고변경] = useState([10, 11, 12]);
  return (
    <div className='app'>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>Shoe Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link as={Link} to='/'>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to='/detail'>
                Detail
              </Nav.Link>
              <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route path='//'>
          <div className='jumbotron'>
            <h1 style={{ paddingTop: '5%' }}>20% Season Off</h1>
            <p style={{ paddingTop: '2%' }}>
              신발을 사면 걸을때마다 기분이 좋아집니다.
            </p>
            <p style={{ paddingTop: '5%' }}>
              <Button variant='primary'>난 버튼이라고해</Button>
            </p>
          </div>
          <div className='container'>
            <재고context.Provider value={재고}>
              <div className='row'>
                {shoes.map((a, i) => {
                  return <Item shoes={shoes[i]} i={i} />;
                })}
              </div>
            </재고context.Provider>
          </div>
          <button
            className='btn btn-primary'
            onClick={() => {
              axios
                .get('https://codingapple1.github.io/shop/data2.json')
                .then((result) => {
                  console.log(result);
                  setShoes([...shoes, ...result.data]);
                })
                .catch(() => {
                  console.log(error);
                });
            }}
          >
            더보기
          </button>
        </Route>
        <Route path='/detail/:id'>
          <재고context.Provider value={재고}>
            <Detail shoes={shoes} />
          </재고context.Provider>
        </Route>
        {/* <Route path='/:id'>
          <p>새로 만든 Route입니다.</p>
        </Route> */}
        <Route path='/cart'>
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

function Item(props) {
  let 재고 = useContext(재고context);

  return (
    <div className='col-md-4'>
      <img
        src={
          'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'
        }
        width='100%'
      />
      <h4 style={{ textAlign: 'center' }}>{props.shoes.title}</h4>
      <p style={{ textAlign: 'center' }}>
        {props.shoes.content} & {props.shoes.price}
      </p>
      <Info />
    </div>
  );
}

function Info() {
  let 재고 = useContext(재고context);
  return <p style={{ textAlign: 'center' }}> 재고 : {재고[0]} </p>;
}
export default App;
