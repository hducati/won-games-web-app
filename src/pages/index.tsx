import Home from 'templates/Home'

export default function Index(props: any) {
  return <Home {...props} />
}

export function getStaticProps() {
  return {
    props: {
      heading: 'OLÁ!!!!!!'
    }
  }
}
