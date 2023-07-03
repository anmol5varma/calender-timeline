import './App.css';
import dayjs from 'dayjs';
import Timeline from './Timeline';
import Input from './Input';
import { useState } from 'react';

const groups = [{ id: 1, title: 'group 1' }, { id: 2, title: 'group 2' }]

const items = [
  {
    id: 1,
    group: 1,
    title: 'item 1',
    start_time: dayjs.unix(1688034000).valueOf(),
    end_time: dayjs.unix(1688428799).valueOf()
  },
  {
    id: 2,
    group: 2,
    title: 'item 2',
    start_time: dayjs.unix(1688169600).valueOf(),
    end_time: dayjs.unix(1688860799).valueOf()
  },
  {
    id: 3,
    group: 1,
    title: 'item 3',
    start_time: dayjs.unix(1688515200).valueOf(),
    end_time: dayjs.unix(1688947199).valueOf()
  }
]

function App() {
  const [tz, setTz] = useState('Asia/Calcutta')
  const handleSubmit = (newTz) => {
    dayjs.tz.setDefault(newTz);
    setTz(newTz)
  }

  const renderTime = () => {
    const now = dayjs().tz(tz);
    return now.format("YYYY-MM-DD HH:mm:ss");
  };

  return (
    <div className="App">
      <Input onSubmit={handleSubmit} />
      <Timeline items={items} groups={groups} tz={tz} />
      <p>Current time: {renderTime()}</p>
    </div>
  );
}

export default App;
