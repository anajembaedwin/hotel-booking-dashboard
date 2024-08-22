// src/components/CustomerList.js
import React from 'react';
import Table from './Table';

const CustomerList = ({ onSelectCustomer }) => {
  const customers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      address: '123 Main St, Springfield',
      membershipStatus: 'Gold',
      lastContacted: '2024-08-15',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '098-765-4321',
      address: '456 Elm St, Springfield',
      membershipStatus: 'Silver',
      lastContacted: '2024-08-10',
    },
    // Add more customer data here...
  ];

  const columns = [
    'ID', 
    'Name', 
    'Email', 
    'Phone', 
    'Address', 
    'Membership Status', 
    'Last Contacted'
  ];

  return (
    <div style={{ flex: 1, padding: '20px', boxSizing: 'border-box' }}>
      <Table
        title="Customers"
        columns={columns}
        data={customers}
        onSelectRow={onSelectCustomer}
      />
    </div>
  );
};

export default CustomerList;



// // src/components/CustomerList.js
// import React from 'react';

// const CustomerList = ({ onSelectCustomer }) => {
//   const customers = [
//     {
//       id: 1,
//       name: 'John Doe',
//       email: 'john@example.com',
//       phone: '123-456-7890',
//       address: '123 Main St, Springfield',
//       membershipStatus: 'Gold',
//       lastContacted: '2024-08-15',
//     },
//     {
//       id: 2,
//       name: 'Jane Smith',
//       email: 'jane@example.com',
//       phone: '098-765-4321',
//       address: '456 Elm St, Springfield',
//       membershipStatus: 'Silver',
//       lastContacted: '2024-08-10',
//     },
//     // Add more customer data here...
//   ];

//   return (
//     <div style={{ width: '45%' }}>
//       <h2>Customers</h2>
//       <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//         <thead>
//           <tr>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Email</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Phone</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Membership</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>LastContacted</th>
//           </tr>
//         </thead>
//         <tbody>
//           {customers.map((customer) => (
//             <tr key={customer.id} onClick={() => onSelectCustomer(customer)} style={{ cursor: 'pointer' }}>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{customer.name}</td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{customer.email}</td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{customer.phone}</td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{customer.membershipStatus}</td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{customer.lastContacted}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CustomerList;
