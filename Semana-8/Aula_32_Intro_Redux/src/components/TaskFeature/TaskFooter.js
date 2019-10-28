import React from 'react'
import styled from 'styled-components'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'


function TaskFooter(){
	return(
		<CardActions>
			<Typography>
				Marcar todas como completas
			</Typography>
			<FormGroup row>
				<FormControlLabel
				 control={<Checkbox icon={<Button size='small'>Todas</Button>} 
				 checkedIcon={<Button variant="outlined" size='small' >Todas</Button>}/>}  
				/>
				<FormControlLabel
				 control={<Checkbox icon={<Button size='small'>Pendentes</Button>} 
				 checkedIcon={<Button variant="outlined" size='small' >Pendentes</Button>}/>}  
				/>
				<FormControlLabel
				 control={<Checkbox icon={<Button size='small'>Completas</Button>} 
				 checkedIcon={<Button variant="outlined" size='small'>Completas</Button>}/>}  
				/>
			</FormGroup>
			<Typography>
				Remover todas completas
			</Typography>
		</CardActions>
	)
}

export default TaskFooter;