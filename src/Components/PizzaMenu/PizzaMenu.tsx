import React, { FunctionComponent, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

type RouteParams = {
  pizza?: string
}

type useFetchResponse = {
  loading: boolean
  error: string | null
  response: string | null
}
const useFetch = (path: string, increment: number): useFetchResponse => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [response, setResponse] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      /** definisci */
      console.log('mi monto ', increment)
      try {
        setLoading(true)
        const chiamataServer = await (await fetch(path)).json()
        setResponse(chiamataServer)
      } catch (error) {
        setError(error.toString())
      } finally {
        setLoading(false)
      }
    }
    fetchData() /**chiama */
    return () => console.log('mi smonto')
  }, [path, increment])

  return { loading: loading, error: error, response: response }
}

const PizzaMenuContent: FunctionComponent<{ increment: number }> = ({ increment }) => {
  const location = useLocation()
  const params = useParams<RouteParams>()
  const endpoint = process.env.REACT_APP_BACKEND_ENDPOINT
  const id = params.pizza
  const { loading, error, response } = useFetch(`${endpoint}/byname/${id}`, increment)

  return (
    <div>
      Questa è la pagina: {location.pathname}{' '}
      {Object.keys(params).length > 0 && params.pizza && <div>Gusto del giorno: {params.pizza}</div>}
      {loading && <div>Loading...</div>}
      {!loading && response && <div>Il server ha risposto {response}</div>}
      {!loading && error && <div>Il server ha risposto con errore {error}</div>}
    </div>
  )
}

const PizzaMenu: FunctionComponent = () => {
  const [increment, setIncrement] = useState(0)
  return (
    <div>
      <button onClick={() => setIncrement(increment + 1)}>cliccami</button>
      <div>Increment {increment}</div>
      <PizzaMenuContent increment={increment} />
    </div>
  )
}

export { PizzaMenu }
