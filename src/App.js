import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {data} from './champion-ship-results.json';
import './App.css'


function App() {
    const [list, setList] = useState(Object.values(data))
    const [marker, setMarker] = useState(Object.values(data))
    const table = (Object.keys(list)).map(key => (
        <tr key={list[key].placement}>
            <td className="pl-3">
                <div className='placement '>{list[key].placement}</div>
            </td>
            <td className="name pl-0">{list[key].name}</td>
            <td className="hits pl-0">{list[key].hits}</td>
            <td className="shootSpeed pl-0">{list[key].shootSpeed}</td>
            <td className="time pl-0">{list[key].time}</td>
        </tr>
    ))
    const sortBy = (x) => {
        const arr = [...list]
        const newMarker = {}
        if (x === "name" || x === "placement" || x === "time") {
            switch (marker[x]) {
                case "▲":
                    arr.sort((a, b) => a[x] > b[x] ? -1 : 1);
                    newMarker[x] = "▼"
                    break;
                default:
                    arr.sort((a, b) => a[x] > b[x] ? 1 : -1);
                    newMarker[x] = "▲"
                    break;
            }
        } else {
            switch (marker[x]) {
                case "▲":
                    arr.sort((a, b) => a[x] > b[x] ? 1 : -1);
                    newMarker[x] = "▼"
                    break;
                default:
                    arr.sort((a, b) => a[x] > b[x] ? -1 : 1);
                    newMarker[x] = "▲"
                    break;
            }
        }
        setList(Object.values(arr))
        setMarker(newMarker)
    }
    return (
        <div className="App">
            <div>
                <table className="table table-dark table-striped table-hover">
                    <tbody>
                    <tr>
                        <th className="placement pl-3" onClick={() => sortBy('placement')}>
                            <div className='placement'>
                                Позиция {marker.placement}
                            </div>
                        </th>
                        <th className="pl-0" onClick={() => sortBy('name')}>
                            <div className='name m-0'>
                                Имя {marker.name}
                            </div>
                        </th>
                        <th className="pl-0" onClick={() => sortBy('hits')}>
                            <div className='hits'>
                                Попадания {marker.hits}
                            </div>
                        </th>
                        <th className="pl-0" onClick={() => sortBy('shootSpeed')}>
                            <div className='shootSpeed'>
                                Скорострельность {marker.shootSpeed}
                            </div>
                        </th>
                        <th className="pl-0" onClick={() => sortBy('time')}>
                            <div className='time'>
                                Время {marker.time}
                            </div>
                        </th>
                    </tr>
                    </tbody>
                    <tbody>
                    {table}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App