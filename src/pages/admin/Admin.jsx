import React, { useEffect, useRef, useState } from "react";
import productService from "../../services/product.service";
import ProductSave from "../../components/ProductSave";

const Admin = () => {
  const [productList, setProductList] = useState([]);
  const saveComponent = useRef();

  //버튼 클릭시 모달창 열기
  const createProductRequest = () => {
    //ProductSave 모달창의 showProductModal 함수 실행
    saveComponent.current?.showProductModal();
  };

  //제품 추가
  const saveProductWatcher = (p) => {
    const newList = productList.concat(p);
    setProductList(newList); //제품리스트 업데이트
  };

  useEffect(() => {
    productService.getAllProducts().then((response) => {
      setProductList(response.data);
    });
  }, []);

  return (
    <div className="container">
      <div className="card mt-5">
        <div className="card-header">
          <div className="row">
            <div className="col-6">
              <h3>모든 제품들</h3>
            </div>

            <div className="col-6 text-end">
              <button
                className="btn btn-primary"
                onClick={createProductRequest}
              >
                새 제품
              </button>
            </div>
          </div>
        </div>
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {productList.map((item, index) => (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.price} 원</td>
                  <td>{new Date(item.createTime).toLocaleString()}</td>
                  <td>
                    <button className="btn btn-primary me-1">수 정</button>
                    <button className="btn btn-danger">삭 제</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* 모달창 */}
      <ProductSave ref={saveComponent} onSaved={(p) => saveProductWatcher(p)} />
    </div>
  );
};

export default Admin;
