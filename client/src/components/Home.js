import React from 'react';
import { Button, Table } from 'react-bootstrap';
import Tasks from './Tasks';

const Home = () => {
  return (
    <>
      <div style={{ margin: '10rem' }}>
        <Table striped bordered hover size='sm'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {Tasks && Tasks.length > 0
              ? Tasks.map((item) => {
                  return (
                    <tr>
                      <td>{item.Name}</td>
                      <td>{item.Status}</td>
                    </tr>
                  );
                })
              : 'No Tasks Available'}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Home;
