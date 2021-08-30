import './pallet.css';
import File from './file';
import {usePallet} from '../hooks';

export default function Pallet() {
  const [files] = usePallet();
  const render = files.length !== 0;
  return (
    <>
    {
      render?
      <div className='pallet'>
        {files.map(i=><File key={i} name={i} />)}
      </div>:
      <></>
    }
    </>
  );
}