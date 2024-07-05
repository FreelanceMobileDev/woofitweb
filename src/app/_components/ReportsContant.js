import {  Downarrow, EarningsIcon, FilterIcon, LeftArrow, NewClients, Rightarrow, SearchIcon, Sessionsimg, } from '../../../public';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import styles from './Login.module.css';
const ReportsContant = () => {
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
      const visitsData = [
        { client: 'Katie Poole', paid: 2, visited: 4, balance: 4 },
        { client: 'Ash Lowe', paid: 4, visited: 4, balance: 4 },
        { client: 'Daniel Wilson', paid: 9, visited: 4, balance: 1 },
        { client: 'Chris Craig', paid: 3, visited: 5, balance: 2 },
        { client: 'Carmen Ewing', paid: 1, visited: 4, balance: 5 },
        { client: 'Charlie Gray', paid: 4, visited: 5, balance: 3 },
        { client: 'Morgan Warren', paid: 1, visited: 4, balance: 8 },
        { client: 'Monroe Benjamin', paid: 2, visited: 6, balance: 1 },
        { client: 'Declan Mcgowan', paid: 3, visited: 2, balance: 5 },
        // Add more rows as needed
      ];
      const data = {
        labels: ['1 Aug', '5 Aug', '10 Aug', '15 Aug', '20 Aug', '25 Aug', '30 Aug'],
        datasets: [
          {
            label: 'Earnings',
            data: [2000, 4000, 3000, 4000, 3000, 3500, 2500],
            fill: true,
            borderColor: '#14AED1',
            backgroundColor: 'rgba(20, 174, 209, 0.1)',
            pointBackgroundColor: '#14AED1',
            pointBorderColor: '#14AED1',
            pointHoverBackgroundColor: '#14AED1',
            pointHoverBorderColor: '#14AED1',
            tension: 0.4,
          },
        ],
      }; 
      const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: '#A1A1A1',
            },
          },
          y: {
            grid: {
              color: '#8D99AE26',
            },
            ticks: {
              color: '#A1A1A1',
              callback: (value) => `$${value / 1000}K`,
            },
          },
        },
      };
    return (
        <div className={styles.DashboardContent}>
            <div className={styles.summaryReports}>
            <div className={styles.reportheaderdashboardContent}>
          <div style={{ display: 'flex', alignItems: 'center', }}><LeftArrow /> <h2 className={styles.month_year_txt}>August 2024</h2>
            <Rightarrow />
          </div>
          <div className={styles.row}>
          <div className={styles.dateSelector}>
            <div className={styles.Monthlytxt}>Monthly</div> <Downarrow />
          </div>
          <SearchIcon/>
          <FilterIcon/>
        </div>
        </div>
        <div className={styles.reportdashboard}>
          <div className={styles.summaryCarddashboard} style={{ backgroundColor: '#E3FACF' }}>
            <div className={styles.Total_Earnings_card}>
              <p className={styles.Total_Earnings} style={{ color: '#67C537' }} >Total Earnings</p>
              <EarningsIcon />
            </div>
            <div className={styles.Eraning_price}>$7,216</div>
          </div>
          <div className={styles.summaryCarddashboard} style={{ backgroundColor: '#CFF3FD' }}>
            <div className={styles.Total_Earnings_card}>
              <div className={styles.Total_Earnings} style={{ color: '#14AED1' }} >New Clients</div>
              <NewClients />
            </div>
            <div className={styles.Eraning_price}>165</div>
          </div>
          <div className={styles.summaryCarddashboard} style={{ backgroundColor: '#E0EAFE' }}>
            <div className={styles.Total_Earnings_card}>
              <div className={styles.Total_Earnings} style={{ color: '#5465F0' }} >Sessions</div>
              <Sessionsimg />
            </div>
            <div className={styles.Eraning_price}>20</div>
          </div>
        </div>
        <div className={styles.chartContainer}>
      <h2 className={styles.title}>Earnings</h2>
      <Line data={data} options={options} />
    </div>

        <div style={{ backgroundColor: "white" }}>
            <div className={styles.PaymentsHeaderdiv}>
                <div className={styles.Paymentstxtt}>Payments</div>
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
            <th className={styles.headerCell} >Status</th>
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


            </div>
         
            <div className={styles.sidetableContainer}>
      <div className={styles.title}>Visits</div>
      <table className={styles.sidetable}>
        <thead>
          <tr>
            <th className={styles.sideheaderCell}>Client</th>
            <th className={styles.sideheaderCell}>Paid</th>
            <th className={styles.sideheaderCell}>Visited</th>
            <th className={styles.sideheaderCell}>Balance</th>
          </tr>
        </thead>
        <tbody>
          {visitsData.map((visit, index) => (
            <tr key={index} >
              <td className={styles.sidecellname}>{visit.client}</td>
              <td className={styles.sidecell}>{visit.paid}</td>
              <td className={styles.sidecell}>{visit.visited}</td>
              <td className={styles.sidecell}>{visit.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
   
  
            </div>
        </div>
    )
}

export default ReportsContant