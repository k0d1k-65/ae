import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function SamplePage1 () {
  const navigate = useNavigate();

  return (
    <>
      <h3>Sample Page 1</h3>
      <Link to="/">＞ HOME</Link>
      <Link to="/page1">＞ SAMPLE1</Link>

      <button onClick={() => navigate("/page1")}>Sample Page1</button>
    </>
  );
}
