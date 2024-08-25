// src/components/Table.js
import React from 'react';
import { Table as MuiTable, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';

const Table = ({ title, data = [], columns = [], columnMappings = {}, onSelectRow }) => {
  return (
    <Paper style={{ width: '100%', overflowX: 'auto' }}>
      <h2>{title}</h2>
      <MuiTable>
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell key={index} style={{ fontWeight: 'bold' }}>{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow 
              key={row.id}
              hover
              onClick={() => onSelectRow && onSelectRow(row)}
              style={{ cursor: onSelectRow ? 'pointer' : 'default' }}
            >
              {columns.map((column, index) => (
                <TableCell key={index}>
                  {row[columnMappings[column] || column.toLowerCase().replace(/ /g, '_')]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </Paper>
  );
};

export default Table;




// import React from 'react';
// import { Table as MuiTable, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';

// const Table = ({ title, data = [], columns = [], onSelectRow }) => {
//   return (
//     <Paper style={{ width: '100%', overflowX: 'auto' }}>
//       <h2>{title}</h2>
//       <MuiTable>
//         <TableHead>
//           <TableRow>
//             {columns.map((column, index) => (
//               <TableCell key={index} style={{ fontWeight: 'bold' }}>{column}</TableCell>
//             ))}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((row) => (
//             <TableRow 
//               key={row.id}
//               hover
//               onClick={() => onSelectRow && onSelectRow(row)}
//               style={{ cursor: onSelectRow ? 'pointer' : 'default' }}
//             >
//               {columns.map((column, index) => (
//                 <TableCell key={index}>{row[column.toLowerCase().replace(/ /g, '_')]}</TableCell>
//               ))}
//             </TableRow>
//           ))}
//         </TableBody>
//       </MuiTable>
//     </Paper>
//   );
// };

// export default Table;



// // src/components/Table.js
// import React from 'react';
// import { Table as MuiTable, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';

// const Table = ({ title, data = [], columns = [] }) => {
//   return (
//     <Paper style={{ padding: 20 }}>
//       <h2>{title}</h2>
//       <MuiTable>
//         <TableHead>
//           <TableRow>
//             {columns.map((column, index) => (
//               <TableCell key={index}>{column}</TableCell>
//             ))}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((row, rowIndex) => (
//             <TableRow key={rowIndex}>
//               {columns.map((column, colIndex) => (
//                 <TableCell key={colIndex}>{row[column.toLowerCase()]}</TableCell>
//               ))}
//             </TableRow>
//           ))}
//         </TableBody>
//       </MuiTable>
//     </Paper>
//   );
// };

// export default Table;
