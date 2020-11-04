// Задание первого уровня 2
// Есть объединение (юнион) типов заказов в различных состояниях
// Нужно заменить FIXME на тип который достанет из Order все возможные состояния (state)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
//type FIXME = "initial" | "inWork" | "buyingSupplies" | "producing" | "fullfilled" | "fullfilled";
type FIXME = Readonly<Order["state"]>;

type OrderInitial = {
  state: "initial";
  sum: number;
}

type OrderInWork = {
  state: "inWork";
  sum: number;
  workerId: number;
}

type OrderBuyingSupplies = {
  state: "buyingSupplies";
  sum: number;
  workerId: number;
  suppliesSum: number;
}

type OrderProducing = {
  state: "producing";
  sum: number;
  workerId: number;
  suppliesSum: number;
  produceEstimate: Date;
}

type OrderFullfilled = {
  state: "fullfilled";
  sum: number;
  workerId: number;
  suppliesSum: number;
  produceEstimate: Date;
  fullfillmentDate: Date;
}

// Discriminated union. Discriminant: state
type Order = OrderInitial | OrderInWork | OrderBuyingSupplies | OrderProducing | OrderFullfilled;  

export const getOrderState = (order: Order): FIXME => order.state;