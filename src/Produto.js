import React, {useContext} from 'react'
import { GlobalContext } from './GlobalContext'
import { Button } from 'react-bootstrap'

const Produto = () => {

	const globalContext = useContext(GlobalContext)

	return (
		<div>
			Produto: {globalContext.count}
			{globalContext.data.map(p => <li key={p.id} >{p.nome}</li>)}
			<Button onClick={() => globalContext.cleanData()}>adicionar</Button>
		</div>
	)
}

export default Produto