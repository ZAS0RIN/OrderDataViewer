import React, { useState } from 'react';
import axios from 'axios';
import OrderInput from './components/OrderInput';
import OrderDetails from './components/OrderDetails';

function App() {
  const [orderData, setOrderData] = useState(null);
  const [error, setError] = useState(null);

  const fetchOrderData = async (orderId) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/order/${orderId}`);
      console.log(response.data)
      setOrderData(response.data);
    } catch (error) {
      console.error("Ошибка при получении данных о заказе:", error);
      setOrderData(null);
    }
  };

  return (
    <div>
      <OrderInput onFetchOrder={fetchOrderData} />
      <OrderDetails order={orderData} />
    </div>
  );
}

export default App;