import { appAuthor } from '../globals/globalVariables'
import { getYear } from '../utilities/getDates';

const Footer = ( { copyright, author } ) => {
    return (
        <footer>
            <p>&copy; {copyright} {author}</p>
        </footer>
    );
}

Footer.defaultProps = {
    author: appAuthor,
    copyright: getYear()
}

export default Footer;