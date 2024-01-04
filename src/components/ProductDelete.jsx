import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Modal } from "react-bootstrap";

const ProductDelete = forwardRef((props, ref) => {
  const [show, setShow] = useState(false);

  //삭제하기 모달 : ref 객체를 전달하고 showDeleteModal()로 모달 표시
  useImperativeHandle(ref, () => ({
    showDeleteModal() {
      setShow(true); //모달창 열기를 밖에서 실행
    },
  }));

  const deleteProduct = () => {
    props.onConfirmed();
    setShow(false);
  };

  return (
    <Modal show={show}>
      <div className="modal-header">
        <h5 className="modal-title">Confirmation</h5>
        <button
          type="button"
          className="btn-close"
          onClick={() => setShow(false)}
        ></button>
      </div>

      <div className="modal-body">정말로 이 제품을 삭제하겠습니까?</div>

      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setShow(false)}
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
