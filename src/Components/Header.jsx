import { 
  MdEditDocument, 
  MdRemoveRedEye 
} from 'react-icons/md';
import { FaPencilAlt } from 'react-icons/fa';

export default function Header(props) {
  return (
    <header>
      <div className='header--logo'>
        <div>CV Application</div>
        <MdEditDocument />
      </div>
      <div
        className='header--right'
        onClick={() => props.setPreview(prevState => !prevState)}
      >
        {props.preview ? <FaPencilAlt /> : <MdRemoveRedEye />}
      </div>
    </header>
  )
}