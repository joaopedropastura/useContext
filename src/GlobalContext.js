import React, { useEffect, useState } from "react";

export const GlobalContext = React.createContext()

export const GlobalStorage = ({ children }) => {

	const [count, setCount] = useState(0)
	const [data, setData] = useState(null)


	useEffect(() => {
		fetch('https://ranekapi.origamid.dev/json/api/produto/')
			.then(response => response.json())
			.then((json) => setData(json))
	}, [])

	const addUm = () => {
		setCount((count) => count + 1)
	}

	const adDois = () => {
		setCount((count) => count + 2)
	}

	const cleanData = () => {
		setData(null)
	}

	const value = {
		count,
		data,
		addUm,
		adDois,
		cleanData
	}

	return(
		<GlobalContext.Provider value={value}>
			{children}
		</GlobalContext.Provider>
	)
}