import "./App.css";

function Table() {
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>unitPrice</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Akram</td>
            <td>21</td>
            <td>Male</td>
            <td>2019MEB1235</td>
          </tr>
          <tr>
            <td>Jason</td>
            <td>22</td>
            <td>Male</td>
            <td>2018CSB1234</td>
          </tr>
          <tr>
            <td>Dave</td>
            <td>20</td>
            <td>Female</td>
            <td>2019eeb1242</td>
          </tr>
          <tr>
            <td>Tom</td>
            <td>20</td>
            <td>Male</td>
            <td>2019mmb1235</td>
          </tr>
          <tr>
            <td>Stark</td>
            <td>20</td>
            <td>Male</td>
            <td>2019meb1290</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
