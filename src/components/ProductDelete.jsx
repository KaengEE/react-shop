import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Modal } from "react-bootstrap";
import Product from "../models/Product";

const ProductDelete = forwardRef((props, ref) => {
  const [show, setShow] = useState(false);

  //삭제하기 모달 : ref 객체를 전달하고 showDeleteModal()로 모달 표시
  useImperativeHandle(ref, () => ({
    showDeleteModal() {
      setShow(true); //모달창 열기를 밖에서 실행
    },
  }));

  const deleteProduct = () => {
    props.onConfirmed(); //선택된 제품이 삭제됨
    props.setProduct(new Product("", "", 0)); //초기화
    setShow(false); //모달 닫기
  };

  //닫기버튼 클릭시 모달창 닫기 및 state 초기화
  const closeModal = () => {
    setShow(false);
    props.setProduct(new Product("", "", 0)); //초기화
  };

  return (
    <Modal show={show}>
      <div className="modal-header">
        <h5 className="modal-title">Confirmation</h5>
        <button
          type="button"
          className="btn-close"
          onClick={closeModal}
        ></button>
      </div>

      <div className="modal-body">정말로 이 제품을 삭제하겠습니까?</div>

      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={closeModal}
        >
          취소
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={deleteProduct}
        >
          삭제확인
        </button>
      </div>
    </Modal>
  );
});

export default ProductDelete;
