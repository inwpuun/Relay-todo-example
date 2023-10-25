import './css/style.css'
import logo_dark from './../public/images/icon-sun.svg'
import logo_light from './../public/images/icon-moon.svg'
import TodoList from './components/TodoList'
import { useEffect, useState } from 'react'
import { graphql } from 'relay-runtime'
import { useLazyLoadQuery } from 'react-relay'
import type {AppQuery as AppQueryType} from './__generated__/AppQuery.graphql';

const AppQuery = graphql`
  query AppQuery {
    ...TodoListFragment 
  }
`;

function App() {
  const [theme, setTheme] = useState('light')
  const data = useLazyLoadQuery<AppQueryType>(AppQuery, {fetchPolicy: 'network-only'});

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    console.log(theme)
  }, [theme])

  function switchTheme() {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <>
      <div className="top">
        <h1>T O D O</h1>
        <img src={theme == 'light' ? logo_light : logo_dark} alt="logo" onClick={() => switchTheme()} />
      </div>
      <TodoList todos={data} />

    </>
  )
}

export default App

