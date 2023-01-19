import { generateMock } from "@anatine/zod-mock";
import { OrderComponents } from "@reservoir0x/sdk/dist/seaport/types";
import { Wallet } from "ethers";
import { chainId } from "../../src/eth";
import { SEAPORT_ORDER_SCHEMA } from "../../src/validation/schemas";
import * as Sdk from "@reservoir0x/sdk";

export async function mockOrders(user: Wallet, numberOfOrders: number): Promise<[OrderComponents[], string[]]> {
  const orders: OrderComponents[] = [];
  const orderHashes: string[] = [];

  for (let i = 0; i < numberOfOrders; i++) {
    const orderData = generateMock(SEAPORT_ORDER_SCHEMA);
    orderData.offerer = user.address;
    const order = new Sdk.Seaport.Order(chainId, orderData);
    await order.sign(user);
    const orderHash = await order.hash();
    orderHashes.push(orderHash);
    orders.push(order.params);
  }

  return [orders, orderHashes];
}

export async function mockReplacementOrders(user: Wallet, salts: string[]): Promise<OrderComponents[]> {
  const orders: OrderComponents[] = [];

  for (let i = 0; i < salts.length; i++) {
    const orderData = generateMock(SEAPORT_ORDER_SCHEMA);
    orderData.offerer = user.address;
    if (salts[i]) {
      orderData.salt = salts[i];
    }
    const order = new Sdk.Seaport.Order(chainId, orderData);
    await order.sign(user);
    orders.push(order.params);
  }

  return orders;
}