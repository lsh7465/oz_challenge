import { createContext, useMemo, useState } from "react";

const OrderContext = createContext();

export function OrderContextProvider(props) {
  const [orderCounts, setOrderCounts] = useState({
    products: new Map(),
    options: new Map(),
  });

  const value = useMemo(() => {
    return [{ ...orderCounts }];
  }, [orderCounts]);

  return <OrderContext.Provider value={value} {...props} />;
}
