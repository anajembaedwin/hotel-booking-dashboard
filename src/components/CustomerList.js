// src/components/CustomerList.js
import React from 'react';
import Table from './Table';

const CustomerList = ({ onSelectCustomer }) => {
  // Dummy customer data
  const customers = [
    {
      _id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      address: '123 Main St, Springfield'
    },
    {
      _id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '098-765-4321',
      address: '456 Elm St, Springfield'
    },
    {
      _id: '3',
      name: 'Emily Johnson',
      email: 'emily.johnson@example.com',
      phone: '234-567-8901',
      address: '789 Oak St, Springfield'
    },
    {
      _id: '4',
      name: 'Michael Brown',
      email: 'michael.brown@example.com',
      phone: '345-678-9012',
      address: '101 Pine St, Springfield'
    }
  ];

  const columns = [
    'ID', 
    'Name', 
    'Email', 
    'Phone', 
    'Address'
  ];

  // Transform the customers array into the format expected by the Table component
  const data = customers.map(customer => ({
    id: customer._id,
    name: customer.name,
    email: customer.email,
    phone: customer.phone,
    address: customer.address || 'N/A'
  }));

  return (
    <div style={{ flex: 1, padding: '20px', boxSizing: 'border-box' }}>
      <Table
        title="Customers"
        columns={columns}
        data={data}
        onSelectRow={onSelectCustomer}
      />
    </div>
  );
};

export default CustomerList;




// import React from 'react';
// import Table from './Table';

// const CustomerList = ({ customers = [], onSelectCustomer }) => { // Provide default value as empty array
//   const columns = [
//     'ID', 
//     'Name', 
//     'Email', 
//     'Phone', 
//     'Address'
//   ];

//   // Transform the customers array into the format expected by the Table component
//   const data = customers.map(customer => ({
//     id: customer._id, // Ensure this matches your schema field names
//     name: customer.name,
//     email: customer.email,
//     phone: customer.phone,
//     address: customer.address || 'N/A' // Provide default value if address is not present
//   }));

//   return (
//     <div style={{ flex: 1, padding: '20px', boxSizing: 'border-box' }}>
//       <Table
//         title="Customers"
//         columns={columns}
//         data={data}
//         onSelectRow={onSelectCustomer}
//       />
//     </div>
//   );
// };

// export default CustomerList;





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
