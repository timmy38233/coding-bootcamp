import Icon from '../Icon/Icon.js';

import icon from './facts.svg';

function About() {
    return (
        <section className="facts">
            <Icon path={icon} />
            <div className="facts__info">
                <h2 className="info__heading">About me</h2>
                <table className="info__table">
                    <tbody>
                        <tr>
                            <td className="info__description">Name</td>
                            <td className="info__value">Tim</td>
                        </tr>
                        <tr>
                            <td className="info__description">Date of birth</td>
                            <td className="info__value">13.12.93</td>
                        </tr>
                        <tr>
                            <td className="info__description">Address</td>
                            <td className="info__value">
                                Musterstr. 1,
                                <br />
                                D-45131 Essen
                            </td>
                        </tr>
                        <tr>
                            <td className="info__description">Phone</td>
                            <td className="info__value">+49 157 8901234</td>
                        </tr>
                        <tr>
                            <td className="info__description">Mail</td>
                            <td className="info__value">
                                <a href="mailto:tim@example.com">tim@example.com</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default About;
