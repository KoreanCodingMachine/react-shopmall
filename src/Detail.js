import { React, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

function Detail(props) {
  useEffect(() => {
    setTimeout(() => {}, 2000);
  });

  let [alert, alert변경] = useState(true);

  let { id } = useParams();
  let history = useHistory(); // 방문기록을 저장해놓은 history
  let 찾은상품 = props.shoes.find(function (상품) {
    return 상품.id == id;
  });

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <img
            src='https://codingapple1.github.io/shop/shoes1.jpg'
            width='100%'
            alt='사진'
          />
        </div>
        <div className='col-md-6 mt-4'>
          <h4 className='pt-5'>{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className='btn btn-danger'>주문하기</button>
          <button
            className='btn btn-danger'
            onClick={() => {
              history.goBack();
              //history.push('/')
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
