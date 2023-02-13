import './Footer.scss';

function Footer(props) {
  return (
    <footer className={`Footer Footer--${props.theme}`}>
        Thank you for reading.
    </footer>
  )
}

export default Footer