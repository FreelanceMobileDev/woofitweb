import { ArchivedIcon, FilterIcon, SearchIcon, } from '../../../public';
import styles from './Login.module.css';

const PaymentsContant = ({ setSelectedItem }) => {
  const transactions = [
    { name: 'Franky Williamson', txnId: '79120283', date: 'May 31, 2015', amount: '$19.00', status: 'Success' },
    { name: 'Bronson Glass', txnId: '79116801', date: 'May 31, 2015', amount: '$90.00', status: 'Failed' },
    { name: 'Chris Craig', txnId: '79118698', date: 'May 31, 2015', amount: '$18.00', status: 'Success' },
    { name: 'Declan Mcgowan', txnId: '79214079', date: 'May 31, 2015', amount: '$63.00', status: 'Failed' },
    { name: 'Kris Davis', txnId: '79212231', date: 'May 31, 2015', amount: '$2.00', status: 'Success' },
    { name: 'Maddox Cameron', txnId: '79118698', date: 'May 31, 2015', amount: '$39.00', status: 'Pending' },
    { name: 'Millie Jones', txnId: '79120283', date: 'May 31, 2015', amount: '$55.00', status: 'Success' },
    { name: 'Ash Lowe', txnId: '79214204', date: 'May 31, 2015', amount: '$73.00', status: 'Pending' },
    { name: 'Kenna Tate', txnId: '79212231', date: 'May 31, 2015', amount: '$20.00', status: 'Success' }
  ];
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className={styles.PaymentsHeaderdiv}>
        <div className={styles.Paymentstxtt}>Payments</div>
        <div style={{display:'flex',alignItems:'center',}}>
        <div className={styles.Add_Client} onClick={() => { setSelectedItem('InvoiceCreate') }}>Create Invoice</div>
        <div style={{ display: 'flex', marginLeft: 30 }}>
          <SearchIcon />
          <div style={{ width: 40 }} />
          <FilterIcon />
        </div>
      </div>
      </div>
      <div>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th ><input className={styles.checkbox} type="checkbox" /></th>
                <th className={styles.headerCell} >Name</th>
                <th className={styles.headerCell}>Txn ID</th>
                <th className={styles.headerCell}>Date</th>
                <th className={styles.headerCell}>Amount</th>
                <div className={styles.headerCell}>Status</div>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td ><input type="checkbox" className={styles.checkbox} /></td>
                  <td className={styles.cellname}>{transaction.name}</td>
                  <td className={styles.cell}>{transaction.txnId}</td>
                  <td className={styles.cell}>{transaction.date}</td>
                  <td className={styles.cellname}>{transaction.amount}</td>
                  <td className={styles.cellname}>
                    <div className={`${styles.status} ${styles[transaction.status.toLowerCase()]}`}>
                      {transaction.status}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default PaymentsContant