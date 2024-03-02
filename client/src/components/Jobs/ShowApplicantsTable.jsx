import React from 'react'
import GridTable from '@nadavshaar/react-grid-table';
// custom cell component
const Username = ({ tableManager, value, field, data, column, colIndex, rowIndex }) => {
    return (
        <div className='rgt-cell-inner '
            style={{
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                padding: '40px',
            }}
        >
            <span className='rgt-text-truncate row-hover' style={{ marginLeft: 10 }}>{value}</span>
        </div>
    )
}

const CustomHeader = ({ column }) => {
    return (
        <div style={{ backgroundColor: 'black', color: 'white' }}>
            {column.label}
        </div>
    )
}
const rows = [
    {
        "id": 1,
        "username": "John Doe",
        "gender": "Male",
        "last_visited": "12/08/2019",
        "test": { "x": 1, "y": 2 },
        "email": "john.doe@example.com",
        "country_code": "+1",
        "phone": "1234567890"
    },
    {
        "id": 2,
        "username": "Jane Smith",
        "gender": "Female",
        "last_visited": "15/07/2020",
        "test": { "x": 3, "y": 4 },
        "email": "jane.smith@example.com",
        "country_code": "+1",
        "phone": "0987654321"
    },
    {
        "id": 3,
        "username": "Bob Johnson",
        "gender": "Male",
        "last_visited": "22/05/2021",
        "test": { "x": 5, "y": 6 },
        "email": "bob.johnson@example.com",
        "country_code": "+1",
        "phone": "1122334455"
    },
    {
        "id": 4,
        "username": "Alice Williams",
        "gender": "Female",
        "last_visited": "30/01/2022",
        "test": { "x": 7, "y": 8 },
        "email": "alice.williams@example.com",
        "country_code": "+1",
        "phone": "5566778899"
    },
    // more applicants...
];

const columns = [
    {
        id: 1,
        field: 'username',
        label: 'Username',
        cellRenderer: Username,
        headerRenderer: CustomHeader
    },
    {
        id: 2,
        field: 'gender',
        label: 'Gender',
    },
    {
        id: 3,
        field: 'last_visited',
        label: 'Last Visited',
        sort: ({ a, b, isAscending }) => {
            let aa = a.split('/').reverse().join(),
                bb = b.split('/').reverse().join();
            return aa < bb ? isAscending ? -1 : 1 : (aa > bb ? isAscending ? 1 : -1 : 0);
        }
    },
    {
        id: 4,
        field: 'test',
        label: 'Score',
        getValue: ({ value }) => value.x + value.y
    },
    {
        id: 5,
        field: 'email',
        label: 'Email',
    },
    {
        id: 6,
        field: 'country_code',
        label: 'Country Code',
    },
    {
        id: 7,
        field: 'phone',
        label: 'Phone Number',
    }
];

const ShowApplicantsTable = () => {
    return (
        <div className='container mt-2' > 
            <GridTable columns={columns} rows={rows} />
        </div>
    );
};

export default ShowApplicantsTable;