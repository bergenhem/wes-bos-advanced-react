import PropTypes from 'prop-types';
import Header from './Header';

export default function Page({ children, cool }) {
  return (
    <>
      <Header></Header>
      <h2>I am the page component</h2>
      <h3>{cool}</h3>
      {children}
    </>
  );
}

Page.prototype = {
  cool: PropTypes.string,
  children: PropTypes.any
}
