import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import ConvertDate from './convert-date'
// scheduleが親要素でpropsが渡ってくる
export default function PostHeader({ title, subtitle, publish = '' }) {
  return (
    <div>
      <p>{subtitle}</p>
      <h1>{title}</h1>

      {publish && (
        <div>
          <FontAwesomeIcon icon={faClock} size="lg" />
          <ConvertDate dateISO={publish} />
        </div>
      )}
    </div>
  )
}
