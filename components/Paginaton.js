import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

export default function Pagination({
  prevText = '',
  prevUrl = '',
  nextText = '',
  nextUrl = '',
}) {
  return (
    <ul>
      {prevText && prevUrl && (
        <li>
          <Link href={prevUrl}>
            <a>
              <FontAwesomeIcon icon={faChevronLeft} />
              <span>{prevText}</span>
            </a>
          </Link>
        </li>
      )}
      {prevText && nextUrl && (
        <li>
          <Link href={nextUrl}>
            <a>
              <span>{nextText}</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </Link>
        </li>
      )}
    </ul>
  )
}
