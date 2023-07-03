import dayjs from 'dayjs'
import ReactTimeline from 'react-calendar-timeline'
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment-timezone'

const Timeline = ({ items, groups, tz }) => {
    moment.tz.setDefault(tz)
    return (
        <div>
            Rendered by react!
            <ReactTimeline
                groups={groups}
                items={items}
                defaultTimeStart={dayjs.unix(1688000000)}
                defaultTimeEnd={dayjs.unix(1689000000)}
                timeSteps={{
                    second: 1,
                    minute: 1,
                    hour: 1,
                    day: 1,
                    month: 1,
                    year: 1
                  }}
                rend
            />
        </div>
    )
}

export default Timeline