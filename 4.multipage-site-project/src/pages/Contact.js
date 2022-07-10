import {useLocation} from 'react-router-dom'


export default function Contact() {
  const queryString = useLocation().search

  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get('name')




  return (
    <div>
        <h2>Hey {name}, Contact to us here...</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla hendrerit
        nisl non orci placerat pretium. Aenean imperdiet pellentesque sem eu
        sagittis. Nulla quis purus volutpat, cursus risus ac, faucibus neque.
        Duis turpis lacus, scelerisque ac leo vel, laoreet elementum diam. Cras
        eros ipsum, pulvinar eget justo nec, efficitur consectetur urna.
      </p>
    </div>
  )
}
