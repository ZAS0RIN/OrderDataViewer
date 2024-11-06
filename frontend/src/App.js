import React, { useState } from 'react';
import axios from 'axios';
import OrderInput from './components/OrderInput';
import Error from './components/Error';
import OrderDetails from './components/OrderDetails';

function App() {
  const [orderData, setOrderData] = useState(null);
  const [error, setError] = useState(null);

  function closeError(){
    setError(null)
  }

  const fetchOrderData = async (orderId) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/order/${orderId}`);
      console.log(response.data)
      setError(null)
      setOrderData(response.data);
    } catch (error) {
      setOrderData(null);
      setError(error.response.data?.detail || 'Ошибка при получении данных о заказе');
    }
  };

  return (
    <div>
      <h2 className={'appTitle'}> Прософт-системы</h2>
      <OrderInput onFetchOrder={fetchOrderData} />
      <OrderDetails order={orderData} />
      <Error message={error} onClose={closeError} />
    </div>
  );
}

export default App;