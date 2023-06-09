import { useState } from "react";
import FullCalendar, { formatDate } from '@fullcalendar/react'

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list';

import { 
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme
} from "@mui/material";

import Header from '../../components/Header'
import { tokens } from "../../theme";

const Calendar = () => {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [currentEvent, useCurrentEvent] = useState([])

  return (
    <div>index</div>
  )
}

export default Calendar