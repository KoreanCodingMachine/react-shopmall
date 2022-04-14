import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Detail.css';

function Detail(props) {
  let history = useHistory();

  let { id } = useParams(); //  {파라미터1,파라미터2...} , 구조분해

  let [alert, setAlert] = useState(true);
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

export default Detail;
