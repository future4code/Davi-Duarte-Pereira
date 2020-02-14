import React, {Fragment} from 'react'
import MomentUtils from '@date-io/moment'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import { connect } from 'react-redux'
import { setBirthdate } from '../../actions/date'
import moment from 'moment'


function DatePicker(props) {

  const [selectedDate, setSelectedDate] = React.useState(new Date())

  const handleDateChange = date => {
    setSelectedDate(date)
    const treatedDate = moment(date).format("DD/MM/YYYY")
    console.log(treatedDate)
    props.setDate(treatedDate)
  }

  return (
    <Fragment>
      <MuiPickersUtilsProvider utils={MomentUtils}>
          <KeyboardDatePicker
            margin="normal"
            label="Your birth date"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
      </MuiPickersUtilsProvider>
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  date: state.dateForm.birthdate
})

const mapDispatchToProps = (dispatch) => ({
  setDate: (date) => dispatch(setBirthdate(date)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker)