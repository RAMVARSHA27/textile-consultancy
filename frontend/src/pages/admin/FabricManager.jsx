// src/pages/admin/FabricManager.jsx
import React from 'react';

const FabricManager = () => {
  return (
    <div className="fabric-manager">
      <h2>Manage Fabrics</h2>
      <div className="add-fabric-form">
        <input type="text" placeholder="Fabric Name" />
        <input type="text" placeholder="Fabric Category" />
        <button>Add Fabric</button>
      </div>
      <div className="fabrics-list">
        <h3>Fabrics List</h3>
        <table>
          <thead>
            <tr>
              <th>Fabric Name</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cotton</td>
              <td>Trending</td>
              <td><button>Edit</button> <button>Delete</button></td>
            </tr>
            <tr>
              <td>Silk</td>
              <td>Premium</td>
              <td><button>Edit</button> <button>Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FabricManager;
