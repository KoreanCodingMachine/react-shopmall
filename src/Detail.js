import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { 재고context } from './App.js';
import { CSSTransition } from 'react-transition-group';
import './Detail.css';

function Detail(props) {
  let history = useHistory();

  let { id } = useParams(); //  {파라미터1,파라미터2...} , 구조분해

  let 재고 = useContext(재고context);
  let [스위치, 스위치변경] = useState(false);

  let [alert, setAlert] = useState(true);
  let [tab, setTab] = useState(0);
  let findItem = props.shoes.find((item) => {
    return item.id == id;
  });

  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className='container'>
      <Nav variant='tabs' defaultActiveKey='link-0'>
        <Nav.Item>
          <Nav.Link
            eventKey='link-0'
            onClick={() => {
              스위치변경(false);
              setTab(0);
            }}
          >
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey='link-1'
            onClick={() => {
              스위치변경(false);
              setTab(1);
            }}
          >
            Option 2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <CSSTransition in={스위치} classNames='wow' timeout={500}>
        <Tabcontent tab={tab} 스위치변경={스위치변경} />
      </CSSTransition>

      <div className='row'>
        {alert === true ? (
          <div className='box'>
            <span className='box-title'>재고가 얼마 남지 않았습니다.</span>
          </div>
        ) : null}
      </div>

      <div className='row'>
        <div className='col-md-6'>
          <img
            src='https://codingapple1.github.io/shop/shoes1.jpg'
            width='100%'
            alt='img'
          />
        </div>
        <div className='col-md-6 mt-4'>
          <h4 className='pt-5'>{findItem.title}</h4>
          <p>{findItem.content}</p>
          <p>{findItem.price}</p>
          <p>재고:{재고[0]}</p>
          <button className='btn btn-danger'>주문하기</button>
          <button
            onClick={() => {
              history.push('/');
            }}
            className='btn btn-danger'
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

function Tabcontent(props) {
  useEffect(() => {
    props.스위치변경(true); //탭내용 컴포넌트가 로드될 때 true
  });

  if (props.tab === 0) {
    return <div>0번째 내용입니다.</div>;
  } else if (props.tab === 1) {
    return <div>1번째 내용입니다.</div>;
  } else if (props.tab === 2) {
    return <div>내용2</div>;
  }
}
export default Detail;
