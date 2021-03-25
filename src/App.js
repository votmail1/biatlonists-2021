import './App.css';
import {data} from './champion-ship-results.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from "react-bootstrap";
import {useState} from "react";


function App() {

    const [list, setList] = useState(Object.values(data))

    const table = (Object.keys(list)).map(key => (
        <tr key={list[key].placement}>
            <td>{list[key].placement}</td>
            <td>{list[key].name}</td>
            <td>{list[key].hits}</td>
            <td>{list[key].shootSpeed}</td>
            <td>{list[key].time}</td>
        </tr>
    ))

    const sortBy = (x) => {
        let arr = [...list]
        if (x === "name" || x === "placement" || x === "time") {
            arr.sort((a, b) => a[x] > b[x] ? 1 : -1);
        } else arr.sort((a, b) => a[x] > b[x] ? -1 : 1);
        setList(Object.values(arr))
    }

    return (

        <div className="App">
            <Table striped bordered hover variant="table table-dark table-striped table-hover">
                <tr className=''>
                    <th onClick={() => sortBy('placement')}>Позиция</th>
                    <th onClick={() => sortBy('name')}>Имя</th>
                    <th onClick={() => sortBy('hits')}>Попадания</th>
                    <th onClick={() => sortBy('shootSpeed')}>Скорострельность</th>
                    <th onClick={() => sortBy('time')}>Время</th>
                </tr>
                <tbody>
                {table}
                </tbody>
            </Table>
        </div>
    );
}

export default App