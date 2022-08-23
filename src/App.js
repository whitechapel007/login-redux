import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { getPosts } from "./features/user/dataSlice";

import Table from "react-bootstrap/Table";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
    // eslint-disable-next-line
  }, []);

  const { loading, posts } = useSelector((state) => state.posts);

  if (loading) {
    return <div class="loader"></div>;
  }
  //   console.log(posts.data.states);

  return (
    <div>
      {posts?.data?.states.map((item, id) => (
        <div key={item.id} className="py-2 px-5">
          <Table
            striped
            bordered
            hover
            className="p-2 "
            size="sm"
            responsive="sm"
          >
            <thead>
              <tr>
                <th> number </th>
                <th> state </th>
                <th> confirmed Cases</th>
                <th> cases on Admission</th>
                <th> discharged </th>
                <th> death </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{id + 1}</th>
                <td>{item.state}</td>
                <td>{item.confirmedCases}</td>
                <td>{item.casesOnAdmission}</td>
                <td>{item.discharged}</td>
                <td>{item.death}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      ))}
    </div>
  );
}

export default App;
