import React, { FunctionComponent, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

type RouteParams = {
  pizza?: string
}

type Loading = {
  readonly _type: 'loading'
  loading: boolean
}

type ErrorRes = {
  readonly _type: 'error'
  error: string
}

type Response = {
  readonly _type: 'response'
  response: string
}

type FetchResponse = Loading | Response | ErrorRes

const useFetchDiverso = (path: string): FetchResponse => {
  const [error, setError] = useState<string | null>(null)
  const [response, setResponse] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const chiamataServer = await (await fetch(path)).json()
        setResponse(chiamataServer)
      } catch (error) {
        setError(error.toString())
      }
    }
    fetchData()
  }, [path])

  if (response) {
    return { _type: 'response', response: response }
  }
  if (error) {
    return { _type: 'error', error: error }
  }

  return { _type: 'loading', loading: true }
}

const PizzaMenuDiverso: FunctionComponent = () => {
  const params = useParams<RouteParams>()
  const endpoint = process.env.REACT_APP_BACKEND_ENDPOINT
  const id = params.pizza

  const fetchData = useFetchDiverso(`${endpoint}/byname/${id}`)

  switch (fetchData._type) {
    case 'error':
      return <div>Il server ha risposto con errore {fetchData.error}</div>
    case 'response':
      return <div>Il server ha risposto {fetchData.response}</div>
    case 'loading':
      return <div>Loading...</div>
  }
}

export { PizzaMenuDiverso }
