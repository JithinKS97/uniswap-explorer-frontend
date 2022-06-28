import Transactions from "../src/components/transactions";
import Layout from "../src/components/layout";

export default function TransactionsPage() {
  return (
    <Layout heading={"Transactions"}>
      <Transactions />
    </Layout>
  );
}
